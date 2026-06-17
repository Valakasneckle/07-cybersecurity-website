import { Hero } from "@/components/sections/Hero";
import { ThreatDashboard } from "@/components/sections/ThreatDashboard";
import { SecurityMetrics } from "@/components/sections/SecurityMetrics";
import { Solutions } from "@/components/sections/Solutions";
import { PlatformWorkflow } from "@/components/sections/PlatformWorkflow";
import { Compliance } from "@/components/sections/Compliance";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreatDashboard />
      <SecurityMetrics />
      <Solutions />
      <PlatformWorkflow />
      <Compliance />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
