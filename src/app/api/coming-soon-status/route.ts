import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Read the setting from the cookie
    const cookieStore = cookies();
    const comingSoonCookie = cookieStore.get('portfolio_coming_soon');
    
    // Read from environment variable
    const envValue = process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true';
    
    // Log what we found
    console.log('Coming soon status check:', {
      cookieValue: comingSoonCookie?.value,
      envValue
    });
    
    // Use the cookie value if available, otherwise default to the env variable
    const enabled = comingSoonCookie 
      ? comingSoonCookie.value === 'true'
      : envValue;
    
    return NextResponse.json({ enabled, success: true });
  } catch (error) {
    console.error('Error reading coming soon status:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 