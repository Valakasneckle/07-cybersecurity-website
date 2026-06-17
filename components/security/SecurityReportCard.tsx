import type { Recommendation } from "@/data/security-report";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const priorityVariant = {
  high: "red" as const,
  medium: "cyan" as const,
  low: "green" as const,
};

export function SecurityReportCard({ item }: { item: Recommendation }) {
  return (
    <Card className="transition-all duration-200 hover:border-accent-cyan/30">
      <div className="flex items-start justify-between gap-4">
        <Badge variant={priorityVariant[item.priority]}>{item.priority} priority</Badge>
      </div>
      <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
    </Card>
  );
}
