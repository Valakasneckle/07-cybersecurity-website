export type RiskCategory = {
  id: string;
  name: string;
  level: "critical" | "high" | "medium" | "low";
  count: number;
  trend: "up" | "down" | "stable";
};

export type ThreatTrend = {
  month: string;
  incidents: number;
  blocked: number;
};

export type Recommendation = {
  id: string;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
};

export type MaturityItem = {
  id: string;
  area: string;
  status: "complete" | "in-progress" | "not-started";
};

export const threatTrends: ThreatTrend[] = [
  { month: "Oct", incidents: 42, blocked: 128 },
  { month: "Nov", incidents: 38, blocked: 156 },
  { month: "Dec", incidents: 51, blocked: 189 },
  { month: "Jan", incidents: 35, blocked: 210 },
  { month: "Feb", incidents: 29, blocked: 245 },
  { month: "Mar", incidents: 24, blocked: 320 },
];

export const riskCategories: RiskCategory[] = [
  { id: "r1", name: "Identity & Access", level: "high", count: 12, trend: "down" },
  { id: "r2", name: "Cloud Misconfiguration", level: "medium", count: 8, trend: "stable" },
  { id: "r3", name: "Endpoint Vulnerabilities", level: "medium", count: 15, trend: "down" },
  { id: "r4", name: "Network Intrusion", level: "low", count: 3, trend: "down" },
  { id: "r5", name: "Data Exfiltration", level: "critical", count: 2, trend: "up" },
];

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    priority: "high",
    title: "Enforce MFA on all admin accounts",
    description:
      "12 privileged accounts lack multi-factor authentication. Enabling MFA would reduce credential compromise risk by an estimated 65%.",
  },
  {
    id: "rec-2",
    priority: "high",
    title: "Patch critical CVEs on web tier",
    description:
      "3 hosts are running versions with known critical vulnerabilities. Schedule maintenance within 72 hours.",
  },
  {
    id: "rec-3",
    priority: "medium",
    title: "Review S3 bucket policies",
    description:
      "2 storage buckets have overly permissive read policies. Apply least-privilege access controls.",
  },
  {
    id: "rec-4",
    priority: "medium",
    title: "Enable centralized logging for staging",
    description:
      "Staging environment logs are not forwarded to the SIEM. Extend monitoring coverage for pre-production workloads.",
  },
  {
    id: "rec-5",
    priority: "low",
    title: "Update security awareness training",
    description:
      "Last phishing simulation was 4 months ago. Schedule quarterly training for engineering and operations teams.",
  },
];

export const maturityChecklist: MaturityItem[] = [
  { id: "m1", area: "Asset inventory & discovery", status: "complete" },
  { id: "m2", area: "Continuous vulnerability scanning", status: "complete" },
  { id: "m3", area: "24/7 SOC monitoring", status: "in-progress" },
  { id: "m4", area: "Incident response playbooks", status: "in-progress" },
  { id: "m5", area: "Compliance evidence automation", status: "in-progress" },
  { id: "m6", area: "Security automation (SOAR)", status: "not-started" },
  { id: "m7", area: "Executive risk reporting", status: "complete" },
  { id: "m8", area: "Third-party risk assessment", status: "not-started" },
];
