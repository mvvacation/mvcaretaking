import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  params: { slug: string };
};

// Sample full-content articles (in production, these come from DB)
const blogContent: Record<string, string> = {
  "do-i-need-a-caretaker-marthas-vineyard": `
If you own a second home on Martha's Vineyard and you're not on-island year-round, the short answer is: almost certainly yes. Here's the longer answer — and the real-world consequences homeowners face when they skip professional caretaking.

## The Numbers Tell the Story

Martha's Vineyard has over ${"{"}10,700${"}"} seasonal homes — that's 56–63% of all housing units on the island. The average MV home sold for $2.6 million in 2025. Most of these properties sit unattended for 8–10 months per year.

That's millions of dollars of real estate with no one watching it through nor'easters, frozen pipes, power outages, pest invasions, and coastal storms.

## What Can Go Wrong (And How Fast)

Here's what we've seen happen to unmonitored MV homes:

**Frozen Pipes:** A single frozen pipe burst in an unattended Edgartown home caused $140,000 in damage in January 2024. The burst happened on a Monday; it wasn't discovered until a neighbor noticed water coming out the front door on Friday. Four days of continuous water flow destroyed floors, walls, furniture, and created a mold problem that took months to remediate.

**Insurance Denial:** Many homeowners don't realize their insurance policy requires regular monitoring of vacant properties. If you can't prove someone checked your home within the policy's required timeframe (often every 30 days), your claim can be denied entirely.

**Storm Damage Escalation:** A missing shingle in October becomes a major roof leak by December. A small crack in the foundation allows water intrusion that freezes, expands, and becomes a structural issue. Without regular inspections, small problems become expensive disasters.

**Pest Invasion:** Mice, carpenter ants, and termites don't wait for you to return in May. An unchecked infestation over winter can cause thousands in structural damage before you even know it's happening.

## The Insurance Factor

This deserves its own section because it's the most expensive surprise MV homeowners face.

Most standard homeowner insurance policies include a "vacancy clause" — if your home is unoccupied for more than 30–60 days without regular monitoring, the insurer can deny claims. On a $2.6 million property, that's catastrophic.

Professional caretaking provides documented proof of regular monitoring: timestamped photos, inspection reports, and records that satisfy insurance requirements. Think of caretaking fees as insurance for your insurance policy.

## When You Might NOT Need a Caretaker

To be fair, there are situations where professional caretaking may not be necessary:

- You have a trusted, year-round neighbor who checks your property weekly and documents it
- Your property is a simple condo in a managed complex with HOA maintenance
- You visit the island at least monthly, even in winter

For everyone else — and that's the vast majority of seasonal homeowners — professional caretaking isn't a luxury. It's basic property protection.

## What to Expect

A standard MV caretaking arrangement includes:

- Weekly or bi-monthly property inspections with photo reports
- Seasonal opening and closing services
- Storm preparation and post-storm assessment
- Emergency response availability (24/7 for most providers)
- Contractor coordination for repairs and maintenance
- Rental turnover management (if applicable)

Annual costs typically range from $3,600 for basic monitoring to $50,000 for full estate management, depending on property size and service level. On a $2.6M property, that's 0.1%–1.9% of property value — far less than the cost of a single major incident.

## The Bottom Line

Every week on Martha's Vineyard, a homeowner discovers damage that could have been prevented or mitigated by a caretaker. The math is simple: a few thousand dollars annually in caretaking fees protects a multi-million dollar investment.

If you're ready to find the right caretaker for your MV property, our free matching service connects you with vetted, bonded professionals who know your town and your type of property.
  `,
  "cost-of-caretaking-marthas-vineyard-2025": `
One of the most common questions we hear from Martha's Vineyard homeowners is: "How much should I expect to pay for caretaking?" Until now, finding transparent pricing has been nearly impossible — no competitor publishes rates. Here's the first comprehensive guide with real market data.

## Quick Answer: What You'll Pay

- **Basic Home Watch:** $60–$100 per visit, or $120–$200/month
- **Standard Caretaking:** $300–$600/month (most common)
- **Premium Estate Management:** $500–$1,000+/month
- **Full-Service Luxury:** $1,000–$4,000+/month ($15,000–$50,000/year)

The typical MV second-home owner pays between $3,600 and $12,000 annually for comprehensive caretaking.

## Per-Visit Pricing Breakdown

If you prefer a pay-as-you-go arrangement:

**Basic Inspection ($60–$100/visit):**
- Bi-monthly visual walkthrough
- Exterior check only
- Best for smaller homes, condos

**Standard Inspection ($75–$150/visit):**
- Weekly full interior/exterior inspection
- Timestamped photo report within 24 hours
- System checks (HVAC, plumbing, electrical)

**Premium Visit ($100–$200+/visit):**
- Everything in standard, plus project management
- Vendor coordination
- Best for larger estates with active projects

## Monthly Retainer Plans

Monthly retainers are the most common arrangement and provide the best value:

**Basic ($120–$200/month):**
Two visits per month with a standard checklist. Good for simple properties in less-exposed locations.

**Standard ($300–$600/month):**
Weekly visits with full reports. This is what most MV caretakers recommend and most homeowners choose. Includes basic emergency availability.

**Premium ($500–$1,000+/month):**
Weekly visits plus concierge services, vendor coordination, and enhanced availability. Ideal for larger homes and active rental properties.

**Luxury ($1,000–$4,000+/month):**
Full estate management. Your caretaker is essentially your island-based property manager with 24/7 availability, project management, concierge prep, and comprehensive oversight.

## Seasonal & Add-On Costs

These are typically charged in addition to monthly retainers:

- **Seasonal opening:** $500–$2,000
- **Seasonal closing (winterization):** $500–$2,000
- **Storm response call-out:** $200–$500/visit
- **Rental turnover inspection:** $150–$350/turnover
- **Concierge arrival prep:** $200–$500/visit
- **Emergency call-out:** $300–$600/call
- **Hourly add-on work:** $50–$100/hour (1-hour minimum)
- **Contractor supervision:** $65–$75/hour

## What Drives MV Caretaking Costs?

**Island Premium (20–35%):** Everything costs more on an island. Limited labor, ferry logistics, and seasonal demand create a built-in premium over mainland rates.

**Property Size & Complexity:** A 1,200 sq ft Oak Bluffs cottage at $500K is very different from a 6,000 sq ft Chilmark compound at $6M. More structures, more systems, more cost.

**Town & Location:** Up-island properties (Chilmark, West Tisbury, Aquinnah) cost more due to longer drive times and fewer nearby contractors.

**Rental Usage:** STR properties require significantly more attention — turnover inspections, cleaning coordination, guest communication, and regulatory compliance.

**Service Scope:** Basic "eyes on the property" costs a fraction of full estate management with concierge services and 24/7 availability.

## Cost by Town (Rough Guides)

- **Edgartown:** $400–$1,500/month (high STR activity drives turnover costs)
- **Oak Bluffs:** $300–$800/month (more affordable properties, rental-heavy)
- **Vineyard Haven:** $350–$900/month (year-round access advantages)
- **Chilmark:** $800–$4,000/month (largest estates, highest values)
- **West Tisbury:** $400–$1,200/month (large parcels, multiple structures)
- **Aquinnah:** $600–$2,000/month (remote location premium)

## The Math: Caretaking vs. Risk

The average MV home sells for $2,626,357. At $6,000/year for standard caretaking, that's 0.23% of property value — comparable to what you'd pay for insurance.

Now consider the alternative:

- Frozen pipe burst: $20,000–$150,000
- Mold from undetected leak: $15,000–$75,000
- Insurance claim denied (no monitoring proof): full claim value
- Failed septic (no monitoring): $25,000–$60,000

One prevented incident pays for a decade of caretaking.

## How to Get the Best Value

1. **Get multiple quotes** through our free matching service
2. **Bundle services** into annual contracts for better rates
3. **Be specific** about what you need — detailed RFPs get better quotes
4. **Start basic, add later** — you can always increase service level
5. **Ask about off-season rates** — some caretakers offer winter discounts
6. **Check NHWA accreditation** — National Home Watch Association members follow industry standards
  `,
  "choosing-the-right-caretaker-mv": `
Hiring a caretaker for your Martha's Vineyard home is one of the most important decisions you'll make as a second-home owner. The right caretaker becomes your trusted partner on the island. The wrong one can leave your property at risk. Here are 7 essential questions to ask before making your choice.

## 1. Are You Bonded and Insured?

This is non-negotiable. Your caretaker should carry general liability insurance at a minimum, and ideally also be bonded. This protects you if something goes wrong — whether it's accidental damage during a visit or a claim arising from their work on your property.

**What to look for:** Ask for proof of insurance and verify it's current. Most reputable providers will offer this proactively. On Martha's Vineyard, where the average home sells for over $2.6 million, inadequate insurance coverage is a risk you can't afford.

## 2. Are You a Year-Round Island Resident?

Island knowledge matters enormously. A year-round resident understands MV's weather patterns, knows the reliable contractors, has relationships with local services, and can get things done that an off-island company simply can't. They're also available when a January nor'easter hits at 2 AM.

**What to look for:** At minimum, 3+ years of year-round MV residency. The best caretakers often have deep generational ties to the island. Be wary of mainland-based companies that "serve" MV — they can't respond to emergencies in hours, not days.

## 3. Are You NHWA Accredited?

The National Home Watch Association sets industry standards for property monitoring: background checks, insurance minimums, reporting protocols. NHWA accreditation signals a professional operation versus a side hustle.

**What to look for:** Active NHWA membership or equivalent professional affiliation. Only a handful of MV caretakers currently hold this accreditation, and it's a strong differentiator.

## 4. What Does Your Inspection Report Look Like?

Modern caretaking demands documentation. Your caretaker should provide detailed reports with timestamped photos after every visit. This isn't optional — it's how you maintain visibility into your property's condition from hundreds of miles away. It's also what your insurance company needs if you file a claim.

**What to look for:** Ask to see a sample report. The best providers use digital platforms that deliver reports within 24 hours of each visit, with dated photos, issue flagging, and historical tracking.

## 5. How Do You Handle Emergencies?

A nor'easter at 3 AM doesn't wait for business hours. Your caretaker should have a clear emergency response protocol, including after-hours availability and a network of emergency contractors who will actually answer the phone.

**What to look for:** 24/7 phone coverage, defined response time commitments (not "we'll get there when we can"), and an established network of emergency repair contractors. Ask who their go-to plumber, roofer, and electrician are.

## 6. What Are Your Contractor Relationships?

On an island with a limited contractor pool and high demand, relationships matter more than anywhere. A well-connected caretaker can get your plumber to show up next week instead of next month. With the island contractor premium running 20–35% over mainland rates, having someone who knows fair pricing is also valuable.

**What to look for:** Ask specifically about plumber, electrician, roofer, HVAC, and general contractor relationships. Multiple options for each trade is ideal. Ask how they handle situations where their preferred contractor is booked.

## 7. How Many Properties Do You Currently Manage?

This reveals both experience and capacity. Too few properties may indicate a newer operation. Too many might mean your property won't get adequate attention.

**What to look for:** Ask about their client-to-staff ratio and how they ensure quality as they grow. Good providers are transparent about their capacity. A solo operator managing 40+ properties may not be able to give yours the attention it needs during a busy storm week.

## Bonus: Red Flags to Watch For

- No insurance documentation available
- Won't provide references from current clients
- No written contract or service agreement
- No digital reporting capability
- Located off-island or seasonal residents only
- Can't articulate emergency response protocol
- Unclear pricing with lots of "it depends" and no ranges
- Unwilling to provide a sample inspection report

## The Bottom Line

Take your time choosing a caretaker. This is someone who will have keys to your home, will be the first responder when problems arise, and needs to be trustworthy, competent, and communicative.

Our free matching service at MVCaretaking.com takes the guesswork out of this process by pre-vetting providers and matching you based on your specific property, town, and service needs.
  `,
  "insurance-requirements-vacant-mv-homes": `
Here's a scenario that plays out every year on Martha's Vineyard: A homeowner returns in May to find winter storm damage — roof leak, water damage, mold. They file an insurance claim. The insurer asks: "When was your last documented property inspection?" The homeowner can't provide one. Claim denied.

On an island where the average home sells for over $2.6 million, an insurance denial can be financially devastating. Here's what every MV second-home owner needs to know about insuring a seasonal property.

## The Vacancy Problem

Most standard homeowner insurance policies include a "vacancy clause" — if your home is unoccupied for more than 30 to 60 consecutive days, coverage is significantly reduced or suspended entirely. This applies to:

- Vandalism and theft claims
- Water damage claims
- Certain weather-related claims
- Liability claims

With 56–63% of Martha's Vineyard homes classified as seasonal, this affects the majority of island homeowners. If your MV home sits empty from September to May, you could be uninsured for a large portion of the year without realizing it.

## What Insurers Require

Insurance companies serving the MV market typically require one or more of the following for full coverage on seasonal/vacant homes:

**Regular Property Inspections:** Most policies require documented inspections every 7 to 30 days during vacancy periods. "Documented" means timestamped photos and written reports — your neighbor popping by doesn't count unless they're providing formal documentation.

**Water Shut-Off Verification:** Many policies require the water to be shut off during extended vacancy or require proof that an automatic water shut-off system is installed and monitored.

**Temperature Monitoring:** Heat must be maintained at safe minimums (typically 55°F or higher) during winter months to prevent pipe freezing. Some insurers require monitoring systems that alert when temperatures drop.

**Winterization Documentation:** Proof of proper seasonal closing — draining pipes, adding antifreeze, securing the property — is increasingly required for winter coverage.

## How Professional Caretaking Protects You

Professional caretaking directly addresses every insurance requirement:

**Documented Inspections:** Caretakers provide timestamped photo reports after every visit. These reports create a paper trail that satisfies insurer monitoring requirements and provides evidence that the property was regularly attended.

**System Monitoring:** Professional caretakers check heating systems, water systems, and structural integrity on every visit. They catch the frozen pipe before it bursts, the roof leak before it causes mold, the failed sump pump before the basement floods.

**Winterization Records:** A professional seasonal closing follows a documented checklist. Your caretaker creates records of what was done, when, and by whom — exactly what insurers want to see.

**Emergency Response:** When a storm hits, professional caretakers respond quickly with documented post-storm inspections. Quick response + documentation = smooth claims process.

## The MV-Specific Risk Factors

Martha's Vineyard presents unique insurance challenges:

**Coastal Storm Exposure:** The island takes direct hits from nor'easters, and waterfront properties face extreme exposure. Insurers are increasingly restrictive about coastal property coverage.

**High Property Values:** With average sales prices exceeding $2.6 million, the stakes are simply higher. A single uninsured incident can wipe out hundreds of thousands in equity.

**Flood Zone Considerations:** Many MV properties are in FEMA flood zones requiring separate flood insurance, which has its own monitoring and maintenance requirements.

**Salt Air Corrosion:** The island environment accelerates deterioration of roofing, siding, electrical components, and structural elements. Regular monitoring catches degradation before it becomes an insurance issue.

## What to Do Right Now

1. **Review your policy's vacancy clause.** Call your insurer and ask specifically: what monitoring is required during extended vacancy? Get it in writing.

2. **Confirm your water shut-off procedure.** Ensure your winterization process meets your insurer's requirements. Consider installing a smart water shut-off system with automatic leak detection.

3. **Hire a professional caretaker** who provides documented, timestamped inspection reports. Make sure their reporting format satisfies your insurer's requirements.

4. **Keep all documentation.** Every inspection report, every seasonal closing checklist, every storm response report. Store them digitally with backups. This is your evidence if you ever need to file a claim.

5. **Consider a specialized insurer.** Some insurers specialize in high-value seasonal properties and understand the MV market. They may offer better terms if you can demonstrate professional monitoring.

## The Bottom Line

Professional caretaking isn't just about maintaining your property — it's about maintaining your insurance coverage. The cost of annual caretaking ($3,600–$50,000 depending on service level) is a tiny fraction of what you stand to lose if a claim is denied.

Think of your caretaking fee as insurance for your insurance.
  `,
  "winter-storm-prep-marthas-vineyard": `
The 2024 winter season brought 3 major nor'easters to Martha's Vineyard, with sustained winds exceeding 60 mph and significant coastal flooding. Homes without professional caretakers sustained an estimated $35,000 more in average storm damage than monitored properties. Here's your complete prep checklist — and why on-island response makes all the difference.

## Before Storm Season (October–November)

The best time to prepare for winter storms is before the season begins. Here's what your caretaker should be doing:

**Exterior Preparation:**
- Inspect and clean gutters and downspouts — clogged gutters cause ice dams
- Check roof for loose or damaged shingles (MV roofers book up fast — act early)
- Secure or store outdoor furniture, grills, umbrellas, and decorations
- Verify storm shutters are functional and accessible
- Clear drainage paths around the foundation
- Trim branches within 15 feet of the house (wind-driven branches cause major damage)
- Check condition of siding, especially on ocean-facing walls (salt corrosion)
- Secure dock lines and boat covers if applicable

**Interior Preparation:**
- Test sump pumps and backup battery systems
- Verify generator fuel levels and run a full test cycle under load
- Check that heating systems are operational (minimum 55°F setting)
- Ensure water heater is functioning properly
- Set thermostats to safe minimums with temperature monitoring
- Check all windows and doors seal properly (replace weather stripping as needed)
- Ensure dehumidifiers are running in basements and crawl spaces
- Locate and label all shut-off valves (water, gas, electric)

## During a Storm: Your Caretaker's Role

This is where the value of an on-island professional becomes undeniable. While you're watching the Weather Channel from Boston or New York, your caretaker should be:

- Monitoring conditions in real-time from their home on MV
- Available by phone 24/7 for updates and decisions
- Ready to respond as soon as conditions are safe — often within hours of the storm passing
- Coordinating with emergency contractors on standby
- Checking neighboring properties for collateral damage (fallen trees, debris)

## Post-Storm Inspection (Within 24 Hours)

Your caretaker should reach your property as soon as conditions allow — ideally within hours of the storm ending:

**Exterior Walkthrough:**
- Full roof inspection (from ground level with binoculars + close inspection if safe)
- Check for missing, lifted, or damaged shingles
- Inspect siding for impact damage or wind damage
- Check all windows for breakage or seal failure
- Inspect foundation for water intrusion or structural stress
- Document fallen trees, branches, or debris on property
- Check seawalls, retaining walls, and erosion on waterfront properties
- Inspect dock, boat, and waterfront structures if applicable

**Interior Inspection:**
- Check ceilings and walls for water stains or active leaks
- Inspect basement and crawl spaces for water intrusion
- Verify heating system is running and at proper temperature
- Check sump pump — is it cycling? Is the pit full?
- Test all GFCIs and circuit breakers
- Check for broken pipes or plumbing damage from power surges
- Verify generator operation (did it kick in? Is fuel adequate?)

**Documentation:**
- Timestamped photos of all findings — exterior and interior
- Written report delivered within 24 hours
- Flagging of any items requiring immediate attention
- Recommendations for professional inspection or repair
- All reports archived for insurance purposes

## Emergency Repairs: The Golden Window

The first 24–48 hours after a storm are critical. A tarp on a damaged roof within hours prevents tens of thousands in secondary water damage. Boarding a broken window before the next rain event protects your interior.

Professional caretakers maintain relationships with emergency contractors who respond to their calls first. On an island with limited contractors, this priority access is invaluable during storm season when everyone needs help simultaneously.

## Storm-Specific Risks by Town

**Edgartown & South Shore:** Direct exposure to southeast storms. Waterfront properties along South Beach and the outer harbor face the most extreme conditions.

**Chilmark (Squibnocket):** Some of the most exposed coastline on MV. Cliff-edge properties face erosion risk with every major storm event.

**Aquinnah (Gay Head):** Maximum Atlantic exposure. The most isolated properties on MV with the longest emergency response times.

**Oak Bluffs & Vineyard Haven:** More protected harbors but vulnerable to storm surge, especially along Nantucket Sound.

**West Tisbury:** Inland protection from coastal surge but vulnerable to wind damage on large tree-lined properties.

## The Cost Comparison

**Average storm damage repair cost (unmonitored home):** $35,000+
**Average storm response visit (professional caretaker):** $200–$500
**Emergency tarp or board-up:** $300–$1,000
**Annual caretaking contract:** $3,600–$12,000

One prevented disaster pays for years of professional monitoring.

## The Bottom Line

Martha's Vineyard sits in one of the most active storm corridors on the East Coast. If you own a home here and aren't on-island during winter, professional caretaking isn't optional — it's how you protect a multi-million dollar investment from the storms that hit every single year.
  `,
  "seasonal-opening-closing-checklist": `
A single missed step during winterization can mean $100,000+ in damage. A poorly executed spring opening can leave you with a house that's not ready when you arrive Memorial Day weekend. This comprehensive checklist covers every system in your Martha's Vineyard home.

## Fall Closing Checklist (October–November)

### Plumbing & Water Systems
- Shut off the main water supply at the street or well
- Open all faucets (hot and cold) to drain lines
- Flush all toilets and hold the handle to empty tanks
- Add RV antifreeze to every drain trap (sinks, tubs, showers, toilets, floor drains)
- Drain and winterize the water heater
- Disconnect and drain outdoor hoses; shut off exterior hose bibs
- Winterize irrigation system (compressed air blow-out)
- Drain pool, hot tub, or outdoor shower — or arrange winterization cover
- Drain washing machine hoses; run a short cycle to clear
- Turn off ice maker and drain the line
- Document everything with photos

### HVAC & Electrical
- Set heating to minimum safe temperature (55°F) — never lower on MV
- Clean or replace furnace filters
- Test generator under full load and verify fuel supply
- Arrange generator maintenance service for winter
- Turn off A/C units and cover outdoor condensers
- Set light timers for security (randomize for occupied appearance)
- Unplug non-essential electronics and appliances (surge protection)
- Test smoke detectors, CO detectors, and replace batteries
- Install or verify temperature monitoring sensors (smart thermostat recommended)
- Check that sump pump and backup battery are operational

### Kitchen & Appliances
- Empty refrigerator completely
- Prop door open slightly if turning off (prevents mold/mildew)
- Run disposal with ice and citrus, then empty
- Run dishwasher empty cycle, prop door open
- Remove ALL perishable food — mice will find anything you leave
- Clean oven, stovetop, and range hood filter
- Empty and clean all cabinets of food items

### Security & Exterior
- Lock all windows, doors, and garage
- Set alarm system and verify monitoring is active
- Store or secure all outdoor furniture, cushions, grills, umbrellas
- Clean gutters and verify downspouts direct water away from foundation
- Check roof for damage (address before winter)
- Trim branches within strike distance of the house
- Arrange mail hold, package forwarding, or caretaker collection
- Inform trusted neighbors and caretaker of departure date
- Provide caretaker with current emergency contacts and preferences
- Photograph the condition of every room for records

### MV-Specific Closing Tasks
- Secure dock lines and winterize boat systems
- Store kayaks, paddleboards, and beach gear
- Check seawall or bulkhead condition before storm season
- Verify flood insurance is current if in flood zone
- Notify your insurance company the property will be in seasonal vacancy
- Confirm your caretaker's winter inspection schedule satisfies insurance requirements

## Spring Opening Checklist (April–May)

### Plumbing & Water Systems
- Turn on main water supply SLOWLY — watch for leaks at every fixture
- Check every faucet, toilet, and fixture for drips or running
- Flush all RV antifreeze by running water through every drain
- Fill water heater, then turn on and test (wait for full heating cycle)
- Connect outdoor hoses and test hose bibs
- Activate irrigation system — check each zone for damage
- Open pool or hot tub for season (schedule pool service)
- Run washing machine and dishwasher through complete cycles
- Turn on ice maker and verify water line

### HVAC & Electrical
- Test heating AND cooling systems
- Replace furnace and AC filters
- Service generator (oil change, filter, spark plug) if not done in fall
- Check all electrical outlets — test every GFCI
- Test and reset all circuit breakers
- Update light timers for summer schedule
- Test smoke detectors and CO detectors — replace any dead batteries
- Verify temperature monitoring is active and calibrated

### Exterior & Grounds
- Walk entire exterior perimeter — document any winter damage
- Inspect roof from ground level — look for missing shingles, flashing damage
- Check gutters and downspouts are clear and attached
- Inspect foundation for new cracks, water intrusion stains, or frost heave
- Check all windows and doors for seal integrity
- Set up outdoor furniture
- Assess landscaping — schedule spring cleanup and pruning
- Check driveway, walkways, and steps for frost damage or heaving
- Inspect deck, porch, and railings for winter damage
- Check dock, boat, and waterfront structures if applicable

### Interior
- Air out the home — open windows on a dry, warm day for several hours
- Schedule professional deep clean before arrival
- Make beds with fresh linens
- Check for any evidence of pest activity (droppings, damage, nests)
- Test internet, cable, streaming connections
- Stock basic supplies (paper goods, cleaning supplies, pantry staples)
- Update emergency contact list (post on refrigerator)
- Set up outdoor shower for the season
- Test garage door opener
- Take dated photos documenting opening condition

## Pro Tips From MV Caretakers

**Schedule early.** MV caretakers book up fast in spring. Schedule your opening date by February at the latest. Memorial Day weekend is the most requested opening date — don't assume it's available.

**Create a property manual.** Document your home's specific systems: where every shut-off valve is, which breaker controls what, HVAC model numbers, contractor contact info. Leave a copy in the house and share one with your caretaker.

**Consider a mid-winter check.** Even with full winterization, a mid-January or mid-February inspection catches issues early. Heating system failures, ice dam formation, and storm damage are all more likely in deep winter.

**Invest in smart monitoring.** A smart thermostat, water leak sensors, and a security camera at minimum. These give you (and your caretaker) real-time visibility between visits.

**Document everything.** Photos at closing and opening protect you for insurance purposes and create a historical record of your home's condition. Good caretakers make this standard practice.

A professional MV caretaker will follow a customized version of this checklist specific to your property, systems, and preferences. If you don't have one yet, we can match you with the right professional for your home.
  `,
  "mv-second-home-management-guide": `
Martha's Vineyard is entering a new era for second-home ownership. A $100 trillion generational wealth transfer is underway. Over 4,000 properties are now registered as short-term rentals. Every town is implementing new STR regulations. And with average sale prices exceeding $2.6 million, the stakes have never been higher.

Whether you're a longtime Vineyard family or a first-time buyer, here's everything you need to know about managing an MV property from the mainland.

## The MV Market in 2025

The numbers paint a clear picture of why professional property management matters:

- **17,500+ total housing units** on the island
- **10,700+ seasonal homes** (56–63% of all housing)
- **$2,626,357 average sale price** in 2025
- **$1,695,000 median sale price** in 2025
- **$780M total sales volume** across 297 transactions
- **4,000+ registered short-term rentals** generating $9.4M in tax revenue

This is an island where the majority of homes sit unattended for most of the year, with property values that demand serious attention.

## Understanding Your Town

Each of the six MV towns has distinct characteristics that affect how you manage your property:

**Edgartown** ($3.6M avg): The volume leader with the highest STR concentration (~1,400 registered rentals). If you're renting, expect the highest turnover management needs on the island. Salt air corrosion on harbor properties is a constant battle.

**Chilmark** ($6.4M avg): The highest property values and most complex estates. Full estate management is the norm, not luxury. Remote up-island location means longer contractor response times and higher caretaking intensity.

**West Tisbury** ($2.5M avg): Just passed MV's strictest STR regulations (April 2024): 2-night minimum, 1 STR per owner, 30-day occupancy requirement. The agricultural character means large parcels with outbuildings that need attention.

**Aquinnah** ($2.5M avg): The most remote and weather-exposed town. Coastal erosion is an active threat. Limited local services mean your caretaker needs to be self-sufficient and well-connected.

**Vineyard Haven** ($1.75M avg): The year-round hub with the most practical infrastructure. New 75-night STR cap affecting rental strategies. Best contractor access of any town.

**Oak Bluffs** ($1.2M avg): The most accessible entry point to MV ownership. Highest rental ROI potential at entry price points. Older housing stock requires more hands-on maintenance.

## The Caretaking Decision

With $2.6M average property values and 8–10 months of owner absence, professional caretaking isn't optional — it's standard practice. Here's how to think about it:

**What a Caretaker Does:**
- Weekly property inspections with photo documentation
- Seasonal opening and closing (winterization/de-winterization)
- Storm preparation and post-storm assessment
- 24/7 emergency availability
- Contractor coordination and project oversight
- Rental turnover management (if applicable)
- Insurance compliance through documented monitoring

**What It Costs:**
- Basic monitoring: $120–$200/month
- Standard caretaking: $300–$600/month (most common)
- Premium estate management: $500–$1,000+/month
- Full-service luxury: $1,000–$4,000+/month

**The ROI:**
At 0.1%–1.9% of property value annually, caretaking costs are dwarfed by the cost of a single major incident. Frozen pipe burst: $20,000–$150,000. Insurance denial from lack of monitoring: potentially the entire claim value.

## STR Regulations: Town by Town

If you rent your MV property, you need to understand the rapidly evolving regulatory landscape:

**West Tisbury (April 2024):** 2-night minimum stay, 1 STR per owner, 30-day owner-occupancy requirement. The strictest rules on MV.

**Vineyard Haven/Tisbury:** 75-night annual cap per property, $115 annual registration fee, $40K budgeted for enforcement/inspection.

**Chilmark:** Proposed 95-day annual STR cap — still being debated.

**Edgartown:** ~1,400 registered rentals, highest volume. Regulations evolving.

**Oak Bluffs:** Active regulation discussions. High rental density.

**Aquinnah:** Smallest market, least regulatory pressure currently.

**What This Means for Management:** Your caretaker needs to track rental nights, ensure compliance with town-specific rules, coordinate with guests, and manage turnover — all while maintaining the property between rentals. The regulatory complexity is increasing the value of professional management.

## The Island Contractor Reality

Everything costs more on an island. Expect a 20–35% premium over mainland rates for any contractor work. The reasons are real:

- Ferry logistics add time and cost to every job
- Limited labor pool means high demand for skilled trades
- Seasonal work compression — everyone needs work done in the same months
- Material delivery costs are significantly higher

**How to manage it:** A well-connected caretaker is your best asset for navigating the contractor landscape. They know who does quality work, who shows up on time, and what constitutes a fair price on MV. They can often get priority scheduling through established relationships.

## Insurance: The Hidden Requirement

Most MV homeowners don't realize their insurance policy requires regular documented monitoring during vacancy periods (typically every 7–30 days). Without it, claims can be denied.

Professional caretaking provides the documentation trail your insurer needs: timestamped photos, written inspection reports, and records of property condition throughout the year. This isn't a nice-to-have — it's the difference between a paid claim and a devastating denial.

## Getting Started

If you're a new MV homeowner, here's your priority checklist:

1. **Hire a caretaker** before your first departure from the island
2. **Review your insurance policy** — understand what monitoring is required
3. **Create a property manual** with all systems, shut-offs, and contacts documented
4. **Install smart monitoring** — thermostat, water leak sensors, security camera minimum
5. **Understand your town's STR rules** before listing for rental
6. **Build contractor relationships** through your caretaker
7. **Budget 1–2% of property value** annually for caretaking and maintenance

Our free matching service connects you with vetted, bonded caretakers who specialize in your town and property type. There's no obligation — just a better way to protect your investment.
  `,
  "mv-str-regulations-2025": `
Martha's Vineyard is in the middle of an island-wide reckoning with short-term rentals. With over 4,000 registered STRs generating $9.4 million in tax revenue, every town is now actively regulating the market — and each one is doing it differently. Here's what property owners need to know in 2025.

## The Big Picture

Short-term rentals have transformed Martha's Vineyard over the past decade. What started as informal summer lets has become a massive industry:

- **4,000+ registered STRs** across the island
- **$9.4 million in STR tax revenue** (community impact fee)
- **Edgartown leads** with approximately 1,400 registered rentals
- **Every town** is now either implementing or debating STR regulations

For property owners, the message is clear: the era of unregulated MV rentals is over. Understanding your town's specific rules is now essential to legal and profitable property management.

## Town-by-Town Breakdown

### West Tisbury: The Strictest Rules on MV

**Effective April 2024**, West Tisbury passed the island's most comprehensive STR restrictions:

- **2-night minimum stay** — no single-night rentals
- **One STR per owner** — can't operate multiple rental properties
- **30-day owner-occupancy requirement** — owner must occupy the property for at least 30 days per year
- **Registration required** with the town

**What this means:** West Tisbury has essentially moved to protect its agricultural, community character by limiting intensive rental activity. Properties that were running back-to-back weekly rentals all summer will need to adjust. The 30-day occupancy rule ensures the property is an actual second home, not purely an investment.

**Caretaking impact:** Less intensive turnover management needed, but more focus on year-round maintenance and the longer-stay guest experience. Caretakers should help owners track compliance with the 30-day occupancy requirement.

### Vineyard Haven (Tisbury): The Night Cap Approach

Tisbury has taken a different approach to STR regulation:

- **75-night annual cap** per property — once you hit 75 rental nights in a calendar year, you're done
- **$115 annual registration fee** per STR property
- **$40,000 budgeted for inspection and enforcement** — the town is serious about compliance
- **Applies to all short-term rentals** below 31 consecutive nights

**What this means:** The 75-night cap forces owners to choose their rental windows strategically. At $500–$2,000/night for prime summer weeks, most owners will prioritize peak season (late June through early September) and go dark the rest of the year.

**Caretaking impact:** Caretakers need to help owners track rental nights against the cap. The enforcement budget signals that the town will be actively checking — non-compliance could mean fines or loss of registration. Professional tracking and documentation becomes essential.

### Chilmark: The Proposed 95-Day Cap

Chilmark is actively debating STR regulations with a proposed framework:

- **95-day annual cap** on STR activity (proposed, not yet enacted)
- **Town Meeting debate** ongoing — final rules may differ
- **Registration system** likely to be implemented

**What this means:** At Chilmark's average sale price of $6.4 million, most properties are not primarily rental investments — they're personal estates that occasionally rent during peak weeks. A 95-day cap would still allow 13+ weeks of rental, which covers most of the traditional summer season.

**Caretaking impact:** Full estate management remains the primary need. Rental management is secondary to comprehensive property care for Chilmark's high-value estates.

### Edgartown: The Volume Leader

Edgartown has the most complex STR landscape on MV:

- **~1,400 registered short-term rentals** — by far the most of any town
- **Active regulatory discussions** — rules are evolving
- **Highest rental activity volume** on the island
- **Mixed property types** from historic in-town homes to sprawling Katama estates

**What this means:** Edgartown's high STR concentration creates both opportunity (rental income potential is highest here) and complexity (competition, regulations, turnover demands). Expect regulations to tighten as the town addresses quality-of-life concerns from year-round residents.

**Caretaking impact:** Turnover management is a primary need. With peak-week rentals commanding $10,000–$75,000, professional turnover coordination — cleaning crew management, damage inspections, guest readiness checks — is essential to protecting both guest experience and property condition.

### Oak Bluffs: Rental-Driven Investment

Oak Bluffs has the most rental-driven property market on MV:

- **High rental concentration** at entry and mid-level price points
- **Active regulation discussions** ongoing
- **Most diverse property mix** — Victorian cottages, waterfront homes, modern builds
- **Back-to-back weekly rentals** common June through September

**What this means:** Oak Bluffs properties often function primarily as income-producing investments. Regulation will likely be shaped by balancing economic benefit with community concerns. The town's cultural identity (Campground, Gingerbread cottages, African-American heritage) adds unique considerations.

**Caretaking impact:** Highest turnover frequency of any town at the entry price point. Caretakers managing OB rentals need efficient turnover systems and strong relationships with cleaning crews.

### Aquinnah: Minimal Regulatory Pressure

Aquinnah has the least STR activity of any MV town:

- **Smallest housing stock** on the island
- **Lowest rental volume** — most properties are personal use
- **Minimal regulatory pressure** currently
- **Wampanoag tribal governance** affects some land and property considerations

**What this means:** Aquinnah is unlikely to be the first to impose strict STR rules given its small market. Properties here are primarily personal retreats, and the caretaking focus is on property protection and estate management rather than rental optimization.

## Compliance Best Practices

1. **Register your property** with your town immediately if you haven't already. Operating unregistered is the fastest way to draw enforcement attention.

2. **Track rental nights** meticulously if your town has a cap. Use a spreadsheet or property management software — don't rely on memory.

3. **Know your occupancy tax obligations.** MV's community impact fee applies to all STR activity. Not collecting and remitting it is a compliance failure.

4. **Work with your caretaker** on compliance. They should help you track nights, manage turnovers, and ensure the property meets code between guests.

5. **Stay current.** STR regulations are actively evolving. What's true today may change at the next Town Meeting. Follow your town's government website and attend meetings (virtually if necessary).

6. **Document everything.** Rental agreements, guest communications, tax payments, inspection reports. If an enforcement officer comes knocking, documentation is your best defense.

## What's Next?

The trend is clear: MV towns are moving toward more regulation, not less. Property owners who adapt early — understanding their rules, registering properly, managing professionally — will be positioned to continue benefiting from one of the most lucrative rental markets in New England.

The key insight: the towns that have implemented regulations are trying to balance two legitimate interests — homeowner rights to rent their property against community character and housing availability for year-round residents. Working within the framework, rather than trying to skirt it, is the smart long-term strategy.

Our caretaker network stays current on every town's regulations and can help you navigate the complexity. Reach out for a free consultation.
  `,
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://mvcaretaking.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[params.slug] || "";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "MVCaretaking",
      url: "https://mvcaretaking.com",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mvcaretaking.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://mvcaretaking.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://mvcaretaking.com/blog/${params.slug}` },
    ],
  };

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    return text
      .trim()
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-serif font-bold text-navy-900 mt-10 mb-4"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="text-xl font-semibold text-navy-900 mt-8 mb-3"
            >
              {trimmed.slice(4)}
            </h3>
          );
        }
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={i} className="font-semibold text-navy-900 mt-4 mb-2">
              {trimmed.slice(2, -2)}
            </p>
          );
        }
        if (trimmed.startsWith("- ") || trimmed.startsWith("- [ ]")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^- (\[ \] )?/, "").trim());
          return (
            <ul key={i} className="space-y-1.5 my-3">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-navy-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s+/, "").trim());
          return (
            <ol key={i} className="space-y-1.5 my-3 list-decimal list-inside">
              {items.map((item, j) => {
                const parts = item.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <li key={j} className="text-navy-700 leading-relaxed">
                    {parts.map((part, k) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={k} className="font-semibold text-navy-900">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </li>
                );
              })}
            </ol>
          );
        }
        // Bold text processing
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-navy-700 leading-relaxed mb-4">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="font-semibold text-navy-900">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        );
      });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <section className="bg-navy-950 text-white section-padding pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent" />
        <div className="container-narrow max-w-3xl mx-auto relative">
          <Breadcrumbs dark items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-navy-400">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.author}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          {content ? (
            <div className="prose-like">{renderContent(content)}</div>
          ) : (
            <p className="text-navy-500 italic">
              Full article content coming soon.
            </p>
          )}

          {/* CTA */}
          <div className="mt-16 bg-gold-50/50 rounded-2xl p-8 border border-gold-200/50 text-center">
            <h3 className="text-xl font-serif font-bold text-navy-900">
              Need a Caretaker for Your MV Home?
            </h3>
            <p className="mt-2 text-sm text-navy-600">
              Get matched with vetted providers for free — no obligation.
            </p>
            <Link href="/get-a-quote" className="btn-primary mt-4">
              Get a Free Quote →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-xs text-navy-400 leading-relaxed">
            This article is for informational purposes only and does not
            constitute professional, legal, insurance, or financial advice.
            Consult qualified professionals for guidance specific to your
            property and situation. MVCaretaking.com is a matching service — we
            do not provide caretaking services directly.
          </p>
        </div>
      </section>
    </>
  );
}
