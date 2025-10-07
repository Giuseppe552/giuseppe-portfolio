import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethics, Values & Responsible Use | Giuseppe Giona",
  description: "Giuseppe Giona's ethics and responsible-use statement: educational intent, lawful good-citizen pledge, research context, positive values, and how to contact for concerns.",
  openGraph: {
    title: "Ethics, Values & Responsible Use | Giuseppe Giona", 
    description: "Educational intent, good-citizen pledge, security tooling context, and how to contact for concerns or takedowns.",
    url: "https://giuseppegiona.com/ethics",
    type: "website",
  },
};

export default function EthicsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Giuseppe Giona",
    givenName: "Giuseppe",
    familyName: "Giona",
    url: "https://giuseppegiona.com",
    sameAs: [
      "https://github.com/Giuseppe552",
      "https://www.linkedin.com/in/giuseppegiona/",
    ],
    knowsAbout: [
      "Systems Engineering",
      "Security Automation",
      "Clean Code",
      "DevOps",
      "Data Tools",
    ],
    description: "Law-abiding engineer focused on helpful, educational content and ethical technology.",
  };

  return (
    <main className="min-h-screen relative">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10">
        {/* Header Spacer */}
        <div className="h-20" />
        
        {/* Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="glass rounded-2xl p-8 md:p-12">
            {/* Header */}
            <div className="border-b border-white/10 pb-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Ethics, Values & <span className="text-emerald-400">Responsible Use</span>
              </h1>
              <p className="text-zinc-400 font-mono">
                Last updated: <span className="text-emerald-400">07 October 2025</span>
              </p>
              <p className="mt-4 text-zinc-300">
                This page explains my intent, standards, and how I expect content on this site to be used. 
                If you have any concerns, please reach out — I&apos;m friendly and I will listen.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="space-y-8">
                {/* Good-Citizen Pledge */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Good-Citizen Pledge
                  </h2>
                  
                  <div className="p-6 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-sm mt-1">✓</span>
                        <p className="text-zinc-300 text-sm">
                          I am a law-abiding person and a respectful collaborator.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-sm mt-1">✓</span>
                        <p className="text-zinc-300 text-sm">
                          I build technology to help people — improving safety, clarity, and productivity.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-sm mt-1">✓</span>
                        <p className="text-zinc-300 text-sm">
                          I oppose harassment, misuse, or harm. I refuse unlawful or unethical work.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-400 font-mono text-sm mt-1">✓</span>
                        <p className="text-zinc-300 text-sm">
                          I communicate openly, act in good faith, and correct mistakes quickly when they occur.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Educational & Research Intent */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Educational & Research Intent
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      All technical material on this Site — including posts, code snippets, and project write-ups — 
                      is provided for <span className="text-emerald-400 font-semibold">educational</span> and{" "}
                      <span className="text-emerald-400 font-semibold">portfolio</span> purposes to demonstrate 
                      research and engineering ability.
                    </p>
                    
                    <div className="mt-4 p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
                      <p className="text-red-300 font-mono text-sm">
                        <strong>Important:</strong> Content is not a step-by-step guide to do anything harmful, 
                        and must not be repurposed for unlawful activity.
                      </p>
                    </div>
                    
                    <p className="text-zinc-300 mt-4">
                      If a topic relates to security, it is framed to{" "}
                      <span className="text-cyan-400 font-semibold">increase</span> safety, hardening, and awareness. 
                      Any tooling is intended for lawful testing on systems you own or have explicit permission to assess.
                    </p>
                  </div>
                </section>

                {/* Responsible Use */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Responsible Use: What&apos;s OK / Not OK
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-3 text-emerald-400">
                        ✓ Allowed / Encouraged
                      </h3>
                      <ul className="space-y-2 text-zinc-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">→</span>
                          <span>Learning and professional development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">→</span>
                          <span>Defensive security & privacy hygiene</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">→</span>
                          <span>Research on systems with permission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">→</span>
                          <span>Code review, benchmarking, refactoring</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-3 text-red-400">
                        ✗ Strictly Prohibited
                      </h3>
                      <ul className="space-y-2 text-zinc-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">×</span>
                          <span>Illegal access, exploitation, or data theft</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">×</span>
                          <span>Harassment, stalking, or doxxing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">×</span>
                          <span>Circumventing controls on systems you don&apos;t own</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 mt-1">×</span>
                          <span>Any use that violates law or rights of others</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl">
                    <p className="text-yellow-300 text-sm">
                      <strong>Your Responsibility:</strong> You are responsible for complying with your local laws 
                      and any contracts that apply to you. If you&apos;re unsure whether something is appropriate, 
                      do not proceed.
                    </p>
                  </div>
                </section>

                {/* About Me & Values */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    About Me & Core Values
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      I&apos;m <span className="text-emerald-400 font-semibold">Giuseppe Giona</span>, 
                      a friendly systems engineer with a mathematics background. I enjoy building clean, reliable tools 
                      that remove friction. People who work with me describe me as{" "}
                      <em className="text-cyan-400">positive, diligent, and calm under pressure</em>.
                    </p>
                    
                    <h4 className="text-emerald-400 font-semibold mb-3">I value:</h4>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span className="text-zinc-300">Clarity over cleverness</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        <span className="text-zinc-300">Security by default</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        <span className="text-zinc-300">Measurable performance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span className="text-zinc-300">Respectful communication</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        <span className="text-zinc-300">Small, well-documented steps</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Security Tooling Context */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Security Tooling Context
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      Any references to scanning, hardening, or verification exist to help owners assess their own systems 
                      and to promote good security hygiene.
                    </p>
                    
                    <div className="p-3 bg-orange-400/10 border border-orange-400/20 rounded-lg">
                      <p className="text-orange-300 text-sm font-mono">
                        <strong>Permission Required:</strong> Do not run tools on networks or devices without 
                        explicit written permission. When in doubt, get consent first.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Not Legal Advice */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Not Legal Advice; No Admission
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      Information on this Site is for general information only. It is not legal advice and should not be 
                      relied upon as such.
                    </p>
                    
                    <div className="p-3 bg-blue-400/10 border border-blue-400/20 rounded-lg">
                      <p className="text-blue-300 text-sm">
                        <strong>Important:</strong> Publishing research or educational material here is{" "}
                        <span className="text-blue-400 font-semibold">not</span> an admission of wrongdoing or intent; 
                        it reflects curiosity, craftsmanship, and a desire to help others learn safely.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact & Concerns */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Contact, Takedown & Concerns
                  </h2>
                  
                  <div className="p-6 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    <p className="text-emerald-300 mb-4">
                      If you believe something here is unclear, misused, or should be removed, please email{" "}
                      <a
                        href="mailto:contact.giuseppe00@gmail.com?subject=Ethics%20Inquiry"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors font-mono underline underline-offset-4"
                      >
                        contact.giuseppe00@gmail.com
                      </a>
                      . I aim to respond quickly and in good faith.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Link 
                        href="/privacy" 
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        href="/terms" 
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm transition-colors"
                      >
                        Terms of Service
                      </Link>
                      <Link 
                        href="/projects" 
                        className="px-4 py-2 bg-emerald-400/20 hover:bg-emerald-400/30 border border-emerald-400/40 text-emerald-300 rounded-lg text-sm transition-colors"
                      >
                        View Projects
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Footer Note */}
                <section>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-400 text-xs">
                      <strong>Note:</strong> Where security logging is enabled, basic IP/device signals may be processed 
                      to protect this Site. See{" "}
                      <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                        Privacy Policy
                      </Link>{" "}
                      for details.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}