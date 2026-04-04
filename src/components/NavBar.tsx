"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/services", label: "Services" },
  { href: "/software", label: "Software" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-surface/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-accent text-xl">&#9679;</span>
          <span className="font-display text-sm tracking-[0.25em] uppercase text-text-primary">
            Stabroek Advisory
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-surface border-b border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-md bg-accent px-5 py-2 text-sm font-medium text-white text-center hover:bg-accent-hover transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
