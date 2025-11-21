export type MediaItem = {
  type: "image" | "video";
  url: string;
  alt?: string;
  thumbnail?: string; // For video thumbnails
};

export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tools: string[];
  role: string;
  openToPartners: boolean;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
  timeline?: string;
  status?: string;
  challenges?: string[];
  achievements?: string[];
  media?: MediaItem[]; // Replace single image with media array
};

export const projects: Project[] = [
  {
    id: "ims_saas",
    title: "Hanna's Inventory Management System (HIMS)",
    description:
      "A full-stack SaaS platform empowering small businesses to track sales, purchases, stock levels, and financial performance in real time.",
    fullDescription:
      "A comprehensive SaaS inventory management system built with modern web technologies. Real-time stock tracking, sales/purchase management, financial reporting, and multi-tenant architecture with role-based access. Tailored for small to medium businesses in Ethiopia with local tax and multi-currency support.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
      "Clerk",
    ],
    role: "Full-Stack Developer",
    openToPartners: false,
    github: undefined,
    liveDemo: undefined,
    featured: true,
    timeline: "6 months",
    status: "Completed (MVP)",
    challenges: [
      "Real-time inventory updates across multiple users",
      "Complex financial calculations and reporting",
      "Secure multi-tenant architecture with data isolation",
      "Optimizing database queries for large datasets",
    ],
    achievements: [
      "Deployed with 3 pilot business customers",
      "Real-time low stock notifications",
      "Comprehensive financial dashboard",
    ],
    media: [
      { type: "image", url: "/HIMS-ss.png", alt: "IMS Dashboard overview" },
      { type: "image", url: "/hims-mobile3-ss.jpg", alt: "Financial reports" },
      {
        type: "video",
        url: "/Hims-marketing.mp4",
        thumbnail: "/projects/ims-saas-video-thumb.jpg",
        alt: "IMS demo video",
      },
    ],
  },

  {
    id: "duolingo_clone",
    title: "Duolingo Clone – Ethiopian Languages MVP",
    description:
      "MVP for a language-learning web app supporting Ethiopian languages, focused on testing features and market validation.",
    fullDescription:
      "A Minimal Viable Product (MVP) built during an internship at Jirtuu Software Labs. Supports Ethiopian languages with gamified lessons, XP, streaks, and basic progress tracking. The MVP was designed for market testing and feedback, showcasing technical and product capabilities in a real-world internship setting.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Drizzle",
      "PostgreSQL",
      "TypeScript",
      "BetterAuth",
      "Chapa",
    ],
    role: "Full-Stack Developer (Internship)",
    openToPartners: false,
    github: undefined,
    liveDemo: undefined,
    featured: true,
    timeline: "3 months",
    status: "Completed (MVP)",
    challenges: [
      "Gamification: XP and streak tracking",
      "Chapa payment integration for Ethiopian users",
      "Designing engaging UI for early user testing",
    ],
    achievements: [
      "Completed payment integration",
      "Responsive design across devices",
    ],
    media: [
      {
        type: "image",
        url: "/ethiolang1.png",
        alt: "Language lessons interface",
      },
    ],
  },

  {
    id: "nehabi_3d_plugin",
    title: "3D Plugin for Nehabi competition",
    description:
      "WordPress based plugin that embeds interactive 3D models into websites. Built for Ashewa Technologies’ Nehabi competition.",
    fullDescription:
      "Developed as part of a competition hosted by Ashewa Technologies. Enables WordPress sites to embed Spline, Sketchfab, and GLTF/GLB models. Focused on performance, responsive design, and easy use for non-technical users. Showcases technical skill in React and WordPress plugin architecture within a competitive setting.",
    tools: ["WordPress", "Three.js", "JavaScript", "PHP"],
    role: "Plugin Developer",
    openToPartners: false,
    github: "https://github.com/bemnet884/3D-Plugin-Nehabi",
    liveDemo: undefined,
    featured: false,
    timeline: "2 months",
    status: "Completed",
    challenges: [
      "Integrating Three.js with WordPress PHP architecture",
      "Optimizing 3D model loading",
      "User-friendly interface for non-technical users",
      "Handling multiple 3D formats",
    ],
    achievements: [
      "Complete documentation and demos",
      "Optimized for large 3D models",
    ],
    media: [
      {
        type: "image",
        url: "/3d_plugin.png",
        alt: "Gtihub Repo",
      },
      {
        type: "video",
        url: "/admin-dashboard-demo_3d_plugin.mp4",
        alt: "Admin dashboard demo",
      },
      {
        type: "video",
        url: "/Spline-demo_3d_plugin.mp4",
        alt: "Spline 3D demo",
      },
      {
        type: "video",
        url: "/Sketchfab_Demo_3d_plugin.mp4",
        alt: "Sketchfab demo",
      },
    ],
  },

  {
    id: "startup_copilot",
    title: "Startup Copilot – Innovation Research Assistant",
    description:
      "AI platform helping innovators validate ideas quickly with market research, competitor mapping, and actionable insights.",
    fullDescription:
      "An AI-powered assistant for innovators to accelerate idea validation. Generates structured market research, competitor mapping, and customer insights. Helps startups reduce risk before investing resources, providing dashboards and actionable guidance for early decision-making.",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firecrawl",
      "OpenAI API",
      "PostgreSQL",
    ],
    role: "Founder & Product Designer",
    openToPartners: true,
    github: "",
    liveDemo: "",
    featured: true,
    timeline: "Ongoing",
    status: "In Development",
    challenges: [
      "Processing large-scale market data",
      "Generating actionable business insights",
      "Building scalable AI pipelines",
      "Creating intuitive dashboards for complex data",
    ],
    achievements: [
      "Prototype with core AI research ready",
      "Validated concept with early testers",
      "Scalable architecture for growth",
      "Comprehensive onboarding flow",
    ],
    media: [
      {
        type: "image",
        url: "/startupcopilot.png",
        alt: "Startup Copilot interface",
      },
    ],
  },
];
