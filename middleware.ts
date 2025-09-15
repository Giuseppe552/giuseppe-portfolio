import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  const nonce = crypto.randomBytes(16).toString("base64");
  const response = NextResponse.next();

  // Content Security Policy (CSP): Strict, production-ready, no unsafe-inline/eval
  // Only allow trusted domains and dynamic nonce for inline scripts/styles
    response.headers.set("Content-Security-Policy",
      [
        "default-src 'self';",
        `script-src 'self'${nonce ? ` 'nonce-${nonce}'` : ''}
          'sha256-2bivjbhWhUbGj5hb5CoA3mK7cKy4bKdcJbMd5BHPwaY='
          'sha256-Kfksv9pKQ+0rL48m3vXcR8qP6A8T5QmK7b4b1wQw8gA='
          'sha256-4qE8nZohqI24JYh0mQ4n4iFyu9sZRfEywfBFwuTSY8s='
          'sha256-6HfH4M2E4jVskJW5szs='
          'sha256-k8yBbyshvdqnfS6rfnCzFcrbHfD8N2Q0evQbplfHwEs='
          'sha256-LcsuMlDkprrt6X2iLP4iYNhW0Nq8AbgtoZxVK3s='
          'sha256-5pmuzeEywVn6f1guSrLnvb+ac4Q0AHV4lUf600='
          'sha256-0BTR3NjvCV4Bq7dZ5a2pA2jxCcCEy1M3OT/LYKeo='
          'sha256-mj8t2X9RqSmWX4Zc5FVU0L7SJrIZ3pKEVHJ+3as='
          'sha256-yHPRb8kCz8X7evZ4GkMqtKqfa0erowbKfV8HqWAtA='
          'sha256-7na0ytBYX0B5WQm5Z1f4hB9p2tz+2Hi9R2pA='
          'sha256-C-EK0vCdzUrqMTfa5wDBpa7EosxZ7/jeu2JZ23a='
          'sha256-8Vj3S5Nx0H08HZxKOARIBUz4BUo4k6Wiospbrnsp=';`,
        `style-src 'self'${nonce ? ` 'nonce-${nonce}'` : ''}
          'sha256-Kfksv9pKQ+0rL48m3vXcR8qP6A8T5QmK7b4b1wQw8gA='
          'sha256-4qE8nZohqI24JYh0mQ4n4iFyu9sZRfEywfBFwuTSY8s=';`,
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