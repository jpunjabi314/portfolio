import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tighter text-center">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all shadow-lg dark:shadow-none">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
