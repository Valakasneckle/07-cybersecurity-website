import type { CaseStudy } from "@/data/case-studies";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card glow="green" className="flex h-full flex-col">
      <Badge variant="cyan">{study.industry}</Badge>
      <h3 className="mt-4 text-xl font-semibold text-foreground">{study.title}</h3>
      <div className="mt-4 space-y-4 flex-1 text-sm">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent-cyan">Problem</p>
          <p className="mt-1 leading-relaxed text-muted">{study.problem}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent-green">Solution</p>
          <p className="mt-1 leading-relaxed text-muted">{study.solution}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent-blue">Result</p>
          <p className="mt-1 leading-relaxed text-foreground">{study.result}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3 border-t border-card-border pt-4 text-xs text-muted">
        <span>
          <span className="text-foreground font-medium">Stack:</span> {study.stack}
        </span>
        <span>
          <span className="text-foreground font-medium">Timeline:</span> {study.timeline}
        </span>
      </div>
    </Card>
  );
}
