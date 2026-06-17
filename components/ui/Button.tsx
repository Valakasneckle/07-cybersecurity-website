import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-accent-cyan text-background hover:bg-accent-cyan/90 shadow-lg shadow-accent-cyan/20",
  secondary:
    "border border-card-border bg-card text-foreground hover:border-accent-cyan/40 hover:bg-card/80",
  ghost: "text-muted hover:text-foreground hover:bg-card/60",
  danger: "bg-accent-red/10 text-accent-red border border-accent-red/30 hover:bg-accent-red/20",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
