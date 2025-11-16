// src/components/cards/TestimonialCard.tsx
import { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, feedback, avatar } = testimonial;

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col gap-4">
      <p className="text-neutral-600 dark:text-neutral-300 italic">"{feedback}"</p>

      <div className="flex items-center gap-4 mt-2">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
