"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,200,150,0.12)" }}
      className={`rounded-lg p-6 flex flex-col border ${
        highlighted
          ? "border-accent bg-card relative"
          : "border-border bg-card"
      }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          Recommended
        </span>
      )}
      <h3 className="font-display text-xl text-text-primary mb-2">{name}</h3>
      <div className="mb-6">
        <span className="font-display text-3xl text-gold">{price}</span>
        {period && <span className="text-sm text-text-muted">/{period}</span>}
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-accent mt-0.5">&#10003;</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={cta.href}
        className={`rounded-md px-6 py-3 text-sm font-medium text-center transition-all hover:scale-[1.02] ${
          highlighted
            ? "bg-accent text-white hover:bg-accent-hover"
            : "border border-accent text-accent hover:bg-accent/10"
        }`}
      >
        {cta.label}
      </Link>
    </motion.div>
  );
}
