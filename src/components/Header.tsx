"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/tools", label: "Tools" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main"
      >
        <Link href="/" className="text-white font-semibold tracking-wide">
          Giuseppe
        </Link>
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-slate-200 hover:text-teal-300 transition-colors ${
                  pathname === link.href ? "text-teal-400 underline underline-offset-8 decoration-2" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;