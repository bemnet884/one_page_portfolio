// src/components/common/Container.tsx
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-4 ${className}`}>
      {children}
    </div>
  );
}
