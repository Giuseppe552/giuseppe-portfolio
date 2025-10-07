import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Why Security Matters: A Beginner's Guide to Staying Safe Online | Giuseppe Giona",
  description: "Essential security practices everyone should know, explained in plain English. No technical jargon, just practical protection.",
  openGraph: {
    title: "Why Security Matters: A Beginner's Guide to Staying Safe Online",
    description: "Essential security practices everyone should know, explained in plain English.",
    images: ["/BlogPostImage2.png"],
  },
};

export default function SecurityBeginnersGuidePost() {
  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Aurora />
        
        <section className="relative pt-24 pb-8">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Blog
              </Link>
            </div>
            
            <div className="max-w-6xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {["security", "privacy", "beginner", "cybersecurity", "safety"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Why Security Matters
                <span className="block text-4xl lg:text-6xl mt-4 text-red-400">
                  A Beginner's Guide
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2024-11-05">November 5, 2024</time>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span className="text-red-400">Security Guide</span>
              </div>
            </div>
          </div>
        </section>

        <main className="relative">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="prose prose-xl prose-invert max-w-none">
              <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-red-400 pl-8 bg-red-400/5 rounded-r-xl py-6">
                <p className="mb-6">
                  Cybersecurity isn't just for tech experts anymore. In 2024, everyone with a smartphone, laptop, or social media account needs to understand the basics of staying safe online.
                </p>
                <p className="text-red-400 font-semibold">
                  Here's your practical guide to digital security—no technical jargon required.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-2xl p-8 mb-16">
                <h2 className="text-3xl font-bold text-red-400 mb-6">🔒 Security Essentials for Everyone</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">🔐 Strong Passwords</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li>• Use a password manager</li>
                      <li>• 12+ characters minimum</li>
                      <li>• Unique for every account</li>
                      <li>• Enable two-factor authentication</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">📱 Device Security</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li>• Keep software updated</li>
                      <li>• Use screen locks</li>
                      <li>• Install apps from official stores</li>
                      <li>• Regular backups</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">🌐 Online Behavior</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li>• Verify before clicking links</li>
                      <li>• Check website security (HTTPS)</li>
                      <li>• Be skeptical of unsolicited messages</li>
                      <li>• Review privacy settings</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4">💳 Financial Safety</h3>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      <li>• Monitor bank statements</li>
                      <li>• Use secure payment methods</li>
                      <li>• Freeze credit when not needed</li>
                      <li>• Be wary of public Wi-Fi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-400/20 rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Security is a Habit, Not a One-Time Setup</h3>
                <p className="text-lg text-zinc-300 mb-6">
                  Start with one security practice today. Build the habit. Your future self will thank you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/blog/ethical-linux-hardening-2025"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-orange-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                  >
                    Advanced Security
                    <span>→</span>
                  </Link>
                  <Link 
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                  >
                    Security Tools
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
