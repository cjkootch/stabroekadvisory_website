"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
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
    body: "We are not affiliated with any petroleum operator, contractor, or government body.",
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
        backgroundImage="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
      />

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
              alt="Offshore energy operations"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
          <div>
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <p>
              Stabroek Advisory was founded by US Gulf Coast energy traders who identified a
              structural gap in Guyana&apos;s rapidly expanding oil sector: over 1,300 companies now
              legally required to file mandatory Local Content reports — with no dedicated software,
              no US-based advisory firm, and no compliance infrastructure to serve them.
            </p>
            <p>
              Based in Houston, Texas — five hours from Georgetown and at the center of the global
              energy industry — we combine deep knowledge of US commodity trade, logistics, and
              compliance infrastructure with on-the-ground Guyana market expertise.
            </p>
            <p>
              We built LCA Desk because we needed it ourselves, and because no one else had.
            </p>
          </div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
        secondaryCTA={{ label: "Explore LCA Desk", href: "/software" }}
      />
    </>
  );
}
