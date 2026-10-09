import { projects } from "@/data/projects";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-6">
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}
