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
  const serviceCards = [
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
  const approachChecklist = [
    { text: `✓ Custom ${service.title.toLowerCase()} strategy built for your business` },
    { text: `✓ ${service.tags[0]?.label} - Deep research and strategic planning` },
    { text: `✓ ${service.tags[1]?.label} - Expert execution and implementation` },
    { text: `✓ ${service.tags[2]?.label} - Continuous optimization and growth` },
    { text: `✓ Transparent reporting with real-time dashboard access` },
    { text: `✓ Dedicated team of ${service.title.toLowerCase()} specialists` },
    { text: `✓ Proven processes that scale with your business` },
  ];

  // Comprehensive FAQ
  const faqItems = [
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
          title={`${service.title} That Actually Drives Growth`}
          subtitle={`No fluff. No empty promises. Just proven ${service.title.toLowerCase()} strategies that deliver real results.`}
          paragraphs={contentParagraphs}
        />

        <ServiceCards cards={serviceCards} />

        <LeftRight
          imageSrc={service.images.desktop}
          imageAlt={`${service.title} process`}
          label="Our Process"
          title="How We Make It Happen"
          content={[
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
          imageSrc={service.images.card}
          imageAlt={`Why choose Expand for ${service.title}`}
          label="Why Expand"
          title="Why Businesses Choose Us"
          accordion={[
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
