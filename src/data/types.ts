import { IconType } from 'react-icons';

export interface ClientData {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    modelId?: string;
    seo: {
      title: string;
      description: string;
      ogImage: string;
    };
    overview: {
      title: string;
      description: string;
      headerImage: string;
    };
    sellingPoints: {
      title: string;
      points: Array<{
        id: string;
        title: string;
        description: string;
        icon?: string | IconType;
        features: string[];
        link?: string;
        documentation?: {
          specs: string;
          manual?: string;
        };
      }>;
    };
    useCases: {
      title: string;
      description: string;
      cases: Array<{
        id: string;
        title: string;
        description: string;
        keyPoints: string[];
      }>;
    };
    valueProposition: {
      title: string;
      description: string;
      highlights: string[];
    };
    mediaLinks: {
      website?: string;
      youtube?: string;
      linkedin?: string;
      sketchfab?: string;
      email?: string;
    };
    gallery: Array<GalleryItem>;
  }

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  type: 'image' | 'video' | 'sketchfab';
  modelId?: string;
  videoOptions?: {
    autoplay?: boolean;
    muted?: boolean;
    controls?: boolean;
    loop?: boolean;
    preload?: 'none' | 'metadata' | 'auto';
  };
}