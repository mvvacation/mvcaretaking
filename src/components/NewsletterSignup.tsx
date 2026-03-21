"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSignup({ variant = "default" }: { variant?: "default" | "inline" | "blog" }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      // Store newsletter signup separately from lead form
      const existing = JSON.parse(localStorage.getItem("mv_newsletter_emails") || "[]");
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem("mv_newsletter_emails", JSON.stringify(existing));
      }
      setSubscribed(true);
    }
  }

  if (subscribed) {
    return (
      <div className="flex items-center gap-3 justify-center text-sm">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" aria-hidden="true" />
        <span className={variant === "blog" ? "text-navy-700" : "text-white"}>
          You&apos;re subscribed! We&apos;ll send MV caretaking tips to your inbox.
        </span>
      </div>
    );
  }

  if (variant === "blog") {
    return (
      <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-gold-600" aria-hidden="true" />
          <h3 className="text-lg font-serif font-bold text-navy-900">
            MV Caretaking Newsletter
          </h3>
        </div>
        <p className="text-sm text-navy-600 mb-4">
          Get expert tips on protecting your Martha&apos;s Vineyard property — seasonal checklists, storm prep guides, and cost-saving strategies. Free, no spam.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            aria-label="Email for newsletter"
            className="flex-1 px-4 py-2.5 rounded-lg text-navy-900 bg-white border border-navy-200 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm"
          />
          <button type="submit" className="btn-primary whitespace-nowrap text-sm px-5">
            Subscribe
          </button>
        </form>
        <p className="mt-2 text-xs text-navy-400">Join 500+ MV homeowners. Unsubscribe anytime.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for MV tips"
        required
        aria-label="Email for newsletter"
        className="flex-1 px-5 py-3.5 rounded-xl text-navy-900 bg-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-white/20 text-sm"
      />
      <button type="submit" className="btn-primary whitespace-nowrap px-6">
        Subscribe
      </button>
    </form>
  );
}
