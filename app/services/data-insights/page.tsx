import React from 'react';
import Header from '@/app/components/Header';
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceStats from '@/app/components/services/ServiceStats';
import ServiceContent from '@/app/components/services/ServiceContent';
import ChannelsCarousel from '@/app/components/services/ChannelsCarousel';
import ServiceCards from '@/app/components/services/ServiceCards';
import LeftRight from '@/app/components/LeftRight';
import Footer from '@/app/components/Footer';
import LeadChange from '@/app/components/LeadChange';
import RecommendedByLeaders from '@/app/components/services/RecommendedByLeaders';
import FAQ from '@/app/components/services/FAQ';
import Blogs from '@/app/home/Blogs';
import ExpandReady from '@/app/components/ExpandReady';

export const metadata = {
  title: 'Data & Insights | Expand Marketing',
  description:
    'Data-driven search strategies across multiple platforms. Analytics and performance tracking that drives growth.',
};

const stats = [
  {
    value: '350',
    suffix: '+',
    label: 'Custom dashboards built',
  },
  {
    value: '2.1',
    suffix: 'B',
    label: 'Data points analyzed monthly',
  },
  {
    value: '94',
    suffix: '%',
    label: 'Forecast accuracy rate',
  },
];

const channels = [
  { id: 1, name: 'Google Analytics', iconName: 'google' },
  { id: 2, name: 'Google Search Console', iconName: 'google' },
  { id: 3, name: 'Looker Studio', iconName: 'looker' },
  { id: 4, name: 'Tableau', iconName: 'tableau' },
  { id: 5, name: 'Power BI', iconName: 'powerbi' },
  { id: 6, name: 'BigQuery', iconName: 'bigquery' },
  { id: 7, name: 'Python', iconName: 'python' },
  { id: 8, name: 'R', iconName: 'r' },
];

const serviceCards = [
  {
    id: 1,
    title: '📊 Custom Analytics Dashboards',
    description:
      'Tailored dashboards that surface the metrics that matter most to your business. Real-time visibility into performance across all marketing channels in one unified view.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Analytics Dashboards',
  },
  {
    id: 2,
    title: '🔍 Performance Attribution',
    description:
      'Multi-touch attribution models that show what\'s really driving conversions. Understand the customer journey and allocate budget to channels that generate ROI.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Attribution',
  },
  {
    id: 3,
    title: '📈 Predictive Analytics',
    description:
      'Forecasting models that predict future performance and identify growth opportunities. Make data-driven decisions backed by statistical modeling and machine learning.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Predictive Analytics',
  },
  {
    id: 4,
    title: '🎯 Audience Intelligence',
    description:
      'Deep audience analysis that uncovers who your customers are, what they need, and how to reach them. Behavioral segmentation that drives personalized marketing.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Audience Intelligence',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'What data sources can you integrate?',
    answer:
      'We integrate data from Google Analytics, Google Ads, Search Console, social platforms, CRMs, e-commerce platforms, and more. If it has an API or export function, we can connect it.',
  },
  {
    id: 2,
    question: 'How do you ensure data accuracy?',
    answer:
      'We implement comprehensive tracking plans, validate data collection, and audit regularly for discrepancies. Our QA process ensures data integrity before it reaches your dashboards.',
  },
  {
    id: 3,
    question: 'Can you help with GA4 migration?',
    answer:
      'Absolutely. We handle complete GA4 setup, migration from Universal Analytics, custom event tracking, and dashboard creation. We make the transition seamless.',
  },
];

export default function DataInsightsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Data & Insights"
          title="Data-driven search strategies across multiple platforms"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Analytics and performance tracking that drives growth"
          subtitle='Turning <strong class="font-medium">data</strong> into <strong class="font-medium">decisions</strong>'
          paragraphs={[
            'Data without insights is just noise. <strong class="font-medium">We transform complex data</strong> into clear, actionable insights that drive strategic decisions and measurable growth.',
            'Our analytics approach goes beyond surface-level metrics. We dig deep to understand user behavior, identify performance patterns, and uncover opportunities hidden in your data.',
            'From custom dashboards to predictive models, we build analytics infrastructure that gives you competitive advantage. Make decisions based on data, not hunches.',
          ]}
        />
        <ChannelsCarousel
          title="Analytics platforms we work with"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Data analytics"
          label="Our methodology"
          title="Collect. Analyze. Optimize."
          content={[
            'Our data and insights framework ensures you have the information you need to grow:',
          ]}
          checklist={[
            { text: '📥 Collect - Comprehensive data collection across all marketing channels. We implement tracking that captures every customer interaction while respecting privacy regulations.' },
            { text: '🔬 Analyze - Statistical analysis that identifies patterns, trends, and anomalies. We use advanced analytics techniques to uncover insights you didn\'t know existed.' },
            { text: '🚀 Optimize - Transform insights into action. We provide clear recommendations and help implement changes that drive performance improvements.' },
          ]}
          checklistColumns={1}
          buttonText="See our analytics work"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Data insights"
          label="What we deliver"
          title="Insights That Drive Action"
          accordion={[
            {
              id: 1,
              title: '📊 Executive Dashboards',
              content: 'High-level dashboards that give leadership the insights they need at a glance. Track KPIs, monitor performance, and make strategic decisions backed by real-time data.',
              image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🔍 Deep-Dive Analysis',
              content: 'Comprehensive analysis reports that answer complex business questions. From market analysis to campaign performance deep-dives, we uncover the "why" behind the numbers.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🎯 A/B Testing & Experimentation',
              content: 'Statistical testing frameworks that help you make data-driven decisions. We design experiments, analyze results, and provide clear recommendations on what to implement.',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Get data-driven"
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
