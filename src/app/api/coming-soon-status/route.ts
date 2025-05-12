import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Read the setting from the cookie
    const cookieStore = cookies();
    const comingSoonCookie = cookieStore.get('portfolio_coming_soon');
    
    // Use the cookie value if available, otherwise default to the value in site config
    const enabled = comingSoonCookie 
      ? comingSoonCookie.value === 'true'
      : process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true';
    
    return NextResponse.json({ enabled, success: true });
  } catch (error) {
    console.error('Error reading coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 