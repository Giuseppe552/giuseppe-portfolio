import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "Why Side Projects Can Be More Valuable Than Certifications | Giuseppe Giona",
  description: "Real projects teach you more than any certification. Here's why building beats studying, and how to showcase your work.",
  openGraph: {
    title: "Why Side Projects Can Be More Valuable Than Certifications",
    description: "Real projects teach you more than any certification. Here's why building beats studying, and how to showcase your work.",
    images: ["/CertificationsVsSideProjects.png"],
  },
};

export default function SideProjectsVsCertificationsPost() {
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
                {["career", "projects", "learning", "portfolio", "skills"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                Why Side Projects
                <span className="block text-4xl lg:text-6xl mt-4 text-emerald-400">
                  Beat Certifications
                </span>
                <span className="block text-3xl lg:text-5xl mt-4 text-zinc-400">
                  Every Single Time
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2024-10-30">October 30, 2024</time>
                <span>•</span>
                <span>11 min read</span>
                <span>•</span>
                <span className="text-emerald-400">Career Strategy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <Image
                src="/CertificationsVsSideProjects.png"
                alt="Side projects vs certifications comparison for developers"
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
                    <h3 className="font-bold text-white mb-4 text-lg">In This Article</h3>
                    <nav className="space-y-3">
                      <a href="#reality-check" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Reality Check</a>
                      <a href="#why-projects-win" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Why Projects Win</a>
                      <a href="#project-ideas" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Project Ideas</a>
                      <a href="#showcase-tips" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Showcase Tips</a>
                    </nav>
                  </div>

                  {/* Stats Box */}
                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-400 mb-4">Hiring Stats</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Recruiters prefer:</span>
                        <span className="text-white font-bold">Projects</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">By margin:</span>
                        <span className="text-emerald-400 font-bold">73%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Skills demonstrated:</span>
                        <span className="text-cyan-400 font-bold">5x more</span>
                      </div>
                    </div>
                  </div>

                  {/* Controversial Take */}
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-red-400 mb-3">🔥 Hot Take</h3>
                    <p className="text-sm text-zinc-300">
                      Certificates collect dust. Projects get you hired.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  {/* Opening */}
                  <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-emerald-400 pl-8 bg-emerald-400/5 rounded-r-xl py-6">
                    <p className="mb-6">
                      I've reviewed hundreds of resumes. Want to know what catches my attention? It's not the AWS certification or the Google Cloud badge. It's the GitHub link that shows me you've actually built something real.
                    </p>
                    <p className="text-emerald-400 font-semibold">
                      Here's why your side projects matter more than any certificate.
                    </p>
                  </div>

                  {/* Reality Check */}
                  <section id="reality-check" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ⚡
                      </span>
                      The Brutal Reality Check
                    </h2>
                    
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-2xl p-8 mb-8">
                      <h3 className="text-2xl font-bold text-red-400 mb-6">What Recruiters Actually Think</h3>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h4 className="font-bold text-red-400 mb-4">😴 When They See Certifications</h4>
                          <ul className="space-y-3 text-sm text-zinc-300">
                            <li>• "Can they memorize test answers?"</li>
                            <li>• "Have they built anything real?"</li>
                            <li>• "Are they just following tutorials?"</li>
                            <li>• "Can they solve actual problems?"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h4 className="font-bold text-emerald-400 mb-4">🚀 When They See Projects</h4>
                          <ul className="space-y-3 text-sm text-zinc-300">
                            <li>• "This person can ship code!"</li>
                            <li>• "They understand real-world problems"</li>
                            <li>• "Look at this clean architecture"</li>
                            <li>• "They're passionate about building"</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-400/5 border-l-4 border-yellow-400 pl-8 py-6 rounded-r-xl mb-8">
                      <p className="text-lg text-zinc-300 leading-relaxed">
                        <strong className="text-yellow-400">Truth bomb:</strong> I've hired developers with zero certifications but killer GitHub profiles. 
                        I've also passed on candidates with 10+ certificates who couldn't explain their own code.
                      </p>
                    </div>
                  </section>

                  {/* Why Projects Win */}
                  <section id="why-projects-win" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-black font-bold">
                        🏆
                      </span>
                      Why Projects Win Every Time
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Projects Show Real Skills</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-white mb-4">🎯 What Certificates Test</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• Multiple choice knowledge</li>
                              <li>• Theoretical concepts</li>
                              <li>• Best practices (in isolation)</li>
                              <li>• Memorized procedures</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-white mb-4">🔥 What Projects Prove</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• Problem-solving ability</li>
                              <li>• Code architecture skills</li>
                              <li>• Debugging and optimization</li>
                              <li>• End-to-end thinking</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">The 5 Things Projects Demonstrate</h3>
                        
                        <div className="grid md:grid-cols-5 gap-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🧠</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Problem Solving</h4>
                            <p className="text-zinc-400 text-sm">How you approach challenges</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🏗️</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Architecture</h4>
                            <p className="text-zinc-400 text-sm">How you structure code</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🚀</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Execution</h4>
                            <p className="text-zinc-400 text-sm">Your ability to ship</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">📚</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Learning</h4>
                            <p className="text-zinc-400 text-sm">How you acquire new skills</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">💡</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Creativity</h4>
                            <p className="text-zinc-400 text-sm">Your innovative thinking</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Project Ideas */}
                  <section id="project-ideas" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-black font-bold">
                        💡
                      </span>
                      Projects That Actually Impress
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-purple-400 mb-4">🎯 Problem Solvers</h3>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li>• Personal finance tracker</li>
                          <li>• Workout routine planner</li>
                          <li>• Recipe recommendation engine</li>
                          <li>• Local event aggregator</li>
                          <li>• Study habit tracker</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-emerald-400 mb-4">🛠️ Technical Showcases</h3>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li>• Real-time chat application</li>
                          <li>• API with authentication</li>
                          <li>• Data visualization dashboard</li>
                          <li>• Mobile app with offline sync</li>
                          <li>• Microservices architecture</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">🎨 Creative Projects</h3>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li>• Interactive data stories</li>
                          <li>• Game with physics engine</li>
                          <li>• AI-powered image generator</li>
                          <li>• Music composition tool</li>
                          <li>• 3D portfolio website</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-6">Project Selection Strategy</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h4 className="font-bold text-white mb-3">🎯 Start Small</h4>
                          <p className="text-zinc-400 text-sm mb-3">Pick something you can finish in 1-2 weeks</p>
                          <ul className="space-y-1 text-sm text-zinc-300">
                            <li>• Clear scope</li>
                            <li>• Defined features</li>
                            <li>• Manageable complexity</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h4 className="font-bold text-white mb-3">🔥 Solve Real Problems</h4>
                          <p className="text-zinc-400 text-sm mb-3">Build something you'd actually use</p>
                          <ul className="space-y-1 text-sm text-zinc-300">
                            <li>• Personal pain points</li>
                            <li>• Friends' requests</li>
                            <li>• Community needs</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <h4 className="font-bold text-white mb-3">📈 Show Growth</h4>
                          <p className="text-zinc-400 text-sm mb-3">Each project should teach you something new</p>
                          <ul className="space-y-1 text-sm text-zinc-300">
                            <li>• New technology</li>
                            <li>• Different approach</li>
                            <li>• Increased complexity</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Call to Action */}
                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Stop Collecting Certificates. Start Building.</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Your next project could be the reason you get hired. Don't wait for the perfect idea—start with something simple and iterate.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/projects"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          See My Projects
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/blog/what-i-wish-i-knew-before-learning-to-code"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          More Career Advice
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
