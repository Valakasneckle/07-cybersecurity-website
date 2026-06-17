import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertOctagon,
  Cloud,
  FileCheck,
  Monitor,
  Scan,
  Server,
  Workflow,
} from "lucide-react";

export type Solution = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  slug: string;
};

export const solutions: Solution[] = [
  {
    id: "soc",
    title: "SOC Monitoring",
    description:
      "24/7 security operations center coverage with real-time alerting, analyst triage, and escalation workflows.",
    benefits: ["Continuous monitoring", "Expert analyst review", "Custom playbooks"],
    icon: Monitor,
    slug: "soc-monitoring",
  },
  {
    id: "threat-detection",
    title: "Threat Detection",
    description:
      "ML-powered detection across networks, endpoints, and cloud workloads to surface anomalies before they escalate.",
    benefits: ["Behavioral analytics", "Threat intelligence feeds", "Low false-positive tuning"],
    icon: Activity,
    slug: "threat-detection",
  },
  {
    id: "vuln-scan",
    title: "Vulnerability Scanning",
    description:
      "Continuous scanning of infrastructure, applications, and containers with prioritized remediation guidance.",
    benefits: ["Asset discovery", "CVSS prioritization", "Patch tracking"],
    icon: Scan,
    slug: "vulnerability-scanning",
  },
  {
    id: "incident-response",
    title: "Incident Response",
    description:
      "Structured response workflows with containment, forensics support, and executive reporting during active incidents.",
    benefits: ["IR retainer options", "Forensics coordination", "Post-incident reviews"],
    icon: AlertOctagon,
    slug: "incident-response",
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    description:
      "Posture management and runtime protection for AWS, Azure, and GCP environments with misconfiguration detection.",
    benefits: ["CSPM integration", "IAM analysis", "Container security"],
    icon: Cloud,
    slug: "cloud-security",
  },
  {
    id: "compliance",
    title: "Compliance Reporting",
    description:
      "Automated evidence collection and audit-ready reports for SOC 2, ISO 27001, GDPR, and HIPAA-aligned workflows.",
    benefits: ["Audit trails", "Control mapping", "Executive dashboards"],
    icon: FileCheck,
    slug: "compliance-reporting",
  },
  {
    id: "endpoint",
    title: "Endpoint Protection",
    description:
      "EDR-style visibility across laptops, servers, and virtual machines with isolation and rollback capabilities.",
    benefits: ["Device inventory", "Malware blocking", "Remote isolation"],
    icon: Server,
    slug: "endpoint-protection",
  },
  {
    id: "automation",
    title: "Security Automation",
    description:
      "Orchestrated response actions, ticket creation, and policy enforcement to reduce manual SOC workload.",
    benefits: ["SOAR playbooks", "Slack/Teams alerts", "API integrations"],
    icon: Workflow,
    slug: "security-automation",
  },
];
