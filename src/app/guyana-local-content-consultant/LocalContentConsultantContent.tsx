"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  FileText,
  ShieldCheck,
  Users,
  Building2,
  Target,
  Briefcase,
  Scale,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: FileText,
    title: "LCA Report Preparation & Filing",
    body: "We prepare and file all five mandatory LCA submissions — half-yearly reports, annual plans, performance reports, and master plans — ensuring accuracy and on-time delivery to the Secretariat.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Audits & Gap Analysis",
    body: "We audit your current local content practices against the Act's requirements, identify compliance gaps, and deliver a prioritized remediation plan with clear timelines.",
  },
  {
    icon: Target,
    title: "Target Setting & Benchmarking",
    body: "We help you set local content targets that are ambitious enough to satisfy the Secretariat but achievable based on your operational reality. Our benchmarks draw from industry-wide filing data.",
  },
  {
    icon: Building2,
    title: "Local Content Register Support",
    body: "We assist with Local Content Register applications, certificate renewals, and capability category updates. For foreign companies, we advise on joint venture and partnership structures.",
  },
  {
    icon: Users,
    title: "Secretariat Liaison",
    body: "We act as your interface with the Local Content Secretariat — handling queries, responding to information requests, and managing any enforcement correspondence on your behalf.",
  },
  {
    icon: Scale,
    title: "Strategic Local Content Advisory",
    body: "Beyond compliance, we help you develop a genuine local content strategy that creates business value — identifying local suppliers, building workforce pipelines, and strengthening your social license to operate.",
  },
];

const whyDedicated = [
  "The LCA has filing nuances that general compliance firms consistently miss",
  "The Secretariat's expectations evolve — staying current requires dedicated attention",
  "Target-setting requires industry benchmarks that only come from deep sector experience",
  "Enforcement is increasing, with fines up to GY$50 million for non-compliance",
  "Narrative sections must demonstrate genuine commitment, not just checkbox compliance",
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

export default function LocalContentConsultantContent({
  faqItems,
}: {
  faqItems: FAQItem[];
}) {
  return (
    <>
      <HeroSection
        eyebrow="LCA Consulting"
        headline="Local Content Compliance Consulting for Guyana's Petroleum Sector"
        sub="Houston-headquartered, Georgetown-present. Stabroek Advisory is the dedicated local content consultancy for companies operating in Guyana's petroleum sector."
        geometricVariant="waves"
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
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
              Why Dedicated LCA Expertise Matters
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Guyana&apos;s Local Content Act 2021 imposes specific reporting,
              registration, and target-setting obligations that differ significantly
              from local content regimes in other jurisdictions. A consultant who
              specializes in Guyana&apos;s LCA understands the Secretariat&apos;s
              review criteria, knows which compliance gaps trigger enforcement action,
              and can set targets that satisfy regulators without overcommitting your
              operations. General compliance advisors consistently miss these nuances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Houston + Georgetown */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-10 text-center">
            Houston + Georgetown Presence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary">
                    Houston, Texas
                  </h3>
                  <p className="text-xs text-text-secondary">Headquarters</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Located in the global capital of oil and gas, our Houston office works
                directly with the corporate compliance, procurement, and legal teams
                that oversee Guyana operations. Same time zone, same business culture,
                immediate accessibility for operators headquartered in the Gulf Coast.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary">
                    Georgetown, Guyana
                  </h3>
                  <p className="text-xs text-text-secondary">Operations</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                Our Georgetown presence ensures direct engagement with the Local
                Content Secretariat, in-country data collection capability, and
                on-the-ground support for operational teams. We maintain relationships
                with key regulatory stakeholders and stay current with enforcement
                trends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4 text-center">
            Consulting Services
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            From filing preparation to strategic advisory, we cover the full spectrum
            of local content compliance needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dedicated LCA Expertise */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
            Why Dedicated LCA Consulting Matters
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-sm text-text-secondary leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              Most companies assign LCA compliance to their general legal or
              regulatory team. Here&apos;s why that approach falls short:
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <ul className="space-y-3">
                {whyDedicated.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <div className="text-center mt-8">
            <Link
              href="/about"
              className="text-sm text-accent hover:underline font-medium"
            >
              Learn more about our team &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Technology + Consulting */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase size={24} className="text-accent" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Consulting + Technology
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Stabroek Advisory pairs expert consulting with{" "}
              <strong className="text-text-primary">LCA Desk</strong>, the
              purpose-built compliance platform we license for all managed clients. Your data lives in a structured
              system, reports are generated automatically, and our consultants
              review every filing before submission. It&apos;s the best of both
              worlds — human expertise backed by software that eliminates manual
              work.
            </p>
            <Link
              href="/lcadesk"
              className="text-sm text-accent hover:underline font-medium"
            >
              Explore LCA Desk &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqItems} />

      <CTABanner
        headline="Talk to a local content specialist"
        body="Book a consultation and we'll assess your LCA compliance posture within 24 hours. No obligation."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
