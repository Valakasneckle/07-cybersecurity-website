export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  stack: string;
  timeline: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Cloud SaaS threat monitoring rollout",
    industry: "B2B SaaS",
    problem:
      "A fast-growing SaaS company lacked centralized visibility across multi-region AWS workloads. Security alerts were fragmented across tools with no unified SOC workflow.",
    solution:
      "ShieldOps deployed cloud security monitoring, integrated log pipelines, and established 24/7 SOC coverage with custom detection rules for API abuse and credential stuffing.",
    result:
      "Mean time to detect dropped from 4.2 hours to 22 minutes. The team blocked 180+ automated attacks in the first quarter without adding headcount.",
    stack: "AWS, CloudTrail, WAF, ShieldOps SOC Platform",
    timeline: "6-week implementation",
  },
  {
    id: "cs-002",
    title: "Incident response automation for fintech",
    industry: "Financial Technology",
    problem:
      "A fintech startup needed faster incident triage during payment API anomalies while maintaining audit trails for regulatory reviewers.",
    solution:
      "ShieldOps implemented automated playbooks for account lockouts, suspicious transaction holds, and Slack-based escalation to on-call security leads.",
    result:
      "Incident response time improved by 87%. Compliance reviewers received structured incident reports within 24 hours of each event.",
    stack: "Kubernetes, SIEM integration, SOAR playbooks, ShieldOps IR",
    timeline: "4-week pilot + 8-week rollout",
  },
  {
    id: "cs-003",
    title: "Compliance reporting workflow for healthcare platform",
    industry: "Healthcare Technology",
    problem:
      "A healthcare data platform struggled to produce consistent audit evidence for HIPAA-aligned controls across engineering and operations teams.",
    solution:
      "ShieldOps configured compliance dashboards, automated evidence collection, and role-based access reviews with monthly executive reporting.",
    result:
      "Audit preparation time reduced by 60%. The platform passed its annual security review with zero critical findings related to logging and access control.",
    stack: "Azure, HIPAA workflows, ShieldOps Compliance Module",
    timeline: "10-week engagement",
  },
];
