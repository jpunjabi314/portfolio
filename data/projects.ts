export type Project = {
  title: string;
  summary: string;
  bullets: string[];
  image: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Livelo Booking Widget",
    summary: "Live production booking widget for Livelo, built solo during my internship and serving 50+ locations.",
    bullets: [
      "Embedded cross-origin via a lightweight JS snippet; customers book bike rentals with delivery/pickup, guided rides, and accessories.",
      "Supabase (Postgres + Deno Edge Functions) backs orders, inventory, and pricing.",
      "Auth0 passwordless OTP login, Stripe Elements payments (a dev-token-gated test mode runs alongside live production keys), Postmark confirmation emails, and Mezmo client-side error logging.",
      "Deployed on Vercel, with main as the auto-deploying production branch.",
      "Source code is under NDA and cannot be shared.",
    ],
    image: "/images/booking-widget.png",
    tags: ["React", "TypeScript", "Vite", "Supabase", "Deno Edge Functions", "Auth0", "Stripe", "Postmark", "Mezmo", "Vercel"],
    link: "https://booking.livelo.cc/sydney",
    featured: true,
  },
  {
    title: "Livelo Admin Site",
    summary: "Internal admin dashboard for Livelo's multi-city bike-rental operations, built to match a locked design mockup pixel-for-pixel.",
    bullets: [
      "Order management: list, detail, status lifecycle, cancellations, and New/Edit Order wizards.",
      "Product/variant/fleet-unit catalogue with ROI tracking.",
      "Full location configuration (delivery, pickup, couriers, guides, commissions), plus events and special dates, dashboards, and reports.",
      "Live chat/inbox spanning admin, partner, guide, and customer roles planned for the final phase.",
      "Integrates Stripe, Postmark, Twilio, and Nominatim, with role-based access for admin/partner/investor/guide staff.",
      "Built in phases against a real Supabase schema, each verified live before moving on. Internal tool under NDA.",
    ],
    image: "/images/livelo-admin-site.png",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Postmark", "Twilio", "Nominatim"],
  },
  {
    title: "Livelo Customer Portal",
    summary: "Production self-service portal built solo, end-to-end, replacing a support-inbox-only experience with a full app backed by live data.",
    bullets: [
      "Passwordless Auth0 magic-link sign-in with a custom HMAC-signed portal session token. No passwords exist in the system, including one-click login from transactional emails.",
      "Booking detail built from a real 12-stage fulfillment pipeline, with client-generated calendar invites (.ics) and receipts.",
      "Real-time support chat (Ably) with per-role avatars and read receipts, deep-linkable from any booking.",
      "Four-tier loyalty program (Stagiaire, Rouleur, Pro, Legend) computed server-side in Postgres, with redeemable coupons/credit and full redemption history.",
      "Rider profile and garage, a six-step post-trip feedback wizard, and an embeddable iframe mode for the marketing site.",
      "~18 Supabase Edge Functions (Deno) share a hand-rolled, enumeration-safe auth layer; strict TypeScript, ESLint, and Vitest with a clean CI pipeline.",
      "Built strictly against the real Postgres schema. UI with no real backend (e.g. change password) was omitted rather than shipped as a dead button.",
    ],
    image: "/images/my-livelo.png",
    tags: ["React", "TypeScript", "Vite", "React Router", "Supabase", "Deno Edge Functions", "Auth0", "Ably", "Tailwind CSS"],
    link: "https://my.livelo.cc",
    featured: true,
  },
  {
    title: "Noogie – Best Design @ PennApps XXVI",
    summary: "AI-powered news platform delivering unbiased summaries and interactive visualizations, built with a team of 3.",
    bullets: [
      "Built scalable APIs and data pipelines to scrape, process, and normalize 500+ articles daily, with robust error handling.",
      "Developed a vector-similarity clustering algorithm to group daily articles by topic.",
      "Integrated OpenAI's API and custom classification models to cluster content, improving performance and UX.",
    ],
    image: "/images/noogie.png",
    tags: ["Python", "TypeScript", "React", "Supabase", "d3.js", "OpenAI API"],
    link: "https://github.com/ruslannnn2/noogie",
    featured: true,
  },
  {
    title: "DeepVerify",
    summary: "Backend proxy that intercepts media in transit and flags deepfakes with a live authenticity score before content reaches users.",
    bullets: [
      "Built a Rust reverse proxy with an asynchronous scoring pipeline in front of a self-hosted detector.",
      "Diagnosed a critical recall failure (0% recall) and swapped in a CLIP-based classifier, reaching 94% recall and 79% accuracy on a 100-image test set.",
      "Integrated a WebAssembly verification badge, a Cloudflare Worker, and a real-time React dashboard to surface results client-side without adding latency.",
    ],
    image: "/images/deep-verify.png",
    tags: ["Rust", "TypeScript", "React", "WebAssembly", "Supabase", "Cloudflare Workers"],
    link: "https://github.com/jpunjabi314/deep-verify",
  },
  {
    title: "Global Origins Plotter",
    summary: "Qt-based map app that plots where people come from on an interactive world map.",
    bullets: [
      "Loads a dataset of people from a CSV and displays each person's region of origin as dots on the map.",
      "Map rendered with Qt Location + QML; the backend is written in C++.",
    ],
    image: "/images/plotter.png",
    tags: ["C++", "QML", "Qt"],
    link: "https://github.com/jpunjabi314/Global-Origins-Plotter",
  },
  {
    title: "Color Sorter",
    summary: "Fully automated candy-sorting prototype built with Arduino and C++, delivered within a $200 budget.",
    bullets: [
      "Dual-motor system with color sensors to sort candy automatically.",
      "Custom-fabricated housing designed with CAD and 3D printing.",
    ],
    image: "/images/sorter.jpeg",
    tags: ["C++", "Arduino", "CAD", "TinkerCad"],
    link: "https://drive.google.com/file/d/1QZb6wiIxoDFaBGV2CJGsetW22KAYFtMn/view?usp=sharing",
    linkLabel: "View Project Report",
  },
  {
    title: "Temperature Sensor Box",
    summary: "Temperature monitoring system with real-time readings and alerts outside an 80ºF–90ºF range.",
    bullets: [
      "Built with a microcontroller, TMP36 sensor, LCD, LEDs, and a piezo buzzer.",
      "Gained experience in CAD design, circuit assembly, and microcontroller programming.",
    ],
    image: "/images/tempsensor.png",
    tags: ["Arduino", "C++", "OnShape", "Circuit Design", "Soldering"],
    link: "https://drive.google.com/file/d/1hOWGOCMHzZmpdBrY6behv4qb9dZarITA/view?usp=sharing",
    linkLabel: "View Project Report",
  },
  {
    title: "Typing Wars",
    summary: "Single- and multi-player typing game with real-time scoring and AI-powered feedback.",
    bullets: [
      "Smooth UI transitions and responsive gameplay.",
      "Firebase Authentication and Firestore handle user management, high score persistence, and game history.",
      "AI-powered feedback and performance analytics with the OpenAI API.",
    ],
    image: "/images/typewars.png",
    tags: ["JavaScript", "Node.js", "Firebase", "OpenAI API", "HTML", "CSS"],
    link: "https://github.com/jpunjabi314/TypingWars",
  },
  {
    title: "EduQuest",
    summary: "Classroom engagement platform where teachers reward students to boost participation.",
    bullets: [
      "Leaderboards, prize redemption, and progress tracking to gamify learning.",
      "Scalable, maintainable, and responsive web app built with modern frontend practices.",
    ],
    image: "/images/eduquest.png",
    tags: ["TypeScript", "Next.js", "CSS"],
    link: "https://github.com/jpunjabi314/eduquest",
  },
];
