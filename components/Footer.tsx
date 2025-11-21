// src/components/Footer.tsx
import React from "react";
import { Container } from "./common/Container";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-linear-to-br from-blue-900 via-blue-950 to-indigo-900 py-10 text-white ">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bemenet B.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {["About", "Process", "Projects", "Ventures", "Skills", "Testimonials", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/bemnet884"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/bemnetbeyene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:bemnet537@gmail.com"
            className="hover:text-white/90 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
