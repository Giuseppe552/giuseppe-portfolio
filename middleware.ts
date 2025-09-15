import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  const response = NextResponse.next();

  // Content Security Policy (CSP): Strict, production-ready, no unsafe-inline/eval
  // Only allow trusted domains and dynamic nonce for inline scripts/styles
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self';", // Only allow same-origin by default
  `script-src 'self' 'nonce-${nonce}';`, // Only allow scripts from self with nonce
  `style-src 'self' 'nonce-${nonce}';`, // Only allow styles from self with nonce
      "img-src 'self' data: https://trusted.cdn.com;", // Only allow images from self, data URIs, and trusted CDN
  "font-src 'self';", // Only allow fonts from self
      "connect-src 'self';", // Only allow XHR/fetch from self
      "object-src 'none';", // Prevent plugin/object embedding
      "base-uri 'self';", // Only allow base tag from self
      "form-action 'self';", // Only allow forms to submit to self
      "frame-ancestors 'none';" // Prevent clickjacking
    ].join(" ")
  );

  // Referrer Policy: Prevent leaking URLs to third parties
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // X-Content-Type-Options: Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // X-Frame-Options: Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // Cross-Origin Resource Policy (CORP): Prevent cross-origin resource leaks
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // HSTS: Force HTTPS, prevent SSL stripping
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

    // Permissions-Policy: Disable unused browser features
    response.headers.set("Permissions-Policy", "geolocation=(), camera=(), microphone=()");

    // COOP: Cross-Origin Opener Policy for isolation
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");

    // COEP: Cross-Origin Embedder Policy for isolation
    response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");

  // Pass nonce to app via cookie for use in _document.tsx
  response.cookies.set("nonce", nonce, {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    path: "/"
  });

  return response;
}