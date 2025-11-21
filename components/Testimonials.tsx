// src/components/sections/Testimonials.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import TestimonialCard from "./cards/TestimonialCard";
import { testimonials, Testimonial } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-linear-to-br from-blue-100 to-blue-50/30">
      <Container>
        <SectionHeading
          title="Testimonials"
          subtitle="What people say about working with me"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
