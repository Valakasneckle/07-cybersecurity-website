"use client";

import { motion } from "framer-motion";
import { securityMetrics } from "@/data/metrics";
import { SecurityMetricCard } from "@/components/security/SecurityMetricCard";
import { Section, SectionHeader } from "@/components/ui/Section";

export function SecurityMetrics() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Performance"
        title="Security outcomes that matter"
        description="Measurable impact across monitoring coverage, threat blocking, and incident response speed."
        className="mb-12"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {securityMetrics.map((metric, i) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
          >
            <SecurityMetricCard metric={metric} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
