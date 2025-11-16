// src/data/skills.ts
export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "Auth.js",
      "Clerk",
    ],
  },
  {
    category: "Tools & Deployment",
    skills: ["Vercel", "Git/GitHub", "Docker", "Figma", "VS Code", "Linux CLI"],
  },
  {
    category: "Entrepreneurial & Leadership",
    skills: [
      "Startup Creation",
      "Project Management",
      "Team Collaboration",
      "Idea Validation",
      "Business Planning",
    ],
  },
];
