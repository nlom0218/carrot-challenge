import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'specials-images.forbesimg.com',
      },
      {
        protocol: 'http',
        hostname: 'specials-images.forbesimg.com',
      },
      {
        protocol: 'https',
        hostname: 'undefined',
      },
    ],
  },
};

export default nextConfig;
