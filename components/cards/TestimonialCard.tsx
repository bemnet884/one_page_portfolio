// src/components/cards/TestimonialCard.tsx
import { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, feedback, avatar } = testimonial;

  return (
    <div className="group relative bg-white border-l-4 border-t border-blue-500 dark:bg-neutral-900 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300  dark:border-neutral-800 flex flex-col justify-between h-full">

      {/* Quote Icon */}
      <Quote className="w-5 h-5 text-blue-400 dark:text-blue-300 mb-2" />

      {/* Feedback */}
      <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed italic mb-6">
        “{feedback}”
      </p>

      {/* Person Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
          />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-neutral-900 dark:text-white text-sm">{name}</span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{role}</span>
        </div>
      </div>
    </div>
  );
}
