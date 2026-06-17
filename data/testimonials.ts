export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "ShieldOps gave us enterprise-grade SOC coverage without building a 15-person security team. Their dashboard made complex alerts understandable for our leadership.",
    name: "Sarah Chen",
    role: "CTO",
    company: "NexusFlow SaaS",
  },
  {
    id: "t-2",
    quote:
      "The incident response playbooks cut our mean time to contain from hours to minutes. We finally have confidence in our cloud security posture.",
    name: "Marcus Webb",
    role: "CISO",
    company: "PayBridge Financial",
  },
  {
    id: "t-3",
    quote:
      "Compliance reporting used to take our team two weeks per quarter. ShieldOps automated most of the evidence collection and gave auditors exactly what they needed.",
    name: "Elena Rodriguez",
    role: "Director of IT Security",
    company: "HealthSync Platform",
  },
];
