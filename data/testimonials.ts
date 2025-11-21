// src/data/testimonials.ts
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  feedback: string;
  avatar?: string;
};

// src/data/testimonials.ts
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mulatu K.",
    role: "Co-Founder – YegnaFuture",
    feedback:
      "Bemnet played a key role in YegnaFuture. She moves fast, understands user needs, and turns ideas into polished products. Beyond coding, she brings strategy and structure to the team.",
    avatar: undefined,
  },
  {
    id: "2",
    name: "Bekele D.",
    role: "CEO - Jirtuu Software Labs",
    feedback:
      "Bemnet excelled as a Full-Stack Developer during her internship. She showed dedication, eagerness to learn, and consistently contributed to the team’s goals.",
    avatar: undefined,
  },
  {
    id: "3",
    name: "Fasika T.",
    role: "Team Leader – Brighter Generation",
    feedback:
      "Bemnet coordinated effectively between students, instructors, and team leaders. Her communication, proactivity, and adaptability made the program smooth, while she grew both technically and professionally.",
    avatar: undefined,
  },
];

