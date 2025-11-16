import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Container } from "./common/Container";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <Container>
        <SectionHeading title="Let’s Work Together" />
        <form className="space-y-4 max-w-lg">
          <select
            className="border w-full rounded-md p-2 dark:bg-neutral-900"
            required
          >
            <option value="">I am a…</option>
            <option>Recruiter / Hiring Manager</option>
            <option>Potential Partner / Co-founder</option>
            <option>Investor / Advisor</option>
            <option>Client</option>
          </select>

          <Input placeholder="Your Name" required />
          <Input placeholder="Email Address" required />
          <Textarea placeholder="Message" rows={5} required />

          <Button size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </Container>
    </SectionWrapper>
  );
}
