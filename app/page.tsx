import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Make sure there is NO hardcoded "bg-slate-950" here!
    <main className="min-h-screen bg-transparent"> 
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}