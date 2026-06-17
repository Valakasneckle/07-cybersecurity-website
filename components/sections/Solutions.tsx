"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import { SolutionCard } from "@/components/security/SolutionCard";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Solutions() {
  return (
    <Section grid>
      <SectionHeader
        eyebrow="Solutions"
        title="End-to-end cybersecurity services"
        description="From SOC monitoring to compliance reporting — modular services that scale with your security maturity."
        className="mb-12"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, i) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
          >
            <SolutionCard solution={solution} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition-colors hover:text-accent-green cursor-pointer"
        >
          View all solutions
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
