"use client";

import { useState, FormEvent } from "react";

const companyTypes = [
  "Contractor",
  "Sub-Contractor",
  "Licensee",
  "Guyanese Supplier",
  "International Company",
  "Other",
];

const serviceInterests = [
  "LCA Half-Yearly Report",
  "Annual Local Content Plan",
  "Master Plan",
  "Monthly Retainer",
  "LCA Desk Software",
  "US Market Entry Advisory",
  "General Inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Full name is required";
    if (!form.get("company")) errs.company = "Company name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address";
    if (!form.get("companyType")) errs.companyType = "Please select a company type";
    if (!form.get("service")) errs.service = "Please select a service interest";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    }
  };

  if (submitted) {
    return (
      <div className="bg-card border border-accent/30 rounded-lg p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-accent text-xl">&#10003;</span>
        </div>
        <h3 className="font-display text-xl text-text-primary mb-2">Message Sent</h3>
        <p className="text-sm text-text-secondary">
          Thank you for reaching out. We&apos;ll respond within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Full Name" name="name" error={errors.name} />
      <Field label="Company Name" name="company" error={errors.company} />
      <Field label="Email Address" name="email" type="email" error={errors.email} />

      <div>
        <label className="block text-sm text-text-secondary mb-1.5">Company Type *</label>
        <select
          name="companyType"
          className="w-full rounded-md bg-card border border-border px-4 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select company type
          </option>
          {companyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.companyType && (
          <p className="text-xs text-red-400 mt-1">{errors.companyType}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1.5">Service Interest *</label>
        <select
          name="service"
          className="w-full rounded-md bg-card border border-border px-4 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select service interest
          </option>
          {serviceInterests.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-red-400 mt-1">{errors.service}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-text-secondary mb-1.5">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md bg-card border border-border px-4 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none resize-none"
          placeholder="Tell us about your compliance needs..."
        />
      </div>

      {errors.form && (
        <p className="text-xs text-red-400">{errors.form}</p>
      )}

      <button
        type="submit"
        className="w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg hover:bg-accent-hover hover:scale-[1.02] transition-all"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-text-secondary mb-1.5">{label} *</label>
      <input
        type={type}
        name={name}
        className={`w-full rounded-md bg-card border px-4 py-2.5 text-sm text-text-primary focus:outline-none ${
          error ? "border-red-400 focus:border-red-400" : "border-border focus:border-accent"
        }`}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
