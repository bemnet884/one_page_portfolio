// src/components/sections/Process.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { processSteps, ProcessStep } from "@/data/process";
import { Badge } from "./common/Badge";

export default function Process() {
  return (
    <SectionWrapper id="process" className="bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <SectionHeading
          title="My Process"
          subtitle="How I approach projects from idea to delivery"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step: ProcessStep) => (
            <div
              key={step.id}
              className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {step.icon && (
                  <span className="text-3xl">{step.icon}</span>
                )}
                <h4 className="text-xl font-semibold">{step.title}</h4>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
