import { NextRequest, NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Initialize the GA4 client with service account credentials
function getAnalyticsClient() {
  const credentials = process.env.GOOGLE_ANALYTICS_CREDENTIALS;

  if (!credentials) {
    throw new Error('GOOGLE_ANALYTICS_CREDENTIALS environment variable is not set');
  }

  const credentialsJson = JSON.parse(credentials);

  return new BetaAnalyticsDataClient({
    credentials: {
      client_email: credentialsJson.client_email,
      private_key: credentialsJson.private_key,
    },
  });
}

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const authCookie = request.cookies.get('analytics-auth');
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const propertyId = process.env.GA4_PROPERTY_ID;

    if (!propertyId) {
      return NextResponse.json(
        { error: 'GA4_PROPERTY_ID not configured' },
        { status: 500 }
      );
    }

    const analyticsDataClient = getAnalyticsClient();

    // Get date range from query params (default: last 7 days)
    const searchParams = request.nextUrl.searchParams;
    const daysAgo = parseInt(searchParams.get('days') || '7');

    // Fetch multiple reports in parallel
    const [
      overviewReport,
      trafficSourcesReport,
      topPagesReport,
      realtimeReport,
      deviceReport,
      locationReport
    ] = await Promise.all([
      // Overview metrics
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${daysAgo}daysAgo`, endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' },
          { name: 'newUsers' },
        ],
      }),

      // Traffic sources
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${daysAgo}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [
          { name: 'sessions' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10,
      }),

      // Top pages
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${daysAgo}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'pageTitle' }, { name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10,
      }),

      // Realtime active users
      analyticsDataClient.runRealtimeReport({
        property: `properties/${propertyId}`,
        metrics: [
          { name: 'activeUsers' },
        ],
      }),

      // Device category
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${daysAgo}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      }),

      // Geographic location
      analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [{ startDate: `${daysAgo}daysAgo`, endDate: 'today' }],
        dimensions: [{ name: 'country' }],
        metrics: [
          { name: 'activeUsers' },
        ],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 10,
      }),
    ]);

    // Format the data for easy consumption
    const data = {
      overview: {
        activeUsers: overviewReport[0]?.rows?.[0]?.metricValues?.[0]?.value || '0',
        sessions: overviewReport[0]?.rows?.[0]?.metricValues?.[1]?.value || '0',
        pageViews: overviewReport[0]?.rows?.[0]?.metricValues?.[2]?.value || '0',
        avgSessionDuration: overviewReport[0]?.rows?.[0]?.metricValues?.[3]?.value || '0',
        bounceRate: overviewReport[0]?.rows?.[0]?.metricValues?.[4]?.value || '0',
        newUsers: overviewReport[0]?.rows?.[0]?.metricValues?.[5]?.value || '0',
      },
      realtime: {
        activeUsers: realtimeReport[0]?.rows?.[0]?.metricValues?.[0]?.value || '0',
      },
      trafficSources: trafficSourcesReport[0]?.rows?.map(row => ({
        source: row.dimensionValues?.[0]?.value || 'Unknown',
        sessions: parseInt(row.metricValues?.[0]?.value || '0'),
        users: parseInt(row.metricValues?.[1]?.value || '0'),
      })) || [],
      topPages: topPagesReport[0]?.rows?.map(row => ({
        title: row.dimensionValues?.[0]?.value || 'Unknown',
        path: row.dimensionValues?.[1]?.value || '/',
        views: parseInt(row.metricValues?.[0]?.value || '0'),
        users: parseInt(row.metricValues?.[1]?.value || '0'),
      })) || [],
      devices: deviceReport[0]?.rows?.map(row => ({
        category: row.dimensionValues?.[0]?.value || 'Unknown',
        users: parseInt(row.metricValues?.[0]?.value || '0'),
        sessions: parseInt(row.metricValues?.[1]?.value || '0'),
      })) || [],
      locations: locationReport[0]?.rows?.map(row => ({
        country: row.dimensionValues?.[0]?.value || 'Unknown',
        users: parseInt(row.metricValues?.[0]?.value || '0'),
      })) || [],
      dateRange: `${daysAgo}daysAgo - today`,
    };

    return NextResponse.json(data);
  } catch (error) {
    console.error('Analytics API Error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch analytics data' },
      { status: 500 }
    );
  }
}
