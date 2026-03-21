import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Award, MapPin, Camera, Phone, ArrowRight } from "lucide-react";
import { MV_TOWNS, SERVICE_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Caretaker Directory — Martha's Vineyard Caretaking Professionals",
  description:
    "Find vetted, bonded caretaking professionals on Martha's Vineyard. Our directory connects you with trusted, year-round island-based property caretakers serving all 6 MV towns.",
  alternates: { canonical: "https://mvcaretaking.com/caretakers" },
  robots: { index: false, follow: true },
};

export default function CaretakersPage() {
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
            We&apos;re building the island&apos;s most trusted network of vetted,
            bonded caretaking professionals — serving all 6 MV towns.
          </p>
        </div>
      </section>

      {/* Directory Coming Soon */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-navy-50 to-gold-50/30 rounded-3xl p-12 border border-navy-100/50">
              <div className="w-20 h-20 rounded-2xl bg-navy-900 flex items-center justify-center mx-auto mb-8 shadow-luxury">
                <Shield className="w-8 h-8 text-gold-400" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                Directory Launching Soon
              </h2>
              <p className="text-navy-600 leading-relaxed max-w-xl mx-auto mb-8">
                We&apos;re currently vetting and onboarding caretaking professionals
                across Martha&apos;s Vineyard. Every provider in our directory will be
                verified for bonding, insurance, and year-round island residency.
              </p>
              <p className="text-navy-600 leading-relaxed max-w-xl mx-auto mb-10">
                In the meantime, submit your property details and we&apos;ll
                personally match you with a trusted caretaker for your town and needs.
              </p>
              <Link href="/get-a-quote" className="btn-primary gap-2 text-sm px-8 py-4">
                Get Matched With a Caretaker <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* What We Verify */}
          <div className="mt-20">
            <h2 className="text-2xl font-serif font-bold text-navy-900 text-center mb-12">
              Every Provider Is Verified For
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Bonded & Insured", desc: "Full liability coverage verified before listing." },
                { icon: Award, title: "NHWA Standards", desc: "Background checks and professional reporting protocols." },
                { icon: MapPin, title: "Year-Round Residency", desc: "On-island full-time — no mainland-based operators." },
                { icon: Camera, title: "Digital Reporting", desc: "Timestamped photo reports within 24 hours of every visit." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy-900 mb-5 shadow-luxury">
                    <Icon className="w-6 h-6 text-gold-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm text-navy-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Towns & Services We Cover */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border border-navy-100/50 p-8">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-6">
                Towns We Serve
              </h3>
              <ul className="space-y-3">
                {MV_TOWNS.map((town) => (
                  <li key={town} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <Link
                      href={`/towns/${town.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-navy-700 hover:text-gold-600 transition-colors"
                    >
                      {town}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-navy-100/50 p-8">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-6">
                Services Covered
              </h3>
              <ul className="space-y-3">
                {SERVICE_CATEGORIES.map((svc) => (
                  <li key={svc} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="text-navy-700">{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Are You a Caretaker CTA */}
          <div className="mt-20 text-center bg-navy-950 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 opacity-90" />
            <div className="relative z-10">
              <h2 className="text-2xl font-serif font-bold text-white mb-4">
                Are You a Martha&apos;s Vineyard Caretaker?
              </h2>
              <p className="text-navy-400 max-w-lg mx-auto mb-8">
                We&apos;re actively onboarding bonded, insured, year-round island
                professionals. Get listed in the Vineyard&apos;s premier caretaker directory.
              </p>
              <Link href="/get-a-quote" className="btn-primary gap-2">
                <Phone className="w-4 h-4" /> Apply to Join Our Network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
