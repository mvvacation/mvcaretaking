import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MOCK_CARETAKERS, MARKET_STATS } from "@/lib/data";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Shield,
  Eye,
  CloudLightning,
  Snowflake,
  BedDouble,
  Wrench,
  Gift,
  Award,
  MapPin,
  Camera,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Calendar,
  DollarSign,
  Newspaper,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch",
  description:
    "Connect with trusted, vetted caretakers who protect your Martha's Vineyard home year-round. Serving 10,700+ seasonal homes across all 6 MV towns.",
  alternates: { canonical: "https://mvcaretaking.com" },
  openGraph: {
    title: "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch",
    description:
      "Connect with trusted, vetted caretakers who protect your Martha's Vineyard home year-round.",
    type: "website",
    url: "https://mvcaretaking.com",
  },
};

const services = [
  {
    icon: Eye,
    title: "Property Inspections",
    desc: "Meticulous visual assessments with timestamped photo documentation delivered within 24 hours.",
    href: "/services#inspections",
  },
  {
    icon: CloudLightning,
    title: "Storm Response",
    desc: "Pre-storm preparation protocols and post-storm walkthroughs within 24 hours.",
    href: "/services#storm-response",
  },
  {
    icon: Snowflake,
    title: "Seasonal Management",
    desc: "Complete winterization and spring reopening of every system in your home.",
    href: "/services#seasonal",
  },
  {
    icon: BedDouble,
    title: "Rental Turnover",
    desc: "Post-guest inspections, damage assessment, and cleaning crew coordination.",
    href: "/services#turnover",
  },
  {
    icon: Wrench,
    title: "Contractor Oversight",
    desc: "On-site vendor management, progress reporting, and invoice review.",
    href: "/services#contractors",
  },
  {
    icon: Gift,
    title: "Concierge Services",
    desc: "White-glove arrival preparation — from groceries to boat checks.",
    href: "/services#concierge",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Property Details",
    desc: "Complete a brief consultation form with your property specifics and service requirements.",
  },
  {
    number: "02",
    title: "Receive Curated Matches",
    desc: "Our team evaluates your needs and connects you with pre-vetted, bonded island professionals.",
  },
  {
    number: "03",
    title: "Select Your Caretaker",
    desc: "Review personalized proposals, compare service packages, and choose your partner.",
  },
];

export default function HomePage() {
  const featured = MOCK_CARETAKERS.filter((c) => c.featured);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-navy-950">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Martha's Vineyard home with manicured grounds"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/80 to-navy-950" />
          {/* Subtle gradient orb */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="animate-slide-up">
              <span className="section-label text-gold-400 mb-8 block">
                Martha&apos;s Vineyard&apos;s Premier Caretaker Network
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                Your Island Home,{" "}
                <span className="text-gold-400">Impeccably</span>{" "}
                Cared For
              </h1>
            </div>

            <div className="animate-slide-up-delay">
              <p className="mt-8 text-lg sm:text-xl text-navy-300 leading-relaxed max-w-2xl font-light">
                {MARKET_STATS.seasonalHomes} seasonal homes. {MARKET_STATS.averageSalePrice2025} average
                value. Connect with bonded, year-round island professionals who
                safeguard your investment through every season.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote" className="btn-primary text-sm px-8 py-4 gap-2">
                  Find Your Caretaker <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/caretakers"
                  className="btn-secondary text-sm px-8 py-4"
                >
                  Browse Providers
                </Link>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { value: "6", label: "MV Towns" },
                { value: "10,700+", label: "Seasonal Homes" },
                { value: "24/7", label: "Storm Response" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-navy-400 mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elegant bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </section>

      {/* ============ MARQUEE TRUST BAR ============ */}
      <section className="bg-navy-950 py-6 border-b border-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
            {[
              { icon: Shield, label: "Bonded & Insured" },
              { icon: Award, label: "NHWA Standards" },
              { icon: MapPin, label: "All 6 MV Towns" },
              { icon: Camera, label: "24hr Photo Reports" },
              { icon: CloudLightning, label: "Storm Response" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2.5 text-sm text-navy-400">
                <Icon className="w-4 h-4 text-gold-500" />
                <span className="tracking-wide">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROBLEM / SOLUTION ============ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-label">The Challenge</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 text-balance">
              Owning a Vineyard Home From Afar{" "}
              <span className="text-navy-400">Shouldn&apos;t Keep You Up at Night</span>
            </h2>
            <div className="divider-gold mt-8" />
          </div>
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CloudLightning,
                title: "Storm Vulnerability",
                text: "A nor'easter hits overnight. Without a caretaker, homes average $35,000 more in damage — and you won't know until spring.",
              },
              {
                icon: Shield,
                title: "Insurance Exposure",
                text: "Your insurer requires documented monitoring. Without proof, your claim is denied — on a property worth $2.6M.",
              },
              {
                icon: Wrench,
                title: "Contractor Premiums",
                text: `Island contractors charge a ${MARKET_STATS.islandContractorPremium} premium. Without local advocacy, you pay more and wait longer.`,
              },
            ].map((point) => (
              <div
                key={point.title}
                className="relative bg-navy-50/50 rounded-2xl p-8 border border-navy-100/50 hover:shadow-luxury transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center mb-5">
                  <point.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-3">{point.title}</h3>
                <p className="text-navy-600 leading-relaxed text-[15px]">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl sm:text-2xl font-serif text-navy-900">
              That&apos;s precisely what a caretaker does.
            </p>
            <p className="mt-4 text-navy-500 max-w-xl mx-auto leading-relaxed">
              We connect you with year-round island residents who become your
              trusted presence on Martha&apos;s Vineyard.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="relative z-10 container-narrow">
          <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label text-gold-400">Our Services</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white text-balance">
              Comprehensive Estate Care
            </h2>
            <p className="mt-6 text-navy-400 text-lg font-light">
              From weekly inspections to full estate management — every detail attended to.
            </p>
            <div className="divider-gold mt-8" />
          </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-gold-500/20 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <svc.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-sm text-navy-400 leading-relaxed">
                  {svc.desc}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-gold-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">The Process</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 text-balance">
              Three Steps to Peace of Mind
            </h2>
            <div className="divider-gold mt-8" />
          </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step, i) => (
              <div key={step.number} className="text-center">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-2xl bg-navy-900 flex items-center justify-center shadow-luxury">
                    <span className="text-2xl font-serif font-bold text-gold-400">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-navy-200 to-transparent -translate-y-1/2 ml-4" />
                  )}
                </div>
                <h3 className="mt-8 text-xl font-serif font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-navy-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/how-it-works" className="btn-outline gap-2">
              Learn More <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FEATURED CARETAKERS ============ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Network</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 text-balance">
              Featured Professionals
            </h2>
            <p className="mt-6 text-navy-500 text-lg font-light">
              Vetted, year-round island residents who know Martha&apos;s Vineyard intimately.
            </p>
            <div className="divider-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((ct) => (
              <div
                key={ct.id}
                className="group rounded-2xl border border-navy-100/50 p-8 hover:shadow-luxury-lg transition-all duration-500 bg-white"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-serif font-bold text-navy-900">
                    {ct.name}
                  </h3>
                  {ct.bondedInsured && (
                    <span className="flex items-center gap-1 text-xs font-medium bg-gold-50 text-gold-700 px-2.5 py-1 rounded-full whitespace-nowrap border border-gold-200">
                      <Shield className="w-3 h-3" /> Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-navy-500 italic">{ct.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {ct.townsServed.map((town) => (
                    <span
                      key={town}
                      className="text-xs bg-navy-50 text-navy-600 px-2.5 py-1 rounded-lg"
                    >
                      {town}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="text-xs font-medium bg-gold-50 text-gold-700 px-2.5 py-1 rounded-lg">
                    {ct.differentiator}
                  </span>
                  <span className="text-xs text-navy-400">
                    Est. {ct.yearFounded}
                  </span>
                </div>

                <Link
                  href={`/caretakers/${ct.slug}`}
                  className="mt-7 flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-navy-700 border border-navy-200 rounded-xl hover:bg-navy-50 hover:border-navy-300 transition-all duration-300 tracking-wide uppercase"
                >
                  View Profile <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/caretakers" className="btn-primary gap-2">
              View All Caretakers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <div className="relative z-10 container-narrow">
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-8 text-center mb-20">
            {[
              { value: MARKET_STATS.seasonalHomes, label: "Seasonal Homes" },
              { value: MARKET_STATS.averageSalePrice2025, label: "Avg. Home Value" },
              { value: MARKET_STATS.registeredSTRs, label: "Registered STRs" },
              { value: "6", label: "Towns Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-xs text-navy-300 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <span className="section-label text-gold-400">Testimonials</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-white">
              What Homeowners Say
            </h2>
            <div className="divider-gold mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We used to fly down every time there was a storm warning. Now our caretaker sends a photo report the next morning. Total peace of mind.",
                author: "Second-home owner",
                location: "Edgartown",
              },
              {
                quote: "From plowing the driveway to stocking the fridge before we arrive — it's like having a personal concierge on the Vineyard.",
                author: "Seasonal resident",
                location: "Chilmark",
              },
              {
                quote: "Our insurer required documented property checks. MVCaretaking connected us with a bonded caretaker in 48 hours. Couldn't be happier.",
                author: "Vacation-home owner",
                location: "West Tisbury",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.location}
                className="relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]"
              >
                <span className="text-gold-500/30 text-5xl font-serif leading-none block mb-4">&ldquo;</span>
                <p className="text-white/80 leading-relaxed font-light italic">
                  {testimonial.quote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-px h-8 bg-gold-500/30" />
                  <div>
                    <p className="text-sm text-white/60">{testimonial.author}</p>
                    <p className="text-xs text-gold-500/70">{testimonial.location}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </section>

      {/* ============ TRUST / VERIFICATION ============ */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Our Standards</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-navy-900 text-balance">
              Why Homeowners Trust Us
            </h2>
            <div className="divider-gold mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Bonded & Insured", desc: `Every provider carries full liability coverage — non-negotiable for properties valued at ${MARKET_STATS.averageSalePrice2025}.` },
              { icon: Award, title: "NHWA Standards", desc: "We encourage National Home Watch Association accreditation — the gold standard for background checks and reporting." },
              { icon: MapPin, title: "Year-Round Islanders", desc: "Our caretakers live on Martha's Vineyard full-time. No ferry delays when your roof is compromised at 2 AM." },
              { icon: Camera, title: "Digital Documentation", desc: "Timestamped photo reports within 24 hours of every visit — the proof your insurer requires." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-900 mb-6 shadow-luxury">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif font-bold text-navy-900 text-lg">{title}</h3>
                <p className="mt-3 text-sm text-navy-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESOURCE HUB ============ */}
      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-label">Homeowner Resources</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-navy-900">
              Essential Guides
            </h2>
            <div className="divider-gold mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "2025 Cost Guide", desc: "Transparent pricing from $60/visit to $50K/year estate management.", href: "/cost-guide" },
              { icon: Calendar, title: "Maintenance Calendar", desc: "Month-by-month seasonal maintenance schedule for MV homes.", href: "/maintenance-calendar" },
              { icon: BookOpen, title: "What Is a Caretaker?", desc: "Everything a property caretaker does — the complete breakdown.", href: "/what-is-a-caretaker" },
              { icon: Newspaper, title: "MV Journal", desc: "Storm prep, insurance insights, STR regulations, and more.", href: "/blog" },
            ].map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl p-7 border border-navy-100/50 hover:shadow-luxury-lg hover:border-gold-200 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-50 flex items-center justify-center mb-4 group-hover:bg-gold-50 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-bold text-navy-900 group-hover:text-gold-700 transition-colors duration-300">{title}</h3>
                <p className="mt-2 text-sm text-navy-600 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD CAPTURE CTA ============ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 opacity-90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label text-gold-400">Start Today</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white text-balance">
            Protect Your Investment This Season
          </h2>
          <p className="mt-6 text-navy-400 max-w-xl mx-auto font-light text-lg">
            Two minutes to get matched with a trusted MV caretaker.
            Free consultation, no obligation.
          </p>

          <div className="mt-10 max-w-md mx-auto">
            <form
              action="/get-a-quote"
              method="GET"
              className="flex gap-3"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl text-navy-900 bg-white placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-white/20 text-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap px-6">
                Get Matched
              </button>
            </form>
          </div>

          <p className="mt-4 text-xs text-navy-600">
            Your information is shared only with matched caretakers. No spam, ever.
          </p>
        </div>
      </section>
    </>
  );
}
