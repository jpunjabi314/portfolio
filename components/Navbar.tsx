"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { site } from "@/data/site";

type Theme = "light" | "dark";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
];

const homeSections = ["about", "skills"];

function getTheme(): Theme {
  try {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function subscribeTheme(callback: () => void) {
  const handler = () => {
    applyTheme(getTheme());
    callback();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("themechange", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("themechange", handler);
  };
}

export default function Navbar() {
  const pathname = usePathname();
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark" as Theme);
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("");

  const isMobileMenuOpen = menuOpenPath === pathname;

  useEffect(() => {
    if (pathname !== "/") return;
    const elements = homeSections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) setActiveSection(id);
          else setActiveSection((current) => (current === id ? "" : current));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}
    window.dispatchEvent(new Event("themechange"));
  };

  const closeMenu = () => setMenuOpenPath(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeSection === "";
    if (href.startsWith("/#")) return pathname === "/" && activeSection === href.slice(2);
    return pathname === href;
  };

  const linkClass = (active: boolean, size: "sm" | "lg") =>
    `${size === "sm" ? "text-sm" : "block text-lg"} font-medium transition-colors ${
      active
        ? "text-cyan-600 dark:text-cyan-400"
        : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter z-50 relative"
          onClick={closeMenu}
        >
          JATIN PUNJABI
        </Link>

        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={linkClass(isActive(link.href), "sm")}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FileText size={14} /> Resume
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="z-50 relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/5 flex items-center justify-center min-w-[38px] min-h-[38px]"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpenPath(isMobileMenuOpen ? null : pathname)}
            className="md:hidden z-50 relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/5 flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(isActive(link.href), "lg")}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
