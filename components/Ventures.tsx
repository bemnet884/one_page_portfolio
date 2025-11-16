import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import VentureCard from "./cards/VentureCard";
import { ventures } from "@/data/ventures";
import { Container } from "./common/Container";

export default function Ventures() {
  return (
    <SectionWrapper id="ventures">
      <Container>
        <SectionHeading title="Ventures & Startups" />

        <div className="grid md:grid-cols-2 gap-6">
          {ventures.map((v) => (
            <VentureCard key={v.id} venture={v} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
