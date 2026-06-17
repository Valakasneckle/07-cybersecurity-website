import type { Solution } from "@/data/solutions";
import { Card } from "@/components/ui/Card";
import { Check } from "lucide-react";

export function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;

  return (
    <Card className="h-full transition-all duration-200 hover:border-accent-green/30 hover:glow-green">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{solution.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{solution.description}</p>
      <ul className="mt-4 space-y-2">
        {solution.benefits.map((benefit) => (
          <li key={benefit} className="flex items-center gap-2 text-xs text-muted">
            <Check className="h-3.5 w-3.5 shrink-0 text-accent-green" aria-hidden="true" />
            {benefit}
          </li>
        ))}
      </ul>
    </Card>
  );
}
