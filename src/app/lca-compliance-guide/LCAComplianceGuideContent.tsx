"use client";

import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Users,
  Calendar,
  Grid3X3,
  Calculator,
  ClipboardCheck,
  AlertTriangle,
  UserPlus,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const reservedCategories = [
  "Accommodation and Food Services",
  "Administrative and Support Services",
  "Agriculture Forestry and Fishing",
  "Air Transport",
  "Architectural and Engineering Activities",
  "Audit and Accounting",
  "Chemicals and Pharmaceuticals",
  "Civil Works/Construction",
  "Cleaning Services",
  "Computer and Information Technology",
  "Drilling and Well Services",
  "Education and Training",
  "Electrical Equipment and Services",
  "Environmental Services",
  "Financial and Insurance Activities",
  "Freight and Logistics",
  "Fuel and Lubricants",
  "Geological and Geophysical Services",
  "Health and Medical Services",
  "Human Resources/Manpower",
  "Industrial Equipment and Machinery",
  "Inspection and Testing",
  "Insurance Services",
  "Legal Services",
  "Maintenance Repair and Operations",
  "Manufacturing",
  "Marine Services",
  "Mining and Quarrying",
  "Office Equipment and Supplies",
  "Personal Protective Equipment",
  "Pipeline Services",
  "Professional Scientific and Technical",
  "Real Estate Activities",
  "Rental and Leasing",
  "Safety and Emergency Services",
  "Security Services",
  "Subsea Services",
  "Telecommunications",
  "Transportation",
  "Waste Management and Remediation",
];

const commonMistakes = [
  {
    title: "Submitting after the deadline",
    description: "Even one day late can trigger a formal notice from the Secretariat. File at least 5 business days early to allow for corrections.",
  },
  {
    title: "Using outdated templates",
    description: "The Secretariat updates its reporting templates periodically. Always download the latest version from localcontent@nre.gov.gy before starting a report.",
  },
  {
    title: "Misclassifying local vs. foreign employees",
    description: "Only Guyanese nationals count as local employees. Permanent residents, CARICOM nationals, and work-permit holders are classified as foreign.",
  },
  {
    title: "Omitting subcontractor spend",
    description: "Your report must include spend through subcontractors, not just direct procurement. Tier-1 and Tier-2 subcontractor data is required.",
  },
  {
    title: "Failing to disaggregate by service category",
    description: "Expenditure must be broken down across the 40 reserved service categories. Lumping spend into a single category will trigger a revision request.",
  },
  {
    title: "Not reporting zero-activity periods",
    description: "Even if your company had no petroleum-related activity during a reporting period, you must still file a nil report.",
  },
  {
    title: "Inconsistent figures between reports",
    description: "H1 + H2 numbers must reconcile with Annual Performance Report totals. The Secretariat cross-references filings.",
  },
  {
    title: "Missing narrative explanations",
    description: "Numerical data alone is insufficient. Each section requires narrative context explaining variances, challenges, and planned improvements.",
  },
  {
    title: "Incorrect email submission format",
    description: "Reports must be submitted as PDF attachments to localcontent@nre.gov.gy with the correct subject line format specified by the Secretariat.",
  },
  {
    title: "Failing to retain supporting documentation",
    description: "Invoices, payroll records, and contracts supporting reported figures must be retained for at least 5 years for potential audit verification.",
  },
];

const calendarEntries = [
  { deadline: "January 30", report: "H2 Half-Yearly Report", period: "July 1 \u2013 December 31", icon: FileText },
  { deadline: "February 14", report: "Annual Performance Report", period: "Prior calendar year", icon: ClipboardCheck },
  { deadline: "July 30", report: "H1 Half-Yearly Report", period: "January 1 \u2013 June 30", icon: FileText },
  { deadline: "November 1", report: "Annual Local Content Plan", period: "Forward 12-month projection", icon: Calendar },
  { deadline: "Within 4 months of contract", report: "Local Content Master Plan", period: "5-year forward projection", icon: FileText },
];

export default function LCAComplianceGuideContent() {
  return (
    <>
      <HeroSection
        eyebrow="The Definitive Resource"
        headline="Guyana LCA Compliance Guide"
        sub="Everything contractors, subcontractors, and licensees need to know about the Local Content Act 2021 — filings, deadlines, penalties, and best practices for 2026."
        geometricVariant="topology"
        primaryCTA={{ label: "Get Compliant with LCA Desk", href: "/lcadesk" }}
        secondaryCTA={{ label: "Talk to an Advisor", href: "/contact" }}
      />

      {/* Definition Block */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="border-l-4 border-accent bg-card rounded-r-xl p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              What is the Local Content Act 2021?
            </h2>
            <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
              <p>
                The <strong className="text-text-primary">Local Content Act 2021</strong> (No. 18 of 2021)
                is Guyana&apos;s landmark legislation governing the participation of Guyanese nationals and
                companies in the petroleum sector. Enacted on December 29, 2021, the Act ensures that
                Guyana&apos;s oil and gas wealth translates into measurable local economic development.
              </p>
              <p>
                The Act established the <strong className="text-text-primary">Local Content Secretariat</strong> within
                the Ministry of Natural Resources as the regulatory body responsible for monitoring compliance,
                maintaining the Local Content Register, and enforcing reporting obligations. It applies to
                every entity involved in petroleum operations &mdash; from major operators like ExxonMobil Guyana
                to the smallest service subcontractor.
              </p>
              <p>
                With over <strong className="text-text-primary">1,300 companies</strong> now on the Local Content
                Register and enforcement activity increasing year over year, understanding the Act is not
                optional &mdash; it is a legal requirement for doing business in Guyana&apos;s petroleum sector.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Must File */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <Users className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Who Must File Under the LCA?
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Local Content Act applies to three categories of entities operating in Guyana&apos;s petroleum sector.
              If your company falls into any of these categories, you have mandatory filing obligations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Contractors",
                description:
                  "Any person who has entered into a petroleum agreement with the Government of Guyana. This includes major operators such as ExxonMobil Guyana, Hess Corporation, and CNOOC who hold production sharing agreements for offshore blocks.",
                examples: "ExxonMobil Guyana, Hess Guyana, CNOOC Petroleum Guyana, CGX Energy, Repsol",
              },
              {
                title: "Subcontractors",
                description:
                  "Any person who has entered into a contract with a contractor or another subcontractor for the provision of goods or services related to petroleum operations. This captures the entire supply chain.",
                examples: "Halliburton, SLB, Saipem, TechnipFMC, local shore base operators, catering companies, marine vessel operators",
              },
              {
                title: "Licensees",
                description:
                  "Any person who holds a petroleum prospecting license or petroleum production license under the Petroleum (Exploration and Production) Act. This includes companies in the exploration phase before commercial production begins.",
                examples: "Companies holding exploration licenses for frontier blocks, joint venture partners in licensed areas",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card rounded-xl border border-border p-6"
              >
                <h3 className="font-display text-lg text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs text-text-secondary">
                  <strong className="text-accent">Examples:</strong> {item.examples}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 5 Mandatory Submissions */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              The 5 Mandatory Submissions
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Local Content Act 2021 requires every contractor, subcontractor, and licensee to submit
              five distinct reports to the Local Content Secretariat. Missing any one of these triggers
              penalties ranging from GY$1 million to GY$50 million.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="overflow-x-auto"
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="text-left p-4 font-display text-text-primary border border-border">Report Type</th>
                  <th className="text-left p-4 font-display text-text-primary border border-border">Period Covered</th>
                  <th className="text-left p-4 font-display text-text-primary border border-border">Deadline</th>
                  <th className="text-left p-4 font-display text-text-primary border border-border">Submitted To</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-card">
                  <td className="p-4 text-text-primary border border-border font-medium">H1 Half-Yearly Report</td>
                  <td className="p-4 text-text-secondary border border-border">January 1 &ndash; June 30</td>
                  <td className="p-4 text-accent border border-border font-medium">July 30</td>
                  <td className="p-4 text-text-secondary border border-border">localcontent@nre.gov.gy</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary border border-border font-medium">H2 Half-Yearly Report</td>
                  <td className="p-4 text-text-secondary border border-border">July 1 &ndash; December 31</td>
                  <td className="p-4 text-accent border border-border font-medium">January 30</td>
                  <td className="p-4 text-text-secondary border border-border">localcontent@nre.gov.gy</td>
                </tr>
                <tr className="bg-card">
                  <td className="p-4 text-text-primary border border-border font-medium">Annual Local Content Plan</td>
                  <td className="p-4 text-text-secondary border border-border">Forward 12-month projection</td>
                  <td className="p-4 text-accent border border-border font-medium">60 days before January 1</td>
                  <td className="p-4 text-text-secondary border border-border">localcontent@nre.gov.gy</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary border border-border font-medium">Local Content Master Plan</td>
                  <td className="p-4 text-text-secondary border border-border">5-year forward projection</td>
                  <td className="p-4 text-accent border border-border font-medium">Within 4 months of new contract</td>
                  <td className="p-4 text-text-secondary border border-border">localcontent@nre.gov.gy</td>
                </tr>
                <tr className="bg-card">
                  <td className="p-4 text-text-primary border border-border font-medium">Annual Performance Report</td>
                  <td className="p-4 text-text-secondary border border-border">Prior calendar year</td>
                  <td className="p-4 text-accent border border-border font-medium">45 days after December 31</td>
                  <td className="p-4 text-text-secondary border border-border">localcontent@nre.gov.gy</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 space-y-6"
          >
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-lg text-text-primary mb-2">Half-Yearly Reports (H1 &amp; H2)</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                The most common filing obligation. Half-yearly reports cover actual expenditure, employment,
                and capacity development data for the preceding six-month period. Reports must follow the
                Version 4.1 Secretariat guidelines (June 2025) and include both quantitative data tables
                and narrative explanations for each section. The H1 report covers January through June and
                is due July 30. The H2 report covers July through December and is due January 30 of the
                following year.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-lg text-text-primary mb-2">Annual Local Content Plan</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A forward-looking document projecting your company&apos;s local content activities for the
                upcoming calendar year. It must include projected local employment targets, planned procurement
                from Guyanese suppliers across the 40 reserved categories, and capacity development initiatives.
                The plan is due 60 days before January 1 (effectively November 1) and serves as the benchmark
                against which your actual performance will be measured.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-lg text-text-primary mb-2">Local Content Master Plan</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Required within 4 months of entering into a new petroleum agreement or contract. The Master Plan
                covers the full term of the agreement (typically 5 years) and outlines long-term commitments to
                local employment, technology transfer, skills development, and procurement from Guyanese companies.
                This is the most comprehensive filing and requires detailed projections for each year of the contract term.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-lg text-text-primary mb-2">Annual Performance Report</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                A backward-looking report covering actual performance for the prior calendar year, due 45 days
                after December 31 (February 14). This report is cross-referenced against your Annual Local Content
                Plan to measure how well you met your projected targets. Significant variances between planned
                and actual figures require detailed narrative explanations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LCA Filing Calendar */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <Calendar className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              The LCA Filing Calendar
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Mark these dates. The Secretariat enforces deadlines strictly &mdash; even one day late
              can trigger a formal notice and potential penalties.
            </p>
          </motion.div>

          <div className="space-y-4">
            {calendarEntries.map((entry) => (
              <motion.div
                key={entry.report}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card rounded-xl border border-border p-6 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex items-center gap-4 md:w-1/4">
                  <entry.icon className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-display text-lg text-accent">{entry.deadline}</span>
                </div>
                <div className="md:w-1/3">
                  <h3 className="font-display text-text-primary">{entry.report}</h3>
                </div>
                <div className="md:w-5/12">
                  <p className="text-sm text-text-secondary">{entry.period}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 bg-card rounded-xl border border-accent/30 p-6"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-accent">Pro tip:</strong> Start preparing each report at least 4 weeks before
              the deadline. Data collection from subcontractors and internal departments is typically the
              biggest bottleneck. <Link href="/lcadesk" className="text-accent hover:underline">LCA Desk</Link> automates
              data collection and generates compliant reports in hours, not weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The 40 Reserved Service Categories */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <Grid3X3 className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              The 40 Reserved Service Categories
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Local Content Act designates 40 service categories where Guyanese companies must be
              given first consideration. Contractors must report expenditure across each of these categories
              in their half-yearly and annual reports.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          >
            {reservedCategories.map((category, index) => (
              <div
                key={category}
                className="bg-card rounded-lg border border-border px-4 py-3 text-sm text-text-secondary hover:border-accent/50 hover:text-text-primary transition-colors"
              >
                <span className="text-accent font-medium mr-2">{String(index + 1).padStart(2, "0")}</span>
                {category}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-8 bg-card rounded-xl border border-border p-6"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              For each of these 40 categories, your half-yearly report must show: total spend, local spend
              (to Guyanese-registered companies), foreign spend, and the resulting local content percentage.
              The Secretariat uses these figures to assess whether you are giving first consideration to
              Guyanese suppliers as required by the Act.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Local Content Rates Are Calculated */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <Calculator className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              How Local Content Rates Are Calculated
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Secretariat evaluates local content performance using two primary metrics:
              procurement local content rate and employment local content rate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-4">Procurement Rate</h3>
              <div className="bg-surface rounded-lg p-4 mb-4 text-center">
                <p className="text-xs text-text-secondary mb-1">Formula</p>
                <p className="font-display text-accent text-lg">
                  Local Spend &divide; Total Spend &times; 100
                </p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                <strong className="text-text-primary">Local spend</strong> includes payments to companies
                registered on the Local Content Register. <strong className="text-text-primary">Total spend</strong> includes
                all procurement expenditure for petroleum operations during the reporting period.
              </p>
              <div className="bg-surface rounded-lg p-4">
                <p className="text-xs text-text-secondary mb-2">Example</p>
                <p className="text-sm text-text-secondary">
                  If your company spent <strong className="text-text-primary">US$5M total</strong> on services
                  and <strong className="text-text-primary">US$2M</strong> went to Guyanese-registered suppliers,
                  your procurement local content rate is <strong className="text-accent">40%</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-4">Employment Rate</h3>
              <div className="bg-surface rounded-lg p-4 mb-4 text-center">
                <p className="text-xs text-text-secondary mb-1">Formula</p>
                <p className="font-display text-accent text-lg">
                  Guyanese Employees &divide; Total Employees &times; 100
                </p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                <strong className="text-text-primary">Guyanese employees</strong> means nationals of Guyana only.
                CARICOM nationals, permanent residents, and work-permit holders count
                as <strong className="text-text-primary">foreign employees</strong>. Both direct hires and
                contract workers must be included.
              </p>
              <div className="bg-surface rounded-lg p-4">
                <p className="text-xs text-text-secondary mb-2">Example</p>
                <p className="text-sm text-text-secondary">
                  If your project has <strong className="text-text-primary">200 total workers</strong> and
                  <strong className="text-text-primary"> 150 are Guyanese nationals</strong>, your employment
                  local content rate is <strong className="text-accent">75%</strong>.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-6 bg-card rounded-xl border border-accent/30 p-6"
          >
            <p className="text-sm text-text-secondary leading-relaxed">
              <strong className="text-accent">Important:</strong> These rates must be calculated and reported
              for each of the 40 reserved service categories individually, not just as aggregate totals.
              The Secretariat reviews category-level data to identify areas where local participation
              can be improved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Happens During a Secretariat Audit */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <ClipboardCheck className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              What Happens During a Secretariat Audit
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              The Local Content Secretariat has the power to audit any entity subject to the Act.
              Here is what to expect if your company receives an audit notice.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Formal Notice",
                description:
                  "The Secretariat issues a written notice of audit, typically providing 14\u201330 days advance notice. The notice specifies the reporting periods under review and the scope of the audit.",
              },
              {
                step: "02",
                title: "Document Request",
                description:
                  "You will receive a detailed document request list. This typically includes payroll records, procurement invoices, contracts with subcontractors, proof of payments to local suppliers, employee nationality documentation, and training records. All documents must be provided within the timeframe specified.",
              },
              {
                step: "03",
                title: "On-Site or Desk Review",
                description:
                  "The Secretariat\u2019s compliance team reviews your submitted documents against the figures reported in your half-yearly and annual reports. They verify local vs. foreign spend classifications, employee nationality counts, and service category allocations. Some audits are conducted entirely by desk review; others involve on-site visits.",
              },
              {
                step: "04",
                title: "Preliminary Findings",
                description:
                  "After the review, the Secretariat issues preliminary findings identifying any discrepancies, misclassifications, or areas of concern. You are given an opportunity to respond to these findings and provide additional documentation or explanations.",
              },
              {
                step: "05",
                title: "Final Report & Follow-Up",
                description:
                  "The Secretariat issues a final audit report with recommendations and, if applicable, corrective actions required. Significant discrepancies may result in penalties under Section 41 of the Act. Companies are expected to implement corrective measures and demonstrate improved compliance in subsequent filings.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card rounded-xl border border-border p-6 flex gap-6"
              >
                <div className="shrink-0">
                  <span className="font-display text-2xl text-accent">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Filing Mistakes */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <AlertTriangle className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              Common Filing Mistakes
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              After reviewing hundreds of LCA filings, these are the most frequent errors that
              trigger revision requests or penalties from the Secretariat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((mistake) => (
              <motion.div
                key={mistake.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card rounded-xl border border-border p-5"
              >
                <h3 className="font-display text-sm text-text-primary mb-2 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {mistake.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed pl-6">{mistake.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register on the Local Content Register */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <UserPlus className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              How to Register on the Local Content Register
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Registration on the Local Content Register is a prerequisite for being recognized
              as a local content provider. Here is the step-by-step process.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Confirm Eligibility",
                description:
                  "Your company must be incorporated in Guyana with at least 51% Guyanese ownership. For sole proprietors, the owner must be a Guyanese national. Joint ventures must demonstrate majority Guyanese control. Foreign companies are not eligible for the Register but are still subject to LCA reporting obligations.",
              },
              {
                step: "2",
                title: "Gather Required Documents",
                description:
                  "Prepare your Certificate of Incorporation (or Business Registration), Tax Identification Number (TIN), valid Tax Compliance Certificate, NIS compliance letter, proof of Guyanese ownership (share register, partnership agreement), company profile detailing services offered, and CVs of key personnel.",
              },
              {
                step: "3",
                title: "Complete the Application Form",
                description:
                  "Download the registration application form from the Local Content Secretariat. Complete all sections including company details, ownership structure, service categories (from the 40 reserved categories), and capacity information.",
              },
              {
                step: "4",
                title: "Submit to the Secretariat",
                description:
                  "Submit your completed application and supporting documents to the Local Content Secretariat at localcontent@nre.gov.gy or in person at the Ministry of Natural Resources in Georgetown. Ensure all documents are certified copies where required.",
              },
              {
                step: "5",
                title: "Verification & Approval",
                description:
                  "The Secretariat reviews your application, verifies ownership documentation, and may conduct site visits. Processing typically takes 2\u20134 weeks. Once approved, your company is added to the Register and assigned a registration number.",
              },
              {
                step: "6",
                title: "Maintain Your Registration",
                description:
                  "Registration must be renewed annually. Keep your Tax Compliance Certificate and NIS compliance current. Update the Secretariat promptly if there are changes to ownership structure, services offered, or contact information.",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                className="bg-card rounded-xl border border-border p-6 flex gap-6"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display text-accent">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LCA Compliance for Foreign Contractors */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <Globe className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
              LCA Compliance for Foreign Contractors
            </h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Foreign companies operating in Guyana&apos;s petroleum sector face unique compliance
              challenges. Here is what non-Guyanese entities need to know.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-3">You Must Still File</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Foreign companies are not exempt from LCA reporting. If you are a contractor, subcontractor,
                or licensee in Guyana&apos;s petroleum sector, you must submit all 5 mandatory reports regardless
                of where your company is incorporated. Many foreign companies mistakenly believe that only
                their Guyanese subsidiary or joint venture partner needs to file &mdash; this is incorrect.
                Every entity in the petroleum supply chain has independent filing obligations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-3">First Consideration Obligations</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                The Act requires that foreign contractors give &ldquo;first consideration&rdquo; to Guyanese nationals
                for employment and to registered Guyanese companies for the supply of goods and services.
                This does not mean you must always choose a Guyanese provider, but you must demonstrate that
                you evaluated local options first. Your reports must include narrative explanations for why
                foreign suppliers were selected over local alternatives in each service category.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-3">Succession Planning</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Foreign companies bringing expatriate workers into Guyana must demonstrate succession planning &mdash;
                a documented plan showing how each expatriate position will eventually be transitioned to a
                Guyanese national. This includes specific timelines, training programs, and milestones.
                The Secretariat reviews succession plans as part of both half-yearly reports and annual plans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-3">Technology Transfer Requirements</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Foreign contractors are expected to contribute to the development of local capacity through
                technology transfer. This includes training programs, knowledge sharing, mentorship of Guyanese
                employees, and investment in local educational institutions. Your Master Plan and Annual Plans
                must include specific technology transfer commitments with measurable targets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display text-lg text-text-primary mb-3">Joint Venture Considerations</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Many foreign companies operate through joint ventures with Guyanese partners. Both the JV entity
                and the foreign parent may have independent filing obligations depending on their role in
                petroleum operations. Ensure that reporting responsibilities are clearly allocated in your
                JV agreement and that both parties understand their individual obligations under the Act.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Stay Compliant. Stay Focused on Operations."
        body="LCA Desk automates your Local Content Act reporting so you can focus on what you do best. From data collection to Secretariat-ready reports, we handle the compliance burden."
        primaryCTA={{ label: "Start with LCA Desk", href: "/lcadesk" }}
        secondaryCTA={{ label: "Book a Consultation", href: "/contact" }}
      />
    </>
  );
}
