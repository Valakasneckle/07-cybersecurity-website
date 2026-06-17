import type { SecurityMetric } from "@/data/metrics";
import { Card } from "@/components/ui/Card";

export function SecurityMetricCard({ metric }: { metric: SecurityMetric }) {
  const Icon = metric.icon;

  return (
    <Card glow="cyan" className="transition-all duration-200 hover:border-accent-cyan/40">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        {metric.trend && (
          <span className="font-mono text-xs text-accent-green">{metric.trend}</span>
        )}
      </div>
      <p className="mt-4 font-mono text-3xl font-bold tabular-nums text-gradient-security">
        {metric.value}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-foreground">{metric.label}</h3>
      <p className="mt-1 text-xs leading-relaxed text-muted">{metric.description}</p>
    </Card>
  );
}
