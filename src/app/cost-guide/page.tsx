import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Check } from "lucide-react";
import { PRICING_DATA, MARKET_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Martha's Vineyard Caretaking Cost Guide (2025)",
  description:
    "The most transparent caretaking pricing guide on Martha's Vineyard. From $60/visit basic inspections to $50,000/year full estate management. Real market data, no surprises.",
  alternates: { canonical: "https://mvcaretaking.com/cost-guide" },
  keywords: [
    "Martha's Vineyard caretaking cost",
    "MV property management pricing",
    "home watch cost Martha's Vineyard",
    "how much does a caretaker cost MV",
    "Martha's Vineyard property management fees",
  ],
};

export default function CostGuidePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mvcaretaking.com" },
      { "@type": "ListItem", position: 2, name: "Cost Guide", item: "https://mvcaretaking.com/cost-guide" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Breadcrumbs dark items={[{ label: "Cost Guide" }]} />
          <p className="section-label">2025 Pricing Guide</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            What Does Caretaking Cost on Martha&apos;s Vineyard?
          </h1>
          <p className="text-xl text-navy-300 leading-relaxed max-w-3xl mx-auto">
            The first transparent pricing guide for MV caretaking. Real market
            data from verified island professionals — no hidden fees, no
            surprises.
          </p>
        </div>
      </section>

      {/* Quick Context */}
      <section className="bg-sand-50 py-8 border-b border-gold-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-xs text-navy-500 uppercase tracking-luxe">Avg. MV Home Value</p>
              <p className="text-xl font-bold text-navy-900">{MARKET_STATS.averageSalePrice2025}</p>
            </div>
            <div>
              <p className="text-xs text-navy-500 uppercase tracking-luxe">Seasonal Homes</p>
              <p className="text-xl font-bold text-navy-900">{MARKET_STATS.seasonalHomes}</p>
            </div>
            <div>
              <p className="text-xs text-navy-500 uppercase tracking-luxe">Typical Annual Cost</p>
              <p className="text-xl font-bold text-navy-900">{MARKET_STATS.averageCaretakingCost}</p>
            </div>
            <div>
              <p className="text-xs text-navy-500 uppercase tracking-luxe">Island Contractor Premium</p>
              <p className="text-xl font-bold text-navy-900">{MARKET_STATS.islandContractorPremium}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Visit Pricing */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Per-Visit Pricing</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            Pay-per-visit works best for owners who only need occasional checks
            or want to supplement a monthly plan during off-season months.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(PRICING_DATA.perVisit).map(([tier, data]) => (
              <div
                key={tier}
                className="bg-white border border-navy-100/50 rounded-2xl p-6 hover:shadow-luxury transition-shadow duration-300"
              >
                <h3 className="text-sm font-semibold uppercase text-navy-500 mb-1">
                  {tier}
                </h3>
                <p className="text-3xl font-bold text-navy-900 mb-2">{data.range}</p>
                <p className="text-sm text-navy-600">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Monthly Retainer Plans</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            Monthly retainers are the most common arrangement on MV. Your
            caretaker is your first call for anything — inspections,
            emergencies, vendor coordination.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(PRICING_DATA.monthly).map(([tier, data]) => {
              const isPopular = tier === "standard";
              return (
                <div
                  key={tier}
                  className={`bg-white rounded-2xl p-6 relative ${
                    isPopular
                      ? "border-2 border-gold-500 shadow-gold"
                      : "border border-navy-100/50"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-sm font-semibold uppercase text-navy-500 mb-1">
                    {tier}
                  </h3>
                  <p className="text-3xl font-bold text-navy-900 mb-2">{data.range}</p>
                  <p className="text-sm text-navy-600">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Annual Costs */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Annual Cost Breakdown</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            When budgeting for the year, most MV homeowners should plan for
            {" "}monthly retainer + seasonal opening/closing + 1-2 storm
            response visits.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-navy-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-navy-900">Tier</th>
                  <th className="py-3 pr-4 text-sm font-semibold text-navy-900">Annual Range</th>
                  <th className="py-3 text-sm font-semibold text-navy-900">Includes</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(PRICING_DATA.annual).map(([tier, data]) => (
                  <tr key={tier} className="border-b border-navy-100">
                    <td className="py-4 pr-4 font-medium text-navy-900 capitalize">{tier}</td>
                    <td className="py-4 pr-4 font-bold text-gold-700">{data.range}</td>
                    <td className="py-4 text-sm text-navy-600">{data.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seasonal / Add-on Services */}
      <section className="section-padding bg-sand-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Seasonal &amp; Add-On Services</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            These are charged per event in addition to your monthly retainer.
            Most caretakers build these into an annual budget estimate.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(PRICING_DATA.seasonal).map(([service, cost]) => (
              <div key={service} className="bg-white border border-sand-200 rounded-2xl p-5">
                <h3 className="font-semibold text-navy-900 mb-1 capitalize">
                  {service.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-2xl font-bold text-gold-700">{cost}</p>
              </div>
            ))}
            <div className="bg-white border border-sand-200 rounded-2xl p-5">
              <h3 className="font-semibold text-navy-900 mb-1">Hourly Add-Ons</h3>
              <p className="text-2xl font-bold text-gold-700">{PRICING_DATA.hourly.addOnServices}</p>
              <p className="text-xs text-navy-500 mt-1">{PRICING_DATA.hourly.minimumCharge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost by Town */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Cost by Town</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            Location significantly impacts caretaking costs. Down-island towns
            have more contractors and shorter drive times; up-island properties
            require more travel and specialized service.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { town: "Edgartown", avg: "$3.6M", range: "$350–$800/mo", note: "Highest STR concentration — turnover management drives cost" },
              { town: "Oak Bluffs", avg: "$1.2M", range: "$200–$500/mo", note: "Most affordable entry; older stock needs more hands-on maintenance" },
              { town: "Vineyard Haven", avg: "$1.75M", range: "$250–$600/mo", note: "Year-round town; best contractor availability on island" },
              { town: "Chilmark", avg: "$6.4M", range: "$800–$4,000/mo", note: "Highest values demand full estate management; remote location premium" },
              { town: "West Tisbury", avg: "$2.5M", range: "$400–$1,000/mo", note: "Large parcels with outbuildings; new strict STR regulations" },
              { town: "Aquinnah", avg: "$3.5M", range: "$600–$1,500/mo", note: "Most remote; cliff exposure and limited contractor access" },
            ].map((t) => (
              <div key={t.town} className="bg-navy-50 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900">{t.town}</h3>
                <p className="text-xs text-navy-500 mt-1">Avg. sale price: {t.avg}</p>
                <p className="text-2xl font-bold text-gold-700 mt-2">{t.range}</p>
                <p className="text-xs text-navy-600 mt-2 leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Annual Budget */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">Sample Annual Budget</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            A realistic budget for a typical $2.5M seasonal home using standard-tier services.
          </p>
          <div className="bg-white rounded-2xl border border-navy-100/50 overflow-hidden shadow-luxury">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="py-3 px-6 text-sm font-semibold">Line Item</th>
                  <th className="py-3 px-6 text-sm font-semibold text-right">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "Monthly retainer (Standard — 12 months × $450)", cost: "$5,400" },
                  { item: "Spring opening", cost: "$800" },
                  { item: "Fall closing / winterization", cost: "$1,200" },
                  { item: "Storm response visits (est. 3 × $350)", cost: "$1,050" },
                  { item: "Concierge arrival prep (est. 4 visits × $300)", cost: "$1,200" },
                  { item: "Hourly add-ons (est. 10 hrs × $65)", cost: "$650" },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-navy-50/50"}>
                    <td className="py-3 px-6 text-sm text-navy-700">{row.item}</td>
                    <td className="py-3 px-6 text-sm font-medium text-navy-900 text-right">{row.cost}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-navy-200 bg-gold-50">
                  <td className="py-4 px-6 font-bold text-navy-900">Estimated Annual Total</td>
                  <td className="py-4 px-6 font-bold text-gold-700 text-right text-lg">$10,300</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-navy-500 mt-4">
            This represents roughly 0.4% of property value — well within the 0.5–1% industry benchmark.
            Actual costs vary by property size, location, and services selected.
          </p>
        </div>
      </section>

      {/* What's Included at Each Tier */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-3">What&apos;s Included at Each Tier</h2>
          <p className="text-navy-600 mb-8 max-w-2xl">
            Every caretaker packages services differently, but here&apos;s what
            you should typically expect at each level.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tier: "Basic",
                price: "$120–$200/mo",
                features: ["2 visits per month", "Visual exterior/interior check", "Basic photo report", "Thermostat & water verification", "Mail & package collection"],
                missing: ["Storm response", "Vendor coordination", "Concierge services"],
              },
              {
                tier: "Standard",
                price: "$300–$600/mo",
                popular: true,
                features: ["Weekly visits", "Detailed photo reports (24hr)", "Storm prep & response", "Vendor coordination", "Seasonal opening/closing assist", "Insurance documentation"],
                missing: ["Concierge/arrival prep", "Full project management"],
              },
              {
                tier: "Premium",
                price: "$500–$1,000+/mo",
                features: ["Weekly visits + on-demand", "Full photo reports", "Storm prep & response", "Vendor coordination & oversight", "Concierge arrival prep", "Rental turnover support", "Seasonal open/close included"],
                missing: ["24/7 dedicated line"],
              },
              {
                tier: "Luxury",
                price: "$1,000–$4,000+/mo",
                features: ["Unlimited access", "Comprehensive reporting", "24/7 emergency line", "Full project management", "White-glove concierge", "Rental management", "Landscaping oversight", "Security monitoring"],
                missing: [],
              },
            ].map((t) => (
              <div
                key={t.tier}
                className={`rounded-2xl p-6 ${
                  t.popular
                    ? "border-2 border-gold-500 shadow-gold bg-white relative"
                    : "border border-navy-100/50 bg-white"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-navy-900 text-lg">{t.tier}</h3>
                <p className="text-xl font-bold text-gold-700 mt-1">{t.price}</p>
                <ul className="mt-4 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy-700">
                      <Check className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                  {t.missing.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-navy-400">
                      <span className="mt-0.5">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Cost */}
      <section className="section-padding bg-sand-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">What Drives Caretaking Costs on MV?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Property Size & Complexity",
                text: "A 1,200 sq ft Oak Bluffs cottage requires very different care than a 6,000 sq ft Chilmark estate compound with a pool, guest house, and private road. More structures = more inspections = higher cost.",
              },
              {
                title: "Island Contractor Premium",
                text: `Everything costs more on an island. Contractors charge a ${MARKET_STATS.islandContractorPremium} premium over mainland rates due to ferry logistics, limited labor supply, and seasonal demand spikes.`,
              },
              {
                title: "Town & Location",
                text: "Up-island properties (Chilmark, Aquinnah, West Tisbury) involve longer drive times, more remote locations, and fewer nearby contractors — all of which factor into pricing.",
              },
              {
                title: "Rental vs. Personal Use",
                text: "STR properties require significantly more attention: turnover inspections, cleaning crew coordination, guest communication, and compliance with evolving town regulations.",
              },
              {
                title: "Seasonal Exposure",
                text: "Waterfront homes, especially on the south shore, face more extreme weather exposure and require more frequent storm prep and post-storm inspections than protected inland properties.",
              },
              {
                title: "Service Scope",
                text: "Basic home-watch (visual inspections only) costs a fraction of full estate management, which includes vendor coordination, concierge services, project management, and 24/7 availability.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-gold-500 pl-6">
                <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost of NOT Having a Caretaker */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-serif font-bold mb-6">
            The Cost of <span className="text-gold-400">Not</span> Having a Caretaker
          </h2>
          <p className="text-navy-300 text-lg mb-12 max-w-2xl mx-auto">
            Professional caretaking typically costs 0.5–1% of your property value
            annually. Here&apos;s what homeowners without caretakers risk:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              { damage: "Frozen pipe burst (undetected for weeks)", cost: "$20,000–$150,000" },
              { damage: "Mold from unnoticed roof leak", cost: "$15,000–$75,000" },
              { damage: "Storm damage without pre-storm prep", cost: "$10,000–$100,000+" },
              { damage: "Insurance claim denial — no proof of monitoring", cost: "Full claim value" },
              { damage: "Squatter or vandalism damage", cost: "$5,000–$50,000" },
              { damage: "Failed septic system (no monitoring)", cost: "$25,000–$60,000" },
            ].map((item) => (
              <div key={item.damage} className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-5">
                <p className="text-navy-300 text-sm mb-1">{item.damage}</p>
                <p className="text-2xl font-bold text-red-400">{item.cost}</p>
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
            Get a Custom Caretaking Quote
          </h2>
          <p className="text-lg text-navy-300 mb-8">
            Tell us about your property and we&apos;ll connect you with vetted
            caretakers who can provide detailed proposals — no obligation, no
            pressure.
          </p>
          <Link href="/get-a-quote" className="btn-primary">
            Request Your Free Quote
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-navy-50 border-t border-navy-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-navy-500 leading-relaxed">
            All pricing on this page reflects estimated market ranges based on
            publicly available data and provider feedback. MVCaretaking.com does
            not set, negotiate, or guarantee pricing. Actual costs are determined
            solely between you and your chosen service provider. This guide is
            for informational purposes only and does not constitute a quote,
            offer, or professional financial advice.
          </p>
        </div>
      </section>
    </>
  );
}
