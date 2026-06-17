import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/security/ContactForm";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a security audit or consultation with ShieldOps Security. SOC monitoring, incident response, and compliance support.",
};

export default function ContactPage() {
  return (
    <>
      <section className="grid-bg px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Request a security consultation
          </h1>
          <p className="mt-6 text-lg text-muted">
            Tell us about your environment and security goals. Our team responds
            within one business day with next steps for an audit or pilot.
          </p>
        </div>
      </section>

      <Section className="pb-24">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Card>
              <h2 className="text-xl font-semibold text-foreground">
                Consultation request
              </h2>
              <p className="mt-2 text-sm text-muted">
                Complete the form below and a security specialist will follow up.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <Card>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0 text-accent-cyan" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="mt-1 text-sm text-muted">security@shieldops.example.com</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0 text-accent-green" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">SOC Hotline</h3>
                  <p className="mt-1 text-sm text-muted">24/7 for Enterprise clients</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0 text-accent-blue" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground">Headquarters</h3>
                  <p className="mt-1 text-sm text-muted">
                    500 Security Boulevard
                    <br />
                    Austin, TX 78701
                  </p>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
