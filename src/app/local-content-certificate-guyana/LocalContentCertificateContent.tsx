"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardCheck,
  Building2,
  Users,
  FileCheck,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const registrationSteps = [
  {
    step: "01",
    icon: FileCheck,
    title: "Prepare Documentation",
    body: "Gather required documents including company registration, ownership verification (51%+ Guyanese ownership), tax compliance certificates, proof of physical presence in Guyana, and evidence of capability to deliver the goods or services you intend to provide.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "Submit Application",
    body: "Complete the Local Content Secretariat's application form and submit it along with all supporting documentation. The application must specify the categories of goods or services your company can supply to the petroleum sector.",
  },
  {
    step: "03",
    icon: Users,
    title: "Secretariat Review",
    body: "The Secretariat reviews your application for completeness and verifies ownership, capabilities, and compliance status. This review typically takes 4 to 8 weeks. The Secretariat may request additional documentation or clarification during this period.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Certificate Issuance",
    body: "Upon approval, your company is added to the Local Content Register and issued a Local Content Certificate. This certificate must be renewed periodically and your information on the Register kept up to date.",
  },
];

const eligibilityRequirements = [
  "Majority Guyanese ownership (51% or more equity held by Guyanese nationals)",
  "Physical business presence in Guyana (registered office address)",
  "Valid company registration with the Guyana Registrar of Companies",
  "Tax compliance certificates from the Guyana Revenue Authority",
  "Demonstrated capability to deliver specified goods or services",
  "No outstanding penalties or sanctions under the Local Content Act",
];

const howWeHelp = [
  {
    icon: FileCheck,
    title: "Application Preparation",
    body: "We review your eligibility, prepare all required documentation, and ensure your application meets Secretariat standards before submission — avoiding costly delays from incomplete filings.",
  },
  {
    icon: Building2,
    title: "Ownership & Structure Advisory",
    body: "If your current corporate structure doesn't meet the 51% Guyanese ownership threshold, we advise on restructuring options that achieve compliance while protecting your business interests.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Register Maintenance",
    body: "After registration, we help you maintain your listing — updating capability categories, renewing certificates, and ensuring your information remains current with the Secretariat.",
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

export default function LocalContentCertificateContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="Local Content Register"
        headline="Local Content Certificate & Register Application in Guyana"
        sub="Get registered on Guyana's Local Content Register and obtain your certificate. We guide you through eligibility, documentation, and the full application process."
        geometricVariant="hexagons"
        primaryCTA={{ label: "Start Your Application", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
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
              What Is the Local Content Register & Certificate?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The Local Content Register is a registry maintained by the Local Content
              Secretariat that lists Guyanese nationals and companies eligible to
              provide goods and services to the petroleum sector. A Local Content
              Certificate is issued upon successful registration, confirming a
              company&apos;s eligibility. Petroleum operators and contractors are
              required by law to give first consideration to registered entities when
              sourcing locally, making registration essential for any Guyanese business
              seeking to participate in the oil and gas supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Needs to Register */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
            Who Needs to Register?
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-sm text-text-secondary leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              Any Guyanese individual or company that wants to supply goods, services,
              or labour to petroleum-sector operators must be on the Local Content
              Register. This includes service providers, suppliers, manufacturers,
              logistics companies, and professional service firms.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-base text-text-primary mb-4">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                {eligibilityRequirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            Application Process
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Four steps from preparation to certificate issuance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {registrationSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-accent bg-accent/10 w-8 h-8 rounded-full flex items-center justify-center">
                    {s.step}
                  </span>
                  <h3 className="font-display text-base text-text-primary">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Block */}
      <section className="py-10 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-card border border-accent/30 rounded-lg p-6 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display text-base text-text-primary mb-2">
                Without Registration, You Cannot Compete
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Petroleum operators are legally required to give first consideration
                to companies on the Local Content Register. If your company is not
                registered, you are effectively invisible to the procurement process —
                regardless of your capabilities or track record.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Stabroek Advisory Helps */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            How Stabroek Advisory Helps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeHelp.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <h.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">
                  {h.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {h.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqItems} />

      <CTABanner
        headline="Ready to get on the Local Content Register?"
        body="We'll assess your eligibility, prepare your application, and guide you through the entire process."
        primaryCTA={{ label: "Start Your Application", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
