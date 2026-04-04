"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plane,
  Package,
  Building2,
  Landmark,
  Scale,
  Fuel,
  Globe,
  Banknote,
  Ship,
  Target,
  Shield,
  Lock,
  Quote,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const whyHouston = [
  {
    icon: Plane,
    title: "Proximity",
    body: "5-hour direct flight to Georgetown. Same time zone (EST). No communication lag.",
  },
  {
    icon: Package,
    title: "Commodity Sourcing",
    body: "Direct access to US Gulf Coast fuel, food, construction materials, and equipment supply chains for Guyanese importers.",
  },
  {
    icon: Building2,
    title: "Industry Network",
    body: "Houston is home to ExxonMobil, Chevron, Halliburton, Baker Hughes, and the entire offshore services ecosystem that operates in Guyana.",
  },
  {
    icon: Landmark,
    title: "Trade Financing",
    body: "Access to EXIM Bank, US trade credit insurance, and North American capital markets for Guyanese oil sector companies.",
  },
];

const expertise = [
  { icon: Scale, title: "Local Content Act Compliance (LCA v4.1)" },
  { icon: Fuel, title: "Oil & Gas Supply Chain Advisory" },
  { icon: Globe, title: "US Commodity Trade & Export" },
  { icon: Banknote, title: "Trade Finance & Documentation" },
  { icon: Ship, title: "Caribbean Basin Market Entry" },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    body: "LCA compliance has no margin for error. Every field, every number, every deadline.",
  },
  {
    icon: Shield,
    title: "Accountability",
    body: "We submit on time. Every time. And we handle any Secretariat follow-up.",
  },
  {
    icon: Scale,
    title: "Independence",
    body: "Independent. Unbiased. On your side. We work for you — not the Secretariat, not the operators, not the government.",
  },
  {
    icon: Lock,
    title: "Discretion",
    body: "Your procurement data, payroll figures, and supplier relationships are confidential. Always.",
  },
];

export default function AboutContent() {
  return (
    <>
      <HeroSection
        headline="The US-Guyana Compliance Bridge"
        sub="Houston expertise. Georgetown presence. Built for Guyana's oil boom."
        geometricVariant="nodes"
      />

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center"
          >
            <img
              src="/cole-kutschinski.jpeg"
              alt="Cole Kutschinski, Founder & CEO of Stabroek Advisory"
              className="w-48 h-48 rounded-2xl object-cover shadow-lg mb-6"
            />
            <h3 className="font-display text-xl text-text-primary mb-1">Cole Kutschinski</h3>
            <p className="text-sm text-accent font-medium mb-3">Founder & CEO</p>
            <a
              href="https://www.linkedin.com/in/cole-kutschinski/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-accent transition-colors mb-6"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {[
                { value: "50+", label: "Companies Onboarded" },
                { value: "200+", label: "Filings Completed" },
                { value: "100%", label: "On-Time Rate" },
              ].map((s) => (
                <div key={s.label} className="bg-surface rounded-lg px-2 py-3 border border-border">
                  <p className="text-sm font-bold gradient-text">{s.value}</p>
                  <p className="text-[10px] text-text-muted">{s.label}</p>
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
                Stabroek Advisory was founded by <strong className="text-text-primary">Cole Kutschinski</strong>,
                a Caribbean commodity trade, compliance, and SaaS AI technology specialist based in
                Houston, Texas. Cole identified a structural gap in Guyana&apos;s rapidly expanding oil
                sector: over 1,300 companies legally required to file mandatory Local Content reports
                — with no dedicated software, no US-based advisory firm, and no compliance
                infrastructure to serve them.
              </p>
              <p>
                Based in Houston — five hours from Georgetown and at the center of the global
                energy industry — we combine deep knowledge of US commodity trade, logistics, and
                compliance infrastructure with on-the-ground Guyana market expertise.
              </p>
              <p>
                We built LCA Desk because we needed it ourselves, and because no one else had.
                Today, Stabroek Advisory has onboarded over 50 companies and completed more than
                200 LCA filings with a 100% on-time submission rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Stabroek Advisory took over our LCA filings and we haven't missed a deadline since. Their team knows the Secretariat requirements inside and out.",
                attribution: "Operations Manager",
                company: "Georgetown-based marine services company",
              },
              {
                quote: "LCA Desk cut our reporting time from two weeks to two days. The AI narrative drafting alone saves us hours every filing period.",
                attribution: "Compliance Officer",
                company: "International drilling contractor, Guyana operations",
              },
              {
                quote: "As a foreign contractor new to Guyana, we had no idea where to start with LCA compliance. Stabroek walked us through everything — registration, first filing, ongoing management.",
                attribution: "Country Manager",
                company: "US-based oilfield services company",
              },
            ].map((t) => (
              <motion.div
                key={t.attribution}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-xl p-6 shadow-sm"
              >
                <Quote size={20} className="text-accent/30 mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-medium text-text-primary">{t.attribution}</p>
                  <p className="text-[11px] text-text-muted">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Houston */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Why Houston
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyHouston.map((item) => (
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

      <CTABanner
        headline="Ready to work with a compliance partner who understands Guyana's oil sector?"
        body="Book a consultation with our Houston team. We'll assess your LCA filing status within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
