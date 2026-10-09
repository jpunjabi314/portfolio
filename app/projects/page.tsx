import type { Metadata } from "next";
import Projects from "@/components/Projects";

const description = "Production Livelo platforms, a deepfake-detection proxy, hackathon winners, and hardware builds.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects | Jatin Punjabi", description, url: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Featured Projects</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          A collection of my work spanning AI, full-stack development, and hardware engineering.
        </p>
      </div>
      
      <Projects />
    </div>
  );
}