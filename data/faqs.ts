export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How quickly can ShieldOps begin monitoring our environment?",
    answer:
      "Most clients are onboarded within 2–4 weeks depending on log source integration complexity. We start with a security assessment, then deploy collectors and detection rules in phases.",
  },
  {
    id: "faq-2",
    question: "Do you support multi-cloud and hybrid environments?",
    answer:
      "Yes. ShieldOps monitors AWS, Azure, GCP, on-premises infrastructure, and hybrid setups. We normalize signals into a single dashboard and alerting workflow.",
  },
  {
    id: "faq-3",
    question: "What is included in a security audit request?",
    answer:
      "Our audit request includes a discovery call, environment review, risk summary, and prioritized recommendations. Enterprise clients receive a detailed findings report within 5 business days.",
  },
  {
    id: "faq-4",
    question: "Can ShieldOps integrate with our existing SIEM or ticketing tools?",
    answer:
      "We integrate with popular SIEM platforms, Jira, ServiceNow, Slack, Microsoft Teams, and PagerDuty. Custom API integrations are available on Business plans.",
  },
  {
    id: "faq-5",
    question: "How do you handle false positives?",
    answer:
      "Our SOC team tunes detection rules during onboarding and continuously refines thresholds based on your environment. Clients typically see false positive rates drop 40–60% within the first 90 days.",
  },
  {
    id: "faq-6",
    question: "Is ShieldOps suitable for companies preparing for SOC 2 or ISO 27001?",
    answer:
      "Yes. Our compliance module maps controls to frameworks, collects evidence automatically, and produces audit-ready reports. We support both pre-audit readiness and ongoing compliance monitoring.",
  },
];
