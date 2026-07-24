// ============================================================
//  STRUCTURA ROOFING CO. — BLOG DATA FILE
//  ============================================================
//  HOW TO ADD A NEW BLOG POST:
//
//  1. Copy the template at the BOTTOM of this file
//  2. Paste it at the TOP of the BLOGS array (inside the [ ])
//     so the newest post shows first on the blog page
//  3. Fill in all fields — especially id, title, date, content
//  4. Save the file — the post appears automatically!
//
//  TIPS:
//  - id must be a unique number — increment by 1 each time
//  - Find free images at https://unsplash.com
//    Right-click any photo → Copy Image Address → paste as image
//  - Use <p> tags for paragraphs in the content field
//  - Use <h3> for section headings inside the article
//  - Use <ul><li> for bullet lists
//  - category options: Maintenance, Installation, Storm Damage,
//    Commercial, Inspections, Materials, Insurance
// ============================================================

const BLOGS = [

  // ── POST 3 ────────────────────────────────────────────────
  {
    id: 3,
    title: "How to Read a Roofing Estimate: What Every Line Item Means",
    date: "April 8, 2026",
    dateISO: "2026-04-08",
    category: "Installation",
    author: "Structura Roofing Team",
    authorRole: "Denver Roofing Specialists",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85&fit=crop",
    excerpt: "A detailed roofing proposal can run several pages. Understanding what each line item represents helps you compare contractors fairly and avoid hidden surprises after the job is done.",
    tags: ["Estimates", "Pricing", "Installation", "Tips"],
    content: `
      <p>Most homeowners receive a roofing estimate, glance at the bottom-line number, and either accept or decline based on that figure alone. This approach almost always leads to misunderstandings, scope disputes, or surprise charges after the project is underway. Understanding what a professional estimate actually contains puts you in control of the decision.</p>

      <h3>Tear-Off and Disposal</h3>
      <p>Before any new roofing can be installed, the existing material must be removed. This line item covers labor, equipment, and dumpster fees for stripping your current roof down to the deck. On most residential projects, this represents 10–15% of the total cost. Be cautious of any contractor who proposes installing new shingles over existing layers — while legal in some municipalities, it voids most manufacturer warranties and hides existing damage.</p>

      <h3>Decking Inspection and Repair</h3>
      <p>Once the old roofing is removed, the plywood or OSB sheathing underneath is inspected. Most estimates include a line item for a set number of deck boards at a per-sheet rate, with a note that additional damaged boards will be billed at the same rate. A reputable contractor lists this separately so you can see exactly what you are paying for any repairs discovered during installation.</p>

      <h3>Underlayment</h3>
      <p>Underlayment is the water-resistant barrier installed directly on the deck beneath your shingles. Standard synthetic underlayment covers the main field of the roof. Ice and water shield — a self-adhering membrane — is required by Colorado building code in the first three feet from the eave edge and in valleys. These should appear as separate line items because they use different materials at different price points.</p>

      <h3>Shingles or Primary Roofing Material</h3>
      <p>This is typically the largest single line item. A professional estimate specifies the manufacturer, product line, color, and warranty class of the shingles. For Colorado properties, look for Class 4 impact-resistant ratings — these qualify for insurance premium discounts with most carriers and hold up significantly better during hail seasons.</p>

      <h3>Flashing</h3>
      <p>Metal flashing seals the joints where your roof meets vertical surfaces — chimneys, skylights, walls, and roof penetrations. Step flashing, counter flashing, and valley flashing each serve different purposes. This line item should specify whether existing flashing is being reused (acceptable in some cases) or replaced entirely (preferable when re-roofing).</p>

      <h3>Ventilation</h3>
      <p>Proper attic ventilation is critical for roof lifespan and energy efficiency. This covers ridge vents, intake vents, and any required upgrades to meet Colorado building code. Inadequate ventilation is one of the leading causes of premature shingle failure — if ventilation is missing from an estimate entirely, ask why.</p>

      <h3>Cleanup and Haul-Away</h3>
      <p>Debris removal, magnetic nail sweeping, and site restoration should be included explicitly. Vague estimates that roll this into labor often lead to disputes about who is responsible for lingering debris, nails in the driveway, or damage to landscaping.</p>

      <h3>Permits</h3>
      <p>Colorado counties require building permits for full roof replacements. The permit fee should appear as its own line item. If a contractor offers to skip the permit to reduce cost, decline — unpermitted work can create serious problems when you sell the property or file an insurance claim.</p>

      <h3>Comparing Two Estimates Properly</h3>
      <p>When comparing proposals from multiple contractors, verify that each one specifies the same shingle product and warranty class, includes new underlayment and flashing (not reuse), addresses ventilation, and includes permit fees. A lower estimate that omits any of these items is not actually a lower price — it is a reduced scope that will cost you more in the long run.</p>
    `
  },

  // ── POST 2 ────────────────────────────────────────────────
  {
    id: 2,
    title: "Colorado Hail Season: What Homeowners Need to Know Before the Storm Hits",
    date: "April 3, 2026",
    dateISO: "2026-04-03",
    category: "Storm Damage",
    author: "Structura Roofing Team",
    authorRole: "Denver Roofing Specialists",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1200&q=85&fit=crop",
    excerpt: "Colorado sits in the heart of Hail Alley — an area that sees more hail activity than almost anywhere in the country. Knowing what to do before, during, and after a storm can save you thousands of dollars and months of headaches.",
    tags: ["Storm Damage", "Hail", "Insurance", "Colorado"],
    content: `
      <p>The Front Range of Colorado consistently ranks among the most hail-prone regions in the United States. Denver and its surrounding communities average 7–10 significant hail events per year, with hailstones frequently reaching golf-ball size or larger. For homeowners, this is not a matter of if your roof will take a hit — it is a matter of when, and whether you will be prepared when it happens.</p>

      <h3>Understanding Hail Damage</h3>
      <p>Hail damage to roofing materials is not always visible from the ground. What looks like a minor storm from your window may have left dozens of impact marks on your shingles, each one compromising the granule surface that protects the asphalt layer underneath. Over the following months, UV exposure accelerates deterioration at these impact points, leading to leaks that often appear long after the storm has been forgotten.</p>
      <p>The key indicators of hail impact on asphalt shingles include circular bruises or soft spots, granule loss concentrated around impact marks creating bare patches, and cracked or fractured shingles. On gutters and downspouts, hail leaves visible dents and dings that can help document the severity of a storm for insurance purposes.</p>

      <h3>What to Do Immediately After a Storm</h3>
      <p>First, do not get on your roof. Post-storm roofing surfaces can be slippery and structurally compromised in ways that are not apparent from above. A slip from a wet or damaged roof is a serious safety risk.</p>
      <p>Document everything you can see from the ground — photograph your property, gutters, downspouts, and any exterior surfaces that show impact marks. Note the date and time of the storm. Check local weather services for hail reports in your zip code, which provide official size and intensity data that supports insurance claims.</p>
      <p>Then schedule a professional inspection promptly. Most insurance policies have a window for filing storm damage claims — typically one year from the date of the event, though some carriers are tightening this to as little as six months in hail-prone markets.</p>

      <h3>The Insurance Claim Process</h3>
      <p>Contact your insurance carrier to open a claim. They will schedule an adjuster to inspect your property. Having your own independent inspection report from a licensed roofing contractor before the adjuster visit gives you a documented baseline and ensures nothing is missed during the assessment.</p>
      <p>Reputable roofing contractors will attend the adjuster inspection on your behalf, point out specific damage areas, and provide supplemental documentation if the initial assessment is incomplete. This advocacy is a standard part of storm damage restoration — not an upsell — and can significantly affect the final settlement amount.</p>

      <h3>Choosing Impact-Resistant Shingles After Repair</h3>
      <p>If your roof requires replacement after a hail event, consider upgrading to Class 4 impact-resistant shingles. These products are tested against two-inch steel ball impacts and hold up measurably better in subsequent hail events. More importantly, most Colorado insurance carriers offer premium discounts of 15–30% for homes with Class 4 rated roofing — meaning the upgrade often pays for itself within five to seven years through reduced premiums.</p>

      <h3>Preparing Before Storm Season</h3>
      <p>Schedule a roof inspection in late winter or early spring, before hail season begins. A documented pre-season inspection establishes your roof's baseline condition, which is invaluable if you need to file a claim later. It also catches any existing damage or wear that could make a marginal roof fail entirely during a severe storm.</p>
      <p>Trim overhanging tree branches that could become projectiles or abrade your shingles during high-wind events. Clear gutters and downspouts so drainage systems function properly if heavy rain accompanies hail. These are small investments of time that substantially reduce your storm vulnerability.</p>
    `
  },

  // ── POST 1 ────────────────────────────────────────────────
  {
    id: 1,
    title: "5 Warning Signs Your Roof Needs Replacing — Not Just Repairing",
    date: "March 27, 2026",
    dateISO: "2026-03-27",
    category: "Maintenance",
    author: "Structura Roofing Team",
    authorRole: "Denver Roofing Specialists",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&fit=crop",
    excerpt: "Knowing the difference between a roof that needs a repair and one that needs full replacement can save you from throwing money at a system that has already reached the end of its service life.",
    tags: ["Maintenance", "Inspection", "Replacement", "Tips"],
    content: `
      <p>One of the most common mistakes homeowners make is repeatedly patching a roof that has already reached the end of its functional lifespan. Each repair buys a little more time but does nothing to address the underlying degradation — and the cumulative cost of those repairs often exceeds what a timely replacement would have cost. Here are five signs your roof has crossed the line from repairable to replaceable.</p>

      <h3>1. Age Beyond 20 Years for Asphalt Shingles</h3>
      <p>Standard three-tab asphalt shingles carry a 20–25 year rated lifespan under normal conditions. Architectural shingles are rated for 25–30 years. If your roof is approaching or has passed these thresholds, even minor issues like a single leak or missing shingles indicate systemic material degradation rather than isolated damage.</p>
      <p>In Colorado's climate — with significant UV exposure at altitude, hail cycles, and wide temperature swings — these lifespans often run 10–15% shorter than the manufacturer's rated estimate. A roof approaching 18 years that shows any visible wear deserves a serious evaluation rather than continued repair.</p>

      <h3>2. Widespread Granule Loss</h3>
      <p>Asphalt shingles are coated with granules that provide UV protection and fire resistance. As shingles age, these granules loosen and wash into your gutters. Check your gutters and downspout discharge areas after rain — heavy granule accumulation is a strong indicator of shingle degradation across the entire surface.</p>
      <p>Patchy granule loss from a single storm impact is repairable. Generalized granule loss across the roof field means the shingle surface has deteriorated past the point where spot repairs will hold.</p>

      <h3>3. Visible Sagging or Structural Deformation</h3>
      <p>Any visible sag in the roof plane — even slight dips or waves — indicates compromised decking, rafter damage, or moisture intrusion that has weakened the structural substrate. This category of damage cannot be addressed by surface repairs. The underlying structure requires inspection and correction, and this almost always necessitates a full tear-off to properly assess and repair the deck.</p>

      <h3>4. Interior Water Intrusion in Multiple Locations</h3>
      <p>A single leak localized to a specific flashing joint or pipe boot is a repair scenario. Water stains appearing in multiple rooms, along multiple walls, or tracking across ceiling planes indicates that moisture is entering through a compromised roof surface in several areas simultaneously. At this stage, the cost of chasing and patching each intrusion point typically approaches or exceeds replacement cost within two to three repair cycles.</p>

      <h3>5. Shingles That Are Curling, Cupping, or Cracking Across the Field</h3>
      <p>Shingles that are curling upward at the edges (cupping) or lifting at the corners (clawing) have lost their flexibility and are reacting to moisture imbalance between the top and bottom surfaces. This is a material failure pattern that progresses across the entire roof, not an isolated condition. Similarly, cracking or splitting across large areas of the surface indicates the asphalt binder has dried and embrittled past the point of effective weather resistance.</p>
      <p>These conditions make the roof increasingly vulnerable to wind uplift damage and water infiltration — and no amount of spot sealing will reverse the underlying material chemistry.</p>

      <h3>When in Doubt, Get a Professional Assessment</h3>
      <p>A professional inspection with documented photography gives you an objective baseline. At Structura, our 28-point inspection protocol captures condition ratings for every component of your roofing system, with written recommendations that clearly distinguish repair candidates from replacement candidates. There is no commitment, and having that documentation is valuable regardless of what you decide to do next.</p>
    `
  }

];

// ── NEW POST TEMPLATE ──────────────────────────────────────
// Copy everything below, paste ABOVE the first post in the array,
// fill in your content, and save.
//
// {
//   id: 4,                             // increment by 1
//   title: "Your Post Title Here",
//   date: "April 15, 2026",            // human-readable
//   dateISO: "2026-04-15",             // machine-readable (YYYY-MM-DD)
//   category: "Maintenance",           // pick from list at top of file
//   author: "Structura Roofing Team",
//   authorRole: "Denver Roofing Specialists",
//   readTime: "5 min read",
//   image: "https://images.unsplash.com/photo-XXXXXXXXXXXXXXX?w=1200&q=85&fit=crop",
//   excerpt: "Short 1-2 sentence preview shown on blog listing page.",
//   tags: ["Tag1", "Tag2", "Tag3"],
//   content: `
//     <p>First paragraph of your article...</p>
//     <h3>Section Heading</h3>
//     <p>More content here...</p>
//   `
// },
