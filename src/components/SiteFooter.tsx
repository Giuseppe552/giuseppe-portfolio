"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const version =
    process.env.NEXT_PUBLIC_APP_VERSION ??
    "v" + (process.env.NEXT_PUBLIC_GIT_SHA?.slice(0, 7) ?? "1.0");

  return (
    <footer className="glass border-t border-white/10 mt-20" role="contentinfo">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* About section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Giuseppe Giona — Home"
              className="inline-flex items-center gap-3 text-white hover:text-cyan-400 transition-colors group"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-cyan-400 group-hover:scale-110 transition-transform"
              >
                <path 
                  d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" 
                  fill="currentColor" 
                  opacity="0.8"
                />
                <path 
                  d="M12 7l3 1.5v4L12 14l-3-1.5v-4L12 7z" 
                  fill="currentColor" 
                />
              </svg>
              <span className="text-lg font-bold tracking-tight">
                Giuseppe Giona
              </span>
            </Link>
            
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-300">
              I build clean, security-minded web software and practical tools.
              Explore selected projects, notes, and ways to work together.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/giuseppegiona"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-hover text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 opacity-80"
                />
              </Link>
              <Link
                href="https://github.com/Giuseppe552"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-hover text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Image
                  src="/icons/github.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 opacity-80"
                />
              </Link>
              <Link
                href="mailto:contact.giuseppe00@gmail.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass-hover text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Image
                  src="/icons/email.png"
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 opacity-80"
                />
              </Link>
            </div>
          </div>

          {/* Navigation sections */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            {/* Site */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Site</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#stack" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Tech Stack
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/ethics" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    Ethics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">© {year} Giuseppe Giona. All rights reserved.</span>
            <span className="hidden sm:inline text-xs text-gray-500 opacity-60">
              Thank you for viewing the site! 🚀
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="status-led" title="Available for work"></span>
              <span className="text-xs text-gray-400">Available</span>
            </div>
            <span className="glass rounded-md px-2 py-1 font-mono text-xs border border-white/10 text-gray-300">
              {version}
            </span>
            <span className="hidden lg:inline-block text-xs text-gray-500">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
