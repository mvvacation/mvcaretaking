import Link from "next/link";
import { MV_TOWNS, TOWN_DATA } from "@/lib/data";

const footerNav = {
  company: [
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Caretakers", href: "/caretakers" },
    { name: "Get a Quote", href: "/get-a-quote" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Cost Guide", href: "/cost-guide" },
    { name: "Maintenance Calendar", href: "/maintenance-calendar" },
    { name: "What Is a Caretaker?", href: "/what-is-a-caretaker" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  ecosystem: [
    { name: "MVVacation.com", href: "https://mvvacation.com", external: true },
    {
      name: "MVRestaurants.com",
      href: "https://mvrestaurants.com",
      external: true,
    },
    { name: "MVBoats.com", href: "https://mvboats.com", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-serif font-bold text-base">MV</span>
              </div>
              <span className="text-lg font-serif font-semibold text-white tracking-wide">MVCaretaking</span>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed">
              Connecting Martha&apos;s Vineyard second-home owners with trusted,
              vetted caretaking professionals.
            </p>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xs font-semibold text-gold-500 uppercase tracking-luxe mb-5">
              Company
            </h2>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xs font-semibold text-gold-500 uppercase tracking-luxe mb-5">
              Resources
            </h2>
            <ul className="space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Towns */}
          <div>
            <h2 className="text-xs font-semibold text-gold-500 uppercase tracking-luxe mb-5">
              MV Towns
            </h2>
            <ul className="space-y-3">
              {MV_TOWNS.map((town) => (
                <li key={town}>
                  <Link
                    href={`/towns/${TOWN_DATA[town]?.slug ?? encodeURIComponent(town.toLowerCase())}`}
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-300"
                  >
                    {town}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h2 className="text-xs font-semibold text-gold-500 uppercase tracking-luxe mb-5">
              MV Network
            </h2>
            <ul className="space-y-3">
              {footerNav.ecosystem.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name} <span aria-hidden="true">↗</span><span className="sr-only">(opens in new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-navy-800/50">
          <p className="text-xs text-navy-500 leading-relaxed max-w-4xl">
            MVCaretaking.com is a free matching and directory service. We connect
            Martha&apos;s Vineyard homeowners with independent caretaking
            professionals. We do not provide caretaking services directly and do
            not employ, supervise, or control any listed provider. All information
            on this site is for informational purposes only and does not
            constitute professional advice. Homeowners are responsible for
            independently evaluating providers and conducting their own due
            diligence before hiring. Pricing reflects estimated market ranges and
            is not set, negotiated, or guaranteed by MVCaretaking.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-navy-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-600 tracking-wide">
            © {new Date().getFullYear()} MVCaretaking.com · Part of the
            MVVacation.com Network
          </p>
          <div className="flex items-center gap-8 text-xs text-navy-600">
            <Link href="/privacy" className="hover:text-navy-400 transition-colors duration-300 tracking-wide">Privacy</Link>
            <Link href="/terms" className="hover:text-navy-400 transition-colors duration-300 tracking-wide">Terms</Link>
            <span className="tracking-wide">Serving all 6 MV towns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
