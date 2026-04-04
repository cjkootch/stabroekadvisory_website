"use client";

import PricingToggle from "@/components/PricingToggle";
import CTABanner from "@/components/CTABanner";
import UIFrame from "@/components/UIFrame";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileOutput,
  Settings,
  Clock,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  Zap,
  Users,
  FileText,
  Calendar,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const socialProof = [
  { value: "5", label: "Mandatory Submissions Covered" },
  { value: "40", label: "LCA Sector Categories" },
  { value: "100%", label: "Secretariat Template Match" },
  { value: "v4.1", label: "Built on Latest Guidelines" },
];

const features = [
  {
    icon: Database,
    title: "Multi-Client Dashboard",
    desc: "Manage every company in your portfolio from a single view. Track local content percentages, expenditure totals, and upcoming deadlines at a glance.",
  },
  {
    icon: FileOutput,
    title: "One-Click Report Generation",
    desc: "Generate submission-ready Half-Yearly Reports, Annual Plans, Master Plans, and Performance Reports — all formatted to the official Secretariat Excel and PDF templates.",
  },
  {
    icon: Calendar,
    title: "Deadline Alerts & Calendar",
    desc: "Never miss a filing deadline. Automated alerts for H1, H2, Annual Plan, and Performance Report due dates — with configurable lead times.",
  },
  {
    icon: BarChart3,
    title: "Local Content Calculator",
    desc: "Instantly calculate your local content rate across expenditure, employment, and capacity development. Compare across periods to track progress.",
  },
  {
    icon: ShieldCheck,
    title: "Submission Checklist",
    desc: "A step-by-step guided checklist for every report type ensures nothing is missed before you export. Company info, expenditure, employment, narratives — all verified.",
  },
  {
    icon: Users,
    title: "Employment Tracking",
    desc: "Track employees by job title, nationality, and remuneration band. Disaggregate Guyanese vs non-Guyanese staff exactly as Section 12 requires.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Set up your company profile",
    desc: "Enter your company details, contract references, and reporting periods. Takes less than 10 minutes.",
    icon: Users,
  },
  {
    step: "02",
    title: "Enter your compliance data",
    desc: "Add expenditure items, employment records, and capacity development activities — guided by the official template structure.",
    icon: FileText,
  },
  {
    step: "03",
    title: "Review & export",
    desc: "LCA Desk validates your data, flags missing fields, and generates submission-ready files in the exact Secretariat format.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Submit with confidence",
    desc: "Download your reports and submit directly to localcontent@nre.gov.gy — or let our managed service team handle it for you.",
    icon: Zap,
  },
];

const tabs = [
  { label: "Background", num: "01" },
  { label: "General Information", num: "02" },
  { label: "Expenditure", num: "03" },
  { label: "Employment", num: "04" },
  { label: "Capacity Development", num: "05" },
  { label: "Export & Submit", num: "06" },
];

export default function SoftwareContent() {
  return (
    <>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-surface pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <motion.div
                custom={0} initial="hidden" animate="visible" variants={fadeUp}
                className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                LCA Desk — Compliance Software
              </motion.div>

              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="font-[family-name:var(--font-tech)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-6"
              >
                The compliance platform built for Guyana&apos;s oil sector
              </motion.h1>

              <motion.p
                custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="text-base md:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
              >
                Manage all five mandatory Local Content Act submissions from a single dashboard.
                Enter your data. Generate reports. Stay compliant — without the spreadsheets.
              </motion.p>

              <motion.div
                custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-white hover:bg-accent-hover hover:scale-[1.02] transition-all shadow-lg shadow-accent/20"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-7 py-3.5 text-sm font-medium text-text-primary hover:border-accent hover:text-accent transition-all"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            {/* Right — product mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <UIFrame title="lcadesk.com/dashboard">
                <div className="space-y-3">
                  {[
                    { name: "Georgetown Logistics Ltd", pct: 72, spend: "$1.2M", deadline: "Jul 30", status: "On Track" },
                    { name: "Atlantic Marine Services", pct: 58, spend: "$890K", deadline: "Jul 30", status: "Needs Data" },
                    { name: "Demerara Catering Co.", pct: 85, spend: "$2.1M", deadline: "Jul 30", status: "Ready" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between bg-surface rounded-lg px-4 py-3 border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-medium">
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm text-text-primary font-medium">{c.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="w-20 h-1.5 bg-border rounded-full overflow-hidden">
                              <div className="h-full bg-accent rounded-full" style={{ width: `${c.pct}%` }} />
                            </div>
                            <span className="text-[10px] text-text-muted">{c.pct}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-text-primary font-medium">{c.spend}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded ${
                          c.status === "Ready" ? "bg-accent/10 text-accent" :
                          c.status === "Needs Data" ? "bg-gold/10 text-gold" :
                          "bg-blue-50 text-blue-600"
                        }`}>{c.status}</span>
                      </div>
                    </div>
                  ))}

                  {/* Mini stats row */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {[
                      { label: "Next Deadline", val: "Jul 30" },
                      { label: "Reports Due", val: "3" },
                      { label: "Avg LC Rate", val: "71.6%" },
                    ].map((s) => (
                      <div key={s.label} className="bg-surface rounded-lg px-3 py-2 border border-border text-center">
                        <p className="text-xs text-text-muted">{s.label}</p>
                        <p className="text-sm font-medium text-text-primary">{s.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </UIFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── SOCIAL PROOF BAR ───── */}
      <section className="border-y border-border py-10 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialProof.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center"
            >
              <p className="font-[family-name:var(--font-tech)] text-3xl text-accent mb-1">{s.value}</p>
              <p className="text-xs text-text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── PRODUCT SCREENSHOTS ───── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Product</p>
            <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary mb-4">
              See LCA Desk in action
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Every screen is designed around the official Secretariat template — so your data entry maps directly to your submission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expenditure table */}
            <UIFrame title="lcadesk.com/expenditure">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border text-text-muted">
                      <th className="text-left py-2 pr-3">Sector</th>
                      <th className="text-left py-2 pr-3">Supplier</th>
                      <th className="text-left py-2 pr-3">Status</th>
                      <th className="text-right py-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    {[
                      { sector: "Catering", supplier: "GY Foods Ltd", status: "Guyanese", amount: "$145,000" },
                      { sector: "Marine", supplier: "OceanPro Inc.", status: "Non-Guyanese", amount: "$312,000" },
                      { sector: "Engineering", supplier: "Demerara Eng.", status: "Guyanese", amount: "$89,500" },
                      { sector: "Logistics", supplier: "Gulf Freight", status: "Non-Guyanese", amount: "$227,000" },
                    ].map((r, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-2.5 pr-3">{r.sector}</td>
                        <td className="py-2.5 pr-3">{r.supplier}</td>
                        <td className="py-2.5 pr-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] ${
                            r.status === "Guyanese" ? "bg-accent/10 text-accent" : "bg-gold/10 text-gold"
                          }`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="py-2.5 text-right text-text-primary font-medium">{r.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-between items-center pt-3 text-[10px] text-text-muted">
                  <span>4 items · $773,500 total</span>
                  <span className="text-accent font-medium">+ Add Expenditure</span>
                </div>
              </div>
            </UIFrame>

            {/* Compliance checklist */}
            <UIFrame title="lcadesk.com/submit">
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-text-primary font-medium">H1 Half-Yearly Report</p>
                  <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded">3 of 5 complete</span>
                </div>
                {[
                  { label: "Company information verified", done: true },
                  { label: "Expenditure items entered (4 items)", done: true },
                  { label: "Employment data entered (23 records)", done: true },
                  { label: "Capacity development activities", done: false },
                  { label: "Comparative analysis narrative", done: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 py-1">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      item.done ? "bg-accent text-white" : "border-2 border-border"
                    }`}>
                      {item.done && <>&#10003;</>}
                    </div>
                    <span className={`text-sm ${item.done ? "text-text-primary" : "text-text-muted"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
                <div className="pt-3 border-t border-border">
                  <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: "60%" }} />
                  </div>
                  <p className="text-[10px] text-text-muted mt-1.5">60% complete — 2 sections remaining</p>
                </div>
              </div>
            </UIFrame>
          </div>
        </div>
      </section>

      {/* ───── FEATURES GRID ───── */}
      <section className="py-20 px-6 bg-surface" id="features">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Features</p>
            <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary mb-4">
              Everything you need to file. Nothing you don&apos;t.
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              Purpose-built for Local Content Act compliance — not a generic reporting tool adapted for Guyana.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                className="bg-card border border-border rounded-xl p-6 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-medium text-text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">How It Works</p>
            <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary mb-4">
              From data entry to submission in four steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-border" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <span className="text-[10px] font-medium text-accent uppercase tracking-wider">Step {step.step}</span>
                  <h4 className="text-sm font-medium text-text-primary mt-2 mb-2">{step.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BUILT ON OFFICIAL GUIDELINES ───── */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Credibility</p>
              <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary mb-6">
                Every field maps to the official Secretariat template
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                LCA Desk was built directly from the Local Content Half-Yearly Report Submission
                Guideline (Version 4.1, June 2025) published by the Local Content Secretariat. Every
                dropdown, every data field, every required input matches the official format.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-accent" />
                <span className="text-text-secondary">Updated within 30 days of any Secretariat guideline change</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tabs.map((tab, i) => (
                <motion.div
                  key={tab.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <span className="text-accent text-xs font-medium">{tab.num}</span>
                  <p className="text-sm text-text-primary mt-1">{tab.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── COMPARISON STRIP ───── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary text-center mb-10">
            LCA Desk vs. doing it yourself
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">Without LCA Desk</p>
              <ul className="space-y-3">
                {[
                  "Manual multi-tab Excel templates",
                  "Cross-referencing the 92-page Act",
                  "Guessing at Secretariat format changes",
                  "Tracking deadlines in calendar apps",
                  "Retyping data every reporting period",
                  "Risk of missing fields or errors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-red-400 mt-0.5">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-accent/30 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-accent mb-4">With LCA Desk</p>
              <ul className="space-y-3">
                {[
                  "Guided data entry with validation",
                  "Built on Version 4.1 guidelines",
                  "Auto-updated when templates change",
                  "Automated deadline alerts",
                  "Historical data carried forward",
                  "Submission checklist catches errors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── PRICING ───── */}
      <section className="py-20 px-6 bg-surface" id="pricing">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Pricing</p>
            <h2 className="font-[family-name:var(--font-tech)] text-2xl md:text-3xl text-text-primary mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-sm text-text-secondary">
              No setup fees. Cancel anytime.
            </p>
          </div>
          <PricingToggle />
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <CTABanner
        headline="Ready to streamline your LCA compliance?"
        body="Request a demo and see how LCA Desk can simplify your mandatory filings."
        primaryCTA={{ label: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
