import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Users, MapPin, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — MVCaretaking",
  description:
    "MVCaretaking is Martha's Vineyard's free caretaker matching service. We connect second-home owners with vetted, bonded, year-round island professionals across all 6 MV towns.",
  alternates: { canonical: "https://mvcaretaking.com/about" },
};

const values = [
  {
    icon: Shield,
    title: "Trust First",
    description:
      "Every provider in our network is verified for bonding, insurance, and year-round island residency. We never list a provider we wouldn't trust with our own property.",
  },
  {
    icon: Users,
    title: "Island Knowledge",
    description:
      "Martha's Vineyard isn't like anywhere else. We match you with caretakers who understand your town's unique challenges — from Chilmark's remote estates to Oak Bluffs' historic cottages.",
  },
  {
    icon: MapPin,
    title: "All 6 Towns",
    description:
      "Edgartown, Oak Bluffs, Vineyard Haven, Chilmark, West Tisbury, Aquinnah. Our network covers every corner of the island with professionals who live and work here year-round.",
  },
  {
    icon: Award,
    title: "Free & Transparent",
    description:
      "Our matching service is completely free to homeowners. No hidden fees, no commissions on your caretaking contract, no obligation. We publish real pricing data so you can make informed decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <Breadcrumbs dark items={[{ label: "About" }]} />
          <p className="section-label">About Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            Protecting Martha&apos;s Vineyard Homes, One Match at a Time
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            MVCaretaking is a free matching service that connects Martha&apos;s
            Vineyard second-home owners with trusted, vetted caretaking
            professionals — because a multi-million dollar property deserves
            more than hoping for the best.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
              Why We Built This
            </h2>
            <div className="space-y-5 text-navy-700 leading-relaxed">
              <p>
                Martha&apos;s Vineyard has over 10,700 seasonal homes — 56–63%
                of all housing on the island. The average home sells for $2.6&nbsp;million.
                Most sit unattended for 8–10 months per year.
              </p>
              <p>
                Finding a reliable caretaker used to mean asking around at the
                general store or hoping a neighbor knew someone. For an island
                where a single frozen pipe burst can cause $140,000 in damage,
                that&apos;s not good enough.
              </p>
              <p>
                We created MVCaretaking to solve this problem: a transparent,
                data-driven platform that matches homeowners with verified
                professionals based on town, property type, and specific needs.
                No guesswork, no risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-50/50">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif font-bold text-navy-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-navy-100/50"
              >
                <v.icon
                  className="w-8 h-8 text-gold-500 mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-navy-600 leading-relaxed text-sm">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Network */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
              Part of MV&apos;s Largest Digital Network
            </h2>
            <div className="space-y-5 text-navy-700 leading-relaxed">
              <p>
                MVCaretaking is part of a growing ecosystem of Martha&apos;s
                Vineyard digital services, including{" "}
                <a
                  href="https://mvvacation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
                >
                  MVVacation.com
                </a>
                ,{" "}
                <a
                  href="https://mvrestaurants.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
                >
                  MVRestaurants.com
                </a>
                , and{" "}
                <a
                  href="https://mvboats.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-600 underline underline-offset-2 hover:text-gold-700"
                >
                  MVBoats.com
                </a>
                .
              </p>
              <p>
                Together, these platforms serve thousands of seasonal and
                year-round island residents with trusted local services and
                information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Protect Your MV Property?
          </h2>
          <p className="text-navy-300 max-w-xl mx-auto mb-8">
            Get matched with a trusted, vetted caretaker in less than 2&nbsp;minutes
            — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-quote" className="btn-primary">
              Get a Free Quote →
            </Link>
            <Link
              href="/how-it-works"
              className="btn-outline border-white/20 text-white hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
