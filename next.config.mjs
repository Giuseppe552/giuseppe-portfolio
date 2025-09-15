// next.config.mjs
/** @type {import('next').NextConfig} */


const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // ...existing code...
};

export default nextConfig;
