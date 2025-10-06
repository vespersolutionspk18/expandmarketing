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
  title: 'Search & Growth Strategy | Expand Marketing',
  description:
    'Our search strategy team are your growth partners - navigating the digital landscape of today and tomorrow',
};

const stats = [
  {
    value: '12',
    suffix: '+',
    label: "Searchable platforms we're experts in",
  },
  {
    value: '12',
    suffix: '+',
    label: 'Countries we drive growth in',
  },
  {
    value: '2.4',
    suffix: 'x',
    label: 'Better organic performance when led by strategy',
  },
];

const channels = [
  { id: 1, name: 'Google', iconName: 'google' },
  { id: 2, name: 'YouTube', iconName: 'youtube' },
  { id: 3, name: 'Instagram', iconName: 'instagram' },
  { id: 4, name: 'TikTok', iconName: 'tiktok' },
  { id: 5, name: 'X', iconName: 'x' },
  { id: 6, name: 'Facebook', iconName: 'facebook' },
  { id: 7, name: 'Reddit', iconName: 'reddit' },
  { id: 8, name: 'LinkedIn', iconName: 'linkedin' },
  { id: 9, name: 'Threads', iconName: 'threads' },
  { id: 10, name: 'Pinterest', iconName: 'pinterest' },
  { id: 11, name: 'Snapchat', iconName: 'snapchat' },
  { id: 12, name: 'ChatGPT', iconName: 'chatgpt' },
];

const serviceCards = [
  {
    id: 1,
    title: '🧠 Creative Positioning & Brand Strategy Playbooks',
    description:
      'A brand without clarity is just noise. Our Brand Playbooks define the why, who, and how of your communications, so every campaign hits with purpose. We distil your positioning, audience insights, messaging pillars, and campaign angles into one strategic guide.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Creative Positioning',
  },
  {
    id: 2,
    title: '📊 LLM/AIO/GEO Audits & Strategies',
    description:
      'The search landscape is evolving fast. AI-powered search is here, and it\'s changing how consumers discover brands. Our audits help you understand your visibility in AI-powered search results and develop strategies to win in this new era.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'LLM/AIO/GEO Audits',
  },
  {
    id: 3,
    title: '🎯 Integrated Search Strategy',
    description:
      'Search isn\'t siloed anymore. We create integrated strategies that connect SEO, content, PR, and social to amplify your brand across every touchpoint. Our approach ensures your brand shows up where it matters most.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Integrated Search Strategy',
  },
  {
    id: 4,
    title: '🚀 Growth & Performance Forecasting',
    description:
      'Data-driven growth planning that shows you exactly where to invest. We combine historical data, market trends, and competitor analysis to forecast your growth potential and create actionable roadmaps.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Growth Forecasting',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'What is the main business goal Expand Marketing can help me achieve?',
    answer:
      "Our strategy team is there to help you drive growth, and we start with a KPI framework. What is the CEO's objective, what's the CMO's objective and therefore what is Expand Marketing's objective to help drive them. We typically help businesses drive more organic revenue/traffic, more share of search on every searchable platform, or more branded search demand within their category",
  },
  {
    id: 2,
    question: 'Can you do strategy projects without ongoing retainer?',
    answer:
      'Yes, strategy projects can be bought as a standalone product to set your team up for success',
  },
  {
    id: 3,
    question: 'What marketing skills are your strategy team trained on?',
    answer:
      'We put organic strategy plans together to drive more growth. This could be via Social, Google or the media or paid.',
  },
];

export default function StrategyGrowthPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Search & Growth Strategy"
          title="Our search strategy team are your growth partners - navigating the digital landscape of today and tomorrow"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="We're audience first organic media planners building category leaders"
          subtitle='Earning real estate in the <strong class="font-medium">minds</strong> of the consumer, and capturing real estate in the <strong class="font-medium">heart</strong> of the media'
          paragraphs={[
            'Category leaders don\'t just capture the traffic, they\'re creating the demand <strong class="font-medium">in the first place.</strong> At the very top of the funnel they are the ones in the market triggering and influencing what people want before search even begins.',
            'And once that demand is there, it\'s imperative our clients get that click. And we are not just talking about the last click, but the first. Because search isn\'t just about rankings and traffic but about being found in every moment that matters.',
            'At Rise, strategy isn\'t a one-off slide deck-it\'s always-on. We move with the platforms, tap into what\'s working <i>right now</i>, and constantly seek out new windows of opportunity. Agile, creative, performance-led organic that drives real growth.',
          ]}
        />
        <ChannelsCarousel
          title="Channels we drive demand & discovery on"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Growth engineering"
          label="Our unique approach"
          title="We engineer growth"
          content={[
            'Similarly to the way we run our onsite SEO, we break it down into what we are defending, growing and innovating to drive growth within the business.',
            'Every brand sits at a different stage in the journey, and we meet you where you are. Our approach is rooted in three core strategic pillars:',
          ]}
          checklist={[
            { text: '🛡️ Defend - We reinforce what\'s already working and make it work harder for you. Whether that\'s repurposing what\'s on-site to off-site, better optimising your current categories and guides, or supporting current PR activity to drive organic growth rather than being a standalone awareness channel.' },
            { text: '📈 Grow - We then identify opportunities to scale. Whether it\'s expanding into new channels, new categories or subcategories, audiences, or formats, we map out the smartest paths to growth, with strategies built around demand, data, and market potential.' },
            { text: '🚀 Innovate - We push you into the future. From AI search readiness to trend-driven campaigns, we create space for big ideas-breaking category conventions and making your brand unmissable in the moments that matter. Innovation isn\'t a risk. It\'s a requirement for category leaders, and sometimes it means pushing integration and bigger thinking.' },
          ]}
          checklistColumns={1}
          buttonText="Take a look at our work"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Multi-channel Search"
          label="Multi-channel Search"
          title="Creating Demand and Converting Customers"
          accordion={[
            {
              id: 1,
              title: '💬 Why Clients Come to Us',
              content: 'You\'ve hit a plateau. Growth is slowing or declining, and you\'re not sure why. Or our marketing feels fragmented with lots of activity, but no clear direction. Of course, you want to scale, but you need a solid plan to move from good to great. Or maybe even you\'re launching something new. A product, a market, or a brand. It needs to land with impact. If you are getting beaten where competitors are outranking, outspending, or outsmarting you-it\'s time to change that. Expand Marketing is the agency for you',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🔥 Want some direction? Buy a strategy project from us',
              content: 'Most of our multi-channel search clients start with a search strategy project laying out the lay of the land. We give you a full strategic playbook tailored to your business, actionable insights you can implement immediately, and channel-by-channel plans for SEO, content, PR, paid, social. Clarity, direction, and a path to performance',
              image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: 'Lets talk strategy',
              content: 'Ready to make smarter moves? Whether you\'re starting from scratch or need a fresh perspective, let\'s build the plan that gets you there.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Take a look at our work"
          buttonHref="/work"
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
