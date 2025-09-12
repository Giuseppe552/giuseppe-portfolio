// next.config.mjs
/** @type {import('next').NextConfig} */

// Adjust these if you use external scripts/fonts/analytics
const csp = `
  default-src 'self';
  base-uri 'self';
  object-src 'none';
  frame-ancestors 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self' data:;
  connect-src 'self' https://*.vercel.sh https://*.vercel-insights.com;
  frame-src https://www.youtube.com https://player.vimeo.com;
  form-action 'self';
`.replace(/\s{2,}/g, ' ').trim();

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
    ];
  },
};

export default nextConfig;
