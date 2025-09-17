import React from "react";
import Head from "next/head";
import Header from "./Header";

// Add TypeScript types for props
interface LayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="relative min-h-screen">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(14,165,233,0.18),transparent_60%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#0D1117] via-[#0B1524] to-[#0B1B2B]" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.10] [background-image:linear-gradient(transparent_95%,rgba(255,255,255,.07)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,.07)_96%)] [background-size:32px_32px]" />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;