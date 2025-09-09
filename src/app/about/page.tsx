"use client";
import React from "react";
import { motion } from "framer-motion";
import BackgroundFX from "@/components/BackgroundFX";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-zinc-100 flex flex-col">
      <BackgroundFX />
  <ResponsiveHeader />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl w-full bg-slate-900/80 rounded-2xl border border-slate-800 shadow-lg p-8 backdrop-blur-md"
        >
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-indigo-400 mb-6 font-mono tracking-tight"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-zinc-200 leading-relaxed font-mono"
          >
            I’m Giuseppe — a developer who thrives on turning ideas into working products. My background in mathematics taught me how to break down complex problems, and I’ve carried that mindset into building software that’s not just functional, but practical for real businesses.
            <br /><br />
            What excites me isn’t just writing code — it’s the process of creating something useful from scratch, refining it, and watching it make a difference for the people who use it. I’ve built tools around automation, AI, and web applications, always with the same goal: solve problems that matter.
            <br /><br />
            I’m not here to just tick boxes or play it safe. I want to build projects that push me, sharpen my skills, and deliver real value — whether that’s helping a small business streamline operations or contributing to something bigger in tech.
            <br /><br />
            If you’re looking for a developer who’s hungry to build, improve, and grow alongside the people he works with, that’s me.
          </motion.p>
        </motion.div>
      </main>
      <SiteFooter />
    </div>
  );
}
