import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './config/site';

export function middleware(request: NextRequest) {
  // Get the current pathname
  const pathname = request.nextUrl.pathname;
  
  // Check for admin authentication (using cookies)
  const isAdmin = request.cookies.get('portfolio_admin_auth')?.value === 'true';
  
  // Paths that are always allowed
  const allowedPaths = [
    '/coming-soon',
    '/contact',
    '/admin',
    '/api',
    '/_next',
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml'
  ];
  
  // Check if the current path is allowed or if it's already the coming-soon page
  const isAllowedPath = allowedPaths.some(path => 
    pathname === path || pathname.startsWith(`${path}/`)
  );
  
  // If coming soon mode is enabled, not on an allowed path, and not an admin, redirect to coming-soon
  if (siteConfig.comingSoonMode && !isAllowedPath && !isAdmin) {
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