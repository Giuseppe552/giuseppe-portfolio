// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import Aurora from "../components/Aurora";
import ModernHeader from "../components/Header";
import SiteFooter from "../components/SiteFooter";

// ── Local variable font (correct paths) ─────────────────────────────────────
const jetBrainsMono = localFont({
  src: [
    {
      path:
        "../../public/fonts/jetbrains-mono/variable/JetBrainsMono[wght].ttf",
      style: "normal",
      weight: "100 800",
    },
    {
      path:
        "../../public/fonts/jetbrains-mono/variable/JetBrainsMono-Italic[wght].ttf",
      style: "italic",
      weight: "100 800",
    },
  ],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title:
    "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
  description:
    "Giuseppe Giona is a systems engineer and security automation specialist with a mathematics background. Expert in building robust, scalable systems, cybersecurity, DevOps, and automation for businesses and developers. Discover resources, blog posts, and projects on clean code, privacy, and IT best practices. Serving clients worldwide in English and Italian.",
  metadataBase: new URL("https://giuseppegiona.com"),
  alternates: {
    canonical: "/",
    languages: { en: "/?lang=en", it: "/?lang=it" },
  },
  openGraph: {
    title:
      "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
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
    title:
      "Giuseppe Giona | Systems Engineer, Security Automation Expert, Clean Code Advocate",
    description:
      "Systems engineering, cybersecurity, DevOps, automation, clean code, privacy, IT best practices. English and Italian.",
    images: ["/og.png"],
  },
  keywords: [
    "giuseppe giona",
    "systems engineer",
    "cybersecurity",
    "automation",
    "devops",
    "clean code",
    "security",
    "privacy",
    "IT consulting",
    "python",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "mathematics",
    "data analysis",
    "freelancer",
    "consultant",
    "developer",
    "engineer",
  ],
  authors: [{ name: "Giuseppe Giona", url: "https://giuseppegiona.com" }],
  creator: "Giuseppe Giona",
  publisher: "Giuseppe Giona",
  robots: { index: true, follow: true },
  verification: { google: "your-google-verification-code" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f15" },
  ],
};

function SkipLink() {
  return (
    <Link
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cyan-500 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-black focus:shadow-lg"
    >
      Skip to content
    </Link>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Giuseppe Giona",
    url: "https://giuseppegiona.com",
    sameAs: [
      "https://github.com/Giuseppe552",
      "https://www.linkedin.com/in/giuseppegiona",
    ],
    logo: "https://giuseppegiona.com/apple-touch-icon.png",
  };

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Giuseppe Giona",
    url: "https://giuseppegiona.com",
    jobTitle: "Systems Engineer",
    worksFor: { "@type": "Organization", name: "Independent" },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Giuseppe Giona Portfolio",
    url: "https://giuseppegiona.com",
    inLanguage: "en-GB",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://giuseppegiona.com/search?q={query}",
      "query-input": "required name=query",
    },
  };

  return (
    <html lang="en" className={jetBrainsMono.variable}>
      <head>
        {/* Preload hero background image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/homepage.png"
          fetchPriority="high"
          imageSizes="100vw"
        />
        {/* JSON-LD (SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdOrganization, jsonLdPerson, jsonLdWebSite]),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Aurora />
        <SkipLink />
        <ModernHeader />
        <main id="main" role="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}