import type { LucideIcon } from "lucide-react";
import { AlertTriangle, Bug, Cloud, Lock, ShieldAlert, Wifi } from "lucide-react";

export type ThreatSeverity = "critical" | "high" | "medium" | "low";

export type Threat = {
  id: string;
  title: string;
  source: string;
  severity: ThreatSeverity;
  status: "active" | "investigating" | "mitigated" | "blocked";
  timestamp: string;
  asset: string;
  icon: LucideIcon;
};

export const dashboardSummary = {
  riskScore: 72,
  activeThreats: 4,
  blockedAttacks: 320,
  monitoredAssets: 42,
  incidentStatus: "Monitoring",
  alertsToday: 18,
};

export const recentThreats: Threat[] = [
  {
    id: "th-001",
    title: "Suspicious API authentication spike",
    source: "Cloud API Gateway",
    severity: "critical",
    status: "investigating",
    timestamp: "2 min ago",
    asset: "api-prod-01",
    icon: ShieldAlert,
  },
  {
    id: "th-002",
    title: "Brute force attempt on admin portal",
    source: "WAF / Identity",
    severity: "high",
    status: "blocked",
    timestamp: "14 min ago",
    asset: "auth-portal",
    icon: Lock,
  },
  {
    id: "th-003",
    title: "Unusual outbound data transfer",
    source: "Network IDS",
    severity: "high",
    status: "active",
    timestamp: "28 min ago",
    asset: "db-cluster-east",
    icon: Wifi,
  },
  {
    id: "th-004",
    title: "CVE-2024-3847 exploit attempt",
    source: "Vulnerability Scanner",
    severity: "medium",
    status: "mitigated",
    timestamp: "1 hr ago",
    asset: "web-tier-03",
    icon: Bug,
  },
  {
    id: "th-005",
    title: "Misconfigured S3 bucket policy detected",
    source: "Cloud Security Posture",
    severity: "medium",
    status: "investigating",
    timestamp: "2 hr ago",
    asset: "storage-prod",
    icon: Cloud,
  },
  {
    id: "th-006",
    title: "Phishing domain impersonation alert",
    source: "Threat Intelligence",
    severity: "low",
    status: "blocked",
    timestamp: "3 hr ago",
    asset: "brand-monitor",
    icon: AlertTriangle,
  },
];

export const securityEvents = [
  { id: "ev-1", label: "Firewall rule updated", time: "09:41 UTC", type: "policy" },
  { id: "ev-2", label: "SOC analyst assigned incident #4821", time: "09:38 UTC", type: "incident" },
  { id: "ev-3", label: "Automated patch deployed to endpoint group", time: "09:22 UTC", type: "remediation" },
  { id: "ev-4", label: "Compliance scan completed — 0 critical findings", time: "08:55 UTC", type: "compliance" },
];
