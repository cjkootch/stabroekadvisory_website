"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Target,
  BarChart3,
  Users,
  DollarSign,
  GraduationCap,
  ArrowRightLeft,
  Calendar,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const annualPlanSubPlans = [
  {
    icon: Users,
    title: "Employment Sub-Plan",
    body: "Projects hiring targets by nationality and job category. Must include timelines for increasing the proportion of Guyanese nationals across all seniority levels, from entry-level to management.",
  },
  {
    icon: DollarSign,
    title: "Procurement Sub-Plan",
    body: "Sets targets for goods and services to be sourced from Guyanese-owned companies. Includes projected spend breakdowns by category and identifies opportunities to shift procurement locally.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Development Sub-Plan",
    body: "Outlines training programs, apprenticeships, certifications, technology transfer, and scholarship initiatives planned for the year. Must demonstrate investment in building local workforce skills.",
  },
  {
    icon: ArrowRightLeft,
    title: "Succession Sub-Plan",
    body: "Provides timelines and milestones for replacing expatriate personnel with qualified Guyanese nationals. Identifies key positions, current incumbents, and local successors in development.",
  },
];

const performanceReportSections = [
  {
    title: "Actual vs. Planned Employment",
    body: "Compares actual Guyanese employment numbers against the targets set in the Annual Plan. Breaks down variances by job category and seniority level.",
  },
  {
    title: "Actual vs. Planned Procurement",
    body: "Measures actual local procurement spend against projected targets. Identifies categories where local sourcing exceeded or fell short of commitments.",
  },
  {
    title: "Capacity Development Outcomes",
    body: "Reports on training programs completed, certifications earned, apprentices placed, and technology transfer milestones achieved during the year.",
  },
  {
    title: "Variance Analysis & Corrective Actions",
    body: "Explains root causes for any shortfalls against the Annual Plan and details corrective actions being implemented to close gaps in the upcoming period.",
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

export default function AnnualReportContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="Annual Reporting"
        headline="Annual Performance Reports & Local Content Plans for Guyana"
        sub="Two critical annual filings that set your local content targets and measure your performance against them. We handle both end to end."
        geometricVariant="nodes"
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
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
              What Are the Annual LCA Filings?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Under Guyana&apos;s Local Content Act 2021, petroleum-sector companies must
              submit two annual filings: the <strong className="text-text-primary">Annual
              Local Content Plan</strong> (due December 31), which sets forward-looking
              targets for employment, procurement, and capacity development, and the{" "}
              <strong className="text-text-primary">Annual Performance Report</strong>{" "}
              (due February 14), which measures actual results against the prior
              year&apos;s plan and explains any variances. Together, these filings create
              a plan-and-measure cycle that the Local Content Secretariat uses to assess
              each company&apos;s commitment to local content development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Annual Local Content Plan */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
              <Target size={20} className="text-accent" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary">
              Annual Local Content Plan
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Calendar size={14} className="text-accent" />
            <span className="text-sm font-medium text-accent">Due: December 31</span>
          </div>
          <p className="text-sm text-text-secondary text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            The Annual Local Content Plan is a forward-looking document that sets your
            company&apos;s targets for the upcoming calendar year. It must include four
            sub-plans covering employment, procurement, capacity development, and
            succession planning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {annualPlanSubPlans.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
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

      {/* Annual Performance Report */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
              <BarChart3 size={20} className="text-accent" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary">
              Annual Performance Report
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Calendar size={14} className="text-accent" />
            <span className="text-sm font-medium text-accent">Due: February 14</span>
          </div>
          <p className="text-sm text-text-secondary text-center mb-10 max-w-2xl mx-auto leading-relaxed">
            The Annual Performance Report is a backward-looking assessment that
            measures your actual local content performance against the targets set in
            the prior year&apos;s Annual Plan.
          </p>
          <div className="space-y-4">
            {performanceReportSections.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-accent" />
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

      {/* How We Help */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
            How Stabroek Advisory Manages Your Annual Filings
          </h2>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              Annual filings are higher-stakes than half-yearly reports because
              they set the targets against which the Secretariat will judge your
              performance. Setting targets too aggressively risks non-compliance;
              too conservatively signals a lack of commitment.
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "Benchmark your targets against industry norms and Secretariat expectations",
                "Draft sub-plans that are ambitious but achievable based on your operational reality",
                "Compile your Annual Performance Report from half-yearly data already in LCA Desk",
                "Prepare variance explanations and corrective action narratives",
                "File both submissions on time and maintain a complete audit trail",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="text-sm text-accent hover:underline font-medium"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqItems} />

      <CTABanner
        headline="Get your annual filings right"
        body="We'll set achievable targets and file your Annual Plan and Performance Report on time. Let's talk."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
