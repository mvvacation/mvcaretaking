import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch",
    template: "%s | MVCaretaking",
  },
  description:
    "Connect with trusted, vetted caretakers who protect your Martha's Vineyard home year-round. Serving 10,700+ seasonal homes across all 6 MV towns. Property inspections, storm response, seasonal management, and more.",
  keywords: [
    "Martha's Vineyard caretaker",
    "MV property management",
    "Martha's Vineyard home watch",
    "island caretaking services",
    "MV second home care",
    "Edgartown caretaker",
    "Chilmark property management",
    "Oak Bluffs home watch",
    "Vineyard Haven caretaking",
    "West Tisbury property care",
    "Aquinnah caretaker",
    "Martha's Vineyard caretaking cost",
    "MV home inspection",
    "NHWA accredited home watch",
  ],
  openGraph: {
    siteName: "MVCaretaking",
    type: "website",
    locale: "en_US",
    title: "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch",
    description:
      "Connect with trusted, vetted caretakers who protect your Martha's Vineyard home year-round.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MVCaretaking — Martha's Vineyard Caretaker Directory & Home Watch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVCaretaking — Martha's Vineyard Caretaker Directory",
    description:
      "Connect with trusted, vetted caretakers who protect your Martha's Vineyard home year-round.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  metadataBase: new URL("https://mvcaretaking.com"),
  other: {
    "theme-color": "#243b53",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MVCaretaking",
  description:
    "Free matching service connecting Martha's Vineyard homeowners with trusted, vetted caretaking professionals. Property inspections, storm response, seasonal management across all 6 MV towns.",
  url: "https://mvcaretaking.com",
  image: {
    "@type": "ImageObject",
    url: "https://mvcaretaking.com/opengraph-image",
    width: 1200,
    height: 630,
  },
  areaServed: [
    { "@type": "City", name: "Edgartown, MA" },
    { "@type": "City", name: "Oak Bluffs, MA" },
    { "@type": "City", name: "Vineyard Haven, MA" },
    { "@type": "City", name: "Chilmark, MA" },
    { "@type": "City", name: "West Tisbury, MA" },
    { "@type": "City", name: "Aquinnah, MA" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "MA",
    addressLocality: "Martha's Vineyard",
    addressCountry: "US",
  },
  priceRange: "Free matching service",
  serviceType: "Property Caretaker Matching Service",
  sameAs: [
    "https://mvvacation.com",
    "https://mvrestaurants.com",
    "https://mvboats.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
