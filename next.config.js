/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // Disable standalone output for now
  // output: 'standalone',
  experimental: {
    // Use absolute path for outputFileTracingRoot
    outputFileTracingRoot: path.resolve(__dirname),
  },
};

module.exports = nextConfig; 