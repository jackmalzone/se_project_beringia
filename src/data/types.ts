export interface ClientData {
    id: string;
    name: string;
    slug: string;
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
        icon?: string;
        features: string[];
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
    };
    gallery: Array<{
      id: string;
      url: string;
      alt: string;
      type: 'image' | 'video';
    }>;
  }