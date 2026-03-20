import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Martha's Vineyard Caretaker Directory — Find Trusted Providers",
  description:
    "Browse vetted, bonded MV caretakers. Filter by town, services, and availability. Compare providers and get matched free.",
  keywords: [
    "Martha's Vineyard caretaker directory",
    "MV property caretakers",
    "find a caretaker Martha's Vineyard",
    "home watch providers MV",
  ],
};

export default function CaretakersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
