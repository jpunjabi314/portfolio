import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <Hero />
      <Highlights />
      <FeaturedProjects />
      <About />
      <Skills />
    </div>
  );
}
