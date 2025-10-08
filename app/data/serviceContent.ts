/**
 * UNIQUE SERVICE CONTENT
 * Contains all unique content for each service page
 */

export interface ServiceContent {
  paragraphs: string[];
  serviceCards: {
    title: string;
    description: string;
  }[];
  faqItems: {
    id: number;
    question: string;
    answer: string;
  }[];
  checklist: {
    text: string;
  }[];
}

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  // ============================================
  // MARKETING SERVICES
  // ============================================
  'strategy-growth': {
    paragraphs: [
      "Most businesses throw tactics at the wall hoping something sticks. They run ads here, post content there, maybe try some SEO, but it's all disconnected. No strategy. No plan. Just noise. That's where we come in. Our Search & Growth Strategy service is about connecting the dots—taking your goals, your market, your competitors, and your resources, then building a roadmap that actually makes sense.",
      "We start by figuring out where you are right now. What's working? What's not? Where are the opportunities hiding? We dig into your data, study your competitors, talk to your team, and identify the gaps. Then we map out exactly how to fill them. This isn't about chasing trends or copying what everyone else does. It's about finding what works specifically for your business and your customers.",
      "From there, we prioritize. Quick wins first—the stuff that moves the needle fast. Then we layer in long-term growth tactics that compound over time. You get a clear, actionable plan with timelines, responsibilities, and benchmarks. No fluff. No theory. Just practical steps that drive traffic, generate leads, and grow revenue.",
      "The best part? We don't just hand you a document and disappear. We stick around to help execute, optimize, and adjust as things change. Because strategy isn't static—it evolves. And we evolve with you."
    ],
    serviceCards: [
      {
        title: "🎯 Deep Discovery & Analysis",
        description: "We kick things off by understanding your business inside out. Who are your customers? What do your competitors do well (and where do they fall short)? What's your current traffic and conversion situation? We analyze everything—your site, your market, your messaging—so we have a complete picture before we build your strategy."
      },
      {
        title: "🚀 Custom Growth Roadmap",
        description: "Based on our research, we create a multi-channel growth plan tailored to your goals. This includes SEO priorities, content strategy, paid ad recommendations, conversion tactics, and more. Every piece connects to drive measurable growth. You'll know exactly what to do, when to do it, and why it matters."
      },
      {
        title: "📊 Execution & Optimization",
        description: "Strategy without execution is just a pretty deck. We help implement the plan, track performance against your KPIs, and continuously refine based on real data. As the market shifts, we adjust. As new opportunities emerge, we capitalize. Your growth strategy stays relevant and effective."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How is this different from just running ads or doing SEO?",
        answer: "Those are tactics. Strategy is the plan that makes those tactics work together. We don't just run campaigns—we figure out which channels make sense for you, how they fit together, and how to maximize ROI across everything you do. It's holistic, not siloed."
      },
      {
        id: 2,
        question: "How long does it take to see results?",
        answer: "Depends on your starting point and goals. We typically identify quick wins within the first 30 days—things like conversion optimization or targeting adjustments that deliver immediate impact. Longer-term strategies like SEO and content marketing build momentum over 3-6 months. We balance both for sustainable growth."
      },
      {
        id: 3,
        question: "Do you handle implementation, or just planning?",
        answer: "Both. We build the strategy and then work with you to execute it. Some clients have internal teams we collaborate with. Others want us to handle everything. We're flexible and adapt to what makes sense for your situation."
      },
      {
        id: 4,
        question: "What if our market changes or our goals shift?",
        answer: "Strategy evolves. We build in regular review cycles (usually monthly or quarterly) to assess performance, identify new opportunities, and adjust the plan as needed. You're never locked into something that isn't working."
      },
      {
        id: 5,
        question: "How do you measure success?",
        answer: "By the metrics that matter to your business. For some clients, it's revenue and leads. For others, it's traffic, engagement, or brand awareness. We define clear KPIs upfront and track them relentlessly. You'll see exactly what's working, what isn't, and where we're headed."
      }
    ],
    checklist: [
      { text: "✓ Comprehensive market and competitor analysis" },
      { text: "✓ Customer research and persona development" },
      { text: "✓ Multi-channel growth strategy tailored to your goals" },
      { text: "✓ SEO, content, and paid media roadmap" },
      { text: "✓ Conversion optimization priorities" },
      { text: "✓ Implementation support and ongoing optimization" },
      { text: "✓ Monthly performance reviews and strategy adjustments" }
    ]
  },

  'social-media-marketing': {
    paragraphs: [
      "Social media isn't about posting pretty pictures and hoping for likes. It's about building real relationships with your audience, starting conversations that matter, and turning followers into customers. That's what our Social Media Marketing service delivers—strategy-driven content that resonates, engages, and converts.",
      "We start by understanding your brand voice, your audience, and your goals. Are you trying to build awareness? Drive traffic? Generate leads? Each goal requires a different approach. We craft platform-specific strategies for Instagram, LinkedIn, TikTok, Facebook, Twitter—wherever your audience hangs out—and create content that fits the vibe of each platform while staying true to your brand.",
      "But content is only half the battle. Consistency, timing, engagement, and community management are just as important. We handle it all. From content calendars to posting schedules, from responding to comments to running paid social campaigns that amplify your reach, we make sure your social presence is active, authentic, and effective.",
      "And we track everything. Engagement rates, click-throughs, conversions, audience growth—you'll see exactly what's working and where we're optimizing. Social media moves fast, and we move with it."
    ],
    serviceCards: [
      {
        title: "🎯 Platform Strategy & Content Planning",
        description: "Every platform is different. What works on LinkedIn flops on TikTok. We build custom strategies for each platform based on where your audience spends time and what content performs best. You get a content calendar that maps out posts, campaigns, and themes aligned with your business goals."
      },
      {
        title: "🚀 Content Creation & Community Management",
        description: "Great content gets attention. Great engagement builds loyalty. We create scroll-stopping visuals, videos, and copy that fit your brand, then manage your community by responding to comments, DMs, and mentions. Your audience feels heard, and your brand stays top of mind."
      },
      {
        title: "📊 Paid Social & Performance Tracking",
        description: "Organic reach is great, but paid social accelerates growth. We run targeted ad campaigns on Meta, LinkedIn, TikTok, and more to expand your reach and drive conversions. Plus, we track every metric that matters—engagement, traffic, leads, sales—so you know exactly what your social presence delivers."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "Which platforms should we focus on?",
        answer: "Depends on your audience and goals. B2B companies often see great results on LinkedIn. E-commerce brands crush it on Instagram and TikTok. We analyze where your customers are and recommend the platforms that make the most sense for your business."
      },
      {
        id: 2,
        question: "Do you create all the content, or do we need to provide it?",
        answer: "We handle everything—writing, graphics, videos, scheduling. If you have brand assets or ideas, we'll use them. If not, we create from scratch. Either way, you approve everything before it goes live."
      },
      {
        id: 3,
        question: "How often should we post?",
        answer: "Quality over quantity, but consistency matters. Most platforms reward regular posting. We typically recommend 3-5 times per week on key platforms, adjusted based on what your audience engages with. We optimize frequency based on performance."
      },
      {
        id: 4,
        question: "Can you help with influencer partnerships or UGC?",
        answer: "Absolutely. We can identify relevant influencers, manage partnerships, and incorporate user-generated content into your strategy. Influencer marketing and UGC build trust and expand reach when done right."
      },
      {
        id: 5,
        question: "How do you measure ROI from social media?",
        answer: "We track engagement metrics (likes, comments, shares), traffic to your site, lead generation, and conversions. For paid social, we measure cost per click, cost per lead, and return on ad spend. You'll see exactly what your investment delivers."
      }
    ],
    checklist: [
      { text: "✓ Multi-platform social media strategy" },
      { text: "✓ Custom content creation (posts, graphics, videos)" },
      { text: "✓ Content calendar and scheduling" },
      { text: "✓ Community management and engagement" },
      { text: "✓ Paid social ad campaigns (Meta, LinkedIn, TikTok)" },
      { text: "✓ Influencer partnerships and UGC integration" },
      { text: "✓ Performance tracking and monthly reporting" }
    ]
  },

  'content-marketing': {
    paragraphs: [
      "Content marketing isn't about churning out blog posts nobody reads. It's about creating valuable, engaging content that answers questions, solves problems, and builds trust with your audience. When done right, content becomes your best salesperson—working 24/7 to attract, educate, and convert customers.",
      "We start with strategy. What are your customers searching for? What problems keep them up at night? What questions do they have before buying? We research keywords, analyze search intent, and map out topics that align with your customer journey. Then we create content that actually ranks in search engines and resonates with real people.",
      "Our content isn't generic fluff. It's well-researched, expertly written, and optimized for both readers and search engines. Blog posts, guides, case studies, whitepapers, landing pages—whatever format fits your goals. We handle everything from research to writing to optimization, delivering content that positions you as the expert in your space.",
      "And we don't stop at publishing. We promote your content through email, social, and outreach. We track performance, identify what's working, and double down. Over time, your content library becomes a growth engine—driving traffic, generating leads, and building authority that compounds month after month."
    ],
    serviceCards: [
      {
        title: "🎯 Content Strategy & Planning",
        description: "We research your audience, analyze competitors, and identify content gaps. Then we build a content roadmap aligned with your goals—topics that rank in search, answer customer questions, and move prospects through your funnel. Every piece has a purpose."
      },
      {
        title: "🚀 Expert Content Creation",
        description: "Our writers craft content that's valuable, engaging, and optimized. Blog posts, guides, case studies, landing pages—whatever you need. We handle research, writing, editing, and SEO optimization so your content ranks well and converts readers into customers."
      },
      {
        title: "📊 Promotion & Performance Tracking",
        description: "Great content needs eyeballs. We promote through email, social, and outreach. Then we track performance—traffic, rankings, engagement, conversions—and refine our approach based on what's working. Your content library becomes a long-term growth asset."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How often should we publish new content?",
        answer: "Consistency matters more than frequency. Most clients see strong results publishing 2-4 high-quality pieces per month. We focus on creating content that drives results, not hitting arbitrary quotas. Quality always beats quantity."
      },
      {
        id: 2,
        question: "Do you handle all the writing, or do we need to contribute?",
        answer: "We handle everything—research, writing, editing, optimization. If you have subject matter experts who want to contribute insights, we can interview them and turn that into content. But you don't need to write a word if you don't want to."
      },
      {
        id: 3,
        question: "How long until we see results from content marketing?",
        answer: "Content is a long-term play. You'll start seeing traffic within 2-3 months as content gets indexed and starts ranking. Momentum builds over time—most clients see significant growth around the 6-month mark as their content library expands and authority builds."
      },
      {
        id: 4,
        question: "What types of content do you create?",
        answer: "Blog posts, guides, case studies, whitepapers, landing pages, pillar content, product descriptions—basically anything written. We tailor content types to your goals and audience preferences."
      },
      {
        id: 5,
        question: "How do you ensure content ranks in search engines?",
        answer: "We optimize every piece for SEO—keyword research, search intent alignment, proper structure, internal linking, meta data. Plus, we create content that actually answers questions and provides value, which is what Google rewards."
      }
    ],
    checklist: [
      { text: "✓ Comprehensive content strategy and planning" },
      { text: "✓ Keyword research and topic ideation" },
      { text: "✓ Professional content writing and editing" },
      { text: "✓ SEO optimization (on-page, keywords, structure)" },
      { text: "✓ Content promotion via email and social" },
      { text: "✓ Performance tracking and analytics" },
      { text: "✓ Monthly content calendar and reporting" }
    ]
  },

  'email-marketing': {
    paragraphs: [
      "Email isn't dead—it's one of the highest ROI marketing channels available. But here's the thing: nobody wants another generic blast in their inbox. People want emails that feel personal, relevant, and valuable. That's what we create—email campaigns that people actually open, read, and act on.",
      "We start by understanding your audience and segmenting your list. Not everyone should get the same message. New subscribers need nurturing. Past customers need re-engagement. Hot leads need that final push. We build segmented campaigns that send the right message to the right person at the right time.",
      "Then we design emails that look great and drive action. Compelling subject lines that boost opens. Clean design that looks perfect on any device. Copy that speaks to your audience and drives clicks. Clear CTAs that convert. And we A/B test everything—subject lines, send times, content, design—to continuously improve performance.",
      "Plus, we build automated flows that work while you sleep. Welcome sequences for new subscribers. Abandoned cart recovery for e-commerce. Lead nurturing drips that move prospects closer to buying. Email automation turns one-time effort into ongoing revenue."
    ],
    serviceCards: [
      {
        title: "🎯 Email Strategy & List Segmentation",
        description: "We analyze your audience and segment your list based on behavior, interests, and stage in the customer journey. Then we map out email campaigns and automation flows designed to nurture relationships, drive engagement, and increase conversions. Every email serves a purpose."
      },
      {
        title: "🚀 Campaign Design & Copywriting",
        description: "Our team designs beautiful, mobile-responsive emails and writes copy that gets clicks. We craft subject lines that boost open rates, body copy that keeps people reading, and CTAs that drive action. Every element is tested and optimized for maximum performance."
      },
      {
        title: "📊 Automation & Performance Tracking",
        description: "We build automated email flows that nurture leads, recover abandoned carts, re-engage inactive subscribers, and more. Then we track everything—open rates, click rates, conversions, revenue—and continuously optimize based on data. Your email program becomes a reliable growth channel."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How often should we send emails?",
        answer: "Depends on your audience and content. Most B2C brands do well with weekly emails. B2B often works better with bi-weekly or monthly. We test frequency and adjust based on engagement. Consistency matters, but so does not overwhelming your list."
      },
      {
        id: 2,
        question: "What's a good open rate?",
        answer: "Industry average is 15-25%, but it varies by industry and list quality. We focus on improving YOUR baseline through better subject lines, segmentation, and send time optimization. Good email marketing isn't about hitting benchmarks—it's about continuous improvement."
      },
      {
        id: 3,
        question: "Can you help grow our email list?",
        answer: "Absolutely. We build lead magnets, landing pages, and opt-in strategies that attract subscribers. Plus, we make sure you're capturing emails at every touchpoint—website, checkout, social media. Growing a quality list is part of our email strategy."
      },
      {
        id: 4,
        question: "What email platform do you work with?",
        answer: "We work with all major platforms—Mailchimp, Klaviyo, HubSpot, ActiveCampaign, ConvertKit, and more. If you have a platform, we can use it. If not, we'll recommend the best fit for your needs and budget."
      },
      {
        id: 5,
        question: "How do you ensure emails don't go to spam?",
        answer: "We follow email best practices—proper authentication (SPF, DKIM, DMARC), clean list management, avoiding spam triggers, maintaining good sender reputation. Plus, we use preview tools to test emails across providers before sending."
      }
    ],
    checklist: [
      { text: "✓ Email strategy and audience segmentation" },
      { text: "✓ Campaign design and mobile optimization" },
      { text: "✓ Compelling copywriting and subject lines" },
      { text: "✓ A/B testing and optimization" },
      { text: "✓ Automated email flows (welcome, nurture, cart recovery)" },
      { text: "✓ List growth strategies and lead magnets" },
      { text: "✓ Performance tracking and deliverability monitoring" }
    ]
  },

  'paid-advertising': {
    paragraphs: [
      "Paid advertising isn't about throwing money at platforms and hoping for results. It's about strategic targeting, compelling creative, and relentless optimization. Every dollar should work harder than the last. That's our approach—data-driven campaigns that deliver measurable ROI.",
      "We run ads across Google, Meta (Facebook/Instagram), LinkedIn, YouTube, and more. But we don't just turn on campaigns and let them run. We start with research—understanding your audience, analyzing competitors, identifying high-intent keywords and demographics. Then we build campaigns designed to reach the right people at the right moment.",
      "Our creative doesn't suck. We write ad copy that stops scrolls and drives clicks. We design visuals and videos that capture attention. We test headlines, images, CTAs, and landing pages to find what converts best. And we optimize constantly—adjusting bids, refining targeting, killing underperformers, and scaling winners.",
      "You get complete transparency. Real-time dashboards show exactly where your budget goes and what it returns. We track cost per click, cost per lead, conversion rates, and ROAS. If something isn't working, we fix it fast. If something's crushing it, we pour gas on it."
    ],
    serviceCards: [
      {
        title: "🎯 Strategy & Audience Research",
        description: "We research your ideal customers, analyze competitor ads, and identify the best platforms and targeting strategies. Then we build campaigns optimized for your goals—whether that's awareness, leads, or sales. Every campaign is backed by data and built for performance."
      },
      {
        title: "🚀 Ad Creative & Campaign Management",
        description: "We create ad copy, visuals, and videos that capture attention and drive action. Then we launch campaigns across Google, Meta, LinkedIn, YouTube, and other platforms. We manage bids, budgets, and targeting, continuously optimizing for better performance and lower costs."
      },
      {
        title: "📊 Testing & ROI Optimization",
        description: "We A/B test everything—headlines, images, audiences, landing pages. We track metrics obsessively and optimize based on data. You see exactly what you're spending and what you're getting. Our goal is simple: maximize your return on ad spend."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How much should we budget for paid ads?",
        answer: "Depends on your goals, industry, and competition. Some businesses see great results with $2-5K/month. Others need $20K+ to compete. We assess your situation and recommend a budget that gives you room to test, learn, and scale."
      },
      {
        id: 2,
        question: "Which platform is best for our business?",
        answer: "Depends on your audience and goals. Google Ads captures high-intent search traffic. Meta (Facebook/Instagram) excels at awareness and retargeting. LinkedIn works for B2B. We analyze where your customers are and recommend the best fit."
      },
      {
        id: 3,
        question: "How quickly will we see results?",
        answer: "Google Ads can drive traffic immediately. Social ads take a bit longer as algorithms learn. Most campaigns show promising data within 2-4 weeks and hit stride around 60-90 days as we optimize based on performance."
      },
      {
        id: 4,
        question: "What if our ads aren't performing?",
        answer: "We monitor daily and adjust fast. If something isn't working, we test new creative, refine targeting, adjust bids, or pause underperformers. Continuous optimization is built into our process."
      },
      {
        id: 5,
        question: "How do you measure success?",
        answer: "By metrics that matter—cost per lead, cost per acquisition, conversion rates, return on ad spend. We define clear KPIs upfront and track them relentlessly. You'll always know exactly what you're getting for your investment."
      }
    ],
    checklist: [
      { text: "✓ Multi-platform ad strategy (Google, Meta, LinkedIn, YouTube)" },
      { text: "✓ Audience research and targeting" },
      { text: "✓ Ad creative development (copy, visuals, video)" },
      { text: "✓ Campaign setup and management" },
      { text: "✓ A/B testing and optimization" },
      { text: "✓ Landing page recommendations" },
      { text: "✓ Real-time performance tracking and reporting" }
    ]
  },

  // Continue with remaining services...
  'digital-pr': {
    paragraphs: [
      "Getting mentioned in the right places builds credibility faster than anything else. When Forbes, TechCrunch, or industry publications feature your brand, people pay attention. That's the power of digital PR—strategic media placements that boost authority, build backlinks, and drive visibility.",
      "We don't spam journalists with generic pitches. We craft newsworthy stories worth covering. Product launches, expert insights, data-driven research, industry trends—we find angles that resonate with media and secure placements that matter. Every campaign is designed to generate coverage that elevates your brand.",
      "Plus, digital PR builds SEO gold. Media placements create authoritative backlinks that boost your domain authority and search rankings. It's PR that delivers both brand awareness and technical SEO benefits. The coverage compounds—better rankings drive more traffic, which drives more opportunities for links and mentions.",
      "You get strategic outreach, relationship building with journalists, and campaigns that generate real coverage. We track everything—placements secured, backlinks earned, traffic driven, domain authority improvements. Digital PR becomes a growth engine, not just a vanity play."
    ],
    serviceCards: [
      {
        title: "🎯 Story Development & Media Strategy",
        description: "We identify newsworthy angles about your brand, develop compelling story pitches, and map out media targets. From product launches to expert commentary, we create stories that journalists actually want to cover."
      },
      {
        title: "🚀 Journalist Outreach & Relationship Building",
        description: "We pitch your stories to relevant journalists, bloggers, and media outlets. We build genuine relationships (not just blast emails) and secure placements in publications that matter to your audience and industry."
      },
      {
        title: "📊 Link Building & Brand Monitoring",
        description: "Every media placement we secure includes backlinks that boost your SEO. We track all coverage, monitor brand mentions, and measure the impact on your domain authority, traffic, and search rankings."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How long does it take to get media coverage?",
        answer: "Varies based on your story and the media landscape. Some pitches land coverage within weeks. Others take months of relationship building. We focus on consistent, strategic outreach that generates placements over time."
      },
      {
        id: 2,
        question: "What types of media outlets do you target?",
        answer: "Depends on your goals. Major publications (Forbes, Entrepreneur, etc.) for brand credibility. Industry blogs and niche sites for targeted backlinks. Local media for geographic visibility. We tailor targets to your needs."
      },
      {
        id: 3,
        question: "Do we need something newsworthy to get coverage?",
        answer: "Sort of. We help you identify what's newsworthy about your business—unique insights, data, trends you're seeing, expert perspectives. If you don't have something obvious, we help create it through research, surveys, or thought leadership."
      },
      {
        id: 4,
        question: "How does digital PR help SEO?",
        answer: "Media placements create high-authority backlinks, which improve your domain authority and search rankings. Plus, increased brand mentions signal credibility to search engines. It's one of the most effective (and natural) link building strategies."
      },
      {
        id: 5,
        question: "Can you guarantee specific placements?",
        answer: "No one can guarantee specific placements (that's not how ethical PR works). But we can guarantee strategic outreach, strong pitches, and consistent effort to secure quality coverage over time."
      }
    ],
    checklist: [
      { text: "✓ Newsworthy angle development and story creation" },
      { text: "✓ Media list building and journalist research" },
      { text: "✓ Strategic pitch crafting and outreach" },
      { text: "✓ Relationship building with journalists and editors" },
      { text: "✓ Media placement tracking and link monitoring" },
      { text: "✓ Domain authority and SEO impact measurement" },
      { text: "✓ Monthly coverage reports and analytics" }
    ]
  },

  'video-marketing': {
    paragraphs: [
      "Video dominates attention. Whether it's YouTube, TikTok, Instagram Reels, or LinkedIn videos, people consume video content more than anything else. If you're not leveraging video, you're leaving growth on the table. We help brands create video strategies and content that capture attention, tell stories, and drive results.",
      "We don't just make pretty videos. We build video strategies aligned with your goals. Awareness? We create engaging content for YouTube and social. Education? We develop tutorials and explainers. Conversion? We produce product demos and testimonials. Every video serves a purpose in your marketing funnel.",
      "Our team handles everything—scripting, filming, editing, optimization. Short-form content for TikTok and Reels. Long-form content for YouTube. Ads that stop scrolls. Behind-the-scenes content that builds connection. We create videos that fit each platform's vibe while staying true to your brand.",
      "And we don't just publish and hope for the best. We optimize for discovery—YouTube SEO, hashtag strategy, platform best practices. We track performance, identify what resonates, and create more of what works. Video becomes a consistent growth channel, not a one-off experiment."
    ],
    serviceCards: [
      {
        title: "🎯 Video Strategy & Planning",
        description: "We map out your video content strategy based on your goals, audience, and platforms. From YouTube to TikTok to LinkedIn, we plan content that fits each platform and moves people through your funnel."
      },
      {
        title: "🚀 Production & Editing",
        description: "We handle scripting, filming (on-site or remote), editing, and post-production. Whether it's polished brand videos, scrappy social content, or product demos, we create videos that look professional and drive engagement."
      },
      {
        title: "📊 Optimization & Growth",
        description: "We optimize videos for each platform—YouTube SEO, TikTok trends, LinkedIn best practices. We track performance, analyze what's working, and refine our approach to grow your audience and drive results."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "What types of videos should we create?",
        answer: "Depends on your goals. Brand awareness? Engaging stories and how-tos. Lead generation? Educational content and demos. Sales? Testimonials and product showcases. We recommend a mix based on what your audience responds to."
      },
      {
        id: 2,
        question: "Do we need professional equipment?",
        answer: "Not necessarily. We can work with what you have (even smartphones). Or we can handle full production with professional equipment. We tailor the production level to your budget and needs."
      },
      {
        id: 3,
        question: "Which platforms should we focus on?",
        answer: "YouTube for long-form and search visibility. TikTok and Instagram Reels for short-form virality. LinkedIn for B2B thought leadership. We recommend platforms based on where your audience is and what content types fit your brand."
      },
      {
        id: 4,
        question: "How often should we post videos?",
        answer: "Consistency matters. YouTube often rewards weekly uploads. TikTok and Reels benefit from multiple posts per week. We build a content calendar that's ambitious but sustainable for your team."
      },
      {
        id: 5,
        question: "How do you measure video success?",
        answer: "Views, watch time, engagement (likes, comments, shares), click-through rates, and conversions. We track what matters for your goals—whether that's awareness, traffic, leads, or sales."
      }
    ],
    checklist: [
      { text: "✓ Multi-platform video strategy" },
      { text: "✓ Scripting and storyboarding" },
      { text: "✓ Professional video production and editing" },
      { text: "✓ YouTube SEO and optimization" },
      { text: "✓ Short-form content for TikTok, Reels, Shorts" },
      { text: "✓ Performance tracking and analytics" },
      { text: "✓ Content calendar and posting schedule" }
    ]
  },

  'brand-strategy': {
    paragraphs: [
      "Your brand isn't your logo. It's how people feel when they interact with your business. It's the promise you make and the experience you deliver. Strong brands stand out. Weak brands blend in. We help you build a brand that resonates, differentiates, and drives loyalty.",
      "We start with discovery. What makes you different? What do you stand for? Who are you trying to reach, and what do they care about? We dig deep to understand your values, your positioning, and your competitive landscape. Then we articulate what makes you unique in a way that's clear, compelling, and consistent.",
      "From there, we develop your brand messaging—your story, your value propositions, your tone of voice. We create messaging that connects emotionally and communicates rationally. Your team gets clear guidelines so everyone talks about your brand the same way, whether it's on your website, in sales calls, or on social media.",
      "Strong brand strategy isn't just pretty words. It drives better marketing, easier sales, and stronger customer relationships. When people understand what you stand for and why it matters, they choose you over competitors. That's the power of brand."
    ],
    serviceCards: [
      {
        title: "🎯 Brand Discovery & Positioning",
        description: "We research your market, analyze competitors, and interview stakeholders to understand what makes you different. Then we define your unique positioning—how you fit in the market and why customers should choose you."
      },
      {
        title: "🚀 Messaging & Voice Development",
        description: "We craft your brand story, value propositions, and messaging framework. You get clear, compelling language that resonates with your audience and differentiates you from competitors. Plus, we define your brand voice and tone for consistency across channels."
      },
      {
        title: "📊 Brand Guidelines & Implementation",
        description: "We create brand guidelines that document your positioning, messaging, and voice. Your team gets a clear framework to ensure consistency across marketing, sales, and customer experience. We can also help implement your new brand across touchpoints."
      }
    ],
    faqItems: [
      {
        id: 1,
        question: "How is brand strategy different from design?",
        answer: "Design is visual (logos, colors, fonts). Strategy is foundational (positioning, messaging, voice). Great design needs great strategy underneath it. We focus on the strategy that informs everything your brand says and does."
      },
      {
        id: 2,
        question: "Do you create logos and visual identity?",
        answer: "We can, but our focus is strategic—positioning, messaging, and voice. If you need visual design, we often partner with designers or work with your existing design team to ensure strategy and visuals align."
      },
      {
        id: 3,
        question: "How long does brand strategy take?",
        answer: "Typically 4-8 weeks depending on scope. We run discovery workshops, conduct research, develop positioning and messaging, and refine based on feedback. The output is a comprehensive brand strategy you can use for years."
      },
      {
        id: 4,
        question: "What if we already have a brand but need to refresh it?",
        answer: "Brand evolution is smart. Markets change, audiences evolve, businesses grow. We assess your current brand, identify what's working and what's not, and refine your positioning and messaging to better reflect where you are today."
      },
      {
        id: 5,
        question: "How do we know if we need brand strategy?",
        answer: "If your messaging feels inconsistent, your team struggles to explain what you do, prospects don't understand your value, or you blend in with competitors—you need brand strategy. It clarifies who you are and how you stand out."
      }
    ],
    checklist: [
      { text: "✓ Comprehensive brand discovery and research" },
      { text: "✓ Competitive analysis and market positioning" },
      { text: "✓ Target audience personas and insights" },
      { text: "✓ Brand positioning and differentiation" },
      { text: "✓ Messaging framework and value propositions" },
      { text: "✓ Brand voice and tone guidelines" },
      { text: "✓ Brand guidelines documentation" }
    ]
  },

  // To be continued with remaining 20 services in the next write...
};
