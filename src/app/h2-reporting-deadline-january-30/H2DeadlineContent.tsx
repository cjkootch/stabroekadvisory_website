"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  GraduationCap,
  ArrowRight,
  BarChart3,
} from "lucide-react";

const dataRequired = [
  {
    icon: DollarSign,
    title: "Expenditure Data",
    body: "Total spend broken down by local vs. foreign procurement for goods and services during the July\u2013December period.",
  },
  {
    icon: Users,
    title: "Employment Figures",
    body: "Headcount of Guyanese nationals vs. expatriates at each job level\u2014management, technical, skilled, and unskilled.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Development",
    body: "Training programmes, scholarships, technology transfer initiatives, and associated expenditures for the second half of the year.",
  },
  {
    icon: FileText,
    title: "Comparative Analysis Narrative",
    body: "A written explanation of variances between your Annual Local Content Plan projections and actual H2 performance, including full-year reconciliation.",
  },
];

const filingChecklist = [
  "Confirm your company is registered on the Local Content Register",
  "Collect expenditure records for July 1\u2013December 31",
  "Compile employment data by nationality and job classification",
  "Document capacity development activities and costs",
  "Reconcile H2 figures with H1 data for full-year consistency",
  "Prepare the Comparative Analysis Narrative with year-end context",
  "Validate all figures against your Annual Local Content Plan",
  "Submit the report to the Local Content Secretariat by January 30",
  "Retain copies of the submission and any acknowledgement receipts",
];

export default function H2DeadlineContent() {
  return (
    <>
      <HeroSection
        eyebrow="Deadline: January 30"
        headline="H2 Reporting Deadline: January 30"
        sub="The H2 Half-Yearly Report covers petroleum operations from July to December and must be submitted to the Local Content Secretariat by January 30 of the following year."
        geometricVariant="topology"
        primaryCTA={{ label: "Get Filing Help", href: "/contact" }}
        secondaryCTA={{ label: "View All Deadlines", href: "/lca-filing-calendar" }}
      />

      {/* Definition Block */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card border border-accent/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">What Is the H2 Half-Yearly Report?</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              The H2 Half-Yearly Report covers petroleum operations from July 1 to December 31 and must
              be submitted to the Local Content Secretariat by January 30 of the following year. Required
              under Guyana&apos;s Local Content Act 2021, it captures expenditure, employment, and capacity
              development data for the second half of the calendar year. Because the H2 report closes out
              the year, it must also address full-year reconciliation against the Annual Local Content Plan.
            </p>
          </div>
        </div>
      </section>

      {/* Reporting Period & Deadline */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
              Reporting Period &amp; Deadline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock size={24} className="text-accent mx-auto mb-3" />
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Period Start</p>
                <p className="font-display text-lg text-text-primary">July 1</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <Clock size={24} className="text-accent mx-auto mb-3" />
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Period End</p>
                <p className="font-display text-lg text-text-primary">December 31</p>
              </div>
              <div className="bg-card border border-accent/30 rounded-lg p-6">
                <AlertTriangle size={24} className="text-accent mx-auto mb-3" />
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-1">Due Date</p>
                <p className="font-display text-lg text-text-primary">January 30</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Year-End Reconciliation */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">Year-End Reconciliation</h2>
            </div>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The H2 report carries additional weight because it closes out the calendar year. The
                Secretariat uses your H1 and H2 data together to assess full-year compliance against
                your Annual Local Content Plan.
              </p>
              <p>
                Your Comparative Analysis Narrative for H2 should address not only the July\u2013December
                period but also explain any cumulative variances for the full year. This includes
                material deviations in local procurement percentages, employment ratios, and capacity
                development spend.
              </p>
              <p>
                Companies that reported strong H1 numbers but fell short in H2 should be prepared to
                explain the decline. Consistency between your two half-yearly reports and your Annual
                Plan is a key factor the Secretariat examines during compliance reviews.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Data Is Needed */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            What Data Is Required?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataRequired.map((item) => (
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
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">Penalties for Late or Non-Filing</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Under Section 41 of the Local Content Act, failure to submit the H2 report by January 30
              can result in:
            </p>
            <ul className="space-y-3">
              {[
                "Fines ranging from GY$1 million to GY$50 million per offence",
                "Suspension or removal from the Local Content Register",
                "Delays to contract approvals and bid evaluations",
                "Criminal prosecution for false or misleading submissions",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
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

      {/* Filing Checklist */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8 text-center">
            Step-by-Step Filing Checklist
          </h2>
          <div className="space-y-4">
            {filingChecklist.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent font-display text-sm">
                  {i + 1}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-1.5">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
              How We Help You Meet the H2 Deadline
            </h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">LCA Desk</strong> automates H2 report
                preparation by pulling your expenditure, employment, and capacity development data into
                the required format. It also cross-references your H1 submission to flag year-end
                inconsistencies before you file.
              </p>
              <p>
                <strong className="text-text-primary">Stabroek Advisory&apos;s managed service</strong> handles
                the full process. Our compliance team collects your source data, prepares the report
                with year-end reconciliation, drafts the Comparative Analysis Narrative, and submits
                to the Secretariat on your behalf. You review and approve\u2014we do everything else.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/lcadesk"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-8 py-3.5 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
              >
                Explore LCA Desk <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent/30 text-accent px-8 py-3.5 text-sm font-medium hover:bg-accent/5 hover:border-accent hover:scale-[1.02] transition-all"
              >
                View Managed Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        headline="Don't risk missing the January 30 deadline"
        body="Let our team handle your H2 report from data collection to submission, including year-end reconciliation. Book a consultation today."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
      />
    </>
  );
}
