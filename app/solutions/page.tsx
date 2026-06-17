import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/security/SolutionCard";
import { CTA } from "@/components/sections/CTA";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "SOC monitoring, threat detection, vulnerability scanning, incident response, cloud security, compliance reporting, and more.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="grid-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Cybersecurity services for every layer of your stack
          </h1>
          <p className="mt-6 text-lg text-muted">
            Modular security services designed for SaaS companies, fintech teams,
            and enterprise buyers who need clear outcomes — not jargon.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Eight core capabilities"
          description="Deploy individually or as a unified security program with ShieldOps SOC coverage."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
