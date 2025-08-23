export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  TERMS: '/terms',
  CLIENTS: '/clients',
  CLIENT: (slug: string) => `/clients/${slug}`,
  INSIGHTS: '/insights',
  ARTICLE: (slug: string) => `/insights/${slug}`
} as const