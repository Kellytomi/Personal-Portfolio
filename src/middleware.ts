import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './config/site';

export function middleware(request: NextRequest) {
  // Get the current pathname
  const pathname = request.nextUrl.pathname;
  
  // Check for admin authentication (using cookies)
  const isAdmin = request.cookies.get('portfolio_admin_auth')?.value === 'true';
  
  // Check coming soon mode from cookie first, then fallback to config
  const comingSoonCookie = request.cookies.get('portfolio_coming_soon');
  
  // Determine if coming soon mode is active
  let comingSoonMode = false;
  
  // First check the cookie value
  if (comingSoonCookie?.value === 'true') {
    comingSoonMode = true;
  } 
  // Then fallback to environment variable if no cookie
  else if (comingSoonCookie === undefined) {
    comingSoonMode = process.env.NEXT_PUBLIC_COMING_SOON_MODE === 'true';
  }
  
  // Paths that are always allowed
  const allowedPaths = [
    '/coming-soon',
    '/contact',
    '/admin',
    '/api',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/images', // Allow direct access to images
  ];
  
  // Check if the current path is allowed or if it's already the coming-soon page
  const isAllowedPath = allowedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );
  
  // For debugging - will be visible in server logs
  console.log({
    pathname,
    isAdmin,
    comingSoonCookie: comingSoonCookie?.value,
    comingSoonMode,
    isAllowedPath,
  });
  
  // If coming soon mode is enabled, not on an allowed path, and not an admin, redirect to coming-soon
  if (comingSoonMode && !isAllowedPath && !isAdmin) {
    console.log('Redirecting to coming soon page');
    const url = request.nextUrl.clone();
    url.pathname = '/coming-soon';
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Configure which paths the middleware applies to
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}; 