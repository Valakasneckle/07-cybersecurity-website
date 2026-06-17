import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  grid?: boolean;
};

export function Section({ children, id, className, grid }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-4 py-20 sm:px-6 lg:px-8",
        grid && "grid-bg",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-widest text-accent-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
}
