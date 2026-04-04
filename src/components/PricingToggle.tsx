"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Plan {
  name: string;
  monthly: number | null;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    name: "Standard",
    monthly: 500,
    features: [
      "1 company profile",
      "All 5 submission types",
      "CSV and text export",
      "Filing deadline alerts",
      "Email support",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    name: "Professional",
    monthly: 750,
    highlighted: true,
    features: [
      "3 company profiles",
      "All submission types",
      "Priority support",
      "Narrative guidance templates",
      "Multi-period comparison",
      "Historical data archive",
    ],
    cta: { label: "Get Started", href: "/contact" },
  },
  {
    name: "Enterprise",
    monthly: null,
    features: [
      "Unlimited company profiles",
      "Managed service add-on",
      "Dedicated account manager",
      "Custom onboarding",
      "Georgetown representative access",
      "API access",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
];

const DISCOUNT = 0.15;

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (monthly: number | null) => {
    if (monthly === null) return "Custom";
    if (annual) {
      const yearlyMonthly = Math.round(monthly * (1 - DISCOUNT));
      return `$${yearlyMonthly}`;
    }
    return `$${monthly}`;
  };

  const getPeriod = (monthly: number | null) => {
    if (monthly === null) return undefined;
    return "month";
  };

  const getSavings = (monthly: number) => {
    const saved = monthly * 12 * DISCOUNT;
    return `$${Math.round(saved).toLocaleString()}`;
  };

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className={`text-sm font-medium transition-colors ${!annual ? "text-text-primary" : "text-text-muted"}`}>
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-14 h-7 rounded-full transition-colors ${
            annual ? "bg-accent" : "bg-border"
          }`}
          aria-label="Toggle annual pricing"
        >
          <motion.div
            className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md"
            animate={{ left: annual ? "calc(100% - 25px)" : "2px" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${annual ? "text-text-primary" : "text-text-muted"}`}>
          Annual
        </span>
        {annual && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full"
          >
            Save 15%
          </motion.span>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            className={`rounded-xl p-6 flex flex-col border transition-all ${
              plan.highlighted
                ? "border-accent bg-card relative shadow-sm"
                : "border-border bg-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-lg font-medium text-text-primary mb-1">{plan.name}</h3>

            <div className="mb-1">
              <motion.span
                key={`${plan.name}-${annual}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-[family-name:var(--font-tech)] text-4xl font-bold text-text-primary"
              >
                {getPrice(plan.monthly)}
              </motion.span>
              {getPeriod(plan.monthly) && (
                <span className="text-sm text-text-muted ml-1">/{getPeriod(plan.monthly)}</span>
              )}
            </div>

            {plan.monthly && annual && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-accent mb-4"
              >
                Billed annually · Save {getSavings(plan.monthly)}/year
              </motion.p>
            )}
            {plan.monthly && !annual && (
              <p className="text-xs text-text-muted mb-4">Billed monthly</p>
            )}
            {!plan.monthly && (
              <p className="text-xs text-text-muted mb-4">Tailored to your needs</p>
            )}

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.cta.href}
              className={`rounded-md px-6 py-3 text-sm font-medium text-center transition-all hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-accent text-white hover:bg-accent-hover shadow-md shadow-accent/20"
                  : "border border-accent text-accent hover:bg-accent/10"
              }`}
            >
              {plan.cta.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
