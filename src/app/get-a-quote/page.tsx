"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, User, Home, Wrench, MessageSquare, ChevronRight, ChevronLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MV_TOWNS, SERVICE_CATEGORIES, PROPERTY_TYPES } from "@/lib/data";

const STEPS = [
  { label: "Contact", icon: User },
  { label: "Property", icon: Home },
  { label: "Services", icon: Wrench },
  { label: "Details", icon: MessageSquare },
] as const;

function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: searchParams.get("email") || (typeof window !== "undefined" ? sessionStorage.getItem("mv_lead_email") || "" : ""),
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
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function blur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function fieldError(field: string): string | null {
    if (!touched[field]) return null;
    const v = form[field as keyof typeof form];
    if (field === "firstName" && !v) return "First name is required";
    if (field === "lastName" && !v) return "Last name is required";
    if (field === "email") {
      if (!v) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v as string)) return "Please enter a valid email";
    }
    if (field === "phone" && v && !/^[\d\-\s\+\(\)]+$/.test(v as string)) return "Please enter a valid phone number";
    if (field === "town" && !v) return "Please select a town";
    return null;
  }

  function toggleService(svc: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc],
    }));
  }

  function canAdvance(): boolean {
    if (step === 0) return !!(form.firstName && form.lastName && form.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email));
    if (step === 1) return !!form.town;
    return true;
  }

  function nextStep() {
    if (canAdvance() && step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
          <Breadcrumbs dark items={[{ label: "Get a Quote" }]} />
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
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-8" role="navigation" aria-label="Form progress">
              {STEPS.map(({ label, icon: Icon }, i) => (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <button
                    type="button"
                    onClick={() => { if (i < step || (i === step + 1 && canAdvance())) setStep(i); }}
                    className={`flex flex-col items-center gap-1.5 transition-colors ${
                      i <= step ? "text-gold-600" : "text-navy-300"
                    }`}
                    aria-current={i === step ? "step" : undefined}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      i < step ? "bg-gold-500 text-white" : i === step ? "bg-gold-50 border-2 border-gold-500 text-gold-700" : "bg-navy-50 border border-navy-200 text-navy-400"
                    }`}>
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium hidden sm:block">{label}</span>
                  </button>
                  {i < 3 && (
                    <div className={`flex-1 h-0.5 mx-2 rounded transition-colors ${i < step ? "bg-gold-400" : "bg-navy-100"}`} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-navy-400 mb-6">Step {step + 1} of 4 · Under 2 minutes</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <fieldset disabled={submitting} aria-busy={submitting} className="space-y-8">
              {/* Contact Information */}
              <fieldset className={step === 0 ? "" : "hidden"}>
                <legend className="text-xl font-serif font-bold text-navy-900 mb-4">
                  Your Information <span className="sr-only">(fields marked with * are required)</span>
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
                      onBlur={() => blur("firstName")}
                      aria-invalid={!!fieldError("firstName")}
                      aria-describedby={fieldError("firstName") ? "firstName-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${fieldError("firstName") ? "border-red-300" : "border-navy-200"}`}
                    />
                    {fieldError("firstName") && <p id="firstName-error" role="alert" className="mt-1 text-xs text-red-500">{fieldError("firstName")}</p>}
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
                      onBlur={() => blur("lastName")}
                      aria-invalid={!!fieldError("lastName")}
                      aria-describedby={fieldError("lastName") ? "lastName-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${fieldError("lastName") ? "border-red-300" : "border-navy-200"}`}
                    />
                    {fieldError("lastName") && <p id="lastName-error" role="alert" className="mt-1 text-xs text-red-500">{fieldError("lastName")}</p>}
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
                      onBlur={() => blur("email")}
                      aria-invalid={!!fieldError("email")}
                      aria-describedby={fieldError("email") ? "email-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${fieldError("email") ? "border-red-300" : "border-navy-200"}`}
                    />
                    {fieldError("email") && <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">{fieldError("email")}</p>}
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
                      onBlur={() => blur("phone")}
                      aria-invalid={!!fieldError("phone")}
                      aria-describedby={fieldError("phone") ? "phone-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${fieldError("phone") ? "border-red-300" : "border-navy-200"}`}
                    />
                    {fieldError("phone") && <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500">{fieldError("phone")}</p>}
                  </div>
                </div>
              </fieldset>

              {/* Property Details */}
              <fieldset className={step === 1 ? "" : "hidden"}>
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
                      onBlur={() => blur("town")}
                      aria-invalid={!!fieldError("town")}
                      aria-describedby={fieldError("town") ? "town-error" : undefined}
                      className={`w-full rounded-lg border px-4 py-2.5 text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent ${fieldError("town") ? "border-red-300" : "border-navy-200"}`}
                    >
                      <option value="">Select a town</option>
                      {MV_TOWNS.map((town) => (
                        <option key={town} value={town}>
                          {town}
                        </option>
                      ))}
                    </select>
                    {fieldError("town") && <p id="town-error" role="alert" className="mt-1 text-xs text-red-500">{fieldError("town")}</p>}
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
              <fieldset className={step === 2 ? "" : "hidden"}>
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
              <fieldset className={step === 3 ? "" : "hidden"}>
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
                <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                  {error}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-outline flex items-center gap-2 px-6"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canAdvance()}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    aria-busy={submitting}
                    className="btn-primary flex-1 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit & Get Matched Free"
                    )}
                  </button>
                )}
              </div>

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
