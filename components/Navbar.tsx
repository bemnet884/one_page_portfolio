"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Ventures", href: "#ventures" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-6">
      <div
        className={`relative transition-all duration-500 ${scrolled
          ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 rounded-2xl"
          : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-200/30 dark:border-neutral-700/30 rounded-3xl"
          }`}
      >
        <div className="flex items-center justify-between p-2">

          {/* Logo */}
          <div className="flex-shrink-0 pl-3">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              BB
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 mx-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  onClick={() => setIsOpen(false)} // close mobile menu if open
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2 pr-2">
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="#ventures"
              title="Interested in building with me? Click to propose partnership."
              className="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Partner
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden border-t border-neutral-200 dark:border-neutral-700 p-3 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>

      {/* Background Glow */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ${scrolled
          ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl rounded-2xl"
          : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"
          }`}
      ></div>
    </nav>
  );
}
