import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Why Every Business Needs Automation (Even Small Ones) | Giuseppe Giona",
  description: "Discover how automation can save hours, reduce costs, and help small businesses compete with larger companies. Learn practical automation strategies for growth.",
  openGraph: {
    title: "Why Every Business Needs Automation (Even Small Ones)",
    description: "Discover how automation can save hours, reduce costs, and help small businesses compete with larger companies.",
    images: ["/BusinessAutomation.png"],
  },
};

export default function BusinessAutomationPost() {
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
                {["automation", "business", "productivity", "small-business", "growth"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Why Every Business Needs Automation
                <span className="block text-4xl lg:text-6xl mt-4 text-cyan-400">
                  (Even Small Ones)
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2025-05-01">May 1, 2025</time>
                <span>•</span>
                <span>8 min read</span>
                <span>•</span>
                <span className="text-emerald-400">Business Strategy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10">
              <Image
                src="/BusinessAutomation.png"
                alt="Illustration showing a small business owner with automation tools like Zapier and HubSpot improving efficiency"
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
                    <h3 className="font-bold text-white mb-4 text-lg">Table of Contents</h3>
                    <nav className="space-y-3">
                      <a href="#save-hours" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Save Hours on Repetitive Work</a>
                      <a href="#reduce-costs" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Reduce Costs (Not Just Time)</a>
                      <a href="#scale-growth" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Scale Your Growth</a>
                      <a href="#getting-started" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Getting Started</a>
                    </nav>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-400 mb-4">Quick Stats</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Time Saved Weekly:</span>
                        <span className="text-white font-bold">15+ hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Cost Reduction:</span>
                        <span className="text-emerald-400 font-bold">30-50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">ROI Timeline:</span>
                        <span className="text-cyan-400 font-bold">2-4 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  {/* Opening */}
                  <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-cyan-400 pl-8 bg-cyan-400/5 rounded-r-xl py-6">
                    <p className="mb-6">
                      Running a business is hard work. Between managing customers, sending invoices, tracking expenses, and keeping up with day-to-day operations, it can feel like there just aren't enough hours in the day.
                    </p>
                    <p className="text-cyan-400 font-semibold">
                      That's where automation comes in.
                    </p>
                  </div>

                  <p className="text-lg text-zinc-300 leading-relaxed mb-12">
                    A lot of people think automation is only for big companies with huge budgets. The truth? Even the smallest businesses can benefit from automating repetitive tasks. In fact, for small teams and solo founders, automation can be the difference between constantly firefighting and actually having time to grow.
                  </p>

                  {/* Section 1: Save Hours */}
                  <section id="save-hours" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl flex items-center justify-center text-black font-bold">
                        1
                      </span>
                      Save Hours on Repetitive Work
                    </h2>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      Think about the tasks you do every single week:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-red-400">📧</span>
                          </div>
                          <h4 className="font-semibold text-white">Email Management</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Sending invoices, follow-ups, newsletters</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-blue-400">📱</span>
                          </div>
                          <h4 className="font-semibold text-white">Social Media</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Posting updates, engaging with followers</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-emerald-400">💰</span>
                          </div>
                          <h4 className="font-semibold text-white">Financial Tasks</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Tracking expenses, generating reports</p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                            <span className="text-purple-400">👥</span>
                          </div>
                          <h4 className="font-semibold text-white">Customer Service</h4>
                        </div>
                        <p className="text-zinc-400 text-sm">Collecting feedback, responding to inquiries</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 rounded-2xl p-8 mb-8">
                      <h4 className="text-2xl font-bold text-white mb-6 text-center">Manual vs Automated: Time Comparison</h4>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="font-semibold text-red-400 text-lg">Manual Effort</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-zinc-300">Invoices</span>
                              <span className="text-red-400 font-bold">5 hours/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-zinc-300">Social Media</span>
                              <span className="text-red-400 font-bold">8 hours/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-zinc-300">Email Follow-ups</span>
                              <span className="text-red-400 font-bold">6 hours/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-zinc-300">Reporting</span>
                              <span className="text-red-400 font-bold">4 hours/week</span>
                            </div>
                          </div>
                          <div className="pt-3 border-t border-red-500/20">
                            <div className="flex justify-between items-center font-bold">
                              <span className="text-white">Total:</span>
                              <span className="text-red-400 text-xl">23 hours/week</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h5 className="font-semibold text-emerald-400 text-lg">With Automation</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                              <span className="text-zinc-300">Invoices</span>
                              <span className="text-emerald-400 font-bold">30 min/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                              <span className="text-zinc-300">Social Media</span>
                              <span className="text-emerald-400 font-bold">1 hour/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                              <span className="text-zinc-300">Email Follow-ups</span>
                              <span className="text-emerald-400 font-bold">45 min/week</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                              <span className="text-zinc-300">Reporting</span>
                              <span className="text-emerald-400 font-bold">30 min/week</span>
                            </div>
                          </div>
                          <div className="pt-3 border-t border-emerald-500/20">
                            <div className="flex justify-between items-center font-bold">
                              <span className="text-white">Total:</span>
                              <span className="text-emerald-400 text-xl">3.25 hours/week</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-6 py-3">
                          <span className="text-white font-bold">Time Saved:</span>
                          <span className="text-cyan-400 font-bold text-xl">19.75 hours/week</span>
                          <span className="text-emerald-400">💰 = $1,975 in saved labor costs</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-zinc-300 leading-relaxed">
                      Individually, these don't seem like much. But add them up, and you could be spending dozens of hours every month on things a simple tool could handle automatically.
                    </p>
                  </section>

                  {/* Section 2: Reduce Costs */}
                  <section id="reduce-costs" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-black font-bold">
                        2
                      </span>
                      Reduce Costs (Not Just Time)
                    </h2>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      When you automate repetitive tasks, you're not just saving time—you're cutting real costs. Here's the math that makes automation a no-brainer investment:
                    </p>

                    <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-8 mb-8">
                      <h4 className="text-2xl font-bold text-white mb-6">Cost Breakdown: Manual vs Automated</h4>
                      
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h5 className="font-bold text-emerald-400 mb-4">Labor Costs</h5>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Manual (23 hrs/week):</span>
                              <span className="text-red-400 font-bold">$2,300/month</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Automated (3 hrs/week):</span>
                              <span className="text-emerald-400 font-bold">$300/month</span>
                            </div>
                            <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
                              <span className="text-white">Savings:</span>
                              <span className="text-cyan-400">$2,000/month</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h5 className="font-bold text-cyan-400 mb-4">Tool Costs</h5>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Zapier Pro:</span>
                              <span className="text-white">$50/month</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Buffer:</span>
                              <span className="text-white">$35/month</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">QuickBooks:</span>
                              <span className="text-white">$30/month</span>
                            </div>
                            <div className="border-t border-white/10 pt-2 flex justify-between font-bold">
                              <span className="text-white">Total:</span>
                              <span className="text-emerald-400">$115/month</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-xl p-6">
                          <h5 className="font-bold text-white mb-4">Net Savings</h5>
                          <div className="space-y-3">
                            <div className="text-center">
                              <span className="text-3xl font-bold text-cyan-400">$1,885</span>
                              <p className="text-zinc-300 text-sm">saved per month</p>
                            </div>
                            <div className="text-center">
                              <span className="text-2xl font-bold text-emerald-400">$22,620</span>
                              <p className="text-zinc-300 text-sm">saved per year</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-400/5 border-l-4 border-cyan-400 pl-8 py-6 rounded-r-xl mb-8">
                      <p className="text-lg text-zinc-300 leading-relaxed">
                        <strong className="text-cyan-400">Real talk:</strong> Most small business automation tools cost less than $100/month total. If you're spending more than 10 hours a week on repetitive tasks, automation will pay for itself in the first month.
                      </p>
                    </div>
                  </section>

                  {/* CTA Section */}
                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Business?</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Start small, think big. Even automating one process can save hours every week.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/projects/automation-tools"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          View My Automation Projects
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/blog"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          Read More Articles
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