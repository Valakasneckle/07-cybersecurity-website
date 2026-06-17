import type { LucideIcon } from "lucide-react";
import {
  Bell,
  FileBarChart,
  Filter,
  Radar,
  Search,
  Siren,
  Workflow,
} from "lucide-react";

export type PlatformStep = {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const platformWorkflow: PlatformStep[] = [
  {
    id: "collect",
    step: 1,
    title: "Collect signals",
    description:
      "Ingest logs, metrics, and telemetry from cloud platforms, endpoints, firewalls, and identity providers.",
    icon: Radar,
  },
  {
    id: "analyze",
    step: 2,
    title: "Analyze events",
    description:
      "Normalize and correlate events across sources to build a unified timeline of security activity.",
    icon: Search,
  },
  {
    id: "detect",
    step: 3,
    title: "Detect anomalies",
    description:
      "Apply detection rules, behavioral models, and threat intelligence to identify suspicious patterns.",
    icon: Filter,
  },
  {
    id: "prioritize",
    step: 4,
    title: "Prioritize threats",
    description:
      "Score alerts by severity, asset criticality, and exploitability so teams focus on what matters most.",
    icon: Siren,
  },
  {
    id: "notify",
    step: 5,
    title: "Notify security teams",
    description:
      "Route alerts to SOC analysts, on-call engineers, and stakeholders via dashboards, email, and chat.",
    icon: Bell,
  },
  {
    id: "respond",
    step: 6,
    title: "Support response workflows",
    description:
      "Guide containment, investigation, and remediation with playbooks and automated response actions.",
    icon: Workflow,
  },
  {
    id: "report",
    step: 7,
    title: "Generate compliance reports",
    description:
      "Produce audit-ready reports, executive summaries, and trend analysis for compliance and leadership teams.",
    icon: FileBarChart,
  },
];
