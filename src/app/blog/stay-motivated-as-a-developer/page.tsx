import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "How to Stay Motivated as a Developer (When Code Feels Like Work) | Giuseppe Giona",
  description: "Practical strategies for maintaining passion and momentum in your coding journey, even when the grind gets real.",
  openGraph: {
    title: "How to Stay Motivated as a Developer (When Code Feels Like Work)",
    description: "Practical strategies for maintaining passion and momentum in your coding journey.",
    images: ["/MotivatedAsDevelopers.png"],
  },
};

export default function StayMotivatedPost() {
  return (
    <>
      <div className="min-h-screen text-zinc-100 relative">
        <Aurora />
        
        {/* Hero Section */}
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
                {["motivation", "career", "growth", "productivity", "mindset"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                How to Stay Motivated
                <span className="block text-4xl lg:text-6xl mt-4 text-purple-400">
                  as a Developer
                </span>
                <span className="block text-3xl lg:text-5xl mt-4 text-zinc-400">
                  (When Code Feels Like Work)
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2024-11-20">November 20, 2024</time>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span className="text-purple-400">Career Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <Image
                src="/MotivatedAsDevelopers.png"
                alt="Developer motivation and coding journey illustration"
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
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4 text-lg">Quick Navigation</h3>
                    <nav className="space-y-3">
                      <a href="#burnout-signs" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Recognizing Burnout</a>
                      <a href="#rediscover-passion" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Rediscover Your Passion</a>
                      <a href="#practical-strategies" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Practical Strategies</a>
                      <a href="#long-term-growth" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Long-term Growth</a>
                    </nav>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-purple-400 mb-4">Motivation Facts</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Developers who quit:</span>
                        <span className="text-white font-bold">57%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Due to burnout:</span>
                        <span className="text-red-400 font-bold">83%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Recovery time:</span>
                        <span className="text-emerald-400 font-bold">2-6 weeks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-purple-400 pl-8 bg-purple-400/5 rounded-r-xl py-6">
                    <p className="mb-6">
                      We've all been there. You started coding because you loved building things, solving problems, and creating something from nothing. But now? The magic is gone. Deadlines feel crushing, bugs are frustrating, and that side project you were excited about feels like another chore.
                    </p>
                    <p className="text-purple-400 font-semibold">
                      Here's how to get that spark back.
                    </p>
                  </div>

                  <section id="burnout-signs" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ⚠️
                      </span>
                      Recognizing Developer Burnout
                    </h2>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      Before we talk about solutions, let's acknowledge the problem. Developer burnout is real, and it's more common than you think.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-red-400 mb-4">Warning Signs</h4>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li className="flex items-center gap-3">
                            <span className="text-red-400">•</span>
                            <span>Dreading opening your IDE</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-red-400">•</span>
                            <span>Every bug feels overwhelming</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-red-400">•</span>
                            <span>Procrastinating on coding tasks</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-red-400">•</span>
                            <span>Feeling behind on tech trends</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-red-400">•</span>
                            <span>Comparing yourself to others constantly</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-6">
                        <h4 className="font-bold text-orange-400 mb-4">Physical Symptoms</h4>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li className="flex items-center gap-3">
                            <span className="text-orange-400">•</span>
                            <span>Constant fatigue despite sleep</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-orange-400">•</span>
                            <span>Headaches from screen time</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-orange-400">•</span>
                            <span>Loss of appetite or overeating</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-orange-400">•</span>
                            <span>Difficulty concentrating</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="text-orange-400">•</span>
                            <span>Irritability with teammates</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/20 rounded-2xl p-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Burnout Statistics</h3>
                        <p className="text-zinc-400">You're not alone in feeling this way</p>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-red-400 mb-2">57%</div>
                          <p className="text-zinc-300 text-sm">of developers experience burnout</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-orange-400 mb-2">83%</div>
                          <p className="text-zinc-300 text-sm">cite burnout as reason for leaving</p>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-yellow-400 mb-2">2-6</div>
                          <p className="text-zinc-300 text-sm">weeks typical recovery time</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="rediscover-passion" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-black font-bold">
                        💜
                      </span>
                      Rediscover Your Passion for Code
                    </h2>
                    
                    <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                      Remember why you started coding? It probably wasn't for the money or the job security (though those are nice). You started because you could build things that matter.
                    </p>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8 mb-8">
                      <h3 className="text-2xl font-bold text-purple-400 mb-6">The 3 R's of Developer Motivation</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-bold">R</span>
                            <h4 className="font-semibold text-white">Remember</h4>
                          </div>
                          <p className="text-zinc-400 text-sm mb-4">Why did you start coding?</p>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Your first "Hello World"</li>
                            <li>• The excitement of problem-solving</li>
                            <li>• Building something from scratch</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 font-bold">R</span>
                            <h4 className="font-semibold text-white">Reconnect</h4>
                          </div>
                          <p className="text-zinc-400 text-sm mb-4">With the fundamentals you love</p>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Try a new programming language</li>
                            <li>• Build a personal project</li>
                            <li>• Join coding communities</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 font-bold">R</span>
                            <h4 className="font-semibold text-white">Reframe</h4>
                          </div>
                          <p className="text-zinc-400 text-sm mb-4">Your perspective on challenges</p>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Bugs are puzzles to solve</li>
                            <li>• Learning never stops</li>
                            <li>• Progress over perfection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="practical-strategies" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-black font-bold">
                        🚀
                      </span>
                      Practical Motivation Strategies
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Daily Habits That Work</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h4 className="font-bold text-white">Morning Routine</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• Start with a small, achievable task</li>
                              <li>• Review what you built yesterday</li>
                              <li>• Set one clear goal for the day</li>
                              <li>• Avoid social media comparisons</li>
                            </ul>
                          </div>
                          
                          <div className="space-y-4">
                            <h4 className="font-bold text-white">Evening Wind-down</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• Document what you learned</li>
                              <li>• Celebrate small wins</li>
                              <li>• Plan tomorrow's first task</li>
                              <li>• Disconnect from work devices</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">Project-Based Motivation</h3>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-3">Side Projects</h4>
                            <p className="text-zinc-400 text-sm mb-3">Build something just for you</p>
                            <ul className="space-y-1 text-sm text-zinc-300">
                              <li>• Personal dashboard</li>
                              <li>• Game or creative tool</li>
                              <li>• Automate a boring task</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-3">Open Source</h4>
                            <p className="text-zinc-400 text-sm mb-3">Contribute to the community</p>
                            <ul className="space-y-1 text-sm text-zinc-300">
                              <li>• Fix bugs in tools you use</li>
                              <li>• Write documentation</li>
                              <li>• Create useful libraries</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-3">Learning Projects</h4>
                            <p className="text-zinc-400 text-sm mb-3">Explore new technologies</p>
                            <ul className="space-y-1 text-sm text-zinc-300">
                              <li>• New language or framework</li>
                              <li>• Different programming paradigm</li>
                              <li>• Architecture patterns</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Remember: It's a Journey, Not a Sprint</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Every developer goes through periods of low motivation. The key is recognizing it early and taking action to reignite your passion for code.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/blog/what-i-wish-i-knew-before-learning-to-code"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          More Career Advice
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/projects"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          See My Projects
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