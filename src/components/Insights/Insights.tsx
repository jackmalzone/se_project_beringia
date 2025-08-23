import './Insights.css';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';
import { SEOHead } from '../shared/SEOHead';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleData } from '../../data/types';


// Mock data - this would come from Sanity CMS in production
const mockArticles: ArticleData[] = [
  {
    id: '1',
    title: 'Evaluating Hydrus MicroAUV for Benthic Survey: Performance Evolution, Feedback Integration, and Expected Capabilities',
    subtitle: 'A comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation',
    abstract: 'This paper documents the development, field validation, and operational performance of the Hydrus 300m rated microAUV, a compact, user-friendly autonomous underwater vehicle developed by Advanced Navigation for benthic habitat mapping and ecological monitoring.',
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
    category: 'White Paper',
    author: 'Chris Malzone, Beringia Marine Inc',
    publishDate: '2025-05-28',
    coverImage: '/hydrus-subsurface.jpeg',
    tags: ['Hydrus', 'AUV', 'Benthic Survey', 'NOAA', 'Coral Reef', 'Photogrammetry'],
    slug: 'evaluating-hydrus-microauv-benthic-survey',
    pdfUrl: 'https://pub-264ce0c4c88b4573839aee612dbbfd27.r2.dev/250819-Hydrus_Evaluation_Final.pdf',
    seo: {
      title: 'Evaluating Hydrus MicroAUV for Benthic Survey | Beringia Marine',
      description: 'Comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation for benthic habitat mapping and ecological monitoring.',
      ogImage: '/desktop-insights.png'
    }
  }
];

export const InsightsContent = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch articles from Sanity CMS
    const fetchArticles = async () => {
      // In production, this would be a real API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArticles(mockArticles);
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

  const categories = ['All', 'Tech Article', 'Case Study', 'White Paper', 'Field Note'];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
            Deep currents of thought, discovery, and engineering. Explore the minds and missions shaping the future of marine technology.
          </p>
          <div className="insights__hero-categories" role="tablist" aria-label="Filter articles by category">
            {categories.map(category => (
              <button
                key={category}
                className={`insights__category-btn ${selectedCategory === category ? 'active' : ''}`}
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
          {filteredArticles.map(article => (
            <article 
              key={article.id} 
              className="insights__article-card"
              onClick={() => handleArticleClick(article.slug)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
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
                <div className="insights__article-category" aria-label={`Category: ${article.category}`}>
                  {article.category}
                </div>
              </div>
              <div className="insights__article-content">
                <h3 className="insights__article-title">{article.title}</h3>
                <p className="insights__article-subtitle">{article.subtitle}</p>
                <p className="insights__article-abstract">{article.abstract}</p>
                <div className="insights__article-meta">
                  <span className="insights__article-author">{article.author}</span>
                  <span className="insights__article-date">
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="insights__article-tags" aria-label="Article tags">
                  {article.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="insights__article-tag" aria-label={`Tag: ${tag}`}>
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
