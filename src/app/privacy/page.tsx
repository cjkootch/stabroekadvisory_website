import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stabroek Advisory",
  description: "Privacy Policy for Stabroek Advisory LLC and LCA Desk software.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-text-muted mb-12">Effective Date: April 1, 2026</p>

        <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">1. Introduction</h2>
            <p>
              Stabroek Advisory LLC (&quot;Stabroek Advisory,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting
              the privacy and security of your personal information. This Privacy Policy describes how we collect,
              use, disclose, and safeguard information when you visit our website at stabroekadvisory.com, use our
              LCA Desk software platform at lcadesk.com, or engage our advisory services.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">2. Information We Collect</h2>
            <p className="mb-3"><strong className="text-text-primary">Information You Provide Directly:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact information (name, email address, phone number, company name)</li>
              <li>Company details (company type, registration information, contract references)</li>
              <li>Employment data submitted through LCA Desk (job titles, nationalities, remuneration data)</li>
              <li>Procurement and expenditure data submitted for compliance reporting</li>
              <li>Capacity development records</li>
              <li>Communications with us (emails, form submissions, call recordings if disclosed)</li>
              <li>Billing and payment information</li>
            </ul>
            <p className="mt-3 mb-3"><strong className="text-text-primary">Information Collected Automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address and approximate geographic location</li>
              <li>Browser type, device type, and operating system</li>
              <li>Pages visited, time spent on pages, and navigation patterns</li>
              <li>Referring URL and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and maintain our services, including LCA Desk software and managed compliance reporting</li>
              <li>Prepare and submit Local Content Act compliance reports on your behalf</li>
              <li>Process transactions and send related billing information</li>
              <li>Respond to inquiries, provide customer support, and fulfill service requests</li>
              <li>Send administrative communications including deadline reminders and filing updates</li>
              <li>Improve our website, software, and services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Protect against fraud, unauthorized access, and other security threats</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">4. Data Sharing and Disclosure</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-text-primary">The Local Content Secretariat</strong> — only when submitting compliance reports on your behalf as part of our managed service, and only with your authorization</li>
              <li><strong className="text-text-primary">Service providers</strong> — trusted third-party vendors who assist us in operating our business (hosting, payment processing, email delivery), bound by confidentiality obligations</li>
              <li><strong className="text-text-primary">Legal authorities</strong> — when required by law, regulation, legal process, or governmental request</li>
              <li><strong className="text-text-primary">Business transfers</strong> — in connection with a merger, acquisition, or sale of assets, with appropriate notice</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">5. Data Security</h2>
            <p>
              We implement commercially reasonable administrative, technical, and physical safeguards to protect
              your information against unauthorized access, alteration, disclosure, or destruction. All data
              transmitted through LCA Desk is encrypted in transit using TLS 1.2 or higher. Data at rest is
              encrypted using AES-256 encryption. Access to client data is restricted to authorized personnel
              on a need-to-know basis.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes for which
              it was collected, comply with our legal obligations, resolve disputes, and enforce our agreements.
              Compliance report data is retained for a minimum of seven (7) years to support audit and
              regulatory requirements under the Local Content Act. You may request deletion of your account
              data at any time, subject to our legal retention obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">7. Cookies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze
              site traffic, and understand usage patterns. You can control cookie settings through your
              browser preferences. Disabling cookies may limit certain features of our website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for
              the privacy practices or content of those third parties. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">9. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at info@stabroekadvisory.com.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware that we have collected information from
              a child, we will take steps to delete it promptly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page
              with an updated effective date. Your continued use of our services after any changes constitutes
              acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg text-text-primary mb-3">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
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
