/**
 * CENTRALIZED SERVICES DATA CONTROLLER
 * Single source of truth for all services across the application
 *
 * All components import from here instead of hardcoding services
 */

export interface ServiceTag {
  label: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'Digital Marketing' | 'Web Design';
  tags: ServiceTag[];
  images: {
    thumbnail: string;
    card: string;
    desktop: string;
  };
}

/**
 * SERVICES ARRAY - Single source of truth
 * Update this array to add/remove/modify services globally
 */
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Search & Growth Strategy',
    slug: 'strategy-growth',
    description: 'Strategic planning and multi-channel search optimization. We\'re audience-first organic media planners building category leaders.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Multi-channel Strategy' },
      { label: 'Audience Planning' },
      { label: 'Growth Consulting' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '2',
    title: 'Onsite SEO',
    slug: 'onsite-seo',
    description: 'Technical SEO and website optimization. Industry-leading technical excellence that defends your position in the market.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Technical SEO' },
      { label: 'Site Architecture' },
      { label: 'Performance' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '3',
    title: 'Content Experience',
    slug: 'content-experience',
    description: 'Search-driven content creation and strategy. Content marketing work the industry copies 3 years from now.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Content Strategy' },
      { label: 'Storytelling' },
      { label: 'Search-First' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '4',
    title: 'Digital PR',
    slug: 'digital-pr',
    description: 'Media relations and link building through creative campaigns. Paving the path for creative SEO with Digital PR.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Media Relations' },
      { label: 'Creative Campaigns' },
      { label: 'Authority Building' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '5',
    title: 'Social Video SEO',
    slug: 'social-video-seo',
    description: 'TikTok and YouTube optimization. Capturing audiences where they search for video content.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Video Strategy' },
      { label: 'TikTok SEO' },
      { label: 'YouTube Growth' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '6',
    title: 'Social & Social Search',
    slug: 'social',
    description: 'Social search optimization and social media marketing. Meeting your consumers at each stage of the journey.',
    category: 'Digital Marketing',
    tags: [
      { label: 'Social Strategy' },
      { label: 'Community Growth' },
      { label: 'Social Search' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '7',
    title: 'Data & Insights',
    slug: 'data-insights',
    description: 'Analytics and performance tracking. Data-driven search strategies across multiple platforms.',
    category: 'Web Design',
    tags: [
      { label: 'Performance Analytics' },
      { label: 'Strategic Insights' },
      { label: 'ROI Tracking' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '8',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Custom website design and development solutions. Building high-performance web experiences optimized for search.',
    category: 'Web Design',
    tags: [
      { label: 'Custom Development' },
      { label: 'Responsive Design' },
      { label: 'Performance' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '9',
    title: 'AI Automation',
    slug: 'ai-automation',
    description: 'Intelligent automation and AI-powered solutions. Innovation in ways your competitors don\'t even dream of.',
    category: 'Web Design',
    tags: [
      { label: 'AI Solutions' },
      { label: 'Process Automation' },
      { label: 'Innovation' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '10',
    title: 'CRM Consultancy',
    slug: 'crm-consultancy',
    description: 'Customer relationship management strategy and implementation. Strategic growth partners for everything client-focused.',
    category: 'Web Design',
    tags: [
      { label: 'CRM Strategy' },
      { label: 'Implementation' },
      { label: 'Customer Success' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  }
];

// ============================================
// HELPER FUNCTIONS FOR COMPONENTS
// ============================================

/**
 * Get service by slug
 */
export const getServiceBySlug = (slug: string): Service | undefined => {
  return SERVICES.find(s => s.slug === slug);
};

/**
 * Get services by category
 */
export const getServicesByCategory = (category: 'Digital Marketing' | 'Web Design'): Service[] => {
  return SERVICES.filter(s => s.category === category);
};

/**
 * Get all service slugs (for Next.js generateStaticParams)
 */
export const getAllServiceSlugs = (): string[] => {
  return SERVICES.map(s => s.slug);
};

/**
 * FOR HEADER/MEGAMENU: Get services formatted for navigation
 */
export const getServicesForNav = () => {
  return SERVICES.map(s => ({
    label: s.title,
    href: `/services/${s.slug}`
  }));
};

/**
 * FOR MEGAMENU: Get service slug map (name -> slug)
 */
export const getServiceSlugMap = (): Record<string, string> => {
  return SERVICES.reduce((acc, s) => {
    acc[s.title] = s.slug;
    return acc;
  }, {} as Record<string, string>);
};

/**
 * FOR MEGAMENU: Get service categories with names
 */
export const getServiceCategories = () => {
  return {
    'Digital Marketing': SERVICES
      .filter(s => s.category === 'Digital Marketing')
      .map(s => s.title),
    'Web Design': SERVICES
      .filter(s => s.category === 'Web Design')
      .map(s => s.title)
  };
};

/**
 * FOR HOMEPAGE: Get services for grid (title, href, image)
 */
export const getServicesForHomepage = () => {
  return SERVICES.map(s => ({
    title: s.title,
    href: `/services/${s.slug}`,
    image: s.images.card
  }));
};

/**
 * FOR SERVICES PAGE: Get services for list (full data)
 */
export const getServicesForList = () => {
  return SERVICES.map(s => ({
    title: s.title,
    description: s.description,
    tags: s.tags,
    href: `/services/${s.slug}`,
    thumbnailImage: s.images.thumbnail,
    desktopImage: s.images.desktop
  }));
};
