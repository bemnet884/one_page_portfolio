// src/components/sections/About.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { aboutData } from "@/data/about";
import Link from "next/link";

export default function About() {
  const { headline, pitch, highlights } = aboutData;

  return (
    <SectionWrapper id="about">
      <Container>
        {/* 2×2 Grid


                <SectionHeading
          title="About Me"
          subtitle="Passionate builder turning ideas into impactful digital solutions"
          className="mb-15"
        />*/}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-12">

            {/* Image Block */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Background Elements */}
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6"></div>
                <div className="absolute -inset-3 bg-gradient-to-tr from-green-500/10 to-cyan-500/10 rounded-2xl transform -rotate-3"></div>

                {/* Main Image Container */}
                <div className="relative bg-blue-100 dark:bg-neutral-800 rounded-2xl p-4 shadow-2xl border border-neutral-100 dark:border-neutral-700">
                  <img
                    src="/aboutimage.png"
                    alt="Hanna Bemnet Beyene"
                    className="rounded-2xl w-full max-w-sm lg:max-w-md transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Badge

                  <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg border border-neutral-200 dark:border-neutral-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300"></span>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>


          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">

            {/* Heading & Description */}


            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                {headline.split('.')[0]}.
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}{headline.split('.')[1]}
                </span>
              </h3>

              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {pitch}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1xbeyyNg0pznZwuOD-_yt-iey8b5B0DJY/view?usp=sharing"
                target="_blank"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Download CV
              </a>


              <a
                href="#contact"
                className="group px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                Let's Build Together
              </a>
            </div>

          </div>

          {/* Core Expertise Card */}

        </div>

        <div className="w-full mt-15 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
          <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Core Expertise
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "Full-Stack Development",
              "Startup Launch",
              "Product Strategy",
              "Technical Leadership",
              "Scalable Architecture",
              "UI/UX Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}