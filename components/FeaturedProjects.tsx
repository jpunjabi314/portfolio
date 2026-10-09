import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tighter text-center">
          Featured Work
        </h2>
        <ProjectsGrid projects={projects.filter((p) => p.featured)} />
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:border-cyan-500/50 transition-all"
          >
            View all projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
