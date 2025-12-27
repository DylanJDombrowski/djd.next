import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only protect /analytics routes
  if (request.nextUrl.pathname.startsWith('/analytics')) {
    // Skip protection for login page and API routes
    if (request.nextUrl.pathname === '/analytics/login' ||
        request.nextUrl.pathname.startsWith('/api/analytics')) {
      return NextResponse.next();
    }

    // Check for auth cookie
    const authCookie = request.cookies.get('analytics-auth');

    if (!authCookie || authCookie.value !== 'authenticated') {
      // Redirect to login page
      const loginUrl = new URL('/analytics/login', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/analytics', '/analytics/:path*'],
};
