import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Camera, MessageSquare } from "lucide-react";
import { MOCK_CARETAKERS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return MOCK_CARETAKERS.map((ct) => ({ slug: ct.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const ct = MOCK_CARETAKERS.find((c) => c.slug === params.slug);
  if (!ct) return {};
  return {
    title: `${ct.name} — MV Caretaker`,
    description: ct.tagline || ct.description?.slice(0, 155),
    alternates: {
      canonical: `https://mvcaretaking.com/caretakers/${params.slug}`,
    },
  };
}

export default function CaretakerProfilePage({ params }: Props) {
  const ct = MOCK_CARETAKERS.find((c) => c.slug === params.slug);

  if (!ct) notFound();

  const caretakerJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: ct.name,
    description: ct.description,
    url: `https://mvcaretaking.com/caretakers/${ct.slug}`,
    ...(ct.phone && { telephone: ct.phone }),
    ...(ct.email && { email: ct.email }),
    areaServed: ct.townsServed.map((town) => ({
      "@type": "City",
      name: `${town}, MA`,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "MA",
      addressLocality: "Martha's Vineyard",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caretakerJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow relative">
          <Breadcrumbs dark items={[
            { label: "Caretakers", href: "/caretakers" },
            { label: ct.name },
          ]} />
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold">{ct.name}</h1>
              <p className="mt-2 text-lg text-navy-300">{ct.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ct.bondedInsured && (
                  <span className="text-xs font-medium bg-sage-500/20 text-sage-300 px-3 py-1 rounded-full">
                    <Check className="w-3 h-3 inline mr-1" /> Bonded & Insured
                  </span>
                )}
                <span className="text-xs font-medium bg-gold-500/20 text-gold-300 px-3 py-1 rounded-full">
                  {ct.differentiator}
                </span>
                <span className="text-xs bg-navy-800 text-navy-300 px-3 py-1 rounded-full">
                  Est. {ct.yearFounded}
                </span>
                {ct.acceptingClients ? (
                  <span className="text-xs font-medium bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    Accepting New Clients
                  </span>
                ) : (
                  <span className="text-xs font-medium bg-red-500/20 text-red-300 px-3 py-1 rounded-full">
                    Waitlist Only
                  </span>
                )}
              </div>
            </div>
            <Link
              href="/get-a-quote"
              className="btn-primary whitespace-nowrap self-start"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* About */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">About</h2>
                <p className="text-navy-700 leading-relaxed">{ct.description}</p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  Services Offered
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ct.services.map((svc) => (
                    <div
                      key={svc}
                      className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-500" />
                      <span className="text-sm text-navy-700">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Towns */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  Service Area
                </h2>
                <div className="flex flex-wrap gap-2">
                  {ct.townsServed.map((town) => (
                    <span
                      key={town}
                      className="px-4 py-2 bg-gold-50 text-gold-700 rounded-full text-sm font-medium"
                    >
                      {town}
                    </span>
                  ))}
                </div>
              </div>

              {/* Photo gallery placeholder */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <div
                      key={n}
                      className="aspect-[4/3] bg-gradient-to-br from-navy-50 to-navy-100 rounded-2xl flex flex-col items-center justify-center text-navy-300 border border-navy-100/50"
                    >
                      <Camera className="w-6 h-6 mb-1" />
                      <span className="text-xs">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  Reviews
                </h2>
                <div className="bg-sand-50 rounded-2xl p-8 border border-navy-100/50 text-center">
                  <MessageSquare className="w-10 h-10 text-navy-300 mx-auto mb-3" />
                  <p className="text-navy-600 font-medium">Reviews Coming Soon</p>
                  <p className="text-sm text-navy-400 mt-1">
                    Verified client reviews will appear here once this provider is fully onboarded.
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-navy-100/50 p-6 shadow-luxury sticky top-28 space-y-6">
                <h3 className="text-lg font-semibold text-navy-900">
                  Contact {ct.name}
                </h3>

                {ct.phone && (
                  <div>
                    <p className="text-xs text-navy-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm text-navy-900 font-medium">
                      {ct.phone}
                    </p>
                  </div>
                )}
                {ct.email && (
                  <div>
                    <p className="text-xs text-navy-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-navy-900 font-medium">
                      {ct.email}
                    </p>
                  </div>
                )}
                {ct.website && (
                  <div>
                    <p className="text-xs text-navy-500 uppercase tracking-wider">
                      Website
                    </p>
                    <a
                      href={ct.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold-600 hover:text-gold-700 font-medium"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                )}

                <hr className="border-navy-100" />

                <Link
                  href="/get-a-quote"
                  className="btn-primary w-full text-center"
                >
                  Get a Quote →
                </Link>
                <p className="text-xs text-navy-400 text-center">
                  Free, no-obligation inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
