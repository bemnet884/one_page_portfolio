// src/data/ventures.ts
export type Venture = {
  id: string;
  title: string;
  stage: string; // Idea, Prototype, Live
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
      "A platform helping students discover scholarships, universities, and career pathways with tailored guidance.",
    role: "Founder & Developer",
    ask: "Partners for marketing & operations; seed funding for student outreach.",
    tags: ["EdTech", "Social Impact", "Founder", "Open to Partners"],
    metrics: ["50,000 ADA allocated", "Pilot modules ready"],
    website: "https://yegnafuture.com",
  },
  {
    id: "hannas_solutions",
    title: "Hanna’s Solutions",
    stage: "Idea → Pre-prototype",
    description:
      "Multi-sector innovation lab creating tech & non-tech solutions for education, environment, and local business challenges.",
    role: "Founder",
    ask: "Technical co-founder, business mentor, early collaborators.",
    tags: ["Innovation", "R&D", "Founder", "Open to Partners"],
    metrics: [
      "Multiple sector project ideas ready",
      "Vision for scalable solutions",
    ],
  },
  {
    id: "art_culture_preservation",
    title: "Art & Culture Preservation",
    stage: "Prototype",
    description:
      "Digitizing cultural artifacts using NFTs to allow communities to showcase and monetize their heritage.",
    role: "Founder & Developer",
    ask: "Partners with domain expertise and marketing support.",
    tags: ["NFT", "Cultural Tech", "Founder", "Open to Partners"],
    metrics: ["Prototype ready", "Pilot NFT collections designed"],
  },
];
