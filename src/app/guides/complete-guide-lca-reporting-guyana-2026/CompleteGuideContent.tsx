"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Users,
  FileText,
  Calendar,
  Database,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  DollarSign,
  Shield,
  Zap,
  Clock,
  Building2,
} from "lucide-react";

const mandatorySubmissions = [
  {
    icon: BookOpen,
    number: "1",
    title: "Local Content Master Plan",
    deadline: "Within 4 months of petroleum agreement",
    description:
      "A comprehensive, multi-year plan covering the full term of the petroleum agreement (typically 5 years). It sets out projected local employment, procurement, and capacity development targets across the life of the contract.",
  },
  {
    icon: Calendar,
    number: "2",
    title: "Annual Local Content Plan",
    deadline: "Before the start of each calendar year",
    description:
      "A forward-looking 12-month plan detailing projected local employment ratios, procurement spend with Guyanese companies, and capacity building initiatives for the upcoming year.",
  },
  {
    icon: FileText,
    number: "3",
    title: "H1 Half-Yearly Report",
    deadline: "July 30",
    description:
      "A backward-looking report covering actual performance from January 1 to June 30. Includes expenditure, employment, and capacity development data, plus a Comparative Analysis Narrative.",
    link: { label: "H1 Deadline Details", href: "/h1-reporting-deadline-july-30" },
  },
  {
    icon: FileText,
    number: "4",
    title: "H2 Half-Yearly Report",
    deadline: "January 30",
    description:
      "A backward-looking report covering actual performance from July 1 to December 31. Includes year-end reconciliation and a full-year Comparative Analysis Narrative.",
    link: { label: "H2 Deadline Details", href: "/h2-reporting-deadline-january-30" },
  },
  {
    icon: BarChart3,
    number: "5",
    title: "Annual Performance Report",
    deadline: "Annually (as required by the Secretariat)",
    description:
      "A summary of full-year compliance performance against the Annual Local Content Plan. Aggregates H1 and H2 data and provides a comprehensive view of the company\u2019s local content contribution.",
  },
];

const deadlineCalendar = [
  { deadline: "January 30", submission: "H2 Half-Yearly Report (Jul\u2013Dec of prior year)", priority: "Critical" },
  { deadline: "Before Jan 1", submission: "Annual Local Content Plan (upcoming year)", priority: "Critical" },
  { deadline: "July 30", submission: "H1 Half-Yearly Report (Jan\u2013Jun)", priority: "Critical" },
  { deadline: "Within 4 months", submission: "Local Content Master Plan (new agreements only)", priority: "High" },
  { deadline: "As required", submission: "Annual Performance Report", priority: "High" },
];

const dataCategories = [
  {
    icon: DollarSign,
    title: "Expenditure",
    items: [
      "Total procurement spend for the period",
      "Breakdown by local vs. foreign suppliers",
      "Goods and services categories",
      "Subcontractor expenditure allocation",
    ],
  },
  {
    icon: Users,
    title: "Employment",
    items: [
      "Total headcount by nationality (Guyanese vs. expatriate)",
      "Job classification breakdown (management, technical, skilled, unskilled)",
      "New hires during the period",
      "Succession planning for expatriate positions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacity Development",
    items: [
      "Training programmes conducted",
      "Number of Guyanese nationals trained",
      "Scholarships and educational sponsorships",
      "Technology transfer initiatives",
      "Associated expenditure for each activity",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Submitting on the deadline day",
    fix: "Submit at least 5 business days before the statutory deadline. Last-minute submissions risk system issues and leave no time for corrections.",
  },
  {
    mistake: "Inconsistent data between H1 and H2 reports",
    fix: "Cross-reference your H1 figures when preparing H2. The Secretariat reviews both reports together and flags discrepancies.",
  },
  {
    mistake: "Generic Comparative Analysis Narratives",
    fix: "Address each material variance specifically. The Secretariat expects genuine explanations, not template language.",
  },
  {
    mistake: "Not reconciling against the Annual Plan",
    fix: "Your reports are evaluated against your approved plan. Track compliance throughout the year, not just at reporting time.",
  },
  {
    mistake: "Missing or incomplete capacity development data",
    fix: "Document training activities as they happen. Reconstructing this data at year-end is the most common source of errors.",
  },
  {
    mistake: "Failing to update the Local Content Register",
    fix: "Ensure your registration is current. Lapsed registrations can trigger compliance flags even if your reports are filed on time.",
  },
];

export default function CompleteGuideContent() {
  return (
    <>
      <HeroSection
        eyebrow="2026 Edition"
        headline="The Complete Guide to LCA Reporting in Guyana (2026)"
        sub="Everything you need to know about Local Content Act compliance: all 5 mandatory submissions, deadlines, data requirements, common mistakes, penalties, and how to automate reporting."
        geometricVariant="hexagons"
        primaryCTA={{ label: "Get Compliance Help", href: "/contact" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
      />

      {/* Table of Contents */}
      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h2 className="font-display text-lg text-text-primary mb-4">In This Guide</h2>
            <ol className="space-y-2 text-sm text-text-secondary">
              {[
                "What Is the Local Content Act?",
                "Who Must File?",
                "The 5 Mandatory Submissions Explained",
                "Filing Deadlines Calendar",
                "What Data You Need",
                "The Comparative Analysis Narrative",
                "Common Mistakes and How to Avoid Them",
                "Penalties for Non-Compliance",
                "How LCA Desk Automates Reporting",
                "How Stabroek Advisory\u2019s Managed Service Works",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-display text-xs">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Section 1: What Is the Local Content Act? */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              1. What Is the Local Content Act?
            </h2>
            <div className="bg-card border border-accent/30 rounded-lg p-8 mb-6">
              <p className="text-sm text-text-secondary leading-relaxed">
                The <strong className="text-text-primary">Local Content Act 2021</strong> (No. 18 of 2021)
                is Guyana&apos;s primary legislation governing the participation of Guyanese nationals and
                companies in the petroleum sector. It was enacted to ensure that the country&apos;s oil and
                gas wealth generates tangible economic benefits for Guyanese citizens through local
                employment, procurement, and capacity development.
              </p>
            </div>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The Act created the <strong className="text-text-primary">Local Content Secretariat</strong> as
                the regulatory body responsible for monitoring compliance, maintaining the Local Content
                Register, and enforcing reporting obligations. It also established the{" "}
                <strong className="text-text-primary">Local Content Register</strong>, a directory of
                Guyanese nationals and companies eligible to provide goods and services to the petroleum
                sector.
              </p>
              <p>
                Since coming into force, the Act has steadily expanded in scope and enforcement. Over
                1,300 companies are now subject to filing requirements, and the Secretariat has
                increased both its monitoring capabilities and its willingness to impose penalties for
                non-compliance.
              </p>
              <p>
                For a detailed breakdown of the Act&apos;s structure, see our{" "}
                <Link href="/lca-act-overview" className="text-accent hover:underline font-medium">
                  LCA Act Overview
                </Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Who Must File? */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
              2. Who Must File?
            </h2>
            <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
              The filing obligation applies broadly across the petroleum supply chain.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Contractors",
                body: "Any entity that has entered into a petroleum agreement with the Government of Guyana. This includes operators and joint venture partners holding exploration or production licences.",
              },
              {
                icon: Briefcase,
                title: "Subcontractors",
                body: "Companies providing goods or services to a contractor in connection with petroleum operations. This includes drilling companies, logistics providers, catering firms, and engineering consultancies.",
              },
              {
                icon: Shield,
                title: "Licensees",
                body: "Holders of petroleum prospecting licences or other authorisations under the Petroleum (Exploration and Production) Act. Both Guyanese and foreign-owned entities are covered.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The 5 Mandatory Submissions */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            3. The 5 Mandatory Submissions Explained
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Every entity subject to the Act must prepare and submit these five documents to the
            Local Content Secretariat.
          </p>
          <div className="space-y-6">
            {mandatorySubmissions.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-display text-sm font-bold">{item.number}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-base text-text-primary">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 rounded-md bg-accent/10 px-2 py-0.5 text-xs text-accent font-medium">
                      <Clock size={12} />
                      {item.deadline}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  {"link" in item && item.link && (
                    <Link
                      href={item.link.href}
                      className="text-sm text-accent hover:underline font-medium mt-2 inline-flex items-center gap-1"
                    >
                      {item.link.label} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Filing Deadlines Calendar */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            4. Filing Deadlines Calendar
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Key dates every petroleum sector company operating in Guyana needs to track.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="text-left py-3 px-4 font-display text-text-primary">Deadline</th>
                    <th className="text-left py-3 px-4 font-display text-text-primary">Submission</th>
                    <th className="text-left py-3 px-4 font-display text-text-primary">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {deadlineCalendar.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="py-3 px-4 text-text-primary font-medium whitespace-nowrap">{row.deadline}</td>
                      <td className="py-3 px-4 text-text-secondary">{row.submission}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
                            row.priority === "Critical"
                              ? "bg-accent/10 text-accent"
                              : "bg-teal/10 text-teal"
                          }`}
                        >
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <div className="text-center mt-6">
            <Link
              href="/lca-filing-calendar"
              className="text-sm text-accent hover:underline font-medium inline-flex items-center gap-1"
            >
              View full interactive filing calendar <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: What Data You Need */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            5. What Data You Need
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            All LCA reports require data across three categories. Collecting this data continuously
            throughout the year is far easier than reconstructing it at reporting time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataCategories.map((cat) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <cat.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-3">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: The Comparative Analysis Narrative */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              6. The Comparative Analysis Narrative
            </h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The Comparative Analysis Narrative is the most overlooked\u2014and arguably most
                important\u2014component of Half-Yearly Reports. It is a written explanation of the
                variances between your <strong className="text-text-primary">Annual Local Content Plan</strong> projections
                and your <strong className="text-text-primary">actual performance</strong> during the reporting period.
              </p>
              <p>
                The Secretariat does not expect every company to hit every target perfectly. What it
                does expect is a{" "}
                <strong className="text-text-primary">genuine, specific explanation</strong> for
                material deviations. Generic statements like &ldquo;market conditions impacted
                performance&rdquo; are insufficient.
              </p>
              <p>
                A strong Comparative Analysis Narrative should:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  "Identify each material variance by category (expenditure, employment, capacity development)",
                  "Provide specific reasons for the deviation (e.g., project delays, workforce transitions, supplier availability)",
                  "Describe corrective actions taken or planned for the remainder of the year",
                  "Reference supporting data where applicable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                For the H2 report, the narrative carries additional weight because it closes out the
                calendar year. The Secretariat evaluates your cumulative performance against the full
                Annual Plan.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Common Mistakes */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            7. Common Mistakes and How to Avoid Them
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            After working with dozens of petroleum sector companies on LCA compliance, these are the
            most frequent errors we see.
          </p>
          <div className="space-y-4">
            {commonMistakes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-display text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-base text-text-primary mb-1">{item.mistake}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Penalties */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              8. Penalties for Non-Compliance
            </h2>
            <div className="bg-card border border-accent/30 rounded-lg p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={20} className="text-accent" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Under the Local Content Act, penalties range from{" "}
                  <strong className="text-text-primary">GY$1 million to GY$50 million</strong> per
                  offence. False or misleading submissions are a{" "}
                  <strong className="text-text-primary">criminal offence</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                Beyond financial penalties, non-compliance leads to suspension from the Local Content
                Register, contract approval delays, negative impact on bid evaluations, and
                reputational damage within the Secretariat&apos;s compliance tracking system.
              </p>
              <p>
                The Secretariat has steadily increased enforcement activity since the Act came into
                force. Companies that previously operated with minimal oversight should expect greater
                scrutiny in 2026 and beyond.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/local-content-act-penalties-guyana"
                className="text-sm text-accent hover:underline font-medium inline-flex items-center gap-1"
              >
                Read full penalties breakdown <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: LCA Desk */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
              9. How LCA Desk Automates Reporting
            </h2>
            <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
              LCA Desk is purpose-built software that eliminates the manual work of LCA report
              preparation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Database,
                title: "Centralised Data Collection",
                body: "Import expenditure, employment, and capacity development data from your existing systems. No more spreadsheets.",
              },
              {
                icon: Zap,
                title: "Automated Report Generation",
                body: "LCA Desk formats your data into the required report structure automatically. One click generates a submission-ready report.",
              },
              {
                icon: Shield,
                title: "Built-in Validation",
                body: "Automated checks catch data inconsistencies, missing fields, and H1/H2 discrepancies before you submit.",
              },
              {
                icon: Calendar,
                title: "Deadline Management",
                body: "Automated reminders and a compliance calendar ensure you never miss a filing deadline.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/lcadesk"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
            >
              Explore LCA Desk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: Managed Service */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              10. How Stabroek Advisory&apos;s Managed Service Works
            </h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed mb-8">
              <p>
                For companies that want full-service compliance support, Stabroek Advisory&apos;s
                managed service handles the entire LCA reporting process end to end.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { step: "1", title: "Data Collection", body: "We work with your finance, HR, and operations teams to gather all required expenditure, employment, and capacity development data." },
                { step: "2", title: "Report Preparation", body: "Our compliance analysts prepare the full report in the required format, including the Comparative Analysis Narrative with specific variance explanations." },
                { step: "3", title: "Internal Review", body: "You receive the draft report for review and approval. We address any questions or adjustments before submission." },
                { step: "4", title: "Submission & Documentation", body: "We submit the report to the Secretariat on your behalf and provide you with confirmation records for your files." },
                { step: "5", title: "Ongoing Monitoring", body: "Between reporting periods, we track your compliance metrics and flag potential issues before they become problems." },
              ].map((item) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-display text-sm">
                    {item.step}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-display text-base text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent/30 text-accent px-8 py-3.5 text-sm font-medium hover:bg-accent/5 hover:border-accent hover:scale-[1.02] transition-all"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Ready to simplify your LCA compliance?"
        body="Whether you need software, managed services, or both, we can help you meet every deadline with confidence. Talk to our team."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
