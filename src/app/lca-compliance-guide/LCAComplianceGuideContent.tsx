"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Users,
  FileText,
  CalendarDays,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Search,
  Globe,
  ClipboardList,
  Building2,
} from "lucide-react";

const serviceCategories = [
  "Accommodation and Food Services", "Administrative and Support Services",
  "Agriculture Forestry and Fishing", "Air Transport",
  "Architectural and Engineering Activities", "Audit and Accounting",
  "Chemicals and Pharmaceuticals", "Civil Works/Construction",
  "Cleaning Services", "Computer and Information Technology",
  "Drilling and Well Services", "Education and Training",
  "Electrical Equipment and Services", "Environmental Services",
  "Financial and Insurance Activities", "Freight and Logistics",
  "Fuel and Lubricants", "Geological and Geophysical Services",
  "Health and Medical Services", "Human Resources/Manpower",
  "Industrial Equipment and Machinery", "Inspection and Testing",
  "Insurance Services", "Legal Services",
  "Maintenance Repair and Operations", "Manufacturing",
  "Marine Services", "Mining and Quarrying",
  "Office Equipment and Supplies", "Personal Protective Equipment",
  "Pipeline Services", "Professional Scientific and Technical",
  "Real Estate Activities", "Rental and Leasing",
  "Safety and Emergency Services", "Security Services",
  "Subsea Services", "Telecommunications",
  "Transportation", "Waste Management and Remediation",
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
  "Failing to disaggregate employment data by nationality and job level",
  "Submitting without internal quality review",
];

const registrationSteps = [
  { step: "01", title: "Eligibility Assessment", desc: "Confirm your company meets the definition of a contractor, subcontractor, or licensee under the Act." },
  { step: "02", title: "Document Preparation", desc: "Gather incorporation documents, Tax Identification Number, NIS registration, proof of Guyanese ownership (if applicable), and company profile." },
  { step: "03", title: "Application Submission", desc: "Submit your application to the Local Content Secretariat at localcontent@nre.gov.gy with all required supporting documents." },
  { step: "04", title: "Secretariat Review", desc: "The Secretariat reviews your application, may request additional information, and issues a decision." },
  { step: "05", title: "Certificate Issuance", desc: "Upon approval, you receive your LCS Certificate with a unique Certificate ID used in all future filings." },
];

export default function LCAComplianceGuideContent() {
  return (
    <>
      <HeroSection
        eyebrow="DEFINITIVE GUIDE · 2026 EDITION"
        headline="Guyana LCA Compliance Guide"
        sub="Everything contractors need to know about Local Content Act reporting — from registration to filing to audit defense."
        geometricVariant="topology"
        primaryCTA={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCTA={{ label: "Try LCA Desk", href: "/lcadesk" }}
      />

      {/* 1. Definition Block */}
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
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider">What Is the Local Content Act 2021?</h2>
            </div>
            <p className="text-sm text-text-primary leading-relaxed">
              The Local Content Act 2021 (No. 18 of 2021) is Guyana&apos;s primary legislation governing the participation of
              Guyanese nationals and companies in the petroleum sector. It requires all contractors, subcontractors, and
              licensees to submit recurring reports to the Local Content Secretariat covering employment, procurement, and
              capacity development. Non-compliance penalties range from GY$1 million to GY$50 million, and false submissions
              constitute a criminal offence. Over 1,300 companies are currently registered on the Local Content Register.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Who Must File */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">Who Must File LCA Reports?</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            Every entity engaged in petroleum operations in Guyana is subject to LCA reporting requirements.
            There are no exemptions based on company size, nationality, or contract value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Building2, title: "Contractors", desc: "Operators and primary contractors holding petroleum agreements — including ExxonMobil, Hess, CNOOC, and their direct contract holders." },
              { icon: Users, title: "Subcontractors", desc: "Service companies, suppliers, and any entity providing goods or services to the petroleum sector, regardless of tier." },
              { icon: FileText, title: "Licensees", desc: "Companies holding petroleum prospecting or production licences under the Petroleum Act, including exploration-phase operators." },
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

      {/* 3. The 5 Mandatory Submissions — with semantic table */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">The 5 Mandatory Submission Types</h2>
          <p className="text-sm text-text-secondary mb-8">
            The Local Content Act requires five distinct submissions. Each has a different reporting period, deadline, and data structure.
          </p>
          <div className="overflow-x-auto">
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
        </div>
      </section>

      {/* 4. Filing Calendar */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">The LCA Filing Calendar</h2>
          <div className="space-y-3">
            {[
              { month: "January 30", label: "H2 Half-Yearly Report due (covers Jul–Dec prior year)", color: "from-accent to-teal" },
              { month: "February 14", label: "Annual Performance Report due (45 days after year end)", color: "from-amber-500 to-orange-500" },
              { month: "July 30", label: "H1 Half-Yearly Report due (covers Jan–Jun current year)", color: "from-accent to-teal" },
              { month: "November 1", label: "Annual Local Content Plan due (60 days before Jan 1)", color: "from-blue-500 to-cyan-500" },
              { month: "Ongoing", label: "Master Plan due within 4 months of new petroleum agreement", color: "from-purple-500 to-indigo-500" },
            ].map((item, i) => (
              <motion.div
                key={item.month}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-4 bg-card border border-border rounded-lg px-5 py-3.5"
              >
                <span className={`flex-shrink-0 bg-gradient-to-r ${item.color} text-white text-xs font-bold px-3.5 py-1.5 rounded-md min-w-[110px] text-center`}>
                  {item.month}
                </span>
                <p className="text-sm text-text-secondary">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The 40 Reserved Service Categories */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">The 40 Reserved Service Categories</h2>
          <p className="text-sm text-text-secondary mb-8">
            The Local Content Act designates 40 service categories where Guyanese nationals and companies must receive
            first consideration. All expenditure must be classified into one of these categories in your reports.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.01 }}
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2.5 text-xs text-text-secondary"
              >
                <span className="text-accent font-bold text-[10px] w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {cat}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How Local Content Rates Are Calculated */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">How Local Content Rates Are Calculated</h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-8">
            The Secretariat calculates your local content rate separately for expenditure and employment:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-bold text-text-primary mb-3">Expenditure Rate</h3>
              <div className="bg-surface rounded-lg p-4 font-mono text-xs text-text-secondary text-center mb-3">
                Local Content Rate = <span className="text-accent">(Guyanese Spend ÷ Total Spend)</span> × 100
              </div>
              <p className="text-xs text-text-secondary">
                Example: If total procurement is $10M and $6.5M goes to Guyanese-registered suppliers,
                your expenditure local content rate is <strong className="text-text-primary">65%</strong>.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-bold text-text-primary mb-3">Employment Rate</h3>
              <div className="bg-surface rounded-lg p-4 font-mono text-xs text-text-secondary text-center mb-3">
                Employment Rate = <span className="text-accent">(Guyanese Staff ÷ Total Staff)</span> × 100
              </div>
              <p className="text-xs text-text-secondary">
                Example: If you employ 50 people and 38 are Guyanese nationals,
                your employment local content rate is <strong className="text-text-primary">76%</strong>.
                This must be disaggregated by management, technical, and non-technical levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. What Happens During a Secretariat Audit */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">What Happens During a Secretariat Audit</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Notice of Review", desc: "The Secretariat notifies your company that a filed submission is under review. This can happen within months of filing or retroactively." },
              { step: "2", title: "Document Request", desc: "You receive a formal request for supporting documentation — payroll records, procurement contracts, supplier invoices, and capacity development evidence." },
              { step: "3", title: "Data Verification", desc: "The Secretariat cross-references your submission data against supporting documents, checking for accuracy in classifications, amounts, and nationality statuses." },
              { step: "4", title: "Findings Report", desc: "If discrepancies are found, the Secretariat issues a findings report with specific items requiring correction or explanation." },
              { step: "5", title: "Remediation or Penalty", desc: "You are given an opportunity to submit corrections. If issues persist or are material, penalty proceedings under Section 41 may be initiated." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Common Filing Mistakes */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">Common Filing Mistakes and How to Avoid Them</h2>
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

      {/* 9. How to Register */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">How to Register on the Local Content Register</h2>
          <p className="text-sm text-text-secondary mb-8">
            Registration on the Local Content Register is mandatory for all companies providing goods or services
            to the petroleum sector. Your LCS Certificate ID is required on every filing.
          </p>
          <div className="space-y-4">
            {registrationSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl px-5 py-4"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-teal flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">{s.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Foreign Contractors */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">LCA Compliance for Foreign Contractors</h2>
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Foreign companies operating in Guyana&apos;s petroleum sector face the same compliance obligations as
              Guyanese companies, with additional considerations:
            </p>
            <ul className="space-y-2.5">
              {[
                "You must register on the Local Content Register regardless of country of incorporation",
                "Employment data must clearly distinguish Guyanese nationals from expatriate staff",
                "The Act mandates 'first consideration' for Guyanese nationals in all hiring",
                "Procurement from foreign suppliers must be justified — the Secretariat tracks local vs foreign spend ratios",
                "Your Annual Plan must include specific targets for increasing local content over time",
                "A Houston or US-based entity still needs Guyanese registration if providing petroleum sector services",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">
            Stabroek Advisory specializes in helping foreign contractors — particularly US-based companies — navigate
            LCA compliance. Our Houston headquarters and Georgetown presence means we understand both sides of the
            compliance equation.{" "}
            <Link href="/guyana-local-content-consultant" className="text-accent hover:underline">
              Learn about our consulting services →
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        headline="Need help with LCA compliance?"
        body="Whether you're filing for the first time or managing compliance across multiple entities, we can help. Book a consultation and we'll assess your filing status within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
