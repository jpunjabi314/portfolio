"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, Mail } from "lucide-react";
import Terminal from "./Terminal";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center min-h-[500px]">
        <AnimatePresence mode="wait">
          {!showTerminal ? (
            <motion.div key="bio" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center text-center max-w-3xl">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full border-2 border-slate-200 dark:border-cyan-500/20 p-2 shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/profile-icon.jpg"
                    alt="Jatin Punjabi"
                    fill
                    sizes="(min-width: 768px) 160px, 128px"
                    className="object-cover object-[center_20%] scale-125"
                    priority
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">Jatin Punjabi</h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 font-light leading-relaxed">
                Computer Engineering Student @ <span className="text-slate-900 dark:text-white font-medium">Boston University</span>
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <a href="mailto:jpunjabi314@gmail.com" className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl hover:border-cyan-500/50 transition-all"><Mail size={18} /> Email</a>
                <a href="https://github.com/jpunjabi314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl hover:border-cyan-500/50 transition-all"><GithubIcon size={18} /> GitHub</a>
                <a href="https://linkedin.com/in/jatinpunjabi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl hover:border-cyan-500/50 transition-all"><LinkedinIcon size={18} /> LinkedIn</a>
              </div>

              <button onClick={() => setShowTerminal(true)} className="flex items-center gap-2 px-10 py-4 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-black rounded-2xl hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all active:scale-95 shadow-xl uppercase text-xs tracking-widest">
                <TerminalIcon size={18} /> Launch Dev Terminal
              </button>
            </motion.div>
          ) : (
            <motion.div key="terminal" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} className="w-full flex justify-center">
              <Terminal onExit={() => setShowTerminal(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}