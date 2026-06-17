import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/security/CaseStudyCard";
import { CTA } from "@/components/sections/CTA";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "ShieldOps Security case studies: cloud SaaS monitoring, fintech incident response, and healthcare compliance workflows.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="grid-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-green">
            Case Studies
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Security outcomes across industries
          </h1>
          <p className="mt-6 text-lg text-muted">
            Fictional case studies demonstrating how ShieldOps helps teams reduce
            risk, respond faster, and meet compliance requirements.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Client success stories"
          description="Each engagement follows a structured assessment, implementation, and optimization phase."
          className="mb-12"
        />
        <div className="grid gap-8 lg:grid-cols-1">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
