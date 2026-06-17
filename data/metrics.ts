import type { LucideIcon } from "lucide-react";
import { Activity, Clock, Cloud, Shield, Zap, Target } from "lucide-react";

export type SecurityMetric = {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
  trend?: string;
};

export const securityMetrics: SecurityMetric[] = [
  {
    id: "uptime",
    value: "99.9%",
    label: "Monitoring uptime",
    description: "Continuous SOC coverage across cloud and on-prem assets.",
    icon: Activity,
    trend: "+0.1% vs last month",
  },
  {
    id: "soc",
    value: "24/7",
    label: "SOC coverage",
    description: "Round-the-clock analyst and automated threat response.",
    icon: Clock,
  },
  {
    id: "events",
    value: "1.2M",
    label: "Events analyzed",
    description: "Security signals processed monthly across client environments.",
    icon: Zap,
    trend: "+18% volume",
  },
  {
    id: "response",
    value: "87%",
    label: "Faster incident response",
    description: "Average reduction in mean time to detect and respond.",
    icon: Target,
    trend: "vs baseline",
  },
  {
    id: "blocked",
    value: "320",
    label: "Blocked threats",
    description: "Malicious attempts stopped in the last 30 days.",
    icon: Shield,
    trend: "Last 30 days",
  },
  {
    id: "assets",
    value: "42",
    label: "Monitored cloud assets",
    description: "Workloads, APIs, and endpoints under active protection.",
    icon: Cloud,
  },
];
