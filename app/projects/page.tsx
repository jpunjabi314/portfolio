import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-950 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Featured Projects</h1>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          A collection of my work spanning AI, full-stack development, and hardware engineering.
        </p>
      </div>
      
      <Projects />
    </div>
  );
}