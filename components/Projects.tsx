"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      title: "Livelo Booking Widget",
      description: "Live, production booking widget for Livelo, built solo as part of my Software Engineering internship. Embedded cross-origin via a lightweight JS snippet, it lets customers book bike rentals with delivery/pickup, guided rides, and accessories across 50+ locations. Backed by Supabase (Postgres + Deno Edge Functions) for orders, inventory, and pricing, with Auth0 passwordless OTP login, Stripe Elements for payments (a dev-token-gated test mode runs alongside live production keys), Postmark for server-rendered confirmation emails, and Mezmo for client-side error logging. Deployed on Vercel, with main as the auto-deploying production branch. Source code is under NDA and cannot be shared.",
      image: "/images/booking-widget.png",
      tags: ["React", "TypeScript", "Vite", "Supabase", "Deno Edge Functions", "Auth0", "Stripe", "Postmark", "Mezmo", "Vercel"],
      link: "https://booking.livelo.cc/sydney"
    },
    {
      title: "Livelo Admin Site",
      description: "Internal admin dashboard for Livelo's multi-city bike-rental operations, built to match a locked design mockup pixel-for-pixel. Covers order management (list, detail, status lifecycle, cancellations, New/Edit Order wizards), a product/variant/fleet-unit catalogue with ROI tracking, full location configuration (delivery, pickup, couriers, guides, commissions), events and special dates, dashboards and reports, and an upcoming live chat/inbox spanning admin, partner, guide, and customer roles. Integrates Stripe, Postmark, Twilio, and Nominatim with role-based access for admin/partner/investor/guide staff, built in phases against a real Supabase schema and verified live at each step. Internal tool under NDA — no public link or source available.",
      image: "/images/livelo-admin-site.png",
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Postmark", "Twilio", "Nominatim"],
    },
    {
      title: "My Livelo – Customer Self-Service Portal",
      description: "A production customer self-service portal built solo, end-to-end, for Livelo's multi-city bike-rental operations — replacing a support-inbox-only experience with a full self-service app backed entirely by live data, with zero fabricated or placeholder content. Passwordless Auth0 magic-link sign-in issues a custom HMAC-signed portal session token (no passwords exist in the system), including true one-click login from transactional emails. Booking detail is built from a real 12-stage fulfillment pipeline with client-generated calendar invites (.ics) and receipts, alongside a two-pane real-time support chat (Ably) with per-role avatars and read receipts, deep-linkable from any booking. A four-tier loyalty program (Stagiaire, Rouleur, Pro, Legend) is computed server-side in Postgres and recomputed on order placement, with redeemable coupons/credit and full redemption history, plus rider profile/garage management, a six-step post-trip feedback wizard, and an embeddable iframe mode for the marketing site. Backend is ~18 Supabase Edge Functions (Deno) sharing a hand-rolled, enumeration-safe auth layer, built strictly against the real Postgres schema — messy real-world fields were handled explicitly and backend-less UI (e.g. change password) was deliberately omitted rather than shipped as dead buttons — with full TypeScript strictness, ESLint, and Vitest across a clean CI pipeline.",
      image: "/images/my-livelo.png",
      tags: ["React", "TypeScript", "Vite", "React Router", "Supabase", "Deno Edge Functions", "Auth0", "Ably", "Tailwind CSS"],
      link: "https://my.livelo.cc"
    },
    {
      title: "Noogie – Best Design @ PennApps XXVI",
      description: "An AI-powered news platform delivering unbiased summaries and interactive visualizations. Built scalable APIs and data pipelines to scrape, process, and normalize articles, with robust error handling. Integrated OpenAI’s API and custom classification models to cluster content, improving performance and UX.",
      image: "/images/noogie.png",
      tags: ["Python", "TypeScript", "React", "Supabase", "d3.js", "OpenAI API"],
      link: "https://github.com/ruslannnn2/noogie"
    },
    {
      title: "DeepVerify",
      description: "A backend proxy that intercepts media in transit and flags deepfakes with a live authenticity score before content reaches users. Built a Rust reverse proxy with an asynchronous scoring pipeline in front of a self-hosted detector, diagnosing a critical recall failure and swapping in a CLIP-based classifier to reach 94% recall. Integrated a WebAssembly verification badge, a Cloudflare Worker, and a real-time React dashboard to surface results client-side without adding latency.",
      image: "/images/deep-verify.png",
      tags: ["Rust", "TypeScript", "React", "WebAssembly", "Supabase", "Cloudflare Workers"],
      link: "https://github.com/jpunjabi314/deep-verify"
    },
    {
      title: "Global Origins Plotter",
      description: "\"Global Origins Plotter\" is a Qt-based map app that plots where people come from. This project loads a dataset of people (from a CSV) and displays their region of origin as dots on an interactive world map. The map is rendered using Qt Location + QML, and the backend is written in C++.",
      image: "/images/plotter.png",
      tags: ["C++", "QML", "Qt"],
      link: "https://github.com/jpunjabi314/Global-Origins-Plotter"
    },
    {
      title: "Color Sorter",
      description: "Engineered a compact, fully automated candy-sorting prototype using Arduino and C++. The project featured a dual-motor system, color sensors, and a custom-fabricated housing (CAD/3D printing), all delivered within a $200 budget.",
      image: "/images/sorter.jpeg",
      tags: ["C++", "Arduino", "CAD", "TinkerCad"],
      link: "https://drive.google.com/file/d/1QZb6wiIxoDFaBGV2CJGsetW22KAYFtMn/view?usp=sharing"
    },
    {
      title: "Temperature Sensor Box",
      description: "Built a temperature monitoring system using a microcontroller, TMP36 sensor, LCD, LEDs, and a piezo buzzer. Programmed to display real-time readings and trigger alerts when outside the 80ºF–90ºF range. Gained experience in CAD design, circuit assembly, and microcontroller programming.",
      image: "/images/tempsensor.png",
      tags: ["Arduino", "C++", "OnShape", "Circuit Design", "Soldering"],
      link: "https://drive.google.com/file/d/1hOWGOCMHzZmpdBrY6behv4qb9dZarITA/view?usp=sharing"
    },
    {
      title: "Typing Wars",
      description: "A single- and multi-player typing game with smooth UI transitions, responsive gameplay, and real-time scoring. Integrated Firebase Authentication and Firestore for user management, high score persistence, and game history. Added AI-powered feedback and performance analytics with OpenAI API.",
      image: "/images/typewars.png",
      tags: ["JavaScript", "Node.js", "Firebase", "OpenAI API", "HTML", "CSS"],
      link: "https://github.com/jpunjabi314/TypingWars"
    },
    {
      title: "EduQuest",
      description: "A classroom engagement platform where teachers can reward students to boost participation. Implemented leaderboards, prize redemption, and progress tracking features to gamify learning. Built a scalable, maintainable, and responsive web app with modern frontend practices.",
      image: "/images/eduquest.png",
      tags: ["TypeScript", "Next.js", "CSS"],
      link: "https://github.com/jpunjabi314/eduquest"
    }
  ];

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
      <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tighter text-center">
            Featured Work
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/50 dark:hover:border-cyan-500/30 transition-all duration-300 shadow-xl dark:shadow-2xl flex flex-col hover:-translate-y-2"
              >
                <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Modal Overlay stays inside the section or fragment */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60"
              onClick={handleBackdropClick}
            >
              <motion.div 
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Left Side: Image Presentation */}
                <div className="relative md:w-1/2 h-64 md:h-auto bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center p-6 md:p-10 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/10">
                  <div className="relative w-full h-full max-h-[50vh] md:max-h-[70vh]">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain rounded-xl drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Right Side: Scrollable Content */}
                <div className="relative md:w-1/2 flex flex-col max-h-full">
                  <div className="absolute top-0 right-0 z-10 p-4 md:p-6">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:scale-105 active:scale-95"
                      aria-label="Close modal"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-grow">
                    <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 pr-12 leading-tight">
                      {selectedProject.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100/50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 px-4 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="w-12 h-1 bg-cyan-500 rounded-full mb-8 opacity-50"></div>

                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-10 font-medium">
                      {selectedProject.description}
                    </p>

                    {selectedProject.link ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-400/25 hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-slate-900"
                      >
                        View Project
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
          )}
        </AnimatePresence>
      </section>
  );
}