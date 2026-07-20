"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme ?? "dark";

    if (initialTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
  ];

  const isActive = (href: string) => {
    const [path, hashPart] = href.split("#");
    if (hashPart) return pathname === (path || "/") && hash === `#${hashPart}`;
    return pathname === href && hash === "";
  };

  // next/link updates the URL via pushState for same-page hash links, which
  // doesn't fire the native "hashchange" event, so sync state eagerly on click.
  const handleNavClick = (href: string) => {
    const hashPart = href.split("#")[1];
    setHash(hashPart ? `#${hashPart}` : "");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter z-50 relative"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setHash("");
          }}
        >
          JATIN PUNJABI
        </Link>
        
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/Jatin_Punjabi_Internship_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FileText size={14} /> Resume
            </a>
          </div>

          {/* Theme Toggle Button (Visible on both Mobile & Desktop) */}
          <button
            onClick={toggleTheme}
            className="z-50 relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/5 flex items-center justify-center min-w-[38px] min-h-[38px]"
            aria-label="Toggle Theme"
          >
            {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <span className="w-[18px] h-[18px]" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all border border-slate-200 dark:border-white/5 flex items-center justify-center"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleNavClick(link.href);
              }}
              className={`block text-lg font-medium transition-colors ${
                isActive(link.href)
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/Jatin_Punjabi_Internship_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}