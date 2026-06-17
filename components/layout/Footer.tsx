import Link from "next/link";
import { Shield } from "lucide-react";

const footerLinks = {
  Solutions: [
    { href: "/solutions", label: "All Solutions" },
    { href: "/platform", label: "Platform" },
    { href: "/security-report", label: "Security Report" },
  ],
  Company: [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-foreground cursor-pointer">
              <Shield className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
              ShieldOps Security
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Enterprise-grade SOC monitoring, threat detection, and incident
              response for modern cloud infrastructure.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-accent-cyan cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Compliance</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>SOC 2</li>
              <li>ISO 27001</li>
              <li>GDPR</li>
              <li>HIPAA-ready</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-card-border pt-8 text-center text-sm text-muted">
          <p>
            &copy; {new Date().getFullYear()} ShieldOps Security. Portfolio
            demonstration project.
          </p>
        </div>
      </div>
    </footer>
  );
}
