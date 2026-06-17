import type { Threat } from "@/data/threats";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const severityVariant = {
  critical: "red" as const,
  high: "red" as const,
  medium: "cyan" as const,
  low: "green" as const,
};

const statusLabel = {
  active: { text: "Active", variant: "red" as const },
  investigating: { text: "Investigating", variant: "cyan" as const },
  mitigated: { text: "Mitigated", variant: "green" as const },
  blocked: { text: "Blocked", variant: "green" as const },
};

export function ThreatCard({ threat }: { threat: Threat }) {
  const Icon = threat.icon;
  const status = statusLabel[threat.status];

  return (
    <Card className="p-4 transition-all duration-200 hover:border-accent-cyan/30">
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            threat.severity === "critical" || threat.severity === "high"
              ? "bg-accent-red/10 text-accent-red"
              : "bg-accent-cyan/10 text-accent-cyan"
          )}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={severityVariant[threat.severity]}>
              {threat.severity}
            </Badge>
            <Badge variant={status.variant}>{status.text}</Badge>
          </div>
          <h3 className="mt-2 text-sm font-semibold text-foreground">
            {threat.title}
          </h3>
          <p className="mt-1 text-xs text-muted">
            {threat.source} · {threat.asset}
          </p>
          <p className="mt-2 font-mono text-xs text-accent-cyan">
            {threat.timestamp}
          </p>
        </div>
      </div>
    </Card>
  );
}
