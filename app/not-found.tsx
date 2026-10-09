import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <p className="font-mono text-sm text-cyan-600 dark:text-cyan-400 mb-4">guest@jatin-dev: ~ $ cd /this-page</p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white">404</h1>
        <p className="mt-6 text-xl text-slate-600 dark:text-slate-400">
          <span className="font-mono">sh: no such file or directory.</span> That page doesn&apos;t exist.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="px-8 py-4 rounded-2xl bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all">
            Back home
          </Link>
          <Link href="/projects" className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold hover:border-cyan-500/50 transition-all">
            See projects
          </Link>
        </div>
      </div>
    </div>
  );
}
