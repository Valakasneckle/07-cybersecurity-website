import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CTA() {
  return (
    <Section className="pb-24">
      <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/20 bg-gradient-to-br from-card via-background to-card glow-cyan">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative px-8 py-16 text-center sm:px-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ready to strengthen your security posture?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Request a security audit and discover how ShieldOps can monitor
            threats, accelerate incident response, and simplify compliance for
            your team.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Request Security Audit
            </Button>
            <Button href="/platform" variant="secondary" size="lg">
              Explore Platform
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
