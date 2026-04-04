"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  DollarSign,
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  Zap,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const subReports = [
  {
    icon: DollarSign,
    title: "Expenditure Sub-Report",
    body: "Breaks down all procurement spend into local (Guyanese-owned) and foreign categories. Includes goods purchased, services contracted, and equipment sourced during the reporting period. Must reconcile with financial records and categorize vendors by ownership nationality.",
  },
  {
    icon: Users,
    title: "Employment Sub-Report",
    body: "Details total headcount by nationality (Guyanese vs. non-Guyanese), wage expenditure, job categories, and seniority levels. Tracks progress against the Act's requirement to give first consideration to Guyanese nationals for employment.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Development Sub-Report",
    body: "Documents training programs, apprenticeships, certifications, technology transfer initiatives, and scholarship programs undertaken during the period. Must demonstrate meaningful investment in building local workforce capability.",
  },
  {
    icon: BarChart3,
    title: "Comparative Analysis Narrative",
    body: "A written analysis explaining period-over-period trends, variances against targets set in the Annual Local Content Plan, root causes for shortfalls, and corrective actions being taken. This narrative is closely reviewed by the Secretariat.",
  },
];

const deadlines = [
  {
    period: "H1 Report",
    covers: "January 1 — June 30",
    due: "July 30",
    description: "First half of the calendar year. Data must capture all petroleum-sector activity from January through June.",
  },
  {
    period: "H2 Report",
    covers: "July 1 — December 31",
    due: "January 30 (following year)",
    description: "Second half of the calendar year. Due 30 days after the reporting period ends.",
  },
];

const automationFeatures = [
  {
    icon: Zap,
    title: "Automated Data Ingestion",
    body: "LCA Desk pulls expenditure, payroll, and training data from your existing systems — no manual spreadsheets required.",
  },
  {
    icon: Users,
    title: "Vendor Nationality Classification",
    body: "Automatically categorizes vendors as Guyanese-owned or foreign based on registration data, eliminating manual lookup.",
  },
  {
    icon: FileText,
    title: "AI-Drafted Narratives",
    body: "Generates the comparative analysis narrative from your data, highlighting trends and variances for your review.",
  },
  {
    icon: AlertTriangle,
    title: "Gap Detection & Alerts",
    body: "Flags missing data, inconsistencies, and deadline risks weeks before the filing is due.",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

function FAQSection({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card border border-border rounded-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display text-sm text-text-primary pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-accent flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HalfYearlyReportContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="Half-Yearly LCA Reports"
        headline="Half-Yearly Local Content Reporting for Guyana"
        sub="Detailed expenditure, employment, and capacity development reports filed on time — every H1 and H2 cycle. Powered by LCA Desk automation."
        geometricVariant="topology"
        primaryCTA={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
      />

      {/* Definition Block */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border-l-4 border-accent rounded-lg p-8"
          >
            <h2 className="font-display text-lg text-text-primary mb-3">
              What Is a Half-Yearly LCA Report?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              A Half-Yearly LCA Report is a mandatory filing required under Guyana&apos;s
              Local Content Act 2021 for every company engaged in petroleum operations.
              Filed twice per year — H1 covering January through June, H2 covering July
              through December — each report contains sub-reports on expenditure,
              employment, and capacity development, along with a comparative analysis
              narrative. These reports allow the Local Content Secretariat to monitor
              whether companies are meeting their local content obligations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Structure */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            Half-Yearly Report Structure
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Each Half-Yearly Report consists of three quantitative sub-reports and
            a comparative analysis narrative.
          </p>
          <div className="space-y-6">
            {subReports.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <s.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">
            Filing Deadlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deadlines.map((d) => (
              <motion.div
                key={d.period}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-text-primary">
                      {d.period}
                    </h3>
                    <p className="text-xs text-text-secondary">Covers: {d.covers}</p>
                  </div>
                </div>
                <div className="bg-accent/5 rounded-md px-4 py-2 mb-3">
                  <p className="text-sm font-medium text-accent">Due: {d.due}</p>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/lca-filing-calendar"
              className="text-sm text-accent hover:underline font-medium"
            >
              View full filing calendar &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How LCA Desk Automates It */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            How LCA Desk Automates Half-Yearly Reporting
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Stop wrestling with spreadsheets. LCA Desk handles data collection,
            categorization, narrative drafting, and filing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/lcadesk"
              className="text-sm text-accent hover:underline font-medium"
            >
              Learn more about LCA Desk &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqItems} />

      <CTABanner
        headline="Never miss a Half-Yearly filing deadline"
        body="LCA Desk automates your H1 and H2 reports from data collection to submission. See it in action."
        primaryCTA={{ label: "Book a Demo", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
