"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part for animation
    const match = value.match(/^([\d,]+)/);
    if (!match) {
      setDisplayed(value);
      return;
    }
    const target = parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = value.slice(match[1].length);
    const duration = 1500;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setDisplayed(current.toLocaleString() + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <p className="font-display text-4xl md:text-5xl text-gold mb-2">{displayed}</p>
      <p className="text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}
