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
      whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,200,150,0.12)" }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-lg p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
          <Icon size={20} className="text-accent" />
        </div>
        {badge && (
          <span className="text-[10px] font-medium uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-display text-lg text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{body}</p>
      {items && items.length > 0 && (
        <ul className="text-sm text-text-secondary space-y-1 mb-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-0.5">&#10003;</span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {price && (
        <p className="text-sm font-medium text-gold mb-4">{price}</p>
      )}
      {cta && (
        <Link
          href={cta.href}
          className="text-sm text-accent hover:text-accent-hover transition-colors font-medium"
        >
          {cta.label}
        </Link>
      )}
    </motion.div>
  );
}
