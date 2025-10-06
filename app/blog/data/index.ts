import { BlogPost, BlogListingItem } from './types';
import { carrieRosePost } from './carrie-rose';
import { aiSeoPost } from './ai-seo-strategies';
import { webDesignPost } from './web-design-trends';
import { crmPost } from './crm-automation';
import { socialMediaPost } from './social-media-growth';
import { contentMarketingPost } from './content-marketing';
import { ppcPost } from './ppc-campaigns';
import { emailMarketingPost } from './email-marketing';

// All blog posts indexed by slug
export const blogPosts: Record<string, BlogPost> = {
  'carrie-rose': carrieRosePost,
  'ai-seo-strategies': aiSeoPost,
  'web-design-trends': webDesignPost,
  'crm-automation': crmPost,
  'social-media-growth': socialMediaPost,
  'content-marketing': contentMarketingPost,
  'ppc-campaigns': ppcPost,
  'email-marketing': emailMarketingPost
};

// Blog listing items for the main blog page
export const blogListings: BlogListingItem[] = [
  {
    id: '1',
    slug: 'ai-seo-strategies',
    title: 'How AI is Transforming SEO Strategies',
    excerpt: 'Discover how artificial intelligence is revolutionizing the way we approach SEO and content strategy in 2025.',
    category: 'AI & SEO',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Mon 15 Jul',
    readTime: '6 mins',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop',
    featured: true
  },
  {
    id: '2',
    slug: 'carrie-rose',
    title: 'An interview with Carrie Rose',
    excerpt: 'I spent 5 years working on one of the hardest accounts, Ladbrokes, which is where I combined my passion for the best technical & creative work in a highly competitive niche.',
    category: 'News',
    author: {
      name: 'Carrie Rose',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Fri 18 Jul',
    readTime: '6 mins',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '3',
    slug: 'web-design-trends',
    title: 'Web Design Trends Driving Conversions',
    excerpt: 'Explore the latest web design trends that are proven to increase conversions and improve user experience.',
    category: 'Web Design',
    author: {
      name: 'Michael Torres',
      avatar: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Wed 10 Jul',
    readTime: '5 mins',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '4',
    slug: 'crm-automation',
    title: 'Maximizing ROI with CRM Automation',
    excerpt: 'Learn how CRM automation can transform your sales process and deliver measurable ROI for your business.',
    category: 'CRM & Tools',
    author: {
      name: 'Jennifer Park',
      avatar: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Mon 8 Jul',
    readTime: '7 mins',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '5',
    slug: 'social-media-growth',
    title: 'Social Media Growth Strategies for 2025',
    excerpt: 'Discover the proven strategies that are driving social media growth in 2025 and beyond.',
    category: 'Social Media',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Fri 5 Jul',
    readTime: '5 mins',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '6',
    slug: 'content-marketing',
    title: 'Building a Content Marketing Strategy That Works',
    excerpt: 'A comprehensive guide to creating and executing a content marketing strategy that delivers results.',
    category: 'Content Marketing',
    author: {
      name: 'Emma Davis',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Thu 4 Jul',
    readTime: '8 mins',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '7',
    slug: 'ppc-campaigns',
    title: 'PPC Campaign Optimization: Getting More From Your Budget',
    excerpt: 'Learn advanced PPC optimization techniques that maximize ROI and reduce wasted ad spend.',
    category: 'PPC & Ads',
    author: {
      name: 'David Chen',
      avatar: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Tue 2 Jul',
    readTime: '6 mins',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  },
  {
    id: '8',
    slug: 'email-marketing',
    title: 'Email Marketing Best Practices for 2025',
    excerpt: 'Email isn\'t dead—it\'s evolved. Discover the best practices that are driving engagement in 2025.',
    category: 'Email Marketing',
    author: {
      name: 'Lisa Anderson',
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    date: 'Sun 30 Jun',
    readTime: '7 mins',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
  }
];

// Helper function to get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}

// Helper function to get all blog slugs
export function getAllBlogSlugs(): string[] {
  return Object.keys(blogPosts);
}

// Helper function to get related posts (exclude current post)
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  return Object.values(blogPosts)
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit);
}
