# Beringia Marine Website

## About

Beringia Marine is a web platform designed to highlight the frontiers of marine technology and underwater exploration. Built with modern web technologies and a focus on clarity, performance, and storytelling, it showcases interactive 3D models, detailed service offerings, featured artists, and a streamlined client contact system.

## Features

- 🌐 Responsive design optimized across devices
- 🧭 Interactive 3D model viewer (Sketchfab API)
- 🧊 Glassmorphism-inspired UI for immersive visuals
- 📄 PDF.js viewer for onboard documentation
- 💬 Contact modal with real-time validation
- 🎨 Featured artist showcase
- 🎥 Smooth transitions via Framer Motion
- 🛠 Type-safe implementation with custom hooks & error boundaries
- 🌒 Marine-inspired dark theme with dynamic gradients

## Live Demo

👉 [https://beringia-marine.com](https://beringia-marine.com)

## Technologies Used

### Frontend

- React 18 + TypeScript
- Vite (dev/build)
- CSS Modules (BEM naming convention)
- Framer Motion
- Sketchfab API
- PDF.js

### Tooling

- ESLint + Prettier
- Git & GitHub
- Chrome DevTools
- Environment variable configuration

## Getting Started

```bash
git clone https://github.com/jackmalzone/se_project_beringia.git
cd se_project_beringia
npm install
```

Then create a `.env` file in the root:

```env
VITE_SKETCHFAB_API_KEY=your_api_key
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Start the dev server:

```bash
npm run dev
```

## Project Structure

```
beringia-refactor/
├── public/                        # Static public assets
│   ├── favicon.ico               # Site favicon
│   ├── robots.txt               # SEO configuration
│   ├── sitemap.xml              # SEO sitemap
│   └── sketchfab/               # 3D model assets
│       └── thumbnails/          # Model preview images
├── src/
│   ├── app/                      # App router (Next.js 14)
│   │   ├── (routes)/            # Page routes by folder
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── clients/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx         # Home page
│   │   ├── layout.tsx           # App shell
│   │   ├── globals.css          # Base global styles
│   │   └── metadata.ts          # Site meta info
│   ├── components/              # UI & layout components
│   │   ├── ui/                  # Design primitives
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.module.css
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx
│   │   │   │   └── Card.module.css
│   │   │   └── Modal/
│   │   │       ├── Modal.tsx
│   │   │       └── Modal.module.css
│   │   ├── layout/              # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── Footer.module.css
│   │   │   └── Navigation/
│   │   │       ├── Navigation.tsx
│   │   │       └── Navigation.module.css
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── Hero.module.css
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.tsx
│   │   │   │   └── Contact.module.css
│   │   │   └── Features/
│   │   │       ├── Features.tsx
│   │   │       └── Features.module.css
│   │   └── clients/             # Client-specific modules
│   │       ├── AnchorBot/
│   │       │   ├── AnchorBot.tsx
│   │       │   └── AnchorBot.module.css
│   │       └── Hydrus/
│   │           ├── Hydrus.tsx
│   │           └── Hydrus.module.css
│   ├── lib/                     # Core functionality
│   │   ├── sanity.ts            # Sanity client config
│   │   ├── fetchClients.ts      # Client data queries
│   │   ├── sketchfab.ts         # Sketchfab API client
│   │   └── email.ts             # Email service integration
│   ├── types/                   # TypeScript types
│   │   ├── client.ts            # Client data types
│   │   ├── cms.ts               # CMS schema types
│   │   └── api.ts               # API response types
│   ├── contexts/                # React Context providers
│   │   ├── ModalContext/
│   │   │   └── ModalContext.tsx
│   │   └── ThemeContext/
│   │       └── ThemeContext.tsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── useModal.ts
│   │   ├── useTheme.ts
│   │   └── useScroll.ts
│   ├── styles/                  # Global styles
│   │   ├── variables.css        # CSS variables
│   │   └── mixins.css           # CSS mixins
│   └── constants/               # Static data
│       ├── routes.ts            # Route definitions
│       └── config.ts            # App configuration
├── cms/                         # Sanity Studio
│   ├── schemas/                 # Content schemas
│   │   ├── client.ts
│   │   ├── post.ts
│   │   └── page.ts
│   ├── deskStructure.ts         # Studio UI config
│   └── sanity.config.ts         # Studio config
├── scripts/                     # Utility scripts
│   ├── migrate.ts               # Data migration
│   └── seed.ts                  # Seed data
├── docs/                        # Documentation
│   ├── CODE_EDITING_GUIDE.md
│   ├── REFACTOR_PLAN.md
│   └── API.md
├── .env                         # Environment variables
├── .env.example                 # Example env file
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
├── package.json                 # Dependencies
└── README.md                    # Project documentation
```

## Component Architecture Highlights

### Modal System

- Centralized via React Context
- Contact and PDF modals
- Accessible, responsive, and animated

### Error Handling

- Global ErrorBoundary + localized handlers
- API-level feedback with useApiErrorHandler

### Form Management

- Custom useForm hook with validation
- Realtime field-level feedback

### 3D Model Integration

- Dynamic Sketchfab embedding
- Custom UI controls and loading states

### PDF Viewer

- PDF.js integration
- Navigation controls
- Mobile-optimized

## Future Roadmap

- ✅ CMS-backed blog & news system (planned)
- 🧭 Case study library with filtering
- 🔒 Form submission history and admin dashboard
- 📊 Analytics & A/B testing integration
- 🧩 Multi-model Sketchfab carousel

## Screenshots

### Desktop

[Desktop screenshots to be added]

### Mobile

[Mobile screenshots to be added]

## Contributing

```bash
# Fork, feature branch, commit, push, and open a PR
```

## Security

- Type-safe everywhere
- API call error handling
- Form input sanitization
- Secure PDF rendering
- Environment-separated secrets

## Author

👤 **Jack Malzone**  
Full-stack developer & creative technologist  
[LinkedIn](https://linkedin.com/in/jackmalzone) →

## Acknowledgments

- Sketchfab for 3D viewer integration
- TripleTen for project support and structure
- Chris Malzone for the opportunity to bring Beringia's vision to life
- The open-source community for making tools like this possible
