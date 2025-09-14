// next.config.mjs
/** @type {import('next').NextConfig} */

// Hardened CSP for production, dev-safe for development
import crypto from 'crypto';

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

function getCsp(nonce, isProd) {
  if (!nonce) nonce = '';
  if (isProd) {
    return `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; script-src 'self' https://www.googletagmanager.com 'nonce-${nonce}'; style-src 'self' 'nonce-${nonce}'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.vercel.sh https://*.vercel-insights.com; frame-src https://www.youtube.com https://player.vimeo.com; form-action 'self';`;
  } else {
  return `default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.vercel.sh https://*.vercel-insights.com; frame-src https://www.youtube.com https://player.vimeo.com; form-action 'self';`;
  }
}

const nextConfig = {
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
  async headers() {
    const isProd = process.env.NODE_ENV === 'production';
    const nonce = generateNonce();
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: getCsp(nonce, isProd) },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
