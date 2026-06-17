import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "green" | "red" | "blue";
  className?: string;
};

const variants = {
  default: "bg-card-border/50 text-muted border-card-border",
  cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
  green: "bg-accent-green/10 text-accent-green border-accent-green/30",
  red: "bg-accent-red/10 text-accent-red border-accent-red/30",
  blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/30",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium font-mono uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
