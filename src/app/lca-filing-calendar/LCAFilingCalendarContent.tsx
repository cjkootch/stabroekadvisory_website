"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  MapPin,
  AlertTriangle,
  Clock,
  CheckCircle,
} from "lucide-react";

const filings = [
  {
    icon: FileText,
    title: "Half-Yearly Report (H1)",
    period: "January 1 - June 30",
    deadline: "September 30",
    description:
      "Covers the first six months of the calendar year. Must include Expenditure, Employment, and Capacity Development Sub-Reports with comparative analysis against your Annual Plan targets.",
    items: [
      "Expenditure Sub-Report",
      "Employment Sub-Report",
      "Capacity Development Sub-Report",
      "Comparative Analysis Narrative",
    ],
  },
  {
    icon: FileText,
    title: "Half-Yearly Report (H2)",
    period: "July 1 - December 31",
    deadline: "March 31 (following year)",
    description:
      "Covers the second six months of the calendar year. Same reporting structure as H1, with additional year-end reconciliation where applicable.",
    items: [
      "Expenditure Sub-Report",
      "Employment Sub-Report",
      "Capacity Development Sub-Report",
      "Comparative Analysis Narrative",
    ],
  },
  {
    icon: CalendarDays,
    title: "Annual Local Content Plan",
    period: "Next calendar year",
    deadline: "December 31 (year prior)",
    description:
      "A forward-looking 12-month plan submitted before the start of each calendar year. Includes projected employment, procurement, and capacity development targets for the upcoming year.",
    items: [
      "Employment Sub-Plan",
      "Procurement Sub-Plan",
      "Capacity Development Sub-Plan",
      "12-month forward projections",
    ],
  },
  {
    icon: MapPin,
    title: "Local Content Master Plan",
    period: "Full agreement term (typically 5 years)",
    deadline: "Within 4 months of entering a petroleum agreement",
    description:
      "A comprehensive, long-term strategic plan required for companies entering into petroleum agreements. Covers the full term of the agreement and must be approved by the Local Content Secretariat.",
    items: [
      "5-year strategic plan",
      "Employment, Procurement & Capacity Sub-Plans",
      "Company profile and petroleum agreement references",
      "Secretariat approval required",
    ],
  },
];

const yearCalendar = [
  { month: "January", events: [] },
  { month: "February", events: [] },
  { month: "March", events: [{ label: "H2 Half-Yearly Report due", type: "deadline" as const }] },
  { month: "April", events: [] },
  { month: "May", events: [] },
  { month: "June", events: [{ label: "H1 reporting period ends", type: "period" as const }] },
  { month: "July", events: [{ label: "H2 reporting period begins", type: "period" as const }] },
  { month: "August", events: [] },
  { month: "September", events: [{ label: "H1 Half-Yearly Report due", type: "deadline" as const }] },
  { month: "October", events: [] },
  { month: "November", events: [] },
  {
    month: "December",
    events: [
      { label: "H2 reporting period ends", type: "period" as const },
      { label: "Annual Local Content Plan due", type: "deadline" as const },
    ],
  },
];

export default function LCAFilingCalendarContent() {
  return (
    <>
      <HeroSection
        headline="LCA Filing Calendar"
        sub="Every mandatory deadline under Guyana's Local Content Act — in one place."
        geometricVariant="waves"
      />

      {/* Year-at-a-Glance */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Year at a Glance
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Key filing deadlines and reporting periods throughout the calendar year.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {yearCalendar.map((m) => (
              <motion.div
                key={m.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-lg p-4 ${
                  m.events.some((e) => e.type === "deadline")
                    ? "border-accent/50 shadow-sm"
                    : "border-border"
                }`}
              >
                <h3 className="font-display text-sm text-text-primary mb-2">{m.month}</h3>
                {m.events.length === 0 ? (
                  <p className="text-xs text-text-muted">No filings due</p>
                ) : (
                  <ul className="space-y-1">
                    {m.events.map((e) => (
                      <li key={e.label} className="flex items-start gap-1.5">
                        {e.type === "deadline" ? (
                          <AlertTriangle size={12} className="text-accent mt-0.5 flex-shrink-0" />
                        ) : (
                          <Clock size={12} className="text-text-muted mt-0.5 flex-shrink-0" />
                        )}
                        <span
                          className={`text-xs leading-tight ${
                            e.type === "deadline" ? "text-accent font-medium" : "text-text-secondary"
                          }`}
                        >
                          {e.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filing Details */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Filing Requirements
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Each mandatory submission under the Local Content Act, with reporting periods, deadlines, and required components.
          </p>
          <div className="space-y-6">
            {filings.map((f) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <f.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-text-primary mb-1">{f.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <Clock size={12} /> Period: {f.period}
                      </span>
                      <span className="text-xs text-accent font-medium flex items-center gap-1">
                        <AlertTriangle size={12} /> Deadline: {f.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {f.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                          <CheckCircle size={14} className="text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={24} className="text-accent" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
            Penalties for Late or Non-Filing
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            Under the Local Content Act, failure to submit required reports by their deadlines
            can result in fines of up to <strong className="text-text-primary">GY$50 million</strong> and
            potential suspension from the Local Content Register. The Secretariat has progressively
            increased enforcement activity since 2023.
          </p>
          <p className="text-sm text-text-secondary leading-relaxed">
            Companies that miss deadlines may also face delays in contract approvals,
            procurement certifications, and petroleum agreement renewals.
          </p>
        </div>
      </section>

      <CTABanner
        headline="Never miss an LCA deadline"
        body="Our managed compliance service handles every filing, every deadline. Book a consultation to get started."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
