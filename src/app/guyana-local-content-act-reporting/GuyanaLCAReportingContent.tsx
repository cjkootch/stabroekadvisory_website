"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Calendar,
  CheckCircle,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const mandatorySubmissions = [
  {
    icon: FileText,
    title: "Half-Yearly Report (H1)",
    deadline: "July 30",
    body: "Covers January through June. Includes expenditure, employment, and capacity development data broken into sub-reports for local vs. foreign spend, Guyanese vs. non-Guyanese employees, and training activities.",
  },
  {
    icon: FileText,
    title: "Half-Yearly Report (H2)",
    deadline: "January 30",
    body: "Covers July through December of the prior year. Same structure as H1, enabling the Secretariat to track year-over-year progress on local content commitments.",
  },
  {
    icon: Calendar,
    title: "Annual Local Content Plan",
    deadline: "December 31",
    body: "A forward-looking plan for the upcoming calendar year, detailing projected local employment targets, procurement from Guyanese companies, and capacity-building initiatives.",
  },
  {
    icon: BarChart3,
    title: "Annual Performance Report",
    deadline: "February 14",
    body: "A backward-looking assessment of the prior year's performance against the Annual Local Content Plan. Must include variance analysis and explanations for any shortfalls.",
  },
  {
    icon: ShieldCheck,
    title: "Local Content Master Plan",
    deadline: "Within 4 months of petroleum agreement",
    body: "A comprehensive multi-year plan covering the full term of a petroleum agreement. Required for new entrants and covers long-range local content commitments and targets.",
  },
];

const serviceSteps = [
  {
    icon: Users,
    title: "Data Collection & Validation",
    body: "We work with your procurement, HR, and finance teams to collect the required data — expenditure breakdowns, headcount by nationality, training records, and vendor details — then validate it against Secretariat requirements.",
  },
  {
    icon: FileText,
    title: "Report Preparation & Narrative",
    body: "Our team assembles the quantitative sub-reports and drafts the comparative analysis narrative required for each filing. Every report is reviewed by an LCA compliance specialist before submission.",
  },
  {
    icon: Clock,
    title: "Filing & Confirmation",
    body: "We file directly with the Local Content Secretariat on your behalf and provide confirmation of receipt. All filings are tracked in our system to maintain a complete audit trail.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Compliance Monitoring",
    body: "Between filings, we monitor regulatory changes, track your deadlines, and alert you to any data gaps or compliance risks before they become problems.",
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

export default function GuyanaLCAReportingContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="LCA Reporting Services"
        headline="Local Content Act Reporting for Guyana's Petroleum Sector"
        sub="End-to-end reporting services for the 5 mandatory Local Content Act submissions. We collect, prepare, file, and track — so you never miss a deadline."
        geometricVariant="grid"
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
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
              What Is Guyana Local Content Act Reporting?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Guyana Local Content Act reporting refers to the mandatory submissions
              that all petroleum-sector companies must file with the Local Content
              Secretariat under the Local Content Act 2021 (No. 18 of 2021). These
              filings cover expenditure breakdowns, employment data by nationality,
              capacity development activities, and forward-looking procurement plans.
              The five required submissions — two half-yearly reports, an annual plan,
              an annual performance report, and a master plan — form the cornerstone of
              Guyana&apos;s local content compliance framework.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5 Mandatory Submissions */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            The 5 Mandatory LCA Submissions
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Every company engaged in petroleum operations in Guyana must file these
            reports with the Local Content Secretariat.
          </p>
          <div className="space-y-6">
            {mandatorySubmissions.map((s) => (
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
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="font-display text-base text-text-primary">
                      {s.title}
                    </h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full w-fit">
                      Deadline: {s.deadline}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Must File */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
            Who Must File LCA Reports?
          </h2>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              Under the Local Content Act, <strong className="text-text-primary">all contractors,
              subcontractors, licensees, and other persons</strong> engaged in petroleum
              operations in Guyana must submit reports to the Local Content Secretariat.
              This includes:
            </p>
            <ul className="space-y-3 ml-1">
              {[
                "Petroleum operators and production-sharing agreement holders",
                "Service companies providing drilling, engineering, or logistics services",
                "Subcontractors at any tier within the petroleum supply chain",
                "Companies providing goods, equipment, or materials to operators",
                "Any entity performing work related to petroleum exploration or production",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              With over 1,300 companies currently subject to these requirements, the
              Secretariat has been increasing its enforcement activity. Companies that
              fail to file face fines of up to GY$50 million and potential removal from
              the Local Content Register.
            </p>
          </div>
        </div>
      </section>

      {/* How Stabroek Advisory Handles It */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            How Stabroek Advisory Handles Your LCA Reporting
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Our four-step process ensures accurate, on-time filings with minimal
            disruption to your operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <step.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
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
        headline="Ready to simplify your LCA reporting?"
        body="Book a consultation and we'll map out your reporting obligations within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
