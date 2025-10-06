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
  title: 'Onsite SEO | Expand Marketing',
  description:
    'Industry-leading technical SEO excellence that defends your position in the market and drives organic growth',
};

const stats = [
  {
    value: '300',
    suffix: '+',
    label: 'Technical audits completed',
  },
  {
    value: '98',
    suffix: '%',
    label: 'Client satisfaction rate',
  },
  {
    value: '3.2',
    suffix: 'x',
    label: 'Average increase in organic traffic',
  },
];

const channels = [
  { id: 1, name: 'Google Search', iconName: 'google' },
  { id: 2, name: 'Google Discover', iconName: 'google' },
  { id: 3, name: 'Google Images', iconName: 'google' },
  { id: 4, name: 'YouTube Search', iconName: 'youtube' },
  { id: 5, name: 'Bing', iconName: 'bing' },
  { id: 6, name: 'DuckDuckGo', iconName: 'duckduckgo' },
  { id: 7, name: 'ChatGPT', iconName: 'chatgpt' },
  { id: 8, name: 'Google Shopping', iconName: 'google' },
];

const serviceCards = [
  {
    id: 1,
    title: '🔍 Technical SEO Audits',
    description:
      'Comprehensive audits that uncover technical issues holding back your performance. We analyze site architecture, crawlability, indexation, and more to identify opportunities for improvement.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Technical SEO Audits',
  },
  {
    id: 2,
    title: '⚡ Core Web Vitals Optimization',
    description:
      'Speed matters. We optimize your site\'s performance across all Core Web Vitals metrics to improve user experience and search rankings. From LCP to CLS, we make your site lightning fast.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Core Web Vitals',
  },
  {
    id: 3,
    title: '🏗️ Site Architecture & Navigation',
    description:
      'Strategic site structure that helps search engines understand your content and users find what they need. We design information architectures that drive both rankings and conversions.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Site Architecture',
  },
  {
    id: 4,
    title: '📱 Mobile-First Optimization',
    description:
      'With mobile-first indexing, your mobile experience is your search ranking. We ensure your site performs flawlessly across all devices, delivering seamless experiences that convert.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Mobile Optimization',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'How long does it take to see results from technical SEO?',
    answer:
      'Technical SEO improvements can show results within 4-12 weeks, depending on the scope of changes and how quickly search engines recrawl your site. Some quick wins like fixing critical errors can show impact within days.',
  },
  {
    id: 2,
    question: 'Do you work with all CMS platforms?',
    answer:
      'Yes, we have extensive experience with WordPress, Shopify, Webflow, custom-built sites, and enterprise platforms. Our team adapts to your tech stack.',
  },
  {
    id: 3,
    question: 'What\'s included in a technical SEO audit?',
    answer:
      'Our audits cover crawlability, indexation, site architecture, page speed, mobile optimization, schema markup, internal linking, and technical health. You receive a prioritized action plan with implementation guidance.',
  },
];

export default function OnsiteSEOPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Onsite SEO"
          title="Industry-leading technical excellence that defends your position in the market"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Technical SEO that drives real business growth"
          subtitle='Building a <strong class="font-medium">foundation</strong> that scales with your ambitions'
          paragraphs={[
            'Technical SEO isn\'t just about fixing errors—it\'s about building a <strong class="font-medium">foundation for sustainable growth.</strong> Every technical decision impacts how search engines crawl, index, and rank your content.',
            'We don\'t just audit and walk away. We\'re your ongoing technical partners, monitoring performance, implementing improvements, and ensuring your site stays ahead of algorithm updates and industry changes.',
            'Our approach combines deep technical expertise with strategic thinking. We prioritize fixes that drive the biggest impact, whether that\'s recovering lost traffic, improving crawl efficiency, or unlocking new ranking opportunities.',
          ]}
        />
        <ChannelsCarousel
          title="Search engines we optimize for"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Technical excellence"
          label="Our methodology"
          title="Defend. Optimize. Scale."
          content={[
            'Our technical SEO framework is built on three strategic pillars that ensure your site not only performs today but scales for tomorrow:',
          ]}
          checklist={[
            { text: '🛡️ Defend - We protect your existing rankings by fixing critical technical issues, maintaining site health, and ensuring search engines can efficiently crawl and index your most valuable content.' },
            { text: '⚡ Optimize - We improve performance across all metrics that matter: page speed, Core Web Vitals, mobile experience, and structured data. Every optimization is measured against business impact.' },
            { text: '📈 Scale - We build technical infrastructure that grows with your business. From international SEO to enterprise-scale migrations, we prepare your site for expansion.' },
          ]}
          checklistColumns={1}
          buttonText="View our case studies"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Technical SEO"
          label="How we work"
          title="Continuous Technical Excellence"
          accordion={[
            {
              id: 1,
              title: '🔬 Ongoing Monitoring & Optimization',
              content: 'Technical SEO isn\'t a one-time project. We continuously monitor your site\'s health, track Core Web Vitals, and identify optimization opportunities. Our team stays ahead of algorithm updates and industry changes to keep your site performing at its peak.',
              image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🚀 Implementation Support',
              content: 'We don\'t just provide recommendations—we work alongside your development team to implement changes. Whether you need detailed technical specifications or hands-on implementation, we\'re there every step of the way.',
              image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '📊 Performance Reporting',
              content: 'Clear, actionable reporting that connects technical improvements to business outcomes. We track metrics that matter: organic traffic, rankings, crawl efficiency, and page performance.',
              image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Get started"
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
