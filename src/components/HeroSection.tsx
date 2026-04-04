"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  headline: string;
  sub: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  fullHeight?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HeroSection({
  eyebrow,
  headline,
  sub,
  primaryCTA,
  secondaryCTA,
  fullHeight = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center ${
        fullHeight ? "min-h-screen" : "min-h-[60vh]"
      } pt-24 pb-16`}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(26,45,74,0.3) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-6"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-5xl md:text-7xl leading-[1.1] text-text-primary mb-6"
        >
          {headline}
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {sub}
        </motion.p>
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-medium text-bg hover:bg-accent-hover hover:scale-[1.02] transition-all"
              >
                {primaryCTA.label}
                <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-accent px-7 py-3 text-sm font-medium text-accent hover:bg-accent/10 hover:scale-[1.02] transition-all"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Scroll indicator — only on full height */}
      {fullHeight && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
