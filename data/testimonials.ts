// src/data/testimonials.ts
export type Testimonial = {
  id: string;
  name: string;
  role: string; // position / company
  feedback: string;
  avatar?: string; // optional image
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Team Lead at YegnaFuture",
    feedback:
      "Hanna consistently delivered high-quality work, demonstrating both technical expertise and strong problem-solving skills. She is a natural leader and a reliable team player.",
    avatar: "/images/testimonials/john_doe.jpg",
  },
  {
    id: "2",
    name: "Sara Ahmed",
    role: "Product Manager",
    feedback:
      "Working with Hanna on the Inventory Management System was an absolute pleasure. She is proactive, communicates clearly, and always goes the extra mile.",
    avatar: "/images/testimonials/sara_ahmed.jpg",
  },
  {
    id: "3",
    name: "Michael T.",
    role: "Client for Real Estate Project",
    feedback:
      "Hanna transformed our ideas into a functional, beautiful platform quickly. She is highly professional and very easy to collaborate with.",
    avatar: "/images/testimonials/michael_t.jpg",
  },
];
