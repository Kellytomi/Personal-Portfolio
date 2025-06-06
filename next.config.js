/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Temporarily disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable standalone output for now
  // output: 'standalone',
  experimental: {
    // Use absolute path for outputFileTracingRoot
    outputFileTracingRoot: path.resolve(__dirname),
  },
  // Optimize font loading
  optimizeFonts: true,
  // Ensure proper asset optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Font optimization settings
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Headers for font and asset optimization
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
