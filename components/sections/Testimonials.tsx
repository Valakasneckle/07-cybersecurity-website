"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section grid>
      <SectionHeader
        eyebrow="Testimonials"
        title="Trusted by security leaders"
        description="What CTOs, CISOs, and IT directors say about working with ShieldOps."
        className="mb-12"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
          >
            <Card className="h-full">
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-card-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role}, {t.company}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
