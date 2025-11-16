// src/components/common/Badge.tsx
type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const baseClasses =
    "px-2 py-1 rounded-full text-sm font-medium inline-block";

  const variantClasses: Record<string, string> = {
    default: "bg-blue-500 text-white",
    outline: "border border-blue-500 text-blue-500",
    secondary: "bg-green-500 text-white",
  };

  return <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>{children}</span>;
}
