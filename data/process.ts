// src/data/process.ts
export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon?: string; // optional icon name or URL
};

export const processSteps: ProcessStep[] = [
  {
    id: "research",
    title: "Understand the Problem",
    description:
      "I begin by deeply understanding client requirements or user problems, gathering data, and defining clear objectives.",
    icon: "📌",
  },
  {
    id: "plan",
    title: "Plan & Break Down",
    description:
      "I break the problem into manageable components, choose tools & technologies, and plan the workflow.",
    icon: "📝",
  },
  {
    id: "develop",
    title: "Build & Collaborate",
    description:
      "I implement solutions iteratively, communicate effectively with teams, and integrate feedback continuously.",
    icon: "💻",
  },
  {
    id: "deliver",
    title: "Test & Deliver",
    description:
      "I ensure quality through testing, finalize the product, and provide documentation or handoff materials.",
    icon: "🚀",
  },
];
