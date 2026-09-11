export default function Experience() {
  const experiences = [
    {
      role: "Platform Engineer",
      company: "Livelo",
      period: "September 2026 - Present",
      description: "Owning ongoing maintenance and reliability of the booking, admin, and chat platforms built during the initial internship, supporting 50+ partner locations across production systems.",
    },
    {
      role: "Software Engineering Intern",
      company: "Livelo",
      period: "January 2026 - August 2026",
      description: "Built a full-stack booking system with React, TypeScript, and Supabase that replaced Shopify, HubSpot, and Zapier, cutting Livelo's monthly software costs from $1,800 to roughly $150. Automated a booking workflow that previously required manual coordination across Asana, Shopify, and Zapier, reducing processing time per booking from 30-45 minutes to 10 minutes across 150-200+ orders/month. Built an admin platform (Supabase, Stripe, Postmark, Auth0) used by 50+ partner locations to manage pricing, inventory, bookings, and order flow, accelerating development with Claude Code, and shipped a real-time chat system with Ably in 2-3 weeks featuring persistence, notifications, read receipts, and file sharing.",
    },
    {
      role: "Undergraduate Research Intern - Data Analytics",
      company: "PsychoLinguistics Lab, Boston University",
      period: "September 2025 - May 2026",
      description: "Filtering 320 raw survey responses down to 182 valid submissions and engineering 5 Moral Foundations Questionnaire subscores from 32 survey items using Python and pandas. Compared moral foundation scores across a 26-person bilingual subsample (14 English, 12 Hindi speakers), finding English speakers scored higher on all 5 foundations, with results presented at the Eastern Psychological Conference.",
    },
    {
      role: "Logistics Team",
      company: "BostonHacks",
      period: "January 2025 - Present",
      description: "Authored the full Run of Show for the Fall 2025 hackathon serving 300+ students, coordinating workshop and vendor scheduling on a 3-person logistics team. Hosted a Mini-Hackathon to garner engagement.",
    },
    {
      role: "IT Support Technician",
      company: "Boston University IT Help Center",
      period: "August 2024 - Present",
      description: "Resolving 15-23 hardware, software, and account support tickets per shift via phone, walk-in, and email, logging each in ServiceNow and assisting faculty with code debugging.",
    },
    {
      role: "Student Leadership Coach & State Consultant",
      company: "New Jersey Future Business Leaders of America (FBLA)",
      period: "July 2024 - Present",
      description: "Acting as a liaison between State Staff and Officers while facilitating annual 4-day leadership training. Serving as the Elections Coordinator at the 2025 & 2026 NJ FBLA State Leadership Conferences.",
    },
    {
      role: "Undergraduate Researcher",
      company: "Human to Everything (H2X) Lab",
      period: "October 2025 - December 2025",
      description: "Collected motion-capture sensor data across 5 dog studies and cleaned/edited JSON files for 100+ motion clips to support an ML model analyzing canine kinematics.",
    },
    {
      role: "Python Instructor",
      company: "Thinkland.ai",
      period: "April 2021 - August 2025",
      description: "Taught a Python curriculum spanning basics through object-oriented programming to 50+ students in grades 5-8 over 4 years, designing one applied project per term. Recognized as a STAR Teacher, an honor held by roughly 4-5% of instructors, for curriculum quality and weekly family progress reporting.",
    },
    {
      role: "Director of Training & Curriculum Development",
      company: "AiGoLearning",
      period: "January 2023 - August 2024",
      description: "Revamped training for 600+ teachers and led the development of new AI and Math curricula. Managed leadership team restructuring and established a coding partnership for students in Tasmania.",
    }
  ];

  return (
      <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 tracking-tighter text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-all shadow-lg dark:shadow-none">
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