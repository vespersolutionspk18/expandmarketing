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
  title: 'Digital PR | Expand Marketing',
  description:
    'Paving the path for creative SEO with Digital PR. Media relations and link building through creative campaigns.',
};

const stats = [
  {
    value: '2,500',
    suffix: '+',
    label: 'Media placements secured',
  },
  {
    value: '92',
    suffix: '%',
    label: 'Campaign success rate',
  },
  {
    value: '150',
    suffix: '+',
    label: 'Average links per campaign',
  },
];

const channels = [
  { id: 1, name: 'National Press', iconName: 'newspaper' },
  { id: 2, name: 'Trade Media', iconName: 'briefcase' },
  { id: 3, name: 'Online Publications', iconName: 'globe' },
  { id: 4, name: 'Industry Blogs', iconName: 'blog' },
  { id: 5, name: 'Podcasts', iconName: 'microphone' },
  { id: 6, name: 'News Aggregators', iconName: 'rss' },
  { id: 7, name: 'Social Media', iconName: 'share' },
  { id: 8, name: 'Broadcast Media', iconName: 'tv' },
];

const serviceCards = [
  {
    id: 1,
    title: '🎯 Creative Campaigns',
    description:
      'Data-driven creative campaigns that earn genuine media attention. We turn insights into stories that journalists want to cover, driving coverage that builds authority and earns high-quality links.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Creative Campaigns',
  },
  {
    id: 2,
    title: '📰 Media Relations',
    description:
      'Established relationships with journalists and editors across all major publications. We know what stories resonate and how to pitch them for maximum impact and coverage.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Media Relations',
  },
  {
    id: 3,
    title: '🔗 Strategic Link Building',
    description:
      'Every campaign is built with link acquisition in mind. We create stories that naturally earn authoritative backlinks from high-domain publications, boosting your organic performance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Link Building',
  },
  {
    id: 4,
    title: '📊 Data Storytelling',
    description:
      'Original research, surveys, and data analysis that position your brand as a thought leader. We turn data into compelling narratives that media can\'t resist covering.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Data Storytelling',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'How do Digital PR and SEO work together?',
    answer:
      'Digital PR earns high-authority backlinks that boost your domain authority and rankings. Every media placement is an opportunity to build your link profile while increasing brand awareness. It\'s the perfect marriage of PR and SEO.',
  },
  {
    id: 2,
    question: 'What types of campaigns do you run?',
    answer:
      'We create reactive newsjacking campaigns, data-driven research studies, creative stunts, expert commentary placements, and thought leadership pieces. Every campaign is tailored to your brand and industry.',
  },
  {
    id: 3,
    question: 'How do you measure Digital PR success?',
    answer:
      'We track media placements, domain authority of links earned, referral traffic, brand mentions, and the SEO impact of each campaign. You\'ll see both PR and SEO metrics in our reporting.',
  },
];

export default function DigitalPRPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Digital PR"
          title="Paving the path for creative SEO with Digital PR"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Media relations that build authority and drive rankings"
          subtitle='Earning <strong class="font-medium">attention</strong> and <strong class="font-medium">authority</strong> through creative storytelling'
          paragraphs={[
            'Digital PR isn\'t about press releases and spray-and-pray pitching. It\'s about <strong class="font-medium">creating stories</strong> that journalists want to cover and audiences want to share.',
            'We pioneered creative SEO by merging traditional PR with digital strategy. Every campaign is designed to earn media coverage, build backlinks, and drive organic performance while amplifying your brand.',
            'Our campaigns don\'t just chase trends—they create them. We identify cultural moments, develop original research, and craft narratives that position your brand at the center of industry conversations.',
          ]}
        />
        <ChannelsCarousel
          title="Media outlets we secure coverage in"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Digital PR"
          label="Our methodology"
          title="Create. Pitch. Amplify."
          content={[
            'Our Digital PR framework combines creative thinking with strategic execution:',
          ]}
          checklist={[
            { text: '💡 Create - We develop campaign concepts that are genuinely newsworthy. From data studies to reactive commentary, every idea is crafted to earn media attention and links.' },
            { text: '📢 Pitch - Strategic outreach to the right journalists at the right time. We leverage our media relationships and tailor every pitch to the publication\'s audience and editorial style.' },
            { text: '🚀 Amplify - We don\'t stop at coverage. We amplify successful campaigns across social, content, and owned channels to maximize reach and impact for both brand and SEO.' },
          ]}
          checklistColumns={1}
          buttonText="View our PR wins"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Media coverage"
          label="Campaign types"
          title="Stories That Earn Coverage"
          accordion={[
            {
              id: 1,
              title: '📊 Original Research & Data Studies',
              content: 'Proprietary research and surveys that generate unique insights your industry hasn\'t seen. These campaigns position your brand as a data authority and consistently earn tier-1 media coverage.',
              image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '⚡ Reactive Newsjacking',
              content: 'Fast-response campaigns that tap into trending topics and breaking news. We monitor cultural moments and trending stories, creating expert commentary and data that earns immediate coverage.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🎨 Creative Stunts & Campaigns',
              content: 'Bold, attention-grabbing campaigns that generate buzz and widespread coverage. From viral activations to creative experiments, we push boundaries to earn national and international media.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Get coverage"
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
