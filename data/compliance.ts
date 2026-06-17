import type { LucideIcon } from "lucide-react";
import { ClipboardList, FileCheck, Globe, HeartPulse, Lock, Shield } from "lucide-react";

export type ComplianceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const complianceItems: ComplianceItem[] = [
  {
    id: "soc2",
    title: "SOC 2",
    description: "Control mapping, evidence collection, and continuous monitoring for Type I and Type II audits.",
    icon: Shield,
  },
  {
    id: "iso27001",
    title: "ISO 27001",
    description: "Information security management system alignment with policy and risk documentation support.",
    icon: FileCheck,
  },
  {
    id: "gdpr",
    title: "GDPR",
    description: "Data processing records, access logging, and breach notification workflow documentation.",
    icon: Globe,
  },
  {
    id: "hipaa",
    title: "HIPAA-ready workflows",
    description: "PHI access controls, audit trails, and incident procedures for healthcare-aligned environments.",
    icon: HeartPulse,
  },
  {
    id: "audit-logs",
    title: "Audit logs",
    description: "Immutable, searchable audit trails for user actions, policy changes, and security events.",
    icon: ClipboardList,
  },
  {
    id: "rbac",
    title: "Role-based access",
    description: "Granular permissions for analysts, admins, and read-only stakeholders across the platform.",
    icon: Lock,
  },
];
