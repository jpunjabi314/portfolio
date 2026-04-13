"use client";
import { 
  Terminal, Cpu, Layers, Flame, Database, GitBranch, 
  Server, Palette, Wind, Globe, Briefcase, FileJson, Coffee, 
  Binary, ShieldCheck, Apple, Box, Monitor, FileText, Bot, Code2, Cloud
} from "lucide-react";

// --- Precise Brand SVGs ---
const PythonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c2.76 0 5 2.24 5 5v2h-2V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v2h6v10c0 2.76-2.24 5-5 5s-5-2.24-5-5v-2h2v2c0 1.66 1.34 3 3 3s3-1.34 3-3v-2H7V7c0-2.76 2.24-5 5-5z" />
  </svg>
);

const ReactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z" transform="rotate(30 12 12)" />
    <path d="M12 7c3.31 0 6 2.24 6 5s-2.69 5-6 5-6-2.24-6-5 2.69-5 6-5z" transform="rotate(150 12 12)" />
  </svg>
);

const MatlabIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 7l-9 5 9 5V7zM2 7l9 5-9 5V7zM12 2v20M2 12h20" />
  </svg>
);

const getIcon = (skill: string) => {
  const s = skill.toLowerCase();
  
  // Programming Languages
  if (s === "python") return <PythonIcon />;
  if (s === "javascript") return <FileJson className="w-4 h-4" />;
  if (s === "typescript") return <ShieldCheck className="w-4 h-4" />;
  if (s === "java") return <Coffee className="w-4 h-4" />;
  if (s === "c/c++") return <Binary className="w-4 h-4" />;
  if (s === "swift") return <Apple className="w-4 h-4" />;
  if (s === "html") return <Code2 className="w-4 h-4" />;
  if (s === "css") return <Palette className="w-4 h-4" />;
  if (s === "matlab") return <MatlabIcon />;
  if (s === "bash/zsh") return <Terminal className="w-4 h-4" />;
  
  // Frameworks & Tech
  if (s.includes("node")) return <Server className="w-4 h-4" />;
  if (s.includes("express")) return <Server className="w-4 h-4" />;
  if (s === "react") return <ReactIcon />;
  if (s === "next.js") return <Layers className="w-4 h-4" />;
  if (s.includes("tailwind")) return <Wind className="w-4 h-4" />;
  if (s === "firebase") return <Flame className="w-4 h-4" />;
  if (s === "cloud firestore") return <Database className="w-4 h-4" />;
  if (s === "openai api") return <Bot className="w-4 h-4" />;
  if (s === "arduino") return <Cpu className="w-4 h-4" />;

  // Tools
  if (s.includes("git")) return <GitBranch className="w-4 h-4" />;
  if (s === "vs code") return <Code2 className="w-4 h-4" />;
  if (s === "xcode") return <Apple className="w-4 h-4" />;
  if (s === "pycharm") return <PythonIcon />;
  if (s === "intellij") return <Coffee className="w-4 h-4" />;
  if (s === "vercel") return <Cloud className="w-4 h-4" />;
  if (s === "onshape") return <Box className="w-4 h-4" />;
  if (s === "servicenow") return <Briefcase className="w-4 h-4" />;
  if (s === "microsoft office") return <FileText className="w-4 h-4" />;

  return <Terminal className="w-4 h-4" />;
};

export default function Skills() {
  const skillGroups = [
    { 
      title: "Programming Languages", 
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "Swift", "HTML", "CSS", "MATLAB", "Bash/Zsh"] 
    },
    { 
      title: "Frameworks & Tech", 
      skills: ["Node.js", "Express.js", "React", "Next.js", "Firebase", "Cloud Firestore", "OpenAI API", "Arduino"] 
    },
    { 
      title: "Developer Tools", 
      skills: ["Git/GitHub", "VS Code", "Xcode", "PyCharm", "IntelliJ", "Vercel", "OnShape", "ServiceNow", "Microsoft Office"] 
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tighter text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all backdrop-blur-sm shadow-xl dark:shadow-2xl">
              <h3 className="text-cyan-500 dark:text-cyan-400 font-bold mb-8 text-xs uppercase tracking-[0.2em]">
                {group.title}
              </h3>
              <div className="flex flex-col gap-4">
                {group.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 group">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:text-slate-950 transition-colors shadow-inner">
                      {getIcon(skill)}
                    </div>
                    <span className="text-sm font-medium tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}