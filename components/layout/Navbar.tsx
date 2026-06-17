"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/platform", label: "Platform" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/security-report", label: "Security Report" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-foreground cursor-pointer"
          aria-label="ShieldOps Security home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan">
            <Shield className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            ShieldOps<span className="text-accent-cyan">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer min-h-[44px] flex items-center",
                pathname === link.href
                  ? "text-accent-cyan bg-accent-cyan/10"
                  : "text-muted hover:text-foreground hover:bg-card"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm">
            Request Security Audit
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground lg:hidden cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-card-border bg-background px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium cursor-pointer min-h-[44px]",
                  pathname === link.href
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-muted hover:bg-card"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-4 w-full">
              Request Security Audit
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
