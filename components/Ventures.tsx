// src/components/sections/Ventures.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { ventures } from "@/data/ventures";
import { ArrowUpRight } from "lucide-react";
import VentureCard from "./cards/VentureCard";

export default function Ventures() {
  return (
    <SectionWrapper id="ventures" className="bg-linear-to-br from-blue-100 to-blue-50/30">
      <Container>
        <SectionHeading
          title="Current Ventures"
          subtitle="Projects I'm actively building and seeking collaborators for"
        />

        {/* Equal 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-6xl">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}