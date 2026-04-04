"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Scale,
  Users,
  FileText,
  Building2,
  AlertTriangle,
  ShieldCheck,
  BookOpen,
  Landmark,
  Briefcase,
  CheckCircle,
} from "lucide-react";

const keyProvisions = [
  {
    icon: Users,
    title: "Who Must Comply",
    body: "All contractors, subcontractors, licensees, and other persons engaged in petroleum operations in Guyana. This includes operators, service companies, and their supply chains.",
  },
  {
    icon: Landmark,
    title: "The Local Content Secretariat",
    body: "Established under the Act as the regulatory body responsible for monitoring, enforcing, and overseeing compliance with local content obligations across the petroleum sector.",
  },
  {
    icon: BookOpen,
    title: "The Local Content Register",
    body: "A registry of Guyanese nationals and companies eligible to provide goods and services to the petroleum sector. Registration is required to be recognized as a local content provider.",
  },
  {
    icon: Briefcase,
    title: "First Consideration for Guyanese",
    body: "The Act mandates that contractors give first consideration to Guyanese nationals for employment and to registered Guyanese companies for the supply of goods and services.",
  },
];

const reportingObligations = [
  {
    icon: FileText,
    title: "Half-Yearly Reports",
    description:
      "Every contractor and subcontractor must submit Half-Yearly Reports to the Secretariat covering expenditure, employment, and capacity development for each six-month period.",
    link: { label: "View Filing Calendar", href: "/lca-filing-calendar" },
  },
  {
    icon: FileText,
    title: "Annual Local Content Plans",
    description:
      "Forward-looking 12-month plans must be submitted before the start of each calendar year, detailing projected local employment, procurement, and capacity building activities.",
    link: { label: "View Filing Calendar", href: "/lca-filing-calendar" },
  },
  {
    icon: FileText,
    title: "Local Content Master Plans",
    description:
      "Companies entering into petroleum agreements must submit a comprehensive Master Plan within 4 months, covering the full term of the agreement (typically 5 years).",
    link: { label: "View Filing Calendar", href: "/lca-filing-calendar" },
  },
];

const penalties = [
  "Fines of up to GY$50 million for non-compliance",
  "Suspension or removal from the Local Content Register",
  "Rejection or delay of contract approvals",
  "Potential revocation of petroleum agreement benefits",
  "Public disclosure of non-compliant entities",
];

const actSections = [
  {
    icon: Scale,
    title: "Part I: Preliminary",
    body: "Definitions and interpretation. Establishes scope covering petroleum operations and related activities in Guyana.",
  },
  {
    icon: Landmark,
    title: "Part II: Local Content Secretariat",
    body: "Establishment, composition, and functions of the Secretariat. Powers of inspection, monitoring, and enforcement.",
  },
  {
    icon: BookOpen,
    title: "Part III: Local Content Register",
    body: "Provisions for registration of Guyanese nationals and companies. Eligibility criteria, application process, and maintenance of the Register.",
  },
  {
    icon: Building2,
    title: "Part IV: Obligations of Contractors",
    body: "Core obligations including first consideration requirements, reporting duties, local procurement targets, and employment mandates.",
  },
  {
    icon: ShieldCheck,
    title: "Part V: Compliance & Enforcement",
    body: "Monitoring mechanisms, inspection powers, penalties for non-compliance, and the dispute resolution framework.",
  },
  {
    icon: AlertTriangle,
    title: "Part VI: Offences & Penalties",
    body: "Specific offences under the Act, fine amounts (up to GY$50 million), and provisions for continued non-compliance.",
  },
];

export default function LCAActOverviewContent() {
  return (
    <>
      <HeroSection
        headline="Understanding the Local Content Act"
        sub="A guide to Guyana's Local Content Act 2021 (No. 18 of 2021) and what it means for petroleum sector companies."
        geometricVariant="hexagons"
      />

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-6 text-center">
            What Is the Local Content Act?
          </h2>
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              The <strong className="text-text-primary">Local Content Act 2021</strong> (No. 18 of 2021)
              is Guyana&apos;s primary legislation governing the participation of Guyanese nationals and
              companies in the petroleum sector. Enacted to ensure that the country&apos;s oil wealth
              translates into local economic development, the Act establishes mandatory obligations for
              all entities involved in petroleum operations.
            </p>
            <p>
              The Act created the <strong className="text-text-primary">Local Content Secretariat</strong> as
              the regulatory body responsible for monitoring compliance, maintaining the Local Content
              Register, and enforcing reporting obligations. All contractors, subcontractors, and
              licensees must submit regular reports and plans demonstrating their commitment to local
              employment, procurement, and capacity development.
            </p>
            <p>
              With over 1,300 companies now subject to filing requirements and enforcement activity
              increasing year over year, understanding the Act is essential for any business operating
              in Guyana&apos;s petroleum sector.
            </p>
          </div>
        </div>
      </section>

      {/* Key Provisions */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Key Provisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyProvisions.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Obligations */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-4">
            Reporting Obligations
          </h2>
          <p className="text-sm text-text-secondary text-center mb-12 max-w-xl mx-auto">
            The Act requires three types of mandatory submissions from companies engaged in petroleum operations.
          </p>
          <div className="space-y-6">
            {reportingObligations.map((r) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <r.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base text-text-primary mb-2">{r.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{r.description}</p>
                  <Link
                    href={r.link.href}
                    className="text-sm text-accent hover:underline font-medium"
                  >
                    {r.link.label} &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure of the Act */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Structure of the Act
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actSections.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-base text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="bg-card border border-accent/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-accent" />
              </div>
              <h2 className="font-display text-xl text-text-primary">Penalties for Non-Compliance</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              The Act provides for significant penalties for companies that fail to meet their
              local content obligations, including:
            </p>
            <ul className="space-y-3">
              {penalties.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-text-secondary">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need help navigating the Local Content Act?"
        body="Our team specializes in LCA compliance. Book a consultation and we'll assess your obligations within 24 hours."
        primaryCTA={{ label: "Book a Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
