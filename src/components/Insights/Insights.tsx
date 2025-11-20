import "./Insights.css";
import ErrorBoundary from "../shared/ErrorBoundary/ErrorBoundary";
import { SEOHead } from "../shared/SEOHead";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleData } from "../../data/types";

// Mock data - this would come from Sanity CMS in production
const mockArticles: ArticleData[] = [
  {
    id: "2",
    title:
      "Justification Report: Deploying AnchorBot™ Helical Anchors for Alaska Mariculture",
    subtitle:
      "How helical anchoring technology can unlock 2-4x more usable acreage and transform Alaska's kelp farming economics",
    abstract:
      "Alaska's kelp farming sector is at an inflection point. Farms are scaling from pilot plots to commercial-scale operations, but their ability to optimize growth area is limited by anchoring methods. AnchorBot™ presents a new solution: a remotely operated vehicle designed to install helical anchors that can unlock two to four times more usable acreage within existing leases.",
    content: `
      <h2>Executive Summary</h2>
      <p>Alaska's Kelp farming sector is at an inflection point. Farms are scaling from pilot plots to commercial-scale operations, but their ability to optimize growth area is limited by anchoring methods. Traditional anchors, such as concrete blocks, railroad wheels, drag embedment and mushroom anchors require long catenary scopes which consume valuable leased acreage while also being costly and disruptive to install. Farmers report that of a 22-acre lease, roughly a quarter to a third may actually be growing kelp as the rest is consumed by anchor spread and scope requirements.</p>
      
      <p>AnchorBot™ presents a new solution: a remotely operated vehicle (ROV) designed to install helical anchors from vessels with as little as 20 feet of deck space. Helical anchors provide high lateral and vertical holding power, disturb only a small patch of seabed, and can be installed and removed within +/- 3 ft of their designed locations. By reducing scope requirements from 4+ : 1 down to 2:1 or less, helical anchors unlock two to four times more usable acreage within existing leases. This means a farm that currently harvests 40,000 pounds of kelp annually could scale to 135,000–270,000 pounds without expanding its lease.</p>
      
      <p>The economics are equally compelling. AnchorBot eliminates the need for barges and cranes while installing 10+ anchors per day thereby reducing installation costs by 50–70 percent.</p>
      
      <p>Farmers interviewed during site visits in Kodiak and Southeast Alaska expressed strong interest in adopting helicals, not only for kelp but also for oyster operations. Their priorities include year-round farm structures, near-benthic arrays that improve yield consistency, and potentially elastic mooring systems to reduce storm-related losses. AnchorBot's combination of speed, safety, and reliability makes these priorities achievable.</p>
      
      <h2>1. Industry Context</h2>
      <p>Anchoring is not a side detail in mariculture, it is the foundation that determines how farms are laid out, how much lease area can actually be used, and oceanographic & meteorological resiliency of the farm. In Alaska, most leases are large on paper, but their usable acreage is often as little as 25% of the total because anchor line scope occupies the majority of the lease.</p>
      
      <p>Common anchoring methods, such as concrete blocks/ railroad wheels, Danforths and drag embedment anchors are reliable in shallow, calm conditions but become logistically prohibitive in deeper, tidal waters. These anchors require barges or A-Frames to install, divers for placement, and often end up 20 feet or more from the designated location. Misplaced anchors can require rework of the farm structural lines which are typically constructed on land prior to deployment. The anchor's large footprint and scope requirements further reduce the productive space available within a lease.</p>
      
      <div class="article__figure">
        <img src="/assets/anchor-bot/2025-Mariculture-Report/figure-1.png" alt="Typical catenary growth system illustrating total growth area in the middle with lines extending out to show the anchor points" loading="lazy" />
        <p class="article__figure-caption"><strong>Figure 1:</strong> Typical catenary growth system illustrating total growth area in the middle with lines extending out to show the anchor points (image Courtesy and Property of Tend Ocean, Inc).</p>
      </div>
      
      <h2>2. Market Context and Farmer Momentum</h2>
      <p>The mariculture sector in Alaska is poised for significant growth, but the realities of anchoring and logistics continue to constrain production. Discussions with farmers in Kodiak, Cordova and Juneau reveal the same pattern: lease sizes on paper appear large, but the acreage that actually produces kelp is a fraction of the total. Anchoring inefficiencies, compounded by downstream hurdles in shipping and processing, keep harvest volumes well below potential.</p>
      
      <p>On Kodiak, a 17-acre lease produced 16,000 pounds of kelp last season, harvested from 1.2 acres of growing area. Prices vary: about $0.50 per pound for fresh kelp and $1 per pound for stabilized product (treated with citric acid and stored in IBC containers). For the upcoming season, the target is 100,000 pounds grown over 28,000 feet of line, a nearly tenfold increase. The primary obstacles are not biological, but logistical: shipping and processing costs threaten to erode margins and constrain expansion.</p>
      
      <p>A similar dynamic is illustrated in Cordova on a 22-acre lease. In the 2024 season, 4–5 acres were actively used of which a single array measuring 75 by 400 feet (~1 acre) produced kelp. This generated 40,000 pounds of harvest, sold at approximately $1 per pound (stabilized), yielding $40,000 in revenue. For 2025, Cordova based farms are targeting 75,000–100,000 pounds per lease, but they estimate that with more efficient anchoring they forecast increasing each farm's harvest up to 135,000–270,000 pounds annually.</p>
      
      <div class="article__figure">
        <img src="/assets/anchor-bot/2025-Mariculture-Report/figure-2.png" alt="Potential revenue increase as a function of increased farmed area within a lease" loading="lazy" />
        <p class="article__figure-caption"><strong>Figure 2:</strong> Potential revenue increase as a function of increased farmed area within a lease. With a typical catenary system, 4x of current farmed area is feasible.</p>
      </div>
      
      <h2>3. Technical Basis for Helical Anchors and AnchorBot</h2>
      
      <h3>Helical Anchors</h3>
      <p>Helical anchors have been used for decades in terrestrial and offshore industries because of their high holding power, minimal footprint, and ease of installation. Unlike blocks, which rely on sheer mass, helicals derive strength from embedment. Installed to a specified torque, they lock into mud, sand, or volcanic ash substrates, which in Alaska often "cement" the anchor in place.</p>
      
      <p>Helicals resist both vertical and lateral loads. They do not "walk" across the seabed under tension like drag anchors, and they can be bridled in groups of two to four to achieve higher holding power. Because installation is verified by real-time torque readings, all stakeholders can have confidence that each anchor meets its design load.</p>
      
      <h3>The AnchorBot Solution</h3>
      <p>AnchorBot is a compact, remotely operated system designed to install helical anchors from small vessels to a maximum depth of 330 ft. Any boat with a davit is sufficient for deployment; no barges or cranes are required. Mobilization takes three to four hours, and the system is portable by a two-person crew.</p>
      
      <p>AnchorBot installs more than ten anchors per day under typical conditions. Each anchor can be placed with acoustic positioning for increased accuracy, while real-time video and torque feedback confirm proper installation. Anchors can also be reversed for farm relocation or decommissioning, avoiding the "orphaned blocks" that litter many existing sites.</p>
      
      <h3>Environmental Benefits</h3>
      <p>The environmental case for helicals is strong. Unlike blocks or wheels, which crush benthic habitat and leach materials over time, helicals disturb only a narrow column of seabed as they screw into place. They avoid cement leaching, corroded steel, and the broad drag scars of traditional anchors. Helicals do not require bottom chain in the mooring line, and therefore can have a line depart the anchor head at a steep angle upward, preventing benthic damage from mooring line dragging.</p>
      
      <div class="article__figure-group">
        <div class="article__figure article__figure--half">
          <img src="/assets/anchor-bot/2025-Mariculture-Report/figure-3a.png" alt="Total impacted area for AnchorBot is contained within the diameter of the helical itself" loading="lazy" />
          <p class="article__figure-caption"><strong>Figure 3a:</strong> Total impacted area for AnchorBot is contained within the diameter of the helical itself.</p>
        </div>
        <div class="article__figure article__figure--half">
          <img src="/assets/anchor-bot/2025-Mariculture-Report/Figure-3b.png" alt="Disruption is significant when a concrete anchor impacts the seafloor" loading="lazy" />
          <p class="article__figure-caption"><strong>Figure 3b:</strong> Disruption is significant when a concrete anchor impacts the seafloor.</p>
        </div>
      </div>
      
      <h2>5. Economics</h2>
      <p>The economics of Alaska's kelp farming industry are currently constrained less by biology than by infrastructure. The three case studies in Cordova, Kodiak and Juneau, illustrate the structural mismatch between lease size, usable acreage, and actual harvests.</p>
      
      <p>Near Cordova, a 22-acre lease produced only 40,000 pounds of kelp in 2024, harvested from approximately one acre of effective growing area. With kelp selling for about $1 per pound, this equated to $40,000 in gross revenue. While the farm is targeting 75,000–100,000 pounds for 2025, analysis suggests that with improved anchoring and more efficient lease utilization, the true capacity could be 135,000–270,000 pounds annually.</p>
      
      <p>When these three case studies are viewed together, a consistent picture emerges: Farmers are paying for 17–25 acre leases but using only 0.6–1.2 acres effectively. Harvest volumes range from 16,000–40,000 pounds annually, far below what the leases could support. Productivity per acre is strong, ranging from 13,000 to 60,000 pounds per acre but this potential is not realized at scale because anchoring systems consume most of the lease footprint.</p>
      
      <p>AnchorBot™ and helical anchors directly change this economic equation. The scope reduction alone would allow farmers to free up to four times more usable acreage within their existing leases. At current pricing, this would shift revenue potential from tens of thousands of dollars into the hundreds of thousands, fundamentally changing the viability of their operations.</p>
      
      <div class="article__table">
        <p class="article__table-caption"><strong>Table 1:</strong> Typical installation costs for different anchor types</p>
        <table>
          <thead>
            <tr>
              <th>Cost Component</th>
              <th>AnchorBot (Helicals)</th>
              <th>Helicals (Barge + Divers)</th>
              <th>Gravity Anchors (Blocks/Wheels)</th>
              <th>Drag Embedment Anchors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Small Vessel Day Rate</td>
              <td>$2,000.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Barge Day Rate</td>
              <td>$0.00</td>
              <td>$5,000.00</td>
              <td>$5,000.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Large Boat with A-frame</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>$3,000.00</td>
            </tr>
            <tr>
              <td>Commercial Diver (per day)</td>
              <td>$0.00</td>
              <td>$1,000.00</td>
              <td>$1,000.00</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Fuel & Logistics</td>
              <td>$300.00</td>
              <td>$2,000.00</td>
              <td>$3,000.00</td>
              <td>$300.00</td>
            </tr>
            <tr>
              <td>Support Equipment</td>
              <td>$0.00</td>
              <td>$2,000.00</td>
              <td>$1,000.00</td>
              <td>$1,500.00</td>
            </tr>
            <tr class="article__table-total">
              <td><strong>TOTAL</strong></td>
              <td><strong>$2,300.00</strong></td>
              <td><strong>$10,000.00</strong></td>
              <td><strong>$10,000.00</strong></td>
              <td><strong>$4,800.00</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2>8. Why Helicals and AnchorBot Are the Right Solution</h2>
      <p>Helical anchors align with the needs of Alaska mariculture. They embed securely in mud, sand, and volcanic ash substrates, which are common across farm sites. By reducing scope, they unlock two to four times more usable lease area, allowing farmers to expand production without expanding leases. Their installation is faster, safer, and cheaper than traditional methods, requiring only small vessels and no divers.</p>
      
      <p>Environmental regulators benefit from their minimal footprint and removability, while insurers benefit from their predictable performance and reduced failure rates. Farmers benefit from lower costs, higher yields, and the ability to innovate with benthic and year-round arrays.</p>
      
      <div class="article__figure">
        <img src="/assets/anchor-bot/2025-Mariculture-Report/figure-4.png" alt="Key Benefits of Helicals as compared to existing anchoring solutions" loading="lazy" />
        <p class="article__figure-caption"><strong>Figure 4:</strong> Key Benefits of Helicals as compared to existing anchoring solutions.</p>
      </div>
      
      <h2>Conclusion</h2>
      <p>Alaska's kelp and oyster farming sectors are at a pivotal stage, moving from small-scale demonstration projects to commercial operations that can anchor a new blue economy for the state. Yet across every farm examined in this report, the same pattern emerges: large leases on paper are being used at a fraction of their potential, not because of biology or market demand, but because of anchoring inefficiencies.</p>
      
      <p>AnchorBot™ and helical anchoring systems offer a direct and scalable solution. By reducing scope requirements from 4:1 to 2:1 or less, helicals can free up two to four times more usable space within existing leases. This not only unlocks production potential — shifting harvests from tens of thousands to hundreds of thousands of pounds per farm — but also transforms the economics of Alaska's mariculture industry by lowering installation costs, reducing risk, and providing regulators with a low-impact, reversible anchoring option.</p>
      
      <p>The path forward is clear. By launching targeted pilot deployments, establishing regional hubs, and re-engineering AnchorBot for topside power to overcome logistical hurdles, Alaska can position itself as a global leader in sustainable mariculture. With support from farmers, regulators, and investors, AnchorBot can transform underutilized leases into productive water, strengthen local economies, and help build the resilient ocean farming systems needed for the decades ahead.</p>
      
      <h2>Acknowledgments</h2>
      <p>We extend our sincere gratitude to Schmidt Marine Technology Partners for their generous funding, which has made this work possible. We also thank the Alaska Fisheries Development Foundation (AFDF) for their leadership in coordinating meetings with farmers and stakeholders, and for providing invaluable feedback and guidance throughout this process.</p>
    `,
    category: "White Paper",
    author: "Chris Malzone, Principal Consultant, Beringia Marine Inc",
    publishDate: "2025-10-08",
    coverImage: "/assets/anchor-bot/mariculture-seaweed-alaska.png",
    tags: [
      "AnchorBot",
      "Helical Anchors",
      "Alaska",
      "Mariculture",
      "Kelp Farming",
      "ROV",
      "Aquaculture",
    ],
    slug: "anchorbot-helical-anchors-alaska-mariculture",
    pdfUrl:
      "https://pub-264ce0c4c88b4573839aee612dbbfd27.r2.dev/2025-AnchorBot-Alaska-Aquaculture-Report.docx%20-%20Google%20Docs.pdf",
    seo: {
      title:
        "Deploying AnchorBot™ Helical Anchors for Alaska Mariculture | Beringia Marine",
      description:
        "How helical anchoring technology can unlock 2-4x more usable acreage and transform Alaska's kelp farming economics. A comprehensive justification report on AnchorBot deployment.",
      ogImage: "/desktop-anchorbot-helical-anchors-alaska-mariculture.png",
    },
  },
  {
    id: "1",
    title:
      "Evaluating Hydrus MicroAUV for Benthic Survey: Performance Evolution, Feedback Integration, and Expected Capabilities",
    subtitle:
      "A comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation",
    abstract:
      "This paper documents the development, field validation, and operational performance of the Hydrus 300m rated microAUV, a compact, user-friendly autonomous underwater vehicle developed by Advanced Navigation for benthic habitat mapping and ecological monitoring.",
    content: `
      <div class="article__summary-notice">
        <p><strong><FaFileAlt /> This is a summary of the full white paper.</strong> For complete technical details, methodology, results, and comprehensive analysis, please download the full PDF document above.</p>
      </div>
      
      <h2>Executive Summary</h2>
      <p>This paper documents the development, field validation, and operational performance of the Hydrus 300m rated microAUV, a compact, user-friendly autonomous underwater vehicle developed by Advanced Navigation for benthic habitat mapping and ecological monitoring. From its initial deployments in 2023 through extensive NOAA-coordinated trials in 2024 and 2025, Hydrus underwent significant refinement—culminating in a series of validation missions across the Florida Keys in May 2025.</p>
      
      <p>These trials evaluated Hydrus' performance across five core criteria: mission success rate, mission quantity, navigational accuracy, scaling precision, and image quality. With targeted improvements to firmware, sensor fusion, acoustic aiding, and mission logic, Hydrus consistently achieved:</p>
      
      <ul>
        <li><strong>Over 92% mission success</strong> across 71 missions, with >95% success under routine conditions</li>
        <li><strong>Navigation drift <2.5 meters</strong>, with INS stabilization in under 20 seconds</li>
        <li><strong>High-resolution orthomosaics (~0.5 mm/pixel)</strong> with minimal manual alignment</li>
        <li><strong>DVL-based scaling accuracy of 1.8% RMS</strong>, validated against physical scale bars</li>
        <li><strong>Autonomous recovery within 1–2 meters</strong> of programmed surfacing location</li>
        <li><strong>Prototyped AI for coral classification (YOLOv5)</strong> with promising early performance</li>
      </ul>
      
      <h2>Key Findings</h2>
      <p>One key insight from these deployments was the identification of a tuning imbalance in the INS, where the system was found to over-trust the thruster velocity model and under-trust the DVL, particularly during acceleration or when operating in strong currents. While this did not prevent successful mission execution, it did contribute to occasional drift and will be addressed through future tuning of the sensor fusion parameters.</p>
      
      <p>Despite this, Hydrus has demonstrated a reliable and scalable path forward for replacing or augmenting diver-based survey methods. It reduces personnel and vessel requirements by up to 50%, enables up to 15 missions per day, and improves safety and repeatability in high-frequency monitoring programs.</p>
      
      <h2>Performance Evolution</h2>
      <p>Through a structured program of real-world testing, iterative refinement, and stakeholder engagement, the Hydrus microAUV has evolved into a capable, scalable solution for shallow-water benthic surveys. From its early deployments in 2023 through its final validation during NOAA's 2025 Florida Keys field trials, Hydrus demonstrated substantial improvements in mission reliability, navigational accuracy, photogrammetric quality, and system autonomy.</p>
      
      <p>Across 71 missions in Florida, Hydrus achieved a mission success rate exceeding 98%, with only one hardware-related failure. INS stabilization times dropped below 20 seconds, and average navigation drift was reduced to under 2.5 meters under typical conditions.</p>
      
      <h2>Conclusion</h2>
      <p>With its proven performance, compact deployment profile, and ongoing system enhancements, Hydrus is now positioned as a practical, field-ready tool for coral reef mapping, habitat classification, and broader nearshore ecological applications. The system's progress over the last two years underscores the value of field-driven engineering and active stakeholder collaboration in developing operationally ready marine robotic systems.</p>
      
      <p>Hydrus is no longer a prototype—it is a platform ready for the demands of modern ocean monitoring.</p>
      
      <div class="article__full-paper-notice">
        <h3><FaClipboardList /> Complete Technical Documentation</h3>
        <p>The full white paper contains detailed methodology, comprehensive results, performance tables, technical specifications, and extensive analysis not included in this summary. Download the complete document for:</p>
        <ul>
          <li>Complete field methods and trial procedures</li>
          <li>Detailed performance metrics and data tables</li>
          <li>Technical specifications and system architecture</li>
          <li>Comprehensive results and statistical analysis</li>
          <li>Full discussion of limitations and future improvements</li>
          <li>Complete references and acknowledgments</li>
        </ul>
        <p><strong>Click the "Download PDF" button above to access the complete white paper.</strong></p>
      </div>
    `,
    category: "White Paper",
    author: "Chris Malzone, Beringia Marine Inc",
    publishDate: "2025-05-28",
    coverImage: "/hydrus-subsurface.jpeg",
    tags: [
      "Hydrus",
      "AUV",
      "Benthic Survey",
      "NOAA",
      "Coral Reef",
      "Photogrammetry",
    ],
    slug: "evaluating-hydrus-microauv-benthic-survey",
    pdfUrl:
      "https://pub-264ce0c4c88b4573839aee612dbbfd27.r2.dev/250819-Hydrus_Evaluation_Final.pdf",
    seo: {
      title: "Evaluating Hydrus MicroAUV for Benthic Survey | Beringia Marine",
      description:
        "Comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation for benthic habitat mapping and ecological monitoring.",
      ogImage: "/desktop-insights.png",
    },
  },
];

export const InsightsContent = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch articles from Sanity CMS
    const fetchArticles = async () => {
      // In production, this would be a real API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setArticles(mockArticles);
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

  const categories = [
    "All",
    "Tech Article",
    "Case Study",
    "White Paper",
    "Field Note",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const handleArticleClick = (slug: string) => {
    // Navigate to individual article page
    navigate(`/insights/${slug}`);
  };

  if (isLoading) {
    return (
      <div className="insights__loading">
        <div className="insights__loading-spinner"></div>
        <p>Loading insights...</p>
      </div>
    );
  }

  return (
    <div className="insights__content">
      {/* Hero Section */}
      <div className="insights__hero">
        <div className="insights__hero-overlay"></div>
        <div className="insights__hero-content">
          <h1 className="insights__hero-title">Insights</h1>
          <p className="insights__hero-subtitle">
            Deep currents of thought, discovery, and engineering. Explore the
            minds and missions shaping the future of marine technology.
          </p>
          <div
            className="insights__hero-categories"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`insights__category-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="insights-articles-grid"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="insights__container">
        <div
          className="insights__grid"
          id="insights-articles-grid"
          role="tabpanel"
          aria-label={`Articles in ${selectedCategory} category`}
        >
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="insights__article-card"
              onClick={() => handleArticleClick(article.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleArticleClick(article.slug);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Read article: ${article.title}`}
            >
              <div className="insights__article-image">
                <img
                  src={article.coverImage}
                  alt={`Cover image for ${article.title}`}
                  className="insights__article-cover"
                  loading="lazy"
                />
                <div
                  className="insights__article-category"
                  aria-label={`Category: ${article.category}`}
                >
                  {article.category}
                </div>
              </div>
              <div className="insights__article-content">
                <h3 className="insights__article-title">{article.title}</h3>
                <p className="insights__article-subtitle">{article.subtitle}</p>
                <p className="insights__article-abstract">{article.abstract}</p>
                <div className="insights__article-meta">
                  <span className="insights__article-author">
                    {article.author}
                  </span>
                  <span className="insights__article-date">
                    {new Date(article.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div
                  className="insights__article-tags"
                  aria-label="Article tags"
                >
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="insights__article-tag"
                      aria-label={`Tag: ${tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="insights__empty" role="status" aria-live="polite">
            <p>No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Standalone page version
const Insights = () => {
  return (
    <>
      <SEOHead
        title="Marine Technology Insights | Beringia Marine"
        description="Explore articles, case studies, white papers, and field notes on marine technology, autonomous underwater vehicles, and ocean exploration innovation."
        url="/insights"
        image="/og-image.jpeg"
      />
      <div className="insights">
        <ErrorBoundary>
          <InsightsContent />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default Insights;
