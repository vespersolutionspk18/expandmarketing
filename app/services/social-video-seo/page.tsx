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
  title: 'Social Video SEO | Expand Marketing',
  description:
    'Capturing audiences where they search for video content. TikTok and YouTube optimization that drives discovery and growth.',
};

const stats = [
  {
    value: '500M',
    suffix: '+',
    label: 'Video views generated',
  },
  {
    value: '5.8',
    suffix: 'x',
    label: 'Average subscriber growth',
  },
  {
    value: '78',
    suffix: '%',
    label: 'Videos ranking in top 10',
  },
];

const channels = [
  { id: 1, name: 'YouTube', iconName: 'youtube' },
  { id: 2, name: 'TikTok', iconName: 'tiktok' },
  { id: 3, name: 'Instagram Reels', iconName: 'instagram' },
  { id: 4, name: 'YouTube Shorts', iconName: 'youtube' },
  { id: 5, name: 'Google Video', iconName: 'google' },
  { id: 6, name: 'Facebook', iconName: 'facebook' },
  { id: 7, name: 'LinkedIn', iconName: 'linkedin' },
  { id: 8, name: 'Snapchat', iconName: 'snapchat' },
];

const serviceCards = [
  {
    id: 1,
    title: '🎥 YouTube SEO & Strategy',
    description:
      'Comprehensive YouTube optimization that drives discovery, views, and subscribers. From keyword research to thumbnail optimization, we ensure your videos rank and perform.',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'YouTube SEO',
  },
  {
    id: 2,
    title: '📱 TikTok Growth Strategy',
    description:
      'TikTok strategies that tap into the algorithm and drive explosive growth. We identify trending sounds, formats, and topics that resonate with your target audience.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'TikTok Strategy',
  },
  {
    id: 3,
    title: '✂️ Short-Form Video Optimization',
    description:
      'Maximize reach across Shorts, Reels, and TikTok with content optimized for each platform\'s unique algorithm. One strategy, multiple formats, exponential reach.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Short-Form Video',
  },
  {
    id: 4,
    title: '🎬 Video Content Strategy',
    description:
      'Strategic content planning based on search demand and platform trends. We identify topics your audience is searching for and create video content that captures that demand.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Content Strategy',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'How long does it take to grow a YouTube channel?',
    answer:
      'YouTube growth depends on content quality, consistency, and optimization. Most channels see meaningful growth within 3-6 months with consistent publishing and proper SEO. Some videos can go viral immediately, while building sustainable growth takes time.',
  },
  {
    id: 2,
    question: 'Do you create video content or just optimize it?',
    answer:
      'We offer both strategy and optimization services, as well as full production support. Whether you need content ideation, scriptwriting, production guidance, or post-production optimization, we can help.',
  },
  {
    id: 3,
    question: 'How does video SEO differ from traditional SEO?',
    answer:
      'Video SEO involves platform-specific algorithms, engagement metrics (watch time, likes, shares), and visual optimization (thumbnails, cards). We optimize for both platform search and Google video results.',
  },
];

export default function SocialVideoSEOPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Social Video SEO"
          title="Capturing audiences where they search for video content"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Video optimization that drives discovery and growth"
          subtitle='Meeting your audience where they <strong class="font-medium">watch</strong> and <strong class="font-medium">search</strong>'
          paragraphs={[
            'Video is the fastest-growing search medium. People search on YouTube like they search on Google, and TikTok is becoming the search engine for Gen Z. <strong class="font-medium">If you\'re not optimizing for video search, you\'re invisible.</strong>',
            'Our video SEO approach combines platform expertise with search strategy. We understand how YouTube\'s algorithm ranks content, what makes TikTok videos go viral, and how to optimize for both platform discovery and Google video results.',
            'From keyword research to thumbnail testing, we optimize every element that impacts video performance. The result? Videos that get discovered, watched, shared, and drive real business outcomes.',
          ]}
        />
        <ChannelsCarousel
          title="Platforms we optimize video for"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Video optimization"
          label="Our approach"
          title="Search. Create. Optimize."
          content={[
            'Our video SEO framework ensures your content gets discovered and drives growth:',
          ]}
          checklist={[
            { text: '🔍 Search - We start with search demand. What are people searching for on YouTube? What topics are trending on TikTok? We identify opportunities where video content can capture high-intent audiences.' },
            { text: '🎬 Create - Strategic content planning that balances search demand with platform best practices. We develop video concepts that rank in search while leveraging platform-specific algorithms.' },
            { text: '⚡ Optimize - Comprehensive optimization across titles, descriptions, tags, thumbnails, and engagement hooks. We test, measure, and refine to maximize views and subscriber growth.' },
          ]}
          checklistColumns={1}
          buttonText="See our video work"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Video strategy"
          label="Platform expertise"
          title="Multi-Platform Video Mastery"
          accordion={[
            {
              id: 1,
              title: '🎯 YouTube Growth & Monetization',
              content: 'Complete YouTube channel strategy from setup to monetization. We optimize for search rankings, suggested videos, and subscriber growth while building a sustainable content engine.',
              image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '📱 TikTok Algorithm Mastery',
              content: 'TikTok strategies that understand the For You Page algorithm. We create content that hooks viewers in 3 seconds, leverages trending audio, and drives follower growth.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🔄 Cross-Platform Distribution',
              content: 'Maximize ROI by repurposing content across platforms. One video becomes YouTube content, TikTok clips, Instagram Reels, and LinkedIn videos—each optimized for its platform.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Grow your channel"
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
