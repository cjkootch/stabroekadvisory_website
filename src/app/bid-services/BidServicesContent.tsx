"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import Disclosure from "@/components/Disclosure";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ClipboardCheck,
  Target,
  Repeat,
  ShieldCheck,
  Building2,
  Scale,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Paid for expertise, win or lose",
    body: "We are real professional services. You pay for the work and the judgment, not a contingency on the outcome.",
  },
  {
    icon: Building2,
    title: "You are the principal bidder",
    body: "The Guyanese company is always the contracting party and the operator relationship holder. We are the infrastructure behind you.",
  },
  {
    icon: Scale,
    title: "Affiliation disclosed openly",
    body: "Our relationship with Vector Trade Capital is disclosed in every engagement. It is a feature, not a hidden arrangement.",
  },
  {
    icon: Handshake,
    title: "Your discretion, always",
    body: "You select your own trade execution partners. There is no obligation to use VTC or any affiliate.",
  },
];

const tiers = [
  {
    icon: ClipboardCheck,
    tier: "Tier 1",
    title: "Bid Readiness Review",
    price: "Starting at $2,500 per bid",
    summary:
      "Diagnostic and document preparation for a single bid. We make sure your submission is complete, compliant, and competitive before it goes in.",
    deliverables: [
      {
        head: "Bid materials review",
        body: "We read the tender end to end, map every requirement, and flag the gaps that sink otherwise strong submissions.",
      },
      {
        head: "LCS standing verification",
        body: "We confirm your Local Content Register standing and certificate validity so an administrative miss never costs you the bid.",
      },
      {
        head: "Technical and commercial response preparation",
        body: "We draft and structure your technical and commercial responses to answer exactly what the operator is evaluating.",
      },
      {
        head: "Quality check before submission",
        body: "A final compliance and completeness review before you submit, so nothing goes in half finished.",
      },
    ],
  },
  {
    icon: Target,
    tier: "Tier 2",
    badge: "MOST POPULAR",
    title: "Bid Strategy and Pricing",
    price: "Starting at $10,000 per bid",
    summary:
      "A higher-value engagement for competitive opportunities. We model the field, price to win, and design a bid that competes on more than price alone.",
    deliverables: [
      {
        head: "Opportunity analysis",
        body: "We assess fit, win probability, and the operator's real evaluation priorities before you commit resources to the bid.",
      },
      {
        head: "Competing bid modeling",
        body: "We model the likely field so you understand who you are up against and where you can credibly differentiate.",
      },
      {
        head: "Pricing strategy with landed supply cost inputs",
        body: "We build a price that protects margin and stays competitive, informed by realistic landed supply costs.",
      },
      {
        head: "Bid design optimized to win beyond price",
        body: "We structure local content, capability, and delivery so you win on the factors that decide bids beyond the headline number.",
      },
    ],
  },
  {
    icon: Repeat,
    tier: "Tier 3",
    title: "Full Bid Retainer",
    price: "Starting at $4,500/month",
    summary:
      "A monthly retainer for companies pursuing multiple bids. Continuous support across your pipeline, with execution-suite integration where it fits.",
    deliverables: [
      {
        head: "Continuous bid support",
        body: "Standing capacity across every bid in your pipeline, so you are never starting from zero on the next opportunity.",
      },
      {
        head: "Pipeline development",
        body: "We help identify and prioritize upcoming opportunities before they reach tender, so you bid from a position of preparation.",
      },
      {
        head: "Operator relationship support",
        body: "Help building and maintaining the operator relationships that drive a credible, repeatable bid pipeline.",
      },
      {
        head: "Preferred-supplier integration with VTC where it fits",
        body: "When a bid you win requires delivered supply, we can coordinate with Vector Trade Capital as a principal supply option, entirely at your discretion.",
      },
    ],
  },
];

export default function BidServicesContent() {
  return (
    <>
      <HeroSection
        eyebrow="PRIMARY SERVICE"
        headline="Bid services for Guyana's petroleum sector."
        sub="We help LCA-registered Guyanese companies win local content bids. Bid strategy, pricing analysis, and document preparation, honed for the realities of the Local Content Act. You are always the bidder. We are the infrastructure behind your bid."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "See the Execution Suite", href: "/execution-suite" }}
        geometricVariant="circuits"
      />

      {/* Positioning principles */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            How we work, and what it means for you.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06 }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <p.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier sections */}
      {tiers.map((t, idx) => (
        <section
          key={t.title}
          id={t.tier.toLowerCase().replace(" ", "-")}
          className={`py-20 px-6 ${idx % 2 === 0 ? "bg-surface" : ""}`}
        >
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: tier overview */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center">
                  <t.icon size={22} className="text-accent" />
                </div>
                {t.badge ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-teal text-white px-2.5 py-1 rounded-full">
                    {t.badge}
                  </span>
                ) : (
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    {t.tier}
                  </span>
                )}
              </div>
              <h2 className="font-display text-3xl text-text-primary mb-4">
                {t.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {t.summary}
              </p>
              <p className="font-display text-2xl text-accent mb-6">{t.price}</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-7 py-3 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all"
              >
                Start with {t.title}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: deliverables */}
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">
                What you get
              </p>
              {t.deliverables.map((d, i) => (
                <motion.div
                  key={d.head}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card border border-border rounded-lg p-5 flex gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-accent flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary mb-1">
                      {d.head}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {d.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Pricing note + disclosure */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-text-secondary text-center leading-relaxed mb-12">
            All tiers use Starting at pricing. Exact pricing is set per engagement
            once we understand the bid, the timeline, and the scope of support you
            need. Every engagement is governed by an engagement letter signed at
            the start of the project.
          </p>
          <Disclosure />
        </div>
      </section>

      <CTABanner
        headline="Have a bid on the table? Bring it to us."
        body="We will assess your bid readiness and recommend the right tier within one business day."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "See the Execution Suite", href: "/execution-suite" }}
      />
    </>
  );
}
