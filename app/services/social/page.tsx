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
  title: 'Social Media & Campaigns | Expand Marketing',
  description:
    'Meeting your consumers at each stage of the journey. Social search optimization and social media marketing.',
};

const stats = [
  {
    value: '12M',
    suffix: '+',
    label: 'Social impressions per month',
  },
  {
    value: '4.3',
    suffix: 'x',
    label: 'Average engagement increase',
  },
  {
    value: '850',
    suffix: '%',
    label: 'Best campaign ROI',
  },
];

const channels = [
  { id: 1, name: 'Instagram', iconName: 'instagram' },
  { id: 2, name: 'TikTok', iconName: 'tiktok' },
  { id: 3, name: 'LinkedIn', iconName: 'linkedin' },
  { id: 4, name: 'X (Twitter)', iconName: 'x' },
  { id: 5, name: 'Facebook', iconName: 'facebook' },
  { id: 6, name: 'Pinterest', iconName: 'pinterest' },
  { id: 7, name: 'Threads', iconName: 'threads' },
  { id: 8, name: 'YouTube', iconName: 'youtube' },
];

const serviceCards = [
  {
    id: 1,
    title: '📱 Social-First Strategy',
    description:
      'Strategic social media planning that aligns with business goals. We create platform-specific strategies that build communities, drive engagement, and generate real business outcomes.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Social Strategy',
  },
  {
    id: 2,
    title: '✨ Content Creation & Production',
    description:
      'Thumb-stopping content that cuts through the noise. From static posts to Reels and Stories, we create social content that drives engagement and builds brand love.',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Content Creation',
  },
  {
    id: 3,
    title: '🎯 Paid Social Advertising',
    description:
      'Performance-driven paid social campaigns across all major platforms. We build, test, and optimize campaigns that drive conversions while maintaining efficient CAC.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Paid Social',
  },
  {
    id: 4,
    title: '👥 Community Management',
    description:
      'Build loyal communities that advocate for your brand. We manage conversations, engage authentically, and turn followers into brand ambassadors.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Community Management',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'Which social platforms should my brand be on?',
    answer:
      'It depends on where your audience is and what you\'re trying to achieve. We audit your target market and recommend platforms based on demographics, content type, and business goals. Not every brand needs to be everywhere.',
  },
  {
    id: 2,
    question: 'How often should we post on social media?',
    answer:
      'Frequency varies by platform and audience. Generally, 3-5x per week on Instagram, daily on Twitter/X, 2-3x per week on LinkedIn. Quality always beats quantity—we focus on strategic posting over volume.',
  },
  {
    id: 3,
    question: 'Can you help with influencer partnerships?',
    answer:
      'Yes. We identify relevant influencers, negotiate partnerships, manage campaigns, and measure ROI. From micro-influencers to celebrity partnerships, we handle end-to-end influencer marketing.',
  },
];

export default function SocialMediaCampaignsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Social Media & Campaigns"
          title="Meeting your consumers at each stage of the journey"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Social search optimization and social media marketing"
          subtitle='Building <strong class="font-medium">communities</strong> and driving <strong class="font-medium">conversions</strong>'
          paragraphs={[
            'Social media isn\'t just about likes and followers—it\'s about <strong class="font-medium">building communities</strong> that drive business growth. People discover brands on social before they ever hit Google.',
            'Our social strategies are rooted in deep audience understanding. We know what resonates on each platform, when to post, and how to create content that stops the scroll and drives action.',
            'From viral TikTok campaigns to LinkedIn thought leadership, we create social content that builds brand awareness, nurtures relationships, and converts followers into customers.',
          ]}
        />
        <ChannelsCarousel
          title="Platforms we drive growth on"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Social media"
          label="Our approach"
          title="Listen. Create. Engage. Optimize."
          content={[
            'Our social media framework ensures consistent growth and engagement:',
          ]}
          checklist={[
            { text: '👂 Listen - We monitor conversations, track competitors, and identify trends. Social listening informs our content strategy and helps us stay ahead of cultural moments.' },
            { text: '🎨 Create - Platform-native content that feels authentic, not like advertising. We understand the nuances of each platform and create content that performs organically and in paid campaigns.' },
            { text: '💬 Engage - Community management that builds relationships. We respond authentically, spark conversations, and turn followers into brand advocates.' },
            { text: '📊 Optimize - Data-driven refinement based on performance metrics. We test content types, posting times, and messaging to continuously improve results.' },
          ]}
          checklistColumns={1}
          buttonText="See our social work"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Social campaigns"
          label="Campaign types"
          title="Campaigns That Drive Results"
          accordion={[
            {
              id: 1,
              title: '🚀 Product Launches & Announcements',
              content: 'Generate buzz and drive conversions for product launches. We create integrated campaigns across organic and paid social that build anticipation and drive day-one sales.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🎭 Brand Awareness & Storytelling',
              content: 'Build brand recognition through compelling storytelling. From documentary-style brand stories to user-generated content campaigns, we create narratives that resonate.',
              image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🎁 Seasonal & Event Campaigns',
              content: 'Capitalize on seasonal moments and cultural events. We plan campaigns around holidays, industry events, and trending moments to maximize reach and relevance.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Grow on social"
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
