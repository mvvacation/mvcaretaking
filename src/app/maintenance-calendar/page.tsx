import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Seasonal Home Maintenance Calendar for Martha's Vineyard",
  description:
    "Month-by-month maintenance calendar for Martha's Vineyard second homes. Know exactly what your caretaker should be doing every month to protect your island investment.",
  alternates: { canonical: "https://mvcaretaking.com/maintenance-calendar" },
  keywords: [
    "Martha's Vineyard home maintenance calendar",
    "MV seasonal property care",
    "Martha's Vineyard winterization schedule",
    "island home maintenance checklist",
    "MV property caretaking schedule",
  ],
};

const calendar = [
  {
    month: "January",
    season: "winter",
    priority: "Critical",
    tasks: [
      "Weekly interior inspections — check for frozen/burst pipes, heating failures",
      "Monitor thermostat (keep at 55°F minimum to prevent pipe freeze)",
      "Check sump pump operation after heavy rain or snowmelt",
      "Clear ice from gutters and downspouts to prevent ice dams",
      "Verify driveway is plowed and accessible for emergency access",
      "Post-storm walkthroughs after every nor'easter or heavy snow event",
    ],
    caretakerNote:
      "January is the highest-risk month for pipe bursts. A single undetected burst can cause $20,000–$150,000 in damage. Weekly inspections are non-negotiable.",
  },
  {
    month: "February",
    season: "winter",
    priority: "Critical",
    tasks: [
      "Continue weekly inspections — pipe burst risk remains high",
      "Check attic for ice dam damage and moisture intrusion",
      "Inspect basement/crawlspace for water accumulation",
      "Verify backup power systems (generator fuel, battery backups)",
      "Salt air inspection — note corrosion on exterior fixtures",
      "Schedule spring contractor work early (island contractors book quickly)",
    ],
    caretakerNote:
      "February often brings the worst nor'easters. Pre-storm preparation should include securing outdoor furniture, shutting off water to vulnerable lines, and having tarps staged for emergency roof patching.",
  },
  {
    month: "March",
    season: "winter",
    priority: "High",
    tasks: [
      "Early spring exterior assessment — document winter damage",
      "Check roof for missing shingles, flashing damage",
      "Test all smoke and CO detectors, replace batteries",
      "Begin scheduling landscaping, painting, and exterior contractors",
      "Inspect cedar shingles for salt-air damage",
      "Open and flush water lines to guest houses and outbuildings",
    ],
    caretakerNote:
      "March is the planning month. A thorough damage assessment now sets the repair schedule for spring. Contractors on MV book up fast — waiting until May means you may not get work done until fall.",
  },
  {
    month: "April",
    season: "spring",
    priority: "High",
    tasks: [
      "Spring opening preparation — full property walkthrough",
      "Turn on exterior water lines, check for freeze damage",
      "Service HVAC systems, replace filters",
      "Test irrigation systems, inspect sprinkler heads",
      "Deep clean interior — address any moisture or mold issues",
      "Power wash decks, patios, and exterior siding",
      "Begin tick/pest treatment for outdoor areas",
    ],
    caretakerNote:
      "April is when seasonal homes come alive. The full spring opening ($500–$2,000) covers every system in your home. If you plan to rent starting Memorial Day, the opening should happen by mid-April.",
  },
  {
    month: "May",
    season: "spring",
    priority: "High",
    tasks: [
      "Complete spring opening — verify all systems operational",
      "Final pre-season cleaning and linen staging",
      "Confirm pool opening and service schedule",
      "Landscape spring cleanup — mulching, planting, lawn care",
      "Verify STR registration and compliance with town regulations",
      "Test outdoor lighting, security cameras, and alarm systems",
      "Stock emergency supplies (flashlights, batteries, water)",
    ],
    caretakerNote:
      "Memorial Day weekend marks the unofficial start of MV season. Everything should be guest-ready by the third week of May. Rental management clients need turnover protocols in place.",
  },
  {
    month: "June",
    season: "summer",
    priority: "Moderate",
    tasks: [
      "Begin regular rental turnover inspections (if applicable)",
      "Weekly exterior checks — landscaping, pool, deck condition",
      "Monitor for carpenter ant and termite activity",
      "Service outdoor shower, grill, and patio furniture",
      "Keep arrival prep checklist updated (groceries, A/C, linens)",
      "Bi-weekly inspection if owner is present; weekly if vacant",
    ],
    caretakerNote:
      "June kicks off the busiest rental turnover season. Properties running back-to-back weekly rentals need turnover inspections ($150–$350 each) between every guest.",
  },
  {
    month: "July",
    season: "summer",
    priority: "Moderate",
    tasks: [
      "Peak season rental turnover management",
      "Weekly pool and hot tub maintenance checks",
      "Monitor for extreme heat — A/C system performance",
      "Coordinate cleaning crews for guest turnovers",
      "Document property condition between rentals with photos",
      "Concierge arrival prep for owner visits (groceries, boat check)",
    ],
    caretakerNote:
      "July is peak season — maximum rental income and maximum wear on your property. Post-guest damage checks catch problems before the next arrival.",
  },
  {
    month: "August",
    season: "summer",
    priority: "Moderate",
    tasks: [
      "Continue rental turnover protocol",
      "Mid-season exterior maintenance check (paint touch-ups, deck repair)",
      "Begin planning fall caretaking contract (if switching providers)",
      "Hurricane season monitoring — review storm prep checklist",
      "Schedule fall closing services and contractor work",
      "Inspect outdoor structures for wear (fences, pergolas, docks)",
    ],
    caretakerNote:
      "August is when smart homeowners lock in fall caretaking contracts. The best caretakers fill their winter rosters by September. Don't wait until November.",
  },
  {
    month: "September",
    season: "fall",
    priority: "High",
    tasks: [
      "Transition from rental to off-season inspection schedule",
      "Schedule fall maintenance — gutter cleaning, exterior painting",
      "Winterization planning — review closing checklist",
      "Service and winterize irrigation systems before first freeze",
      "Fall landscaping — leaf removal, pruning, garden cleanup",
      "Review insurance policy for vacancy clause requirements",
    ],
    caretakerNote:
      "September is the planning bridge between summer activity and winter protection. This is the critical month to confirm your insurance requires documented monitoring — and to ensure your caretaker provides it.",
  },
  {
    month: "October",
    season: "fall",
    priority: "High",
    tasks: [
      "Fall closing / winterization ($500–$2,000) — the most important service of the year",
      "Drain and blow out all exterior water lines",
      "Winterize pool, outdoor showers, and irrigation",
      "Switch to weekly property inspections for unoccupied homes",
      "Service heating system — oil delivery, boiler maintenance",
      "Seal gaps and entry points against rodents and pests",
      "Move outdoor furniture to storage or covered areas",
    ],
    caretakerNote:
      "October winterization prevents the single most expensive category of damage: frozen pipes. A comprehensive closing by mid-October is essential for any home not occupied year-round.",
  },
  {
    month: "November",
    season: "fall",
    priority: "Critical",
    tasks: [
      "Switch to winter-mode inspections — weekly is recommended",
      "Verify heating system is running and thermostat is set (55°F+)",
      "Pre-storm preparation for first nor'easters of the season",
      "Keep driveways and walkways accessible for emergency access",
      "Check for rodent activity — traps, exclusion verification",
      "Test generator and battery backup systems",
    ],
    caretakerNote:
      "November is when the real risk begins. Nor'easter season runs through March. Your caretaker should have a storm response protocol: pre-storm prep, post-storm walkthrough within 24 hours, and photo documentation.",
  },
  {
    month: "December",
    season: "winter",
    priority: "Critical",
    tasks: [
      "Weekly inspections continue — highest-risk season begins",
      "Holiday prep if owner plans to visit (arrival concierge)",
      "Verify heating fuel levels — schedule deliveries before holidays",
      "Post-storm response after any winter weather events",
      "Monitor for ice dam formation on roof edges",
      "Photo report documentation for insurance compliance",
    ],
    caretakerNote:
      "Many MV homeowners visit for holiday weeks. Your caretaker should handle full arrival prep: heat, linens, groceries, parking cleared, and a walkthrough before you step through the door.",
  },
];

const seasonColors: Record<string, string> = {
  winter: "bg-navy-100 text-navy-700 border-navy-300",
  spring: "bg-sage-100 text-sage-500 border-sage-300",
  summer: "bg-gold-100 text-gold-700 border-gold-300",
  fall: "bg-sand-300 text-navy-800 border-sand-400",
};

const priorityColors: Record<string, string> = {
  Critical: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Moderate: "bg-gold-100 text-gold-700",
};

export default function MaintenanceCalendarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <Breadcrumbs dark items={[{ label: "Maintenance Calendar" }]} />
          <p className="section-label">
            Seasonal Property Care Guide
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Martha&apos;s Vineyard Home Maintenance Calendar
          </h1>
          <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto">
            A month-by-month guide to what your caretaker should be doing
            throughout the year to protect your island investment. Optimized for
            MV&apos;s unique climate, seasonal rhythms, and property challenges.
          </p>
        </div>
      </section>

      {/* Season Legend */}
      <section className="bg-sand-50 py-6 border-b border-gold-200/30">
        <div className="container-narrow">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {Object.entries(seasonColors).map(([season, classes]) => (
              <span
                key={season}
                className={`px-4 py-1.5 rounded-full border font-medium capitalize ${classes}`}
              >
                {season}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-8">
            {calendar.map((month) => (
              <div
                key={month.month}
                className="bg-white rounded-2xl border border-navy-100/50 overflow-hidden hover:shadow-luxury transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 px-6 py-4 bg-navy-50 border-b border-navy-100">
                  <h2 className="text-xl font-bold text-navy-900 flex-1">
                    {month.month}
                  </h2>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full capitalize border ${seasonColors[month.season]}`}
                  >
                    {month.season}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${priorityColors[month.priority]}`}
                  >
                    {month.priority} Priority
                  </span>
                </div>

                <div className="p-6">
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {month.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-navy-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-sand-50 rounded-lg p-4 border border-sand-200">
                    <p className="text-sm text-navy-700 leading-relaxed">
                      <span className="font-semibold text-navy-900">
                        Caretaker Note:{" "}
                      </span>
                      {month.caretakerNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow text-center relative">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Why This Calendar Matters
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-gold-400">7–9</p>
              <p className="text-navy-300 text-sm mt-1">
                Months most MV homes sit unattended
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-400">$35K</p>
              <p className="text-navy-300 text-sm mt-1">
                Extra storm damage without a caretaker
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold-400">30 days</p>
              <p className="text-navy-300 text-sm mt-1">
                Typical vacancy clause in insurance policies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Need a Caretaker to Handle All This?
          </h2>
          <p className="text-lg text-navy-300 mb-8">
            A professional caretaker manages your entire maintenance calendar so
            you don&apos;t have to. Get matched with a vetted MV professional —
            free, no obligation.
          </p>
          <Link
            href="/get-a-quote"
            className="btn-primary"
          >
            Find a Caretaker →
          </Link>
        </div>
      </section>
    </>
  );
}
