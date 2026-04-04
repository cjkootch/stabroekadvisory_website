"use client";

import ContactForm from "@/components/ContactForm";
import GeometricBg from "@/components/GeometricBg";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Link2 } from "lucide-react";

export default function ContactContent() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-surface">
        <GeometricBg variant="grid" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Whether you need compliance support, want to try LCA Desk, or are exploring US market
              entry — we&apos;re here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">Email</h3>
                  <p className="text-sm text-text-secondary">info@stabroekadvisory.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">Locations</h3>
                  <p className="text-sm text-text-secondary">Houston, Texas (HQ)</p>
                  <p className="text-sm text-text-secondary">Georgetown, Guyana (Representative)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">Office Hours</h3>
                  <p className="text-sm text-text-secondary">Monday–Friday, 8am–6pm CST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Link2 size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary mb-1">LinkedIn</h3>
                  <p className="text-sm text-text-secondary">Follow Stabroek Advisory</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-sm text-text-secondary leading-relaxed">
                  All inquiries receive a response within <span className="text-accent font-medium">1 business day</span>.
                  For urgent compliance matters approaching a filing deadline, please note this in your message.
                </p>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="py-20 px-6 bg-surface">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl text-text-primary mb-4">
            Prefer to talk? Book a call directly.
          </h2>
          <p className="text-sm text-text-secondary mb-8">
            Available for Houston timezone, video call or phone.
          </p>
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <p className="text-sm text-text-muted mb-4">Calendly scheduling embed</p>
            <a
              href="YOUR_CALENDLY_LINK"
              className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
