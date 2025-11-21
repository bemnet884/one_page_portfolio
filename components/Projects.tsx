// src/components/sections/Projects.tsx
import { SectionWrapper } from "./common/SectionWrapper";
import { SectionHeading } from "./common/SectionHeading";
import { Container } from "./common/Container";
import { projects } from "@/data/projects";
import ProjectCard from "./cards/ProjectCard";

export default function Projects() {
  // Reorder projects to match the bento layout
  const bentoProjects = [
    projects.find(p => p.id === "ims_saas"), // Left tall
    projects.find(p => p.id === "duolingo_clone"), // Top middle
    projects.find(p => p.id === "nehabi_3d_plugin"), // Bottom middle
    projects.find(p => p.id === "startup_copilot"), // Right tall
  ].filter(Boolean);

  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my technical work and creative solutions"
        />

        {/* Bento Grid Layout - 3 columns, 2 rows */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:mt-16">
          {/* Card 1: Left tall (col 1, spans 2 rows) */}
          <div className="lg:row-span-2">
            {bentoProjects[0] && <ProjectCard project={bentoProjects[0]} />}
          </div>

          {/* Middle column with two cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Card 2: Top middle (col 2, row 1) */}
            <div className="lg:row-span-1">
              {bentoProjects[1] && <ProjectCard project={bentoProjects[1]} />}
            </div>

            {/* Card 3: Bottom middle (col 2, row 2) */}
            <div className="lg:row-span-1">
              {bentoProjects[2] && <ProjectCard project={bentoProjects[2]} />}
            </div>
          </div>

          {/* Card 4: Right tall (col 3, spans 2 rows) */}
          <div className="lg:row-span-2">
            {bentoProjects[3] && <ProjectCard project={bentoProjects[3]} />}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}