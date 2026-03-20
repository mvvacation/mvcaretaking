export const MV_TOWNS = [
  "Edgartown",
  "Oak Bluffs",
  "Vineyard Haven",
  "Chilmark",
  "West Tisbury",
  "Aquinnah",
] as const;

export type MVTown = (typeof MV_TOWNS)[number];

export const SERVICE_CATEGORIES = [
  "Property Inspections",
  "Storm & Emergency Response",
  "Seasonal Opening & Closing",
  "Rental Turnover Management",
  "Contractor Coordination",
  "Concierge & Arrival Prep",
  "Security Monitoring",
  "Landscaping Oversight",
] as const;

export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

export const PROPERTY_TYPES = [
  "Single Family Home",
  "Estate / Compound",
  "Condo / Townhouse",
  "Waterfront Property",
  "Vacation Rental",
  "Undeveloped Land",
] as const;

// Market intelligence data
export const MARKET_STATS = {
  totalHousingUnits: "17,500+",
  seasonalHomes: "10,700+",
  seasonalPercentage: "56–63%",
  medianSalePrice2025: "$1,695,000",
  averageSalePrice2025: "$2,626,357",
  totalSalesVolume2025: "$780M",
  transactions2025: 297,
  averageCaretakingCost: "$15,000–$50,000",
  registeredSTRs: "4,000+",
  strTaxRevenue: "$9.4M",
  islandContractorPremium: "20–35%",
  marketSize: "$15–20M",
} as const;

export const TOWN_DATA: Record<
  string,
  {
    slug: string;
    avgSalePrice: string;
    character: string;
    priceRange: string;
    description: string;
    caretakingFocus: string;
    uniqueChallenges: string[];
    propertyTypes: string[];
    seasonalNotes: string;
  }
> = {
  Edgartown: {
    slug: "edgartown",
    avgSalePrice: "$3,557,847",
    character:
      "Martha's Vineyard's volume leader and historic harbor town. Edgartown combines a bustling downtown, world-class harbor, and some of the island's most prestigious waterfront estates in Katama and along the outer harbor.",
    priceRange: "$1M–$20M+",
    description:
      "With approximately 1,400 registered short-term rentals — the most of any MV town — Edgartown properties require particularly attentive caretaking. The town's mix of historic in-town homes, sprawling Katama estates, and waterfront properties each present unique challenges. Salt air corrosion on harbor-facing homes, high guest turnover during peak season, and exposure to southeast storms make professional caretaking essential for Edgartown homeowners.",
    caretakingFocus:
      "Rental turnover management is critical here given the high STR concentration. Edgartown caretakers typically manage more guest turnovers per season than any other MV town. Storm response is equally important — the town's exposed coastline sees direct impact from nor'easters tracking up the Atlantic.",
    uniqueChallenges: [
      "Highest STR concentration on the island (~1,400 registered rentals)",
      "Salt air corrosion on harbor and waterfront properties",
      "Southeast storm exposure along outer harbor and South Beach",
      "Historic district properties require specialized maintenance knowledge",
      "High tourist foot traffic in-town increases security considerations",
      "Dock and boat maintenance for waterfront estates",
    ],
    propertyTypes: [
      "Historic in-town colonials",
      "Katama estate compounds",
      "Harbor-front luxury homes",
      "South Beach waterfront",
      "Vacation rental investments",
    ],
    seasonalNotes:
      "Edgartown sees the heaviest rental activity of any MV town from Memorial Day through Labor Day, with peak weeks commanding $10,000–$75,000. Most caretakers recommend weekly inspections year-round and turnover checks between every rental guest.",
  },
  "Oak Bluffs": {
    slug: "oak-bluffs",
    avgSalePrice: "$1,200,000",
    character:
      "Martha's Vineyard's most accessible entry point and the island's cultural heartbeat. Oak Bluffs is home to the iconic Gingerbread cottages, a vibrant African-American community with century-old roots, and the island's busiest commercial district.",
    priceRange: "$500K–$3M",
    description:
      "Oak Bluffs represents the most diverse property market on the Vineyard, from modest cottages to substantial waterfront homes. The town's rental-driven investment profile means many properties function as income-producing assets requiring professional caretaking. With relatively more affordable entry prices, Oak Bluffs attracts first-time MV buyers who are often unfamiliar with island-specific caretaking needs — making education and guidance particularly valuable.",
    caretakingFocus:
      "Rental property management and turnover coordination are the primary needs. Many Oak Bluffs properties are older and require more hands-on maintenance — plumbing, roofing, and moisture management in tightly-built historic cottages. The Campground area's unique Gingerbread homes require specialized maintenance knowledge.",
    uniqueChallenges: [
      "Older housing stock with more frequent maintenance needs",
      "Campground/Gingerbread homes require specialized care",
      "High density increases moisture and pest management challenges",
      "Strong rental investment focus — turnover management essential",
      "First-time MV buyers need more caretaker education and guidance",
      "Ferry traffic and tourism create seasonal congestion challenges",
    ],
    propertyTypes: [
      "Victorian and Gingerbread cottages",
      "In-town investment properties",
      "Waterfront homes along Nantucket Sound",
      "Multi-family rental conversions",
      "Modern builds in East Chop",
    ],
    seasonalNotes:
      "Oak Bluffs has the most active rental market at the entry and mid-level price points. Properties often run back-to-back weekly rentals June through September, requiring frequent turnover inspections and cleaning crew coordination.",
  },
  "Vineyard Haven": {
    slug: "vineyard-haven",
    avgSalePrice: "$1,750,000",
    character:
      "The island's year-round commercial hub and primary ferry port. Vineyard Haven (officially Tisbury) is the only dry town on MV and the most practical base for year-round island living, with essential services, a working harbor, and steady property values.",
    priceRange: "$800K–$6M",
    description:
      "Vineyard Haven properties benefit from the town's year-round infrastructure but face unique challenges from busy harbor activity and seasonal traffic. The town recently capped short-term rentals at 75 nights per year with $115 annual registration fees — a regulatory shift that affects how properties are managed. Caretakers serving Vineyard Haven need strong relationships with the town's contractor base and familiarity with the evolving STR regulatory landscape.",
    caretakingFocus:
      "Year-round maintenance access is a Vineyard Haven advantage — contractors and services are more readily available than in up-island towns. The focus here is on comprehensive property monitoring, contractor coordination, and navigating the town's new STR regulations. Harbor-area homes require attention to salt exposure and commercial district noise during check-ins.",
    uniqueChallenges: [
      "New 75-night STR cap requires careful rental calendar management",
      "Harbor area homes exposed to salt spray and commercial traffic",
      "Primary ferry port means seasonal congestion around the property",
      "Year-round town means more contractor availability but also more foot traffic",
      "Tisbury budgeting $40K for STR inspection — compliance matters",
      "Mixed residential/commercial zones require nuanced security monitoring",
    ],
    propertyTypes: [
      "Harbor-view homes",
      "West Chop estates",
      "In-town residential properties",
      "Waterfront along Lagoon Pond",
      "Year-round occupied homes needing seasonal support",
    ],
    seasonalNotes:
      "Vineyard Haven's new 75-night rental cap (effective 2024) means caretakers need to track rental nights carefully.  The town has the most year-round residents of any MV town, so shoulder-season access and off-peak maintenance scheduling is easier than up-island.",
  },
  Chilmark: {
    slug: "chilmark",
    avgSalePrice: "$6,435,368",
    character:
      "Martha's Vineyard's most exclusive address, with the island's highest property values. Chilmark is defined by rolling hills, stone walls, pristine beaches (Lucy Vincent, Squibnocket), and large estate properties set on multi-acre parcels.",
    priceRange: "$2M–$40M+",
    description:
      "Chilmark represents the pinnacle of MV real estate and demands the highest level of caretaking service. Properties here are typically large estate compounds with extensive grounds, multiple structures, private roads, and complex systems (pools, generators, wells, septic). The town is considering a 95-day annual STR cap. At these property values — averaging over $6.4M — the cost of professional caretaking is a rounding error compared to the cost of neglect.",
    caretakingFocus:
      "Full estate management is the standard expectation, not basic home watch. Chilmark caretakers manage complex property systems, coordinate multiple vendors (landscapers, pool services, private road maintenance), and provide concierge-level arrival preparation. The remote, up-island location means longer response times — making local contractor relationships critical.",
    uniqueChallenges: [
      "Highest property values on MV — maximum financial exposure to damage",
      "Large estate compounds with multiple structures and complex systems",
      "Remote up-island location — longer emergency response times",
      "Private wells and septic systems require specialized monitoring",
      "Exposed coastal properties (Squibnocket) face severe storm risk",
      "Limited contractor availability up-island — relationships essential",
      "Potential 95-day STR cap — regulatory landscape evolving",
    ],
    propertyTypes: [
      "Multi-acre estate compounds",
      "Oceanfront properties on Squibnocket and Lucy Vincent",
      "Hilltop retreats with panoramic views",
      "Historic farmsteads",
      "Luxury new construction",
    ],
    seasonalNotes:
      "Chilmark properties typically require year-round full-service caretaking given their size and complexity. Most owners keep houses heated and operational year-round to enable weekend visits. The winding roads and remote location mean winter storm response requires a caretaker who lives nearby.",
  },
  "West Tisbury": {
    slug: "west-tisbury",
    avgSalePrice: "$2,500,000",
    character:
      "The agricultural heart of Martha's Vineyard. West Tisbury combines rural New England charm with increasing luxury development — it's home to the Farmers' Market, Alley's General Store, and large parcels with inland privacy that appeal to writers, artists, and families seeking seclusion.",
    priceRange: "$1M–$8M+",
    description:
      "West Tisbury passed MV's first comprehensive STR restrictions in April 2024: a two-night minimum, one STR per owner, and a 30-day owner-occupancy requirement. These regulations signal a shift back toward traditional second-home use — increasing the need for year-round caretaking over short-term rental management. The town's large parcels and wooded properties create unique challenges around landscaping, deer management, well/septic systems, and wildfire risk during dry periods.",
    caretakingFocus:
      "Property inspections in West Tisbury often require navigating long private driveways and checking large parcels with outbuildings, barns, and studios. Landscaping oversight is particularly important here — the town's agricultural character means properties are often surrounded by conservation land, meadows, and wooded areas that require active management.",
    uniqueChallenges: [
      "Strictest STR regulations on MV (2-night min, 1 per owner, 30-day occupancy)",
      "Large parcels with multiple outbuildings, barns, and studios",
      "Private wells and septic systems — regular monitoring essential",
      "Wooded properties face higher deer, tick, and pest pressure",
      "Long private driveways that need seasonal maintenance (plowing, grading)",
      "Inland location — less salt exposure but more tree/wind damage risk",
    ],
    propertyTypes: [
      "Rural estates on multi-acre lots",
      "Historic farmhouses and converted barns",
      "Modern architect-designed retreats",
      "Properties with conservation land borders",
      "Artist studios/compounds",
    ],
    seasonalNotes:
      "West Tisbury's new STR regulations (April 2024) have shifted many properties away from intensive rental use and toward traditional second-home occupancy. This increases demand for inspection-focused caretaking and reduces turnover management needs.",
  },
  Aquinnah: {
    slug: "aquinnah",
    avgSalePrice: "$2,500,000",
    character:
      "Martha's Vineyard's most remote and most naturally dramatic town. Home to the iconic Gay Head Cliffs, the Wampanoag Tribe of Gay Head (Aquinnah), and some of the island's most exposed oceanfront properties. The smallest MV town by population and housing stock.",
    priceRange: "$1.5M–$10M+",
    description:
      "Aquinnah is the most challenging environment for property caretaking on Martha's Vineyard. Cliff-edge oceanfront homes face extreme weather exposure, including direct Atlantic storm impact, erosion, and relentless salt air. The town's small size means very limited local contractor availability — caretakers must often bring resources from down-island towns. Properties here tend to be either dramatic cliff-top estates or secluded inland retreats, both requiring specialized attention.",
    caretakingFocus:
      "Storm preparedness and coastal erosion monitoring are paramount in Aquinnah. Caretakers need to track erosion setbacks, maintain storm-resistant landscaping, and have rapid-response plans for the most weather-exposed properties on MV. The remote location and limited services make self-sufficient, experienced caretakers essential.",
    uniqueChallenges: [
      "Most extreme weather exposure on MV — direct Atlantic Ocean storms",
      "Coastal erosion threatens cliff-edge properties",
      "Most remote location — farthest from contractors and services",
      "Smallest town — very limited local resources",
      "Wampanoag tribal land governance affects some property areas",
      "Off-grid and solar properties require specialized system knowledge",
      "Limited cell service in some areas complicates monitoring",
    ],
    propertyTypes: [
      "Cliff-top oceanfront estates",
      "Secluded inland retreats",
      "Off-grid and solar-powered homes",
      "Properties with conservation restrictions",
      "Dramatic contemporary architecture",
    ],
    seasonalNotes:
      "Aquinnah's extreme exposure means winter storms are the primary concern. Some cliff-edge properties have experienced significant erosion, making regular photographic documentation and monitoring essential for insurance purposes and long-term planning.",
  },
};

// Pricing benchmark data from market research
export const PRICING_DATA = {
  perVisit: {
    basic: { range: "$60–$100", description: "Bi-monthly inspections, smaller home" },
    standard: { range: "$75–$150", description: "Weekly inspections, mid-size home" },
    premium: { range: "$100–$200+", description: "Weekly + project management, large estate" },
  },
  monthly: {
    basic: { range: "$120–$200", description: "2 visits/month, basic checklist" },
    standard: { range: "$300–$600", description: "Weekly visits, full reports" },
    premium: { range: "$500–$1,000+", description: "Weekly + concierge + vendor coordination" },
    luxury: { range: "$1,000–$4,000+", description: "Full estate management" },
  },
  annual: {
    basic: { range: "$1,440–$2,400", description: "Entry-level monitoring" },
    standard: { range: "$3,600–$7,200", description: "Comprehensive caretaking" },
    premium: { range: "$6,000–$12,000+", description: "Enhanced estate management" },
    luxury: { range: "$15,000–$50,000", description: "Full-service luxury estate" },
  },
  hourly: {
    addOnServices: "$50–$100/hr",
    contractorSupervision: "$65–$75/hr",
    minimumCharge: "1-hour minimum",
  },
  seasonal: {
    openingClosing: "$500–$2,000 each",
    stormResponse: "$200–$500/visit",
    rentalTurnover: "$150–$350/turnover",
    conciergeArrival: "$200–$500/visit",
    emergencyCallout: "$300–$600/call",
  },
};

// Mock caretakers for initial build (replace with DB queries later)
export const MOCK_CARETAKERS = [
  {
    id: 1,
    slug: "vineyard-home-watch",
    name: "Vineyard Home Watch",
    tagline: "Your eyes on the island, 365 days a year",
    description:
      "With over 15 years of experience on Martha's Vineyard, Vineyard Home Watch provides comprehensive property monitoring and caretaking services. Our team of year-round islanders ensures your home is protected through every season — from nor'easters to summer heat waves. We deliver detailed photo reports within 24 hours of every visit.",
    townsServed: ["Edgartown", "Oak Bluffs", "Vineyard Haven"],
    services: [
      "Property Inspections",
      "Storm & Emergency Response",
      "Seasonal Opening & Closing",
      "Contractor Coordination",
    ],
    yearFounded: 2009,
    bondedInsured: true,
    acceptingClients: true,
    differentiator: "24hr Digital Reports",
    phone: "(508) 555-0101",
    email: "info@vineyardhomewatch.com",
    website: "https://vineyardhomewatch.com",
    imageUrl: null,
    featured: true,
  },
  {
    id: 2,
    slug: "island-estate-care",
    name: "Island Estate Care",
    tagline: "Luxury caretaking for discerning homeowners",
    description:
      "Island Estate Care specializes in high-end property management for Martha's Vineyard's most prestigious estates. Our concierge-level service means your home is always guest-ready, whether you're arriving for a weekend or hosting a summer-long rental. White-glove service from a team that understands island living.",
    townsServed: ["Chilmark", "West Tisbury", "Aquinnah"],
    services: [
      "Property Inspections",
      "Concierge & Arrival Prep",
      "Rental Turnover Management",
      "Security Monitoring",
      "Landscaping Oversight",
    ],
    yearFounded: 2015,
    bondedInsured: true,
    acceptingClients: true,
    differentiator: "Luxury Estates Specialist",
    phone: "(508) 555-0202",
    email: "hello@islandestatecare.com",
    website: "https://islandestatecare.com",
    imageUrl: null,
    featured: true,
  },
  {
    id: 3,
    slug: "mv-coastal-caretaking",
    name: "MV Coastal Caretaking",
    tagline: "Protecting waterfront properties since 2012",
    description:
      "MV Coastal Caretaking is the island's specialist for waterfront and beachfront properties. We understand the unique challenges that salt air, storm surge, and coastal erosion pose to your investment. Our team includes a licensed contractor, ensuring we can handle emergency repairs on the spot.",
    townsServed: [
      "Edgartown",
      "Oak Bluffs",
      "Vineyard Haven",
      "Chilmark",
      "West Tisbury",
      "Aquinnah",
    ],
    services: [
      "Property Inspections",
      "Storm & Emergency Response",
      "Seasonal Opening & Closing",
      "Contractor Coordination",
      "Security Monitoring",
    ],
    yearFounded: 2012,
    bondedInsured: true,
    acceptingClients: false,
    differentiator: "Licensed Contractor On Staff",
    phone: "(508) 555-0303",
    email: "info@mvcoastal.com",
    website: "https://mvcoastal.com",
    imageUrl: null,
    featured: true,
  },
  {
    id: 4,
    slug: "oak-bluffs-property-services",
    name: "Oak Bluffs Property Services",
    tagline: "Community rooted, professionally managed",
    description:
      "A family-run operation serving the Oak Bluffs community for three generations. We combine old-fashioned island reliability with modern property management technology. Our team knows every tradesperson on the island by name.",
    townsServed: ["Oak Bluffs", "Vineyard Haven"],
    services: [
      "Property Inspections",
      "Seasonal Opening & Closing",
      "Contractor Coordination",
      "Landscaping Oversight",
    ],
    yearFounded: 1998,
    bondedInsured: true,
    acceptingClients: true,
    differentiator: "4th-Gen Islander Family",
    phone: "(508) 555-0404",
    email: "contact@obpropertyservices.com",
    website: "https://obpropertyservices.com",
    imageUrl: null,
    featured: false,
  },
  {
    id: 5,
    slug: "green-island-caretakers",
    name: "Green Island Caretakers",
    tagline: "Eco-friendly property care for a sustainable island",
    description:
      "Green Island Caretakers is Martha's Vineyard's first eco-certified caretaking company. We use sustainable products, energy-efficient practices, and work with the MV Commission on conservation-friendly property management.",
    townsServed: ["West Tisbury", "Chilmark", "Aquinnah"],
    services: [
      "Property Inspections",
      "Seasonal Opening & Closing",
      "Landscaping Oversight",
      "Concierge & Arrival Prep",
    ],
    yearFounded: 2018,
    bondedInsured: true,
    acceptingClients: true,
    differentiator: "Eco-Certified",
    phone: "(508) 555-0505",
    email: "hello@greenislandmv.com",
    website: "https://greenislandmv.com",
    imageUrl: null,
    featured: false,
  },
  {
    id: 6,
    slug: "mv-guardian-services",
    name: "MV Guardian Services",
    tagline: "Security-first property management",
    description:
      "Founded by a former law enforcement professional, MV Guardian Services brings a security-first approach to property caretaking. We coordinate directly with local police and offer the most thorough security monitoring on the island.",
    townsServed: ["Edgartown", "Oak Bluffs", "Vineyard Haven", "West Tisbury"],
    services: [
      "Property Inspections",
      "Security Monitoring",
      "Storm & Emergency Response",
      "Contractor Coordination",
    ],
    yearFounded: 2016,
    bondedInsured: true,
    acceptingClients: true,
    differentiator: "Ex-Law Enforcement Team",
    phone: "(508) 555-0606",
    email: "info@mvguardian.com",
    website: "https://mvguardian.com",
    imageUrl: null,
    featured: false,
  },
];

export const MOCK_BLOG_POSTS = [
  {
    slug: "do-i-need-a-caretaker-marthas-vineyard",
    title: "Do I Need a Caretaker for My Martha's Vineyard Home?",
    excerpt:
      "If you own a second home on MV and aren't on-island year-round, the answer is almost certainly yes. Here's why — and what happens when you don't have one.",
    author: "MVCaretaking Team",
    publishedAt: "2026-03-15",
    imageUrl: null,
  },
  {
    slug: "cost-of-caretaking-marthas-vineyard-2025",
    title: "What Does Caretaking Cost on Martha's Vineyard in 2025?",
    excerpt:
      "The first transparent pricing guide for MV caretaking: from basic inspections at $60/visit to full estate management at $50,000/year, with real market data.",
    author: "MVCaretaking Team",
    publishedAt: "2026-02-20",
    imageUrl: null,
  },
  {
    slug: "choosing-the-right-caretaker-mv",
    title: "7 Questions to Ask Before Hiring a Martha's Vineyard Caretaker",
    excerpt:
      "Bonded and insured? NHWA accredited? Year-round resident? Here are the 7 questions that separate great MV caretakers from risky ones.",
    author: "MVCaretaking Team",
    publishedAt: "2026-02-05",
    imageUrl: null,
  },
  {
    slug: "insurance-requirements-vacant-mv-homes",
    title: "Insurance Requirements for Vacant Martha's Vineyard Homes",
    excerpt:
      "Your insurance company may deny claims on unattended homes without proof of regular monitoring. Here's what every MV second-home owner needs to know.",
    author: "MVCaretaking Team",
    publishedAt: "2026-01-18",
    imageUrl: null,
  },
  {
    slug: "winter-storm-prep-marthas-vineyard",
    title: "Winter Storm Prep: How to Protect Your MV Home From Nor'easters",
    excerpt:
      "The 2024 season saw 3 major nor'easters hit the Vineyard. Homes without caretakers averaged $35,000 more in storm damage. Here's your complete prep checklist.",
    author: "MVCaretaking Team",
    publishedAt: "2025-11-15",
    imageUrl: null,
  },
  {
    slug: "seasonal-opening-closing-checklist",
    title: "The Complete Seasonal Opening & Closing Checklist for MV Homes",
    excerpt:
      "A single missed step during winterization can mean $100,000+ in damage. Our comprehensive checklist covers every system in your Vineyard home.",
    author: "MVCaretaking Team",
    publishedAt: "2025-09-20",
    imageUrl: null,
  },
  {
    slug: "mv-second-home-management-guide",
    title: "The Complete Guide to Managing a Martha's Vineyard Second Home",
    excerpt:
      "From the $100 trillion generational wealth transfer to the 4,000+ registered STRs, here's everything you need to know about owning and managing a Vineyard property from afar.",
    author: "MVCaretaking Team",
    publishedAt: "2025-08-10",
    imageUrl: null,
  },
  {
    slug: "mv-str-regulations-2025",
    title: "Martha's Vineyard Short-Term Rental Regulations: Town-by-Town Guide (2025)",
    excerpt:
      "Every MV town is now regulating STRs differently. West Tisbury's 30-day occupancy rule, Tisbury's 75-night cap, Chilmark's proposed 95-day limit — here's what owners need to know.",
    author: "MVCaretaking Team",
    publishedAt: "2025-07-15",
    imageUrl: null,
  },
];
