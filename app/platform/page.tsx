import type { Metadata } from "next";
import { platformWorkflow } from "@/data/platform";
import { PlatformWorkflow } from "@/components/sections/PlatformWorkflow";
import { ThreatDashboard } from "@/components/sections/ThreatDashboard";
import { CTA } from "@/components/sections/CTA";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "ShieldOps security platform workflow: collect signals, detect anomalies, prioritize threats, and generate compliance reports.",
};

export default function PlatformPage() {
  return (
    <>
      <section className="grid-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            Platform
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            The ShieldOps security operations platform
          </h1>
          <p className="mt-6 text-lg text-muted">
            A continuous workflow that connects telemetry, detection, response,
            and compliance — giving security teams one source of truth.
          </p>
        </div>
      </section>

      <PlatformWorkflow />

      <Section>
        <SectionHeader
          title="Platform capabilities"
          description="Built for SOC analysts, cloud engineers, and compliance teams working together."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {platformWorkflow.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.id}>
                <Icon className="h-6 w-6 text-accent-cyan" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <ThreatDashboard />
      <CTA />
    </>
  );
}
