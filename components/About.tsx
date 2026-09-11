"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-100 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-slate-700 dark:text-slate-400 leading-relaxed text-lg">
            <p>
              I am majoring in Computer Engineering at Boston University, with a concentration in 
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> Machine Learning</span> and a minor in 
              <span className="text-slate-900 dark:text-white font-medium"> Business Administration & Management</span>. 
              I am passionate about building innovative projects that bridge the gap between technical complexity 
              and real-world impact.
            </p>
            <p>
              My experience spans software development, hardware engineering, and advanced research.
              Currently, I work as a Platform Engineer at
              <span className="text-slate-900 dark:text-white font-medium"> Livelo</span>, where I am working on software to improve the
              <span className="text-slate-900 dark:text-white font-medium"> customer experience</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}