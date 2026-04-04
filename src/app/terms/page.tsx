import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Stabroek Advisory",
  description: "Terms and Conditions for Stabroek Advisory LLC services and LCA Desk software.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-text-primary mb-2">Terms and Conditions</h1>
        <p className="text-sm text-text-muted mb-12">Effective Date: April 1, 2026</p>

        <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you
              (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) and Stabroek Advisory LLC (&quot;Stabroek Advisory,&quot; &quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;), a limited liability company organized under the laws of the State of Texas,
              United States. By accessing our website at stabroekadvisory.com, using our LCA Desk software
              platform, or engaging our advisory and compliance services, you agree to be bound by these Terms.
              If you do not agree, you must not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">2. Services</h2>
            <p className="mb-3">Stabroek Advisory provides the following services:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-text-primary">LCA Desk Software</strong> — A cloud-based compliance software platform for managing mandatory Local Content Act submissions in Guyana&apos;s oil and gas sector</li>
              <li><strong className="text-text-primary">Managed Compliance Reporting</strong> — Preparation and submission of Half-Yearly Reports, Annual Local Content Plans, Master Plans, and Performance Reports to the Local Content Secretariat</li>
              <li><strong className="text-text-primary">US Market Entry Advisory</strong> — Supplier sourcing, freight coordination, export documentation, and trade finance advisory for companies operating in Guyana&apos;s petroleum sector</li>
              <li><strong className="text-text-primary">LCA Registration Support</strong> — Assistance with Local Content Register applications and Secretariat liaison</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">3. Client Responsibilities</h2>
            <p className="mb-3">As a client of Stabroek Advisory, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide accurate, complete, and timely information required for compliance filings and advisory services</li>
              <li>Respond to data requests within the timeframes communicated by Stabroek Advisory to meet filing deadlines</li>
              <li>Review all reports and submissions prepared by Stabroek Advisory before filing, where applicable</li>
              <li>Maintain the confidentiality of your LCA Desk account credentials</li>
              <li>Comply with all applicable laws, including the Local Content Act of Guyana (2021) and any amendments thereto</li>
              <li>Notify us promptly of any changes to your company information, contracts, or reporting obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">4. Fees and Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fees for services are as quoted in your service agreement, proposal, or as displayed on our pricing page at the time of purchase</li>
              <li>LCA Desk software subscriptions are billed monthly or annually in advance. Annual subscriptions receive a 15% discount</li>
              <li>Managed service retainers are billed monthly in advance</li>
              <li>Per-report and project fees are invoiced upon engagement, with payment due within thirty (30) days of invoice date</li>
              <li>All fees are quoted in United States Dollars (USD) unless otherwise stated</li>
              <li>Late payments are subject to a charge of 1.5% per month on the outstanding balance, or the maximum rate permitted by law, whichever is lower</li>
              <li>We reserve the right to suspend services for accounts with balances overdue by more than thirty (30) days</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">5. LCA Desk Software Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>LCA Desk is provided as a Software-as-a-Service (SaaS) platform. You are granted a limited, non-exclusive, non-transferable license to access and use the platform during your active subscription period</li>
              <li>You retain ownership of all data you input into LCA Desk. We do not claim ownership of your compliance data</li>
              <li>You may export your data at any time during your active subscription</li>
              <li>Upon termination of your subscription, your data will be retained for thirty (30) days, after which it may be permanently deleted</li>
              <li>You may not reverse-engineer, decompile, or attempt to extract the source code of LCA Desk</li>
              <li>You may not sublicense, resell, or share your LCA Desk account with third parties without our written consent</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">6. Managed Service Terms</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stabroek Advisory will prepare compliance reports based on the data and information you provide. The accuracy of filings depends on the accuracy and completeness of the data you supply</li>
              <li>We will submit reports to the Local Content Secretariat on your behalf only upon your express authorization</li>
              <li>We will use commercially reasonable efforts to meet filing deadlines, provided you deliver the required data within the timeframes we communicate</li>
              <li>Stabroek Advisory is not responsible for penalties, fines, or adverse consequences resulting from inaccurate, incomplete, or late data provided by you</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">7. Confidentiality</h2>
            <p>
              We treat all client data — including payroll records, procurement figures, supplier information,
              and compliance filings — as strictly confidential. We will not disclose your confidential information
              to any third party except as required to perform our services (e.g., submission to the Local Content
              Secretariat with your authorization), as required by law, or with your prior written consent.
              This confidentiality obligation survives termination of our engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">8. Limitation of Liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stabroek Advisory&apos;s total liability for any claim arising from or related to our services shall not exceed the total fees paid by you in the twelve (12) months preceding the claim</li>
              <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities</li>
              <li>We are not liable for penalties, fines, or sanctions imposed by the Local Content Secretariat or any governmental authority, except where directly caused by our gross negligence or willful misconduct</li>
              <li>We do not guarantee any particular outcome with respect to Local Content Act compliance, bid evaluations, or regulatory reviews</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">9. Disclaimer of Warranties</h2>
            <p>
              Our services, including LCA Desk software, are provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, whether express or implied, including but not limited to implied
              warranties of merchantability, fitness for a particular purpose, or non-infringement. We do
              not warrant that our software will be uninterrupted, error-free, or free of harmful components.
              While we build our reports and software based on the official Local Content Secretariat guidelines,
              we do not guarantee acceptance of any submission by the Secretariat.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Stabroek Advisory and its officers, directors,
              employees, and agents from any claims, damages, losses, liabilities, and expenses (including
              reasonable attorneys&apos; fees) arising from your use of our services, your breach of these Terms,
              or your violation of any applicable law or regulation.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">11. Termination</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Either party may terminate a managed service engagement with thirty (30) days&apos; written notice</li>
              <li>LCA Desk subscriptions may be cancelled at any time. Monthly subscriptions terminate at the end of the current billing period. Annual subscriptions are non-refundable but will remain active through the end of the paid term</li>
              <li>We may suspend or terminate your access immediately if you breach these Terms, fail to pay fees when due, or use our services for any unlawful purpose</li>
              <li>Upon termination, your right to access LCA Desk ceases. You may request export of your data within thirty (30) days of termination</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">12. Intellectual Property</h2>
            <p>
              All content on our website, the LCA Desk software, and any materials we produce (excluding
              your data) are the intellectual property of Stabroek Advisory LLC. This includes but is not
              limited to our brand name, logo, software code, report templates, website design, and written
              content. You may not copy, reproduce, distribute, or create derivative works from our
              intellectual property without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">13. Independent Advisory Firm</h2>
            <p>
              Stabroek Advisory is an independent advisory firm. We are not affiliated with, endorsed by,
              or acting on behalf of the Government of Guyana, the Local Content Secretariat, the Ministry
              of Natural Resources, ExxonMobil, or any petroleum operator or licensee. Our services
              constitute advisory and compliance support only and do not constitute legal advice.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">14. Governing Law and Disputes</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Texas, United States, without regard to its conflict of laws provisions. Any dispute arising
              from or related to these Terms or our services shall be resolved through binding arbitration
              administered in Houston, Texas, in accordance with the rules of the American Arbitration
              Association. Each party shall bear its own costs and attorneys&apos; fees, unless the arbitrator
              determines otherwise.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">15. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page
              with an updated effective date. Continued use of our services after any modification
              constitutes acceptance of the revised Terms. For material changes, we will make reasonable
              efforts to notify active clients via email.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">16. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <div className="mt-3 bg-surface border border-border rounded-lg p-4">
              <p className="text-text-primary font-medium">Stabroek Advisory LLC</p>
              <p>Houston, Texas, United States</p>
              <p>Email: info@stabroekadvisory.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
