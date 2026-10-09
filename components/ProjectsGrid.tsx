"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            onClick={() => setSelected(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(project);
              }
            }}
            className="cursor-pointer group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 transition-all duration-300 shadow-xl dark:shadow-2xl flex flex-col hover:-translate-y-2"
          >
            <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">
                    +{project.tags.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal key={selected.title} project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
}
