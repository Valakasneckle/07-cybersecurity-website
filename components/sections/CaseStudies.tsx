"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import { CaseStudyCard } from "@/components/security/CaseStudyCard";
import { Section, SectionHeader } from "@/components/ui/Section";

export function CaseStudies() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Case Studies"
        title="Proven results across industries"
        description="How security teams use ShieldOps to reduce risk, accelerate response, and simplify compliance."
        className="mb-12"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <CaseStudyCard study={study} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-green transition-colors hover:text-accent-cyan cursor-pointer"
        >
          Read full case studies
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
