// src/data/ventures.ts

export type Venture = {
  id: string;
  title: string;
  stage: string; // Idea, Prototype, Pilot, Live
  description: string;
  role: string;
  ask: string; // e.g., Looking for partners, funding
  tags: string[];
  metrics?: string[];
  website?: string;
};

export const ventures: Venture[] = [
  {
    id: "yegnafuture",
    title: "YegnaFuture",
    stage: "Pilot",
    description:
      "An AI-powered platform helping students discover scholarships, universities, and career pathways through personalized recommendations. Built by a team of 4 (Founder/Developer, AI Engineer, Backend Engineer, Marketing Lead). Currently in incubation under the Ethiopian Artificial Intelligence Institute.",
    role: "Founder & Full-Stack Developer",
    ask: "Seeking strategic partners for scaling, student outreach, and early seed funding.",
    tags: [
      "EdTech",
      "AI",
      "Career Guidance",
      "Founder",
      "Incubation",
      "Open to Partners",
    ],
    metrics: [
      "Incubated at Ethiopian AI Institute",
      "Early pilot modules in development",
      "Initial user research completed",
    ],
    website: undefined,
  },

  {
    id: "hannas_solutions",
    title: "Hanna’s Solutions",
    stage: "Idea → Pre-Prototype",
    description:
      "A parent company and innovation lab building multi-sector solutions across education, agriculture, environmental sustainability, mining support tools, reverse vending technology, and Christian/Bible-based gamified learning experiences.",
    role: "Founder & Vision Lead",
    ask: "Looking for a technical co-founder, subject-matter collaborators, and business mentorship.",
    tags: [
      "Innovation",
      "Multi-Sector",
      "R&D",
      "Founder",
      "Open to Partners",
      "Future Company",
    ],
    metrics: [
      "Portfolio of validated concepts across 5+ sectors",
      "Roadmap prepared for first 3 prototype builds",
    ],
  },
];
