# Insights Blog System Documentation

## Overview

The Insights blog system is a comprehensive content management solution for publishing articles, white papers, case studies, and field notes. It provides a full-featured blog experience with category filtering, individual article pages, SEO optimization, and PDF download capabilities.

## Architecture

### Directory Structure

```
src/
├── components/
│   └── Insights/
│       ├── Insights.tsx          # Main listing page
│       ├── Insights.css          # Listing page styles
│       ├── ArticlePage.tsx       # Individual article page
│       └── ArticlePage.css       # Article page styles
├── data/
│   ├── types.ts                  # ArticleData interface
│   └── index.ts                  # Data exports
└── types/
    └── cms.ts                    # CMS-related types
```

## Data Structure

### ArticleData Interface

Located in `src/data/types.ts`:

```typescript
export interface ArticleData {
  id: string; // Unique identifier
  title: string; // Article title
  subtitle: string; // Brief subtitle
  abstract: string; // Short description (for cards)
  content: string; // Full HTML content
  category: "Tech Article" | "Case Study" | "White Paper" | "Field Note";
  author: string; // Author name(s)
  publishDate: string; // ISO date format (YYYY-MM-DD)
  coverImage: string; // Path to cover image
  tags: string[]; // Array of topic tags
  slug: string; // URL-friendly identifier
  pdfUrl?: string; // Optional PDF download link
  seo?: {
    title?: string; // Custom SEO title
    description?: string; // Custom meta description
    ogImage?: string; // Custom Open Graph image
  };
}
```

### Field Descriptions

| Field             | Type     | Required | Description                                                       |
| ----------------- | -------- | -------- | ----------------------------------------------------------------- |
| `id`              | string   | Yes      | Unique identifier for the article (e.g., '1', '2', 'uuid')        |
| `title`           | string   | Yes      | Main article title displayed in cards and article page            |
| `subtitle`        | string   | Yes      | Supporting subtitle for additional context                        |
| `abstract`        | string   | Yes      | Brief summary shown on article cards (2-3 sentences)              |
| `content`         | string   | Yes      | Full article content in HTML format                               |
| `category`        | enum     | Yes      | One of: 'Tech Article', 'Case Study', 'White Paper', 'Field Note' |
| `author`          | string   | Yes      | Author name(s), can include organization                          |
| `publishDate`     | string   | Yes      | Publication date in ISO format (YYYY-MM-DD)                       |
| `coverImage`      | string   | Yes      | Path to cover image (relative to public folder)                   |
| `tags`            | string[] | Yes      | Array of relevant topic tags for filtering/SEO                    |
| `slug`            | string   | Yes      | URL-friendly identifier (e.g., 'my-article-title')                |
| `pdfUrl`          | string   | No       | External URL to downloadable PDF version                          |
| `seo.title`       | string   | No       | Custom page title for SEO (defaults to article title)             |
| `seo.description` | string   | No       | Custom meta description (defaults to abstract)                    |
| `seo.ogImage`     | string   | No       | Custom Open Graph image (defaults to coverImage)                  |

## Components

### 1. Insights.tsx - Main Listing Page

**Purpose**: Displays all articles in a filterable grid layout.

**Key Features**:

- Hero section with category filters
- Responsive grid layout
- Article preview cards
- Category-based filtering
- Loading states
- Empty state handling
- Keyboard navigation support
- ARIA labels for accessibility

**Component Structure**:

```typescript
export const InsightsContent = () => {
  // State management
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);

  // Navigation
  const navigate = useNavigate();

  // Article fetching (currently mock data)
  useEffect(() => {
    fetchArticles();
  }, []);

  // Filtering logic
  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);
};
```

**Categories**:

- All (default)
- Tech Article
- Case Study
- White Paper
- Field Note

**Article Card Information**:

- Cover image with category badge
- Title and subtitle
- Abstract preview
- Author and publish date
- First 3 tags
- Click/keyboard navigation to article page

### 2. ArticlePage.tsx - Individual Article View

**Purpose**: Displays full article content with enhanced features.

**Key Features**:

- Hero section with cover image overlay
- Full article content rendering
- PDF download button (if available)
- Back navigation to insights
- SEO optimization with structured data
- Responsive design
- Accessibility features

**Component Structure**:

```typescript
export const ArticlePageContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch article by slug
  useEffect(() => {
    fetchArticle();
  }, [slug]);
};
```

**Article Page Sections**:

1. **Hero Section**

   - Full-width cover image with overlay
   - Back to Insights link
   - Category badge
   - Publish date
   - Article title and subtitle
   - Author information
   - Tags
   - PDF download button (if available)

2. **Article Body**
   - Summary notice (for white papers)
   - Full HTML content
   - Complete documentation notice
   - Bottom PDF download button

## Routing

### Route Configuration

Routes are defined in the main application router:

```typescript
// Main listing page
<Route path="/insights" element={<Insights />} />

// Individual article page
<Route path="/insights/:slug" element={<ArticlePage />} />
```

### Navigation Flow

1. User visits `/insights`
2. Sees grid of all articles
3. Clicks on article card
4. Navigates to `/insights/article-slug`
5. Views full article
6. Can return via "Back to Insights" button

## SEO Implementation

### Page-Level SEO

Both components use the `SEOHead` component for meta tags:

```typescript
<SEOHead
  title="Marine Technology Insights | Beringia Marine"
  description="Explore articles, case studies, white papers..."
  url="/insights"
  image="/og-image.jpeg"
/>
```

### Article-Level SEO

Individual articles support custom SEO fields:

```typescript
<SEOHead
  title={article.seo?.title || `${article.title} | Beringia Marine`}
  description={article.seo?.description || article.abstract}
  image={article.seo?.ogImage || article.coverImage}
  url={`/insights/${article.slug}`}
  type="article"
/>
```

### Structured Data

Articles include JSON-LD structured data via `ArticleStructuredData`:

```typescript
<ArticleStructuredData
  title={article.title}
  description={article.abstract}
  author={article.author}
  publishDate={article.publishDate}
  image={article.coverImage}
/>
```

## Styling

### CSS Architecture

Each component has its own CSS file with BEM-style naming:

**Insights.css**:

- `.insights` - Main container
- `.insights__hero` - Hero section
- `.insights__grid` - Article grid
- `.insights__article-card` - Individual cards
- `.insights__category-btn` - Filter buttons

**ArticlePage.css**:

- `.article` - Main container
- `.article__hero` - Hero section
- `.article__body` - Content area
- `.article__content-html` - HTML content styles

### Responsive Design

Both components are fully responsive with breakpoints for:

- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## Accessibility Features

### ARIA Labels

All interactive elements include appropriate ARIA labels:

```typescript
<button
  role="tab"
  aria-selected={selectedCategory === category}
  aria-controls="insights-articles-grid"
>
  {category}
</button>
```

### Keyboard Navigation

- Article cards are keyboard accessible (Tab, Enter, Space)
- Category filters support keyboard navigation
- Focus states clearly visible

### Screen Reader Support

- Semantic HTML structure
- Descriptive alt text for images
- ARIA live regions for dynamic content
- Role attributes for custom components

## Current Implementation

### Mock Data

Currently uses hardcoded mock data in both components:

```typescript
const mockArticles: ArticleData[] = [
  {
    id: "1",
    title: "Evaluating Hydrus MicroAUV for Benthic Survey...",
    // ... full article data
  },
];
```

### Data Fetching

Simulated async data fetching:

```typescript
useEffect(() => {
  const fetchArticles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setArticles(mockArticles);
    setIsLoading(false);
  };
  fetchArticles();
}, []);
```

## Future CMS Integration

### Sanity CMS Ready

The system is designed for Sanity CMS integration:

1. **Schema Definition**: Create Sanity schema matching `ArticleData` interface
2. **API Integration**: Replace mock data with Sanity client queries
3. **Image Handling**: Use Sanity's image CDN for optimized delivery
4. **Rich Text**: Convert Sanity Portable Text to HTML

### Integration Steps

1. Install Sanity client:

```bash
npm install @sanity/client @sanity/image-url
```

2. Create Sanity client:

```typescript
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "your-project-id",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});
```

3. Replace mock data with queries:

```typescript
const fetchArticles = async () => {
  const query = `*[_type == "article"] | order(publishDate desc) {
    _id,
    title,
    subtitle,
    abstract,
    content,
    category,
    author,
    publishDate,
    "coverImage": coverImage.asset->url,
    tags,
    slug,
    pdfUrl,
    seo
  }`;

  const articles = await sanityClient.fetch(query);
  setArticles(articles);
};
```

## Adding New Articles

### Manual Addition (Current Method)

1. Open `src/components/Insights/Insights.tsx`
2. Add new article object to `mockArticles` array:

```typescript
const mockArticles: ArticleData[] = [
  // Existing articles...
  {
    id: "2",
    title: "Your New Article Title",
    subtitle: "A compelling subtitle",
    abstract: "Brief description for the card view...",
    content: `
      <h2>Section Title</h2>
      <p>Your content here...</p>
    `,
    category: "Tech Article",
    author: "Author Name",
    publishDate: "2025-01-15",
    coverImage: "/path-to-image.jpg",
    tags: ["Tag1", "Tag2", "Tag3"],
    slug: "your-new-article-title",
    pdfUrl: "https://example.com/article.pdf", // Optional
    seo: {
      title: "Custom SEO Title",
      description: "Custom meta description",
      ogImage: "/custom-og-image.jpg",
    },
  },
];
```

3. Duplicate the same article in `ArticlePage.tsx` mock data
4. Add cover image to `/public` directory
5. Test navigation and display

### Content Guidelines

**Title**:

- Clear and descriptive
- 60-80 characters for SEO
- Capitalize major words

**Subtitle**:

- Expands on title
- 80-120 characters
- Provides context

**Abstract**:

- 2-3 sentences
- Summarizes key points
- Engaging and informative
- 150-200 characters

**Content**:

- Use semantic HTML (`<h2>`, `<p>`, `<ul>`, etc.)
- Include section headings
- Break up long paragraphs
- Use lists for key points
- Add emphasis with `<strong>` and `<em>`

**Tags**:

- 3-6 relevant tags
- Use consistent terminology
- Include technology names
- Add topic categories

**Slug**:

- Lowercase
- Hyphen-separated
- No special characters
- Match title closely
- Unique across all articles

## Image Management

### Cover Images

**Requirements**:

- Minimum resolution: 1200x630px (Open Graph standard)
- Aspect ratio: 16:9 or 1.91:1
- Format: JPEG or PNG
- Optimized file size: < 500KB
- Descriptive filename

**Location**: `/public/` directory

**Naming Convention**:

- Use descriptive, hyphenated names
- Example: `hydrus-subsurface.jpeg`
- Match article slug when possible

### Open Graph Images

For social media sharing, create dedicated OG images:

- Size: 1200x630px exactly
- Include article title
- Brand elements
- High contrast text
- Location: `/public/desktop-[slug].png`

## PDF Integration

### Adding PDF Downloads

1. **Upload PDF**: Host on CDN (e.g., Cloudflare R2, AWS S3)
2. **Get URL**: Copy public URL
3. **Add to Article**: Set `pdfUrl` field
4. **Test**: Verify download button appears and works

### PDF Best Practices

- Use descriptive filenames
- Optimize file size (compress if > 5MB)
- Ensure public access
- Use HTTPS URLs
- Consider CDN for performance
- Add version numbers if updated

## Performance Optimization

### Current Optimizations

1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **Code Splitting**: Components loaded on-demand via routing
3. **Simulated Loading**: Loading states for better UX

### Future Optimizations

1. **Image Optimization**:

   - Use WebP format with JPEG fallback
   - Implement responsive images with `srcset`
   - Add blur-up placeholders

2. **Content Delivery**:

   - Implement pagination (10-20 articles per page)
   - Add infinite scroll option
   - Cache API responses

3. **Bundle Size**:
   - Lazy load article content
   - Split CSS by route
   - Tree-shake unused code

## Error Handling

### Current Error States

1. **Loading State**: Spinner with message
2. **Not Found**: Custom 404 for missing articles
3. **Empty State**: Message when no articles in category

### Error Boundary

Both components wrapped in `ErrorBoundary`:

```typescript
<ErrorBoundary>
  <InsightsContent />
</ErrorBoundary>
```

## Testing Checklist

### Manual Testing

- [ ] All articles display in grid
- [ ] Category filtering works
- [ ] Article cards are clickable
- [ ] Individual article pages load
- [ ] Back navigation works
- [ ] PDF download buttons work (if present)
- [ ] Images load correctly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation functional
- [ ] Screen reader accessible

### SEO Testing

- [ ] Meta tags present in page source
- [ ] Open Graph tags correct
- [ ] Structured data validates (Google Rich Results Test)
- [ ] Sitemap includes article URLs
- [ ] Canonical URLs set correctly

### Performance Testing

- [ ] Lighthouse score > 90
- [ ] Images optimized
- [ ] No console errors
- [ ] Fast page load times
- [ ] Smooth scrolling and interactions

## Common Issues & Solutions

### Issue: Article Not Found

**Symptom**: 404 page when navigating to article

**Solutions**:

1. Verify slug matches exactly (case-sensitive)
2. Check article exists in both component files
3. Ensure route is configured correctly
4. Clear browser cache

### Issue: Images Not Loading

**Symptom**: Broken image icons

**Solutions**:

1. Verify image exists in `/public` directory
2. Check path starts with `/` (not `./`)
3. Confirm filename matches exactly
4. Check file permissions

### Issue: PDF Download Not Working

**Symptom**: Button doesn't appear or download fails

**Solutions**:

1. Verify `pdfUrl` field is set
2. Check URL is publicly accessible
3. Ensure CORS headers allow downloads
4. Test URL in browser directly

### Issue: Category Filter Not Working

**Symptom**: Articles don't filter when clicking categories

**Solutions**:

1. Check category spelling matches exactly
2. Verify `selectedCategory` state updates
3. Ensure filter logic is correct
4. Check for console errors

## Maintenance

### Regular Tasks

1. **Content Updates**:

   - Add new articles monthly/quarterly
   - Update existing content as needed
   - Archive outdated articles

2. **Image Optimization**:

   - Compress new images before upload
   - Convert to WebP format
   - Update alt text for accessibility

3. **SEO Monitoring**:

   - Check search rankings
   - Update meta descriptions
   - Monitor click-through rates
   - Fix broken links

4. **Performance**:
   - Run Lighthouse audits
   - Monitor page load times
   - Optimize bundle size
   - Update dependencies

## Migration Path to CMS

### Phase 1: Preparation

1. Set up Sanity project
2. Define schema matching `ArticleData`
3. Create content migration scripts
4. Test with sample data

### Phase 2: Integration

1. Install Sanity client
2. Create API service layer
3. Replace mock data with API calls
4. Test thoroughly

### Phase 3: Content Migration

1. Import existing articles to Sanity
2. Upload images to Sanity CDN
3. Verify all content displays correctly
4. Update documentation

### Phase 4: Optimization

1. Implement caching strategy
2. Add preview functionality
3. Set up webhooks for updates
4. Configure CDN for images

## Related Documentation

- [SEO Implementation Guide](./seo-implementation.md)
- [Component Architecture](./component-architecture.md)
- [Styling Guidelines](./styling-guidelines.md)
- [Accessibility Standards](./accessibility-standards.md)

## Support & Resources

### Internal Resources

- Design mockups: `/docs/assets/desktop-insights.png`
- Example article: `/docs/assets/desktop-evaluating-hydrus-micro-auv-benthic-survey.png`

### External Resources

- [React Router Documentation](https://reactrouter.com/)
- [Sanity CMS Documentation](https://www.sanity.io/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Open Graph Protocol](https://ogp.me/)

---

**Last Updated**: November 20, 2025  
**Version**: 1.0.0  
**Maintainer**: Development Team
