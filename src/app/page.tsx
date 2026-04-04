"use client";

import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import StatCard from "@/components/StatCard";
import StepTimeline from "@/components/StepTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileWarning,
  LayoutGrid,
  AlertOctagon,
  Monitor,
  ShieldCheck,
} from "lucide-react";

const problemCards = [
  {
    icon: FileWarning,
    title: "The Reporting Burden",
    body: "The Local Content Act mandates 5 separate mandatory submissions per year — each with multi-tab Excel templates, narrative analysis reports, and strict deadlines. One missed filing means Secretariat follow-up. Repeated failures mean penalties.",
    color: "border-l-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: LayoutGrid,
    title: "The Complexity",
    body: "40 reserved service categories. Employment data disaggregated by job title, nationality, and remuneration. Procurement spend by Guyanese vs non-Guyanese supplier. Capacity development tracked per activity. Every field maps to Section 12 of the Act.",
    color: "border-l-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: AlertOctagon,
    title: "The Risk",
    body: "Non-compliance fines range from GY$1 million to GY$50 million. False or misleading submissions are a criminal offence. The Secretariat is actively auditing. Your local content score directly affects bid evaluation results.",
    color: "border-l-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];

const trustBadges = [
  "FPSO Operators",
  "Shore Base Companies",
  "Drilling Contractors",
  "Catering & Logistics",
  "Engineering Firms",
  "Marine Vessel Services",
  "Manpower & Crewing",
  "Environmental Services",
];

const stats = [
  { value: "1,300+", label: "Companies Required to File" },
  { value: "5x", label: "Annual Mandatory Submissions" },
  { value: "2+", label: "Billion in LCA Procurement to Date" },
  { value: "20+", label: "New LCA Categories Being Added" },
  { value: "900K+", label: "Barrels Per Day (and growing)" },
];

const steps = [
  {
    title: "Onboard",
    description:
      "We collect your company details, contract references, co-venturer info, and reporting period parameters. Setup takes one working day.",
  },
  {
    title: "Collect",
    description:
      "Before each deadline, we send you a structured data request. You provide your payroll export and procurement records. We know exactly what we need.",
  },
  {
    title: "Prepare",
    description:
      "We build your Half-Yearly Expenditure Report, Employment Sub-Report, Capacity Development Sub-Report, and Comparative Analysis Narrative — all in the official Secretariat Excel and PDF formats.",
  },
  {
    title: "Submit",
    description:
      "We file to localcontent@nre.gov.gy with the correct subject line format, track acknowledgement of receipt, and handle any Secretariat information requests.",
  },
];

const calendarItems = [
  { date: "ONGOING", label: "Master Plan — within 4 months of new contract" },
  { date: "DEC-NOV", label: "Annual Plan — 60 days before January 1" },
  { date: "JUL 30", label: "H1 Half-Yearly Report — January to June period" },
  { date: "JAN 30", label: "H2 Half-Yearly Report — July to December period" },
  {
    date: "FEB 14",
    label: "Annual Performance Report — 45 days after year end",
  },
];

const faqItems = [
  {
    question: "Who is required to file LCA half-yearly reports?",
    answer:
      "Every contractor, sub-contractor, and licensee operating under a petroleum agreement in Guyana is required to file half-yearly reports with the Local Content Secretariat. This applies to all companies registered on the Local Content Register, regardless of size or nationality.",
  },
  {
    question: "What are the penalties for non-compliance?",
    answer:
      "Non-compliance penalties range from GY$1 million to GY$50 million per offence under the Local Content Act. False or misleading submissions are a criminal offence. The Secretariat is actively auditing filed reports and following up on late or missing submissions.",
  },
  {
    question: "What is the deadline for the H1 and H2 half-yearly reports?",
    answer:
      "The H1 Half-Yearly Report (covering January to June) is due by July 30. The H2 Half-Yearly Report (covering July to December) is due by January 30. Deadlines falling on weekends extend to the next business day.",
  },
  {
    question: "What data do I need to provide for the managed service?",
    answer:
      "You provide your payroll export (employee names, job titles, nationalities, remuneration) and procurement records (supplier names, amounts, categories, Guyanese/non-Guyanese status). We handle all data entry, narrative writing, and submission formatting.",
  },
  {
    question:
      "Does my company need to be registered on the Local Content Register?",
    answer:
      "Yes. Under Section 15 of the Local Content Act, every contractor, sub-contractor, and licensee must be registered on the Local Content Register maintained by the Secretariat. Registration is a prerequisite for operating in Guyana's petroleum sector.",
  },
  {
    question:
      "What is the difference between LCA Desk and the managed service?",
    answer:
      "LCA Desk is self-serve software — you enter your own data and generate submission-ready reports. The managed service means Stabroek Advisory handles everything: data collection, entry, narrative writing, quality review, and submission to the Secretariat on your behalf.",
  },
  {
    question: "Can you help with the Comparative Analysis narrative sections?",
    answer:
      "Yes. Both LCA Desk and our managed service include the Comparative Analysis Narrative required alongside the Half-Yearly Report. This narrative explains variances between planned and actual local content performance across expenditure, employment, and capacity development.",
  },
  {
    question:
      "Do you serve companies in Suriname, Trinidad, or other Caribbean jurisdictions?",
    answer:
      "Currently, our compliance software and managed services are built specifically for Guyana's Local Content Act. We are monitoring local content legislation developments in Suriname and Trinidad and may expand coverage as those frameworks mature.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <HeroSection
        eyebrow="LOCAL CONTENT ACT COMPLIANCE · GUYANA OIL SECTOR"
        headline="Local Content Compliance, Built for Guyana's Oil Sector."
        sub="Stabroek Advisory provides compliance technology and managed reporting services for contractors, subcontractors, and licensees operating under Guyana's Local Content Act."
        primaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        geometricVariant="topology"
        fullHeight
      />

      {/* Ticker */}
      <Ticker />

      {/* Trust Bar */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted mb-8">
            Serving operators across Guyana&apos;s petroleum sector
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,168,122,0.08)" }}
                className="text-xs border border-accent/30 text-accent px-4 py-2 rounded-full font-medium cursor-default transition-colors hover:border-accent/60"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12 max-w-3xl mx-auto">
            Every company in Guyana&apos;s oil sector has a compliance
            obligation. Most are unprepared.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                className={`bg-card border border-border rounded-xl p-6 border-l-4 shadow-sm ${card.color} group transition-all`}
              >
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-4`}>
                  <card.icon size={20} className={card.iconColor} />
                </div>
                <h3 className="font-display text-lg text-text-primary mb-3 group-hover:text-text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            Two ways to stay compliant. Zero room for error.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Track 1 — Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 20px rgba(0,200,150,0.12)",
              }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-teal text-white px-3 py-1 rounded-md mb-3 inline-block">
                  Software
                </span>
                {/* Mini dashboard mockup */}
                <div className="space-y-3 mt-3">
                  {[
                    { label: "H1 Report", pct: 85, status: "Ready", barColor: "bg-emerald-500" },
                    { label: "Annual Plan", pct: 60, status: "In Progress", barColor: "bg-amber-400" },
                    { label: "Master Plan", pct: 100, status: "Submitted", barColor: "bg-blue-500" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3 bg-white/80 rounded-lg px-3 py-2 border border-white">
                      <span className="text-[10px] text-text-secondary font-medium w-16 flex-shrink-0">{r.label}</span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${r.barColor} rounded-full transition-all`} style={{ width: `${r.pct}%` }} />
                      </div>
                      <span className={`text-[9px] font-medium px-2 py-0.5 rounded-full ${
                        r.status === "Ready" ? "bg-emerald-100 text-emerald-700" :
                        r.status === "Submitted" ? "bg-blue-100 text-blue-700" :
                        "bg-amber-100 text-amber-700"
                      }`}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="font-display text-xl text-text-primary mb-3">
                  Self-Serve Compliance Software
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Log in, enter your data, generate submission-ready reports in the
                  official Secretariat format. Built on the Version 4.1 guidelines.
                  Covers all 5 mandatory submission types — Half-Yearly Reports,
                  Annual Plans, Master Plans, and Performance Reports.
                </p>
                <p className="text-sm font-medium text-gold mb-4">From $149/month</p>
                <Link
                  href="/lcadesk"
                  className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
                >
                  Explore LCA Desk &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Track 2 — Managed Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 20px rgba(0,200,150,0.12)",
              }}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-md mb-3 inline-block">
                  Full Service
                </span>
                {/* Service checklist mockup */}
                <div className="space-y-2.5 mt-3">
                  {[
                    { label: "Data collection", done: true },
                    { label: "Report preparation", done: true },
                    { label: "Narrative drafting", done: true },
                    { label: "Quality review", done: false },
                    { label: "Secretariat submission", done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5 bg-white/80 rounded-lg px-3 py-1.5 border border-white">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 ${
                        item.done ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-sm" : "border-2 border-gray-200"
                      }`}>
                        {item.done && <>&#10003;</>}
                      </div>
                      <span className={`text-[11px] font-medium ${item.done ? "text-text-primary" : "text-text-muted"}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-4">
                <h3 className="font-display text-xl text-text-primary mb-3">
                  Managed Compliance Reporting
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Send us your payroll and procurement data each period. We handle
                  everything — data collection, entry, narrative writing, quality
                  review, submission to the Secretariat, and any follow-up requests.
                  You stay compliant. We do the work.
                </p>
                <p className="text-sm font-medium text-gold mb-4">
                  From $2,500/month
                </p>
                <Link
                  href="/services"
                  className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 overflow-hidden bg-emerald-950">
        <GeometricBg variant="hexagons" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} lightOnDark />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-14">
            We handle your LCA compliance. End to end.
          </h2>
          <StepTimeline steps={steps} />
        </div>
      </section>

      {/* Compliance Calendar */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            Five mandatory submissions. Every year. Every company.
          </h2>
          <div className="space-y-3">
            {calendarItems.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-3.5 hover:border-accent/30 hover:shadow-sm transition-all group"
              >
                <span className="flex-shrink-0 bg-gradient-to-r from-accent to-teal text-white text-xs font-bold px-3.5 py-1.5 rounded-md min-w-[80px] text-center">
                  {item.date}
                </span>
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{item.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Semantic HTML table for AI/screen reader parsing */}
          <div className="mt-12 overflow-x-auto">
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
          <p className="text-xs text-text-muted mt-6 text-center">
            Deadlines falling on weekends extend to the next business day. Late
            submissions trigger Secretariat review.
          </p>
        </div>
      </section>

      {/* US Market Entry — with photo */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
              US Market Entry Advisory
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              Guyanese oil sector companies need US suppliers. We&apos;re already
              there.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Based in Houston, Texas — the center of the global energy industry
              — Stabroek Advisory connects Guyanese contractors and
              subcontractors to American suppliers, freight operators, and trade
              financing. We source goods, manage export documentation, and
              provide US market entry advisory for companies scaling their
              operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-sm text-white font-medium hover:bg-accent-hover transition-colors"
            >
              Talk to Our Houston Team &rarr;
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm"
          >
            {/* Trade route visualization */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-medium uppercase tracking-wider text-text-muted">Houston — Georgetown</p>
              <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded">Direct Route</span>
            </div>
            <div className="relative h-32 mb-6">
              <svg viewBox="0 0 400 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Connection arc */}
                <path d="M60 60 Q200 10 340 60" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="6 3" opacity="0.4" />
                {/* Houston node */}
                <circle cx="60" cy="60" r="20" fill="var(--color-accent)" opacity="0.08" />
                <circle cx="60" cy="60" r="6" fill="var(--color-accent)" opacity="0.3" />
                <text x="60" y="95" textAnchor="middle" className="text-[10px] fill-text-muted">Houston, TX</text>
                {/* Georgetown node */}
                <circle cx="340" cy="60" r="20" fill="var(--color-accent)" opacity="0.08" />
                <circle cx="340" cy="60" r="6" fill="var(--color-accent)" opacity="0.3" />
                <text x="340" y="95" textAnchor="middle" className="text-[10px] fill-text-muted">Georgetown, GY</text>
                {/* Flight indicator */}
                <text x="200" y="30" textAnchor="middle" className="text-[9px] fill-accent">5hr direct</text>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Same Timezone", val: "EST" },
                { label: "Supplier Network", val: "Gulf Coast" },
                { label: "Trade Finance", val: "EXIM Bank" },
              ].map((s) => (
                <div key={s.label} className="bg-surface rounded-lg px-3 py-2 border border-border text-center">
                  <p className="text-[10px] text-text-muted">{s.label}</p>
                  <p className="text-xs font-medium text-text-primary">{s.val}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Your next LCA filing deadline is closer than you think."
        body="H1 reports are due July 30. H2 reports are due January 30. Don't leave compliance to the last minute."
        primaryCTA={{ label: "Start with LCA Desk", href: "/lcadesk" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
