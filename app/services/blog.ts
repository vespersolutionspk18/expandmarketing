import { BlogPost } from '@/app/blog/components/BlogCard';

// Mock blog posts data - Replace with actual API/CMS integration
export async function getBlogPosts(): Promise<BlogPost[]> {
  return [
    {
      id: '1',
      slug: 'future-of-seo-2025',
      title: 'The Future of SEO: What to Expect in 2025',
      excerpt: 'Discover the emerging trends and technologies that will shape search engine optimization in the coming year.',
      category: 'SEO',
      author: {
        name: 'Alex Hickson',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-15',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop',
      featured: true,
    },
    {
      id: '2',
      slug: 'content-marketing-strategies',
      title: 'Content Marketing Strategies That Drive Results',
      category: 'Content',
      author: {
        name: 'Alice Buttery',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-12',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '3',
      slug: 'social-media-trends-2025',
      title: 'Top Social Media Trends to Watch in 2025',
      category: 'Social',
      author: {
        name: 'Amy Jones',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-10',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '4',
      slug: 'data-driven-marketing',
      title: 'How Data-Driven Marketing Transforms Business',
      category: 'Data',
      author: {
        name: 'Chris Gould',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-08',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '5',
      slug: 'creative-campaigns-that-work',
      title: 'Creative Campaigns That Actually Convert',
      category: 'Creative',
      author: {
        name: 'Charlotte Borwell',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-05',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '6',
      slug: 'client-success-stories',
      title: 'Client Success Stories: Real Results from Real Campaigns',
      excerpt: 'Explore how our strategic approach helped clients achieve remarkable growth and ROI.',
      category: 'Client Services',
      author: {
        name: 'Dave Bennett',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-03',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '7',
      slug: 'team-culture-matters',
      title: 'Why Team Culture Matters in Digital Marketing',
      category: 'People',
      author: {
        name: 'Ella Bradley',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-09-01',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '8',
      slug: 'seo-audit-checklist',
      title: 'The Ultimate SEO Audit Checklist for 2025',
      excerpt: 'A comprehensive guide to auditing your website and improving search performance.',
      category: 'SEO',
      author: {
        name: 'Emily Pinch',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-28',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '9',
      slug: 'latest-company-news',
      title: 'Company Update: New Office, New Opportunities',
      category: 'News',
      author: {
        name: 'Carrie Rose',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-25',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '10',
      slug: 'content-creation-tips',
      title: '10 Essential Content Creation Tips for Marketers',
      category: 'Content',
      author: {
        name: 'Alex Hickson',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-22',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '11',
      slug: 'instagram-marketing-guide',
      title: 'Instagram Marketing: A Complete Guide',
      category: 'Social',
      author: {
        name: 'Alice Buttery',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-20',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '12',
      slug: 'analytics-dashboard-setup',
      title: 'Setting Up Your Marketing Analytics Dashboard',
      excerpt: 'Learn how to build a comprehensive analytics dashboard that tracks all your key metrics.',
      category: 'Data',
      author: {
        name: 'Amy Jones',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-18',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '13',
      slug: 'brand-identity-design',
      title: 'Creating a Strong Brand Identity in 2025',
      category: 'Creative',
      author: {
        name: 'Chris Gould',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-15',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '14',
      slug: 'customer-retention-strategies',
      title: 'Proven Customer Retention Strategies',
      category: 'Client Services',
      author: {
        name: 'Charlotte Borwell',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-12',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '15',
      slug: 'hiring-marketing-talent',
      title: 'How to Hire Top Marketing Talent',
      category: 'People',
      author: {
        name: 'Dave Bennett',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-10',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '16',
      slug: 'local-seo-guide',
      title: 'The Complete Local SEO Guide for Small Businesses',
      excerpt: 'Everything you need to know about optimizing your business for local search.',
      category: 'SEO',
      author: {
        name: 'Ella Bradley',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-08',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
    {
      id: '17',
      slug: 'industry-news-roundup',
      title: 'Marketing Industry News Roundup: August 2025',
      category: 'News',
      author: {
        name: 'Emily Pinch',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
      },
      date: '2025-08-05',
      readTime: '5 mins',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80&fit=crop'
    },
  ];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}
