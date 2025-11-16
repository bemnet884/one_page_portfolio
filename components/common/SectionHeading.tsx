// src/components/common/SectionHeading.tsx
type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-neutral-600 dark:text-neutral-400 mt-2">{subtitle}</p>}
    </div>
  );
}
