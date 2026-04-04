"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  CalendarDays,
  Clock,
  Scale,
  AlertTriangle,
  Monitor,
  BarChart3,
  Users,
  Briefcase,
  BookOpen,
  ArrowRight,
  ClipboardCheck,
  CalendarCheck,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ResourceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

interface ResourceSection {
  heading: string;
  items: ResourceItem[];
}

const sections: ResourceSection[] = [
  {
    heading: "Filing Guides",
    items: [
      {
        icon: BookOpen,
        title: "Complete Guide to LCA Reporting (2026)",
        description:
          "End-to-end walkthrough of every LCA report you need to file.",
        href: "/guides/complete-guide-lca-reporting-guyana-2026",
        badge: "GUIDE",
      },
      {
        icon: FileText,
        title: "Half-Yearly Report Filing Guide",
        description:
          "Step-by-step instructions for your H1 and H2 submissions.",
        href: "/half-yearly-lca-report-guyana",
        badge: "GUIDE",
      },
      {
        icon: ClipboardCheck,
        title: "Annual Performance Report Guide",
        description:
          "How to prepare and submit your Annual Performance Report.",
        href: "/annual-performance-report-guyana",
        badge: "GUIDE",
      },
      {
        icon: BadgeCheck,
        title: "Local Content Register & Certification",
        description:
          "Registration process and certificate requirements explained.",
        href: "/local-content-certificate-guyana",
      },
    ],
  },
  {
    heading: "Deadlines & Calendar",
    items: [
      {
        icon: CalendarDays,
        title: "LCA Filing Calendar",
        description:
          "All key dates for LCA filings in one interactive calendar.",
        href: "/lca-filing-calendar",
        badge: "NEW",
      },
      {
        icon: Clock,
        title: "H1 Deadline: July 30",
        description:
          "Everything you need to know about the first-half reporting deadline.",
        href: "/h1-reporting-deadline-july-30",
        badge: "DEADLINE",
      },
      {
        icon: CalendarCheck,
        title: "H2 Deadline: January 30",
        description:
          "Everything you need to know about the second-half reporting deadline.",
        href: "/h2-reporting-deadline-january-30",
        badge: "DEADLINE",
      },
    ],
  },
  {
    heading: "Compliance References",
    items: [
      {
        icon: Scale,
        title: "LCA Act Overview",
        description:
          "Plain-language summary of the Local Content Act and its scope.",
        href: "/lca-act-overview",
      },
      {
        icon: FileText,
        title: "LCA Reporting Requirements",
        description:
          "Detailed breakdown of every reporting obligation under the Act.",
        href: "/guyana-local-content-act-reporting",
      },
      {
        icon: AlertTriangle,
        title: "Penalties & Fines Guide",
        description:
          "Penalty schedule and fine ranges for non-compliance.",
        href: "/local-content-act-penalties-guyana",
      },
    ],
  },
  {
    heading: "Software & Services",
    items: [
      {
        icon: Monitor,
        title: "LCA Desk Software",
        description:
          "Purpose-built compliance platform for LCA reporting.",
        href: "/lcadesk",
        badge: "NEW",
      },
      {
        icon: BarChart3,
        title: "LCA Reporting Software",
        description:
          "Automate data collection, validation, and submission.",
        href: "/lca-reporting-software-guyana",
      },
      {
        icon: Users,
        title: "Compliance Consulting",
        description:
          "Expert advisors who handle your LCA obligations end-to-end.",
        href: "/guyana-local-content-consultant",
      },
      {
        icon: Briefcase,
        title: "Managed Compliance Services",
        description:
          "Full-service report preparation, submission, and liaison.",
        href: "/services",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Card component                                                     */
/* ------------------------------------------------------------------ */

function ResourceCard({ item }: { item: ResourceItem }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={item.href}
        className="group block h-full rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-accent">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              {item.badge && (
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResourcesContent() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        eyebrow="Resource Hub"
        headline="LCA Compliance Resources"
        sub="Guides, filing calendars, penalty references, and compliance tools for Guyana's Local Content Act."
        geometricVariant="hexagons"
        primaryCTA={{ label: "Browse Guides", href: "#filing-guides" }}
        secondaryCTA={{ label: "View Calendar", href: "/lca-filing-calendar" }}
      />

      {/* Definition block */}
      <section className="bg-surface py-12">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="rounded-xl border border-border bg-card p-8 text-center"
          >
            <p className="text-text-secondary leading-relaxed">
              Stabroek Advisory publishes free compliance resources for companies
              operating under Guyana&apos;s Local Content Act. From filing guides
              to deadline calendars, everything you need to understand and meet
              your LCA obligations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource sections */}
      {sections.map((section) => {
        const sectionId = section.heading
          .toLowerCase()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return (
          <section
            key={section.heading}
            id={sectionId}
            className="bg-surface py-16"
          >
            <div className="mx-auto max-w-5xl px-6">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="font-display text-2xl font-semibold text-text-primary mb-8"
              >
                {section.heading}
              </motion.h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {section.items.map((item) => (
                  <ResourceCard key={item.href} item={item} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Blog section */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="font-display text-2xl font-semibold text-text-primary mb-8"
          >
            Blog
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/blog"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-accent">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-text-primary group-hover:text-accent transition-colors">
                    Stabroek Advisory Blog
                  </h3>
                  <p className="text-sm text-text-secondary">
                    In-depth articles on LCA compliance, Guyana&apos;s petroleum
                    sector, and regulatory updates.
                  </p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-text-muted group-hover:text-accent transition-colors" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        headline="Need help with LCA compliance?"
        body="Book a free consultation and let our experts guide you through every filing obligation."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
