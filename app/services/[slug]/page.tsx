import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceStats from '@/app/components/services/ServiceStats';
import ServiceContent from '@/app/components/services/ServiceContent';
import ServiceCards from '@/app/components/services/ServiceCards';
import LeftRight from '@/app/components/LeftRight';
import Footer from '@/app/components/Footer';
import LeadChange from '@/app/components/LeadChange';
import RecommendedByLeaders from '@/app/components/services/RecommendedByLeaders';
import FAQ from '@/app/components/services/FAQ';
import Blogs from '@/app/home/Blogs';
import ExpandReady from '@/app/components/ExpandReady';
import { getServiceBySlug, getAllServiceSlugs, Service } from '@/app/data/services';

// Generate static params for all services
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Expand Marketing',
    };
  }

  return {
    title: `${service.title} | Expand Marketing`,
    description: service.description,
  };
}

// Service-specific content generator
function getServiceContent(service: Service) {
  const category = service.category;

  // Category-specific stats
  const stats = category === 'Marketing'
    ? [
        { value: '250', suffix: '%', label: 'Average ROI increase' },
        { value: '180', suffix: '+', label: 'Brands grown' },
        { value: '4.8', suffix: '/5', label: 'Client satisfaction' },
      ]
    : category === 'Website & SEO'
    ? [
        { value: '175', suffix: '%', label: 'Traffic growth average' },
        { value: '85', suffix: '%', label: 'Conversion rate lift' },
        { value: '200', suffix: '+', label: 'Sites optimized' },
      ]
    : category === 'CRM & Sales Automation'
    ? [
        { value: '320', suffix: '%', label: 'Lead conversion boost' },
        { value: '60', suffix: '%', label: 'Time saved weekly' },
        { value: '95', suffix: '%', label: 'Automation accuracy' },
      ]
    : [
        { value: '400', suffix: '%', label: 'Efficiency increase' },
        { value: '24/7', suffix: '', label: 'AI availability' },
        { value: '88', suffix: '%', label: 'Cost reduction' },
      ];

  // Comprehensive service cards with unique images
  const serviceCards = service.slug === 'strategy-growth' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Discovery & Strategy'}`,
      description: 'We start by figuring out where your business stands today and what\'s stopping you from growing. This means looking at your current rankings, analyzing what your competitors are doing, and identifying the opportunities you\'re missing. The result is a clear plan that shows exactly what needs to happen to get you more visibility and more customers.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Execution & Implementation'}`,
      description: 'Good strategy requires understanding your market. We research what your customers are actually searching for, which keywords drive sales (not just traffic), and where your biggest opportunities are. This isn\'t guesswork. We use data to find the gaps between what customers want and what your competitors are offering.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Optimization & Growth'}`,
      description: 'You get a step-by-step plan that shows what happens when. First month, we fix technical issues and build foundations. Months two and three, we target quick wins. After that, we go after bigger opportunities. Everything is prioritized by impact, so you\'re working on what matters most first.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'social-media-marketing' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Content Creation'}`,
      description: 'Creating posts, graphics, videos, and stories for your social channels. We develop content calendars, write copy, design visuals, and produce video content that fits each platform\'s format and your brand guidelines.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Community Management'}`,
      description: 'Daily management of your social accounts including responding to comments and messages, monitoring mentions, handling customer service inquiries, and keeping your community active and engaged with timely responses.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Paid Social'}`,
      description: 'Building and managing advertising campaigns on Facebook, Instagram, LinkedIn, and TikTok. We handle audience targeting, ad creative, budget allocation, campaign optimization, and performance reporting to maximize your return on ad spend.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'content-marketing' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Content Strategy'}`,
      description: 'Planning what to write, when to publish, and how each piece fits into your bigger goals. We map out topics, create editorial calendars, and make sure your content actually supports your business objectives.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Blog Writing'}`,
      description: 'The actual writing. Well-researched, clearly written blog posts and articles that people want to read and Google wants to rank. Each piece is optimized for search without sacrificing readability.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Thought Leadership'}`,
      description: 'In-depth articles, whitepapers, and long-form content that demonstrate your expertise. The kind of pieces that get shared, referenced, and actually make people take you seriously in your industry.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'email-marketing' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Email Campaigns'}`,
      description: 'One-time promotional emails, weekly newsletters, product launches, seasonal campaigns. We write the copy, design the layout, and schedule the sends.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Automation Flows'}`,
      description: 'Automated email sequences that trigger based on actions. Welcome series for new subscribers, abandoned cart recovery, post-purchase follow-ups, win-back campaigns for inactive contacts.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'List Growth'}`,
      description: 'Strategies to grow your subscriber list through website popups, lead magnets, landing pages, and list cleaning to remove inactive or invalid emails.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'paid-advertising' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Google Ads'}`,
      description: 'Search and display campaigns targeting people looking for your products or services. We handle keyword research, ad creation, bid management, and monthly performance reviews.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Meta Ads'}`,
      description: 'Facebook and Instagram ad campaigns with audience targeting based on demographics, interests, and behaviors. We create ad creative, test different formats, and track conversions through your website or landing pages.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'ROI Optimization'}`,
      description: 'Monthly reporting on cost per click, cost per conversion, and return on ad spend. We identify which campaigns perform best and reallocate budget to improve overall results.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'digital-pr' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Media Relations'}`,
      description: 'We pitch your stories to journalists and editors at publications your target customers read. Every placement brings new eyes to your business and proves you belong in the conversation.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Link Building'}`,
      description: 'Each media feature includes a link back to your website from a trusted source. These links improve your search rankings and send qualified traffic that converts better than cold visitors.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Brand Authority'}`,
      description: 'When third parties write about you, it carries weight that your own marketing never can. We position you as the expert sources turn to, which changes how potential customers see you.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'video-marketing' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Video Production'}`,
      description: 'We script, film, and edit videos for your business. This includes product demos, customer testimonials, explainer videos, tutorials, and social content. You get finished videos ready to publish, without managing freelancers or learning editing software yourself.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Platform Optimization'}`,
      description: 'Each video gets formatted and optimized for where it will be posted. That means writing SEO-friendly titles and descriptions, designing clickable thumbnails, adding captions, and adjusting aspect ratios and length for YouTube, TikTok, Instagram, or LinkedIn.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Content Repurposing'}`,
      description: 'We turn one long video into multiple assets. A 10-minute YouTube video becomes five 30-second social clips, each focused on a specific point. This gives you more content to post without constantly producing new videos from scratch.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'brand-strategy' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Brand Positioning & Messaging'}`,
      description: 'We define your market position and create the core messages you\'ll use everywhere. This includes positioning statements, value propositions for different audiences, and key messages organized by topic. You\'ll know exactly what makes you different and how to articulate it.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Voice & Tone Guidelines'}`,
      description: 'We document how your brand sounds across all communications. This covers vocabulary, sentence structure, formality, and tone variations for different contexts. Your team will have clear examples and rules for writing anything from website copy to customer emails.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Audience Research & Personas'}`,
      description: 'We research your target customers and create detailed personas that inform all marketing decisions. Each persona includes demographics, behaviors, pain points, goals, and the specific language they use. You\'ll understand who you\'re talking to and how to reach them.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'web-development' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Frontend Development'}`,
      description: 'We build user interfaces using HTML, CSS, and JavaScript frameworks like React. This includes navigation systems, forms, animations, and all the interactive elements visitors click and scroll through. Everything is coded to be accessible and work consistently across different browsers.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Backend Systems'}`,
      description: 'We set up servers, databases, and APIs that power your site behind the scenes. This includes user authentication, data storage, form processing, and any logic that handles information. We write secure code that protects your data and scales as your traffic grows.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'CMS Integration'}`,
      description: 'We implement content management systems that let you edit text, upload images, and publish new pages without writing code. Whether you need WordPress, Shopify, or a custom solution, we configure it to match your workflow and train your team to use it confidently.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'technical-seo' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Site Speed and Core Web Vitals Optimization'}`,
      description: 'We analyze your page load times and fix the issues slowing your site down. This includes image compression, code minification, caching configuration, and server optimization. You\'ll get specific improvements to Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift scores.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Crawl Management and Indexing'}`,
      description: 'We fix broken links, resolve crawl errors, and configure your XML sitemaps and robots.txt files. Our team identifies pages blocked from indexing, resolves duplicate content through canonical tags, and ensures search engines can access your important content. We also manage 301 redirects when you change URLs or restructure your site.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Structured Data and Schema Implementation'}`,
      description: 'We add schema markup to your pages so they appear with enhanced features in search results, like star ratings, pricing, FAQs, and breadcrumbs. This involves implementing JSON-LD code for products, articles, local businesses, events, and other content types. Proper structured data helps search engines understand your content and can improve click-through rates.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'on-page-seo' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Keyword Research and Targeting'}`,
      description: 'We identify the specific search terms your audience uses and assign target keywords to each page. This includes primary keywords, supporting phrases, and long-tail variations that match different stages of the buyer journey. Every page gets optimized for terms it can realistically rank for.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Meta Elements and Structure'}`,
      description: 'We rewrite title tags, meta descriptions, and header tags to include target keywords while maintaining readability. URLs are optimized to be clean and descriptive. The content hierarchy is restructured so search engines can easily identify what each page is about and how information is organized.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Content and Link Optimization'}`,
      description: 'We refine on-page content to improve keyword placement, readability, and depth without sacrificing quality. Internal links are added to connect related pages and guide users through your site. Image alt text is optimized to describe visuals accurately while supporting target keywords where relevant.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'local-seo' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Google Business Profile Management'}`,
      description: 'We optimize every element of your Google Business Profile including categories, descriptions, photos, hours, and attributes. We also monitor for unauthorized edits, respond to questions, and post regular updates. This is what makes you appear in Google Maps and the local pack results.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Citation Building and NAP Consistency'}`,
      description: 'We create and verify your business listings across 40+ directories and platforms, ensuring your name, address, and phone number are identical everywhere. We also audit existing citations to find and fix inconsistencies that confuse search engines and customers. Consistent citations build trust with Google and improve local rankings.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Review Generation and Management'}`,
      description: 'We implement systems to collect reviews from happy customers and help you respond to all feedback professionally. We also add review schema to your website so star ratings appear in search results. More reviews improve both your visibility and the likelihood that people choose your business over competitors.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'ecommerce-development' ? [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Store Setup and Configuration'}`,
      description: 'We install your e-commerce platform, configure payment gateways and shipping options, and set up your product catalog with categories, filters, and search. This includes SSL certificates, tax settings, and email notifications for orders and shipping updates.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Shopping Cart and Checkout'}`,
      description: 'We build checkout flows that minimize cart abandonment through clear pricing, visible shipping costs, and simple form fields. Includes guest checkout options, saved cart functionality, and abandoned cart recovery tools that remind customers to complete their purchase.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Order and Inventory Management'}`,
      description: 'We set up backend systems for processing orders, tracking inventory levels, and managing customer data. You get dashboards for fulfillment, automatic low-stock alerts, and reports on sales, popular products, and customer behavior.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'seo-audits' ? [
    {
      id: 1,
      title: '200+ Factors Analyzed Across Every Ranking Signal',
      description: 'We examine your site using the same tools Google uses to evaluate websites: crawl simulators, Core Web Vitals reports, structured data validators, and backlink databases. Every technical error, content gap, and ranking opportunity gets documented with screenshots and data. You see exactly what search engines see when they evaluate your site, including issues that typical website owners never discover.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Prioritized Roadmap, Not Just a List of Problems',
      description: 'Most audits dump 100+ issues on you without context. We assign each finding an impact score (how much it affects rankings) and effort score (time to implement), then sort recommendations by priority. Critical blockers get flagged for immediate action. Quick wins that boost rankings fast come next. Long-term projects get sequenced by expected traffic gain. You know exactly where to focus your time and budget.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Implementation Guidance and 30 Days of Support',
      description: 'The audit includes a walkthrough call where we explain findings, answer questions, and help you understand technical recommendations. You get 30 days of email support after delivery for clarification on any issue in the report. If you need help implementing fixes, we can discuss ongoing services or refer specialists. The goal is making sure you actually use the audit, not just file it away.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'conversion-optimization' ? [
    {
      id: 1,
      title: 'Data Decides, Not Opinions',
      description: 'We don\'t optimize based on what we think looks good or what worked for someone else. Every change starts with a hypothesis, gets tested against your actual traffic, and only goes live if the data proves it works. You get a testing roadmap that shows what we\'re testing, why we\'re testing it, and what we expect to learn. No guesswork, no assumptions.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'We Test What Actually Converts',
      description: 'Some agencies test button colors and call it optimization. We focus on the elements that move the needle: your value proposition, headline clarity, form friction, trust signals, and call-to-action strength. You\'ll see exactly what we\'re changing, from simplifying a five-field form to rewriting a confusing headline. Each test targets a specific conversion barrier we\'ve identified in your funnel.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Continuous Improvement, Not Quick Fixes',
      description: 'Conversion optimization isn\'t a one-and-done project. We run ongoing tests, analyze results, implement winners, and move to the next opportunity. You get monthly reports showing what we tested, what won, what lost, and what\'s up next. Over time, these incremental wins stack up. The site that converts at 2% today could hit 4% or 5% in six months with consistent testing and optimization.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'website-maintenance' ? [
    {
      id: 1,
      title: 'Security Updates and Patch Management',
      description: 'Hackers scan for websites running outdated software with known vulnerabilities. We update your CMS, plugins, themes, and server software to close these security holes before they can be exploited. When critical security patches are released, we apply them immediately rather than waiting for the next scheduled maintenance window. You get alerts about any security concerns we identify, along with our plan to address them.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Uptime Monitoring and Performance Tracking',
      description: 'We check your website\'s availability every few minutes from multiple locations. If your site goes down or response times spike, we receive instant alerts and start investigating the cause. We track page load speeds, server response times, and error rates to identify performance issues before they frustrate your visitors. Monthly reports show your uptime percentage and any incidents that occurred, along with how we resolved them.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Automated Backups and Recovery Planning',
      description: 'Your website gets backed up daily, with copies stored in multiple secure locations separate from your hosting server. We test backup integrity regularly to ensure files can actually be restored when needed. If something catastrophic happens, whether a hack, server failure, or human error, we can restore your site to a working state within hours instead of days. You have access to backup files whenever you need them for your own purposes.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'crm-implementation' ? [
    {
      id: 1,
      title: 'Configured For Your Sales Process',
      description: 'We don\'t use generic templates. Before setting up anything, we document how your team actually sells, what information they need at each stage, and what roadblocks slow them down. Then we configure the CRM to support that specific workflow. Custom fields capture the details that matter to your business. Pipeline stages match your real sales steps, not textbook examples.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Clean Data Migration',
      description: 'Moving customer data from spreadsheets, old systems, or multiple databases is messy. We clean your data before importing it, removing duplicates, standardizing formats, and filling in missing information where possible. You get a single source of truth instead of conflicting records. We verify everything imported correctly and test that relationships between contacts, companies, and deals are intact.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Training That Sticks',
      description: 'We train your team on the CRM you actually built, not generic features they\'ll never use. Sessions focus on daily tasks like logging calls, updating deal stages, and running the reports they need. We create simple reference guides showing exactly how to complete common actions. After launch, we hold follow-up sessions to answer questions and adjust anything that\'s not working smoothly.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'marketing-automation' ? [
    {
      id: 1,
      title: 'Custom Workflow Design',
      description: 'We map your customer journey and build workflows for each stage. That means different sequences for cold leads versus warm prospects, branches for different interests or industries, and personalized paths based on how people engage. You get automation designed around how your customers actually buy, not generic drip campaigns.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Behavioral Triggers and Segmentation',
      description: 'Your automation responds to what people do, not just when you schedule it. Someone clicks a pricing link, they enter a sales sequence. They download three resources, they get flagged as high-intent. They go quiet for 30 days, they enter re-engagement. Actions determine the message, so people get relevant content when they\'re most interested.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Performance Monitoring and Optimization',
      description: 'We track open rates, click rates, and conversion rates for every workflow. When a sequence underperforms, we test different subject lines, adjust timing, or revise the message. You get monthly reports showing which workflows drive results and where contacts drop off, plus recommendations for improvement based on actual data.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'sales-funnel-automation' ? [
    {
      id: 1,
      title: 'Automatic Lead Scoring Based on Real Behavior',
      description: 'Every action a lead takes gets scored. Website visits, email clicks, form submissions, and demo requests all add points. When someone crosses your threshold, they\'re marked as sales-qualified and moved to the next stage. You decide what actions matter most for your business, and the system tracks everything automatically. No more guessing who\'s interested.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Sales Gets Notified When Prospects Are Hot',
      description: 'Your sales team receives alerts only when leads hit qualification criteria. Someone requests a demo, scores above 75 points, and visits your pricing page twice in one week? Sales gets an instant notification with the lead\'s complete history. The system tells them exactly why this person is ready and what they\'ve been looking at. Your team reaches out at peak interest instead of too early or too late.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Leads Move Through Pipeline Stages Automatically',
      description: 'Pipeline stages update based on behavior and engagement without manual intervention. A lead starts in "Awareness," moves to "Consideration" after downloading three resources, then jumps to "Decision" when they request pricing. Your CRM always shows current status, and you can see exactly where every prospect sits in the funnel. Sales knows who needs nurturing and who needs a phone call right now.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'lead-generation-systems' ? [
    {
      id: 1,
      title: 'Multi-Channel Capture in One System',
      description: 'Website forms, landing pages, chatbots, and social media inquiries all feed into one centralized system. You see every lead in one place regardless of where they came from. No more checking five different inboxes or wondering if someone fell through the cracks. Every channel is tracked, and every source is tagged so you know what\'s working.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Automatic Qualification and Routing',
      description: 'Leads answer qualification questions when they first reach out, and the system routes them based on your criteria. Location, budget, service interest, and company size determine who gets notified. Sales reps only see qualified prospects that match their territory or expertise. Low-fit inquiries go into nurture campaigns instead of taking up sales time.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Instant Follow-Up on Every Inquiry',
      description: 'Every lead gets an immediate automated response confirming you received their information and explaining next steps. The assigned person gets notified right away with all the context they need to follow up. No leads sit unanswered for hours while someone checks their email. Fast response times mean more conversations and fewer lost opportunities.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'pipeline-management' ? [
    {
      id: 1,
      title: 'Pipeline Stages and Deal Tracking',
      description: 'Every opportunity gets tracked through clear stages that match how you sell. You see exactly where each deal stands, who\'s responsible, and what needs to happen next. No more digging through emails or asking "whatever happened to that lead?"',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Sales Analytics and Forecasting',
      description: 'Get real-time dashboards showing win rates, average deal size, and how long deals take to close. You can forecast revenue based on what\'s actually in your pipeline, not guesswork. Spot patterns in what\'s working and where deals get stuck.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Automated Follow-Up Reminders',
      description: 'Your team gets automatic reminders when it\'s time to reach out, so hot leads never go cold. Tasks get assigned and tracked automatically as deals move through stages. The system keeps everyone accountable without you having to micromanage.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'integration-services' ? [
    {
      id: 1,
      title: 'Platform Connections',
      description: 'We link your CRM, email platform, and marketing tools so customer data updates everywhere at once. When someone takes an action in one system, it reflects across all your tools automatically. No more manually updating contact records in three different places.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Automated Data Flow',
      description: 'Set up rules that move data between systems without anyone lifting a finger. New leads go straight from your website to your CRM to your email nurture sequence. Sales get recorded in your analytics. Everything happens in real time, not when someone remembers to update it.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Custom API Development',
      description: 'When off-the-shelf integrations don\'t exist or don\'t do what you need, we build custom connections using APIs. This works for proprietary systems, legacy software, or specific workflows unique to how your business operates.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'ai-strategy' ? [
    {
      id: 1,
      title: 'Use Case Discovery',
      description: 'We analyze your operations to find where AI actually helps, focusing on tasks that waste time or decisions that lack data. You get a prioritized list showing which opportunities deliver the most value relative to implementation effort.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Tool Selection',
      description: 'We evaluate specific AI platforms and tools against your use cases, budget, and technical setup. You get clear recommendations with honest comparisons, so you know exactly what you\'re buying and why it fits your needs.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Implementation Roadmap',
      description: 'We create a phased rollout plan showing what to implement first, what resources you need, and how to measure success. You get a practical timeline that minimizes risk and lets you prove value before scaling up.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'ai-chatbots' ? [
    {
      id: 1,
      title: '24/7 Customer Support',
      description: 'Handle common questions instantly, any time of day. The chatbot answers FAQs about pricing, features, hours, and policies so your team can focus on complex issues that need human attention.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Lead Qualification',
      description: 'Engage prospects with natural conversation that asks the right questions to understand their needs, budget, and timeline. Qualified leads reach your sales team with context, so your salespeople know exactly what each prospect is looking for.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'CRM Integration',
      description: 'Connect the chatbot to your existing systems so conversations, lead data, and support tickets flow directly into your CRM or help desk. No manual data entry, no switching between platforms, just seamless workflow.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'ai-content-tools' ? [
    {
      id: 1,
      title: 'AI Tool Setup',
      description: 'We configure AI writing tools with your brand voice, terminology, and style guidelines. You\'ll get custom prompts that generate on-brand content instead of generic outputs. Your team can start using AI immediately without a learning curve.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Content Workflows',
      description: 'We map out exactly when to use AI and when to use human writers in your production process. You\'ll get clear workflows that show who does what at each stage. This eliminates confusion and keeps content moving through your pipeline efficiently.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Quality Control Process',
      description: 'We build review systems that catch off-brand content before it publishes. You\'ll get checklists and guidelines that ensure every piece meets your standards. Your brand voice stays consistent even as output increases.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'ai-personalization' ? [
    {
      id: 1,
      title: 'Dynamic Content',
      description: 'Your website content changes based on who\'s viewing it. Different visitors see different headlines, images, and messaging based on their industry, location, previous behavior, or where they came from. No more one-size-fits-all pages.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Smart Recommendations',
      description: 'AI analyzes browsing patterns and purchase history to suggest products people actually want. Someone who looked at running shoes sees related athletic gear. A repeat customer sees complementary products. The recommendations get smarter over time.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Behavioral Targeting',
      description: 'We segment visitors based on what they do on your site, then show each group what\'s most relevant. High-intent visitors see conversion-focused content. Browsers see educational material. Returning customers see loyalty offers. Everyone gets what makes sense for where they are.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'predictive-analytics' ? [
    {
      id: 1,
      title: 'Customer Behavior Prediction',
      description: 'We build models that score every customer for churn risk, predict lifetime value, and calculate purchase likelihood. You see which customers need attention before they leave, which prospects are worth pursuing, and where to focus retention efforts. These scores update continuously as new data comes in, so you\'re always working with current predictions.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Sales and Revenue Forecasting',
      description: 'Our forecasting models predict revenue, demand, and sales volume across different time horizons from weeks to quarters. You get breakdowns by product line, geography, and customer segment with confidence ranges that show the probable highs and lows. This lets you plan inventory, budget accurately, and set realistic targets based on what the data actually supports.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Market Trend Analysis',
      description: 'We analyze your market data to detect emerging trends and pattern shifts before they become obvious. The models flag changes in customer preferences, competitive dynamics, and demand patterns early enough for you to adjust strategy. You get regular reports highlighting which trends are strengthening, which are fading, and what that means for your planning.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : service.slug === 'custom-ai-solutions' ? [
    {
      id: 1,
      title: 'Custom Model Development',
      description: 'We train machine learning models on your specific data and challenges. Whether you need computer vision for quality control, natural language processing for document analysis, or predictive models for forecasting, we build and train the algorithms from scratch. Your model learns from your examples and gets better at solving your particular problem, not generic use cases.',
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: 'Specialized Automation',
      description: 'We create AI-powered automations designed around your exact workflow. Your processes stay the same while AI handles the repetitive work, from data extraction to decision routing to report generation. We map your current steps, identify what can be automated, then build the system that executes it. No forcing your team to learn new platforms or change how they work.',
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: 'Proprietary System Integration',
      description: 'We connect AI directly to your existing software, databases, and tools. Your custom AI solution pulls data from your CRM, updates your ERP, integrates with your proprietary systems, and works within your tech stack. We handle the API development, data pipelines, and security protocols so everything communicates seamlessly without exposing sensitive information or requiring platform migrations.',
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ] : [
    {
      id: 1,
      title: `🎯 ${service.tags[0]?.label || 'Discovery & Strategy'}`,
      description: `We kick things off by understanding where you are and where you want to be. Through in-depth analysis, competitive research, and stakeholder interviews, we map out your ${service.title.toLowerCase()} strategy. No fluff, no cookie-cutter templates—just a clear roadmap built specifically for your business goals and market position.`,
      image: service.images.thumbnail,
      imageAlt: service.tags[0]?.label,
    },
    {
      id: 2,
      title: `🚀 ${service.tags[1]?.label || 'Execution & Implementation'}`,
      description: `Strategy is nothing without execution. Our team rolls up their sleeves and gets to work implementing your ${service.title.toLowerCase()} plan. We handle everything from initial setup to ongoing optimization, ensuring every tactic aligns with your goals. You get regular updates, transparent reporting, and a team that actually gives a damn about your success.`,
      image: service.images.card,
      imageAlt: service.tags[1]?.label,
    },
    {
      id: 3,
      title: `📊 ${service.tags[2]?.label || 'Optimization & Growth'}`,
      description: `The real magic happens in the refinement. We continuously test, measure, and optimize every element of your ${service.title.toLowerCase()} campaigns. Data drives our decisions, results fuel our strategies, and your growth becomes our obsession. We don't just meet targets—we exceed them, then raise the bar higher.`,
      image: service.images.desktop,
      imageAlt: service.tags[2]?.label,
    },
  ];

  // Detailed content paragraphs
  const contentParagraphs = [
    `${service.description} We've spent years perfecting our approach to ${service.title.toLowerCase()}, working with businesses from scrappy startups to enterprise giants. What we've learned? Cookie-cutter solutions don't work. Every business is different, every market has unique challenges, and success requires a custom approach backed by proven strategies.`,

    `That's exactly what you get with Expand Marketing. We combine deep industry expertise with hands-on execution, strategic thinking with tactical implementation. Our team doesn't just tell you what to do—we do it with you, alongside you, as your partner in growth. We eat, sleep, and breathe ${service.title.toLowerCase()}, staying ahead of trends, testing new tactics, and constantly pushing for better results.`,

    `Whether you're looking to break into new markets, scale what's working, or completely transform your ${service.title.toLowerCase()} approach, we've got you covered. We bring the strategy, the execution, the tools, and the expertise. You bring the vision and ambition. Together, we make great things happen.`,

    `Real results, real growth, real partnership. That's what ${service.title} with Expand Marketing looks like. No BS, no fluff, no empty promises. Just a team of experts committed to making your business grow. Ready to see what's possible?`,
  ];

  // Service-specific approach checklist
  const approachChecklist = service.slug === 'strategy-growth' ? [
    { text: '✓ Complete audit of your website, rankings, and competitors' },
    { text: '✓ Research into customer search behavior and market opportunities' },
    { text: '✓ Prioritized roadmap with specific tasks and timelines' },
    { text: '✓ Monthly reporting with actual rankings, traffic, and conversion data' },
    { text: '✓ Direct access to the strategist managing your account' },
    { text: '✓ Regular plan updates based on what\'s actually working' },
    { text: '✓ Clear documentation of every change we make and why' },
  ] : service.slug === 'social-media-marketing' ? [
    { text: '✓ Strategy built around your specific business goals' },
    { text: '✓ Content created for your audience and platforms' },
    { text: '✓ Community management to engage your followers' },
    { text: '✓ Paid campaigns to reach new customers' },
    { text: '✓ Weekly performance reviews and adjustments' },
    { text: '✓ Real-time dashboard access to all your metrics' },
    { text: '✓ Direct contact with your account team' },
  ] : service.slug === 'content-marketing' ? [
    { text: 'Keyword research and content gap analysis before writing begins' },
    { text: 'SEO-optimized blog posts, landing pages, and website copy' },
    { text: 'Editorial calendar with consistent publishing schedule' },
    { text: 'Multiple rounds of editing for clarity, accuracy, and SEO' },
    { text: 'Performance tracking with monthly reports on traffic and rankings' },
    { text: 'Content updates and refreshes for posts losing visibility' },
    { text: 'Coordination with your team on messaging and timing' },
  ] : service.slug === 'email-marketing' ? [
    { text: 'Platform setup and domain authentication' },
    { text: 'List segmentation and contact management' },
    { text: 'Email copywriting and template design' },
    { text: 'Automation workflows (welcome, cart abandonment, re-engagement)' },
    { text: 'A/B testing (subject lines, send times, content)' },
    { text: 'Deliverability monitoring and list hygiene' },
    { text: 'Monthly performance reporting and optimization' },
  ] : service.slug === 'paid-advertising' ? [
    { text: 'Campaign structure and tracking setup' },
    { text: 'Audience research and segmentation' },
    { text: 'Ad copywriting and creative development' },
    { text: 'Budget allocation and bid management' },
    { text: 'A/B testing of audiences and creatives' },
    { text: 'Performance monitoring and optimization' },
    { text: 'Monthly reporting and strategy calls' },
  ] : service.slug === 'digital-pr' ? [
    { text: 'Identify newsworthy angles and stories from your business' },
    { text: 'Research journalists and outlets covering your industry' },
    { text: 'Create press releases, data, quotes, and supporting materials' },
    { text: 'Pitch stories to targeted journalists with personalized outreach' },
    { text: 'Secure placements in relevant publications and track coverage' },
    { text: 'Build and maintain relationships with key media contacts' },
    { text: 'Analyze coverage impact and refine story angles based on results' },
  ] : service.slug === 'video-marketing' ? [
    { text: '✓ Video strategy and content calendar based on your business goals' },
    { text: '✓ Full production services including scripting, filming, and editing' },
    { text: '✓ Platform optimization for YouTube, Instagram, LinkedIn, TikTok, and website' },
    { text: '✓ Multiple format variations from each video shoot (vertical, square, widescreen)' },
    { text: '✓ Performance tracking with view rates, engagement, and conversion metrics' },
    { text: '✓ A/B testing of thumbnails, titles, and descriptions to improve results' },
    { text: '✓ Monthly performance reports with recommendations for future content' },
  ] : service.slug === 'brand-strategy' ? [
    { text: '✓ Competitive landscape analysis with positioning gaps identified' },
    { text: '✓ Stakeholder interviews and collaborative brand workshops' },
    { text: '✓ Core positioning statement and value proposition development' },
    { text: '✓ Complete messaging framework for different audiences and contexts' },
    { text: '✓ Brand voice and tone guide with before/after writing examples' },
    { text: '✓ Customer personas based on research and real data' },
    { text: '✓ Brand guidelines document with implementation support' },
  ] : service.slug === 'web-development' ? [
    { text: '✓ Custom responsive development that works on all screen sizes and devices' },
    { text: '✓ CMS integration and training so your team can update content without developer help' },
    { text: '✓ Database setup and API connections for dynamic functionality' },
    { text: '✓ Cross-browser and device testing to catch bugs before launch' },
    { text: '✓ Page speed optimization and performance tuning' },
    { text: '✓ Security implementation including SSL certificates and protection measures' },
    { text: '✓ 30-day post-launch support for bug fixes and technical questions' },
  ] : service.slug === 'technical-seo' ? [
    { text: '✓ Complete technical SEO audit with prioritized fix list' },
    { text: '✓ Site speed optimization (Core Web Vitals, page load times)' },
    { text: '✓ Mobile usability fixes and responsive design issues' },
    { text: '✓ Schema markup implementation for relevant page types' },
    { text: '✓ XML sitemap creation and maintenance' },
    { text: '✓ Crawl error resolution and redirect management' },
    { text: '✓ Monthly technical health monitoring and reporting' },
  ] : service.slug === 'on-page-seo' ? [
    { text: '✓ Keyword research mapped to specific pages and search intent' },
    { text: '✓ Optimized title tags and meta descriptions written for clicks and rankings' },
    { text: '✓ Header restructuring (H1, H2, H3) to target primary and secondary keywords' },
    { text: '✓ Content edits for better keyword placement and readability' },
    { text: '✓ Internal linking strategy to distribute authority across your site' },
    { text: '✓ Image optimization including file names, alt text, and compression' },
    { text: '✓ Monthly ranking reports with performance tracking and recommendations' },
  ] : service.slug === 'local-seo' ? [
    { text: '✓ Complete audit of your Google Business Profile and existing citations across the web' },
    { text: '✓ Optimization of your Google Business Profile with correct categories, hours, and service areas' },
    { text: '✓ Building 50+ citations on relevant local directories and industry-specific sites' },
    { text: '✓ Citation cleanup to fix inconsistent business information across existing listings' },
    { text: '✓ Review generation strategy with follow-up sequences for customers' },
    { text: '✓ Local keyword optimization on key website pages and service area content' },
    { text: '✓ Monthly tracking of local pack rankings and Google Business Profile performance' },
  ] : service.slug === 'ecommerce-development' ? [
    { text: '✓ Platform selection and technical setup' },
    { text: '✓ Product catalog migration and organization' },
    { text: '✓ Payment gateway integration and testing' },
    { text: '✓ Shipping provider configuration' },
    { text: '✓ Checkout flow optimization' },
    { text: '✓ Security and compliance implementation' },
    { text: '✓ Post-launch monitoring and support' },
  ] : service.slug === 'seo-audits' ? [
    { text: '✓ Complete technical SEO audit covering crawlability, indexation, site speed, mobile usability, and structured data' },
    { text: '✓ On-page optimization analysis including title tags, meta descriptions, header structure, internal linking, and content quality' },
    { text: '✓ Backlink profile review identifying toxic links, link gaps, and opportunities for improvement' },
    { text: '✓ Competitor benchmarking against your top 3-5 competitors to reveal keyword and content gaps' },
    { text: '✓ Prioritized action plan with every recommendation scored by impact and implementation difficulty' },
    { text: '✓ 60-minute walkthrough call to explain findings, answer questions, and discuss implementation' },
    { text: '✓ 30 days of email support for implementation questions and clarifications' },
  ] : service.slug === 'conversion-optimization' ? [
    { text: '✓ Complete analytics and conversion funnel audit' },
    { text: '✓ Heat mapping and session recording analysis' },
    { text: '✓ Test hypothesis development based on data findings' },
    { text: '✓ A/B test creation and implementation' },
    { text: '✓ Landing page and form optimization testing' },
    { text: '✓ Statistical analysis and winner validation' },
    { text: '✓ Monthly performance reports with lift metrics' },
  ] : service.slug === 'website-maintenance' ? [
    { text: '✓ Weekly software updates for your CMS, plugins, and themes tested on staging before going live' },
    { text: '✓ Daily automated backups stored in multiple locations with one-click restore' },
    { text: '✓ 24/7 uptime monitoring with instant alerts if your site goes down' },
    { text: '✓ Weekly security scans checking for malware, vulnerabilities, and suspicious activity' },
    { text: '✓ Bug fixes and technical issues resolved as they come up' },
    { text: '✓ Performance monitoring tracking page load speeds and server response times' },
    { text: '✓ Monthly maintenance reports showing updates completed, uptime stats, and security status' },
  ] : service.slug === 'crm-implementation' ? [
    { text: '✓ Discovery sessions to document your current process and requirements' },
    { text: '✓ Custom fields, properties, and data structure tailored to your business' },
    { text: '✓ Sales pipeline and deal stage configuration' },
    { text: '✓ Data migration from spreadsheets, old CRMs, or other systems' },
    { text: '✓ Integration setup with email, calendar, marketing tools, and other platforms' },
    { text: '✓ Team training sessions with hands-on walkthroughs' },
    { text: '✓ Documentation and video guides for ongoing reference' },
  ] : service.slug === 'marketing-automation' ? [
    { text: '✓ Customer journey mapping that identifies touchpoints and automation opportunities' },
    { text: '✓ Workflow design for lead nurturing, onboarding, and re-engagement sequences' },
    { text: '✓ Email copywriting for every message in your automated sequences' },
    { text: '✓ Behavioral trigger setup based on website actions, email engagement, and form submissions' },
    { text: '✓ Audience segmentation rules that send relevant messages to the right people' },
    { text: '✓ CRM integration so automation syncs with your sales pipeline and customer data' },
    { text: '✓ Performance tracking and monthly optimization to improve results over time' },
  ] : service.slug === 'sales-funnel-automation' ? [
    { text: '✓ Custom lead scoring model based on your specific buyer behaviors' },
    { text: '✓ Automated pipeline stage progression tied to engagement levels' },
    { text: '✓ Sales notification triggers when leads hit qualification thresholds' },
    { text: '✓ Behavioral tracking integration (page visits, email clicks, content downloads)' },
    { text: '✓ CRM workflow setup connecting scoring to your sales process' },
    { text: '✓ Conversion tracking to measure which scored leads actually close' },
    { text: '✓ Monthly scoring optimization based on your actual sales results' },
  ] : service.slug === 'lead-generation-systems' ? [
    { text: '✓ Multi-channel lead capture system connected to your website, landing pages, chatbots, and social platforms' },
    { text: '✓ Automated qualification logic programmed with your specific criteria (budget, location, service interest, company size)' },
    { text: '✓ Instant automated response messages customized for different inquiry types' },
    { text: '✓ Routing rules that assign leads to the right sales rep based on territory, specialty, or priority level' },
    { text: '✓ CRM integration that centralizes all inquiries in one dashboard with full context' },
    { text: '✓ Documentation of how your system works and training for your team to manage it' },
    { text: '✓ Monthly optimization sessions to refine qualification rules and routing based on performance data' },
  ] : service.slug === 'pipeline-management' ? [
    { text: '✓ Custom pipeline stages mapped to your actual sales process' },
    { text: '✓ CRM configuration with required fields and automated workflows' },
    { text: '✓ Sales dashboard showing deal status, conversion rates, and pipeline health' },
    { text: '✓ Weekly and monthly performance reports delivered to your inbox' },
    { text: '✓ Team training sessions on using the system correctly' },
    { text: '✓ Deal tracking templates and documentation for your team' },
    { text: '✓ 90 days of monitoring and optimization after launch' },
  ] : service.slug === 'integration-services' ? [
    { text: '✓ Complete audit of your current tools and data flows' },
    { text: '✓ Integration map showing what connects to what and why' },
    { text: '✓ API connections between your CRM, email, ads, and analytics platforms' },
    { text: '✓ Data field mapping so information syncs correctly across systems' },
    { text: '✓ Testing documentation proving data flows accurately' },
    { text: '✓ System documentation explaining how your integrations work' },
    { text: '✓ Ongoing monitoring and maintenance to keep connections working' },
  ] : service.slug === 'ai-strategy' ? [
    { text: '✓ AI opportunity assessment showing where automation or intelligence can reduce costs or increase capacity' },
    { text: '✓ Documented use cases with expected time savings, cost impact, and implementation complexity' },
    { text: '✓ Tool evaluation comparing specific AI platforms and their fit for your needs' },
    { text: '✓ Prioritized implementation roadmap with timeline and resource requirements' },
    { text: '✓ Integration plan showing how AI tools connect to your existing systems' },
    { text: '✓ Pilot implementation support for your first AI deployment' },
    { text: '✓ Success metrics framework to measure actual business impact' },
  ] : service.slug === 'ai-chatbots' ? [
    { text: '✓ Custom-trained chatbot built on your products, services, and common customer questions' },
    { text: '✓ Integration with your CRM, calendar, or support system to capture leads and create tickets' },
    { text: '✓ Conversation flow design with clear handoff points to human team members' },
    { text: '✓ Testing across 100+ conversation scenarios before launch' },
    { text: '✓ Admin dashboard where you can see all conversations and update responses' },
    { text: '✓ Monthly optimization based on actual chat data and performance metrics' },
    { text: '✓ Documentation on how to train and update the bot as your business evolves' },
  ] : service.slug === 'ai-content-tools' ? [
    { text: '✓ Custom AI prompt library built for your brand voice and content types' },
    { text: '✓ Content production workflows with quality control checkpoints' },
    { text: '✓ Team training sessions on using AI tools effectively' },
    { text: '✓ Brand voice guidelines document that keeps AI outputs consistent' },
    { text: '✓ Quality scoring system to measure content against your standards' },
    { text: '✓ Monthly performance reports tracking output volume and time saved' },
    { text: '✓ Documentation of all prompts, workflows, and processes for your team' },
  ] : service.slug === 'ai-personalization' ? [
    { text: '✓ Visitor segmentation analysis identifying your most valuable audience groups and their distinct behaviors' },
    { text: '✓ Custom AI personalization models trained on your specific website data and business goals' },
    { text: '✓ Multiple content variations for key page elements (headlines, CTAs, hero sections, product recommendations)' },
    { text: '✓ Real-time personalization engine integrated with your existing website infrastructure' },
    { text: '✓ A/B testing framework to validate that personalized content outperforms generic versions' },
    { text: '✓ Performance dashboard tracking conversion lift, engagement metrics, and segment-level results' },
    { text: '✓ Monthly optimization reports with data-backed recommendations for expanding personalization' },
  ] : service.slug === 'predictive-analytics' ? [
    { text: '✓ Custom machine learning models trained on your historical data to predict the specific outcomes that matter to your business' },
    { text: '✓ Model accuracy reports showing confidence levels and the key factors driving each prediction' },
    { text: '✓ Integration with your existing platforms so predictions flow directly into your CRM, marketing automation, or business intelligence tools' },
    { text: '✓ Real-time prediction API or dashboard where your team can access forecasts on demand' },
    { text: '✓ Automated retraining pipeline that updates models as new data becomes available to maintain accuracy' },
    { text: '✓ Performance monitoring dashboard tracking prediction accuracy over time with alerts when models need attention' },
    { text: '✓ Documentation explaining what each model predicts, how it works, and how to interpret results for your team' },
  ] : service.slug === 'custom-ai-solutions' ? [
    { text: '✓ Custom AI model designed and trained specifically for your business problem' },
    { text: '✓ Complete data pipeline setup for cleaning, processing, and feeding information to your model' },
    { text: '✓ API integration that connects your AI solution to your existing software and databases' },
    { text: '✓ Testing and validation reports showing accuracy, performance metrics, and error analysis' },
    { text: '✓ User interface or dashboard for interacting with and monitoring your AI solution' },
    { text: '✓ Technical documentation covering architecture, deployment, and maintenance procedures' },
    { text: '✓ Training sessions for your team plus ongoing support for troubleshooting and model updates' },
  ] : [
    { text: `✓ Custom ${service.title.toLowerCase()} strategy built for your business` },
    { text: `✓ ${service.tags[0]?.label} - Deep research and strategic planning` },
    { text: `✓ ${service.tags[1]?.label} - Expert execution and implementation` },
    { text: `✓ ${service.tags[2]?.label} - Continuous optimization and growth` },
    { text: `✓ Transparent reporting with real-time dashboard access` },
    { text: `✓ Dedicated team of ${service.title.toLowerCase()} specialists` },
    { text: `✓ Proven processes that scale with your business` },
  ];

  // Comprehensive FAQ
  const faqItems = service.slug === 'social-media-marketing' ? [
    {
      id: 1,
      question: 'When will I start seeing results?',
      answer: 'Most clients notice improvements in engagement and reach within the first month. More substantial results like lead generation and sales typically show up around the 90-day mark. Social media takes time because you\'re building an audience and trust. We start by posting consistently, engaging with your followers, and testing what content resonates. Then we double down on what works. The longer we work together, the better the results get because we learn what your audience responds to.',
    },
    {
      id: 2,
      question: 'What makes your approach different?',
      answer: 'We actually do the work. Some agencies create a strategy document and leave you to figure out the rest. We create the content, manage your accounts, respond to comments, run your ads, and adjust based on what the data tells us. We also don\'t use templates. Your business is different from everyone else\'s, so your social media strategy should be too. We build everything around your specific goals, audience, and industry.',
    },
    {
      id: 3,
      question: 'What exactly do you do for social media marketing?',
      answer: 'We handle everything: creating posts (graphics, videos, captions), scheduling content, responding to comments and messages, running paid ads, and analyzing performance. You\'ll have a dedicated account manager who checks in regularly to review results and adjust strategy. We also provide monthly reports that show what\'s working and what isn\'t. If something needs to change, we change it.',
    },
    {
      id: 4,
      question: 'Do you work with small businesses?',
      answer: 'Yes. We work with businesses at different stages, from small local companies to larger national brands. What matters most is whether you\'re ready to invest in social media consistently. If you can commit to at least three months (because that\'s how long it takes to see real traction), we can build a plan that fits your budget and goals.',
    },
    {
      id: 5,
      question: 'How do you track if it\'s working?',
      answer: 'We track metrics tied to your specific goals. If you want more leads, we measure lead form submissions and website traffic from social. If you want sales, we track conversions and revenue. If you\'re focused on brand awareness, we look at reach, impressions, and follower growth. You get access to a dashboard where you can see these numbers anytime. We review them together every month and explain what they mean for your business.',
    },
  ] : service.slug === 'content-marketing' ? [
    {
      id: 1,
      question: 'How long does it take to see results from content marketing?',
      answer: 'New content typically takes 3 to 6 months to start ranking and driving meaningful traffic. This timeline depends on your domain authority, competition level, and how consistently you publish. Content marketing is a long-term strategy, not a quick fix. If you need faster results, we usually recommend pairing it with paid advertising while your content gains traction.',
    },
    {
      id: 2,
      question: 'How many articles should we publish per month?',
      answer: 'It depends on your goals and budget, but most businesses see good results with 4 to 8 articles per month. Publishing consistently matters more than volume. It\'s better to publish 4 high-quality, well-researched articles every month than to publish 12 mediocre ones sporadically. We\'ll recommend a frequency based on your industry competition and content goals.',
    },
    {
      id: 3,
      question: 'Do you write content for industries that require technical expertise?',
      answer: 'Yes. For technical or specialized industries, we assign writers with relevant experience or pair general writers with subject matter experts from your team. We also build detailed content briefs and do thorough research before writing. Every piece goes through a review process where you can correct technical details or request revisions before publishing.',
    },
    {
      id: 4,
      question: 'Will you write content for our existing blog or only new sites?',
      answer: 'We work with both. If you have an existing blog, we\'ll audit it first to see what\'s working and what needs improvement. Then we\'ll create a plan that includes new content, updates to older posts, and optimization improvements. If you\'re starting from scratch, we\'ll help you set up a content foundation that supports long-term growth.',
    },
    {
      id: 5,
      question: 'What\'s the difference between content marketing and copywriting?',
      answer: 'Content marketing focuses on creating valuable, informative content (like blog posts, guides, and articles) that attracts and educates potential customers over time. Copywriting is more direct and persuasive, focused on getting someone to take a specific action (like buying a product or signing up). Both are important, and we do both, but content marketing is about building trust and authority through helpful information.',
    },
  ] : service.slug === 'email-marketing' ? [
    {
      id: 1,
      question: 'How often should we send emails?',
      answer: 'It depends on your audience and what you\'re selling. Some brands can send daily (news, e-commerce deals). Others should stick to weekly or monthly. We look at your engagement data and industry benchmarks to find the right frequency. Sending too often kills your list. Sending too rarely makes people forget who you are.',
    },
    {
      id: 2,
      question: 'What\'s a good open rate for email marketing?',
      answer: 'Industry average is around 20-25%, but this varies wildly by sector, list size, and audience type. A smaller, engaged list will outperform a large, cold one every time. We focus more on click-through rates and conversions than opens because those actually drive business results.',
    },
    {
      id: 3,
      question: 'Do we need a separate email marketing platform, or can we just use our CRM?',
      answer: 'Most CRMs have basic email features, but dedicated email platforms (like Klaviyo, Mailchimp, or ActiveCampaign) offer better deliverability, automation, and reporting. If you\'re serious about email marketing, use a proper platform. If you\'re just sending occasional updates, your CRM might be fine.',
    },
    {
      id: 4,
      question: 'How do you handle unsubscribes and spam complaints?',
      answer: 'Unsubscribes are normal and healthy. We make the process easy (one-click, no guilt trips) and remove people promptly. Spam complaints are more serious because they hurt deliverability. We prevent them by only emailing people who opted in, keeping content relevant, and maintaining proper authentication. If complaints spike, we investigate and fix the root cause.',
    },
    {
      id: 5,
      question: 'Can you write emails in our brand voice?',
      answer: 'Yes. We start by reviewing your existing content (website, social media, past emails) to understand your tone. Then we write sample emails and refine based on your feedback. Some brands want formal and professional. Others want casual and funny. We match whatever works for your audience.',
    },
  ] : service.slug === 'paid-advertising' ? [
    {
      id: 1,
      question: 'How much should I spend on paid advertising?',
      answer: 'It depends on your industry, competition, and goals. We typically recommend starting with a budget that allows for meaningful testing (usually $1,500-$3,000/month minimum), then scaling once we identify what works. We\'ll give you specific recommendations based on your situation during our discovery call.',
    },
    {
      id: 2,
      question: 'How long does it take to see results from paid ads?',
      answer: 'You\'ll start seeing data within days of launching, but it usually takes 2-4 weeks to gather enough information to make smart optimization decisions. Some businesses see profitable results immediately, while others need 1-2 months of testing to find the right combination of audience, creative, and offer.',
    },
    {
      id: 3,
      question: 'What platforms do you advertise on?',
      answer: 'We work with Google Ads, Meta (Facebook and Instagram), LinkedIn, TikTok, YouTube, and other platforms depending on where your audience is. We don\'t force you onto every platform. We recommend the ones that make the most sense for your business and budget.',
    },
    {
      id: 4,
      question: 'Do you handle the ad creative or do I need to provide it?',
      answer: 'We handle ad copywriting as part of our service. For visuals, we can work with what you have, source stock imagery, or collaborate with designers and videographers if you need custom creative. We\'ll discuss what makes sense based on your brand and budget.',
    },
    {
      id: 5,
      question: 'How do you measure success for paid advertising campaigns?',
      answer: 'We track metrics that matter to your business: cost per lead, cost per acquisition, return on ad spend, conversion rate, and overall revenue generated. We set up proper conversion tracking so you can see exactly what your ad spend is producing, not just vanity metrics like impressions and clicks.',
    },
  ] : service.slug === 'digital-pr' ? [
    {
      id: 1,
      question: 'How is digital PR different from traditional PR?',
      answer: 'Digital PR focuses on getting you featured on online publications and news sites that link back to your website, which helps your search rankings. Traditional PR targets newspapers, TV, and radio without the SEO benefit. We pitch stories to online journalists and bloggers, create shareable content based on your data or expertise, and track the backlinks and traffic you earn from each placement.',
    },
    {
      id: 2,
      question: 'How long does it take to see results from a digital PR campaign?',
      answer: 'Most campaigns start generating placements within 4-8 weeks after launch. The first month involves researching angles, creating newsworthy content or data, and building journalist relationships. Some stories get picked up immediately while others take longer depending on news cycles and publication schedules.',
    },
    {
      id: 3,
      question: 'What makes a story newsworthy enough for journalists to cover?',
      answer: 'Journalists want original data, expert opinions on trending topics, or unique insights their readers haven\'t seen elsewhere. We look for angles in your business like proprietary research, industry surveys, controversial viewpoints, or timely commentary on current events. Generic company announcements rarely get coverage unless there\'s a genuine news angle.',
    },
    {
      id: 4,
      question: 'How do you measure the success of digital PR?',
      answer: 'We track the number and quality of placements you receive, the authority of linking domains, referral traffic from press mentions, and improvements in your search rankings. You\'ll see exactly which publications covered your story, the backlinks earned, and the estimated reach of each piece. We provide monthly reports showing these metrics and how they impact your overall visibility.',
    },
    {
      id: 5,
      question: 'What do you need from us to run a digital PR campaign?',
      answer: 'We need access to someone who can answer technical questions about your business, approval on story angles before we pitch, and any internal data or research you have that could be newsworthy. You\'ll review content before it goes out and provide quotes when journalists request them. Most clients spend 2-3 hours per month supporting the campaign once it\'s running.',
    },
  ] : [
    {
      id: 1,
      question: `What results can I expect from ${service.title.toLowerCase()}?`,
      answer: `Results vary based on your current situation, industry, and goals, but most clients see meaningful improvements within the first 60-90 days. We focus on quick wins early (things that move the needle immediately) while building the foundation for long-term, sustainable growth. Our average clients see significant ROI improvements within the first quarter, with compounding results as we optimize and scale what works.`,
    },
    {
      id: 2,
      question: `How is your approach to ${service.title.toLowerCase()} different?`,
      answer: `We don't do cookie-cutter solutions or one-size-fits-all strategies. Every engagement starts with deep discovery—understanding your business, market, competitors, and goals. Then we build a custom ${service.title.toLowerCase()} plan designed specifically for you. Plus, we're not just consultants who hand you a deck and disappear. We're your execution partners, doing the work alongside you and staying accountable to results.`,
    },
    {
      id: 3,
      question: `What's included in your ${service.title} service?`,
      answer: `Everything you need to succeed. That includes ${service.tags[0]?.label.toLowerCase()}, ${service.tags[1]?.label.toLowerCase()}, ${service.tags[2]?.label.toLowerCase()}, plus dedicated account management, regular strategy sessions, transparent reporting, and ongoing optimization. We handle the heavy lifting so you can focus on running your business while we focus on growing it.`,
    },
    {
      id: 4,
      question: `Do you work with businesses of all sizes?`,
      answer: `Absolutely. We've worked with everyone from ambitious startups to Fortune 500 companies. Our processes and strategies scale to fit your needs, budget, and growth stage. Whether you're just getting started or looking to take your ${service.title.toLowerCase()} to the next level, we can help. The key is ambition and commitment—if you're serious about growth, we're serious about making it happen.`,
    },
    {
      id: 5,
      question: `How do you measure success?`,
      answer: `By the metrics that actually matter to your business. We start every engagement by defining clear KPIs aligned with your goals—whether that's revenue, leads, traffic, conversions, or brand awareness. Then we track everything in real-time through custom dashboards you can access 24/7. No vanity metrics, no smoke and mirrors. Just transparent, data-driven reporting that shows exactly what's working and what we're doing to improve results.`,
    },
  ];

  return {
    stats,
    serviceCards,
    contentParagraphs,
    approachChecklist,
    faqItems,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { stats, serviceCards, contentParagraphs, approachChecklist, faqItems } = getServiceContent(service);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label={service.title}
          title={service.description}
        />

        <ServiceStats stats={stats} />

        <ServiceContent
          title={slug === 'strategy-growth' ? 'A Clear Plan to Get More Traffic and Customers' : slug === 'social-media-marketing' ? 'What Social Media Marketing Actually Includes' : slug === 'content-marketing' ? 'Content that works while you sleep' : slug === 'email-marketing' ? 'Email marketing that pays for itself' : slug === 'paid-advertising' ? 'Campaigns that reach buyers ready to act' : slug === 'digital-pr' ? 'Your company in the publications your customers actually read' : slug === 'video-marketing' ? 'Video Production and Distribution for Every Platform' : slug === 'brand-strategy' ? 'What Brand Strategy Actually Includes' : slug === 'web-development' ? 'Custom Website Development That Actually Works' : slug === 'technical-seo' ? 'Technical SEO Audits and Implementation' : slug === 'on-page-seo' ? 'What\'s Included in On-Page SEO' : slug === 'local-seo' ? 'Local SEO That Gets You Found in Your Market' : slug === 'ecommerce-development' ? 'What E-Commerce Development Includes' : slug === 'seo-audits' ? 'Comprehensive SEO Audits That Show You Exactly What to Fix' : slug === 'conversion-optimization' ? 'Stop Guessing What Works on Your Website' : slug === 'website-maintenance' ? 'Your Website Needs Regular Maintenance' : slug === 'crm-implementation' ? 'CRM Implementation That Gets Your Team On Board' : slug === 'marketing-automation' ? 'Marketing Automation That Responds to Your Customers' : slug === 'sales-funnel-automation' ? 'Sales Funnel Automation That Knows When Leads Are Ready' : slug === 'lead-generation-systems' ? 'Stop Losing Leads Between Channels' : slug === 'pipeline-management' ? 'Stop Losing Deals in the Chaos' : slug === 'integration-services' ? 'Stop copying data between systems and let your tools talk to each other' : slug === 'ai-strategy' ? 'Find AI Opportunities That Actually Improve Your Business' : slug === 'ai-chatbots' ? 'AI Chatbots That Actually Help Your Customers' : slug === 'ai-content-tools' ? 'Produce More Content Without Hiring More Writers' : slug === 'ai-personalization' ? 'Show Every Visitor What Actually Matters to Them' : slug === 'predictive-analytics' ? 'Know What\'s Coming Before Your Competitors Do' : slug === 'custom-ai-solutions' ? 'AI That Fits Your Business, Not the Other Way Around' : `${service.title} That Actually Drives Growth`}
          subtitle={slug === 'strategy-growth' ? 'We analyze your market, identify opportunities, and create a strategy that brings in qualified traffic.' : slug === 'social-media-marketing' ? 'Everything you need to maintain an active, effective presence on social platforms.' : slug === 'content-marketing' ? 'Your website needs more than a homepage and contact form.' : slug === 'email-marketing' ? 'Most businesses leave thousands on the table because their email list just sits there.' : slug === 'paid-advertising' ? 'Paid advertising puts your business in front of people actively searching for what you sell, or scrolling through content related to your industry.' : slug === 'digital-pr' ? 'Digital PR puts you in front of audiences that matter, with third-party credibility you can\'t buy with ads.' : slug === 'video-marketing' ? 'Video gets watched, shared, and remembered more than any other content format. We create videos that explain your product, build trust with your audience, and perform well wherever they\'re posted.' : slug === 'brand-strategy' ? 'Brand strategy gives you a clear foundation for every marketing decision. It defines who you are, what makes you different, and how you communicate that consistently across every channel.' : slug === 'web-development' ? 'Your website is often the first interaction people have with your business. We build it to function flawlessly, load quickly, and look good on every device.' : slug === 'technical-seo' ? 'Search engines need to crawl, understand, and index your website before they can rank it. We identify and fix the technical issues preventing your site from performing in search results.' : slug === 'on-page-seo' ? 'On-page SEO determines how well individual pages rank for target keywords. When done right, it puts your pages in front of people actively searching for what you offer.' : slug === 'local-seo' ? 'When someone in your area searches for your services, you need to be in the top results. Local SEO makes sure your business appears in Google Maps, local pack results, and location-based searches.' : slug === 'ecommerce-development' ? 'An online store needs more than a nice design. It needs working shopping carts, payment processing, inventory tracking, and order management systems that handle transactions without breaking.' : slug === 'seo-audits' ? 'Most websites have dozens of SEO issues. The challenge isn\'t finding them, it\'s knowing which ones actually matter for your rankings and which ones to fix first.' : slug === 'conversion-optimization' ? 'You\'re getting traffic, but visitors aren\'t converting. We figure out why, then fix it through testing and data.' : slug === 'website-maintenance' ? 'Websites don\'t stay healthy on their own. Without consistent updates and monitoring, they slow down, become vulnerable to attacks, and eventually break.' : slug === 'crm-implementation' ? 'A CRM only works if your team actually uses it. We set up your system to match how you already work, not force you into someone else\'s process.' : slug === 'marketing-automation' ? 'Most businesses collect leads but lose them in the follow-up. Automation ensures every lead gets consistent, personalized communication without manual work.' : slug === 'sales-funnel-automation' ? 'Most leads aren\'t ready to talk to sales when they first show interest. Automated qualification finds the buyers and tells your team exactly when to reach out.' : slug === 'lead-generation-systems' ? 'Every inquiry matters, but when leads come from five different places, some slip through. We build systems that capture every lead, qualify them instantly, and send them to the right person on your team.' : slug === 'pipeline-management' ? 'When you can\'t see where your deals are or what needs to happen next, opportunities slip through the cracks. Your pipeline becomes a black box instead of a roadmap to revenue.' : slug === 'integration-services' ? 'When your business tools don\'t communicate, you waste hours moving data around manually and never quite trust that the numbers match up.' : slug === 'ai-strategy' ? 'Everyone\'s talking about AI, but most businesses don\'t know where it fits or which tools to choose. You need a plan that focuses on real results, not just following trends.' : slug === 'ai-chatbots' ? 'Your customers have questions at 2 AM. Your sales leads need answers on weekends. Your support team spends hours answering the same questions over and over.' : slug === 'ai-content-tools' ? 'Your audience needs more content than your team can write. AI tools can help, but only if they\'re set up correctly.' : slug === 'ai-personalization' ? 'Most websites treat every visitor the same, showing identical content to completely different people. That means lost sales and missed opportunities.' : slug === 'predictive-analytics' ? 'Most businesses make decisions based on what already happened. Predictive analytics tells you what\'s about to happen so you can act first.' : slug === 'custom-ai-solutions' ? 'Off-the-shelf AI tools solve common problems well, but your business isn\'t common. When you need AI that understands your unique workflows, data, and challenges, you need something built for you.' : `No fluff. No empty promises. Just proven ${service.title.toLowerCase()} strategies that deliver real results.`}
          paragraphs={slug === 'strategy-growth' ? [
            'Most businesses waste money on channels that don\'t work for them. They invest in SEO when their customers are on LinkedIn. They pour budget into ads without a content foundation. They chase trends instead of focusing on what actually converts. A growth strategy fixes this by identifying where your audience actually is and building a plan around that reality.',
            'We start by understanding your business, your customers, and your competition. Then we audit your current channels to see what\'s working and what\'s not. From there, we build a roadmap that prioritizes the highest-impact opportunities. Maybe that\'s fixing technical SEO issues that are killing your rankings. Maybe it\'s launching a content program that targets bottom-funnel keywords. Maybe it\'s testing paid channels you haven\'t explored yet.',
            'You\'ll get a documented strategy that shows exactly what to do, when to do it, and why it matters. We prioritize quick wins alongside long-term plays. We set realistic timelines and benchmarks so you can track progress. And we don\'t just hand you a document and disappear. We can help you execute the plan or work with your team to implement it.',
            'This isn\'t about chasing every new tactic or spreading your budget thin across ten channels. It\'s about focusing resources on the strategies that will actually move the needle for your specific business. If you\'re tired of guessing what will work, let\'s build a plan based on data and experience instead.'
          ] : slug === 'social-media-marketing' ? [
            'Social media marketing means creating and publishing content consistently across your chosen platforms. We write posts, design graphics, shoot and edit videos, and develop content calendars that align with your business goals. Every piece of content is created with your specific audience in mind.',
            'Managing social accounts is daily work. We monitor comments and messages, respond to your audience, handle customer inquiries, and keep conversations moving. This includes moderation, reputation management, and making sure nothing falls through the cracks.',
            'Paid social campaigns put your content in front of people who don\'t already follow you. We build and manage ad campaigns on Facebook, Instagram, LinkedIn, and TikTok. This includes audience targeting, budget management, A/B testing ad creative, and optimizing campaigns based on performance data.',
            'You\'ll get monthly reports showing what\'s working and what isn\'t. We track metrics like follower growth, reach, clicks, conversions, and cost per result. This data informs what content we create more of and where we adjust the strategy.'
          ] : slug === 'content-marketing' ? [
            'Every blog post you publish is another page Google can rank. Every guide you write is another way people find you when they search for solutions. Content marketing means creating a library of helpful articles that attract visitors, answer their questions, and show them why they should work with you.',
            'We\'re talking about real, practical content. How-to articles. Industry insights. Case studies. The kind of stuff people actually search for. Each piece is written for humans first and search engines second, with keywords built in naturally so you rank without sounding like a robot wrote it.',
            'Most businesses know they need content but don\'t have time to write it. Or they publish a few blog posts, see no immediate results, and give up. Content marketing is a long game. You\'re building a resource library that compounds over time. The article you publish today could still be bringing in leads two years from now.',
            'We handle everything: research, writing, editing, optimization, and publishing. You get a steady stream of quality content without spending your evenings staring at a blank Google Doc. Every piece is designed to rank in search, provide genuine value, and move readers closer to becoming customers.'
          ] : slug === 'email-marketing' ? [
            'Email is the only marketing channel you actually own. No algorithm changes. No ad costs. No platform rules. Just a direct line to people who already said yes to hearing from you. The businesses winning right now are the ones treating their email list like the asset it is.',
            'We build complete email systems from scratch. That means the welcome series new subscribers get, the weekly emails that keep you top of mind, the promotional campaigns that drive sales, and the automated sequences that recover abandoned carts or re-engage cold contacts. Every email is written, designed, and set up to get opened and clicked.',
            'We also handle the technical side most businesses ignore. Proper list segmentation so you\'re sending the right message to the right people. Deliverability monitoring so your emails land in inboxes instead of spam. A/B testing on subject lines and content so we know what actually works. Clean list management so you\'re not paying for dead contacts.',
            'You get a system that runs on autopilot once it\'s built. New subscribers automatically enter your welcome flow. Customers who abandon carts get reminder emails. Past buyers get re-engagement campaigns. And you get regular reporting on open rates, click rates, and actual revenue generated so you can see exactly what\'s working.'
          ] : slug === 'paid-advertising' ? [
            'We set up ad campaigns on the platforms where your customers spend time. That means writing ad copy, choosing images or video, selecting who sees your ads based on location, interests, or search behavior, and setting daily budgets that match what you\'re comfortable spending.',
            'Once campaigns launch, we track what happens. Which ads get clicks. Which clicks turn into leads or sales. Which audiences respond best. We use that information to adjust targeting, rewrite underperforming ads, shift budget toward what works, and pause what doesn\'t.',
            'You get regular reports showing how much you spent, how many people clicked, and how many conversions you got. No jargon, no fluff. Just clear numbers that show whether your ad spend is paying off.',
            'We also run A/B tests on ad creative and landing pages to find what converts better. Small improvements in click-through rates or conversion rates add up fast when you\'re spending money every day. The goal is simple: get more results from the same budget, or get the same results for less money.'
          ] : slug === 'digital-pr' ? [
            'When a respected publication writes about your company, something changes. People visit your site already interested. They trust you more because someone else vouched for you. And Google notices those high-quality links pointing back to you.',
            'We pitch journalists with angles they actually want to cover. Sometimes that\'s data from your industry, sometimes it\'s expert commentary on news that just broke, sometimes it\'s a story only you can tell. We find what makes editors say yes, then we make it happen.',
            'Every placement serves two purposes. First, it puts you in front of readers who might become customers. Second, it builds a link from a trusted website back to yours, which tells search engines your site deserves to rank higher. That\'s why digital PR works when other tactics plateau.',
            'We track what actually matters: which publications covered you, how many people saw it, what links you earned, and how much referral traffic came through. No vanity metrics. Just the coverage that moves your business forward.'
          ] : slug === 'video-marketing' ? [
            'We handle video production from start to finish. That means writing scripts, coordinating shoots, filming content, and editing everything into polished videos ready to publish. Whether you need a 30-second social clip or a 10-minute tutorial, we manage the entire production process so you don\'t have to figure it out yourself.',
            'Different platforms need different approaches. A YouTube explainer video needs proper structure, pacing, and SEO optimization. A TikTok or Instagram Reel needs to hook viewers in the first two seconds and deliver value fast. We create videos tailored to each platform\'s format, audience expectations, and algorithm requirements.',
            'Creating one video is just the starting point. We repurpose long-form content into multiple short clips, optimize everything for search with proper titles and descriptions, design thumbnails that get clicks, and plan distribution across the right channels. This approach maximizes the value of every video you produce.',
            'If you\'re building a YouTube presence, we manage the ongoing work: channel setup and branding, upload schedules, keyword research, playlist organization, and performance tracking. For brands focused on short-form video, we develop content calendars, test different formats, and refine what works based on actual view and engagement data.'
          ] : slug === 'brand-strategy' ? [
            'We start by mapping out your competitive landscape and identifying where you actually fit in your market. This means analyzing what your competitors say, finding gaps in how they position themselves, and uncovering opportunities for your brand to own specific territory. You\'ll get a positioning statement that clearly articulates what you do, who it\'s for, and why it matters.',
            'Next, we build your messaging framework. This includes your core value propositions, key messages for different audiences, proof points that back up your claims, and taglines or positioning statements that capture your brand essence. Everything is written in plain language and organized so your team knows exactly what to say in any marketing context.',
            'We develop your brand voice and tone guidelines so everyone on your team communicates consistently. This covers vocabulary choices, sentence structure, formality level, and how your voice adapts across different channels and situations. You\'ll get clear examples of what sounds like your brand and what doesn\'t.',
            'Finally, we create audience personas based on actual research, not assumptions. This includes demographic details, behavioral patterns, pain points, decision-making criteria, and the language your customers actually use. These personas guide everything from messaging to channel selection to content topics.'
          ] : slug === 'web-development' ? [
            'We start by understanding what your website needs to accomplish, then build it using the right technology stack for your situation. Whether you need a straightforward informational site, a complex web application, or an online store, we write the code that makes it happen. Our developers work with modern frameworks like React and Next.js for frontend interfaces, and set up secure backend systems with proper database architecture when needed.',
            'Every site we build is responsive by default, meaning it automatically adapts to work on phones, tablets, and desktop computers. We write semantic HTML, organized CSS, and efficient JavaScript that keeps your site loading quickly even as you add more content over time. Performance matters because slow sites lose visitors, so we optimize images, minimize code bloat, and implement caching strategies that keep load times under three seconds.',
            'If you need e-commerce functionality, we integrate payment processing, shopping cart systems, and inventory management. For clients who want to update their own content, we set up content management systems like WordPress or Shopify, or build custom admin panels that make editing straightforward. We can also connect your site to third-party tools you already use, whether that\'s a CRM, email platform, or booking system.',
            'After launch, we provide ongoing maintenance to keep your site secure and functional. This includes software updates, security patches, bug fixes, and performance monitoring. We also handle hosting setup and SSL certificates, so your site stays online and protected. When you need new features or pages added, we build them to integrate seamlessly with your existing site structure.'
          ] : slug === 'technical-seo' ? [
            'We start with a comprehensive technical audit of your website to identify crawl errors, broken links, indexing problems, and site speed issues. Using tools like Google Search Console, Screaming Frog, and PageSpeed Insights, we map out exactly what\'s preventing search engines from properly accessing your content. You\'ll receive a prioritized list of issues affecting your search visibility, from critical problems like blocked pages to opportunities like missing structured data.',
            'Site speed directly impacts both rankings and user experience. We optimize Core Web Vitals by compressing images, minifying code, leveraging browser caching, and improving server response times. For sites with JavaScript rendering issues, we ensure search engines can properly crawl and index dynamic content. These improvements typically result in faster load times and better performance scores across mobile and desktop.',
            'We configure and optimize your XML sitemaps, robots.txt files, and canonical tags to guide search engines through your site architecture. This includes fixing duplicate content issues, managing 301 redirects from old URLs, and implementing structured data markup so your pages appear with rich snippets in search results. We also address HTTPS implementation, mobile optimization, and security configurations that affect search engine trust.',
            'Our ongoing technical monitoring catches new issues before they impact your rankings. We track index coverage, monitor for new crawl errors, and identify pages that should be indexed but aren\'t appearing in search results. When Google releases algorithm updates or changes how they handle technical elements, we adjust your site configuration accordingly. You\'ll receive regular reports showing what we\'ve fixed and how it\'s affecting your organic search performance.'
          ] : slug === 'on-page-seo' ? [
            'We start with keyword research to identify what your target audience actually searches for. This isn\'t about guessing or using obvious terms. We analyze search volume, competition, and user intent to find keywords that will drive qualified traffic to your pages. Each page gets assigned specific target keywords based on what it\'s trying to rank for and who needs to find it.',
            'Next, we optimize the elements that search engines prioritize. Title tags and meta descriptions get rewritten to include target keywords while staying compelling enough to earn clicks. Header tags (H1, H2, H3) are restructured to create clear content hierarchy that both users and search engines can follow. URLs are cleaned up to be descriptive and keyword-rich without unnecessary characters or parameters.',
            'The content itself gets refined for both search engines and human readers. We adjust keyword placement throughout the page without overstuffing or making it sound robotic. Paragraphs are tightened for readability. Content length is evaluated against what\'s ranking now to ensure you\'re providing enough depth. Images get optimized alt text that describes what they show while incorporating relevant keywords where appropriate.',
            'Finally, we build an internal linking structure that connects related pages and distributes ranking power throughout your site. This helps search engines understand how your content relates to each other and gives users clear paths to find what they need. We also identify pages that need content updates or refreshes to stay competitive with what\'s currently ranking.'
          ] : slug === 'local-seo' ? [
            'We start with your Google Business Profile, which is the foundation of local visibility. This means completing every section, selecting the right categories, uploading photos, posting regular updates, and monitoring your profile for accuracy. We also set up Google Posts to keep your listing active and engaging. Most businesses leave their profile incomplete or neglect it after setup, which directly impacts their rankings.',
            'Next, we build and manage your local citations across major directories like Yelp, Apple Maps, Bing Places, and industry-specific platforms. We ensure your NAP (Name, Address, Phone) information is consistent everywhere it appears online. Search engines use this consistency as a trust signal. We also clean up any existing incorrect listings that could be confusing customers or hurting your rankings.',
            'Review management is a critical part of local SEO. We set up systems to encourage satisfied customers to leave reviews, monitor new reviews across platforms, and help you respond appropriately. Reviews impact both your ranking and conversion rate. We also implement schema markup on your website so search engines can display your ratings directly in search results.',
            'For the technical side, we optimize your website with local keywords, create or improve location pages if you serve multiple areas, and build local backlinks from chambers of commerce, local news sites, and community organizations. We also track your rankings in Google\'s local pack and Maps results, providing reports that show exactly where you appear for the searches that matter to your business.'
          ] : slug === 'ecommerce-development' ? [
            'We build the foundation of your online store: product catalogs with filtering and search, shopping cart functionality, and checkout flows that guide customers from browsing to purchase. This includes setting up product pages with images, descriptions, pricing, and variants like size or color. Every store gets mobile-responsive design so customers can shop from any device without layout issues or broken functionality.',
            'Payment processing is where most stores lose customers. We integrate payment gateways like Stripe, PayPal, or Square, configure SSL certificates for secure transactions, and test every step of the checkout process. We also set up shipping calculators that show real-time rates based on location and weight, plus tax calculation that adjusts by region. The goal is eliminating friction between "add to cart" and "order complete."',
            'Behind the scenes, you need systems to manage your business. We set up inventory tracking that updates stock levels automatically, order management dashboards where you can process fulfillment, and customer account areas where people can view order history and track shipments. For larger catalogs, we build bulk product upload tools and inventory sync with your existing systems.',
            'Platform choice depends on your needs. Shopify works for most retail stores and handles hosting, security, and updates automatically. WooCommerce gives you more control and works well if you\'re already using WordPress. Custom platforms make sense when you need specific functionality that off-the-shelf solutions can\'t handle, like complex pricing rules, subscription management, or wholesale portals.'
          ] : slug === 'seo-audits' ? [
            'Our SEO audit examines every element that affects your search visibility. We analyze your site\'s technical infrastructure (crawlability, site speed, mobile usability, indexation), evaluate your content quality and keyword targeting, review your backlink profile for toxic links and opportunities, and benchmark your performance against direct competitors. This covers roughly 200+ ranking factors across technical SEO, on-page optimization, off-page signals, and user experience metrics.',
            'Finding issues is easy. Knowing which ones to fix first is where most audits fail. We score every finding by potential impact and implementation difficulty, then organize recommendations into a prioritized roadmap. Critical technical errors that block indexing come first. High-impact, low-effort wins come next. Time-intensive content projects get ranked by expected traffic gain. You won\'t waste time fixing minor issues while major problems remain unaddressed.',
            'The final deliverable is a detailed PDF report divided into sections: Executive Summary (key findings and estimated impact), Technical Issues (with screenshots and specific fixes), Content Gaps (missing keywords and optimization opportunities), Backlink Analysis (toxic links to remove and link building opportunities), and Competitor Insights (what\'s working for sites that outrank you). Each recommendation includes implementation instructions, expected timeline, and priority level (critical, high, medium, low).',
            'After delivery, we schedule a 60-minute walkthrough call to explain findings and answer questions. You also get 30 days of email support for clarification on any recommendations. If you need help implementing fixes, we can discuss ongoing SEO services or connect you with developers for technical work. The audit gives you complete transparency into your SEO health, whether you tackle fixes in-house or hire help.'
          ] : slug === 'conversion-optimization' ? [
            'Most websites lose 98% of their visitors without a conversion. You\'ve invested in getting people to your site, but something isn\'t clicking. Maybe your headlines don\'t connect. Maybe your forms ask for too much information. Maybe your call-to-action buttons blend into the background. The problem is, you don\'t know which issue to fix first, so you end up guessing or doing nothing at all.',
            'We test the elements that actually impact conversions. That means headlines, button copy, form fields, page layouts, images, trust signals, and calls-to-action. We don\'t change everything at once. We isolate one variable, run an A/B test with real visitors, and let the data tell us what works. If version B converts better than version A, we implement it. If it doesn\'t, we learn from it and test something else.',
            'Our testing process follows a clear methodology. We start by analyzing your analytics to find where visitors drop off. Then we create hypotheses about why they\'re leaving and what might keep them engaged. We design variations to test those hypotheses, split your traffic between versions, and measure which one performs better. Every test runs long enough to reach statistical significance, so you\'re making decisions based on real data, not random fluctuations.',
            'Results don\'t happen overnight, but they do compound. A 10% improvement in your landing page conversion rate might not sound dramatic, but it means 10% more leads from the same traffic. Stack that with better button copy, simplified forms, and clearer value propositions, and you could double your conversions over a few months. You\'ll see exactly which tests won, which lost, and how each change impacted your bottom line.'
          ] : slug === 'website-maintenance' ? [
            'Most business owners don\'t think about website maintenance until something goes wrong. Your site gets hacked and displays spam content. A plugin breaks and takes down your checkout page. Your hosting runs out of space and the site stops loading. These aren\'t rare scenarios. They happen daily to websites that aren\'t being actively maintained. By the time you notice, you\'ve already lost hours of uptime and potentially thousands in revenue.',
            'Website maintenance covers the ongoing technical tasks that keep your site functioning properly. We update your CMS, plugins, and frameworks to their latest stable versions. We monitor for security vulnerabilities and apply patches before exploits appear. We run daily backups so your data is never at risk. We track uptime and performance metrics to catch problems early. We test functionality after updates to ensure nothing breaks. These tasks happen on a schedule, whether weekly or monthly, depending on your site\'s complexity and traffic.',
            'The cost of not maintaining your website compounds over time. An outdated plugin becomes a security hole that hackers exploit. A missed backup means losing months of customer data when a server fails. A broken contact form goes unnoticed for weeks, and you never see those leads. Downtime during peak hours directly impacts sales. Security breaches damage your reputation and can result in legal liability. Regular maintenance prevents these expensive problems before they occur.',
            'We monitor your site continuously and perform maintenance tasks on a set schedule. You receive monthly reports showing what was updated, any issues found, and uptime statistics. If we detect a problem, we fix it proactively. If an update requires testing in a staging environment first, we handle that. You don\'t need to remember to check anything or worry about technical details. The goal is simple: your website stays secure, fast, and online without requiring your attention.'
          ] : slug === 'crm-implementation' ? [
            'Most CRMs fail within the first six months. Teams stop logging information, data gets duplicated or incomplete, and managers can\'t trust their reports. This usually happens because the system was set up wrong from the start. Out-of-the-box configurations don\'t match real business processes, so the CRM becomes extra work instead of a helpful tool.',
            'CRM implementation means configuring the software to fit your specific workflow. We build custom fields for the information you actually track, create pipelines that match your sales stages, set up automations for repetitive tasks, and connect your CRM to your email, calendar, marketing tools, and other software you use daily. We also migrate your existing customer data, cleaning it as we go to eliminate duplicates and fill in gaps.',
            'Proper setup determines whether your CRM becomes useful or gets abandoned. When fields match what your team needs to track, when reports show metrics you actually care about, and when the system saves time instead of creating busywork, people use it. Clean data from the start means accurate forecasting, reliable reporting, and confident decision-making. Integration with your other tools means information flows automatically instead of requiring manual data entry.',
            'You get a CRM configured specifically for how your business operates. We document your sales process, customer journey, and reporting needs before touching any settings. Then we build the system around that reality. Your team receives training sessions focused on their daily tasks, and we create reference guides for common actions. The result is a CRM that feels natural to use because it was built around your actual work.'
          ] : slug === 'marketing-automation' ? [
            'Leads come in from your website, ads, or events, but someone has to remember to follow up. Manual emails don\'t happen consistently. People get busy, leads fall through the cracks, and your list grows cold. You need a system that follows up automatically, segments based on behavior, and sends the right message when someone is actually paying attention.',
            'Marketing automation builds email workflows that run on triggers and conditions. Someone downloads a guide, they enter a nurture sequence. They click a link, they move to a different segment. They abandon a cart, they get a reminder. We create workflows specific to your customer journey, with branches for different behaviors, wait times between messages, and personalization based on what we know about each contact.',
            'Automation works because it\'s consistent and responds to what people do. Every lead gets the same quality follow-up whether they came in on Monday or Friday. Messages go out based on actions, not arbitrary schedules. Someone who opens every email gets different content than someone who hasn\'t engaged in weeks. It scales personalization without scaling your workload.',
            'You get workflows built specifically for your business, not generic templates. We map your customer journey, identify key decision points, and create sequences that move people through each stage. That includes welcome series for new subscribers, nurture sequences for leads who aren\'t ready to buy, re-engagement campaigns for cold contacts, and post-purchase follow-ups. We connect everything to your CRM so you can see who\'s engaging and where people drop off.'
          ] : slug === 'sales-funnel-automation' ? [
            'Sales teams spend hours calling leads who aren\'t ready to buy yet. Someone downloads a whitepaper, fills out a contact form, or attends a webinar, and they get an immediate call from sales. But most of these people are still researching. They\'re not ready for a conversation, so they don\'t answer or they say "not now." Your sales team wastes time on cold prospects while actual buyers sit in the pipeline waiting for follow-up.',
            'Sales funnel automation uses lead scoring and behavioral triggers to identify when someone is actually ready to buy. We track actions like email opens, page visits, content downloads, and demo requests. Each action adds points. When someone crosses your threshold, they move to a new pipeline stage and your sales team gets notified. We also build nurture sequences that keep lukewarm leads engaged until they heat up. The system runs continuously, scoring every lead and moving them forward based on their behavior.',
            'This works because it separates research-phase prospects from buying-phase prospects. Sales only talks to people who have shown real buying signals. The timing is automatic, so no one falls through the cracks because someone forgot to follow up. Your team stops chasing people who aren\'t ready and starts closing deals with people who are. The automation handles qualification while your salespeople focus on conversations that actually convert.',
            'You get a scoring system built around your specific sales process and buyer journey. We identify which actions indicate buying intent for your business, set up automation rules that move leads between stages, and create notification triggers that alert your team at the right moment. Everything connects to your CRM so your sales team sees real-time scores and stage changes. We also build feedback loops so the system gets smarter as you learn which behaviors actually predict purchases.'
          ] : slug === 'lead-generation-systems' ? [
            'Leads show up everywhere. Someone fills out your website form. Another person messages you on Instagram. A chatbot conversation happens at 2am. Each one lands in a different place, and by the time someone on your team sees them, hours have passed. Some never get answered at all. You\'re spending money to generate these inquiries, then losing them because there\'s no system to handle them.',
            'We build a centralized lead generation system that captures inquiries from every channel you use. Website forms, landing pages, chatbots, social media messages, all feeding into one place. The system automatically checks each lead against your qualification criteria: location, budget range, service interest, company size, whatever matters to your business. Good fits get flagged. Poor fits get filtered out. Every inquiry gets an instant automated response so no one\'s left waiting.',
            'Routing happens automatically based on rules you set. If a lead is in the Northeast and interested in branding services, it goes to your rep who handles that territory and specialty. If it\'s a high-budget inquiry, it gets priority treatment. Your sales team sees qualified leads in real time, with all the context they need: where the person came from, what they\'re interested in, and why they qualified. No more digging through different inboxes or asking "who\'s handling this one?"',
            'You get the complete technical setup: forms integrated with your website, landing pages for campaigns, chatbot configuration, qualification logic programmed into your CRM, and routing rules that match your sales structure. We document how everything works and train your team to manage it. After launch, you\'ll have one system handling all your lead capture, automatically qualifying and routing inquiries so your team can focus on closing deals instead of hunting down leads.'
          ] : slug === 'pipeline-management' ? [
            'Most sales teams lose deals not because they\'re bad at selling, but because they lose track of them. A rep forgets to follow up. A hot lead goes cold because nobody knew it needed attention. You have no idea which deals are actually moving forward and which ones are stalled. Without visibility into your pipeline, you\'re flying blind.',
            'Pipeline management gives you a clear system for tracking every deal from first contact to close. You get defined stages that match how you actually sell, with every opportunity tagged, tracked, and visible in one place. No more deals falling through the cracks because someone forgot to check their notes or lost an email thread.',
            'When your team can see exactly where each deal stands and what action comes next, they close more consistently. Reps know which opportunities need attention today. Managers can spot bottlenecks before they become problems. You can forecast revenue with actual data instead of gut feelings. The whole sales process becomes predictable instead of chaotic.',
            'You get a customized pipeline that matches your sales process, with clear stages and tracking for every deal. We set up dashboards that show you real-time analytics on win rates, deal velocity, and where opportunities are getting stuck. You get automated reminders so your team never misses a follow-up, plus reporting that tells you exactly what\'s working and what needs to change.'
          ] : slug === 'integration-services' ? [
            'Your sales data lives in your CRM. Your email metrics are in MailChimp. Your ad performance sits in Google and Facebook. Your website analytics are in another tool entirely. Every time you need to report on what\'s working, you\'re downloading CSVs, copying numbers into spreadsheets, and hoping you didn\'t miss anything. By the time you\'ve compiled everything, the data is already outdated and someone has to do it all over again next week.',
            'Integration services connect all these platforms so they share data automatically. When someone fills out a form on your website, they\'re added to your CRM and your email list without you touching anything. When they make a purchase, that revenue flows into your analytics dashboard. Your ad spend and conversions sync with your reporting tools. The systems you already use start working together instead of creating more work for you.',
            'This saves your team hours every week that used to go toward data entry and manual updates. It eliminates the errors that come from copying information by hand. Most importantly, it gives you one reliable source of truth. When someone asks how many leads came from last month\'s campaign, you have an answer in seconds, not hours. And you know it\'s accurate because the data flowed directly from source to dashboard without human intervention.',
            'You get a detailed integration plan showing which systems connect and how data flows between them. We handle the technical setup, including API connections and any custom development needed. You receive documentation your team can reference, plus testing to confirm everything syncs correctly. After launch, we monitor the integrations to catch any issues before they affect your data.'
          ] : slug === 'ai-strategy' ? [
            'AI is everywhere right now, and that\'s the problem. Every software vendor claims their product uses AI. Every consultant says you need it. But most businesses end up spending money on AI tools that don\'t solve real problems. They automate the wrong things, choose expensive platforms they barely use, or chase use cases that sound impressive but don\'t move metrics. The hype makes it hard to see what actually works.',
            'AI strategy means finding the specific places where AI helps your business and ignoring everything else. We map your operations to find high-value use cases, like automating repetitive tasks that eat up team time or improving decisions where you currently guess. Then we match those use cases to the right tools, whether that\'s simple automation software or more complex machine learning systems. You get a practical plan showing what to implement, when, and why.',
            'This approach saves you from expensive mistakes. Instead of buying tools because competitors use them, you invest in AI that delivers measurable improvements. You\'ll know which use cases give you the best return, which tools fit your budget and technical capabilities, and how to roll things out without disrupting operations. The roadmap gives you confidence because it\'s based on your actual needs, not vendor pitches.',
            'You receive an opportunity assessment showing ranked use cases with expected impact, a tool evaluation comparing specific platforms for your needs with pros and cons, and an implementation roadmap breaking down phases with timelines and resource requirements. If you want to test before committing, we include pilot program designs so you can validate results on a small scale first.'
          ] : slug === 'ai-chatbots' ? [
            'Most customer inquiries come in outside business hours when no one is available to respond. Potential leads ask questions, wait for answers, and move on to competitors who respond faster. Your team wastes time on repetitive questions like pricing, hours, and basic product info. Meanwhile, real questions that need human expertise get buried in the noise.',
            'AI chatbots handle these conversations automatically. They answer common questions instantly, qualify leads by asking the right follow-up questions, and escalate complex issues to your team with full context. The conversations feel natural because the chatbot understands intent, not just keywords. It works 24/7, responds in seconds, and never needs a break.',
            'This means faster response times for customers, consistent answers across all inquiries, and your team focused on work that actually requires human judgment. You can scale support without hiring more staff. Leads get qualified before they reach your sales team, so your salespeople spend time on prospects who are actually ready to buy. Response time goes from hours to seconds.',
            'You get a custom-trained chatbot built specifically for your business, trained on your products, services, and common customer questions. We integrate it with your existing CRM, help desk, or messaging platforms so conversations flow into your current workflow. You receive analytics on common questions, conversation patterns, and lead quality. We handle ongoing training and updates as your business changes.'
          ] : slug === 'ai-content-tools' ? [
            'You need more blog posts, more social content, more email campaigns. But hiring more writers is expensive, and freelancers rarely capture your brand voice. When you try to scale content production the traditional way, quality drops or costs spiral out of control. Most businesses get stuck choosing between quantity and quality.',
            'AI writing tools can generate drafts, speed up research, and handle repetitive writing tasks. But generic AI outputs sound robotic and off-brand. The key is training these tools on your specific voice, terminology, and style. When configured properly, AI becomes an assistant that helps your team work faster without compromising what makes your content yours.',
            'We build custom AI workflows that fit how your team actually works. Your writers spend less time on first drafts and more time on strategy, editing, and the creative work that AI can\'t do. You get more content published without hiring additional headcount. Quality stays consistent because we build in review processes and brand voice guidelines that every AI-generated piece must pass.',
            'You\'ll get AI writing tools configured for your brand, complete with custom prompts and style guidelines. We\'ll map out content workflows that show exactly when to use AI and when to use human writers. You\'ll receive a quality checklist and review process to catch any off-brand content before it publishes. Your team will know how to use these tools effectively, and you\'ll have a system that scales content production without scaling costs.'
          ] : slug === 'ai-personalization' ? [
            'Your website shows the same homepage to a first-time visitor and a returning customer. The same products to someone who just browsed athletic gear and someone who looked at dress shoes. The same content to a CEO and an intern. That\'s a waste. Every generic experience is a missed chance to connect with what someone actually needs.',
            'AI personalization changes what people see based on who they are and what they do. A returning customer sees products related to their last purchase. A visitor from a specific industry sees case studies from similar companies. Someone who\'s browsed your pricing page three times sees a demo offer instead of generic features. The content adapts in real time.',
            'When people see what\'s relevant to them, they stay longer, engage more, and convert at higher rates. You\'re not guessing what might interest someone. You\'re showing them exactly what they\'ve demonstrated interest in through their behavior. That means fewer wasted impressions and more actions that matter to your business.',
            'You get AI models trained on your customer data, dynamic content blocks that change based on user segments, personalized product recommendation engines, and behavioral tracking that informs what each visitor sees. We build the system, integrate it with your site, and give you a dashboard to see how different segments perform. You control the rules and see exactly what\'s working.'
          ] : slug === 'predictive-analytics' ? [
            'You\'re constantly making decisions with incomplete information. Will this customer churn? Which products will sell next quarter? What will demand look like in six months? Right now, you\'re either guessing based on gut feeling or extrapolating from last year\'s numbers. Both approaches leave money on the table because by the time you see the problem, it\'s already too late to fix it.',
            'Predictive analytics uses machine learning to find patterns in your historical data and forecast future outcomes. We train models on your sales records, customer behavior, market conditions, and dozens of other variables to predict what\'s likely to happen next. These aren\'t magic predictions. They\'re statistical probabilities based on what your data shows about how customers actually behave and how markets actually move.',
            'When you know which customers are likely to churn next month, you can reach out before they leave. When you forecast revenue accurately, you can plan inventory and staffing without over or under committing. When you spot trend shifts early, you can adjust your product mix and marketing before your competitors even notice the change. The business that sees around corners wins. Predictive analytics gives you that visibility.',
            'You get trained models that score your customers for churn risk, lifetime value, and purchase likelihood. You get sales forecasts broken down by product, region, and time period with confidence intervals so you know the range of likely outcomes. You get trend reports that flag emerging patterns in your market data. Everything comes with dashboards that update automatically and alerts when predictions cross critical thresholds. We also document how each model works so your team understands what\'s driving the predictions.'
          ] : slug === 'custom-ai-solutions' ? [
            'Generic AI solutions force you to adapt your processes to fit their limitations. Your team wastes time on workarounds, your data doesn\'t integrate properly, and the results fall short because the tool doesn\'t understand what makes your business different. You\'re left with something that works for everyone in theory but no one perfectly in practice.',
            'Custom AI solutions are built from the ground up for your specific needs. We develop machine learning models trained on your data, create automations tailored to your exact workflow, and integrate everything with your existing systems. Instead of configuring pre-built software, we write the code and train the models that solve your particular problem. The result is AI that works the way you work, not the other way around.',
            'This means your team stops fighting against tools that almost fit and starts using AI that actually understands your business. Your proprietary data becomes an advantage instead of an integration headache. Complex processes that couldn\'t be automated before now run smoothly. You get better accuracy, faster results, and capabilities that your competitors can\'t simply buy off the shelf.',
            'You receive fully trained machine learning models built on your data, custom automation scripts integrated with your systems, complete API documentation for your development team, and ongoing model refinement as your needs evolve. Everything is built to your specifications and deployed in your environment, whether that\'s cloud infrastructure or on-premises servers.'
          ] : contentParagraphs}
        />

        <ServiceCards cards={serviceCards} />

        <LeftRight
          imageSrc={service.images.process || service.images.desktop}
          imageAlt={`${service.title} process`}
          label="Our Process"
          title="How We Make It Happen"
          content={slug === 'strategy-growth' ? [
            'We start by auditing everything: your website, your current rankings, your competitors, and your market. This takes about two weeks. We look at technical issues, content gaps, backlink profiles, and conversion problems. By the end, we know exactly what\'s working, what\'s broken, and what\'s possible.',

            'Then we build your plan. It includes specific tasks, timelines, and expected outcomes. If we\'re targeting a keyword, we tell you why it matters and what result to expect. If we\'re fixing a technical issue, we explain how it impacts your rankings. Everything is prioritized by ROI, so you\'re not wasting time on things that don\'t move the needle.',

            'You get a shared dashboard that shows progress in real time. Monthly calls to review results and adjust the plan. Direct access to the person doing the work, not an account manager who passes messages. If something isn\'t working, we tell you and fix it. If something works better than expected, we double down on it.',
          ] : slug === 'social-media-marketing' ? [
            'We start by learning what you sell, who buys it, and what you want social media to do for your business. Then we look at what your competitors are doing and where the gaps are. From there, we build a plan that targets the right people on the right platforms with content designed to get them to take action.',

            'Once the strategy is set, we create the content, schedule the posts, manage your community, and run paid campaigns. Every week we check what\'s working and what isn\'t. If something underperforms, we change it. If something works well, we do more of it. The goal is constant improvement based on what the data tells us.',

            'You\'ll see everything we\'re doing through a dashboard that updates in real time. We\'ll also meet regularly to review results and plan next steps. If you have questions between meetings, you can reach the people actually working on your account. No middlemen, no delays.',
          ] : slug === 'content-marketing' ? [
            'We start by researching your audience, competitors, and industry to find topics that will actually drive traffic and conversions. This means looking at what your customers are searching for, what questions they\'re asking, and where there are gaps your competitors aren\'t filling. We also audit your existing content to see what\'s working and what isn\'t.',

            'Once we know what to write about, our writers create content that balances SEO requirements with readability. Every piece goes through an editing process to make sure it\'s clear, accurate, and useful. We optimize for search engines without sacrificing quality, which means proper keyword placement, internal linking, meta descriptions, and structured formatting that helps both readers and search engines.',

            'After content is published, we track how it performs and look for opportunities to improve. This includes updating older posts that are losing rankings, expanding thin content, and adjusting our publishing calendar based on what\'s getting results. We also coordinate with your team to make sure content aligns with product launches, seasonal campaigns, and other marketing initiatives.',
          ] : slug === 'email-marketing' ? [
            'We start by auditing your current email setup (or building one from scratch if needed). This includes platform selection, domain authentication, list cleaning, and subscriber segmentation. We look at what you\'re already sending, who\'s opening it, and where emails are landing (inbox vs. spam). Then we map out a realistic sending schedule based on your content capacity and audience expectations.',

            'Next comes the actual email creation. We write subject lines and body copy that sound like a real person, not a marketing robot. We design templates that work on mobile and desktop without breaking. We set up automations for welcome sequences, abandoned carts, post-purchase follow-ups, or whatever makes sense for your business. Every email gets tested before it goes out.',

            'After launch, we monitor deliverability metrics (open rates, click rates, spam complaints, bounces) and adjust accordingly. We test different subject lines, send times, and content formats to see what your audience responds to. We also keep your list healthy by removing inactive subscribers and maintaining proper authentication records. The goal is consistent inbox placement and steady engagement, not just hitting send.',
          ] : slug === 'paid-advertising' ? [
            'We start by understanding your business goals and who you\'re trying to reach. This means looking at your ideal customer, your offer, and what makes you different from competitors. We also audit any existing campaigns to see what\'s working and what\'s wasting money. From there, we choose the right platforms (Google Ads, Meta, LinkedIn, TikTok, or others) based on where your audience actually spends time.',

            'Next, we build your campaigns from the ground up. We create audience segments, write ad copy that speaks to specific pain points, and design or source visuals that stop the scroll. We set up conversion tracking so every lead, sale, or signup gets measured accurately. We also structure your account properly with organized campaigns, ad sets, and ads that make optimization easier later.',

            'Once campaigns launch, we monitor performance daily and make adjustments based on real data. We test different audiences, ad creatives, and bidding strategies to find what delivers the best results for your budget. We cut spending on underperformers and scale what\'s working. You get regular reports that show exactly where your money went and what it generated.',
          ] : slug === 'digital-pr' ? [
            'We start by finding what\'s actually newsworthy about your business. Not every company announcement deserves press coverage, so we dig into your story to identify angles that journalists will care about. This might be original research, industry insights, expert commentary on trending topics, or unique data. We develop these angles into pitch-ready stories that fit the current news cycle and match what reporters are actively covering.',

            'Next, we create the assets journalists need to cover your story. This includes press releases, data visualizations, expert quotes, images, and supporting materials. We make it easy for reporters to say yes by giving them everything upfront. Then we pitch to journalists we\'ve built relationships with, following up strategically without being pushy. We track every pitch, response, and placement so you know exactly what\'s happening.',

            'When we secure coverage, we document it and analyze its impact. We track where your brand appears, the authority of those publications, the links you\'ve earned, and how coverage affects your visibility. We use this data to refine our approach, double down on what works, and adjust angles that aren\'t landing. Digital PR is about building momentum over time, not one-off wins.',
          ] : slug === 'video-marketing' ? [
            'We start by mapping out which types of videos will actually move the needle for your business. That means understanding your audience, where they spend time online, and what stage of the buying journey you\'re targeting. From there, we develop a production plan that covers scripting, shot lists, locations, and talent, so everyone knows exactly what we\'re creating and why.',

            'Production happens in phases: pre-production planning, filming day(s), and post-production editing. We handle everything from coordinating shoot logistics to directing on set to editing the final cuts. You\'re involved at key approval points (script review, rough cut feedback, and final approval), but we manage the heavy lifting so your team isn\'t bogged down in production details.',

            'After launch, we track how each video performs across platforms and use that data to improve future content. We also repurpose your best-performing videos into shorter clips, different aspect ratios, and platform-specific formats to maximize your production investment. Monthly reports show you view rates, engagement metrics, and which videos are driving conversions, so you can see exactly what\'s working.',
          ] : slug === 'brand-strategy' ? [
            'We start by learning what makes your business different. This means interviewing your team, studying your competitors, and reviewing any existing brand materials you have. We also talk to your customers directly when possible because they often see things about your brand that you don\'t. By the end of this phase, we have a clear picture of where you stand in the market and what opportunities exist.',

            'Next, we build your brand foundation. This includes developing your positioning statement, creating a messaging framework that works across all channels, and documenting your brand voice with real examples. We test the positioning with stakeholders and refine it based on feedback. You\'ll also get detailed customer personas built from actual research, not assumptions. Everything is documented in a way that your team can actually use.',

            'We don\'t just hand you a PDF and disappear. Implementation matters, so we work with your team to put the brand guidelines into practice. This means reviewing how the new messaging shows up in your website copy, sales materials, and marketing campaigns. We answer questions, provide examples, and make adjustments as you start using the framework in the real world. The goal is to make sure everyone on your team can consistently communicate what your brand stands for.',
          ] : slug === 'web-development' ? [
            'We start by understanding what your website needs to accomplish. This means talking through your business goals, identifying technical requirements, and mapping out features that matter to your users. We document everything clearly so there\'s no confusion about what we\'re building or why.',

            'Once we have a solid plan, our developers build your site with clean code and careful attention to performance. We convert designs into functional pages, connect databases and third-party tools, and test everything across different browsers and devices. You\'ll see progress through regular check-ins where we share working versions and gather your feedback.',

            'Before launch, we handle server setup, security protocols, and final testing to make sure everything works properly. After your site goes live, we monitor performance, fix any issues that come up, and train your team to manage content independently. If you need ongoing updates or technical support, we\'re available to help.',
          ] : slug === 'technical-seo' ? [
            'We start by running a complete technical audit of your site using both automated tools and manual inspection. This covers crawlability issues, indexation problems, site speed, mobile usability, schema markup, XML sitemaps, redirects, canonical tags, and any other technical factors affecting your search visibility. You get a prioritized list of what\'s broken, what\'s slowing you down, and what needs fixing first based on potential impact to your rankings and traffic.',

            'Once you approve the priorities, we get to work implementing the fixes. If you have an in-house developer or web team, we provide detailed technical specifications and work directly with them. If not, we handle the implementation ourselves depending on your CMS and hosting setup. Every change gets documented, and we test each fix before and after to confirm it actually solved the problem without creating new ones.',

            'After the initial fixes are live, we monitor your site\'s technical health on an ongoing basis. Search engines update their requirements, your site gets new content and pages, and new issues can emerge over time. We catch these problems early, keep your XML sitemaps current, monitor your crawl budget and indexation status, and send you monthly reports showing what we fixed and how your organic visibility is trending.',
          ] : slug === 'on-page-seo' ? [
            'We start by auditing your current pages to see what\'s working and what\'s not. This means analyzing your existing content, checking how keywords are being used (or missed), and comparing your pages against competitors who are outranking you. We identify quick wins and bigger opportunities, then prioritize based on what will move the needle fastest for your traffic and conversions.',

            'Once we know what needs fixing, we get to work optimizing your page elements. We rewrite title tags and meta descriptions to improve click-through rates, restructure headers to target the right keywords, and refine your content so it ranks better without losing its readability. We also handle the behind-the-scenes stuff like image alt text, internal links, and URL improvements. Every change is documented so you know exactly what we touched and why.',

            'After the initial optimization, we monitor how your pages perform in search results. Rankings shift, competitors update their content, and search intent evolves, so we track your positions and make adjustments when needed. You\'ll get regular reports showing ranking changes, traffic improvements, and new opportunities we\'ve spotted. We also flag pages that need content refreshes to keep them competitive over time.',
          ] : slug === 'local-seo' ? [
            'We start by auditing your current local search presence. This means examining your Google Business Profile, checking where your business information appears across the web, and identifying any incorrect or missing citations. We also analyze what your competitors are doing locally and look at how you currently rank in map pack results for your target service areas.',

            'Once we know what needs fixing, we get to work. We claim or optimize your Google Business Profile with the right categories, service areas, and business information. We build new citations on relevant directories and clean up existing ones that have wrong phone numbers or addresses. At the same time, we implement a review generation strategy and optimize your website content for local search terms that actually matter in your market.',

            'Local SEO requires consistent attention, not a one-time setup. We monitor your profile for unauthorized edits, respond to reviews, post regular updates to keep your profile active, and track your rankings in local pack results. You get monthly reports that show where you appear for local searches and how many people are finding you through Google Maps and local results.',
          ] : slug === 'ecommerce-development' ? [
            'We start by mapping out exactly what your online store needs to do. This means understanding your products, inventory systems, shipping requirements, and payment preferences. We also look at who\'s buying from you and what kind of shopping experience will convert them into customers.',

            'Once we know the requirements, we build your store from the ground up. This includes setting up the platform, migrating or entering your product catalog, configuring payment gateways, integrating shipping providers, and connecting any third-party tools you need. We test every part of the checkout process to make sure nothing breaks when real customers start buying.',

            'After launch, we monitor performance and fix issues as they come up. We track where customers drop off in the buying process and make adjustments to improve conversion rates. As your business grows, we add features, optimize load times, and help you handle increased traffic without the site slowing down.',
          ] : slug === 'seo-audits' ? [
            'We begin by gathering comprehensive data about your website using professional SEO tools including Screaming Frog, Ahrefs, SEMrush, and Google Search Console. This phase takes 3-5 business days and covers technical infrastructure, on-page optimization, content quality, backlink profile, and current search performance. We crawl your entire site to identify issues like broken links, duplicate content, slow-loading pages, and indexation problems. We also analyze your top-performing pages, keyword rankings, and organic traffic patterns to understand what\'s working and what isn\'t.',

            'Once we\'ve collected the data, we analyze every finding and assign priority scores based on potential impact and implementation difficulty. Not every SEO issue deserves immediate attention. A missing meta description on a low-traffic page matters less than a site-wide mobile usability problem or thin content on your homepage. We categorize issues into Quick Wins (high impact, easy to fix), High Priority (significant impact, moderate effort), Medium Priority (moderate impact or effort), and Low Priority (minor improvements). This scoring system ensures you spend time and resources on changes that actually move the needle.',

            'You\'ll receive a detailed PDF report with our findings, but we don\'t stop there. We schedule a 60-minute walkthrough call where we explain each recommendation, answer your questions, and discuss implementation strategies. If you have an internal team, we\'ll guide them on execution. If you need outside help, we\'ll clarify what skills are required. After delivery, you get 30 days of email support to address questions that come up during implementation. We\'re not handing you homework and vanishing. We\'re making sure you understand the audit and can take action on it.',
          ] : slug === 'conversion-optimization' ? [
            'We start by digging into your analytics to find where people are leaving. We review your conversion funnel, look at heat maps, watch session recordings, and identify the specific pages where visitors drop off. We check form abandonment rates, analyze user behavior patterns, and spot friction points in your checkout or signup process. This takes about a week. By the end, we have a list of specific problems that are costing you conversions.',

            'Then we create test variations for the highest-impact issues first. We write new headlines, redesign forms, test different page layouts, and change call-to-action placement. Each test runs until we have statistically significant results, usually two to four weeks depending on your traffic. We track everything: conversion rates, bounce rates, time on page, and revenue per visitor. We only move forward with changes that actually perform better, not what looks better.',

            'When a test wins, we implement it across your site. Then we move to the next test. This is ongoing work because there\'s always something else to optimize. After landing pages, we test product pages. After forms, we test checkout flows. We send you monthly reports showing what we tested, what won, what lost, and how much your conversion rate has improved. Most clients see measurable lift within 90 days.',
          ] : slug === 'website-maintenance' ? [
            'We start by auditing your entire site to see what software you\'re running and where potential problems might be hiding. We document every plugin, theme, and core platform version, then check for outdated code, security vulnerabilities, and compatibility issues. We set up automated backups that run daily, configure uptime monitoring to alert us if your site goes down, and establish a baseline for your site\'s performance metrics.',

            'Every week, we review available updates and install them on a staging copy of your site first to catch any conflicts before they go live. We run security scans to check for malware, suspicious files, and vulnerable code. If we find an issue, we fix it immediately and notify you. We test critical functionality after every update to make sure forms still submit, payments still process, and pages still load correctly.',

            'At the end of each month, you get a report showing what we updated, what security threats we blocked, your uptime percentage, and any issues we fixed. If something breaks or your site goes down, we get an instant alert and start working on it right away. You\'ll get a text or email within 15 minutes letting you know we\'re on it, and we\'ll keep you updated until it\'s resolved.',
          ] : slug === 'crm-implementation' ? [
            'We start by documenting how your sales and customer management process actually works today. We sit down with your team to understand how leads come in, who handles them, what information you track, and where things currently fall through the cracks. Then we map out what fields, stages, and automations you\'ll need in the CRM to support that process without forcing you to change how you work.',

            'Once we understand your needs, we build out the CRM to match. We create custom fields for the data you track, set up pipelines that reflect your actual sales stages, configure automations to reduce manual work, and migrate your existing contact data so nothing gets lost. We also connect the CRM to your other tools like email, calendar, marketing platforms, and any other software you use daily.',

            'After everything is built and tested, we train your team on how to use it. We run hands-on sessions covering daily tasks, show them where to find what they need, and answer questions as they come up. You get written documentation and video guides for reference. Once you\'re live, we stick around for the first few weeks to handle questions and make adjustments as your team settles into the new system.',
          ] : slug === 'marketing-automation' ? [
            'We start by mapping out your customer journey from first contact to purchase. We talk with your team to understand how leads typically move through your funnel, what actions signal interest, and where people tend to drop off. We identify the key moments where an automated email could provide value, answer a question, or move someone to the next step. This gives us a clear picture of what workflows need to exist and what each one should accomplish.',

            'Once we know what needs to happen, we build the actual workflows in your email platform. We set up the triggers that start each sequence, like form submissions, link clicks, or specific pages visited. We write the emails that go into each workflow, making sure the messaging matches where someone is in their journey. Then we configure the timing, conditions, and paths that determine who gets what message when. Before anything goes live, we test every workflow to make sure triggers fire correctly and emails send as expected.',

            'After launch, we monitor how each workflow performs. We track open rates, click rates, and conversions to see what\'s working and what isn\'t. We look at where people exit sequences and which messages get the best response. Based on that data, we make adjustments. We rewrite underperforming emails, adjust timing, refine segmentation rules, and add new branches to workflows as needed. The goal is continuous improvement, not a set-it-and-forget-it approach.',
          ] : slug === 'sales-funnel-automation' ? [
            'We start by sitting down with your sales team to understand how your deals actually close. We ask about the behaviors that predict when someone\'s ready to buy, the typical questions prospects ask before converting, and the engagement patterns that separate serious buyers from casual browsers. From there, we define what "qualified" means for your business and identify the specific actions that should move a lead closer to your sales team.',

            'Once we understand your sales process, we build the scoring model and automation rules in your CRM. We assign point values to different actions like email opens, content downloads, pricing page visits, or demo requests. We set up the triggers that automatically move leads between pipeline stages and configure notifications so your sales team gets alerted when someone hits your qualification threshold. Everything connects to your existing tools, so data flows automatically.',

            'After the system goes live, we track which scored leads actually turn into customers. We look at whether high-scoring leads convert better than low-scoring ones, whether the thresholds we set are catching the right people, and whether any signals we\'re tracking turn out to be meaningless. We adjust the scoring rules and notification triggers based on real conversion data, so the system gets more accurate over time.',
          ] : slug === 'lead-generation-systems' ? [
            'We start by mapping your current lead sources and sales process. Where do inquiries come from right now? What makes a lead qualified for your business? How does your sales team divide up work? We document your qualification criteria, territory assignments, service specialties, and any other factors that determine who should handle what. This becomes the blueprint for your system.',

            'Then we build it. We set up forms on your website, create landing pages for specific campaigns, configure chatbots for common questions, and connect everything to your CRM. We program the qualification rules so the system knows what to check for. We build the routing logic that assigns leads to the right people. We set up the automated responses that go out instantly when someone submits an inquiry. Everything gets tested to make sure leads flow through correctly.',

            'After launch, we monitor how the system performs. We check response times, review which leads are qualifying, and look for bottlenecks. If certain qualification criteria aren\'t working, we adjust them. If routing rules need refinement, we fix them. We meet monthly to review the numbers and optimize based on what\'s actually happening. The system gets better as it runs because we\'re constantly tuning it to match your real-world patterns.',
          ] : slug === 'pipeline-management' ? [
            'We start by looking at how your sales team actually works today. What are they using to track deals? Where do opportunities fall through the cracks? What information do they need but can\'t easily find? We\'ll walk through your current process step by step, talk to the people using it daily, and identify exactly where things break down. This isn\'t about forcing you into a new system. It\'s about understanding what you need so we can build something that fits.',

            'Next, we set up the structure. That means defining clear pipeline stages that match how you actually sell, not generic templates. We configure your CRM so every deal has the information you need to make decisions. Then we build dashboards that show you what matters: deals at risk, bottlenecks in the pipeline, conversion rates by stage, and who needs help. Everything gets tested with real data before your team touches it.',

            'After launch, we train your team on the new setup and make sure everyone knows how to use it. We monitor how it\'s performing in the first few weeks and adjust based on what we see. If a stage isn\'t working or a report needs tweaking, we fix it. You\'ll have someone to reach out to when questions come up, and we\'ll check in regularly to make sure the system keeps working as your business changes.',
          ] : slug === 'integration-services' ? [
            'We start by mapping out your current setup. What tools are you using? Where does your data live? What information needs to flow between systems? We\'ll audit your CRM, email platform, ad accounts, and analytics tools to understand where data is getting stuck or duplicated. Then we\'ll identify the connections that will actually save you time and give you clearer insights.',

            'Once we know what needs to connect, we build it. We set up API connections between your platforms, configure data fields so information maps correctly, and test every flow to make sure data moves accurately. If a platform doesn\'t have a native integration, we build custom solutions. We document everything so you understand what\'s connected and how it works.',

            'After launch, we monitor your integrations to catch issues before they cause problems. APIs change, platforms update, and connections can break. We maintain your integrations, fix anything that stops working, and adjust flows as your business needs change. You get ongoing support so your systems keep talking to each other without manual work on your end.',
          ] : slug === 'ai-strategy' ? [
            'We start by understanding how your business actually operates. Where do you spend the most time? What tasks eat up your team\'s capacity? What bottlenecks slow you down? We look at your workflows, talk to your team, and identify the specific problems AI could solve. Not everything needs AI. We\'re looking for places where automation or intelligence would save real time or unlock new capabilities you don\'t have today.',

            'Once we know where AI could help, we evaluate what tools and approaches make sense for your situation. We test options, compare capabilities, and look at what\'s proven versus what\'s experimental. Then we prioritize based on impact and feasibility. You get a roadmap that shows what to implement first, what resources you\'ll need, and what results to expect. No fluff, just a practical plan you can actually execute.',

            'After the strategy is set, we help you launch pilot implementations. We work with your team to get the first AI tools deployed, measure what\'s working, and adjust based on real results. You\'re not left with a document that sits on a shelf. We help you take the first steps, track the outcomes, and refine your approach as you learn what moves your specific metrics.',
          ] : slug === 'ai-chatbots' ? [
            'We start by looking at the questions your team answers every day. What do customers ask most often? Where do leads drop off? What support tickets keep coming in? We analyze your existing customer conversations, review your FAQ pages, and talk to your team to understand what needs to be automated. This gives us the foundation to build a chatbot that actually handles your real workload.',

            'Then we build and train your chatbot using your actual content, product information, and common scenarios. We connect it to your CRM, support desk, or booking system so it can take real actions, not just answer questions. Before launch, we test hundreds of conversation paths to make sure it responds naturally and knows when to hand off to a human. You review everything and we adjust based on your feedback.',

            'After launch, we monitor every conversation to see where the chatbot performs well and where it struggles. We refine responses based on real user interactions, add new answers for questions it couldn\'t handle, and update it as your business changes. You get monthly reports showing what topics came up most, how many leads were qualified, and where we improved the bot\'s performance.',
          ] : slug === 'ai-content-tools' ? [
            'We start by understanding what content you actually need and how you currently create it. We look at your brand voice, review your existing content, and figure out where the bottlenecks are. Then we map out which parts of your process AI can handle and which parts still need a human touch. This isn\'t about replacing your team. It\'s about giving them tools to work faster.',

            'Next, we configure the AI tools to match your brand voice and build workflows that fit how your team actually works. We create prompt templates for different content types, set up quality checks, and train your team on how to use everything. We test the outputs against your standards and refine the system until it consistently produces content that sounds like you. Everything is documented so your team can replicate the process.',

            'After launch, we monitor the quality of what\'s being produced and adjust the prompts based on what\'s working. We help you scale up gradually, adding more content types as your team gets comfortable with the system. You get monthly reports showing output volume, time saved, and quality metrics. If something isn\'t working, we fix it. The goal is to triple your content output without hiring more writers.',
          ] : slug === 'ai-personalization' ? [
            'We start by connecting to your analytics platforms and gathering behavioral data from your website visitors. This includes tracking patterns like pages viewed, time spent, scroll depth, form interactions, and conversion paths. We analyze this data to identify meaningful visitor segments and understand what content resonates with different types of users. From there, we map out personalization opportunities where showing tailored content could improve engagement and conversions.',

            'Next, we build AI models that learn from your visitor behavior and predict what content each user is most likely to engage with. These models consider factors like traffic source, device type, browsing behavior, past interactions, and demographic signals to determine the best content variations to display. We create multiple versions of key page elements (headlines, CTAs, images, product recommendations) and set up the system to automatically test and serve the most relevant version to each visitor.',

            'After implementing the personalization engine on your site, we run controlled tests to measure performance against your baseline. The AI continuously learns from new visitor data, refining its predictions and improving accuracy over time. We monitor results weekly, adjusting the models based on what\'s working and what isn\'t. You get monthly reports showing how personalized experiences are performing compared to generic content, plus recommendations for expanding personalization to new pages and segments.',
          ] : slug === 'predictive-analytics' ? [
            'We start by diving into your data to understand what matters most to your business. Whether it\'s predicting customer churn, forecasting sales, or identifying which leads are most likely to convert, we map out the specific outcomes you need to anticipate. We\'ll audit your existing data sources, identify gaps, and determine what additional information we need to build accurate predictions. This discovery phase ensures we\'re solving the right problems before we write a single line of code.',

            'Next, we build and train machine learning models tailored to your specific prediction needs. We test multiple algorithms to find what works best for your data, then train the models using historical patterns to predict future outcomes. Throughout this phase, we validate accuracy against real-world results, refining the models until they consistently deliver reliable predictions. You\'ll see exactly how accurate the models are and what factors drive each prediction, so there\'s no black box uncertainty.',

            'Once the models prove their accuracy, we integrate them into your existing systems and workflows. Predictions flow automatically to your CRM, dashboard, or wherever your team needs them. We set up monitoring to track model performance over time and retrain models as new data comes in, ensuring predictions stay accurate as your business evolves. You\'ll get regular reports showing prediction accuracy and recommendations for improvements based on what the models are learning.',
          ] : slug === 'custom-ai-solutions' ? [
            'We start by getting into the details of your specific challenge. What problem are you trying to solve? What data do you have? What outcomes do you need? Through discovery workshops and technical audits, we map out exactly what your custom AI solution needs to accomplish and identify any gaps in your current infrastructure. This phase is about understanding your unique situation so we can build something that actually fits.',

            'Next, we design and build your custom AI model from the ground up. Our team selects the right algorithms, trains the model on your data, and fine-tunes it until it delivers the results you need. We handle everything from data preparation and feature engineering to model architecture and validation testing. You get regular progress updates and the opportunity to test early versions so we can adjust as we go.',

            'Once your AI solution is ready, we integrate it into your existing systems and workflows. We don\'t just hand over code and walk away. You get comprehensive documentation, team training, and ongoing monitoring to ensure everything runs smoothly. We also provide maintenance and retraining as your data evolves, so your AI solution continues to perform as your business grows and changes.',
          ] : [
            `Our ${service.title.toLowerCase()} process isn't magic—it's methodical, proven, and designed to deliver results. We start with deep discovery to understand your business inside and out. Then we build a custom strategy that fits your goals, market, and budget.`,

            `From there, we execute with precision. Every tactic is tracked, every campaign is optimized, and every decision is backed by data. We're not here to throw spaghetti at the wall and see what sticks. We're here to implement what works, scale it aggressively, and continuously push for better performance.`,

            `You get complete transparency throughout the process—real-time dashboards, regular check-ins, and direct access to the team doing the work. No black boxes, no BS. Just a clear path from where you are to where you want to be.`,
          ]}
          checklist={approachChecklist}
          checklistColumns={1}
          buttonText="See Our Work"
          buttonHref="/work"
          imagePosition="left"
        />

        <LeadChange />

        <LeftRight
          imageSrc={service.images.whyExpand || service.images.card}
          imageAlt={`Why choose Expand for ${service.title}`}
          label="Why Expand"
          title="Why Businesses Choose Us"
          accordion={slug === 'strategy-growth' ? [
            {
              id: 1,
              title: "We've Done This Before",
              content: 'Our team has built growth strategies for SaaS companies, e-commerce stores, local businesses, and B2B services. We know what works in different industries because we\'ve tested it. When we recommend something, it\'s because we\'ve seen it produce results in similar situations. We don\'t experiment with your budget.'
            },
            {
              id: 2,
              title: 'We Focus on Revenue, Not Rankings',
              content: 'Ranking #1 for a keyword nobody searches is worthless. We focus on the metrics that affect your business: qualified traffic, conversion rates, and customer acquisition cost. If a tactic improves rankings but doesn\'t bring in customers, we stop doing it. If something works, we invest more in it.'
            },
            {
              id: 3,
              title: 'You\'ll Know What\'s Happening',
              content: 'You get monthly reports that show what we did, what results it produced, and what we\'re doing next. If you have questions, you talk directly to the person doing the work. If something isn\'t performing, we explain why and what we\'re changing. No jargon, no excuses, no hiding behind vanity metrics.'
            },
          ] : slug === 'social-media-marketing' ? [
            {
              id: 1,
              title: 'Experience That Shows in Results',
              content: 'Our team has managed social media for businesses in dozens of industries. We know what works on each platform because we\'ve tested it. When Instagram changes its algorithm or TikTok launches a new ad format, we learn it, test it, and figure out if it\'s worth using. You benefit from that experience without paying for the learning curve.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We Focus on Business Outcomes',
              content: 'Likes and followers are nice, but they don\'t pay the bills. We care about the metrics that matter to your business: leads generated, sales made, customers acquired. Every campaign we run is designed to drive those outcomes. If a tactic gets engagement but doesn\'t move the needle on your actual goals, we stop doing it.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You Work Directly With Your Team',
              content: 'The people in your kickoff meeting are the same people managing your account every day. You won\'t get handed off to junior staff or an offshore team. When you have a question or need something changed, you contact your account manager directly. They respond within a few hours, not a few days. This is how we work with every client.',
              image: service.images.desktop
            },
          ] : slug === 'content-marketing' ? [
            {
              id: 1,
              title: 'Writers Who Understand SEO',
              content: 'Most content writers focus on either creativity or technical SEO, but rarely both. Our writers are trained to do both. They know how to structure content for featured snippets, use keywords naturally, build internal link networks, and write in a way that keeps people reading. This means you get content that ranks well and actually converts visitors into customers.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Consistent Publishing Without the Hassle',
              content: 'The hardest part of content marketing isn\'t writing one great article. It\'s publishing quality content consistently, month after month. We handle the entire workflow so you don\'t have to chase writers, manage deadlines, or worry about gaps in your publishing schedule. You review and approve, we handle everything else.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Content That Stays Relevant',
              content: 'Most agencies write content and move on. We monitor how your content performs over time and update it when rankings drop or information becomes outdated. This keeps your content working for you long after it\'s published, instead of slowly becoming irrelevant. It\'s also more cost-effective than constantly creating new content from scratch.',
              image: service.images.desktop
            },
          ] : slug === 'email-marketing' ? [
            {
              id: 1,
              title: 'Email copywriting that actually converts',
              content: 'Most marketing emails sound like they were written by a committee. Ours sound like a person talking to another person. We write subject lines that get opened without being clickbait. We keep body copy short and scannable. We include one clear call-to-action per email. And we match the tone to your brand so it feels consistent with everything else you put out.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Deliverability expertise (getting to the inbox)',
              content: 'Great copy means nothing if your emails land in spam. We handle all the technical stuff: SPF records, DKIM signing, DMARC policies, IP warming, and sender reputation monitoring. We also know the unwritten rules that ISPs care about (engagement rates, spam complaints, list quality). We keep your emails out of the junk folder.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Automation setup that saves you time',
              content: 'We build email automations that run in the background and make you money while you sleep. Welcome sequences for new subscribers. Abandoned cart reminders. Post-purchase thank-yous. Re-engagement campaigns for inactive contacts. Birthday emails. Whatever fits your business model. Once they\'re set up and tested, they just work.',
              image: service.images.desktop
            },
          ] : slug === 'paid-advertising' ? [
            {
              id: 1,
              title: 'Campaign Setup and Platform Selection',
              content: 'We determine which advertising platforms make sense for your business based on your audience, budget, and goals. Then we build campaigns with proper structure, tracking pixels, conversion events, and audience targeting to ensure accurate measurement from day one.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Ad Creative and Copywriting',
              content: 'We create ad copy and visuals designed to capture attention and drive action. This includes writing headlines, body copy, and calls-to-action tailored to each platform\'s format, plus sourcing or creating images and videos that align with your brand and resonate with your target audience.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Testing and Optimization',
              content: 'We continuously test different audience segments, ad creatives, landing pages, and bidding strategies to improve performance. Based on the data, we shift budget away from what\'s not working and invest more in what\'s delivering results. This process happens throughout the campaign lifecycle to maximize your return on ad spend.',
              image: service.images.desktop
            },
          ] : slug === 'digital-pr' ? [
            {
              id: 1,
              title: 'Finding Stories That Journalists Actually Want',
              content: 'Most businesses think their product launch or company update is news. It\'s not. Journalists need stories their readers care about, which means original research, expert analysis on current events, or unique data that reveals something new. We help you develop these angles by looking at what\'s trending in your industry, what questions your audience is asking, and what insights only you can provide. Then we package it in a way that makes a journalist\'s job easier.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Building Real Relationships With Media',
              content: 'Digital PR isn\'t about blasting the same pitch to 500 journalists. It\'s about knowing who covers what, understanding their beat, and reaching out when you have something relevant for them. We build relationships by being helpful, not spammy. We follow reporters, read their work, and only pitch when we have a genuine story fit. This approach gets better results because journalists trust us and actually open our emails.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Turning Coverage Into Business Results',
              content: 'Press coverage does more than boost your ego. It builds authority, earns high-quality backlinks that improve your SEO, increases brand visibility, and drives referral traffic. We track all of this so you can see the actual impact. We measure domain authority of publications, link equity, traffic spikes from coverage, and how placements affect your search rankings. This data helps us prove ROI and improve future campaigns.',
              image: service.images.desktop
            },
          ] : slug === 'video-marketing' ? [
            {
              id: 1,
              title: 'We produce videos that match how people actually watch',
              content: 'Every platform has different viewing behaviors. YouTube audiences watch longer explanatory content. Instagram users scroll fast and need hooks in the first two seconds. LinkedIn viewers want professional credibility without corporate stiffness. We optimize each video for where it lives, not just create one version and blast it everywhere.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You get a dedicated producer who manages the entire workflow',
              content: 'One person coordinates everything from pre-production through final delivery. They handle scheduling, talent coordination, location logistics, feedback rounds, and file delivery. You have a single point of contact instead of juggling multiple vendors or trying to project-manage production yourself.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We repurpose content so one shoot produces weeks of material',
              content: 'A single filming day can generate multiple full-length videos, dozens of short-form clips, and platform-specific variations. We identify the best moments from your content and repackage them for different channels and formats. That means you get consistent video output without constant production cycles.',
              image: service.images.desktop
            },
          ] : slug === 'brand-strategy' ? [
            {
              id: 1,
              title: 'We Build Strategy From Real Research',
              content: 'Our brand strategies come from actual customer conversations and market data, not guesswork or generic frameworks. We interview your customers, analyze your competitors in detail, and involve your team in workshops to surface insights you might have missed. The result is a brand position that reflects reality and gives you a genuine edge in your market.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You Get Tools Your Team Will Actually Use',
              content: 'We\'ve seen too many brand strategy documents sit on shelves collecting dust. Everything we create is designed for daily use by your marketing, sales, and customer service teams. The messaging framework includes specific examples for different situations, and the voice guide shows real before-and-after writing samples. Your team gets clear direction they can apply immediately.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We Help You Implement, Not Just Plan',
              content: 'Strategy without execution is just theory. We work alongside your team as you start using the new brand framework in real campaigns and materials. This means reviewing drafts, answering questions about tone, and adjusting the guidelines based on what works in practice. You don\'t have to figure out implementation alone.',
              image: service.images.desktop
            },
          ] : slug === 'web-development' ? [
            {
              id: 1,
              title: 'We build for performance, not just aesthetics',
              content: 'Fast load times and smooth interactions aren\'t optional. We optimize images, minimize code, and structure databases efficiently so your site performs well even as traffic grows. Every project gets tested for speed before it goes live.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You get clear documentation and training',
              content: 'We don\'t leave you guessing how your website works. You\'ll receive documentation explaining key features and admin training tailored to your team\'s technical level. This means you can make updates and troubleshoot basic issues without calling us every time.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Our code is maintainable and scalable',
              content: 'We write clean, well-organized code that other developers can understand and build on. This matters when you want to add features later or need another team to take over. You\'re not locked into proprietary systems or messy code that\'s impossible to modify.',
              image: service.images.desktop
            },
          ] : slug === 'technical-seo' ? [
            {
              id: 1,
              title: 'We fix what actually matters first',
              content: 'Not all technical issues have the same impact on your rankings. We prioritize fixes based on what\'s genuinely hurting your visibility right now, not just what shows up in a tool report. You get the biggest improvements fastest instead of wasting time on low-priority tweaks that won\'t move the needle.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We work with your existing setup',
              content: 'Whether you\'re on WordPress, Shopify, Webflow, or a custom platform, we adapt to your technology instead of forcing you to change systems. If you have developers, we collaborate with them. If you don\'t, we handle the technical implementation directly when possible or clearly explain what needs to be done.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You get explanations, not just jargon',
              content: 'Technical SEO involves complex concepts, but we explain what\'s wrong and why it matters in plain language. Every recommendation in our audit includes what the issue is, how it affects your search performance, and what specifically needs to happen to fix it.',
              image: service.images.desktop
            },
          ] : slug === 'on-page-seo' ? [
            {
              id: 1,
              title: 'We optimize for humans first, search engines second',
              content: 'Your pages need to rank, but they also need to convert visitors once they arrive. We write title tags and meta descriptions that get clicks, not just rankings. Our content edits improve keyword targeting without making your pages read like they were written by a robot. The goal is better search visibility and better user experience, not one at the expense of the other.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We focus on pages that actually drive business results',
              content: 'Not every page on your site deserves the same attention. We prioritize optimizing pages that are closest to ranking on page one, pages that target high-value keywords, and pages that drive conversions. This means you see measurable improvements faster instead of wasting time on pages that won\'t impact your bottom line. We\'re focused on ROI, not just checking boxes.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You get full transparency on what we change and why',
              content: 'Every optimization comes with clear documentation. You\'ll know which pages we updated, what elements we changed, and the reasoning behind each decision. No mystery edits or vague reports. If a title tag gets rewritten or a header gets restructured, you\'ll see the before and after with an explanation of how it improves your rankings and click-through rates.',
              image: service.images.desktop
            },
          ] : slug === 'local-seo' ? [
            {
              id: 1,
              title: 'We Fix the Citations That Kill Your Rankings',
              content: 'Most businesses have a mess of incorrect citations scattered across the web with old phone numbers, wrong addresses, or misspelled business names. Search engines see these inconsistencies and don\'t trust your information. We find every citation, fix what\'s wrong, and build new ones on directories that actually matter for your industry and location.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Your Profile Stays Optimized and Active',
              content: 'Google Business Profiles get hacked, edited by competitors, or flagged for random violations. We monitor your profile daily and fix problems before they tank your visibility. We also post regular updates, add photos, and keep your profile active because Google rewards businesses that treat their profile like it matters.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We Track What Actually Matters for Local Search',
              content: 'Most agencies show you generic keyword rankings that don\'t reflect how people find local businesses. We track your visibility in the map pack for searches that include location terms and service names. You\'ll see exactly where you rank when someone in your area searches for what you offer, not just broad keywords that don\'t drive phone calls.',
              image: service.images.desktop
            },
          ] : slug === 'ecommerce-development' ? [
            {
              id: 1,
              title: 'We build for real transactions, not just traffic',
              content: 'Plenty of agencies can make a store that looks nice. We build e-commerce systems that handle actual sales without breaking. That means payment gateways that work reliably, checkout flows that reduce cart abandonment, and infrastructure that handles traffic spikes during promotions. Your store needs to process orders smoothly, not just attract browsers.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You get a system that works with your operations',
              content: 'Every business has different needs for inventory, shipping, and order management. We configure your e-commerce platform to match how you actually run your business, whether that\'s multi-location inventory, custom shipping rules, wholesale accounts, or subscription products. You won\'t have to force your operations into someone else\'s template.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We stick around after launch',
              content: 'E-commerce sites require ongoing maintenance. Payment processors update their APIs. Plugins need updates. Security patches need to be applied. We monitor your store for technical issues and handle updates so you can focus on selling instead of troubleshooting why the checkout stopped working. You also get access to our team when you need changes or have questions.',
              image: service.images.desktop
            },
          ] : slug === 'seo-audits' ? [
            {
              id: 1,
              title: 'Professional Tools Plus Manual Review',
              content: 'We use enterprise-grade SEO tools like Ahrefs, SEMrush, and Screaming Frog to collect data, but we don\'t just export automated reports and call it done. Our team manually reviews findings to eliminate false positives, identify issues that tools miss, and provide context that software can\'t. For example, a tool might flag duplicate content, but we\'ll determine whether it\'s actually a problem or an acceptable use case. You get accuracy, not just volume.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Clear Priorities, Not Just Lists',
              content: 'Most audits dump 200 issues on you with no guidance on where to start. We score every recommendation by potential impact and implementation difficulty, then organize them into Quick Wins, High Priority, Medium Priority, and Low Priority categories. You\'ll know exactly what to tackle first, what can wait, and what might not be worth doing at all. Our goal is to make your audit actionable, not overwhelming.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Support Beyond the Report',
              content: 'We don\'t deliver the audit and disappear. Every audit includes a 60-minute walkthrough call where we explain our findings, answer your questions, and discuss how to execute recommendations. After that, you get 30 days of email support for implementation questions. If something\'s unclear or you hit a roadblock, we\'re available to help. We want you to actually implement the audit, not let it collect dust.',
              image: service.images.desktop
            },
          ] : slug === 'conversion-optimization' ? [
            {
              id: 1,
              title: 'We test based on real problems, not guesses',
              content: 'We don\'t test random things to see what happens. We analyze your data first to find actual conversion barriers. If your form has a 60% abandonment rate, we know that\'s the problem to solve. If people leave on the pricing page, that\'s where we focus. Every test we run addresses a specific issue we found in your funnel, backed by analytics data.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We focus on high-impact changes first',
              content: 'Button color tests rarely move the needle. We prioritize tests that can actually change your conversion rate: headline messaging, value proposition clarity, form length and fields, page layout and flow. We start with the elements that have the biggest potential impact on revenue. If your checkout process loses half your customers, that\'s more important than testing CTA button text.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You see every test and every result',
              content: 'We share everything. You see what we\'re testing before we launch it. You get reports showing which variation won, which lost, and by how much. You know exactly what\'s running at any time. If a test fails, we tell you why and what we learned. You\'re never wondering what we\'re doing or whether it\'s working.',
              image: service.images.desktop
            },
          ] : slug === 'website-maintenance' ? [
            {
              id: 1,
              title: 'We fix problems before your customers notice them',
              content: 'Our monitoring catches issues while they\'re still small. If a plugin conflicts with an update, we see it on staging before it hits your live site. If your server starts slowing down, we get an alert before your visitors experience lag. If a security vulnerability gets discovered in software you\'re using, we patch it before anyone can exploit it. You never wake up to a broken website or angry customer emails about something that stopped working overnight.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You never have to remember to do maintenance',
              content: 'We handle everything on a set schedule without you having to think about it or approve each update. Updates happen every week. Backups run every night. Security scans run automatically. You don\'t need to track what needs updating, figure out if updates are compatible, or worry about whether your backups are actually working. It just happens in the background while you focus on running your business.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'When something breaks, we respond in minutes',
              content: 'If your site goes down or something critical breaks, our monitoring system alerts us immediately and we start troubleshooting right away. You\'ll hear from us within 15 minutes, usually sooner. We keep working until your site is back up, whether that\'s 2pm on a Tuesday or 2am on a Sunday. For critical issues affecting customers or revenue, we drop everything else and focus on getting you back online as fast as possible.',
              image: service.images.desktop
            },
          ] : slug === 'crm-implementation' ? [
            {
              id: 1,
              title: 'Built Around Your Process, Not a Template',
              content: 'Most CRM implementations force you into generic templates that don\'t match how your business actually works. We build yours from scratch based on your specific process, the data you track, and the workflow your team already uses. You get a system that supports how you sell, not one that makes you adapt to someone else\'s idea of how sales should work.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Clean, Accurate Data From Day One',
              content: 'A CRM is only useful if the data inside it is clean and complete. We don\'t just dump your existing contacts into the new system. We clean up duplicates, standardize formatting, fill in missing information where possible, and make sure everything imports correctly. You start with a solid foundation instead of spending months cleaning up bad data after launch.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Your Team Actually Adopts It',
              content: 'The biggest reason CRM projects fail is that nobody uses the system after it\'s built. We focus on adoption from the start by making the CRM easy to use, training your team properly, and showing them how it makes their jobs easier. When people understand how to use it and see the benefit, they actually log in and keep their data up to date.',
              image: service.images.desktop
            },
          ] : slug === 'marketing-automation' ? [
            {
              id: 1,
              title: 'We Build Workflows Around Your Actual Customer Journey',
              content: 'We don\'t use generic templates or one-size-fits-all sequences. We map out how your specific customers move from awareness to purchase, then build workflows that match that reality. Every trigger, message, and condition is based on your business model, your sales process, and your customer behavior. What works for a SaaS company won\'t work for an e-commerce store, so we start from scratch every time.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Your Automation Responds to Real Actions, Not Just Time Delays',
              content: 'Our workflows use behavioral triggers, not just "wait 3 days, send email" logic. If someone downloads a guide, visits your pricing page, clicks a specific link, or abandons a cart, the automation responds. This means your messages are relevant to what someone just did, which gets better engagement than time-based emails sent to everyone the same way. We set up the triggers, test them, and make sure they fire reliably.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We Monitor Performance and Make Ongoing Improvements',
              content: 'We don\'t build your automation and then disappear. We track how every workflow performs, look at the data each month, and make changes based on what we find. If a particular email has a low open rate, we rewrite the subject line. If people exit a sequence at a certain point, we adjust the messaging or timing. Marketing automation gets better over time when someone is actively managing it, and that\'s what we do.',
              image: service.images.desktop
            },
          ] : slug === 'sales-funnel-automation' ? [
            {
              id: 1,
              title: 'Scoring Built Around Your Buyers',
              content: 'We don\'t use generic scoring templates that treat every business the same. We build your lead scoring model around the specific actions your actual buyers take before they purchase. If your best customers always download case studies before booking calls, that signal gets weighted heavily. If webinar attendance doesn\'t predict conversions for you, we won\'t waste points on it. The result is a qualification system that reflects how your sales process actually works.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Your Sales Team Gets Real Opportunities',
              content: 'We set up the system so your sales team only hears from us when someone is genuinely ready for a conversation. No more chasing cold leads or following up with people who downloaded one ebook six months ago. The scoring thresholds we configure are based on behaviors that actually predict purchases in your business. When a notification goes out, it means someone has shown multiple buying signals and deserves immediate attention.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We Refine Based on What Converts',
              content: 'Most companies set up lead scoring once and never touch it again. We track which scored leads turn into actual customers and use that data to make the system smarter. If highly scored leads aren\'t converting, we adjust the criteria. If we notice patterns in your best customers that we\'re not tracking yet, we add those signals. The longer the system runs, the better it gets at identifying your real opportunities.',
              image: service.images.desktop
            },
          ] : slug === 'lead-generation-systems' ? [
            {
              id: 1,
              title: 'We\'ve Built This Before',
              content: 'We\'ve implemented lead generation systems for businesses managing inquiries across multiple channels. We know what breaks, what works, and what makes the difference between a system that helps and one that creates more work. You\'re getting experience, not experimentation.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Custom Rules, Not Templates',
              content: 'Every business qualifies leads differently. We don\'t force you into preset criteria or generic routing. We build qualification logic and routing rules that match your actual sales process, territories, and team structure. The system works the way you work.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We Stick Around to Optimize',
              content: 'Launch is just the start. We monitor your system\'s performance and meet with you monthly to review what\'s working and what needs adjustment. As your business changes, your lead system changes with it. You\'re not left managing this alone.',
              image: service.images.desktop
            },
          ] : slug === 'pipeline-management' ? [
            {
              id: 1,
              title: 'We\'ve built dozens of these systems',
              content: 'We\'ve set up pipeline management for B2B companies, agencies, and service businesses across different industries. We know what works because we\'ve seen what doesn\'t. Every mistake you\'re worried about making, we\'ve already fixed for someone else.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We start with how you sell, not the software',
              content: 'Most people try to bend their sales process to fit the CRM. We do the opposite. We learn how your team closes deals, then configure the tools around that. The system should support your process, not replace it with something foreign.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You get support after we build it',
              content: 'The system only works if your team uses it correctly. We don\'t just hand you a dashboard and disappear. We train your people, answer their questions, and fix issues as they come up. You\'ll have direct access to the person who built your setup.',
              image: service.images.desktop
            },
          ] : slug === 'integration-services' ? [
            {
              id: 1,
              title: 'We\'ve connected hundreds of marketing tools',
              content: 'We\'ve built integrations for agencies, SaaS companies, and ecommerce brands across every major platform. HubSpot, Salesforce, Marketo, Google Ads, Facebook, Shopify, you name it. We know which integrations work smoothly and which ones need workarounds.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We build for your actual workflow',
              content: 'We don\'t just connect tools because we can. We map your team\'s actual workflow first, then build integrations that match how you work. That means data appears where you need it, when you need it, without extra steps or manual exports.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You get real support when things break',
              content: 'Integrations break. Platforms update their APIs without warning. When something stops working, you need someone who can fix it fast. We monitor your connections, catch issues early, and fix problems before they disrupt your workflow.',
              image: service.images.desktop
            },
          ] : slug === 'ai-strategy' ? [
            {
              id: 1,
              title: 'We\'ve implemented AI in our own operations',
              content: 'We\'re not consultants who theorize about AI. We use it daily in our agency to automate client reporting, analyze campaign data, and streamline content production. We know what works because we\'ve tested it in real business conditions, not just read about it in whitepapers.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We separate signal from noise',
              content: 'The AI space is full of hype and half-baked tools. We focus on what\'s actually production-ready and proven. If a solution isn\'t reliable enough for real business use, we\'ll tell you. You get honest guidance about what\'s ready now versus what to watch for later.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'We measure results, not activity',
              content: 'Success isn\'t deploying AI tools. It\'s improving your metrics. We help you define what success looks like before you start, then track whether you\'re hitting those goals. If something isn\'t working, we adjust the approach until it does.',
              image: service.images.desktop
            },
          ] : slug === 'ai-chatbots' ? [
            {
              id: 1,
              title: 'We\'ve built chatbots for different industries',
              content: 'We\'ve deployed chatbots for e-commerce stores, SaaS companies, and service businesses. We know what works for lead qualification versus customer support. We\'ve seen which conversation patterns convert and which ones frustrate users, so we build on what actually performs.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'We build for handoffs, not full automation',
              content: 'Most chatbots fail because they try to handle everything. We design clear points where your bot escalates to a human, so customers get help instead of hitting dead ends. The goal is to handle the repetitive 80% automatically and route the complex 20% to your team with full context.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You get ongoing improvement, not just a launch',
              content: 'We don\'t build your chatbot and disappear. Every month we review conversation data, identify gaps, and update responses. As your business adds products or changes processes, we keep the bot current so it stays useful instead of becoming outdated.',
              image: service.images.desktop
            },
          ] : slug === 'ai-content-tools' ? [
            {
              id: 1,
              title: 'We\'ve built this for ourselves',
              content: 'We use AI tools to produce content for our own clients every day. We\'ve tested dozens of tools, learned what works and what doesn\'t, and built systems that actually scale. You\'re getting processes we\'ve already proven in production.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Quality controls are built in',
              content: 'AI can produce garbage if you let it. That\'s why we build quality checks into every workflow. Every piece of content gets scored against your brand standards before it goes live. If the AI drifts off brand, the system catches it.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You own everything we build',
              content: 'All the prompts, workflows, and documentation belong to you. Your team can run this system without us after the project ends. We\'re building you a system, not creating dependency.',
              image: service.images.desktop
            },
          ] : slug === 'ai-personalization' ? [
            {
              id: 1,
              title: 'We Build Models That Actually Fit Your Business',
              content: 'Most personalization platforms use generic algorithms that treat every website the same. We train custom AI models on your actual visitor data, so the system learns what works specifically for your audience and your conversion goals. The result is personalization that gets smarter over time and produces measurable improvements in engagement and revenue.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Real Testing, Not Just Guesswork',
              content: 'We don\'t just turn on personalization and hope it works. Every personalized experience runs against control versions so you can see exactly how much lift you\'re getting. We measure everything from micro-conversions like email signups to revenue impact, giving you clear data on ROI. If something isn\'t performing, we adjust or turn it off.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'You Keep Control of Your Content',
              content: 'The AI decides which content to show, but you decide what content exists. We don\'t automatically generate messaging or make changes without your approval. You review all content variations before they go live, and you can override the AI\'s decisions anytime. This keeps your brand voice consistent while still giving you the benefits of intelligent, automated personalization.',
              image: service.images.desktop
            },
          ] : slug === 'predictive-analytics' ? [
            {
              id: 1,
              title: 'We Build Models That Actually Work in Production',
              content: 'Many companies can build a predictive model in a lab environment, but getting it to work reliably with real business data is a different challenge. We focus on models that integrate cleanly with your existing systems and deliver consistent, actionable predictions your team can trust. Every model we deploy includes monitoring and retraining protocols to ensure accuracy doesn\'t degrade over time.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'You\'ll Understand How and Why Predictions Are Made',
              content: 'We don\'t hand you a black box and hope you trust it. Every predictive model comes with clear explanations of what factors drive each prediction and how confident the model is in its forecast. Your team will understand not just what the model predicts, but why, which helps you make better decisions and builds confidence in using the predictions day to day.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Ongoing Refinement Based on Real Performance',
              content: 'Predictive models need to evolve as your business and market conditions change. We don\'t just build your models and disappear. We monitor how predictions perform against actual outcomes, identify when accuracy starts to slip, and retrain models with fresh data. You\'ll get regular updates on model performance and recommendations for improvements based on what\'s working and what\'s not.',
              image: service.images.desktop
            },
          ] : slug === 'custom-ai-solutions' ? [
            {
              id: 1,
              title: 'Built for Your Exact Needs',
              content: 'Off-the-shelf AI tools can\'t solve every problem. We build custom solutions when your challenge is unique and requires a model trained on your specific data and processes. Whether you need to automate a complex workflow, analyze specialized datasets, or create something that doesn\'t exist yet, you get an AI solution designed around your requirements, not generic features.',
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: 'Full Transparency Throughout Development',
              content: 'AI development doesn\'t have to be a black box. We keep you involved at every stage, from initial design to final deployment. You\'ll understand how your model works, why we made specific technical decisions, and what the performance metrics actually mean. No confusing jargon, no surprises, just clear communication about what we\'re building and how it will help your business.',
              image: service.images.card
            },
            {
              id: 3,
              title: 'Support That Lasts Beyond Launch',
              content: 'AI models need care and feeding to stay effective. We don\'t disappear after deployment. You get ongoing monitoring to catch performance issues early, regular retraining to keep your model accurate as conditions change, and quick responses when something needs adjustment. Your custom AI solution stays relevant and continues delivering results as your business evolves.',
              image: service.images.desktop
            },
          ] : [
            {
              id: 1,
              title: "💡 We Actually Know What We're Doing",
              content: `No junior teams learning on your dime. No outdated playbooks from 2015. Our ${service.title.toLowerCase()} specialists are battle-tested experts who've delivered results across hundreds of campaigns. We stay ahead of trends, test new tactics constantly, and bring that knowledge to every engagement. When algorithms change, we adapt. When markets shift, we pivot. You get expertise that's always current, always effective.`,
              image: service.images.thumbnail
            },
            {
              id: 2,
              title: '🚀 Results Over Vanity Metrics',
              content: `We don't care about making reports look pretty if the numbers don't back it up. Our focus is singular: driving real business growth. Revenue. Leads. Conversions. The metrics that actually impact your bottom line. Everything we do—every strategy, every tactic, every optimization—is designed to move those numbers in the right direction. And we're relentless about it.`,
              image: service.images.card
            },
            {
              id: 3,
              title: '🤝 True Partnership, Not Just Vendor Relationship',
              content: `We're not here to bill hours and ghost you between meetings. When you work with Expand, you get a dedicated team that's genuinely invested in your success. We celebrate your wins, troubleshoot your challenges, and treat your business like our own. Regular communication, proactive problem-solving, and complete transparency. That's how real partnerships work.`,
              image: service.images.desktop
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Let's Talk"
          buttonHref="/contact"
          imagePosition="right"
        />

        <RecommendedByLeaders />
        <FAQ items={faqItems} />
        <Blogs />
        <ExpandReady />
        <Footer />
      </main>
    </>
  );
}
