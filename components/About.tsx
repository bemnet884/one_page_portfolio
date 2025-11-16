// src/components/sections/About.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { aboutData } from "@/data/about";
import { Badge } from "./common/Badge";

export default function About() {
  const { headline, pitch, highlights } = aboutData;

  return (
    <SectionWrapper id="about">
      <Container>
        <SectionHeading title="About Me" subtitle="A quick introduction to who I am" />

        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">{headline}</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{pitch}</p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-xl text-center shadow-sm">
                  <p className="text-xl font-bold">{h.value}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{h.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-6">
              <a
                href="/HannaB_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Hire / Partner Me
              </a>
            </div>
          </div>

          {/* Optional Image */}
          <div className="flex-1 hidden md:flex justify-center items-center">
            <img
              src="/bemnetbeyenephoto.jpg"
              alt="Hanna"
              className="rounded-3xl shadow-xl w-full max-w-sm"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
