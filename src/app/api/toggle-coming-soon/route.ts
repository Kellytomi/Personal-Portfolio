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
    
    // Store the setting in a cookie
    const cookieStore = cookies();
    cookieStore.set('portfolio_coming_soon', enabled ? 'true' : 'false', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    
    return NextResponse.json({ success: true, enabled });
  } catch (error) {
    console.error('Error updating coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 