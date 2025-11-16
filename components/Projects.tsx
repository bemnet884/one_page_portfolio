import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { Container } from "./common/Container";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionHeading title="Featured Projects" subtitle="Projects I built with passion and impact" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
