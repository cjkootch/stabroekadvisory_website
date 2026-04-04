"use client";

import HeroSection from "@/components/HeroSection";
import UIFrame from "@/components/UIFrame";
import PricingCard from "@/components/PricingCard";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import {
  Database,
  FileOutput,
  Settings,
} from "lucide-react";

const featureGroups = [
  {
    icon: Database,
    title: "Data Management",
    features: [
      "Multi-client dashboard",
      "Expenditure tracking with 40 LCA sector categories",
      "Employment records by job title and nationality",
      "Capacity development activity log",
      "Historical filing archive",
    ],
  },
  {
    icon: FileOutput,
    title: "Report Generation",
    features: [
      "Half-Yearly Expenditure, Employment & Capacity Report (Excel)",
      "Comparative Analysis Narrative (PDF)",
      "Annual Local Content Plan",
      "Local Content Master Plan",
      "Performance Report",
      "All exports match official Secretariat templates",
    ],
  },
  {
    icon: Settings,
    title: "Compliance Tools",
    features: [
      "Filing deadline calendar with alerts",
      "Submission checklist per report",
      "Local content rate calculator",
      "Secretariat submission email formatter",
      "Multi-period comparison",
    ],
  },
];

const tabs = [
  "Tab 1: Background",
  "Tab 2: General Information",
  "Tab 3: Expenditure",
  "Tab 4: Employment",
  "Tab 5: Capacity Development",
  "Tab 6: Export & Submit",
];

export default function SoftwareContent() {
  return (
    <>
      <HeroSection
        eyebrow="LCA DESK"
        headline="The only software built specifically for Guyana's Local Content Act"
        sub="Manage all five mandatory LCA submissions from a single dashboard. Built on the official Version 4.1 guidelines from the Local Content Secretariat."
        primaryCTA={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCTA={{ label: "See How It Works", href: "#features" }}
      />

      {/* UI Mockups */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mockup 1 — Dashboard */}
          <UIFrame title="lcadesk.com/dashboard">
            <div className="space-y-3">
              {[
                { name: "Georgetown Logistics Ltd", pct: 72, spend: "$1.2M", deadline: "Jul 30" },
                { name: "Atlantic Marine Services", pct: 58, spend: "$890K", deadline: "Jul 30" },
                { name: "Demerara Catering Co.", pct: 85, spend: "$2.1M", deadline: "Jul 30" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-between bg-surface rounded px-4 py-3 border border-border">
                  <div>
                    <p className="text-sm text-text-primary font-medium">{c.name}</p>
                    <p className="text-xs text-text-muted">Local Content: {c.pct}%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gold font-medium">{c.spend}</p>
                    <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded">Due {c.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </UIFrame>

          {/* Mockup 2 — Expenditure Entry */}
          <UIFrame title="lcadesk.com/expenditure">
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-text-muted">
                    <th className="text-left py-2 pr-3">Sector</th>
                    <th className="text-left py-2 pr-3">Supplier</th>
                    <th className="text-left py-2 pr-3">Status</th>
                    <th className="text-right py-2">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  {[
                    { sector: "Catering", supplier: "GY Foods Ltd", status: "Guyanese", amount: "$145,000" },
                    { sector: "Marine", supplier: "OceanPro Inc.", status: "Non-Guyanese", amount: "$312,000" },
                    { sector: "Engineering", supplier: "Demerara Eng.", status: "Guyanese", amount: "$89,500" },
                    { sector: "Logistics", supplier: "Gulf Freight", status: "Non-Guyanese", amount: "$227,000" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 pr-3">{r.sector}</td>
                      <td className="py-2 pr-3">{r.supplier}</td>
                      <td className="py-2 pr-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          r.status === "Guyanese" ? "bg-accent/10 text-accent" : "bg-gold/10 text-gold"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="py-2 text-right text-text-primary">{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </UIFrame>

          {/* Mockup 3 — Compliance Checklist */}
          <UIFrame title="lcadesk.com/checklist">
            <div className="space-y-3">
              {[
                { label: "Company info complete", done: true },
                { label: "Expenditure items entered", done: true },
                { label: "Employment data entered", done: true },
                { label: "Narratives written", done: false },
                { label: "Ready to export", done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    item.done ? "bg-accent text-white" : "border border-border text-transparent"
                  }`}>
                    &#10003;
                  </div>
                  <span className={`text-sm ${item.done ? "text-text-primary" : "text-text-muted"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </UIFrame>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-surface" id="features">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            Everything you need to file. Nothing you don&apos;t.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureGroups.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <group.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-lg text-text-primary mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-accent mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Official Guidelines */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6">
            Every field maps to the official Secretariat template.
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            LCA Desk was built directly from the Local Content Half-Yearly Report Submission
            Guideline (Version 4.1, June 2025) published by the Local Content Secretariat. Every
            dropdown, every data field, every required input matches the official format.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tabs.map((tab, i) => (
              <motion.div
                key={tab}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-text-secondary"
              >
                {tab}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-surface" id="pricing">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12">
            Save 2 months with annual billing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              name="Starter"
              price="$199"
              period="month"
              features={[
                "1 company profile",
                "All 5 submission types",
                "CSV and text export",
                "Email support",
              ]}
              cta={{ label: "Start Free Trial", href: "/contact" }}
            />
            <PricingCard
              name="Professional"
              price="$349"
              period="month"
              highlighted
              features={[
                "3 company profiles",
                "All submission types",
                "Priority support",
                "Narrative guidance templates",
                "Filing deadline alerts",
              ]}
              cta={{ label: "Start Free Trial", href: "/contact" }}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              features={[
                "Unlimited company profiles",
                "Managed service add-on available",
                "Dedicated account manager",
                "Custom onboarding",
                "Georgetown representative access",
              ]}
              cta={{ label: "Contact Us", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start your free trial today."
        body="No credit card required. Set up your first company profile in under 10 minutes."
        primaryCTA={{ label: "Start Free Trial", href: "/contact" }}
        secondaryCTA={{ label: "Book a Demo", href: "/contact" }}
      />
    </>
  );
}
