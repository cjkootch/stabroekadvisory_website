"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle,
  Scale,
  ShieldAlert,
  Ban,
  FileWarning,
  Gavel,
  Clock,
  ArrowRight,
  XCircle,
} from "lucide-react";

const penaltyTiers = [
  {
    range: "GY$1M \u2013 GY$10M",
    description: "First-time minor non-compliance such as late submission of a Half-Yearly Report or minor data omissions.",
  },
  {
    range: "GY$10M \u2013 GY$25M",
    description: "Repeated non-compliance, material misstatements in reports, or failure to submit an Annual Local Content Plan.",
  },
  {
    range: "GY$25M \u2013 GY$50M",
    description: "Egregious or persistent non-compliance, deliberate evasion of obligations, or failure to submit a Master Plan.",
  },
];

const enforcementTriggers = [
  {
    icon: Clock,
    title: "Late or Non-Submission",
    body: "Failure to submit Half-Yearly Reports, Annual Plans, Annual Performance Reports, or Master Plans by their statutory deadlines.",
  },
  {
    icon: FileWarning,
    title: "False or Misleading Data",
    body: "Submitting inaccurate expenditure figures, inflated local employment numbers, or fabricated capacity development activities.",
  },
  {
    icon: Ban,
    title: "Failure to Give First Consideration",
    body: "Not giving first consideration to Guyanese nationals for employment or to registered Guyanese companies for goods and services procurement.",
  },
  {
    icon: XCircle,
    title: "Non-Compliance with Approved Plans",
    body: "Material deviation from an approved Local Content Plan or Master Plan without adequate justification in the Comparative Analysis Narrative.",
  },
];

const realConsequences = [
  {
    icon: Ban,
    title: "Contract Delays",
    body: "Non-compliant companies may face delays or rejection in contract approvals. The Secretariat can flag entities during the approval process, stalling new work.",
  },
  {
    icon: ShieldAlert,
    title: "Register Suspension",
    body: "Companies can be suspended or removed from the Local Content Register, which prevents them from being recognized as eligible local content providers.",
  },
  {
    icon: Scale,
    title: "Bid Evaluation Impact",
    body: "Compliance history is factored into bid evaluations for petroleum sector contracts. A track record of non-compliance weakens your competitive position.",
  },
  {
    icon: Gavel,
    title: "Criminal Prosecution",
    body: "False or misleading submissions constitute a criminal offence under the Act. This goes beyond fines and can result in prosecution of responsible individuals.",
  },
];

const avoidanceMeasures = [
  "Submit all mandatory reports before statutory deadlines\u2014not on the deadline",
  "Implement internal data validation processes to catch errors before submission",
  "Maintain supporting documentation for all reported figures for audit readiness",
  "Track compliance against your Annual Local Content Plan throughout the year, not just at reporting time",
  "Prepare the Comparative Analysis Narrative with genuine explanations for any variances",
  "Register and maintain your listing on the Local Content Register",
  "Work with compliance specialists who understand the Secretariat\u2019s expectations",
  "Use automated compliance tools like LCA Desk to reduce human error",
];

export default function PenaltiesContent() {
  return (
    <>
      <HeroSection
        eyebrow="Compliance Risk"
        headline="LCA Penalties and Fines in Guyana"
        sub="Non-compliance with the Local Content Act carries fines up to GY$50 million, criminal liability, and consequences that extend far beyond the fine itself."
        geometricVariant="circuits"
        primaryCTA={{ label: "Get Compliance Help", href: "/contact" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
      />

      {/* Definition Block */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card border border-accent/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">Penalty Overview</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Under Guyana&apos;s Local Content Act 2021, non-compliance penalties range from GY$1 million
              to GY$50 million per offence. False or misleading submissions constitute a criminal
              offence. The Local Content Secretariat has broad enforcement powers, and penalty
              activity has increased each year since the Act came into force.
            </p>
          </div>
        </div>
      </section>

      {/* Penalty Structure */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            Penalty Structure Under Section 41
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            The Act provides for a tiered penalty structure. The exact fine depends on the nature,
            severity, and frequency of the offence.
          </p>
          <div className="space-y-4">
            {penaltyTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex items-center justify-center rounded-md bg-accent/10 px-3 py-1 text-accent font-display text-sm font-medium">
                    {tier.range}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Criminal Offence Provisions */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-accent/30 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Gavel size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">Criminal Offence Provisions</h2>
            </div>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The Local Content Act goes beyond administrative fines. Submitting{" "}
                <strong className="text-text-primary">false or misleading information</strong> to the
                Local Content Secretariat is classified as a{" "}
                <strong className="text-text-primary">criminal offence</strong> under the Act.
              </p>
              <p>
                This means that individuals responsible for preparing and submitting reports can face
                personal criminal liability, not just corporate penalties. The Act does not limit
                prosecution to the company entity\u2014it extends to officers and agents who knowingly
                submit inaccurate data.
              </p>
              <p>
                While criminal prosecutions have been rare to date, the Secretariat has signalled
                increasing willingness to pursue enforcement action as its monitoring capabilities
                mature and compliance expectations rise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Triggers Enforcement */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            What Triggers Enforcement?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enforcementTriggers.map((item) => (
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

      {/* Real Consequences */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            Real Consequences Beyond Fines
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Financial penalties are only the beginning. Non-compliance affects your ability to
            operate and compete in Guyana&apos;s petroleum sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {realConsequences.map((item) => (
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

      {/* How to Avoid Penalties */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8 text-center">
            How to Avoid Penalties
          </h2>
          <div className="space-y-4">
            {avoidanceMeasures.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-accent" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pt-1.5">{step}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
        </div>
      </section>

      <CTABanner
        headline="Stay compliant. Avoid the penalties."
        body="Our compliance team ensures your filings are accurate, on time, and audit-ready. Book a consultation to assess your risk."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Filing Calendar", href: "/lca-filing-calendar" }}
      />
    </>
  );
}
