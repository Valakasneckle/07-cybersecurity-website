"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { complianceItems } from "@/data/compliance";
import { ComplianceBadge } from "@/components/security/ComplianceBadge";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Compliance() {
  return (
    <Section grid>
      <SectionHeader
        eyebrow="Compliance & Trust"
        title="Built for regulated and audit-ready teams"
        description="Framework alignment, immutable audit logs, and role-based access controls that satisfy security reviewers and compliance officers."
        className="mb-12"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {complianceItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
          >
            <ComplianceBadge item={item} />
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/security-report"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue transition-colors hover:text-accent-cyan cursor-pointer"
        >
          View security report sample
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
