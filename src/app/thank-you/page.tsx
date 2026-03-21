import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, Clock, Shield } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Thank You — Your Request Was Submitted",
  description:
    "Your caretaker matching inquiry has been submitted. We'll be in touch within 24 hours.",
  alternates: { canonical: "https://mvcaretaking.com/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Dark Hero for header visibility */}
      <section className="bg-navy-950 text-white section-padding pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center max-w-2xl mx-auto relative">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-4xl mb-6">
            <Check className="w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold">
            Thank You! Your Request Is In.
          </h1>

          <p className="mt-6 text-lg text-navy-300 leading-relaxed">
            We&apos;ve received your inquiry and our team is already working on
            matching you with the best Martha&apos;s Vineyard caretakers for your
            property.
          </p>
        </div>
      </section>

      <section className="section-padding pt-12">
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <div className="bg-gold-50/50 rounded-2xl p-6 border border-gold-200/50 text-left">
            <h2 className="font-serif font-semibold text-navy-900 mb-3">
              What Happens Next:
            </h2>
            <ol className="space-y-3 text-sm text-navy-700">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold flex-shrink-0">
                  1
                </span>
                <span>
                  We review your submission within 24 hours and identify the best
                  matches from our vetted provider network.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold flex-shrink-0">
                  2
                </span>
                <span>
                  Matched caretakers will contact you directly with personalized
                  proposals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold flex-shrink-0">
                  3
                </span>
                <span>
                  You compare, ask questions, and choose the partner that fits
                  best. No pressure, no obligation.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/caretakers" className="btn-primary">
              Browse Caretakers
            </Link>
            <Link href="/blog" className="btn-outline">
              Read Our Blog
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2 p-4 bg-navy-50 rounded-xl">
              <Clock className="w-5 h-5 text-gold-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-navy-900">Under 24 hrs</span>
              <span className="text-xs text-navy-500">Average response time</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-navy-50 rounded-xl">
              <Shield className="w-5 h-5 text-gold-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-navy-900">100% Vetted</span>
              <span className="text-xs text-navy-500">Bonded & insured providers</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-navy-50 rounded-xl">
              <Star className="w-5 h-5 text-gold-600" aria-hidden="true" />
              <span className="text-sm font-semibold text-navy-900">All 6 Towns</span>
              <span className="text-xs text-navy-500">Full MV island coverage</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-10">
            <NewsletterSignup variant="blog" />
          </div>

          <p className="mt-8 text-sm text-navy-400">
            Questions? Reply to the confirmation email we sent, or just submit
            another inquiry.
          </p>
        </div>
      </section>
    </>
  );
}
