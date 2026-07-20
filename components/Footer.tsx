"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Jatin Punjabi</h3>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">Computer Engineering @ Boston University</p>
        </div>

        <div className="flex gap-8 text-sm text-slate-600 dark:text-slate-400">
          <Link href="/#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</Link>
          <Link href="/#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</Link>
          <Link href="/experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</Link>
        </div>

        <div className="text-slate-500 text-xs text-center md:text-right">
          <p>© 2026 Jatin Punjabi. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}