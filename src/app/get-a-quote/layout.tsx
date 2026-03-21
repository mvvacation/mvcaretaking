import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote — Find Your Martha's Vineyard Caretaker",
  description:
    "Request a free, no-obligation quote and get matched with vetted Martha's Vineyard caretakers. Property inspections, storm response, seasonal management — we'll find the right fit for your home.",
  keywords: [
    "free caretaker quote Martha's Vineyard",
    "MV property management quote",
    "find caretaker MV",
  ],
  alternates: {
    canonical: "https://mvcaretaking.com/get-a-quote",
  },
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
