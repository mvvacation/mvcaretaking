import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const base = dark ? "text-navy-400" : "text-navy-500";
  const hoverClass = dark ? "hover:text-white" : "hover:text-navy-900";
  const activeClass = dark ? "text-white font-medium" : "text-navy-900 font-medium";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex items-center gap-1.5 text-sm ${base} flex-wrap`}>
        <li>
          <Link href="/" className={`${hoverClass} transition-colors`}>
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5" />
            {item.href ? (
              <Link href={item.href} className={`${hoverClass} transition-colors`}>
                {item.label}
              </Link>
            ) : (
              <span className={activeClass}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
