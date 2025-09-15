import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CSP header removed for development/testing. No restrictions on scripts/styles.

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

  // ...existing code...

  return response;
}