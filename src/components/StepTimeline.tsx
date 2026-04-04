"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
}

const stepColors = [
  { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-400" },
  { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-400" },
  { bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-400" },
  { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-400" },
];

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
      {/* Gradient connecting line */}
      <div
        className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 rounded-full"
        style={{
          background: "linear-gradient(90deg, #10B981, #0D9488, #06B6D4, #3B82F6)",
        }}
      />

      {steps.map((step, i) => {
        const color = stepColors[i % stepColors.length];
        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="relative text-center group"
          >
            <div className={`w-12 h-12 rounded-full ${color.bg} ${color.text} border-2 ${color.border} flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10 transition-shadow group-hover:shadow-lg`}>
              {i + 1}
            </div>
            <h4 className="font-display text-base text-text-primary mb-2 group-hover:text-accent transition-colors">{step.title}</h4>
            <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
