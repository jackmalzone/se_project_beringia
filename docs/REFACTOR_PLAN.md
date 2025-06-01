# Beringia Marine Refactor Plan

## Goals

- Migrate from a fully frontend architecture to a modular full-stack setup
- Improve performance and maintainability by offloading heavy/static data
- Introduce scalable content management (news, whitepapers, client data)
- Preserve the neoclassical aesthetic and intentional structure throughout

## Architecture Overview

### Backend

- **Framework**: Node.js with TypeScript (or use Payload CMS backend if chosen)
- **CMS**: [Recommended: Sanity](https://www.sanity.io/), alt: Payload CMS or Strapi
- **Database**: Sanity-hosted or MongoDB/PostgreSQL if using Payload/Strapi
- **API**: GROQ (Sanity) or REST/GraphQL (Payload/Strapi)

### Frontend

- **Framework**: Next.js 14
- **Languages**: TypeScript, React
- **Styling**: CSS Modules, BEM methodology
- **Animation**: Framer Motion

## Directory Structure (Monorepo Style)

```bash
beringia-refactor/
├── apps/
│   ├── web/                   # Frontend: Next.js 14
│   │   ├── components/        # Feature-based, colocated with .module.css
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Sidebar.module.css
│   │   │   └── Hero/
│   │   │       ├── Hero.tsx
│   │   │       └── Hero.module.css
│   │   ├── pages/             # App Router pages
│   │   ├── styles/            # Global styles
│   │   ├── hooks/             # Custom React hooks
│   │   ├── contexts/          # Global state providers
│   │   ├── data/              # Temporary or fallback data structure
│   │   └── utils/             # Shared frontend utilities
│   └── cms/                   # Sanity Studio or CMS backend (Payload, etc.)
├── packages/                  # Shared logic, types, constants
│   ├── types/                 # TypeScript shared types
│   ├── lib/                   # Shared utility functions
│   └── config/                # Global constants, theme settings
├── public/                    # Static assets (favicons, OG images)
├── docs/                      # Developer documentation
├── .env                       # Root-level environment variables
└── turbo.json / nx.json       # Monorepo tool config (optional)
```

## Why Sanity Fits Doma/Beringia

- Schema-first structured content modeling
- Real-time collaboration, live previews
- Minimal, clean editing interface
- Custom Studio UI to match neoclassical themes
- Strong developer control without compromising editor UX

## Content Migration Plan

### Move to CMS:

- All client Markdown data (title, description, features, images)
- Blog posts and white papers
- Case studies and use cases
- Press/media coverage

### Store in Headless Storage:

- Images (optimize via Sanity's CDN or S3-like service)
- 3D models (via Sketchfab API or CMS asset hosting)
- Videos (YouTube embeds or Cloudinary integration)

### Keep in Frontend:

- Presentational layout and design components
- Client-side animations and transitions

## Phased Development

### Phase 1: Setup

- [ ] Create new git branch: `refactor/fullstack`
- [ ] Set up CMS (Sanity or Payload)
- [ ] Create schemas for client profiles, media, posts, and site metadata

### Phase 2: Content Migration

- [ ] Migrate all static data from frontend to CMS
- [ ] Update frontend to fetch from CMS using GROQ or GraphQL

### Phase 3: Admin & Workflow

- [ ] Customize CMS dashboard to match brand
- [ ] Set up editorial roles and publishing workflows
- [ ] Integrate real-time previews for editors

### Phase 4: Deployment

- [ ] Deploy backend on Vercel/Render (or Sanity's cloud)
- [ ] Integrate with frontend via environment variables
- [ ] Test performance, SEO, and SSR

## Color System (Beringia Theme)

```css
:root {
  --color-light-blue: #00d8e3;
  --color-dark-blue-black: #214751;
  --color-dark-blue-teal: #1b444e;
  --color-dark-blue-dark: #052533;
  --color-light-blue-blue: #00a2b0;
  --color-deep-teal: #007a85;
  --color-deep-navy: #003b4a;
  --color-very-light-blue: #e6f9fb;
  --color-bright-cyan: #0aecf9;
  --color-medium-cyan: #16c7d6;
  --color-muted-teal: #2a5965;
  --color-ice-blue: #f0fdff;
  --color-dark-teal: #004a54;
}
```
