import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Call", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Half-Yearly Reports", href: "/services" },
      { label: "Annual Plans", href: "/services" },
      { label: "Master Plans", href: "/services" },
      { label: "Monthly Retainer", href: "/services" },
      { label: "US Market Entry", href: "/services" },
    ],
  },
  {
    title: "Software",
    links: [
      { label: "LCA Desk", href: "/software" },
      { label: "Pricing", href: "/software#pricing" },
      { label: "Request a Demo", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "LCA Filing Calendar", href: "/services" },
      { label: "LCA Act Overview", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent text-xl">&#9679;</span>
              <span className="font-display text-sm tracking-[0.25em] uppercase text-text-primary">
                Stabroek Advisory
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Compliance technology and advisory services for Guyana&apos;s oil and gas sector.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-text-muted hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-medium uppercase tracking-wider text-text-muted mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-text-muted text-center mb-2">
            &copy; 2026 Stabroek Advisory LLC &middot; Houston, Texas &middot; stabroekadvisory.com
          </p>
          <p className="text-xs text-text-muted text-center italic max-w-2xl mx-auto">
            Stabroek Advisory is an independent advisory firm. Not affiliated with the Government of
            Guyana, the Local Content Secretariat, or any petroleum operator.
          </p>
        </div>
      </div>
    </footer>
  );
}
