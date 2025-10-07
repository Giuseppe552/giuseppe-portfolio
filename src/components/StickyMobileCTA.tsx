"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div 
        className="mx-4 mb-4 h-16 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-between px-4 shadow-2xl"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* Left: Status indicator */}
        <div className="flex items-center gap-2">
          <span className="status-led"></span>
          <span className="text-sm text-gray-300 font-medium">Message to work</span>
        </div>

        {/* Right: Contact button */}
        <Link
          href="mailto:contact.giuseppe00@gmail.com?subject=Project%20inquiry"
          className="bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Contact for project inquiry"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}