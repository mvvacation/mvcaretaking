"use client";

import Link from "next/link";
import { useState } from "react";
import { MOCK_CARETAKERS, MV_TOWNS, SERVICE_CATEGORIES } from "@/lib/data";

export default function CaretakersPage() {
  const [townFilter, setTownFilter] = useState<string>("");
  const [serviceFilter, setServiceFilter] = useState<string[]>([]);
  const [acceptingOnly, setAcceptingOnly] = useState(false);

  const filtered = MOCK_CARETAKERS.filter((ct) => {
    if (townFilter && !ct.townsServed.includes(townFilter)) return false;
    if (
      serviceFilter.length > 0 &&
      !serviceFilter.some((s) => ct.services.includes(s))
    )
      return false;
    if (acceptingOnly && !ct.acceptingClients) return false;
    return true;
  });

  function toggleService(svc: string) {
    setServiceFilter((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <p className="section-label">Our Network</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            Martha&apos;s Vineyard Caretaker Directory
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            Browse vetted, island-based caretaking professionals. Filter by
            town, service type, and availability.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl border border-navy-100/50 p-6 mb-8 shadow-luxury">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Town filter */}
              <div className="flex-1">
                <label
                  htmlFor="town-filter"
                  className="block text-sm font-medium text-navy-700 mb-1"
                >
                  Filter by Town
                </label>
                <select
                  id="town-filter"
                  value={townFilter}
                  onChange={(e) => setTownFilter(e.target.value)}
                    className="w-full rounded-xl border border-navy-200 px-3 py-2 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
                >
                  <option value="">All Towns</option>
                  {MV_TOWNS.map((town) => (
                    <option key={town} value={town}>
                      {town}
                    </option>
                  ))}
                </select>
              </div>

              {/* Accepting toggle */}
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptingOnly}
                    onChange={(e) => setAcceptingOnly(e.target.checked)}
                    className="w-4 h-4 rounded border-navy-300 text-gold-500 focus:ring-gold-400"
                  />
                  <span className="text-sm text-navy-700">
                    Accepting New Clients
                  </span>
                </label>
              </div>
            </div>

            {/* Service type checkboxes */}
            <div className="mt-4">
              <p className="text-sm font-medium text-navy-700 mb-2">
                Service Type
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_CATEGORIES.map((svc) => (
                  <button
                    key={svc}
                    onClick={() => toggleService(svc)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                      serviceFilter.includes(svc)
                        ? "bg-gold-500 text-white border-gold-500"
                        : "bg-white text-navy-600 border-navy-200 hover:border-gold-300"
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-navy-500 mb-6">
            Showing {filtered.length} provider
            {filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((ct) => (
              <div
                key={ct.id}
                className="bg-white rounded-2xl border border-navy-100/50 p-6 hover:shadow-luxury transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-navy-900">
                    {ct.name}
                  </h3>
                  {ct.bondedInsured && (
                    <span className="text-[10px] font-medium bg-sage-50 text-sage-500 px-2 py-0.5 rounded-full whitespace-nowrap">
                      Bonded & Insured
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-navy-500">{ct.tagline}</p>

                {/* Towns */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ct.townsServed.map((town) => (
                    <span
                      key={town}
                      className="text-xs bg-navy-50 text-navy-600 px-2 py-0.5 rounded-full"
                    >
                      {town}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium bg-gold-50 text-gold-700 px-2.5 py-1 rounded-full">
                    {ct.differentiator}
                  </span>
                  <span className="text-xs text-navy-400">
                    Est. {ct.yearFounded}
                  </span>
                  {!ct.acceptingClients && (
                    <span className="text-xs text-red-500 font-medium">
                      Waitlist Only
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/caretakers/${ct.slug}`}
                    className="block text-center btn-outline text-sm py-2"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-500">
                No caretakers match your current filters. Try adjusting your
                criteria.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center bg-navy-50 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-navy-900">
              Not Sure Which Provider Is Right?
            </h2>
            <p className="mt-3 text-navy-600 max-w-lg mx-auto">
              Submit one inquiry and we&apos;ll match you with the best
              caretakers for your property, town, and needs.
            </p>
            <Link href="/get-a-quote" className="btn-primary mt-6">
              Get Matched Free →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-navy-400 leading-relaxed text-center max-w-2xl mx-auto">
            Listings are provided for informational purposes. While we verify
            basic credentials, homeowners are responsible for independently
            evaluating providers, confirming insurance and bonding, and
            conducting their own due diligence before hiring. MVCaretaking.com
            does not employ, supervise, or control any listed provider.
          </p>
        </div>
      </section>
    </>
  );
}
