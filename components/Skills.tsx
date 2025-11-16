// src/components/sections/Skills.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { skillCategories, SkillCategory } from "@/data/skills";
import { Badge } from "./common/Badge";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technical, professional, and entrepreneurial skills I bring to the table"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category: SkillCategory) => (
            <div key={category.category} className="space-y-3">
              <h4 className="text-xl font-semibold">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
