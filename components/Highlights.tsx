import { highlights } from "@/data/site";

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item) => (
            <div key={item.value} className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-center">
              <dt className="text-2xl md:text-3xl font-black tracking-tighter text-cyan-600 dark:text-cyan-400">{item.value}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
