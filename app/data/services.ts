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
  category: 'Marketing' | 'Website & SEO' | 'CRM & Sales Automation' | 'AI';
  tags: ServiceTag[];
  images: {
    thumbnail: string;
    card: string;
    desktop: string;
    process?: string;  // Image for "Our Process" section
    whyExpand?: string;  // Image for "Why Expand" accordion section
  };
}

/**
 * SERVICES ARRAY - Single source of truth
 * Update this array to add/remove/modify services globally
 */
export const SERVICES: Service[] = [
  // ============================================
  // MARKETING SERVICES
  // ============================================
  {
    id: '1',
    title: 'Search & Growth Strategy',
    slug: 'strategy-growth',
    description: 'We figure out where your best customers are online and build a clear plan to reach them. SEO, content, ads, social: we map out what works and how to scale it.',
    category: 'Marketing',
    tags: [
      { label: 'Strategic Planning' },
      { label: 'Market Research' },
      { label: 'Growth Roadmaps' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/13628541/pexels-photo-13628541.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/5083397/pexels-photo-5083397.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/13628541/pexels-photo-13628541.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500',
      process: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
    }
  },
  {
    id: '2',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'We handle your social media from strategy to execution. Content creation, account management, paid campaigns, and performance tracking across Instagram, LinkedIn, TikTok, Facebook, and Twitter.',
    category: 'Marketing',
    tags: [
      { label: 'Content Creation' },
      { label: 'Community Management' },
      { label: 'Paid Social' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '3',
    title: 'Content Marketing',
    slug: 'content-marketing',
    description: 'We write the blog posts, articles, and guides that bring people to your website. SEO-optimized content that ranks in search, answers questions, and turns visitors into customers.',
    category: 'Marketing',
    tags: [
      { label: 'Content Strategy' },
      { label: 'Blog Writing' },
      { label: 'Thought Leadership' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '4',
    title: 'Email Marketing',
    slug: 'email-marketing',
    description: 'We build email systems that generate sales while you sleep. From welcome sequences to weekly newsletters to abandoned cart recovery, we handle the strategy, writing, design, and setup so your emails actually make money.',
    category: 'Marketing',
    tags: [
      { label: 'Email Campaigns' },
      { label: 'Automation Flows' },
      { label: 'List Growth' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '5',
    title: 'Paid Advertising',
    slug: 'paid-advertising',
    description: 'We run paid ad campaigns on Google, Facebook, Instagram, LinkedIn, and YouTube. You get targeted traffic, clear tracking, and campaigns that improve based on real performance data.',
    category: 'Marketing',
    tags: [
      { label: 'Google Ads' },
      { label: 'Meta Ads' },
      { label: 'ROI Optimization' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '6',
    title: 'Digital PR',
    slug: 'digital-pr',
    description: 'We get your company featured in online publications that matter to your audience. Real media coverage that brings traffic, backlinks, and new customers who already trust you.',
    category: 'Marketing',
    tags: [
      { label: 'Media Relations' },
      { label: 'Link Building' },
      { label: 'Brand Authority' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '7',
    title: 'Video Marketing',
    slug: 'video-marketing',
    description: 'We plan, produce, and optimize video content that works across platforms. From scripting and filming to editing and distribution, we handle the full process: product demos, tutorials, testimonials, and social clips for TikTok, YouTube, and Instagram.',
    category: 'Marketing',
    tags: [
      { label: 'Video Strategy' },
      { label: 'YouTube Growth' },
      { label: 'Short-Form Content' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '8',
    title: 'Brand Strategy',
    slug: 'brand-strategy',
    description: 'We help you define what your business actually stands for and how it\'s different from everyone else. Through positioning research, messaging development, and voice guidelines, we give you a clear brand foundation that works across every customer touchpoint.',
    category: 'Marketing',
    tags: [
      { label: 'Brand Identity' },
      { label: 'Positioning' },
      { label: 'Messaging Strategy' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },

  // ============================================
  // WEBSITE & SEO SERVICES
  // ============================================
  {
    id: '9',
    title: 'Web Development',
    slug: 'web-development',
    description: 'We build websites from the ground up using modern frameworks and clean code. Our developers handle everything from initial design implementation to backend infrastructure, creating sites that load fast, work smoothly across all devices, and are easy for you to maintain.',
    category: 'Website & SEO',
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
    id: '10',
    title: 'Technical SEO',
    slug: 'technical-seo',
    description: 'We audit your website\'s technical foundation, fix crawl errors and broken links, optimize site speed and Core Web Vitals, implement structured data, and configure XML sitemaps. Our team resolves indexing issues, manages redirects, and ensures search engines can properly access and rank your content.',
    category: 'Website & SEO',
    tags: [
      { label: 'Site Speed' },
      { label: 'Core Web Vitals' },
      { label: 'Crawlability' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '11',
    title: 'On-Page SEO',
    slug: 'on-page-seo',
    description: 'We optimize the content and HTML elements on your pages to rank higher in search results. From title tags and headers to keyword placement and internal links, we refine what search engines read and what users see to drive more organic traffic.',
    category: 'Website & SEO',
    tags: [
      { label: 'Content Optimization' },
      { label: 'Keyword Strategy' },
      { label: 'Meta Data' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '12',
    title: 'Local SEO',
    slug: 'local-seo',
    description: 'We get your business showing up when locals search for what you offer. This includes optimizing your Google Business Profile, building citations across directories, managing reviews, and improving your Google Maps ranking so customers can find you when they need you.',
    category: 'Website & SEO',
    tags: [
      { label: 'Google Business' },
      { label: 'Local Rankings' },
      { label: 'Review Management' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/1059110/pexels-photo-1059110.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/1059110/pexels-photo-1059110.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/1059110/pexels-photo-1059110.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '13',
    title: 'E-commerce Development',
    slug: 'ecommerce-development',
    description: 'We build online stores that turn browsers into buyers. From product catalogs and shopping carts to payment processing and order management, we handle the technical setup that makes selling online possible on Shopify, WooCommerce, or custom platforms.',
    category: 'Website & SEO',
    tags: [
      { label: 'Shopify' },
      { label: 'WooCommerce' },
      { label: 'Conversion Focus' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '14',
    title: 'SEO Audits',
    slug: 'seo-audits',
    description: 'We analyze your website\'s technical structure, content quality, and backlink profile to identify what\'s preventing higher rankings. You receive a prioritized audit report with specific fixes ranked by impact, so you know exactly what to tackle first.',
    category: 'Website & SEO',
    tags: [
      { label: 'Site Analysis' },
      { label: 'Competitor Research' },
      { label: 'Action Plans' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '15',
    title: 'Conversion Optimization',
    slug: 'conversion-optimization',
    description: 'We run systematic tests on your website to find out what makes visitors take action. Then we optimize those elements to turn more of your traffic into leads and customers.',
    category: 'Website & SEO',
    tags: [
      { label: 'A/B Testing' },
      { label: 'Landing Pages' },
      { label: 'UX Optimization' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '16',
    title: 'Website Maintenance',
    slug: 'website-maintenance',
    description: 'We handle the technical upkeep that keeps your website secure, fast, and online. That means regular software updates, security monitoring, automated backups, and fixing issues before they affect your customers.',
    category: 'Website & SEO',
    tags: [
      { label: 'Updates & Security' },
      { label: 'Monitoring' },
      { label: 'Backup Management' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },

  // ============================================
  // CRM & SALES AUTOMATION SERVICES
  // ============================================
  {
    id: '17',
    title: 'CRM Implementation',
    slug: 'crm-implementation',
    description: 'We implement and configure CRM platforms like HubSpot and Salesforce to match your actual sales process. This includes system setup, custom field creation, data migration from your existing tools, integrations with your other software, and hands-on training for your team.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'HubSpot' },
      { label: 'Salesforce' },
      { label: 'Custom Setup' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '18',
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    description: 'We build automated email workflows that follow up with leads, segment your audience, and send personalized messages based on what people actually do. Set up once, runs continuously.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'Email Automation' },
      { label: 'Lead Nurturing' },
      { label: 'Workflow Design' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '19',
    title: 'Sales Funnel Automation',
    slug: 'sales-funnel-automation',
    description: 'We build automated systems that score leads, qualify prospects, and move them through your sales pipeline. Your sales team gets notified exactly when someone is ready to buy, not when they first fill out a form.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'Lead Scoring' },
      { label: 'Funnel Design' },
      { label: 'Pipeline Automation' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '20',
    title: 'Lead Generation Systems',
    slug: 'lead-generation-systems',
    description: 'We build lead capture systems that collect inquiries from every channel, qualify them automatically, and route them to the right person. You get forms, landing pages, chatbots, and qualification logic that work together so no lead gets ignored.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'Lead Capture' },
      { label: 'Qualification' },
      { label: 'Auto-Routing' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '21',
    title: 'Pipeline Management',
    slug: 'pipeline-management',
    description: 'We build and optimize your sales pipeline so you never lose track of a deal. You get clear visibility into every opportunity, automated tracking systems, and the reporting you need to close more consistently.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'Pipeline Optimization' },
      { label: 'Deal Tracking' },
      { label: 'Sales Analytics' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '22',
    title: 'Integration Services',
    slug: 'integration-services',
    description: 'We connect your business tools so data flows automatically between them. No more manual exports, duplicate entry, or information living in different places. Your CRM, email platform, ads, and analytics all work together as one system.',
    category: 'CRM & Sales Automation',
    tags: [
      { label: 'API Integration' },
      { label: 'Data Sync' },
      { label: 'System Connection' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },

  // ============================================
  // AI SERVICES
  // ============================================
  {
    id: '23',
    title: 'AI Strategy & Consulting',
    slug: 'ai-strategy',
    description: 'We help you figure out where AI actually helps your business and how to implement it without wasting money on hype. You get a clear roadmap showing which use cases deliver ROI, which tools to use, and how to roll it out step by step.',
    category: 'AI',
    tags: [
      { label: 'AI Planning' },
      { label: 'Use Case Discovery' },
      { label: 'Implementation Strategy' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '24',
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    description: 'AI chatbots that answer customer questions, qualify leads, and handle support requests 24/7. We build conversational systems that sound natural, integrate with your existing tools, and work around the clock without requiring human staff.',
    category: 'AI',
    tags: [
      { label: 'Customer Service' },
      { label: 'Lead Qualification' },
      { label: 'Smart Responses' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '25',
    title: 'AI Content Tools',
    slug: 'ai-content-tools',
    description: 'We set up AI writing tools that help you produce more content without hiring more writers. This includes custom workflows, brand voice training, and quality controls that keep your standards high while your output scales.',
    category: 'AI',
    tags: [
      { label: 'Content Generation' },
      { label: 'Writing Workflows' },
      { label: 'Quality Control' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '26',
    title: 'AI Personalization',
    slug: 'ai-personalization',
    description: 'We use AI to personalize what each visitor sees on your website. That means dynamic content, smart product recommendations, and experiences that adapt to individual behavior and preferences.',
    category: 'AI',
    tags: [
      { label: 'Dynamic Content' },
      { label: 'Recommendations' },
      { label: 'Behavioral Targeting' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '27',
    title: 'Predictive Analytics',
    slug: 'predictive-analytics',
    description: 'We build AI models that predict customer behavior, forecast revenue, and spot market trends before they happen. Get clear insights about what\'s coming so you can plan with confidence instead of guessing.',
    category: 'AI',
    tags: [
      { label: 'Forecasting' },
      { label: 'Customer Insights' },
      { label: 'Data Modeling' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '28',
    title: 'Custom AI Solutions',
    slug: 'custom-ai-solutions',
    description: 'We build AI solutions designed specifically for your business challenges. Custom models, specialized automations, and proprietary integrations that work exactly how you need them to.',
    category: 'AI',
    tags: [
      { label: 'Custom Development' },
      { label: 'Model Training' },
      { label: 'Unique Solutions' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
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
export const getServicesByCategory = (category: Service['category']): Service[] => {
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
    'Marketing': SERVICES
      .filter(s => s.category === 'Marketing')
      .map(s => s.title),
    'Website & SEO': SERVICES
      .filter(s => s.category === 'Website & SEO')
      .map(s => s.title),
    'CRM & Sales Automation': SERVICES
      .filter(s => s.category === 'CRM & Sales Automation')
      .map(s => s.title),
    'AI': SERVICES
      .filter(s => s.category === 'AI')
      .map(s => s.title)
  };
};

/**
 * FOR HOMEPAGE: Get services for grid (title, href, image)
 * Returns only the first 9 most important services
 */
export const getServicesForHomepage = () => {
  return SERVICES.slice(0, 9).map(s => ({
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
