import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { enabled } = body;
    
    if (typeof enabled !== 'boolean') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }
    
    // Store the setting in a cookie that is readable by middleware
    const cookieStore = cookies();
    cookieStore.set('portfolio_coming_soon', enabled ? 'true' : 'false', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false, // Allow JS access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    
    // Also set NEXT_PUBLIC_COMING_SOON_MODE via response header for immediate effect
    const response = NextResponse.json({ success: true, enabled });
    response.cookies.set('portfolio_coming_soon', enabled ? 'true' : 'false', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    
    return response;
  } catch (error) {
    console.error('Error updating coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 