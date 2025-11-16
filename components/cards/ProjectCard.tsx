import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/common/Badge";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tools, role, openToPartners, github, liveDemo } = project;

  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{title}</span>
          {openToPartners && <Badge variant="secondary">Open to Partners</Badge>}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
