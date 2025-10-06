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
  title: 'AI Automation | Expand Marketing',
  description:
    'Innovation in ways your competitors don\'t even dream of. Intelligent automation and AI-powered solutions.',
};

const stats = [
  {
    value: '67',
    suffix: '%',
    label: 'Average time saved with automation',
  },
  {
    value: '15',
    suffix: 'x',
    label: 'Increase in content production',
  },
  {
    value: '92',
    suffix: '%',
    label: 'Accuracy in AI-powered insights',
  },
];

const channels = [
  { id: 1, name: 'ChatGPT', iconName: 'chatgpt' },
  { id: 2, name: 'Claude', iconName: 'anthropic' },
  { id: 3, name: 'Gemini', iconName: 'google' },
  { id: 4, name: 'Midjourney', iconName: 'midjourney' },
  { id: 5, name: 'Make.com', iconName: 'automation' },
  { id: 6, name: 'Zapier', iconName: 'zapier' },
  { id: 7, name: 'Python', iconName: 'python' },
  { id: 8, name: 'OpenAI API', iconName: 'openai' },
];

const serviceCards = [
  {
    id: 1,
    title: '🤖 Workflow Automation',
    description:
      'Custom automation workflows that eliminate repetitive tasks and free your team for strategic work. From content creation to data processing, we automate what matters.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Workflow Automation',
  },
  {
    id: 2,
    title: '✨ AI-Powered Content Creation',
    description:
      'Scale your content production without sacrificing quality. We build AI systems that generate, optimize, and distribute content across channels while maintaining your brand voice.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'AI Content',
  },
  {
    id: 3,
    title: '📊 Predictive Analytics',
    description:
      'AI-powered insights that predict trends, identify opportunities, and guide strategic decisions. Turn data into competitive advantage with machine learning models.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Predictive Analytics',
  },
  {
    id: 4,
    title: '🎯 Personalization Engines',
    description:
      'Deliver personalized experiences at scale with AI-powered recommendation systems, dynamic content, and behavioral targeting that converts.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Personalization',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'Will AI replace our marketing team?',
    answer:
      'No. AI augments your team, not replaces it. We automate repetitive tasks so your team can focus on strategy, creativity, and relationship building. AI handles the grunt work, humans handle the thinking.',
  },
  {
    id: 2,
    question: 'How do you ensure AI-generated content maintains quality?',
    answer:
      'We build custom systems with your brand guidelines, train models on your best content, and implement quality control workflows. Every output is reviewed, refined, and optimized before publication.',
  },
  {
    id: 3,
    question: 'What kind of ROI can we expect from AI automation?',
    answer:
      'Most clients see 50-70% time savings on automated tasks within 3 months. The ROI comes from freed capacity, faster execution, and the ability to scale operations without proportional headcount growth.',
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="AI Automation"
          title="Innovation in ways your competitors don't even dream of"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Intelligent automation that scales your marketing"
          subtitle="Building <strong class='font-medium'>AI systems</strong> that multiply your team's impact"
          paragraphs={[
            'AI isn\'t the future of marketing—it\'s the present. While competitors dabble with ChatGPT, <strong class="font-medium">we\'re building custom AI systems</strong> that transform how businesses create content, analyze data, and engage customers.',
            'Our approach goes beyond simple AI tools. We build comprehensive automation frameworks that integrate AI into your workflows, from content ideation to performance analysis.',
            'The result? Marketing teams that operate 10x faster, make better decisions backed by AI insights, and scale operations without burning out. This is marketing at machine speed with human creativity.',
          ]}
        />
        <ChannelsCarousel
          title="AI tools we leverage"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="AI Automation"
          label="Our framework"
          title="Identify. Automate. Optimize."
          content={[
            'Our AI implementation framework ensures maximum impact with minimum disruption:',
          ]}
          checklist={[
            { text: '🔍 Identify - We audit your workflows to find the highest-impact automation opportunities. Not everything should be automated—we focus on tasks that waste time without adding strategic value.' },
            { text: '⚙️ Automate - Custom AI solutions built specifically for your needs. From simple automations using no-code tools to complex machine learning models, we build what works for you.' },
            { text: '📈 Optimize - Continuous improvement through testing and refinement. We monitor performance, gather feedback, and optimize systems to deliver better results over time.' },
          ]}
          checklistColumns={1}
          buttonText="See AI in action"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="AI solutions"
          label="Use cases"
          title="Real AI Solutions That Drive Growth"
          accordion={[
            {
              id: 1,
              title: '📝 Content Production at Scale',
              content: 'AI-powered content engines that generate blog posts, social content, email campaigns, and more. We build systems that maintain your brand voice while producing content 15x faster than manual creation.',
              image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🔬 Competitive Intelligence',
              content: 'Automated competitive analysis that monitors competitor content, rankings, pricing, and campaigns. Stay ahead by knowing what your competitors are doing before they even announce it.',
              image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🎯 Smart Campaign Optimization',
              content: 'AI systems that continuously optimize campaigns based on performance data. From bid adjustments to creative testing, let AI handle optimization while you focus on strategy.',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Automate with AI"
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
