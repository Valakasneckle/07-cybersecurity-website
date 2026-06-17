"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

const projectTypes = [
  { value: "", label: "Select project type" },
  { value: "soc", label: "SOC Monitoring" },
  { value: "vuln", label: "Vulnerability Assessment" },
  { value: "ir", label: "Incident Response" },
  { value: "cloud", label: "Cloud Security" },
  { value: "compliance", label: "Compliance Support" },
  { value: "automation", label: "Security Automation" },
  { value: "other", label: "Other" },
];

const companySizes = [
  { value: "", label: "Select company size" },
  { value: "1-10", label: "1–10 employees" },
  { value: "11-50", label: "11–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-1000", label: "201–1,000 employees" },
  { value: "1000+", label: "1,000+ employees" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Full name" name="name" required autoComplete="name" />
        <Input label="Work email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Input label="Company" name="company" required autoComplete="organization" />
        <Select label="Company size" name="companySize" options={companySizes} required />
      </div>
      <Input
        label="Primary security concern"
        name="concern"
        placeholder="e.g. Cloud misconfigurations, incident response gaps"
        required
      />
      <Select label="Project type" name="projectType" options={projectTypes} required />
      <Textarea
        label="Message"
        name="message"
        rows={5}
        placeholder="Describe your environment, timeline, and goals..."
      />

      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "success" && (
          <p className="text-sm font-medium text-accent-green" role="status">
            Request received. Our security team will respond within one business day.
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Request consultation"}
      </Button>

      <p className="text-xs text-muted">
        This is a portfolio demo form. No data is transmitted to a backend.
      </p>
    </form>
  );
}
