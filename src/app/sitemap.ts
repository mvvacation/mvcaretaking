import { MetadataRoute } from "next";

const BASE_URL = "https://mvcaretaking.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const townSlugs = [
    "edgartown",
    "oak-bluffs",
    "vineyard-haven",
    "chilmark",
    "west-tisbury",
    "aquinnah",
  ];

  const blogSlugs = [
    "do-i-need-a-caretaker-marthas-vineyard",
    "cost-of-caretaking-marthas-vineyard-2026",
    "choosing-the-right-caretaker-mv",
    "insurance-requirements-vacant-mv-homes",
    "winter-storm-prep-marthas-vineyard",
    "seasonal-opening-closing-checklist",
    "mv-second-home-management-guide",
    "mv-str-regulations-2026",
  ];


  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/caretakers`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/cost-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/how-it-works`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/get-a-quote`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/maintenance-calendar`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/what-is-a-caretaker`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const siteLastModified = new Date("2025-06-01");

  const townPages = townSlugs.map((slug) => ({
    url: `${BASE_URL}/towns/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: siteLastModified,
  }));

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: siteLastModified,
  }));

  return [
    ...staticPages.map((page) => ({
      ...page,
      lastModified: siteLastModified,
    })),
    ...townPages,
    ...blogPages,
  ];
}
