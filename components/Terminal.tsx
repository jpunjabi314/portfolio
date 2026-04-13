"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const COMMANDS = {
  help: "Available commands: about, projects, skills, contact, clear, exit",
  about: "Jatin Punjabi: Computer Engineering student @ BU with a concentration on Machine Learning.",
  skills: "Technical Skills: Python, JavaScript, TypeScript, Java, C/C++, Swift, HTML, CSS, MATLAB Bash/Zsh.",
  projects: "Featured: Noogie, Typing Wars, Global Origins Plotter.",
  contact: "Email: jpunjabi314@gmail.com | GitHub: jpunjabi314.",
};

export default function Terminal({ onExit }: { onExit: () => void }) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome to jatin-workstation. Type 'help' to start."]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    const newHistory = [...history, `> ${input}`];

    if (cmd === "clear") setHistory([]);
    else if (cmd === "exit") onExit();
    else if (cmd in COMMANDS) setHistory([...newHistory, COMMANDS[cmd as keyof typeof COMMANDS]]);
    else if (cmd !== "") setHistory([...newHistory, `sh: command not found: ${cmd}`]);
    setInput("");
  };

  return (
    <motion.div className="w-full max-w-4xl h-[450px] bg-slate-900/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-300 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl font-mono text-sm text-cyan-400 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/50" /><div className="w-3 h-3 rounded-full bg-yellow-500/50" /><div className="w-3 h-3 rounded-full bg-green-500/50" /></div>
          <span className="text-slate-500 text-xs ml-4">guest@jatin-dev: ~</span>
        </div>
        <button onClick={onExit} className="text-slate-500 hover:text-white transition-colors"><X size={18} /></button>
      </div>
      <div ref={containerRef} className="flex-grow overflow-y-auto custom-scrollbar pr-2 space-y-1">
        {history.map((line, i) => <div key={i} className="leading-relaxed opacity-90">{line}</div>)}
        <form onSubmit={handleCommand} className="flex items-center"><span className="text-cyan-500 mr-2">➜</span><input autoFocus className="bg-transparent border-none outline-none flex-grow text-white" value={input} onChange={(e) => setInput(e.target.value)} /></form>
      </div>
    </motion.div>
  );
}