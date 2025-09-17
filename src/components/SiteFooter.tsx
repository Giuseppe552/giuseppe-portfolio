"use client";
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="mx-auto max-w-6xl px-4 text-xs text-zinc-500 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>© {new Date().getFullYear()} Giuseppe Giona</span>
          <div className="bg-slate-800 p-2 rounded-lg flex space-x-2">
            <a
              href="https://www.linkedin.com/in/giuseppe552/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="/icons/linkedin.png"
                alt="LinkedIn"
                className="h-6 w-6 bg-white rounded-full p-1"
              />
            </a>
            <a
              href="https://github.com/Giuseppe552"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/icons/github.png"
                alt="GitHub"
                className="h-6 w-6 bg-white rounded-full p-1"
              />
            </a>
            <a
              href="mailto:contact.giuseppe00@gmail.com"
              aria-label="Email"
            >
              <img
                src="/icons/email.png"
                alt="Email"
                className="h-6 w-6 bg-white rounded-full p-1"
              />
            </a>
          </div>
        </div>
        <span className="font-mono">v1.2 • built with React</span>
      </div>
    </footer>
  );
}
