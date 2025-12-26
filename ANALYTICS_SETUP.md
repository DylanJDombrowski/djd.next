# Analytics Dashboard Setup Guide

This guide will help you set up the custom analytics dashboard for your website.

## Features

- 📊 Real-time visitor tracking
- 📈 Traffic source analysis (where visitors come from)
- 🌍 Geographic distribution
- 📱 Device breakdown
- 🔒 Password-protected access (no backend needed)
- 🖥️ Mac desktop widget for at-a-glance metrics
- 📅 Flexible date ranges (24h, 7d, 30d, 90d)
- 🔄 Auto-refresh every 5 minutes

## Prerequisites

1. Google Analytics 4 property set up for your website
2. Google Cloud Platform account

## Setup Instructions

### Step 1: Create Google Analytics Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Analytics Data API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Analytics Data API"
   - Click "Enable"

4. Create a service account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Give it a name like "analytics-dashboard"
   - Click "Create and Continue"
   - Skip optional steps and click "Done"

5. Create a service account key:
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Choose "JSON" format
   - Download the JSON file

### Step 2: Grant Service Account Access to GA4

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to Admin (bottom left)
3. In the **Property** column, click "Property Access Management"
4. Click the "+" button in top right
5. Add the service account email (found in the JSON file: `client_email`)
6. Assign "Viewer" role
7. Click "Add"

### Step 3: Get Your GA4 Property ID

1. In Google Analytics Admin, go to "Property Settings"
2. Copy your **Property ID** (format: `123456789`)

### Step 4: Configure Environment Variables

Add these to your `.env.local` file (create it if it doesn't exist):

```bash
# Analytics Dashboard Password (choose a strong password)
ANALYTICS_PASSWORD=your-secure-password-here

# GA4 Property ID (from Step 3)
GA4_PROPERTY_ID=123456789

# Google Analytics Credentials (from Step 1)
# Copy the ENTIRE contents of the JSON file you downloaded
GOOGLE_ANALYTICS_CREDENTIALS='{"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n","client_email":"analytics-dashboard@your-project.iam.gserviceaccount.com","client_id":"...","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"..."}'
```

**Important**: The `GOOGLE_ANALYTICS_CREDENTIALS` value must be the entire JSON object as a single-line string wrapped in single quotes.

### Step 5: Deploy to Vercel

1. Add the environment variables in Vercel:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all three variables from Step 4
   - Make sure they're available for Production, Preview, and Development

2. Redeploy your site

### Step 6: Access Your Dashboard

1. Visit `https://yoursite.com/analytics`
2. Enter the password you set in `ANALYTICS_PASSWORD`
3. You're in! The dashboard will auto-refresh every 5 minutes

## Using the Mac Desktop Widget

The widget provides a beautiful, at-a-glance view of your analytics right on your desktop.

### Setup Options

#### Option 1: As a Web Page (Recommended)
1. Visit `https://yoursite.com/widgets/analytics-widget.html`
2. On first load, enter:
   - **Your Site URL**: `https://yoursite.com`
   - **Analytics Password**: Your `ANALYTICS_PASSWORD`
3. Bookmark the page for easy access

#### Option 2: As a Desktop Widget (Mac)
1. Download the widget file from `https://yoursite.com/widgets/analytics-widget.html`
2. Save it to your computer (e.g., `~/Desktop/analytics-widget.html`)
3. Open with your browser
4. Enter your site URL and password on first launch
5. For a persistent widget:
   - **Chrome/Edge**: Use "Create Shortcut" and enable "Open as window"
   - **Safari**: Add to Dock or use as a web app

The widget will:
- Auto-refresh every 2 minutes
- Remember your credentials (stored locally)
- Show real-time active users
- Display today's key metrics
- List top traffic sources

## Dashboard Features

### Metrics Displayed

- **Real-time Active Users**: Live count of current visitors
- **Total Users**: Unique visitors in selected time range
- **Sessions**: Number of visits
- **Page Views**: Total pages viewed
- **Average Session Duration**: How long visitors stay
- **Bounce Rate**: Percentage of single-page visits
- **Pages per Session**: Average pages viewed per visit

### Visualizations

- **Traffic Sources Chart**: Bar chart showing where visitors come from (direct, Google, social media, etc.)
- **Device Breakdown**: Pie chart of desktop vs mobile vs tablet usage
- **Top Pages Table**: Most visited pages with view counts
- **Geographic Distribution**: Top countries by visitor count

### Controls

- **Date Range Selector**: Choose 24h, 7d, 30d, or 90d
- **Auto-refresh Toggle**: Enable/disable automatic updates
- **Refresh Now**: Manually refresh data

## Troubleshooting

### "Analytics password not configured" error
- Ensure `ANALYTICS_PASSWORD` is set in your environment variables
- Redeploy your application

### "GA4_PROPERTY_ID not configured" error
- Add your GA4 Property ID to environment variables
- Redeploy your application

### "Failed to fetch analytics data" error
- Verify service account has access to your GA4 property
- Check that the credentials JSON is properly formatted (single-line string)
- Ensure Google Analytics Data API is enabled in your GCP project

### Widget won't authenticate
- Verify your site URL doesn't have a trailing slash
- Clear browser cookies and try again
- Check that your password matches `ANALYTICS_PASSWORD` exactly

### No data showing
- Wait 24-48 hours after setting up GA4 for data to accumulate
- Verify GA4 is tracking (check in Google Analytics directly)
- Ensure your service account has "Viewer" role in GA4

## Security Notes

- The analytics dashboard is password-protected via serverless middleware
- Password is stored in environment variables (never in code)
- Session cookie expires after 30 days
- All API requests require authentication
- Widget stores credentials in browser localStorage (local only, never transmitted except during auth)

## Customization

### Change Auto-refresh Interval

**Dashboard** (`src/app/analytics/page.tsx`):
```javascript
// Line ~69 - Change 5 * 60 * 1000 to your desired milliseconds
const interval = setInterval(() => {
  fetchData();
}, 5 * 60 * 1000); // 5 minutes
```

**Widget** (`public/widgets/analytics-widget.html`):
```javascript
// Line ~318 - Change 2 * 60 * 1000 to your desired milliseconds
setInterval(updateWidget, 2 * 60 * 1000); // 2 minutes
```

### Add Custom Metrics

Edit `src/app/api/analytics/data/route.ts` to add more GA4 metrics. See [GA4 API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema) for available options.

### Customize Widget Appearance

Edit `public/widgets/analytics-widget.html` - all styles are in the `<style>` section.

## Need Help?

If you run into issues:
1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your service account has proper permissions
4. Check that GA4 is collecting data

Enjoy your analytics dashboard! 📊
