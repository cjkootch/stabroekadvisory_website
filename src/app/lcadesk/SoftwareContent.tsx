"use client";

import PricingToggle from "@/components/PricingToggle";
import CTABanner from "@/components/CTABanner";
import UIFrame from "@/components/UIFrame";
import GeometricBg from "@/components/GeometricBg";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  FileOutput,
  Clock,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  Zap,
  Users,
  FileText,
  Calendar,
  PenLine,
  ShieldAlert,
  FileSearch,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const socialProof = [
  { value: "5", label: "Mandatory Submissions Covered" },
  { value: "40", label: "LCA Sector Categories" },
  { value: "AI", label: "Narrative Drafting", sub: "Saves 4-6 hrs per filing" },
  { value: "v4.1", label: "Built on Latest Guidelines" },
];

const aiFeatures = [
  {
    icon: PenLine,
    badge: "MOST REQUESTED",
    badgeColor: "bg-gold text-white",
    title: "AI Narrative Drafting",
    desc: "The Comparative Analysis Report — the written narrative that must accompany every half-yearly submission — takes compliance officers 4-6 hours to write per period. LCA Desk reads your expenditure, employment, and capacity development data and drafts the entire narrative automatically, using correct LCA terminology and the formal tone the Secretariat expects.",
    example: {
      header: "AI Draft Generated ✓",
      lines: [
        { type: "label" as const, text: "Employment Narrative:" },
        { type: "text" as const, text: "\"During the reporting period January to June 2026, [Company] employed 47 personnel in support of petroleum operations, of whom 34 (72.3%) were Guyanese nationals. Consistent with the Employment Sub-Plan submitted in the approved Annual Local Content Plan, first consideration was accorded to Guyanese nationals across all technical and non-technical positions advertised during the period...\"" },
      ],
      actions: ["Edit Draft", "Accept & Continue →"],
    },
  },
  {
    icon: ShieldAlert,
    badge: "PROACTIVE",
    badgeColor: "bg-accent text-white",
    title: "Compliance Gap Detection",
    desc: "Before you file, LCA Desk's AI scans your submission data and flags potential issues the Secretariat is likely to scrutinize — low Guyanese employment rates, missing sole-source codes, procurement gaps against Annual Plan commitments, and suppliers without valid LCS Certificate IDs. Fix problems before submission, not after.",
    example: {
      header: "⚠  3 issues detected before submission",
      lines: [
        { type: "warn" as const, text: "Guyanese management rate: 34%\n  (Required minimum: 75%)" },
        { type: "warn" as const, text: "Supplier \"Gulf Freight Ltd\" has no LCS\n  Certificate ID — may not count toward\n  local content score" },
        { type: "warn" as const, text: "Capacity development spend is 0 —\n  required section, Secretariat will query" },
      ],
      actions: ["Review Issues", "Dismiss"],
    },
  },
  {
    icon: FileSearch,
    badge: "COMING SOON",
    badgeColor: "bg-gray-400 text-white",
    title: "Automatic Data Extraction",
    desc: "Upload your payroll export or procurement records in any format — PDF, Excel, or CSV — and LCA Desk's AI reads the document, extracts the relevant fields, and maps them directly to the correct report sections. No manual re-entry. No reformatting. The AI handles the data transformation.",
    example: {
      header: "📄 Payroll_June2026.xlsx uploaded",
      lines: [
        { type: "text" as const, text: "AI extracted 47 employee records:" },
        { type: "success" as const, text: "→ 34 Guyanese nationals identified" },
        { type: "success" as const, text: "→ Job titles mapped to ISCO-08 categories" },
        { type: "success" as const, text: "→ Remuneration totals calculated" },
        { type: "success" as const, text: "→ Managerial / Technical / Non-Technical\n   split applied automatically" },
      ],
      actions: ["Review extracted data →"],
    },
  },
  {
    icon: MessageSquare,
    badge: "AVAILABLE NOW",
    badgeColor: "bg-accent text-white",
    title: "Ask the LCA Expert",
    desc: "Every LCA Desk account includes an AI assistant trained on the complete Local Content Act, all Secretariat guidelines (including Version 4.1), and your company's specific data. Ask any compliance question and get an accurate, cited answer — without calling a lawyer or waiting for a consultant to respond.",
    example: {
      header: null,
      lines: [
        { type: "user" as const, text: "You: Do I need to include sole-sourced contracts in my expenditure report?" },
        { type: "ai" as const, text: "LCA Desk AI: Yes. All procurement — including sole-sourced contracts — must be reported in the Expenditure Sub-Report. For sole-sourced items, you must also include the LCS-assigned Sole Source Code in the \"Sole Source Code\" column. This requirement is set out in Section 3.2.3 of the Version 4.1 Submission Guideline." },
        { type: "ref" as const, text: "Reference: LCA Version 4.1, Section 3.2.3" },
      ],
      actions: [],
    },
  },
];

const features = [
  {
    icon: Database,
    title: "Multi-Client Dashboard",
    desc: "Manage every company in your portfolio from a single view. Track local content percentages, expenditure totals, and upcoming deadlines at a glance. AI surfaces which clients are at risk, which filings need attention, and where your aggregate local content performance stands — at a glance.",
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
    desc: "A step-by-step guided checklist for every report type ensures nothing is missed before you export. AI pre-validates your data before you reach the checklist — catching errors in employment rates, missing supplier certificates, and narrative gaps before you export.",
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
                className="mb-6"
              >
                <img
                  src="/lcadesk-logo.png"
                  alt="LCA Desk"
                  className="h-10 w-auto"
                />
              </motion.div>

              <motion.h1
                custom={1} initial="hidden" animate="visible" variants={fadeUp}
                className="font-[family-name:var(--font-tech)] text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text-primary mb-4"
              >
                AI-Powered LCA Compliance for Guyana&apos;s Oil Sector
              </motion.h1>

              <motion.div
                custom={1.5} initial="hidden" animate="visible" variants={fadeUp}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 border border-amber-200"
              >
                <Sparkles size={12} />
                Powered by AI
              </motion.div>

              <motion.p
                custom={2} initial="hidden" animate="visible" variants={fadeUp}
                className="text-base md:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
              >
                LCA Desk uses artificial intelligence to draft your compliance narratives, detect filing
                risks before submission, and extract data from your payroll and procurement records
                automatically. The first AI-native compliance platform built for Guyana&apos;s Local Content Act.
              </motion.p>

              <motion.div
                custom={3} initial="hidden" animate="visible" variants={fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-7 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent/30 px-7 py-3.5 text-sm font-medium text-accent hover:border-accent hover:bg-accent/5 transition-all"
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
      <section className="border-y border-accent/10 py-10 px-6 bg-accent-light/30">
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
              <p className="font-[family-name:var(--font-tech)] text-3xl gradient-text mb-1">{s.value}</p>
              <p className="text-xs text-text-muted">{s.label}</p>
              {"sub" in s && s.sub && (
                <p className="text-[10px] text-accent mt-0.5">{s.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───── AI FEATURES ───── */}
      <section className="relative py-24 px-6 overflow-hidden" style={{
        background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #047857 60%, #064E3B 100%)",
      }}>
        <GeometricBg variant="circuits" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-300 mb-3">Artificial Intelligence</p>
            <h2 className="font-[family-name:var(--font-tech)] text-3xl md:text-4xl text-white mb-4">
              The AI That Does the Hard Work
            </h2>
            <p className="text-sm text-white/75 max-w-xl mx-auto leading-relaxed">
              LCA compliance isn&apos;t just data entry — it&apos;s analysis, narrative writing, and risk management.
              LCA Desk&apos;s AI handles the parts that take the most time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.25] backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all group shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <f.icon size={20} className="text-emerald-300" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{f.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-5">{f.desc}</p>

                {/* Example block */}
                <div className="bg-[#080E1A] rounded-xl border border-white/5 p-4 font-mono text-xs overflow-hidden">
                  {f.example.header && (
                    <p className="text-emerald-400 font-bold mb-3">{f.example.header}</p>
                  )}
                  <div className="space-y-2">
                    {f.example.lines.map((line, j) => (
                      <p key={j} className={`whitespace-pre-wrap leading-relaxed ${
                        line.type === "label" ? "text-blue-300 font-bold" :
                        line.type === "warn" ? "text-amber-300" :
                        line.type === "success" ? "text-emerald-400" :
                        line.type === "user" ? "text-blue-300" :
                        line.type === "ai" ? "text-gray-300" :
                        line.type === "ref" ? "text-gray-500 text-[10px] mt-2" :
                        "text-gray-300"
                      }`}>
                        {line.text}
                      </p>
                    ))}
                  </div>
                  {f.example.actions.length > 0 && (
                    <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
                      {f.example.actions.map((a) => (
                        <span key={a} className={`text-[10px] px-3 py-1.5 rounded-md cursor-default ${
                          a.includes("→") || a.includes("Accept")
                            ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/30"
                            : "bg-white/5 text-gray-400 border border-white/10"
                        }`}>
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
              Built on AI. Grounded in the Official Guidelines.
            </h2>
            <p className="text-sm text-text-secondary max-w-lg mx-auto">
              LCA Desk combines AI-powered automation with strict adherence to the Local Content Secretariat&apos;s official templates. The AI does the work. The output is always compliant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
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
            LCA Desk vs. the old way
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
                  "Hours writing compliance narratives",
                  "Errors caught by Secretariat after filing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-red-400 mt-0.5 font-bold">&#10005;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-accent/30 rounded-xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-teal to-accent-hover" />
              <p className="text-xs font-medium uppercase tracking-wider text-accent mb-4">With LCA Desk AI</p>
              <ul className="space-y-3">
                {[
                  "Guided data entry with validation",
                  "Built on Version 4.1 guidelines",
                  "Auto-updated when templates change",
                  "Automated deadline alerts",
                  "Historical data carried forward",
                  "Submission checklist catches errors",
                  "AI drafts narratives from your data",
                  "AI flags issues before submission",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle2 size={15} className="text-accent mt-0.5 flex-shrink-0" />
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

          {/* Anthropic credibility strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-900 border border-gray-800 rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#CC785C" }}>
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="text-sm font-medium text-white">Powered by Claude — Anthropic&apos;s AI</span>
            </div>
            <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
              LCA Desk&apos;s AI features are built on Claude, Anthropic&apos;s frontier AI model.
              All AI outputs are reviewed by compliance professionals before submission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <CTABanner
        headline="Let AI handle your LCA compliance."
        body="See AI narrative drafting, compliance gap detection, and automated reporting in action. Request a demo and we'll show you a live LCA submission built from your company's data."
        primaryCTA={{ label: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
