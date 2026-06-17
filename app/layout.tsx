import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybersecurity-website-umber.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "ShieldOps Security — Cybersecurity for Modern Cloud Infrastructure",
    template: "%s | ShieldOps Security",
  },
  description:
    "Enterprise-grade SOC monitoring, threat detection, vulnerability management, and incident response for cloud infrastructure teams.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ShieldOps Security",
    description:
      "Real-time threat detection and SOC monitoring for modern cloud infrastructure.",
    url: siteUrl,
    siteName: "ShieldOps Security",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent-cyan focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
