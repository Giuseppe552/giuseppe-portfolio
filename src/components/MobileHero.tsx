"use client";

import Link from "next/link";

export default function UnifiedHero() {
  return (
    <section className="relative isolate overflow-hidden py-8 px-4">
      {/* Background image layer */}
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Skyline image */}
        <div className="
          absolute inset-0
          bg-[url('/homepage.png')] bg-cover
          bg-center md:bg-[position:55%_center]
          opacity-40 md:opacity-50
          will-change-transform
        " />
        {/* Darken edges + keep left-center readable for headline */}
        <div className="
          absolute inset-0
          bg-gradient-to-r
          from-black/70 via-black/40 to-black/80
          pointer-events-none
        " />
        {/* Soft vignette focused toward center; leaves left-center negative space */}
        <div className="
          absolute inset-0
          [mask-image:radial-gradient(1200px_600px_at_35%_40%,_black,_transparent)]
          pointer-events-none
        " />
      </div>
      
      <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-4xl text-center">
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-6">
          <span className="status-led"></span>
          <span className="text-gray-300">Available for projects</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-glow mb-4 font-bold leading-tight tracking-tight text-slate-100">
          <span 
            className="block"
            style={{ 
              fontSize: 'clamp(28px, 8vw, 48px)',
              lineHeight: '1.1'
            }}
          >
            I design & build{" "}
          </span>
          <span 
            className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            style={{ 
              fontSize: 'clamp(28px, 8vw, 48px)',
              lineHeight: '1.1'
            }}
          >
            clean,
          </span>
          <span 
            className="block"
            style={{ 
              fontSize: 'clamp(28px, 8vw, 48px)',
              lineHeight: '1.1'
            }}
          >
            production-ready software.
          </span>
        </h1>

        {/* Description */}
        <p 
          className="mb-8 text-gray-400 leading-relaxed"
          style={{ 
            fontSize: 'clamp(16px, 4vw, 20px)',
            lineHeight: '1.5'
          }}
        >
          Performance and security with clear handover. I ship small projects 
          frequently and document what works.
        </p>

        {/* Primary CTA */}
        <Link 
          href="/blog" 
          className="inline-block px-6 mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-black font-bold rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          style={{
           
            fontSize: 'clamp(16px, 3vw, 18px)',
            
          }}
          aria-label="View the blog"
        >
          View the blog ↗
        </Link>

        {/* Secondary quick actions */}
        <div className="flex justify-center gap-4 mb-4">
          <Link
            href="mailto:contact.giuseppe00@gmail.com"
            className="border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 rounded-xl flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            style={{
              height: 'clamp(48px, 10vw, 56px)',
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              width: '100px'
            }}
            aria-label="Send email"
          >
            Email
          </Link>
          <Link
            href="https://github.com/Giuseppe552"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 rounded-xl flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            style={{
              height: 'clamp(48px, 10vw, 56px)',
              fontSize: 'clamp(16px, 3.5vw, 18px)',
              width: '100px'
            }}
            aria-label="View GitHub profile"
          >
            GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}