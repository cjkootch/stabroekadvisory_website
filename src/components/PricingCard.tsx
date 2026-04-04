"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,168,122,0.12)" }}
      className={`rounded-xl p-6 flex flex-col border transition-all relative overflow-hidden ${
        highlighted
          ? "border-accent bg-card shadow-md"
          : "border-border bg-card hover:border-accent/30"
      }`}
    >
      {highlighted && (
        <>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-teal to-accent-hover" />
          <span className="absolute -top-0 left-1/2 -translate-x-1/2 translate-y-2 bg-gradient-to-r from-accent to-teal text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Recommended
          </span>
        </>
      )}
      <h3 className={`font-display text-xl text-text-primary mb-2 ${highlighted ? "mt-4" : ""}`}>{name}</h3>
      <div className="mb-6">
        <span className="font-display text-3xl gradient-text">{price}</span>
        {period && <span className="text-sm text-text-muted">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <CheckCircle2 size={15} className="text-accent mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`rounded-lg px-6 py-3 text-sm font-medium text-center transition-all hover:scale-[1.02] ${
          highlighted
            ? "bg-gradient-to-r from-accent to-teal text-white hover:shadow-lg hover:shadow-accent/20"
            : "border-2 border-accent/30 text-accent hover:bg-accent/5 hover:border-accent"
        }`}
      >
        {cta.label}
      </Link>
    </motion.div>
  );
}
