"use client";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import StepTimeline from "@/components/StepTimeline";
import PricingCard from "@/components/PricingCard";
import CTABanner from "@/components/CTABanner";
import {
  FileText,
  CalendarDays,
  MapPin,
  ShieldCheck,
  Globe,
  BadgeCheck,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "LCA Half-Yearly Report",
    body: "Complete preparation and submission of your Half-Yearly Local Content Report to the Secretariat, covering expenditure, employment, and capacity development data for each six-month period.",
    price: "From $3,500 per report",
    items: [
      "Expenditure Sub-Report",
      "Employment Sub-Report",
      "Capacity Development Sub-Report",
      "Comparative Analysis Narrative",
      "Notice of Submission",
    ],
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: CalendarDays,
    title: "Annual Local Content Plan",
    body: "Forward-looking 12-month plan submitted to the Secretariat before each calendar year. Includes employment, procurement, and capacity development sub-plans with projected targets.",
    price: "From $4,000",
    items: [
      "Employment Sub-Plan",
      "Procurement Sub-Plan",
      "Capacity Development Sub-Plan",
      "12-month forward projections",
    ],
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: MapPin,
    title: "Local Content Master Plan",
    body: "Five-year strategic plan required within 4 months of entering a petroleum agreement. Comprehensive coverage of all local content obligations across the agreement term.",
    price: "From $8,000",
    items: [
      "5-year forward-looking plan",
      "All three sub-plans",
      "Company profile",
      "Petroleum agreement references",
    ],
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: ShieldCheck,
    badge: "MOST POPULAR",
    title: "Monthly Compliance Retainer",
    body: "End-to-end compliance management on a monthly retainer. We handle all mandatory submissions, deadline tracking, data collection, and Secretariat liaison for your company.",
    price: "From $1,200/month",
    items: [
      "All mandatory submissions",
      "Deadline management",
      "Data collection and entry",
      "Secretariat liaison",
      "Filing history maintenance",
      "Ongoing advisory",
    ],
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: Globe,
    title: "US Market Entry Advisory",
    body: "Houston-based sourcing, logistics, and market entry support for Guyanese oil sector companies seeking American goods, equipment, services, and trade financing.",
    price: "From $15,000 project fee",
    items: [
      "US supplier identification",
      "Freight and logistics coordination",
      "Export documentation",
      "Trade finance introductions",
      "US entity setup guidance",
    ],
    cta: { label: "Contact Us →", href: "/contact" },
  },
  {
    icon: BadgeCheck,
    title: "LCA Registration Support",
    body: "Assistance with Local Content Register application, from eligibility assessment through document preparation, submission, and certificate tracking.",
    price: "From $3,500",
    items: [
      "Eligibility assessment",
      "Document preparation",
      "Application submission",
      "Secretariat follow-up",
      "Certificate tracking",
    ],
    cta: { label: "Get Started →", href: "/contact" },
  },
];

const onboardSteps = [
  {
    title: "Initial Consultation",
    description:
      "We assess your current compliance status, filing history, and upcoming deadlines to build a tailored service plan.",
  },
  {
    title: "Data Collection Setup",
    description:
      "We configure our data collection templates to match your internal systems — payroll exports, procurement records, and contract references.",
  },
  {
    title: "First Filing Preparation",
    description:
      "We prepare your first submission using historical data or current-period information, with full quality review before filing.",
  },
  {
    title: "Secretariat Submission",
    description:
      "We submit to localcontent@nre.gov.gy in the required format, track acknowledgement, and handle any follow-up requests.",
  },
];

export default function ServicesContent() {
  return (
    <>
      <HeroSection
        headline="Compliance Services for Guyana's Oil Sector"
        sub="From first-time filers to established contractors — we manage the full LCA reporting lifecycle."
        geometricVariant="circuits"
      />

      {/* Service Cards */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-6 bg-surface" id="pricing">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Pricing That Scales With Your Needs
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            Done-for-you compliance filings. We handle everything — data collection, report preparation, narrative drafting, and Secretariat submission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              name="Full Service — Standard"
              price="$2,500"
              period="month"
              features={[
                "Software included (Pro tier)",
                "Filing preparation for 1 entity",
                "Narrative drafting",
                "Secretariat submission",
                "Regulator follow-up",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PricingCard
              name="Full Service — Growth"
              price="$3,500"
              period="month"
              highlighted
              features={[
                "Software included (Pro tier)",
                "Up to 3 entities",
                "All mandatory submissions",
                "Review / signoff support",
                "Audit defense",
                "Priority turnaround",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PricingCard
              name="Full Service — Enterprise"
              price="$5,000+"
              period="month"
              features={[
                "Software included (Enterprise tier)",
                "Unlimited entities",
                "Dedicated compliance manager",
                "Custom annual contract",
                "Audit defense",
                "Georgetown representative access",
              ]}
              cta={{ label: "Contact Us", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-14">
            How we onboard a new managed service client
          </h2>
          <StepTimeline steps={onboardSteps} />
        </div>
      </section>

      <CTABanner
        headline="Ready to delegate your LCA compliance?"
        body="Let us handle your next filing. Book a consultation and we'll assess your compliance status within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "Explore LCA Desk", href: "/lcadesk" }}
      />
    </>
  );
}
