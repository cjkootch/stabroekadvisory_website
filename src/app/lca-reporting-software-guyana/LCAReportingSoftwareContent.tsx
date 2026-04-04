"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  FileText,
  Zap,
  AlertTriangle,
  Clock,
  BarChart3,
  Users,
  CheckCircle,
  XCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const aiFeatures = [
  {
    icon: FileText,
    title: "AI Narrative Drafting",
    body: "LCA Desk analyzes your expenditure, employment, and capacity data to draft the comparative analysis narrative required in every Half-Yearly Report. Highlights period-over-period trends, flags variances, and suggests corrective action language — all ready for your review.",
  },
  {
    icon: AlertTriangle,
    title: "Intelligent Gap Detection",
    body: "Scans your data weeks before each deadline and identifies missing vendor classifications, incomplete headcount records, unreconciled expenditure categories, and other gaps that would cause Secretariat rejection.",
  },
  {
    icon: BarChart3,
    title: "Trend Analysis & Forecasting",
    body: "Tracks your local content metrics over time and projects whether you're on track to meet your Annual Plan targets. Provides early warnings so you can adjust course before the Performance Report is due.",
  },
  {
    icon: Clock,
    title: "Deadline Management",
    body: "Automated reminders for all five mandatory filing deadlines. Tracks the status of each report from data collection through final submission and sends escalation alerts if a filing is at risk.",
  },
];

const comparisonRows = [
  { feature: "Automated data collection", lcaDesk: true, spreadsheet: false },
  { feature: "Vendor nationality classification", lcaDesk: true, spreadsheet: false },
  { feature: "AI-drafted narratives", lcaDesk: true, spreadsheet: false },
  { feature: "Gap detection before filing", lcaDesk: true, spreadsheet: false },
  { feature: "Multi-entity support", lcaDesk: true, spreadsheet: false },
  { feature: "Secretariat-ready output format", lcaDesk: true, spreadsheet: false },
  { feature: "Deadline tracking & alerts", lcaDesk: true, spreadsheet: false },
  { feature: "Audit trail & version history", lcaDesk: true, spreadsheet: false },
];

const platformCapabilities = [
  {
    icon: Zap,
    title: "Automated Data Ingestion",
    body: "Connects to your procurement, HR, and finance systems. Imports expenditure, payroll, and training data without manual entry.",
  },
  {
    icon: Users,
    title: "Vendor & Employee Classification",
    body: "Automatically categorizes vendors and employees by nationality, ownership status, and job category using registration data.",
  },
  {
    icon: FileText,
    title: "Report Generation",
    body: "Generates all five mandatory LCA report types in the exact format required by the Local Content Secretariat.",
  },
  {
    icon: Cpu,
    title: "Multi-Entity Management",
    body: "Manage reporting for multiple subsidiaries, projects, or joint ventures from a single dashboard with role-based access controls.",
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

export default function LCAReportingSoftwareContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="LCA Desk Platform"
        headline="LCA Reporting Software Built for Guyana's Oil Sector"
        sub="The only purpose-built software for Local Content Act compliance. AI-powered narrative drafting, automated gap detection, and Secretariat-ready report generation."
        geometricVariant="circuits"
        primaryCTA={{ label: "Book a Demo", href: "/contact" }}
        secondaryCTA={{ label: "Full Platform Details", href: "/lcadesk" }}
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
              What Is LCA Reporting Software?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              LCA reporting software is a specialized compliance platform that
              automates the preparation and filing of reports required under
              Guyana&apos;s Local Content Act 2021. Unlike generic spreadsheets or
              ERP modules, purpose-built LCA software understands the specific data
              structures, vendor classification rules, narrative requirements, and
              filing formats mandated by the Local Content Secretariat. LCA Desk is
              the only platform designed specifically for this purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            AI-Powered Compliance Features
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            LCA Desk uses artificial intelligence to automate the most
            time-consuming parts of LCA compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((f, i) => (
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
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">
            LCA Desk vs. Spreadsheets
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-surface border-b border-border px-6 py-3">
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                Feature
              </span>
              <span className="text-xs font-medium text-accent uppercase tracking-wide text-center">
                LCA Desk
              </span>
              <span className="text-xs font-medium text-text-secondary uppercase tracking-wide text-center">
                Spreadsheets
              </span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 px-6 py-3 border-b border-border last:border-b-0"
              >
                <span className="text-sm text-text-secondary">{row.feature}</span>
                <div className="flex justify-center">
                  {row.lcaDesk ? (
                    <CheckCircle size={18} className="text-accent" />
                  ) : (
                    <XCircle size={18} className="text-text-secondary/40" />
                  )}
                </div>
                <div className="flex justify-center">
                  {row.spreadsheet ? (
                    <CheckCircle size={18} className="text-accent" />
                  ) : (
                    <XCircle size={18} className="text-text-secondary/40" />
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformCapabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <c.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {c.body}
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
              See full platform details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqItems} />

      <CTABanner
        headline="See LCA Desk in action"
        body="Book a demo and we'll show you how LCA Desk automates your entire compliance workflow — from data collection to Secretariat submission."
        primaryCTA={{ label: "Book a Demo", href: "/contact" }}
        secondaryCTA={{ label: "Full Platform Details", href: "/lcadesk" }}
      />
    </>
  );
}
