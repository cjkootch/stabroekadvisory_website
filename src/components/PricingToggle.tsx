"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Headset } from "lucide-react";

interface Plan {
  name: string;
  bestFor: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  isService?: boolean;
  aiBadge?: string;
}

const plans: Plan[] = [
  {
    name: "Lite",
    bestFor: "Small vendors / 1–10 employees",
    monthly: 149,
    annual: 1490,
    features: [
      "1 entity",
      "1–2 users",
      "Filing reminders",
      "Guided reporting wizard",
      "CSV upload",
      "Filing export (PDF/Excel)",
      "Email support",
    ],
    cta: { label: "Get Started", href: "https://lcadesk.com" },
  },
  {
    name: "Pro",
    bestFor: "Growing contractors / 10–100 employees",
    monthly: 599,
    annual: 5990,
    highlighted: true,
    aiBadge: "Includes AI Narrative Drafting",
    features: [
      "Up to 5 entities / projects",
      "5–10 users",
      "AI narrative drafting (all report types)",
      "Compliance gap detection",
      "Historical reports",
      "Workforce + procurement dashboards",
      "Validation alerts",
      "Audit log",
      "Priority support",
    ],
    cta: { label: "Get Started", href: "https://lcadesk.com" },
  },
  {
    name: "Enterprise",
    bestFor: "Large contractors / multi-entity",
    monthly: 1999,
    annual: 19990,
    aiBadge: "Includes All AI Features + Document Intelligence",
    features: [
      "Unlimited entities",
      "All AI features",
      "Document upload & auto-extraction",
      "In-app AI compliance assistant",
      "Role-based permissions",
      "API / ERP integrations",
      "White-glove onboarding",
      "Custom workflows",
      "SLA support",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    name: "Full Service",
    bestFor: "Done-for-you filings",
    monthly: null,
    annual: null,
    isService: true,
    features: [
      "Software included",
      "Filing preparation",
      "Narrative drafting",
      "Review / signoff support",
      "Regulator follow-up",
      "Audit defense",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  const getPrice = (plan: Plan) => {
    if (plan.isService) return "$2,500";
    if (plan.monthly === null) return "Custom";
    if (annual) return `$${Math.round(plan.annual! / 12).toLocaleString()}`;
    return `$${plan.monthly.toLocaleString()}`;
  };

  const getPeriod = (plan: Plan) => {
    if (plan.isService) return "mo";
    if (plan.monthly === null) return undefined;
    return "mo";
  };

  const getSubtext = (plan: Plan) => {
    if (plan.isService) {
      return annual ? "Custom annual contract" : "Starting at · custom quote";
    }
    if (plan.monthly === null) return "Tailored to your needs";
    if (annual) {
      return `$${plan.annual!.toLocaleString()}/yr · 2 months free`;
    }
    return "Billed monthly";
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
            2 months free
          </motion.span>
        )}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            className={`rounded-xl p-6 flex flex-col border transition-all ${
              plan.highlighted
                ? "border-accent bg-card relative shadow-sm"
                : plan.isService
                  ? "border-border bg-surface"
                  : "border-border bg-card"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {plan.isService && (
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <Headset size={16} className="text-accent" />
              </div>
            )}

            <h3 className="text-lg font-medium text-text-primary mb-1">{plan.name}</h3>
            <p className="text-xs text-text-muted mb-2">{plan.bestFor}</p>
            {plan.aiBadge && (
              <p className="text-[10px] font-medium text-accent bg-accent/8 px-2 py-1 rounded inline-block mb-3">
                {plan.aiBadge}
              </p>
            )}
            {!plan.aiBadge && <div className="mb-2" />}

            <div className="mb-1">
              <motion.span
                key={`${plan.name}-${annual}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-[family-name:var(--font-tech)] text-3xl font-bold text-text-primary"
              >
                {getPrice(plan)}
              </motion.span>
              {getPeriod(plan) && (
                <span className="text-sm text-text-muted ml-1">/{getPeriod(plan)}</span>
              )}
              {plan.isService && (
                <span className="text-sm text-text-muted">+</span>
              )}
            </div>

            <p className="text-xs text-text-muted mb-5">{getSubtext(plan)}</p>

            <ul className="space-y-2.5 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
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
