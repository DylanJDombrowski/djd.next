import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Check against environment variable
    const correctPassword = process.env.ANALYTICS_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { success: false, message: 'Analytics password not configured' },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      // Create response with auth cookie
      const response = NextResponse.json({ success: true });

      // Set cookie that expires in 30 days
      response.cookies.set('analytics-auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    );
  }
}
