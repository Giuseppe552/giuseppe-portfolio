import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  const response = NextResponse.next();

  // Content Security Policy (CSP): Relaxed for inline scripts/styles
  response.headers.set("Content-Security-Policy",
    [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline';",
      "style-src 'self' 'unsafe-inline';",
      "img-src 'self' data:;",
      "font-src 'self';",
      "connect-src 'self';",
      "frame-src 'none';",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';"
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

  // Pass nonce to app via cookie for use in layout.tsx
  response.cookies.set("nonce", nonce, {
    httpOnly: false,
    secure: true,
    sameSite: "strict",
    path: "/"
  });

  // Also set x-nonce header for SSR access if needed
  response.headers.set("x-nonce", nonce);

  return response;
}