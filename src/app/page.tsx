"use client";

import HeroSection from "@/components/HeroSection";
import Ticker from "@/components/Ticker";
import StatCard from "@/components/StatCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import GeometricBg from "@/components/GeometricBg";
import Disclosure from "@/components/Disclosure";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardCheck,
  Target,
  Repeat,
  Building2,
  MonitorSmartphone,
  Ship,
  ArrowRight,
  Scale,
  Users,
  BookOpen,
  Layers,
} from "lucide-react";

const bidTiers = [
  {
    icon: ClipboardCheck,
    tier: "Tier 1",
    title: "Bid Readiness Review",
    body: "Diagnostic and document preparation for a single bid. We make sure your submission is complete, compliant, and competitive before it goes in.",
    price: "Starting at $2,500 per bid",
    items: [
      "Bid materials review",
      "LCS standing verification",
      "Technical and commercial response preparation",
      "Quality check before submission",
    ],
  },
  {
    icon: Target,
    tier: "Tier 2",
    badge: "MOST POPULAR",
    title: "Bid Strategy and Pricing",
    body: "A higher-value engagement for competitive opportunities. We model the field, price to win, and design a bid that competes on more than price alone.",
    price: "Starting at $10,000 per bid",
    items: [
      "Opportunity analysis",
      "Competing bid modeling",
      "Pricing strategy with landed supply cost inputs",
      "Bid design optimized to win beyond price",
    ],
  },
  {
    icon: Repeat,
    tier: "Tier 3",
    title: "Full Bid Retainer",
    body: "A monthly retainer for companies pursuing multiple bids. Continuous support across your pipeline, with execution-suite integration where it fits.",
    price: "Starting at $4,500/month",
    items: [
      "Continuous bid support",
      "Pipeline development",
      "Operator relationship support",
      "Preferred-supplier integration with VTC where it fits",
    ],
  },
];

const suiteBrands = [
  {
    icon: Building2,
    name: "Stabroek Advisory",
    role: "Bid services and local content advisory",
    body: "The front door. Bid strategy, pricing analysis, and document preparation built for the realities of the Local Content Act.",
    href: "/bid-services",
    cta: "Explore bid services",
    external: false,
  },
  {
    icon: MonitorSmartphone,
    name: "LCA Desk",
    role: "AI-native compliance software",
    body: "Compliance software that handles your Local Content Act filings automatically, so ongoing reporting never becomes a fire drill.",
    href: "/lcadesk",
    cta: "See LCA Desk",
    external: false,
  },
  {
    icon: Ship,
    name: "Vector Trade Capital",
    role: "Principal trade and supply execution",
    body: "When supply execution is required, VTC can act as your principal trade partner, delivering commodities CIF Guyana on terms structured to your operator receivables.",
    href: "https://vectortradecapital.com",
    cta: "Visit vectortradecapital.com",
    external: true,
  },
];

const secondaryServices = [
  {
    icon: Scale,
    title: "Local content advisory and compliance consulting",
    body: "Standing guidance on Local Content Act obligations, registration, and reporting strategy for companies in the petroleum sector.",
  },
  {
    icon: BookOpen,
    title: "Bid post-mortems and capability development",
    body: "Structured review of bids won and lost, with a development plan that makes your next submission stronger.",
  },
  {
    icon: Users,
    title: "Operator relationship support",
    body: "Help building and maintaining the operator relationships that drive a credible, repeatable bid pipeline.",
  },
  {
    icon: Layers,
    title: "Managed services for ongoing LCA compliance",
    body: "Hands-on management of your mandatory filings, and the bridge to running compliance on autopilot with LCA Desk.",
  },
];

const stats = [
  { value: "1,300+", label: "Companies on the Local Content Register" },
  { value: "40", label: "Reserved Service Categories" },
  { value: "2+", label: "Billion in LCA Procurement to Date" },
  { value: "900K+", label: "Barrels Per Day (and growing)" },
];

const faqItems = [
  {
    question: "What does Stabroek Advisory actually do?",
    answer:
      "We help LCA-registered Guyanese companies win local content bids in the petroleum sector. We provide bid strategy, pricing analysis, and document preparation. We are paid for that expertise whether you win or lose. We are professional services, not a contingent arrangement.",
  },
  {
    question: "Who is the bidder in an engagement with Stabroek?",
    answer:
      "You are. The Guyanese company is always the principal bidder, the contracting party, and the holder of the operator relationship. Stabroek is the infrastructure behind your bid. We never step in front of you as the bidder.",
  },
  {
    question: "How does the execution suite work?",
    answer:
      "Stabroek Advisory is the front door to three brands under common ownership: Stabroek for bid services and advisory, LCA Desk for compliance software, and Vector Trade Capital for principal trade and supply execution. You can engage Stabroek alone, or use the suite together. Each engagement is independent and at arm's length.",
  },
  {
    question: "What is the relationship between Stabroek and Vector Trade Capital?",
    answer:
      "Stabroek Advisory LLC and Vector Trade Capital LLC are affiliated entities under common ownership. When a Stabroek advisory engagement leads to trade execution work performed by VTC, Stabroek may receive a referral fee from VTC. You retain full discretion in selecting trade execution partners and are under no obligation to use VTC.",
  },
  {
    question: "Do I have to use Vector Trade Capital if I work with Stabroek?",
    answer:
      "No. VTC is one option for supply execution when a bid you win requires delivered commodities. You choose your own trade counterparties. The affiliation is disclosed openly because it is a feature, not a hidden arrangement.",
  },
  {
    question: "What does bid pricing include?",
    answer:
      "All bid services use Starting at pricing. Exact pricing is set per engagement once we understand the bid, the timeline, and the scope of support you need. Tier 1 starts at $2,500 per bid, Tier 2 at $10,000 per bid, and the Full Bid Retainer at $4,500 per month.",
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
        eyebrow="BID SERVICES · GUYANA PETROLEUM SECTOR"
        headline="Win local content bids in Guyana's petroleum sector."
        sub="Stabroek Advisory helps LCA-registered Guyanese companies win bids in the petroleum sector. We bring bid strategy, pricing analysis, and document preparation honed for the realities of the Local Content Act. When you win, our execution suite delivers."
        primaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
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
            Built for LCA-registered companies bidding across Guyana&apos;s
            petroleum sector
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Shore Base Companies",
              "Drilling Support",
              "Catering & Logistics",
              "Engineering Firms",
              "Marine Vessel Services",
              "Manpower & Crewing",
              "Fuel & Supply",
              "Environmental Services",
            ].map((b, i) => (
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

      {/* Bid Services Tiers */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
              Primary Service
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Bid services, structured to how you compete.
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Stabroek is paid for its expertise, win or lose. You are always the
              principal bidder. We are the infrastructure behind your bid.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {bidTiers.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,168,122,0.12)" }}
                className={`bg-card border rounded-xl p-6 flex flex-col shadow-sm relative overflow-hidden ${
                  t.badge ? "border-accent" : "border-border"
                }`}
              >
                {t.badge && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-teal to-accent-hover" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center">
                    <t.icon size={20} className="text-accent" />
                  </div>
                  {t.badge ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-teal text-white px-2.5 py-1 rounded-full">
                      {t.badge}
                    </span>
                  ) : (
                    <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                      {t.tier}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {t.body}
                </p>
                <ul className="text-sm text-text-secondary space-y-1.5 mb-4 flex-1">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 font-bold">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-accent mb-4">{t.price}</p>
                <Link
                  href="/bid-services"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium group/link"
                >
                  Tier details
                  <span className="group-hover/link:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center mt-8">
            All bid services use Starting at pricing. Exact pricing is set per
            engagement.
          </p>
        </div>
      </section>

      {/* Execution Suite */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
              The Execution Suite
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              One front door. A full execution suite.
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Engage Stabroek alone, or use the full suite. Three brands under
              common ownership, each engaged independently and at arm&apos;s
              length. Use the suite together, or use Stabroek alone. We work the
              way you need us to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suiteBrands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-lg text-text-primary mb-1">
                  {b.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
                  {b.role}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {b.body}
                </p>
                {b.external ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    {b.cta}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={b.href}
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium group/link"
                  >
                    {b.cta}
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/execution-suite"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/30 text-accent px-6 py-3 text-sm font-medium hover:bg-accent/5 hover:border-accent transition-all"
            >
              See how the suite works
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 px-6 overflow-hidden bg-emerald-950">
        <GeometricBg variant="hexagons" />
        <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} lightOnDark />
          ))}
        </div>
      </section>

      {/* Secondary Services */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
              Supporting Services
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Everything that keeps your bid pipeline strong.
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Bid services come first. These offerings support them, before and
              after you submit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryServices.map((s, i) => (
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
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium group/link"
            >
              See all advisory and compliance services
              <span className="group-hover/link:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Disclosure />
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
        headline="Bidding on a petroleum sector contract? Let's make it win."
        body="Bring us the opportunity. We will assess your bid readiness and map the support you need within one business day."
        primaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
