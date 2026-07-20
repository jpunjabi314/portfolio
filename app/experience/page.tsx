import Experience from "@/components/Experience";
import { FileText } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Experience</h1>
        
        {/* Resume Button */}
        <a 
          href="/Jatin_Punjabi_Internship_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-full hover:bg-cyan-400 transition-all"
        >
          <FileText size={18} /> View Full Resume
        </a>
      </div>
      
      <Experience />
    </div>
  );
}