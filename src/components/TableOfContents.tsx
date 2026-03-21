"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ contentId }: { contentId: string }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const container = document.getElementById(contentId);
    if (!container) return;

    const headings = container.querySelectorAll("h2, h3");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const text = heading.textContent || "";
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      heading.id = id;
      tocItems.push({
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [contentId]);

  if (items.length < 3) return null;

  return (
    <nav aria-label="Table of contents" className="bg-navy-50 rounded-xl p-5 mb-8 border border-navy-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left font-serif font-bold text-navy-900"
        aria-expanded={isOpen}
      >
        <List className="w-4 h-4 text-gold-600" aria-hidden="true" />
        <span>In This Article</span>
        <span className="ml-auto text-xs text-navy-400">{isOpen ? "Hide" : "Show"}</span>
      </button>
      {isOpen && (
        <ol className="mt-3 space-y-1 list-none pl-0">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block py-1 text-sm transition-colors hover:text-gold-600 ${
                  activeId === item.id
                    ? "text-gold-600 font-semibold"
                    : "text-navy-600"
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
