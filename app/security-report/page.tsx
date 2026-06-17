import type { Metadata } from "next";
import {
  maturityChecklist,
  recommendations,
  riskCategories,
  threatTrends,
} from "@/data/security-report";
import { SecurityReportCard } from "@/components/security/SecurityReportCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTA } from "@/components/sections/CTA";
import { Section, SectionHeader } from "@/components/ui/Section";
export const metadata: Metadata = {
  title: "Security Report",
  description:
    "Sample security report with threat trends, risk categories, recommendations, and security maturity checklist.",
};

const levelVariant = {
  critical: "red" as const,
  high: "red" as const,
  medium: "cyan" as const,
  low: "green" as const,
};

const statusLabel = {
  complete: { text: "Complete", variant: "green" as const },
  "in-progress": { text: "In progress", variant: "cyan" as const },
  "not-started": { text: "Not started", variant: "default" as const },
};

export default function SecurityReportPage() {
  const maxBlocked = Math.max(...threatTrends.map((t) => t.blocked));

  return (
    <>
      <section className="grid-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-red">
            Security Report
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Q1 Security Insights Report
          </h1>
          <p className="mt-6 text-lg text-muted">
            Sample executive security report with threat trends, risk analysis,
            prioritized recommendations, and maturity assessment.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Threat Trends"
          title="Blocked attacks trending upward"
          description="Monthly comparison of detected incidents vs. successfully blocked threats."
          align="left"
          className="mb-8"
        />
        <Card className="overflow-x-auto">
          <div className="flex items-end gap-4 min-w-[480px] h-48 px-2">
            {threatTrends.map((t) => (
              <div key={t.month} className="flex flex-1 flex-col items-center gap-2">
                <div className="flex w-full items-end justify-center gap-1 h-36">
                  <div
                    className="w-4 rounded-t bg-accent-red/60"
                    style={{ height: `${(t.incidents / 60) * 100}%` }}
                    title={`${t.incidents} incidents`}
                  />
                  <div
                    className="w-4 rounded-t bg-accent-green"
                    style={{ height: `${(t.blocked / maxBlocked) * 100}%` }}
                    title={`${t.blocked} blocked`}
                  />
                </div>
                <span className="font-mono text-xs text-muted">{t.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-6 text-xs text-muted">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-accent-red/60" /> Incidents
            </span>
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded bg-accent-green" /> Blocked
            </span>
          </div>
        </Card>
      </Section>

      <Section grid>
        <SectionHeader
          eyebrow="Risk Categories"
          title="Current risk landscape"
          className="mb-8"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskCategories.map((risk) => (
            <Card key={risk.id}>
              <div className="flex items-center justify-between">
                <Badge variant={levelVariant[risk.level]}>{risk.level}</Badge>
                <span className="font-mono text-xs text-muted">{risk.trend}</span>
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{risk.name}</h3>
              <p className="mt-1 font-mono text-2xl font-bold text-accent-cyan">
                {risk.count}
                <span className="text-sm font-normal text-muted"> findings</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Recommendations"
          title="Prioritized remediation actions"
          className="mb-8"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {recommendations.map((rec) => (
            <SecurityReportCard key={rec.id} item={rec} />
          ))}
        </div>
      </Section>

      <Section grid>
        <SectionHeader
          eyebrow="Maturity"
          title="Security maturity checklist"
          className="mb-8"
        />
        <Card>
          <ul className="divide-y divide-card-border">
            {maturityChecklist.map((item) => {
              const status = statusLabel[item.status];
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4 text-sm"
                >
                  <span className="text-foreground">{item.area}</span>
                  <Badge variant={status.variant}>{status.text}</Badge>
                </li>
              );
            })}
          </ul>
        </Card>
        <div className="mt-8 text-center">
          <Button href="/contact" size="lg">
            Request full security audit
          </Button>
        </div>
      </Section>

      <CTA />
    </>
  );
}
