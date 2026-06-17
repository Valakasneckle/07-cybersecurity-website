"use client";

import { motion } from "framer-motion";
import { platformWorkflow } from "@/data/platform";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function PlatformWorkflow() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Platform"
        title="How ShieldOps protects your infrastructure"
        description="A continuous security workflow — from signal collection to compliance reporting."
        className="mb-12"
      />
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan via-accent-green to-accent-blue lg:left-1/2 lg:block" />
        <div className="space-y-6">
          {platformWorkflow.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative flex lg:w-1/2 ${isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}
              >
                <Card className="w-full transition-all duration-200 hover:border-accent-cyan/30">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-cyan/10 font-mono text-sm font-bold text-accent-cyan">
                      {String(step.step).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent-green" aria-hidden="true" />
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
