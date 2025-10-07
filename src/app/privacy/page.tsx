import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Giuseppe Giona",
  description: "Privacy policy for giuseppegiona.com - How we collect, use, and protect your personal data.",
  openGraph: {
    title: "Privacy Policy | Giuseppe Giona",
    description: "Privacy policy for giuseppegiona.com - How we collect, use, and protect your personal data.",
    url: "https://giuseppegiona.com/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
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
                Privacy Policy
              </h1>
              <p className="text-zinc-400 font-mono">
                Last updated: <span className="text-emerald-400">07 October 2025</span>
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <p className="text-zinc-300 leading-relaxed">
                    This Privacy Policy explains how Giuseppe Giona (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects, uses, shares, 
                    and protects your personal data when you use <span className="text-cyan-400 font-mono">giuseppegiona.com</span> (the &quot;Site&quot;) 
                    and any related pages, contact forms, or services.
                  </p>
                  
                  <div className="mt-6 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    <p className="text-sm text-emerald-300 font-mono">
                      <strong>Contact:</strong> If you have questions, contact: 
                      <a href="mailto:contact.giuseppe00@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors ml-1">
                        contact.giuseppe00@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Information We Collect
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Automatically Collected Information</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300">
                        <li>Device information (browser type, operating system)</li>
                        <li>Usage data (pages visited, time spent, click patterns)</li>
                        <li>IP address and general location data</li>
                        <li>Referral sources and search terms</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Information You Provide</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300">
                        <li>Contact information when reaching out via email</li>
                        <li>Any feedback, comments, or questions you submit</li>
                        <li>Information in any communications with us</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    How We Use Your Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Site Operations</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                        <li>Provide and maintain the website</li>
                        <li>Improve user experience and functionality</li>
                        <li>Monitor and analyze usage patterns</li>
                        <li>Debug technical issues</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Communications</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                        <li>Respond to your inquiries</li>
                        <li>Provide technical support</li>
                        <li>Send important updates about the site</li>
                        <li>Professional networking opportunities</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Data Sharing */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Information Sharing
                  </h2>
                  
                  <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
                    <p className="text-red-300 font-mono text-sm mb-2">
                      <strong>We do not sell your personal information.</strong>
                    </p>
                    <p className="text-zinc-300 text-sm">
                      We may share information only in these limited circumstances:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300 text-sm">
                      <li>With service providers who help operate the website (hosting, analytics)</li>
                      <li>When required by law or to protect our rights</li>
                      <li>In connection with a business transfer or merger</li>
                      <li>With your explicit consent</li>
                    </ul>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Data Security
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      We implement appropriate security measures to protect your information:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-emerald-400">🔒</span>
                        </div>
                        <p className="text-emerald-400 font-semibold">Encryption</p>
                        <p className="text-zinc-400">HTTPS/SSL encryption</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-cyan-400">🛡️</span>
                        </div>
                        <p className="text-cyan-400 font-semibold">Security Headers</p>
                        <p className="text-zinc-400">CSP, HSTS, etc.</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-indigo-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-indigo-400">🔍</span>
                        </div>
                        <p className="text-indigo-400 font-semibold">Regular Audits</p>
                        <p className="text-zinc-400">Security monitoring</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Your Rights
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-zinc-300">
                      You have the following rights regarding your personal data:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-emerald-400 font-mono text-sm mt-1">→</span>
                          <div>
                            <p className="text-emerald-400 font-semibold text-sm">Access</p>
                            <p className="text-zinc-400 text-sm">Request copies of your data</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-cyan-400 font-mono text-sm mt-1">→</span>
                          <div>
                            <p className="text-cyan-400 font-semibold text-sm">Correction</p>
                            <p className="text-zinc-400 text-sm">Update inaccurate information</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="text-indigo-400 font-mono text-sm mt-1">→</span>
                          <div>
                            <p className="text-indigo-400 font-semibold text-sm">Deletion</p>
                            <p className="text-zinc-400 text-sm">Request data removal</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-red-400 font-mono text-sm mt-1">→</span>
                          <div>
                            <p className="text-red-400 font-semibold text-sm">Objection</p>
                            <p className="text-zinc-400 text-sm">Object to data processing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Cookies & Analytics
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      We use minimal analytics to understand how visitors use our site:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-zinc-400 text-sm">
                      <li>Basic page view tracking</li>
                      <li>Performance monitoring</li>
                      <li>No personally identifiable information is stored</li>
                      <li>No third-party advertising cookies</li>
                    </ul>
                  </div>
                </section>

                {/* Contact & Updates */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Updates & Contact
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Policy Updates</h3>
                      <p className="text-zinc-300 text-sm">
                        We may update this policy periodically. Significant changes will be posted prominently on the site.
                        The &quot;Last updated&quot; date at the top indicates when changes were made.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Questions or Concerns?</h3>
                      <p className="text-emerald-300 text-sm">
                        For any privacy-related questions, requests, or concerns, please contact:
                      </p>
                      <p className="text-emerald-400 font-mono text-sm mt-2">
                        <a href="mailto:contact.giuseppe00@gmail.com" className="hover:text-emerald-300 transition-colors">
                          contact.giuseppe00@gmail.com
                        </a>
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link 
                          href="/terms" 
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs transition-colors"
                        >
                          Terms of Service
                        </Link>
                        <Link 
                          href="/ethics" 
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs transition-colors"
                        >
                          Ethics & Values
                        </Link>
                      </div>
                    </div>
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