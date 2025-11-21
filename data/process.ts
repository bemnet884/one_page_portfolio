// src/data/process.ts
export type ProcessStep = {
  id: string;
  title: string;
  image: string;
  description: string;
  icon?: string;
  duration?: string;
  keyMetrics?: string[];
};

export const processSteps: ProcessStep[] = [
  {
    id: "research",
    title: "Understand the Problem",
    image: "/discover.png",
    description:
      "I begin by deeply understanding client requirements or user problems, gathering data, and defining clear objectives.",
    icon: "📌",
    duration: "1-2 weeks",
    keyMetrics: ["User satisfaction", "Requirement clarity", "Research depth"],
  },
  {
    id: "plan",
    title: "Plan & Break Down",
    image: "/design.png",
    description:
      "I break the problem into manageable components, choose tools & technologies, and plan the workflow.",
    icon: "📝",
    duration: "3-5 days",
    keyMetrics: [
      "Timeline accuracy",
      "Resource allocation",
      "Risk identification",
    ],
  },
  {
    id: "develop",
    title: "Build & Collaborate",
    image: "/development.png",
    description:
      "I implement solutions iteratively, communicate effectively with teams, and integrate feedback continuously.",
    icon: "💻",
    duration: "2-8 weeks",
    keyMetrics: ["Code quality", "Team velocity", "Feature completion"],
  },
  {
    id: "deliver",
    title: "Test & Deliver",
    image: "/deploy.png",
    description:
      "I ensure quality through testing, finalize the product, and provide documentation or handoff materials.",
    icon: "🚀",
    duration: "1-2 weeks",
    keyMetrics: ["Bug count", "Performance scores", "User adoption"],
  },
];
