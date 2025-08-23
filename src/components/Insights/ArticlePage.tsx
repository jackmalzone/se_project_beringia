import './ArticlePage.css';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary';
import { SEOHead } from '../shared/SEOHead';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArticleData } from '../../data/types';
import { FaFileAlt, FaClipboardList } from 'react-icons/fa';
import { ArticleStructuredData } from '../shared/StructuredData';

// Mock data - this would come from Sanity CMS in production
const mockArticles: ArticleData[] = [
  {
    id: '1',
    title: 'Evaluating Hydrus MicroAUV for Benthic Survey: Performance Evolution, Feedback Integration, and Expected Capabilities',
    subtitle: 'A comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation',
    abstract: 'This paper documents the development, field validation, and operational performance of the Hydrus 300m rated microAUV, a compact, user-friendly autonomous underwater vehicle developed by Advanced Navigation for benthic habitat mapping and ecological monitoring.',
    content: `
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
    `,
    category: 'White Paper',
    author: 'Chris Malzone, Beringia Marine Inc',
    publishDate: '2025-05-28',
    coverImage: '/src/assets/clients/advanced-navigation/hydrus-subsurface.jpeg',
    tags: ['Hydrus', 'AUV', 'Benthic Survey', 'NOAA', 'Coral Reef', 'Photogrammetry'],
    slug: 'evaluating-hydrus-microauv-benthic-survey',
    pdfUrl: 'https://pub-264ce0c4c88b4573839aee612dbbfd27.r2.dev/250819-Hydrus_Evaluation_Final.pdf',
    seo: {
      title: 'Evaluating Hydrus MicroAUV for Benthic Survey | Beringia Marine',
      description: 'Comprehensive evaluation of the Hydrus 300m rated microAUV through NOAA-coordinated trials and field validation for benthic habitat mapping and ecological monitoring.',
      ogImage: '/src/assets/clients/advanced-navigation/hydrus-subsurface.jpeg'
    }
  }
];

export const ArticlePageContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch article from Sanity CMS
    const fetchArticle = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const foundArticle = mockArticles.find(a => a.slug === slug);
      setArticle(foundArticle || null);
      setIsLoading(false);
    };

    fetchArticle();
  }, [slug]);

  const handleBackToInsights = () => {
    navigate('/insights');
  };

  const handleDownloadPDF = () => {
    if (article?.pdfUrl) {
      window.open(article.pdfUrl, '_blank');
    }
  };



  if (isLoading) {
    return (
      <div className="article__loading" role="status" aria-live="polite">
        <div className="article__loading-spinner" aria-hidden="true"></div>
        <p>Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="article__not-found" role="alert">
        <h1>Article Not Found</h1>
        <p>The article you're looking for doesn't exist.</p>
        <button 
          onClick={handleBackToInsights} 
          className="article__back-btn"
          aria-label="Return to insights page"
        >
          Back to Insights
        </button>
      </div>
    );
  }

  return (
    <div className="article__content">
      {/* Hero Section */}
      <div className="article__hero">
        <div className="article__hero-image">
          <img 
            src={article.coverImage} 
            alt={`Cover image for ${article.title}`}
            loading="lazy"
          />
          <div className="article__hero-overlay" aria-hidden="true"></div>
        </div>
        <div className="article__hero-content">
          <div className="article__hero-container">
            <button 
              onClick={handleBackToInsights} 
              className="article__back-link"
              aria-label="Return to insights page"
            >
              ← Back to Insights
            </button>
            <div className="article__hero-meta">
              <span className="article__category" aria-label={`Category: ${article.category}`}>
                {article.category}
              </span>
              <time 
                className="article__date"
                dateTime={article.publishDate}
                aria-label={`Published on ${new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}`}
              >
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <h1 className="article__title">{article.title}</h1>
            <p className="article__subtitle">{article.subtitle}</p>
            <div className="article__author">
              By {article.author}
            </div>
            <div className="article__tags" aria-label="Article tags">
              {article.tags.map(tag => (
                <span key={tag} className="article__tag" aria-label={`Tag: ${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
            {article.pdfUrl && (
              <button 
                onClick={handleDownloadPDF} 
                className="article__pdf-btn"
                aria-label="Download full PDF document"
              >
                Download PDF
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="article__body">
        <div className="article__container">
          <div className="article__summary-notice" role="note" aria-label="Summary notice">
            <p><strong><FaFileAlt aria-hidden="true" /> This is a summary of the full white paper.</strong> For complete technical details, methodology, results, and comprehensive analysis, please download the full PDF document above.</p>
          </div>
          <div 
            className="article__content-html"
            dangerouslySetInnerHTML={{ __html: article.content }}
            role="article"
            aria-label="Article content"
          />
          <div className="article__full-paper-notice" role="complementary" aria-label="Complete documentation notice">
            <h3><FaClipboardList aria-hidden="true" /> Complete Technical Documentation</h3>
            <p>The full white paper contains detailed methodology, comprehensive results, performance tables, technical specifications, and extensive analysis not included in this summary. Download the complete document for:</p>
            <ul>
              <li>Complete field methods and trial procedures</li>
              <li>Detailed performance metrics and data tables</li>
              <li>Technical specifications and system architecture</li>
              <li>Comprehensive results and statistical analysis</li>
              <li>Full discussion of limitations and future improvements</li>
              <li>Complete references and acknowledgments</li>
            </ul>
            <p className="article__download-cta"><strong>Click the "Download PDF" button below to access the complete white paper.</strong></p>
          </div>
          <button 
            onClick={handleDownloadPDF} 
            className="article__pdf-btn article__pdf-btn--bottom"
            aria-label="Download full PDF document from bottom of page"
          >
            Download Full PDF
          </button>
        </div>
      </div>
    </div>
  );
};

// Standalone page version
const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = mockArticles.find(a => a.slug === slug);

  return (
    <>
      {article && (
        <>
          <SEOHead
            title={article.seo?.title || `${article.title} | Beringia Marine`}
            description={article.seo?.description || article.abstract}
            image={article.seo?.ogImage || article.coverImage}
            url={`/insights/${article.slug}`}
            type="article"
          />
          <ArticleStructuredData
            title={article.title}
            description={article.abstract}
            author={article.author}
            publishDate={article.publishDate}
            image={article.coverImage}
          />
        </>
      )}
      <div className="article">
        <ErrorBoundary>
          <ArticlePageContent />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default ArticlePage;
