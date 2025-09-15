import type { Metadata, Viewport } from "next";
import { cookies } from 'next/headers';
import "./globals.css";

export const metadata: Metadata = {
  title: "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
  description:
    "Giuseppe Giona is a systems engineer and security automation specialist with a mathematics background. Expert in building robust, scalable systems, cybersecurity, DevOps, and automation for businesses and developers. Discover resources, blog posts, and projects on clean code, privacy, and IT best practices. Serving clients worldwide in English and Italian.",
  metadataBase: new URL("https://giuseppegiona.com"),
  alternates: { canonical: "/", languages: { en: "/?lang=en", it: "/?lang=it" } },
  openGraph: {
    title: "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
    description:
      "Systems engineering, cybersecurity, DevOps, automation, clean code, privacy, IT best practices. English and Italian.",
    url: "https://giuseppegiona.com",
    siteName: "Giuseppe Giona",
    images: ["/og.png"],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  title: "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
  description: "Systems engineering, cybersecurity, DevOps, automation, clean code, privacy, IT best practices. English and Italian.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0EA5E9",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Giuseppe Giona Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
