"use client";

import { motion } from "framer-motion";
import {
  dashboardSummary,
  recentThreats,
  securityEvents,
} from "@/data/threats";
import { ThreatCard } from "@/components/security/ThreatCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

function StatBox({
  label,
  value,
  variant,
}: {
  label: string;
  value: string | number;
  variant?: "red" | "cyan" | "green";
}) {
  return (
    <div className="rounded-lg border border-card-border bg-background/50 p-4">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">{label}</p>
      <p
        className={cn(
          "mt-1 font-mono text-2xl font-bold tabular-nums",
          variant === "red" && "text-accent-red",
          variant === "cyan" && "text-accent-cyan",
          variant === "green" && "text-accent-green",
          !variant && "text-foreground"
        )}
      >
        {value}
      </p>
    </div>
  );
}

export function ThreatDashboard() {
  return (
    <Section id="dashboard" grid>
      <SectionHeader
        eyebrow="Live Dashboard"
        title="Threat monitoring at a glance"
        description="A unified view of active threats, risk scores, blocked attacks, and recent security events across your cloud environment."
        className="mb-12"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="scan-line relative overflow-hidden rounded-2xl border border-card-border bg-card glow-cyan"
      >
        <div className="border-b border-card-border px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-accent-cyan">SHIELDOPS SOC CONSOLE</p>
              <p className="text-sm text-muted">Environment: production · us-east-1</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="font-mono text-xs text-accent-green">Live</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-12 lg:grid-cols-6">
            <StatBox label="Risk score" value={dashboardSummary.riskScore} variant="cyan" />
            <StatBox label="Active threats" value={dashboardSummary.activeThreats} variant="red" />
            <StatBox label="Blocked attacks" value={dashboardSummary.blockedAttacks} variant="green" />
            <StatBox label="Monitored assets" value={dashboardSummary.monitoredAssets} />
            <StatBox label="Alerts today" value={dashboardSummary.alertsToday} variant="cyan" />
            <div className="rounded-lg border border-card-border bg-background/50 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-muted">Incident status</p>
              <Badge variant="cyan" className="mt-2">
                {dashboardSummary.incidentStatus}
              </Badge>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-cyan">
              Recent security events
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {recentThreats.slice(0, 4).map((threat, i) => (
                <motion.div
                  key={threat.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <ThreatCard threat={threat} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent-green">
              Activity log
            </h3>
            <Card className="p-0 overflow-hidden">
              <ul className="divide-y divide-card-border">
                {securityEvents.map((event) => (
                  <li key={event.id} className="flex items-center justify-between px-4 py-3 text-xs">
                    <span className="text-foreground">{event.label}</span>
                    <span className="font-mono text-muted">{event.time}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <h3 className="mb-4 mt-6 font-mono text-xs uppercase tracking-wider text-accent-red">
              Suspicious activity
            </h3>
            <div className="space-y-3">
              {recentThreats.slice(4, 6).map((threat) => (
                <ThreatCard key={threat.id} threat={threat} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
