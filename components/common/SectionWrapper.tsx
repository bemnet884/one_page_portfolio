// src/components/common/SectionWrapper.tsx
type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 border-b border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      {children}
    </section>
  );
}
