import type { ComplianceItem } from "@/data/compliance";
import { Card } from "@/components/ui/Card";

export function ComplianceBadge({ item }: { item: ComplianceItem }) {
  const Icon = item.icon;

  return (
    <Card className="text-center transition-all duration-200 hover:border-accent-blue/30">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-sm font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
    </Card>
  );
}
