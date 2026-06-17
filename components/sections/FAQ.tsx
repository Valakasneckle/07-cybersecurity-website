"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

function FAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border-b border-card-border last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent-cyan cursor-pointer min-h-[44px]"
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title="Common questions from security buyers"
        className="mb-10"
      />
      <Card className="mx-auto max-w-3xl px-6">
        {faqs.map((faq, i) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={i === 0}
          />
        ))}
      </Card>
    </Section>
  );
}
