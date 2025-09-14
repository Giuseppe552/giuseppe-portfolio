import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export function middleware(request: NextRequest) {
  // Generate a secure nonce per request
  const nonce = crypto.randomBytes(16).toString("base64");
  const response = NextResponse.next();

  // Set a strong CSP header with nonce (for hydration and style/script security)
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com; style-src 'self' 'nonce-${nonce}'; object-src 'none'; base-uri 'self';`
  );

  // Pass nonce to your app via a cookie (readable in _document.tsx)
  response.cookies.set("nonce", nonce, {
    httpOnly: false, // Must be false so _document.tsx can read it!
    secure: true,
    sameSite: "strict",
    path: "/"
  });

  return response;
}
