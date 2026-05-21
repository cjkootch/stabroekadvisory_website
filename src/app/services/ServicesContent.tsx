"use client";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import CTABanner from "@/components/CTABanner";
import Disclosure from "@/components/Disclosure";
import Link from "next/link";
import {
  Scale,
  BookOpen,
  Users,
  Layers,
  FileText,
  CalendarDays,
  MapPin,
  BadgeCheck,
  Ship,
  ArrowRight,
} from "lucide-react";

const supporting = [
  {
    icon: Scale,
    title: "Local Content Advisory and Compliance Consulting",
    body: "Standing guidance on Local Content Act obligations, registration, and reporting strategy for companies competing in the petroleum sector.",
    items: [
      "LCA obligations assessment",
      "Local Content Register strategy",
      "Reporting and submission planning",
      "Secretariat correspondence support",
    ],
    cta: { label: "Talk to Us →", href: "/contact" },
  },
  {
    icon: BookOpen,
    title: "Bid Post-Mortems and Capability Development",
    body: "Structured review of bids won and lost, with a development plan that makes your next submission stronger.",
    items: [
      "Win and loss review",
      "Evaluation feedback analysis",
      "Capability gap mapping",
      "Improvement plan for the next bid",
    ],
    cta: { label: "Talk to Us →", href: "/contact" },
  },
  {
    icon: Users,
    title: "Operator Relationship Support",
    body: "Help building and maintaining the operator relationships that drive a credible, repeatable bid pipeline.",
    items: [
      "Operator engagement planning",
      "Pre-qualification support",
      "Supplier credibility positioning",
      "Pipeline relationship cadence",
    ],
    cta: { label: "Talk to Us →", href: "/contact" },
  },
  {
    icon: Layers,
    badge: "BRIDGE TO LCA DESK",
    title: "Managed Services for Ongoing LCA Compliance",
    body: "Hands-on management of your mandatory filings, and the bridge to running compliance on autopilot with LCA Desk.",
    items: [
      "All mandatory submissions managed",
      "Deadline tracking and data collection",
      "Secretariat liaison",
      "Migration path to LCA Desk software",
    ],
    cta: { label: "See LCA Desk →", href: "/lcadesk" },
  },
];

const filings = [
  {
    icon: FileText,
    title: "LCA Half-Yearly Report",
    body: "Preparation and submission of your Half-Yearly Local Content Report, covering expenditure, employment, and capacity development for each six-month period.",
    price: "From $3,500 per report",
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: CalendarDays,
    title: "Annual Local Content Plan",
    body: "Forward-looking 12-month plan with employment, procurement, and capacity development sub-plans and projected targets.",
    price: "From $4,000",
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: MapPin,
    title: "Local Content Master Plan",
    body: "Five-year strategic plan required within four months of entering a petroleum agreement, covering all local content obligations across the term.",
    price: "From $8,000",
    cta: { label: "Get Started →", href: "/contact" },
  },
  {
    icon: BadgeCheck,
    title: "LCA Registration Support",
    body: "Assistance with Local Content Register application, from eligibility assessment through document preparation, submission, and certificate tracking.",
    price: "From $3,500",
    cta: { label: "Get Started →", href: "/contact" },
  },
];

export default function ServicesContent() {
  return (
    <>
      <HeroSection
        eyebrow="ADVISORY AND COMPLIANCE"
        headline="The services that keep your bid pipeline strong."
        sub="Bid services come first. These advisory and compliance offerings support them, before and after you submit. They are how you stay credible, compliant, and ready for the next opportunity."
        primaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        geometricVariant="circuits"
      />

      {/* Primary callout */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="bg-surface border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-2">
                Looking for our primary service?
              </p>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                Winning bids is the core of what we do. The offerings on this page
                support your bids. For bid strategy, pricing, and document
                preparation, start with bid services.
              </p>
            </div>
            <Link
              href="/bid-services"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-medium text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] transition-all flex-shrink-0"
            >
              Bid Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting services */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
            Supporting services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supporting.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance filings */}
      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Compliance filings we prepare
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Done-for-you preparation and submission of the mandatory Local
              Content Act filings, in the official Secretariat formats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filings.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Managed compliance pricing */}
      <section className="py-20 px-6" id="pricing">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Managed compliance retainers
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            For companies that want their ongoing Local Content Act compliance
            handled end to end. Software included, with a clear path onto LCA Desk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCard
              name="Managed Standard"
              price="$2,500"
              period="month"
              features={[
                "LCA Desk software included (Pro tier)",
                "Filing preparation for 1 entity",
                "Narrative drafting",
                "Secretariat submission",
                "Regulator follow-up",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PricingCard
              name="Managed Growth"
              price="$3,500"
              period="month"
              highlighted
              features={[
                "LCA Desk software included (Pro tier)",
                "Up to 3 entities",
                "All mandatory submissions",
                "Review and signoff support",
                "Audit defense",
                "Priority turnaround",
              ]}
              cta={{ label: "Get Started", href: "/contact" }}
            />
            <PricingCard
              name="Managed Enterprise"
              price="$5,000+"
              period="month"
              features={[
                "LCA Desk software included (Enterprise tier)",
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

      {/* Trade execution callout */}
      <section className="py-16 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Ship size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  Need supply execution after a win?
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                  Trade and supply execution sits with our affiliate, Vector Trade
                  Capital, which can act as your principal trade partner. See how
                  the full execution suite fits together.
                </p>
              </div>
            </div>
            <Link
              href="/execution-suite"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/30 text-accent px-6 py-3 text-sm font-medium hover:bg-accent/5 hover:border-accent transition-all flex-shrink-0"
            >
              Execution Suite
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <Disclosure />
        </div>
      </section>

      <CTABanner
        headline="Bid services first. Everything else in support."
        body="Tell us about the bid you are chasing. We will recommend the right mix of bid and advisory support within one business day."
        primaryCTA={{ label: "Explore Bid Services", href: "/bid-services" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
