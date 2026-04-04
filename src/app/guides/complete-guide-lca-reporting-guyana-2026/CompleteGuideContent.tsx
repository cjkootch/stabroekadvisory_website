"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Users,
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  BarChart3,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from "lucide-react";

const submissions = [
  {
    icon: MapPin,
    title: "1. Local Content Master Plan",
    deadline: "Within 4 months of petroleum agreement",
    period: "Full agreement term (typically 5 years)",
    desc: "A comprehensive strategic plan covering employment, procurement, and capacity development for the entire term of your petroleum agreement. Required only once — when you first enter an agreement.",
    items: ["Employment Sub-Plan", "Procurement Sub-Plan", "Capacity Development Sub-Plan", "Company profile", "Petroleum agreement references"],
  },
  {
    icon: CalendarDays,
    title: "2. Annual Local Content Plan",
    deadline: "December 31 (for the following year)",
    period: "Next calendar year",
    desc: "A forward-looking 12-month plan submitted before the start of each calendar year. Projects your expected local content performance across employment, procurement, and capacity development.",
    items: ["Employment projections", "Procurement targets", "Capacity development activities", "12-month forward plan"],
  },
  {
    icon: FileText,
    title: "3. H1 Half-Yearly Report",
    deadline: "July 30",
    period: "January 1 – June 30",
    desc: "Covers the first six months. Must include Expenditure, Employment, and Capacity Development Sub-Reports plus a Comparative Analysis Narrative explaining variances from your Annual Plan.",
    items: ["Expenditure Sub-Report", "Employment Sub-Report", "Capacity Development Sub-Report", "Comparative Analysis Narrative"],
  },
  {
    icon: FileText,
    title: "4. H2 Half-Yearly Report",
    deadline: "January 30 (following year)",
    period: "July 1 – December 31",
    desc: "Same structure as H1, covering the second six months. Includes year-end reconciliation and full-year cumulative data where applicable.",
    items: ["Expenditure Sub-Report", "Employment Sub-Report", "Capacity Development Sub-Report", "Comparative Analysis Narrative"],
  },
  {
    icon: BarChart3,
    title: "5. Annual Performance Report",
    deadline: "February 14 (45 days after year end)",
    period: "Full calendar year",
    desc: "A summary report covering the entire calendar year. Compares actual local content performance against the targets set in your Annual Local Content Plan.",
    items: ["Full-year expenditure summary", "Employment performance", "Capacity development outcomes", "Variance analysis"],
  },
];

const dataCategories = [
  {
    title: "Expenditure Data",
    color: "bg-emerald-100 text-emerald-700",
    items: ["Supplier name and country of origin", "Guyanese vs non-Guyanese classification", "LCA sector category (40 categories)", "Amount spent in reporting period", "Sole source code (if applicable)", "LCS Certificate ID for local suppliers"],
  },
  {
    title: "Employment Data",
    color: "bg-blue-100 text-blue-700",
    items: ["Employee name and nationality", "Job title and ISCO-08 category", "Guyanese national status", "Managerial / Technical / Non-Technical level", "Remuneration band", "Start and end dates"],
  },
  {
    title: "Capacity Development",
    color: "bg-amber-100 text-amber-700",
    items: ["Training programme name", "Number of participants", "Guyanese participants", "Duration and dates", "Cost of programme", "Type: training, scholarship, technology transfer"],
  },
];

const commonMistakes = [
  "Submitting after the deadline without requesting an extension",
  "Missing the Comparative Analysis Narrative entirely",
  "Incorrect Guyanese vs non-Guyanese classification of suppliers",
  "Not including sole-source codes for sole-sourced contracts",
  "Using outdated template versions (must use Version 4.1)",
  "Omitting capacity development spend (GY$0 triggers Secretariat query)",
  "Not including LCS Certificate IDs for registered local suppliers",
  "Mixing reporting periods or including out-of-period transactions",
];

export default function CompleteGuideContent() {
  return (
    <>
      <HeroSection
        eyebrow="FLAGSHIP GUIDE · 2026 EDITION"
        headline="The Complete Guide to LCA Reporting in Guyana"
        sub="Everything you need to know about Local Content Act compliance — from first-time filing to ongoing reporting obligations."
        geometricVariant="topology"
        primaryCTA={{ label: "Download Checklist", href: "/contact" }}
        secondaryCTA={{ label: "Talk to an Expert", href: "/contact" }}
      />

      {/* Definition Block */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-accent-light/40 border-l-4 border-accent rounded-r-xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-accent" />
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">What Is LCA Reporting?</h2>
            </div>
            <p className="text-sm text-text-primary leading-relaxed">
              Local Content Act (LCA) reporting is the mandatory compliance process under Guyana&apos;s Local Content Act 2021
              (No. 18 of 2021). Every contractor, subcontractor, and licensee in the petroleum sector must submit recurring
              reports to the Local Content Secretariat covering employment of Guyanese nationals, procurement from local
              suppliers, and capacity development activities. There are five mandatory submissions per year, with penalties
              of up to GY$50 million for non-compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl text-text-primary mb-6">In This Guide</h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Who Must File",
              "The 5 Mandatory Submissions",
              "Filing Deadlines",
              "What Data You Need",
              "The Comparative Analysis Narrative",
              "Common Mistakes",
              "Penalties for Non-Compliance",
              "Automating with LCA Desk",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
              >
                <span className="text-accent font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </motion.div>
            ))}
          </nav>
        </div>
      </section>

      {/* Who Must File */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">Who Must File</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            All entities engaged in petroleum operations in Guyana are required to file LCA reports.
            This includes:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Users, title: "Contractors", desc: "Operators and primary contractors holding petroleum agreements with the Government of Guyana." },
              { icon: Users, title: "Subcontractors", desc: "Service companies, suppliers, and any entity in the petroleum supply chain providing goods or services." },
              { icon: Users, title: "Licensees", desc: "Companies holding petroleum prospecting or production licences under the Petroleum Act." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-medium text-text-primary mb-2">{item.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 5 Mandatory Submissions */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">The 5 Mandatory Submissions</h2>
          <p className="text-sm text-text-secondary mb-10">
            Every company in the petroleum sector must complete these five submissions. Missing any one can trigger enforcement.
          </p>
          <div className="space-y-6">
            {submissions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center flex-shrink-0">
                    <s.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-text-primary mb-1">{s.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock size={12} /> {s.period}
                      </span>
                      <span className="text-xs text-accent font-medium flex items-center gap-1">
                        <AlertTriangle size={12} /> Deadline: {s.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{s.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle2 size={12} className="text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Deadlines */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">Filing Deadlines at a Glance</h2>
          <div className="space-y-3">
            {[
              { date: "Within 4 months", label: "Master Plan — after entering petroleum agreement", color: "from-purple-500 to-indigo-500" },
              { date: "December 31", label: "Annual Local Content Plan — for the following year", color: "from-blue-500 to-cyan-500" },
              { date: "July 30", label: "H1 Half-Yearly Report — January to June period", color: "from-accent to-teal" },
              { date: "January 30", label: "H2 Half-Yearly Report — July to December period", color: "from-accent to-teal" },
              { date: "February 14", label: "Annual Performance Report — 45 days after year end", color: "from-amber-500 to-orange-500" },
            ].map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-3.5 hover:border-accent/30 transition-all"
              >
                <span className={`flex-shrink-0 bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3.5 py-1.5 rounded-md min-w-[120px] text-center`}>
                  {item.date}
                </span>
                <p className="text-sm text-text-secondary">{item.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Semantic HTML table for AI/screen reader parsing */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/5">
                  <th className="text-left px-4 py-3 font-medium text-text-primary border border-border">Report Type</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary border border-border">Period Covered</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary border border-border">Deadline</th>
                  <th className="text-left px-4 py-3 font-medium text-text-primary border border-border">Submitted To</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "H1 Half-Yearly Report", period: "January 1 – June 30", deadline: "July 30", to: "localcontent@nre.gov.gy" },
                  { type: "H2 Half-Yearly Report", period: "July 1 – December 31", deadline: "January 30", to: "localcontent@nre.gov.gy" },
                  { type: "Annual Local Content Plan", period: "Forward 12-month projection", deadline: "60 days before January 1", to: "localcontent@nre.gov.gy" },
                  { type: "Local Content Master Plan", period: "5-year forward projection", deadline: "Within 4 months of new contract", to: "localcontent@nre.gov.gy" },
                  { type: "Annual Performance Report", period: "Prior calendar year", deadline: "45 days after December 31", to: "localcontent@nre.gov.gy" },
                ].map((row, i) => (
                  <tr key={row.type} className={i % 2 === 1 ? "bg-surface" : ""}>
                    <td className="px-4 py-3 text-text-primary font-medium border border-border">{row.type}</td>
                    <td className="px-4 py-3 text-text-secondary border border-border">{row.period}</td>
                    <td className="px-4 py-3 text-accent font-medium border border-border">{row.deadline}</td>
                    <td className="px-4 py-3 text-text-secondary border border-border">{row.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-6">
            Deadlines falling on weekends or public holidays extend to the next business day.
            See <Link href="/lca-filing-calendar" className="text-accent hover:underline">full filing calendar</Link>.
          </p>
        </div>
      </section>

      {/* What Data You Need */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">What Data You Need</h2>
          <p className="text-sm text-text-secondary mb-10">
            LCA reports require three categories of data. Having these ready before your deadline is the single
            most important factor in filing on time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-5"
              >
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${cat.color}`}>
                  {cat.title}
                </span>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                      <CheckCircle2 size={11} className="text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative Analysis Narrative */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">The Comparative Analysis Narrative</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Every Half-Yearly Report must be accompanied by a Comparative Analysis Narrative — a written document
            explaining how your actual local content performance compares to the targets in your Annual Local
            Content Plan. This narrative covers expenditure, employment, and capacity development.
          </p>
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              The narrative must explain variances, both positive and negative, using formal language and
              correct LCA terminology. It is the most time-consuming part of the filing process — typically
              taking compliance officers <strong className="text-text-primary">4-6 hours per period</strong>.
            </p>
            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs font-bold text-accent">AI AUTOMATION</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                LCA Desk&apos;s AI reads your expenditure, employment, and capacity development data and drafts
                the entire Comparative Analysis Narrative automatically — using the formal tone and LCA
                terminology the Secretariat expects.{" "}
                <Link href="/lcadesk" className="text-accent hover:underline">Learn more about AI narrative drafting →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake, i) => (
              <motion.div
                key={mistake}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-3 bg-card border border-border rounded-lg px-5 py-3"
              >
                <AlertTriangle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-text-secondary">{mistake}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">Penalties for Non-Compliance</h2>
          <div className="bg-card border border-red-200 rounded-xl p-6">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Under Section 41 of the Local Content Act, penalties for non-compliance are severe:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Fines from GY$1 million to GY$50 million per offence",
                "False or misleading submissions are a criminal offence",
                "Suspension or removal from the Local Content Register",
                "Delays to contract approvals and petroleum agreement renewals",
                "Negative impact on bid evaluation scores",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-text-secondary">
                  <AlertTriangle size={13} className="text-red-500 mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="text-xs text-text-muted">
              See <Link href="/local-content-act-penalties-guyana" className="text-accent hover:underline">full penalties guide</Link> for details.
            </p>
          </div>
        </div>
      </section>

      {/* Automating with LCA Desk */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">Automation</p>
              <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
                Automate Your LCA Reporting with LCA Desk
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                LCA Desk is the only compliance platform built specifically for Guyana&apos;s Local Content Act.
                It combines AI-powered automation with the official Secretariat template structure to
                eliminate manual data entry, automate narrative drafting, and catch compliance gaps before submission.
              </p>
              <Link
                href="/lcadesk"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm text-white font-medium hover:shadow-lg hover:shadow-accent/20 transition-all"
              >
                Explore LCA Desk →
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { icon: ShieldCheck, text: "All 5 submission types supported" },
                { icon: Sparkles, text: "AI narrative drafting saves 4-6 hours" },
                { icon: AlertTriangle, text: "Pre-submission compliance gap detection" },
                { icon: CalendarDays, text: "Automated deadline alerts" },
                { icon: FileText, text: "Export in official Secretariat format" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3">
                  <item.icon size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to simplify your LCA reporting?"
        body="Whether you use LCA Desk self-serve or our managed service, we'll get you compliant. Book a consultation and we'll assess your filing status within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Try LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
