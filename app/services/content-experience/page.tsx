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
  title: 'Content Experience | Expand Marketing',
  description:
    'Content marketing work the industry copies 3 years from now. Search-driven content that creates category leaders.',
};

const stats = [
  {
    value: '500',
    suffix: '+',
    label: 'Content campaigns delivered',
  },
  {
    value: '4.1',
    suffix: 'x',
    label: 'Average increase in organic visibility',
  },
  {
    value: '85',
    suffix: '%',
    label: 'Content ranking in top 10',
  },
];

const channels = [
  { id: 1, name: 'Google', iconName: 'google' },
  { id: 2, name: 'YouTube', iconName: 'youtube' },
  { id: 3, name: 'TikTok', iconName: 'tiktok' },
  { id: 4, name: 'Instagram', iconName: 'instagram' },
  { id: 5, name: 'LinkedIn', iconName: 'linkedin' },
  { id: 6, name: 'Medium', iconName: 'medium' },
  { id: 7, name: 'Reddit', iconName: 'reddit' },
  { id: 8, name: 'Pinterest', iconName: 'pinterest' },
];

const serviceCards = [
  {
    id: 1,
    title: '✍️ Search-First Content Strategy',
    description:
      'Content strategies built on real search demand, not assumptions. We analyze what your audience is actually searching for and create content that captures attention at every stage of the journey.',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Content Strategy',
  },
  {
    id: 2,
    title: '📝 Editorial Excellence',
    description:
      'Content that doesn\'t just rank—it resonates. Our editorial team creates compelling, authoritative content that establishes your brand as a category leader and drives real engagement.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Editorial Content',
  },
  {
    id: 3,
    title: '🎨 Multi-Format Content Production',
    description:
      'From in-depth guides to snackable social content, we create content in every format your audience consumes. Video, infographics, interactive tools, and more.',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Content Production',
  },
  {
    id: 4,
    title: '🔄 Content Refresh & Optimization',
    description:
      'Your best content shouldn\'t gather dust. We continuously refresh and optimize existing content to maintain rankings, improve performance, and capture new opportunities.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Content Optimization',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'How do you ensure content ranks in search?',
    answer:
      'Every piece of content starts with search demand analysis. We identify what your audience is searching for, analyze top-ranking content, and create comprehensive pieces that satisfy search intent while adding unique value.',
  },
  {
    id: 2,
    question: 'Can you work with our in-house content team?',
    answer:
      'Absolutely. We can provide strategy and oversight while your team executes, or we can work collaboratively on content production. We adapt to your internal resources and needs.',
  },
  {
    id: 3,
    question: 'What makes your content different?',
    answer:
      'We combine search expertise with editorial excellence. Our content is built on data but written by humans for humans. We create content that ranks AND resonates, driving both traffic and engagement.',
  },
];

export default function ContentExperiencePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Content Experience"
          title="Content marketing work the industry copies 3 years from now"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Search-driven content that creates category leaders"
          subtitle='Creating content that captures <strong class="font-medium">demand</strong> and drives <strong class="font-medium">discovery</strong>'
          paragraphs={[
            'Content isn\'t just about filling pages—it\'s about <strong class="font-medium">owning the narrative</strong> in your category. The best content answers questions your audience hasn\'t even asked yet, positioning your brand as the definitive voice.',
            'We don\'t follow content trends. We set them. Our content strategies are rooted in deep audience understanding, search demand analysis, and a relentless focus on what actually drives business outcomes.',
            'Whether it\'s thought leadership that establishes authority, educational content that drives conversions, or creative campaigns that earn media attention, we create content experiences that leave a lasting impact.',
          ]}
        />
        <ChannelsCarousel
          title="Platforms we create content for"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Content creation"
          label="Our approach"
          title="Strategic. Creative. Performance-Led."
          content={[
            'Our content framework ensures every piece serves a strategic purpose while maintaining creative excellence:',
          ]}
          checklist={[
            { text: '🎯 Strategy - Every content piece starts with purpose. We identify opportunities based on search demand, audience needs, and business goals. No content for content\'s sake.' },
            { text: '✨ Creativity - We push creative boundaries while staying true to search intent. Our content stands out in crowded SERPs and earns attention in competitive feeds.' },
            { text: '📊 Performance - We measure what matters: rankings, traffic, engagement, and conversions. Every piece is optimized for performance and continuously improved based on data.' },
          ]}
          checklistColumns={1}
          buttonText="See our content work"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Content excellence"
          label="What we deliver"
          title="Content That Performs"
          accordion={[
            {
              id: 1,
              title: '📚 Pillar Content & Topic Clusters',
              content: 'Comprehensive content hubs that establish topical authority and capture traffic across entire categories. We build content ecosystems that dominate search results and guide users through their journey.',
              image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🎬 Video & Visual Content',
              content: 'From YouTube scripts to TikTok concepts, we create video content that captures attention and drives engagement. Our visual storytelling connects with audiences across platforms.',
              image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🔧 Interactive Tools & Resources',
              content: 'Calculators, assessments, templates, and tools that provide genuine value while earning links and driving traffic. Content experiences that users bookmark and share.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Start creating"
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
