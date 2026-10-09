"use client";
import { useEffect, useId, useRef } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
      >
        <div className="relative md:w-1/2 h-64 md:h-auto bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
          <div className="relative w-full h-full max-h-[50vh] md:max-h-[70vh]">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain rounded-xl drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="relative md:w-1/2 flex flex-col max-h-full">
          <div className="absolute top-0 right-0 z-10 p-4 md:p-6">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:scale-105 active:scale-95"
              aria-label="Close project details"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-grow">
            <h3 id={titleId} className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 pr-12 leading-tight">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100/50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="w-12 h-1 bg-cyan-500 rounded-full mb-8 opacity-50"></div>

            <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed mb-6 font-semibold">
              {project.summary}
            </p>

            <ul className="space-y-3 mb-10">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-slate-900"
              >
                {project.linkLabel ?? "View Project"}
                <ArrowRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 font-bold border border-slate-200 dark:border-white/10">
                Internal Tool — Not Publicly Available
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
