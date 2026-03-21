import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://mvcaretaking.com/sitemap.xml",
  };
}
