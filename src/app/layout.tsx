import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Giuseppe Giona — Systems & Security",
  description:
    "Mathematics grad building clean systems. Security-curious, automation-heavy. EN/ITA.",
  metadataBase: new URL("https://giuseppegiona.com"),
  alternates: { canonical: "/", languages: { en: "/?lang=en", it: "/?lang=it" } },
  openGraph: {
    title: "Giuseppe Giona — Systems & Security",
    description:
      "Clean systems, security mindset, automation. EN/ITA.",
    url: "https://giuseppegiona.com",
    siteName: "Giuseppe Giona",
    images: ["/og.png"],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giuseppe Giona — Systems & Security",
    description: "Clean systems, security mindset, automation.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
