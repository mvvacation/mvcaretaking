import type { Metadata } from "next";
import Link from "next/link";
import { MARKET_STATS, PRICING_DATA } from "@/lib/data";
import { Search, CloudLightning, Snowflake, Wrench, BedDouble, Gift, Lock, Leaf, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "What Does a Property Caretaker Do on Martha's Vineyard?",
  description:
    "Everything a Martha's Vineyard caretaker does: property inspections, storm response, winterization, contractor coordination, rental turnover management, concierge services, and more.",
  keywords: [
    "what does a caretaker do Martha's Vineyard",
    "MV property caretaker responsibilities",
    "Martha's Vineyard home watch services",
    "do I need a caretaker Martha's Vineyard",
    "island property caretaking explained",
  ],
};

const coreServices = [
  {
    icon: Search,
    title: "Weekly Property Inspections",
    description:
      "Your caretaker visits your home on a regular schedule — typically weekly during the off-season — performing a visual inspection of every room, every system, and the entire exterior. They check for water leaks, heating failures, pest intrusion, security issues, and general condition.",
    deliverable:
      "Timestamped photo report delivered within 24 hours of each visit.",
    whyItMatters:
      "Most insurance policies require documented monitoring of vacant homes every 30–60 days. Without proof, your claim can be denied — on a property worth an average of $2.6M on MV.",
  },
  {
    icon: CloudLightning,
    title: "Storm & Emergency Response",
    description:
      "When a nor'easter or hurricane warning is issued, your caretaker executes a pre-storm protocol: securing outdoor furniture, checking shutters, verifying sump pumps, and positioning emergency supplies. After the storm passes, they perform a thorough walkthrough within 24 hours.",
    deliverable:
      "Pre-storm confirmation + post-storm damage assessment report with photos.",
    whyItMatters:
      "Homes without caretakers average $35,000 more in storm damage. On an island that sees multiple nor'easters per winter, this service alone can pay for years of caretaking.",
  },
  {
    icon: Snowflake,
    title: "Seasonal Opening & Closing",
    description:
      "Fall closing (winterization) is the single most important service your caretaker provides. They drain water lines, winterize irrigation and outdoor showers, set heating to prevent freeze, seal entry points against rodents, and verify every system is storm-ready. Spring opening reverses the process.",
    deliverable:
      "Comprehensive opening/closing checklist with sign-off on every system.",
    whyItMatters:
      "A single missed step during winterization — like failing to drain an outdoor shower line — can lead to a pipe burst causing $20,000–$150,000 in damage.",
  },
  {
    icon: Wrench,
    title: "Contractor Coordination",
    description:
      "Need a plumber, electrician, painter, or roofer? Your caretaker is your on-island project manager. They meet vendors at your property, supervise work, provide progress reports, review invoices, and ensure quality — all while you're 200 miles away.",
    deliverable:
      "Progress updates with photos, invoice summaries, and completion verification.",
    whyItMatters: `Martha's Vineyard has a ${MARKET_STATS.islandContractorPremium} contractor premium over mainland rates. A caretaker who knows island tradespeople by name gets better pricing, faster scheduling, and higher-quality work.`,
  },
  {
    icon: BedDouble,
    title: "Rental Turnover Management",
    description:
      "For properties listed on Airbnb, VRBO, or booked through rental agencies, your caretaker handles the between-guest chaos: post-departure inspections, damage checks, inventory verification, cleaning crew coordination, and guest-ready confirmation.",
    deliverable:
      "Post-guest condition report with photos, cleaning confirmation, and next-guest readiness check.",
    whyItMatters:
      "MV has 4,000+ registered short-term rentals. Properties running back-to-back weekly rentals in peak season need seamless turnovers — one bad guest experience can tank your rating.",
  },
  {
    icon: Gift,
    title: "Concierge & Arrival Prep",
    description:
      "Your caretaker ensures you walk into a perfect home: heat set, lights on, groceries stocked, fresh flowers on the table, boat checked, grill cleaned, and parking cleared. This white-glove service transforms arriving into an experience.",
    deliverable: "Pre-arrival confirmation with checklist completion.",
    whyItMatters:
      "For owners spending $2M–$40M on a Vineyard home, the arrival experience sets the tone for the entire visit. Many caretakers say concierge prep is their clients' favorite service.",
  },
  {
    icon: Lock,
    title: "Security Monitoring",
    description:
      "Beyond alarm systems, your caretaker provides physical security presence: checking locks, verifying alarm status, noting unfamiliar activity, coordinating with local police on vacant-home check requests, and ensuring properties don't look obviously unoccupied.",
    deliverable:
      "Security status included in every inspection report.",
    whyItMatters:
      "An alarm system can alert you to a break-in, but it can't check for a leaking pipe, meet a contractor, or verify that your home doesn't look vacant from the street. Physical presence is irreplaceable.",
  },
  {
    icon: Leaf,
    title: "Landscaping Oversight",
    description:
      "Your caretaker coordinates with lawn care, tree services, and landscaping crews to keep your property maintained year-round. They verify work quality, manage seasonal planting, and handle snow removal coordination during winter months.",
    deliverable:
      "Landscape status in inspection reports, vendor coordination, quality checks.",
    whyItMatters:
      "An overgrown, neglected exterior signals to everyone — including potential trespassers — that no one is watching the property. Professional landscaping oversight maintains both curb appeal and security.",
  },
];

export default function WhatIsACaretakerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">
            The Complete Guide
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            What Does a Property Caretaker Actually Do on Martha&apos;s
            Vineyard?
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-3xl mx-auto">
            Think of a caretaker as your eyes, ears, and hands on the island —
            the person who ensures your multi-million-dollar investment is
            protected, maintained, and ready for you 365 days a year.
          </p>
        </div>
      </section>

      {/* The Short Answer */}
      <section className="section-padding bg-sand-50">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
            The Short Answer
          </h2>
          <p className="text-lg text-navy-700 leading-relaxed mb-6">
            A Martha&apos;s Vineyard caretaker is a year-round island
            professional who monitors, maintains, and manages your second home
            while you&apos;re off-island. They prevent the small problems
            (a dripping faucet, a mouse in the attic) from becoming expensive
            disasters (water damage, structural pest damage) and ensure your
            home is always ready when you arrive.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-navy-100/50 text-center">
              <p className="text-3xl font-bold text-gold-600">
                {MARKET_STATS.seasonalHomes}
              </p>
              <p className="text-sm text-navy-600 mt-1">
                MV homes sit vacant 7–9 months/year
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100/50 text-center">
              <p className="text-3xl font-bold text-gold-600">
                {MARKET_STATS.averageSalePrice2025}
              </p>
              <p className="text-sm text-navy-600 mt-1">
                Average MV home value at stake
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-navy-100/50 text-center">
              <p className="text-3xl font-bold text-gold-600">
                {PRICING_DATA.monthly.standard.range}
              </p>
              <p className="text-sm text-navy-600 mt-1">
                Typical monthly caretaking cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4 text-center">
            8 Core Services Every MV Caretaker Provides
          </h2>
          <p className="text-navy-600 text-center max-w-2xl mx-auto mb-12">
            While every caretaker packages services differently, these are the
            fundamental capabilities you should expect from a professional on
            Martha&apos;s Vineyard.
          </p>

          <div className="space-y-8">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-navy-100/50 overflow-hidden hover:shadow-luxury transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-navy-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gold-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gold-700 uppercase tracking-wide mb-1">
                        What You Receive
                      </p>
                      <p className="text-sm text-navy-700">
                        {service.deliverable}
                      </p>
                    </div>
                    <div className="bg-sand-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1">
                        Why It Matters on MV
                      </p>
                      <p className="text-sm text-navy-700">
                        {service.whyItMatters}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caretaker vs Alarm System vs Nothing */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">
            Caretaker vs. Alarm System vs. Nothing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="py-4 px-6 text-sm font-semibold">
                    Capability
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-center">
                    Caretaker
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-center">
                    Alarm Only
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-center">
                    Nothing
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Detects burst pipes",
                  "Pre-storm preparation",
                  "Post-storm damage assessment",
                  "Meets contractors on-site",
                  "Photo documentation for insurance",
                  "Winterization / de-winterization",
                  "Rental turnover management",
                  "Concierge arrival prep",
                  "Detects break-ins",
                  "Prevents frozen pipes",
                  "Rodent / pest detection",
                  "Landscape oversight",
                ].map((capability, i) => {
                  const caretaker = <CheckCircle className="w-5 h-5 text-sage-600 mx-auto" />;
                  const alarm =
                    capability === "Detects break-ins"
                      ? <CheckCircle className="w-5 h-5 text-sage-600 mx-auto" />
                      : capability === "Detects burst pipes"
                      ? <AlertTriangle className="w-5 h-5 text-gold-500 mx-auto" />
                      : <XCircle className="w-5 h-5 text-red-400 mx-auto" />;
                  const nothing = <XCircle className="w-5 h-5 text-red-400 mx-auto" />;
                  return (
                    <tr
                      key={capability}
                      className={i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}
                    >
                      <td className="py-3 px-6 text-sm text-navy-700">
                        {capability}
                      </td>
                      <td className="py-3 px-4 text-center">{caretaker}</td>
                      <td className="py-3 px-4 text-center">{alarm}</td>
                      <td className="py-3 px-4 text-center">{nothing}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-navy-500 mt-4 text-center">
<AlertTriangle className="w-4 h-4 text-gold-500 inline mr-1" />
            Some smart sensors can detect water leaks, but cannot stop the
            source or take physical action.
          </p>
        </div>
      </section>

      {/* What to Look For */}
      <section className="section-padding">
        <div className="container-narrow max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
            What to Look For in an MV Caretaker
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                label: "Bonded & Insured",
                detail:
                  "Non-negotiable for $2M+ properties. Protects you against theft and property damage claims.",
              },
              {
                label: "Year-Round Island Resident",
                detail:
                  "Off-island operators require ferry access, adding hours to emergency response time.",
              },
              {
                label: "NHWA Accreditation",
                detail:
                  "The National Home Watch Association sets background checks, insurance standards, and reporting protocols — fewer than a handful of MV caretakers hold this.",
              },
              {
                label: "Documented Inspection Reports",
                detail:
                  "Timestamped photos delivered within 24 hours of each visit. This is what your insurer expects.",
              },
              {
                label: "Deep Contractor Network",
                detail:
                  "A good caretaker knows every plumber, electrician, and roofer on the island by name — and they don't take kickbacks.",
              },
              {
                label: "Storm Response Protocol",
                detail:
                  "Pre-storm preparation, post-storm walkthrough within 24 hours, and a clear communication chain for emergencies.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-4 border-gold-500 pl-5"
              >
                <h3 className="font-semibold text-navy-900">{item.label}</h3>
                <p className="text-sm text-navy-600 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Find Your Martha&apos;s Vineyard Caretaker
          </h2>
          <p className="text-lg text-navy-300 mb-8">
            We&apos;ll match you with vetted, bonded professionals who know the
            island inside and out. Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="btn-primary"
            >
              Get Matched Free →
            </Link>
            <Link href="/caretakers" className="btn-secondary">
              Browse Caretakers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
