"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  badge?: string;
  title: string;
  body: string;
  price?: string;
  cta?: { label: string; href: string };
  items?: string[];
}

export default function ServiceCard({
  icon: Icon,
  badge,
  title,
  body,
  price,
  cta,
  items,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,168,122,0.12)" }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-xl p-6 flex flex-col shadow-sm group hover:border-accent/30 transition-all relative overflow-hidden"
    >
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-teal to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/10 to-teal/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-teal/20 transition-colors">
          <Icon size={20} className="text-accent" />
        </div>
        {badge && (
          <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-accent to-teal text-white px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-display text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{body}</p>
      {items && items.length > 0 && (
        <ul className="text-sm text-text-secondary space-y-1.5 mb-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 font-bold">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {price && (
        <p className="text-sm font-semibold text-accent mb-4">{price}</p>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors font-medium group/link"
        >
          {cta.label}
          <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      )}
    </motion.div>
  );
}
