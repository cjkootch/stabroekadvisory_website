"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import Disclosure from "@/components/Disclosure";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  MonitorSmartphone,
  Ship,
  Target,
  Scale,
  Shield,
  Lock,
  ClipboardCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const suite = [
  {
    icon: Building2,
    name: "Stabroek Advisory",
    role: "Bid services and local content advisory",
    body: "The front door. Bid strategy, pricing analysis, and document preparation for LCA-registered Guyanese companies competing in the petroleum sector.",
    href: "/bid-services",
    external: false,
  },
  {
    icon: MonitorSmartphone,
    name: "LCA Desk",
    role: "AI-native compliance software",
    body: "Software that automates your Local Content Act filings, so compliance stays accurate and on time once you are winning and delivering work.",
    href: "/lcadesk",
    external: false,
  },
  {
    icon: Ship,
    name: "Vector Trade Capital",
    role: "Principal trade and supply execution",
    body: "When a bid requires delivered supply, VTC can act as your principal trade partner, delivering commodities CIF Guyana on terms structured to your operator receivables.",
    href: "https://vectortradecapital.com",
    external: true,
  },
];

const expertise = [
  { icon: Target, title: "Bid Strategy and Pricing" },
  { icon: Scale, title: "Local Content Act Compliance (v4.1)" },
  { icon: Users, title: "Operator Relationship Support" },
  { icon: ClipboardCheck, title: "Petroleum Sector Procurement" },
  { icon: Ship, title: "Caribbean Basin Supply Execution" },
];

const values = [
  {
    icon: Target,
    title: "The client is the hero",
    body: "The Guyanese company is always the principal bidder. We are the infrastructure behind your success, never the front-line bidder.",
  },
  {
    icon: Shield,
    title: "Paid for expertise",
    body: "Our bid services are real professional services. You pay for the work and the judgment, win or lose.",
  },
  {
    icon: Scale,
    title: "Open about affiliation",
    body: "Our common ownership with Vector Trade Capital is disclosed in every engagement. It is a credibility asset, not a liability.",
  },
  {
    icon: Lock,
    title: "Discretion",
    body: "Your procurement data, pricing, and supplier relationships are confidential. You choose your own trade execution partners, always.",
  },
];

export default function AboutContent() {
  return (
    <>
      <HeroSection
        headline="Built so Guyanese companies win."
        sub="Stabroek Advisory helps LCA-registered Guyanese companies win local content bids in the petroleum sector, and backs those wins with an integrated execution suite."
        geometricVariant="nodes"
      />

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-6 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-6">
              Guyana Petroleum Sector at a Glance
            </p>
            <div className="space-y-5">
              {[
                { label: "Companies on the Local Content Register", value: "1,300+", pct: 85 },
                { label: "Reserved Service Categories", value: "40", pct: 70 },
                { label: "Local content weighting in bid evaluation", value: "High", pct: 90 },
                { label: "Max Non-Compliance Fine", value: "GY$50M", pct: 95 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-text-secondary">{m.label}</span>
                    <span className="text-xs font-medium text-text-primary">{m.value}</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full" style={{ width: `${m.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
              <p>
                Local content has moved the center of gravity in Guyana&apos;s
                petroleum sector. Guyanese companies are now expected to win the
                work, hold the contracts, and own the operator relationships. What
                they often lack is not capability. It is the bid infrastructure to
                compete against larger, better-resourced fields.
              </p>
              <p>
                Stabroek Advisory exists to close that gap. We bring bid strategy,
                pricing analysis, and document preparation honed for the realities
                of the Local Content Act. You stay the principal bidder. We are the
                infrastructure behind your bid.
              </p>
              <p>
                We are part of a three-brand execution suite under common
                ownership. When a win requires delivered supply, Vector Trade
                Capital can act as your principal trade partner. When ongoing
                compliance follows, LCA Desk automates your filings. Use the suite
                together, or use Stabroek alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Execution Suite */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              The Execution Suite
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Three brands, one ownership, each engaged independently and at
              arm&apos;s length.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suite.map((b) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex flex-col"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <b.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-1">{b.name}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">
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
                    Learn more
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    href={b.href}
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium group/link"
                  >
                    Learn more
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
              How the suite works together
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Areas of Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {expertise.map((e) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-5 text-center"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <e.icon size={20} className="text-accent" />
                </div>
                <p className="text-sm text-text-secondary">{e.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Disclosure />
        </div>
      </section>

      <CTABanner
        headline="Ready to win your next bid?"
        body="Book a consultation. We will assess your bid readiness and map the support you need within one business day."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
      />
    </>
  );
}
