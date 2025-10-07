import Link from "next/link";
import Image from "next/image";
import Aurora from "@/components/Aurora";

export const metadata = {
  title: "What I Wish I Knew Before Learning to Code | Giuseppe Giona",
  description: "Honest advice for new developers: the challenges, the misconceptions, and the mindset shifts that actually matter.",
  openGraph: {
    title: "What I Wish I Knew Before Learning to Code",
    description: "Honest advice for new developers: the challenges, the misconceptions, and the mindset shifts that actually matter.",
    images: ["/LearningToCode.png"],
  },
};

export default function WhatIWishIKnewPost() {
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
                {["beginner", "career", "learning", "advice", "coding-journey"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono hover:bg-cyan-400/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent leading-tight">
                What I Wish I Knew
                <span className="block text-4xl lg:text-6xl mt-4 text-emerald-400">
                  Before Learning to Code
                </span>
              </h1>
              
              <div className="flex items-center gap-6 text-zinc-400 font-mono text-sm mb-12">
                <time dateTime="2024-11-15">November 15, 2024</time>
                <span>•</span>
                <span>9 min read</span>
                <span>•</span>
                <span className="text-emerald-400">Beginner Guide</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mb-16">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
              <Image
                src="/LearningToCode.png"
                alt="Learning to code journey and beginner programming advice"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </section>

        <main className="relative">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <h3 className="font-bold text-white mb-4 text-lg">Key Topics</h3>
                    <nav className="space-y-3">
                      <a href="#reality-check" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Reality Check</a>
                      <a href="#mindset-shifts" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Mindset Shifts</a>
                      <a href="#learning-strategy" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Learning Strategy</a>
                      <a href="#career-advice" className="block text-zinc-400 hover:text-cyan-400 transition-colors text-sm">Career Advice</a>
                    </nav>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-xl p-6">
                    <h3 className="font-bold text-emerald-400 mb-4">Learning Timeline</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Basic concepts:</span>
                        <span className="text-white font-bold">3-6 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Job-ready skills:</span>
                        <span className="text-emerald-400 font-bold">12-18 months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Senior level:</span>
                        <span className="text-cyan-400 font-bold">3-5+ years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              <article className="lg:col-span-4">
                <div className="prose prose-xl prose-invert max-w-none">
                  
                  <div className="text-xl leading-relaxed text-zinc-300 mb-12 border-l-4 border-emerald-400 pl-8 bg-emerald-400/5 rounded-r-xl py-6">
                    <p className="mb-6">
                      If I could go back and talk to myself when I first started learning to code, I'd save months of frustration and countless hours of going down the wrong path. Here's the honest truth about learning to code that no one tells beginners.
                    </p>
                    <p className="text-emerald-400 font-semibold">
                      It's not about being naturally gifted. It's about persistence and strategy.
                    </p>
                  </div>

                  <section id="reality-check" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-bold">
                        ⚡
                      </span>
                      The Reality Check Nobody Gives You
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-400 mb-4">❌ What People Think</h3>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li>• "Learn to code in 30 days!"</li>
                          <li>• "You need to be naturally good at math"</li>
                          <li>• "Memorize syntax and algorithms"</li>
                          <li>• "Build perfect code from day one"</li>
                          <li>• "Pick one language and stick to it forever"</li>
                          <li>• "Coding bootcamp = guaranteed job"</li>
                        </ul>
                      </div>
                      
                      <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-emerald-400 mb-4">✅ The Actual Truth</h3>
                        <ul className="space-y-3 text-sm text-zinc-300">
                          <li>• Learning never stops (and that's exciting!)</li>
                          <li>• Problem-solving matters more than math</li>
                          <li>• Google and Stack Overflow are your friends</li>
                          <li>• Messy code is normal for beginners</li>
                          <li>• You'll use multiple languages in your career</li>
                          <li>• Building projects teaches more than tutorials</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-2xl p-8">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">💡</span>
                        <div>
                          <h3 className="text-2xl font-bold text-yellow-400 mb-4">The Biggest Misconception</h3>
                          <p className="text-lg text-zinc-300 leading-relaxed">
                            <strong className="text-white">You don't need to be a "math person" or "naturally logical."</strong> 
                            Some of the best developers I know struggled with traditional math but excel at breaking down problems into smaller pieces. 
                            Programming is more about patience and persistence than raw intelligence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="mindset-shifts" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-black font-bold">
                        🧠
                      </span>
                      Essential Mindset Shifts
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-purple-400 mb-6">From "I'm Not Smart Enough" to "I Haven't Learned This Yet"</h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-red-400 mb-3">❌ Fixed Mindset</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• "I'm not a coding person"</li>
                              <li>• "This is too hard for me"</li>
                              <li>• "Other people pick this up faster"</li>
                              <li>• "I should understand this immediately"</li>
                            </ul>
                          </div>
                          
                          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-emerald-400 mb-3">✅ Growth Mindset</h4>
                            <ul className="space-y-2 text-sm text-zinc-300">
                              <li>• "I can learn this with practice"</li>
                              <li>• "This is challenging, but doable"</li>
                              <li>• "Everyone learns at their own pace"</li>
                              <li>• "Confusion is part of the learning process"</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6">Embrace the Struggle</h3>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🤔</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Confusion is Normal</h4>
                            <p className="text-zinc-400 text-sm">Feeling lost? That means you're learning something new and challenging your brain.</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🐛</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Bugs are Teachers</h4>
                            <p className="text-zinc-400 text-sm">Every error message is your code trying to tell you something. Learn to listen.</p>
                          </div>
                          
                          <div className="text-center">
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                              <span className="text-2xl">🎯</span>
                            </div>
                            <h4 className="font-bold text-white mb-2">Progress Over Perfection</h4>
                            <p className="text-zinc-400 text-sm">Working code beats perfect code. You can always refactor later.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="learning-strategy" className="mb-16">
                    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-4">
                      <span className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center text-black font-bold">
                        📚
                      </span>
                      Learning Strategy That Actually Works
                    </h2>
                    
                    <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/20 rounded-2xl p-8 mb-8">
                      <h3 className="text-2xl font-bold text-emerald-400 mb-6">The 70-20-10 Rule</h3>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl font-bold text-emerald-400">70%</div>
                            <h4 className="font-bold text-white">Building Projects</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Personal projects</li>
                            <li>• Code challenges</li>
                            <li>• Contributing to open source</li>
                            <li>• Rebuilding existing apps</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl font-bold text-cyan-400">20%</div>
                            <h4 className="font-bold text-white">Learning from Others</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Code reviews</li>
                            <li>• Pair programming</li>
                            <li>• Developer communities</li>
                            <li>• Mentorship</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                          <div className="text-center mb-4">
                            <div className="text-4xl font-bold text-purple-400">10%</div>
                            <h4 className="font-bold text-white">Formal Learning</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-zinc-300">
                            <li>• Tutorials and courses</li>
                            <li>• Documentation</li>
                            <li>• Books and articles</li>
                            <li>• Conference talks</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyan-400/5 border-l-4 border-cyan-400 pl-8 py-6 rounded-r-xl">
                      <p className="text-lg text-zinc-300 leading-relaxed">
                        <strong className="text-cyan-400">Pro tip:</strong> Stop tutorial hell by building something after every major concept you learn. 
                        Watched a video about functions? Write a small program using functions. Learned about APIs? Build something that consumes an API.
                      </p>
                    </div>
                  </section>

                  <section className="mb-16">
                    <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-emerald-500/10 border border-emerald-400/20 rounded-2xl p-8 text-center">
                      <h3 className="text-3xl font-bold text-white mb-4">Your Coding Journey Starts with One Line</h3>
                      <p className="text-lg text-zinc-300 mb-6">
                        Remember: every expert was once a beginner. The difference between those who succeed and those who quit isn't talent—it's persistence and the right approach.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                          href="/blog/stay-motivated-as-a-developer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-200"
                        >
                          Stay Motivated
                          <span>→</span>
                        </Link>
                        <Link 
                          href="/projects"
                          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-200"
                        >
                          See Example Projects
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