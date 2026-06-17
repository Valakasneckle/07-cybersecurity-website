import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "cyan" | "green" | "none";
};

export function Card({ children, className, glow = "none" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-card-border bg-card p-6",
        glow === "cyan" && "glow-cyan",
        glow === "green" && "glow-green",
        className
      )}
    >
      {children}
    </div>
  );
}
