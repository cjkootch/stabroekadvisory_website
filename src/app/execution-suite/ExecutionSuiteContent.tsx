"use client";

import HeroSection from "@/components/HeroSection";
import StepTimeline from "@/components/StepTimeline";
import CTABanner from "@/components/CTABanner";
import Disclosure from "@/components/Disclosure";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  MonitorSmartphone,
  Ship,
  ArrowRight,
  GitBranch,
} from "lucide-react";

const brands = [
  {
    icon: Building2,
    name: "Stabroek Advisory",
    domain: "stabroekadvisory.com",
    role: "Bid services and local content advisory",
    revenue: "Advisory revenue",
    body: "The front door to the suite. We help LCA-registered Guyanese companies win bids with bid strategy, pricing analysis, and document preparation built for the Local Content Act. You are always the principal bidder.",
    href: "/bid-services",
    cta: "Explore bid services",
    external: false,
  },
  {
    icon: MonitorSmartphone,
    name: "LCA Desk",
    domain: "lcadesk.com",
    role: "AI-native compliance software",
    revenue: "SaaS revenue",
    body: "Compliance software that handles your Local Content Act filings automatically. Once you win work, LCA Desk keeps your mandatory reporting accurate and on time without it becoming a recurring fire drill.",
    href: "/lcadesk",
    cta: "See LCA Desk",
    external: false,
  },
  {
    icon: Ship,
    name: "Vector Trade Capital",
    domain: "vectortradecapital.com",
    role: "Principal trade and supply execution",
    revenue: "Transactional revenue",
    body: "When a bid you win requires delivered supply, VTC can act as your principal trade partner, delivering commodities CIF Guyana on terms structured to your operator receivables. You select your own execution partners.",
    href: "https://vectortradecapital.com",
    cta: "Visit vectortradecapital.com",
    external: true,
  },
];

const flow = [
  {
    title: "Engage Stabroek for bid services",
    description:
      "You bring an opportunity. We provide bid strategy, pricing, and document preparation. You stay the principal bidder throughout.",
  },
  {
    title: "Win the bid",
    description:
      "You sign the contract with the operator. The contract, the relationship, and the obligations are yours.",
  },
  {
    title: "Optionally engage VTC for trade execution",
    description:
      "If the contract requires delivered supply, you can engage Vector Trade Capital as a principal trade partner, or any counterparty you choose.",
  },
  {
    title: "Run ongoing compliance on LCA Desk",
    description:
      "LCA Desk automates your Local Content Act filings so the reporting that follows the win stays accurate and on time.",
  },
];

export default function ExecutionSuiteContent() {
  return (
    <>
      <HeroSection
        eyebrow="HOW WE WORK"
        headline="One front door. A full execution suite."
        sub="Stabroek Advisory is part of a three-brand execution suite under common ownership. Engage Stabroek alone, or use the full suite together. Each engagement is independent and at arm's length. We work the way you need us to."
        primaryCTA={{ label: "Start with Bid Services", href: "/bid-services" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        geometricVariant="nodes"
      />

      {/* Three brands */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Three brands. One coordinated capability.
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              This is the difference between Stabroek and every other local
              content consultant in Guyana. We do not just advise on the bid. The
              suite can carry it through to supply and compliance, if and when you
              want it to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center">
                    <b.icon size={22} className="text-accent" />
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-text-muted bg-surface px-2.5 py-1 rounded-full">
                    {b.revenue}
                  </span>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-1">
                  {b.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                  {b.role}
                </p>
                <p className="text-xs text-text-muted mb-3">{b.domain}</p>
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
        </div>
      </section>

      {/* Operational flow */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
              The Operational Flow
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              From bid to supply to compliance.
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Each step is a separate decision. You can stop after the bid, or use
              the full suite. Nothing is bundled and nothing is automatic.
            </p>
          </div>
          <StepTimeline steps={flow} />
        </div>
      </section>

      {/* Arm's length statement */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <GitBranch size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-lg text-text-primary">
                Independent, and at arm&apos;s length
              </h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Each brand is engaged on its own terms. A bid services engagement
              with Stabroek does not obligate you to use LCA Desk or Vector Trade
              Capital. A trade with VTC is a commercial transaction on its own
              merits. You remain the principal in every contract you sign with an
              operator, and you retain full discretion over which partners you
              work with.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              We disclose the common ownership openly because it is a strength.
              The same people who understand your bid understand what it takes to
              supply and stay compliant once you win.
            </p>
          </div>
          <Disclosure />
        </div>
      </section>

      <CTABanner
        headline="Start at the front door."
        body="Engage Stabroek for your next bid. Bring in the rest of the suite only if and when it helps."
        primaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
