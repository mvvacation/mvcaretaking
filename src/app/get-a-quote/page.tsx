"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { MV_TOWNS, SERVICE_CATEGORIES, PROPERTY_TYPES } from "@/lib/data";

function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: searchParams.get("email") || "",
    phone: "",
    town: "",
    propertyType: "",
    services: [] as string[],
    message: "",
    howHeard: "",
    website_url: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleService(svc: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          servicesNeeded: form.services.join(", "),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Free Matching</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            Get Matched With a Trusted MV Caretaker
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Tell us about your property and we&apos;ll connect you with vetted
            caretaking professionals — free and no obligation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <fieldset>
                <legend className="text-xl font-serif font-bold text-navy-900 mb-4">
                  Your Information
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </fieldset>

              {/* Property Details */}
              <fieldset>
                <legend className="text-xl font-serif font-bold text-navy-900 mb-4">
                  Property Details
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="town"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Town *
                    </label>
                    <select
                      id="town"
                      required
                      value={form.town}
                      onChange={(e) => update("town", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    >
                      <option value="">Select a town</option>
                      {MV_TOWNS.map((town) => (
                        <option key={town} value={town}>
                          {town}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      value={form.propertyType}
                      onChange={(e) => update("propertyType", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Services Needed */}
              <fieldset>
                <legend className="text-xl font-serif font-bold text-navy-900 mb-4">
                  Services Needed
                </legend>
                <p className="text-sm text-navy-500 mb-3">
                  Select all that apply:
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {SERVICE_CATEGORIES.map((svc) => (
                    <label
                      key={svc}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        form.services.includes(svc)
                          ? "bg-gold-50 border-gold-300"
                          : "bg-white border-navy-200 hover:border-navy-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.services.includes(svc)}
                        onChange={() => toggleService(svc)}
                        className="w-4 h-4 rounded border-navy-300 text-gold-500 focus:ring-gold-400"
                      />
                      <span className="text-sm text-navy-700">{svc}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Additional Details */}
              <fieldset>
                <legend className="text-xl font-serif font-bold text-navy-900 mb-4">
                  Additional Details
                </legend>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      Tell us more about your property and needs
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="e.g., 4-bedroom waterfront home, vacant Oct-May, need weekly inspections and storm response..."
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="howHeard"
                      className="block text-sm font-medium text-navy-700 mb-1"
                    >
                      How did you hear about us?
                    </label>
                    <select
                      id="howHeard"
                      value={form.howHeard}
                      onChange={(e) => update("howHeard", e.target.value)}
                      className="w-full rounded-lg border border-navy-200 px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    >
                      <option value="">Select one</option>
                      <option value="google">Google Search</option>
                      <option value="mvvacation">MVVacation.com</option>
                      <option value="mvrestaurants">MVRestaurants.com</option>
                      <option value="referral">Friend / Referral</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Honeypot - hidden from real users */}
              <input
                type="text"
                name="website_url"
                value={form.website_url}
                onChange={(e) => update("website_url", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                aria-hidden="true"
              />

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Submit & Get Matched Free"}
              </button>

              <p className="text-xs text-navy-400 text-center">
                Your information is kept private and only shared with matched
                caretakers. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default function GetAQuotePage() {
  return (
    <Suspense
      fallback={
        <div className="section-padding text-center text-navy-500">
          Loading...
        </div>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}
