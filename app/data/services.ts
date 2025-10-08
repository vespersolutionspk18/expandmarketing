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
    description: 'Your roadmap from where you are to where you want to be. We map out multi-channel strategies that turn ambition into action and traffic into revenue.',
    category: 'Marketing',
    tags: [
      { label: 'Strategic Planning' },
      { label: 'Market Research' },
      { label: 'Growth Roadmaps' }
    ],
    images: {
      thumbnail: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
      card: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80',
      desktop: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
    }
  },
  {
    id: '2',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Stop posting into the void. We create social content that sparks conversations, builds communities, and actually drives business results across every platform.',
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
    description: 'Content that people actually want to read. We craft stories and strategies that position you as the expert, build trust, and turn readers into customers.',
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
    description: 'Emails people open, click, and buy from. We design campaigns that land in inboxes (not spam folders) and nurture relationships that lead to real revenue.',
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
    description: 'Every dollar working harder. We run Google Ads, Meta, LinkedIn, and YouTube campaigns that reach the right people, at the right time, with measurable ROI.',
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
    description: 'Get featured where it matters. We secure media placements, build authoritative backlinks, and create campaigns that boost your credibility and visibility.',
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
    description: 'Video that stops the scroll. From TikTok to YouTube, we create video content and strategies that capture attention, tell your story, and drive real engagement.',
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
    description: 'Stand out or blend in. We help you define what makes you different, build a brand that resonates, and create messaging that sticks in your customer\'s mind.',
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
    description: 'Websites that work as hard as you do. Fast, beautiful, and built to convert. We create custom sites that look stunning and perform even better.',
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
    description: 'The foundation Google loves. We fix the technical issues holding you back, optimize site speed, and make sure search engines can find and rank your best content.',
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
    description: 'Content that climbs the rankings. We optimize every page to rank higher, attract more traffic, and turn visitors into customers through smart SEO fundamentals.',
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
    description: 'Own your neighborhood. We optimize your Google Business Profile, build local citations, and help you dominate local search results where your customers are looking.',
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
    description: 'Online stores that sell. We build seamless shopping experiences on Shopify, WooCommerce, and custom platforms that make buying easy and keep customers coming back.',
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
    description: 'Find out what\'s holding you back. We dive deep into your site, identify opportunities, and deliver a clear action plan to boost your rankings and traffic.',
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
    description: 'Turn traffic into customers. We test, tweak, and optimize every element of your site to increase conversions and maximize the value of every visitor.',
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
    description: 'Keep your site running smooth. Regular updates, security patches, backups, and monitoring so you can focus on your business while we handle the tech.',
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
    description: 'CRM that actually gets used. We set up and customize HubSpot, Salesforce, or your platform of choice so your team loves using it and your data finally makes sense.',
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
    description: 'Set it up, watch it work. We build automated workflows that nurture leads, segment audiences, and send the right message at the right time, all on autopilot.',
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
    description: 'Automate the path to purchase. We design and build funnels that qualify leads, move prospects forward, and give your sales team hot opportunities ready to close.',
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
    description: 'More leads, less effort. We build systems that capture, qualify, and route leads automatically so you spend time closing deals, not chasing cold prospects.',
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
    description: 'Never lose track of a deal again. We optimize your sales pipeline, implement tracking systems, and give you the visibility and insights to close more consistently.',
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
    description: 'Make your tools talk to each other. We connect your CRM, email, ads, and analytics platforms so data flows seamlessly and you have one source of truth.',
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
    description: 'AI that makes sense for your business. We help you identify real opportunities, choose the right tools, and implement AI solutions that actually move the needle.',
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
    description: '24/7 support that feels human. We build intelligent chatbots that answer questions, qualify leads, and handle customer service while you sleep.',
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
    description: 'Scale content without losing your voice. We implement AI writing tools, build custom workflows, and help you create more content faster while maintaining quality.',
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
    description: 'Show everyone exactly what they want to see. We use AI to personalize content, product recommendations, and experiences based on behavior and preferences.',
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
    description: 'See what\'s coming before it happens. We build AI models that forecast trends, predict customer behavior, and give you insights to make smarter decisions.',
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
    description: 'AI built specifically for you. From custom models to unique automations, we develop tailored AI solutions that solve your specific business challenges.',
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
 * Returns only the first 8 most important services
 */
export const getServicesForHomepage = () => {
  return SERVICES.slice(0, 8).map(s => ({
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
