import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Giuseppe Giona",
  description: "Terms of service for giuseppegiona.com - User agreements and conditions for using our website.",
  openGraph: {
    title: "Terms of Service | Giuseppe Giona",
    description: "Terms of service for giuseppegiona.com - User agreements and conditions for using our website.",
    url: "https://giuseppegiona.com/terms",
    type: "website",
  },
};

export default function TermsPage() {
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
                Terms of Service
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
                    These Terms of Service (&quot;Terms&quot;) govern your use of <span className="text-cyan-400 font-mono">giuseppegiona.com</span> (the &quot;Site&quot;) 
                    operated by Giuseppe Giona (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using our Site, you agree to be bound by these Terms.
                  </p>
                  
                  <div className="mt-6 p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    <p className="text-sm text-emerald-300 font-mono">
                      <strong>Contact:</strong> For questions about these terms, contact: 
                      <a href="mailto:contact.giuseppe00@gmail.com" className="text-emerald-400 hover:text-emerald-300 transition-colors ml-1">
                        contact.giuseppe00@gmail.com
                      </a>
                    </p>
                  </div>
                </section>

                {/* Acceptance of Terms */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Acceptance of Terms
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      By accessing this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="px-2 py-1 bg-emerald-400/20 text-emerald-400 rounded font-mono">✓ Legal Agreement</span>
                      <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded font-mono">✓ Binding Terms</span>
                      <span className="px-2 py-1 bg-indigo-400/20 text-indigo-400 rounded font-mono">✓ Privacy Policy</span>
                    </div>
                  </div>
                </section>

                {/* Use of the Site */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Permitted Use
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">✓ You May</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                        <li>Browse and read content</li>
                        <li>Share links to our content</li>
                        <li>Contact us for professional inquiries</li>
                        <li>Use information for personal learning</li>
                        <li>Reference our work with proper attribution</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-red-400">✗ You May Not</h3>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-sm">
                        <li>Copy or republish content without permission</li>
                        <li>Use automated tools to scrape content</li>
                        <li>Attempt to hack or compromise the site</li>
                        <li>Submit malicious code or content</li>
                        <li>Impersonate us or misrepresent affiliation</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Intellectual Property
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Our Content</h3>
                      <p className="text-zinc-300 text-sm mb-3">
                        All original content, including blog posts, project descriptions, code examples, and design elements, 
                        is owned by Giuseppe Giona and protected by copyright law.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded font-mono">© Copyright Protected</span>
                        <span className="px-2 py-1 bg-emerald-400/20 text-emerald-400 rounded font-mono">Attribution Required</span>
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Open Source Code</h3>
                      <p className="text-zinc-300 text-sm mb-3">
                        Some code examples and projects may be made available under open source licenses. 
                        Check individual repositories for specific licensing terms.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-indigo-400/20 text-indigo-400 rounded font-mono">MIT License</span>
                        <span className="px-2 py-1 bg-emerald-400/20 text-emerald-400 rounded font-mono">Open Source</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* User Content */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    User-Generated Content
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      If you submit content (via contact forms, emails, or other means), you grant us permission to use, 
                      modify, and display such content for the following purposes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="text-emerald-400 font-semibold mb-2">Permitted Uses:</h4>
                        <ul className="list-disc list-inside space-y-1 text-zinc-400">
                          <li>Responding to your inquiries</li>
                          <li>Improving our services</li>
                          <li>Technical support</li>
                          <li>Professional communications</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">Your Rights:</h4>
                        <ul className="list-disc list-inside space-y-1 text-zinc-400">
                          <li>You retain ownership of your content</li>
                          <li>Request deletion at any time</li>
                          <li>Content won&apos;t be shared publicly without consent</li>
                          <li>Privacy rights are protected</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Disclaimers */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Disclaimers & Limitations
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-yellow-400">Content Accuracy</h3>
                      <p className="text-zinc-300 text-sm">
                        While we strive for accuracy, the information on this site is provided &quot;as is&quot; without warranties. 
                        Technical content, code examples, and advice are for educational purposes and may become outdated.
                      </p>
                    </div>

                    <div className="p-4 bg-orange-400/10 border border-orange-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-orange-400">Professional Advice</h3>
                      <p className="text-zinc-300 text-sm">
                        Content on this site does not constitute professional advice. 
                        Always consult with qualified professionals for specific technical, legal, or business decisions.
                      </p>
                    </div>

                    <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-red-400">Limitation of Liability</h3>
                      <p className="text-zinc-300 text-sm">
                        Giuseppe Giona shall not be liable for any direct, indirect, incidental, or consequential damages 
                        arising from your use of this site or reliance on its content.
                      </p>
                    </div>
                  </div>
                </section>

                {/* External Links */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    External Links & Services
                  </h2>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-zinc-300 mb-4">
                      Our site may contain links to external websites and services:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-cyan-400">🔗</span>
                        </div>
                        <p className="text-cyan-400 font-semibold">GitHub</p>
                        <p className="text-zinc-400">Code repositories</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-blue-400">💼</span>
                        </div>
                        <p className="text-blue-400 font-semibold">LinkedIn</p>
                        <p className="text-zinc-400">Professional profile</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-emerald-400">🌐</span>
                        </div>
                        <p className="text-emerald-400 font-semibold">External Tools</p>
                        <p className="text-zinc-400">Third-party services</p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mt-4">
                      We are not responsible for the content, privacy practices, or terms of external sites.
                    </p>
                  </div>
                </section>

                {/* Privacy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Privacy & Data Protection
                  </h2>
                  
                  <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                    <p className="text-emerald-300 mb-2 font-semibold">
                      Your privacy is important to us.
                    </p>
                    <p className="text-zinc-300 text-sm mb-3">
                      Please review our Privacy Policy for detailed information about how we collect, use, and protect your data.
                    </p>
                    <Link 
                      href="/privacy" 
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm"
                    >
                      Read Privacy Policy →
                    </Link>
                  </div>
                </section>

                {/* Modifications */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Changes to Terms
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Updates</h3>
                      <p className="text-zinc-300 text-sm mb-3">
                        We reserve the right to modify these Terms at any time. Significant changes will be posted prominently on the site.
                      </p>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                        <span className="text-emerald-400 font-mono">Continued use constitutes acceptance of updated terms</span>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-cyan-400">Notification</h3>
                      <p className="text-zinc-300 text-sm">
                        Material changes will be communicated through:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-400 text-sm">
                        <li>Site banner notifications</li>
                        <li>Updated &quot;Last modified&quot; date</li>
                        <li>Email notification (if you&apos;ve contacted us)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                    Governing Law & Contact
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Jurisdiction</h3>
                      <p className="text-zinc-300 text-sm">
                        These Terms are governed by the laws of the jurisdiction where Giuseppe Giona resides. 
                        Any disputes will be resolved through friendly discussion or appropriate legal channels.
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald-400/10 border border-emerald-400/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-2 text-emerald-400">Questions or Concerns?</h3>
                      <p className="text-emerald-300 text-sm">
                        For any questions about these Terms of Service, please contact:
                      </p>
                      <p className="text-emerald-400 font-mono text-sm mt-2">
                        <a href="mailto:contact.giuseppe00@gmail.com" className="hover:text-emerald-300 transition-colors">
                          contact.giuseppe00@gmail.com
                        </a>
                      </p>
                      <p className="text-zinc-400 text-xs mt-2">
                        We typically respond within 24-48 hours during business days.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link 
                          href="/privacy" 
                          className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs transition-colors"
                        >
                          Privacy Policy
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