"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {/* Connecting line - desktop only */}
      <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-border" />

      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="relative text-center"
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent text-accent flex items-center justify-center text-sm font-medium mx-auto mb-4 relative z-10">
            {i + 1}
          </div>
          <h4 className="font-display text-base text-text-primary mb-2">{step.title}</h4>
          <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
