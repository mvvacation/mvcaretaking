import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Home } from "lucide-react";
import { TOWN_DATA, MOCK_CARETAKERS, PRICING_DATA, MARKET_STATS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: { slug: string };
};

const townEntries = Object.entries(TOWN_DATA);

export function generateStaticParams() {
  return townEntries.map(([, data]) => ({ slug: data.slug }));
}

function getTownBySlug(slug: string) {
  const entry = townEntries.find(([, data]) => data.slug === slug);
  if (!entry) return null;
  return { name: entry[0], ...entry[1] };
}

export function generateMetadata({ params }: Props): Metadata {
  const town = getTownBySlug(params.slug);
  if (!town) return {};
  return {
    title: `Caretaking Services in ${town.name}, Martha's Vineyard`,
    description: `Professional property caretaking in ${town.name}, MV. Average home value: ${town.avgSalePrice}. ${town.uniqueChallenges[0]}. Find vetted, bonded caretakers serving ${town.name}.`,
    keywords: [
      `${town.name} caretaker`,
      `${town.name} property management`,
      `${town.name} Martha's Vineyard home watch`,
      `${town.name} caretaking services`,
      `Martha's Vineyard ${town.name} property care`,
    ],
    alternates: {
      canonical: `https://mvcaretaking.com/towns/${params.slug}`,
    },
  };
}

export default function TownPage({ params }: Props) {
  const town = getTownBySlug(params.slug);
  if (!town) notFound();

  const caretakersInTown = MOCK_CARETAKERS.filter((ct) =>
    ct.townsServed.includes(town.name as never)
  );

  const townJsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${town.name}, Martha's Vineyard`,
    description: town.description,
    url: `https://mvcaretaking.com/towns/${town.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: town.name,
      addressRegion: "MA",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(townJsonLd) }}
      />
      {/* Hero */}
      <section className="bg-navy-950 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <Breadcrumbs dark items={[
              { label: town.name },
            ]} />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Caretaking Services in{" "}
              <span className="text-gold-400">{town.name}</span>
            </h1>
            <p className="text-xl text-navy-300 leading-relaxed mb-8 max-w-3xl">
              {town.character}
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="bg-navy-900/50 border border-navy-700/50 rounded-2xl px-5 py-3">
                <span className="text-navy-400 block">Avg. Sale Price</span>
                <span className="text-2xl font-bold text-white">{town.avgSalePrice}</span>
              </div>
              <div className="bg-navy-900/50 border border-navy-700/50 rounded-2xl px-5 py-3">
                <span className="text-navy-400 block">Price Range</span>
                <span className="text-2xl font-bold text-white">{town.priceRange}</span>
              </div>
              <div className="bg-navy-900/50 border border-navy-700/50 rounded-2xl px-5 py-3">
                <span className="text-navy-400 block">Active Caretakers</span>
                <span className="text-2xl font-bold text-white">{caretakersInTown.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Town Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Why {town.name} Properties Need Professional Caretaking
              </h2>
              <p className="text-lg text-navy-700 leading-relaxed mb-8">
                {town.description}
              </p>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Caretaking Focus in {town.name}
              </h3>
              <p className="text-navy-700 leading-relaxed mb-8">
                {town.caretakingFocus}
              </p>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">
                Seasonal Considerations
              </h3>
              <p className="text-navy-700 leading-relaxed">
                {town.seasonalNotes}
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Unique Challenges */}
              <div className="bg-sand-50 border border-sand-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">
                  {town.name}-Specific Challenges
                </h3>
                <ul className="space-y-3">
                  {town.uniqueChallenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 text-sm text-navy-700">
                      <span className="text-gold-600 font-bold mt-0.5">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Property Types */}
              <div className="bg-navy-50 border border-navy-200 rounded-2xl p-6">
                <h3 className="font-semibold text-navy-900 mb-4">
                  Common Property Types
                </h3>
                <ul className="space-y-2">
                  {town.propertyTypes.map((type, i) => (
                    <li key={i} className="flex gap-3 text-sm text-navy-700">
                      <Home className="w-4 h-4 text-sage-600 flex-shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="section-padding bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4 text-center">
            Caretaking Costs in {town.name}
          </h2>
          <p className="text-navy-600 text-center max-w-2xl mx-auto mb-12">
            Based on current market data for {town.name} properties in the {town.priceRange} range.
            Actual costs vary by property size, services, and complexity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-sand-200 text-center">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Per Visit</h3>
              <p className="text-3xl font-bold text-gold-700 mb-2">
                {PRICING_DATA.perVisit.standard.range}
              </p>
              <p className="text-sm text-navy-600">{PRICING_DATA.perVisit.standard.description}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-gold-500 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Monthly</h3>
              <p className="text-3xl font-bold text-gold-700 mb-2">
                {PRICING_DATA.monthly.standard.range}
              </p>
              <p className="text-sm text-navy-600">{PRICING_DATA.monthly.standard.description}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-sand-200 text-center">
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Annual</h3>
              <p className="text-3xl font-bold text-gold-700 mb-2">
                {PRICING_DATA.annual.standard.range}
              </p>
              <p className="text-sm text-navy-600">{PRICING_DATA.annual.standard.description}</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/cost-guide" className="text-gold-600 font-medium hover:text-gold-700 underline underline-offset-2">
              View our full MV Caretaking Cost Guide →
            </Link>
          </p>
        </div>
      </section>

      {/* Caretakers Serving This Town */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4 text-center">
            Caretakers Serving {town.name}
          </h2>
          <p className="text-navy-600 text-center max-w-2xl mx-auto mb-12">
            Every caretaker on MVCaretaking is bonded, insured, and verified as a year-round island professional.
          </p>
          {caretakersInTown.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caretakersInTown.map((ct) => (
                <div
                  key={ct.slug}
                  className="bg-white border border-navy-100/50 rounded-2xl p-6 hover:shadow-luxury transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">{ct.name}</h3>
                      <p className="text-sm text-navy-500">{ct.tagline}</p>
                    </div>
                    {ct.acceptingClients && (
                      <span className="bg-sage-100 text-sage-700 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                        Accepting Clients
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {ct.services.slice(0, 3).map((svc) => (
                      <span
                        key={svc}
                        className="bg-gold-50 text-gold-700 text-xs px-2 py-1 rounded"
                      >
                        {svc}
                      </span>
                    ))}
                    {ct.services.length > 3 && (
                      <span className="text-xs text-navy-400">
                        +{ct.services.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-600 mb-4">
                    <span>Est. {ct.yearFounded}</span>
                    <span className="text-navy-300">•</span>
                    <span>{ct.bondedInsured ? "Bonded & Insured" : ""}</span>
                  </div>
                  <Link
                    href={`/caretakers/${ct.slug}`}
                    className="btn-outline text-sm w-full text-center block"
                  >
                    View Full Profile
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-sand-50 rounded-2xl">
              <p className="text-navy-600 mb-4">
                We&apos;re actively vetting caretakers in {town.name}. Want to be notified when new
                caretakers are available?
              </p>
              <Link href="/get-a-quote" className="btn-primary">
                Get Notified
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Market Context */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-12 text-center">
            {town.name} by the Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-navy-900">{town.avgSalePrice}</p>
              <p className="text-sm text-navy-600 mt-1">Avg. Sale Price</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-navy-900">{MARKET_STATS.seasonalHomes}</p>
              <p className="text-sm text-navy-600 mt-1">Seasonal Homes Island-Wide</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-navy-900">{MARKET_STATS.seasonalPercentage}</p>
              <p className="text-sm text-navy-600 mt-1">Homes Are Seasonal</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-navy-900">{MARKET_STATS.registeredSTRs}</p>
              <p className="text-sm text-navy-600 mt-1">Registered STRs on MV</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Find a Trusted Caretaker in {town.name}
          </h2>
          <p className="text-lg text-navy-300 mb-8">
            Tell us about your {town.name} property, and we&apos;ll match you with vetted, bonded
            professionals who know the area inside and out.
          </p>
          <Link href={`/get-a-quote?town=${encodeURIComponent(town.name)}`} className="btn-primary">
            Get a Free Quote for {town.name}
          </Link>
        </div>
      </section>
    </>
  );
}
