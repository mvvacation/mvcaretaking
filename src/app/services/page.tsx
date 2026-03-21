import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MARKET_STATS } from "@/lib/data";
import { Search, CloudLightning, Home, BedDouble, Wrench, Gift, Lock, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Caretaking Services on Martha's Vineyard",
  description:
    "Comprehensive caretaking services for MV's 10,700+ seasonal homes: property inspections, storm response, seasonal management, rental turnovers, contractor coordination, and concierge prep.",
  keywords: [
    "Martha's Vineyard caretaking services",
    "property inspection MV",
    "storm response",
    "seasonal home management",
    "rental turnover service",
  ],
  alternates: { canonical: "https://mvcaretaking.com/services" },
};

const services = [
  {
    id: "inspections",
    icon: Search,
    title: "Property Inspections",
    description: `Regular property inspections are the cornerstone of responsible second-home ownership on Martha's Vineyard. Our vetted caretakers perform weekly or bi-monthly visual checks of your entire property — interior and exterior — documenting conditions with timestamped photos.

Every inspection follows a customizable digital checklist tailored to your property. Reports are delivered within 24 hours via email, complete with photos and notes on anything that needs attention. From checking for roof leaks after a rainstorm to verifying your sump pump is running, nothing gets missed.

For seasonal homeowners who are off-island 9-10 months a year, these inspections provide peace of mind that your biggest investment is being watched over by someone who knows your property intimately.`,
    tasks: [
      "Weekly or bi-monthly visual walk-throughs",
      "Exterior inspection: roof, gutters, siding, foundation, landscaping",
      "Interior inspection: plumbing, HVAC, moisture levels, pest signs",
      "Timestamped photo documentation",
      "Digital report delivered within 24 hours",
      "Customizable checklist per property",
      "Immediate alert for any urgent issues",
    ],
    sidebar:
      "MV homes face salt air corrosion, high winds, and seasonal temperature swings. A missed leak in January can become a $50,000 mold problem by April. Regular inspections catch small problems before they become expensive disasters.",
  },
  {
    id: "storm-response",
    icon: CloudLightning,
    title: "Storm & Emergency Response",
    description: `Martha's Vineyard is exposed to nor'easters, hurricanes, and severe coastal weather that can cause significant damage to unprotected properties. Our caretakers provide comprehensive storm preparation and post-storm response services.

Before a storm, your caretaker secures outdoor furniture, checks shutters and storm windows, ensures sump pumps and generators are operational, and documents pre-storm conditions. After the storm passes, they perform a thorough walk-through, documenting any damage with photos and coordinating emergency repairs if needed.

Many of our providers offer 24/7 emergency response, meaning if a tree falls on your roof at 2 AM, someone is already on their way to assess and protect your property.`,
    tasks: [
      "Pre-storm property preparation and securing",
      "Post-storm damage assessment walk-throughs",
      "Emergency contractor dispatch for urgent repairs",
      "Documented damage reports with photos for insurance",
      "Generator testing and fuel verification",
      "Sump pump and drainage system checks",
      "Coordination with insurance adjusters",
      "24/7 emergency phone response",
    ],
    sidebar:
      "The 2024 season saw 3 major nor'easters hit the Vineyard. Homes without caretakers averaged $35,000 more in storm damage compared to monitored properties. Response time is everything — a tarp on a damaged roof within hours can prevent tens of thousands in water damage.",
  },
  {
    id: "seasonal",
    icon: Home,
    title: "Seasonal Opening & Closing",
    description: `The seasonal rhythm of Martha's Vineyard means most second homes need careful winterization each fall and a thorough de-winterization each spring. Getting this wrong can be catastrophic — a single frozen pipe can cause $100,000+ in water damage.

Our caretakers follow comprehensive checklists for both opening and closing your home. Closing includes draining all water lines, setting heating to safe minimums, securing windows and doors, disconnecting outdoor systems, and prepping your property for months of harsh winter weather.

Spring opening reverses the process: reactivating water systems, testing all appliances and HVAC, checking for winter damage, cleaning, and ensuring everything is guest-ready for your first visit of the season.`,
    tasks: [
      "Complete winterization: water lines drained, antifreeze applied",
      "HVAC system shutdown and spring reactivation",
      "Water heater and plumbing system management",
      "Generator maintenance and testing",
      "A/C system prep and filter replacement",
      "Appliance verification and testing",
      "Pool and outdoor system winterizing/opening",
      "Pest prevention measures",
    ],
    sidebar:
      "The island contractor premium means emergency winter repairs cost 20-35% more than planned maintenance. Proper seasonal closing can save you thousands annually and extend the life of your home's major systems.",
  },
  {
    id: "turnover",
    icon: BedDouble,
    title: "Rental Turnover Management",
    description: `If you rent your MV home during peak season (where luxury rentals earn $10,000-$75,000/week), professional turnover management is essential. Your caretaker ensures every guest departure is inspected and every arrival is flawless.

After each guest checks out, your caretaker performs a detailed walk-through: checking for damage, verifying all valuables and inventory items, testing appliances, and coordinating with your cleaning crew. Before the next guest arrives, they ensure everything meets your standards.

This service protects both your property and your rental income. A damaged item caught on Tuesday can be repaired before Saturday's $15,000/week guests arrive.`,
    tasks: [
      "Post-departure property inspection",
      "Damage documentation and reporting",
      "Valuables and inventory checklist verification",
      "Coordination with cleaning crews",
      "Linen and supply inventory management",
      "Pre-arrival quality assurance check",
      "Guest welcome preparation",
      "Maintenance issue identification between rentals",
    ],
    sidebar:
      "Peak-season MV rentals can generate $40,000-$300,000 per summer. A single bad review from a poorly turned-over property can cost you multiple future bookings. Professional turnover management pays for itself many times over.",
  },
  {
    id: "contractors",
    icon: Wrench,
    title: "Contractor Coordination",
    description: `Managing construction, renovation, or maintenance projects from off-island is one of the most frustrating aspects of MV homeownership. Contractors need access, supervision, and accountability — and you can't be there to provide it.

Your caretaker becomes your on-site project manager. They meet contractors at your property, provide access, supervise work quality, send progress reports with photos, and even review invoices to ensure billing matches completed work.

With the island's contractor premium running 20-35% above mainland rates, having someone on-site who can verify work quality and hold vendors accountable saves you real money.`,
    tasks: [
      "Meeting vendors and providing property access",
      "On-site supervision of work in progress",
      "Photo and video progress reports",
      "Quality verification before final payment",
      "Invoice review and billing verification",
      "Coordination of multiple vendors/trades",
      "Material delivery acceptance",
      "Project timeline tracking and updates",
    ],
    sidebar:
      "Island contractors are in high demand and short supply. A caretaker who has relationships with reliable tradespeople can get you on the schedule faster, ensure quality work, and prevent the cost overruns that plague remote-managed projects.",
  },
  {
    id: "concierge",
    icon: Gift,
    title: "Concierge & Arrival Prep",
    description: `Imagine stepping off the ferry or plane to find your MV home perfectly prepared for your arrival: the temperature dialed in, fresh groceries in the fridge, flowers on the table, your boat checked and fueled, and a personalized welcome note.

Our concierge-level caretakers transform your arrival from stressful to seamless. They handle everything from provisioning to personalized amenities, ensuring your vacation starts the moment you walk through the door — not hours later after a trip to Cronig's.

This service is especially valuable for homeowners hosting guests or family who want a white-glove arrival experience.`,
    tasks: [
      "Grocery and pantry stocking (custom lists)",
      "Fresh flowers and welcome amenities",
      "Temperature pre-setting (heating or A/C)",
      "Boat and vehicle checks",
      "Pool/hot tub preparation",
      "Personalized welcome notes",
      "Restaurant reservation assistance",
      "Beach and recreation equipment setup",
    ],
    sidebar:
      "The Vineyard lifestyle is about relaxation. Your caretaker eliminates the 3-4 hours of errands that typically eat into your first day on-island, letting you start your vacation immediately.",
  },
  {
    id: "security",
    icon: Lock,
    title: "Security Monitoring",
    description: `With most MV homes sitting empty for 9-10 months of the year, security is a top concern for off-island homeowners. Professional caretakers provide a physical security presence that alarm systems alone cannot match.

Regular property visits deter potential break-ins, and experienced caretakers know how to spot signs of attempted entry, vandalism, or suspicious activity. They coordinate directly with local law enforcement when needed and maintain your alarm systems.

Unlike remote monitoring services, a local caretaker can be at your property within minutes to investigate an alarm trigger, check on a neighbor's report, or respond to any security concern.`,
    tasks: [
      "Regular door and window security verification",
      "Alarm system testing and monitoring coordination",
      "Suspicious activity reporting",
      "Coordination with MV police department",
      "Lighting timer management for occupied appearance",
      "Mail and package collection",
      "Vehicle presence rotation (if applicable)",
      "Key and access management",
    ],
    sidebar:
      "Martha's Vineyard is a safe island, but empty homes are always vulnerable. The physical presence of regular caretaker visits is the single best deterrent against property crime.",
  },
  {
    id: "landscaping",
    icon: Leaf,
    title: "Landscaping Oversight",
    description: `Your MV property's landscaping is a significant investment — and an unattended landscape can deteriorate quickly in the island's salt air and variable weather. Caretakers provide oversight of your lawn care and landscaping vendors, ensuring the work is done to your standards.

From monitoring irrigation systems to verifying seasonal plantings, your caretaker acts as your eyes on the ground. They coordinate with landscapers, report on conditions, and ensure your property maintains its curb appeal year-round.

This is particularly important for waterfront and estate properties where landscaping represents a substantial portion of the property's aesthetic value.`,
    tasks: [
      "Monitoring lawn care vendor performance",
      "Irrigation system checks and adjustment",
      "Seasonal planting coordination",
      "Tree and shrub health monitoring",
      "Erosion and drainage assessment",
      "Snow removal coordination",
      "Hardscape maintenance oversight",
      "Deer and pest damage reporting",
    ],
    sidebar:
      "Salt spray, deer, and island winds create unique landscaping challenges on MV. Without regular oversight, a season's worth of landscaping investment can be lost to neglect or vendor no-shows.",
  },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Martha's Vineyard Caretaking Services",
    provider: {
      "@type": "LocalBusiness",
      name: "MVCaretaking",
      url: "https://mvcaretaking.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Martha's Vineyard, MA",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Caretaking Services",
      itemListElement: services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.title,
          description: svc.description.split("\n\n")[0],
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mvcaretaking.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://mvcaretaking.com/services" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <Breadcrumbs dark items={[{ label: "Services" }]} />
          <p className="section-label">Our Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            What Caretakers Do on Martha&apos;s Vineyard
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            With {MARKET_STATS.seasonalHomes} seasonal homes and average values
            of {MARKET_STATS.averageSalePrice2025}, professional caretaking
            protects your investment while you&apos;re away.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="section-padding">
        <div className="container-narrow space-y-20">
          {services.map((svc, i) => (
            <section
              key={svc.id}
              id={svc.id}
              className="scroll-mt-24"
            >
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Main content */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0">
                      <svc.icon className="w-6 h-6 text-gold-600" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
                      {svc.title}
                    </h2>
                  </div>

                  <div className="prose prose-navy max-w-none">
                    {svc.description.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-navy-700 leading-relaxed mb-4"
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-navy-900">
                    What&apos;s Included:
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {svc.tasks.map((task, k) => (
                      <li
                        key={k}
                        className="flex items-start gap-3 text-navy-700"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gold-50/50 rounded-2xl p-6 border border-gold-200/50 sticky top-28">
                    <h4 className="text-xs font-semibold text-gold-600 uppercase tracking-luxe">
                      Why This Matters on MV
                    </h4>
                    <p className="mt-3 text-sm text-navy-700 leading-relaxed">
                      {svc.sidebar}
                    </p>
                  </div>
                </div>
              </div>

              {i < services.length - 1 && (
                <hr className="mt-20 border-navy-100" />
              )}
            </section>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="section-padding bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Every Property Is Different
          </h2>
          <p className="mt-4 text-navy-300 max-w-xl mx-auto">
            Tell us about your home and we&apos;ll match you with caretakers who
            specialize in exactly what you need.
          </p>
          <Link href="/get-a-quote" className="btn-primary mt-8 text-lg px-8">
            Get a Custom Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
