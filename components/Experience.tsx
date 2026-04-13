import Footer from "@/components/Footer"; // Adjust the path if your file is located elsewhere

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "Livelo",
      period: "September 2025 - Present",
      description: "Building a full-stack rental system using React, TypeScript, and Supabase. Designed schemas and real-time backend services in Supabase, Stripe, and Auth0. Implemented autonomous AI agents to automate internal workflows and customer support.",
    },
    {
      role: "Undergraduate Research Intern - Data Analytics",
      company: "PsychoLinguistics Lab, Boston University",
      period: "September 2025 - Present",
      description: "Conducting advanced data analytics for a research study on bilingualism and morality using Python and pandas. Employing statistical modeling and generating data visualizations to support research findings.",
    },
    {
      role: "Logistics Team",
      company: "BostonHacks",
      period: "January 2025 - Present",
      description: "Planned and executed the Fall 2025 hackathon for 300+ students. Coordinated judges/vendors and event logistics by creating the 2025 Run of Show. Hosted a Mini-Hackathon to garner engagement.",
    },
    {
      role: "IT Support Technician",
      company: "Boston University IT Help Center",
      period: "August 2024 - Present",
      description: "Assisting clients with technical support via phone, walk-ins, and email while resolving hardware, software, and account issues. Logging and tracking service requests in ServiceNow and assisting faculty with code debugging.",
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
      description: "Assisted in developing an ML model to analyze dog motion patterns using motion capture sensor data. Contributed to research on creating digital representations of canine kinematics.",
    },
    {
      role: "Python Instructor",
      company: "Thinkland.ai",
      period: "April 2021 - August 2025",
      description: "Created and taught a Python curriculum from basics to object-oriented programming for students in grades 5-8. Assigned programming projects and maintained communication with parents via detailed reports.",
    },
    {
      role: "Director of Training & Curriculum Development",
      company: "AiGoLearning",
      period: "January 2023 - August 2024",
      description: "Revamped training for 600+ teachers and led the development of new AI and Math curricula. Managed leadership team restructuring and established a coding partnership for students in Tasmania.",
    }
  ];

  return (
    <>
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

      <Footer />
    </>
  );
}