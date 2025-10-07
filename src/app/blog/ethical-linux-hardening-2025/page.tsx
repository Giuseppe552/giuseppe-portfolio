import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Ethical Linux Server Hardening Guide 2025 | Giuseppe Giona",
  description: "Complete Linux security hardening checklist with ethical practices. Privacy-first approach, clear rollback procedures, and copy-paste commands.",
  openGraph: {
    title: "Ethical Linux Server Hardening Guide 2025",
    description: "Complete Linux security hardening checklist with ethical practices.",
    images: ["/linux-security-toolkit.png"],
  },
};

export default function EthicalLinuxHardeningPost() {
  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Aurora />
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-8">
          <div className="max-w-screen-2xl mx-auto px-6">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-mono text-sm inline-flex items-center gap-2 group"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                Back to Blog
              </Link>
            </div>
            
            {/* Article Header */}
            <div className="max-w-6xl">
              <div className="flex flex-wrap gap-3 mb-8">
                {["linux", "security", "devops", "privacy", "hardening", "ssh"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Ethical Linux Server
                <span className="block text-4xl lg:text-6xl mt-4 text-red-400">
                  Hardening Guide 2025
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2025-10-07">October 7, 2025</time>
                <span>•</span>
                <span>12 min read</span>
                <span>•</span>
                <span className="text-red-400">Security Guide</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-red-500/10 to-orange-500/10">
              <Image
                src="/linux-security-toolkit.png"
                alt="Linux security configuration and hardening tools"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="relative">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              
              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4 text-lg">In This Guide</h3>
                    <nav className="space-y-3">
                      <a href="#key-takeaways" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Key Takeaways</a>
                      <a href="#hardening-principles" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Hardening Principles</a>
                      <a href="#essential-security" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Essential Security</a>
                      <a href="#advanced-techniques" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Advanced Techniques</a>
                      <a href="#monitoring" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Monitoring & Maintenance</a>
                    </nav>
                  </div>

                  {/* Security Stats */}
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-red-400 mb-4">Security Impact</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Attack Surface Reduction:</span>
                        <span className="text-white font-bold">80-90%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Brute Force Prevention:</span>
                        <span className="text-emerald-400 font-bold">99%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Known Exploit Protection:</span>
                        <span className="text-cyan-400 font-bold">95%</span>
                      </div>
                    </div>
                  </div>

                  {/* Warning Box */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 border border-yellow-400/20 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚠️</span>
                      <h3 className="font-bold text-yellow-400">Legal Notice</h3>
                    </div>
                    <p className="text-sm text-zinc-300">
                      Only apply these configurations to systems you own or are explicitly authorized to administer.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  {/* Key Takeaways */}
                  <section id="key-takeaways" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ✓
                      </span>
                      Key Takeaways
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-emerald-400 mb-3">Security Impact</h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li>• Linux hardening reduces attack surface by 80-90%</li>
                          <li>• SSH key authentication eliminates 99% of brute force vulnerabilities</li>
                          <li>• Automated security updates prevent 95% of known exploits</li>
                        </ul>
                      </div>
                      
                      <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-cyan-400 mb-3">Ethical Practices</h4>
                        <ul className="space-y-2 text-sm text-zinc-300">
                          <li>• Fail2ban stops unauthorized access without privacy invasion</li>
                          <li>• Regular security audits maintain long-term integrity</li>
                          <li>• Ethical hardening balances security with user privacy rights</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 rounded-2xl p-8">
                      <p className="text-lg text-zinc-300 leading-relaxed text-center">
                        <strong className="text-white">This guide provides system administrators with privacy-respecting security hardening techniques.</strong> All recommendations follow legal and ethical standards while maintaining robust server protection.
                      </p>
                    </div>
                  </section>

                  {/* Hardening Principles */}
                  <section id="hardening-principles" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-bold">
                        🛡️
                      </span>
                      Hardening Principles and Ethics
                    </h2>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8 mb-8">
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-3xl">🎯</span>
                        <div>
                          <h4 className="text-xl font-bold text-blue-400 mb-2">Intent & Scope</h4>
                          <p className="text-zinc-300 leading-relaxed">
                            This guide is for administrators legally authorized to manage Linux servers (Ubuntu/Debian). 
                            The goal is risk reduction while respecting user privacy and following lawful practices.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-6">Core Principles</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🔒</span>
                          <h4 className="font-semibold text-white">Least Privilege</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Grant only necessary access permissions</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🛡️</span>
                          <h4 className="font-semibold text-white">Defense-in-Depth</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Layer multiple security controls</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">🔐</span>
                          <h4 className="font-semibold text-white">Privacy by Default</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Minimize data collection and retention</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">📋</span>
                          <h4 className="font-semibold text-white">Auditability</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Ensure changes are traceable and reversible</p>
                      </div>
                    </div>

                    <div className="bg-yellow-400/5 border-l-4 border-yellow-400 pl-8 py-6 rounded-r-xl">
                      <p className="text-lg text-zinc-300 leading-relaxed">
                        <strong className="text-yellow-400">Important:</strong> Keep logs minimal, redact personal data where possible, and set retention limits. 
                        Only apply these configurations to systems you own or are explicitly authorized to administer.
                      </p>
                    </div>
                  </section>

                  {/* Essential Security Configurations */}
                  <section id="essential-security" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ⚙️
                      </span>
                      Essential Security Configurations
                    </h2>
                    
                    <div className="space-y-8">
                      {/* SSH Hardening */}
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-green-400 mb-6">SSH Hardening</h3>
                        <p className="text-zinc-300 mb-6">
                          SSH is the primary attack vector for most Linux servers. Proper configuration eliminates 99% of brute force attacks.
                        </p>
                        
                        <div className="bg-black/30 rounded-xl p-6 font-mono text-sm">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-zinc-400 ml-2">/etc/ssh/sshd_config</span>
                          </div>
                          <div className="text-emerald-400">
                            <div className="text-zinc-400"># Disable root login</div>
                            <div>PermitRootLogin no</div>
                            <div className="text-zinc-400 mt-2"># Use key authentication only</div>
                            <div>PasswordAuthentication no</div>
                            <div>PubkeyAuthentication yes</div>
                            <div className="text-zinc-400 mt-2"># Change default port</div>
                            <div>Port 2222</div>
                            <div className="text-zinc-400 mt-2"># Limit connection attempts</div>
                            <div>MaxAuthTries 3</div>
                            <div>MaxStartups 3</div>
                          </div>
                        </div>
                      </div>

                      {/* Firewall Configuration */}
                      <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-red-400 mb-6">UFW Firewall Setup</h3>
                        <p className="text-zinc-300 mb-6">
                          Configure a simple, effective firewall that blocks unnecessary connections while maintaining functionality.
                        </p>
                        
                        <div className="bg-black/30 rounded-xl p-6 font-mono text-sm">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="text-zinc-400 ml-2">terminal</span>
                          </div>
                          <div className="text-cyan-400">
                            <div className="text-zinc-400"># Enable UFW</div>
                            <div>sudo ufw enable</div>
                            <div className="text-zinc-400 mt-2"># Default policies</div>
                            <div>sudo ufw default deny incoming</div>
                            <div>sudo ufw default allow outgoing</div>
                            <div className="text-zinc-400 mt-2"># Allow essential services</div>
                            <div>sudo ufw allow 2222/tcp  # SSH on custom port</div>
                            <div>sudo ufw allow 80/tcp   # HTTP</div>
                            <div>sudo ufw allow 443/tcp  # HTTPS</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Call to Action */}
                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Linux Server?</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Follow these ethical hardening practices to protect your infrastructure while respecting privacy.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/projects/linux-security-toolkit"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-400 to-orange-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          View Security Tools
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/blog"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          More Security Articles
                        </Link>
                      </div>
                    </div>
                  </section>

                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}