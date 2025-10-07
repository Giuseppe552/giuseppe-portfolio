"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Premium hacker-aesthetic header:
 * - Glass morphism with scroll elevation
 * - Animated active link underlines
 * - Mobile drawer with enhanced UX
 * - Full accessibility and reduced motion support
 */

type NavItem = { href: string; label: string };

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const drawerRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement | null>(null);

  // Handle scroll elevation
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on ESC & outside click
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

    // Manage focus when opening\n  React.useEffect(() => {\n    if (open) {\n      firstLinkRef.current?.focus();\n    }\n  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href) || false;
  };

  return (
    <>
      <header
        className={`
          sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur-lg glass
          ${scrolled ? 'scroll-elevated' : ''}
        `}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to homepage"
              className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-cyan-400"
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
              <span className="text-sm font-semibold tracking-tight">
                Giuseppe Giona
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {NAV_LINKS.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      nav-link relative inline-flex h-10 items-center rounded-md px-3 text-sm font-medium 
                      transition-colors hover:text-cyan-400
                      ${active ? 'active text-cyan-400' : 'text-gray-300'}
                    `}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="ml-2 flex items-center gap-2">
                <Link
                  href="mailto:contact.giuseppe00@gmail.com"
                  className="btn-accent"
                >
                  Contact
                </Link>
                <Link
                  href="https://github.com/Giuseppe552"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </Link>
              </div>
            </nav>

            {/* Mobile: menu button */}
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md glass-hover text-gray-300 hover:text-cyan-400 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer - simple overlay dropdown */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="md:hidden"
        >
          {/* Compact Panel - fixed positioned overlay */}
          <div
            ref={drawerRef}
            className="fixed top-20 right-4 z-50 min-w-max glass p-4 shadow-xl border border-white/10 rounded-2xl"
          >
            <div className="mb-4">
              <span className="text-sm font-semibold text-white">Menu</span>
            </div>

            <nav className="space-y-1 mb-4" aria-label="Mobile primary">
              {NAV_LINKS.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    className={`
                      block rounded-md px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap
                      ${active
                        ? "bg-white/10 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="space-y-2">
              <Link
                href="mailto:contact.giuseppe00@gmail.com"
                className="btn-accent w-full text-center text-sm py-2"
              >
                Contact
              </Link>
              <Link
                href="https://github.com/Giuseppe552"
                className="btn-ghost w-full text-center text-sm py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}