"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden grid-bg px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-1.5 font-mono text-xs text-accent-cyan">
            <Shield className="h-3.5 w-3.5" aria-hidden="true" />
            SOC · Threat Detection · Cloud Security
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real-time threat detection for{" "}
            <span className="text-gradient-security">modern cloud infrastructure</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            ShieldOps Security helps security teams monitor threats, detect
            vulnerabilities, respond to incidents, and protect cloud systems
            with enterprise-grade security workflows — without the complexity of
            building an in-house SOC.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Request Security Audit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              View Platform
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
