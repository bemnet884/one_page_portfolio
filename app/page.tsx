// src/app/page.tsx

import Projects from "@/components/Projects";
import Ventures from "@/components/Ventures";
import Contact from "@/components/Contact";
import { Container } from "@/components/common/Container";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Projects />
      <Ventures />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
