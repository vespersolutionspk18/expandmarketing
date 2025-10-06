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
  title: 'Web Development | Expand Marketing',
  description:
    'Building high-performance web experiences optimized for search. Custom website design and development solutions.',
};

const stats = [
  {
    value: '200',
    suffix: '+',
    label: 'Websites launched',
  },
  {
    value: '98',
    suffix: '%',
    label: 'Core Web Vitals pass rate',
  },
  {
    value: '2.8',
    suffix: 's',
    label: 'Average page load time',
  },
];

const channels = [
  { id: 1, name: 'Next.js', iconName: 'nextjs' },
  { id: 2, name: 'React', iconName: 'react' },
  { id: 3, name: 'WordPress', iconName: 'wordpress' },
  { id: 4, name: 'Shopify', iconName: 'shopify' },
  { id: 5, name: 'Webflow', iconName: 'webflow' },
  { id: 6, name: 'Headless CMS', iconName: 'cms' },
  { id: 7, name: 'Vercel', iconName: 'vercel' },
  { id: 8, name: 'AWS', iconName: 'aws' },
];

const serviceCards = [
  {
    id: 1,
    title: '⚡ Performance-First Development',
    description:
      'Blazing-fast websites built with modern frameworks. We obsess over Core Web Vitals, optimizing every aspect of performance to improve user experience and search rankings.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Performance Development',
  },
  {
    id: 2,
    title: '🎨 Custom Design Systems',
    description:
      'Beautiful, scalable design systems that maintain brand consistency across your entire digital presence. From components to patterns, we build systems that grow with your brand.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Design Systems',
  },
  {
    id: 3,
    title: '🛒 E-commerce Solutions',
    description:
      'High-converting e-commerce experiences built on Shopify, WooCommerce, or custom platforms. We create shopping experiences that drive revenue and delight customers.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'E-commerce',
  },
  {
    id: 4,
    title: '🔧 Headless CMS & JAMstack',
    description:
      'Modern architecture for maximum flexibility and performance. We build headless solutions that give you content freedom while maintaining lightning-fast performance.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Headless CMS',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'What technologies do you work with?',
    answer:
      'We specialize in modern frameworks like Next.js, React, and Vue.js, as well as platforms like WordPress, Shopify, and Webflow. We choose the best technology stack for your specific needs and goals.',
  },
  {
    id: 2,
    question: 'How long does it take to build a website?',
    answer:
      'Timeline depends on project scope. A simple marketing site might take 6-8 weeks, while a complex e-commerce or enterprise site could take 12-16 weeks. We provide detailed timelines during discovery.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes. We offer ongoing maintenance, security updates, performance monitoring, and feature enhancements. Your website is never "done"—we continuously improve and optimize based on data.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="Web Development"
          title="Building high-performance web experiences optimized for search"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="Custom development that drives results"
          subtitle='Creating digital experiences that <strong class="font-medium">perform</strong> and <strong class="font-medium">convert</strong>'
          paragraphs={[
            'Your website isn\'t just a digital brochure—it\'s your most important marketing asset. <strong class="font-medium">We build websites that rank, convert, and scale</strong> with your business.',
            'Our development approach combines technical excellence with SEO best practices from the ground up. Every line of code is written with performance, accessibility, and search visibility in mind.',
            'From headless CMS implementations to complex e-commerce platforms, we build solutions that solve real business problems while delivering exceptional user experiences.',
          ]}
        />
        <ChannelsCarousel
          title="Technologies we work with"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Web development"
          label="Our process"
          title="Discover. Design. Develop. Deploy."
          content={[
            'Our development process ensures quality, speed, and alignment with your business goals:',
          ]}
          checklist={[
            { text: '🔍 Discover - Deep dive into your business goals, user needs, and technical requirements. We map out the entire project scope, technical architecture, and success metrics.' },
            { text: '🎨 Design - User-centered design that balances aesthetics with usability. We create prototypes, test with users, and refine until we have the perfect experience.' },
            { text: '⚙️ Develop - Clean, maintainable code built with modern best practices. We prioritize performance, security, and SEO from day one, not as an afterthought.' },
            { text: '🚀 Deploy - Smooth launches with comprehensive testing, optimization, and monitoring. Post-launch, we continuously optimize based on real user data.' },
          ]}
          checklistColumns={1}
          buttonText="View our websites"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="Development expertise"
          label="What we build"
          title="Enterprise-Grade Solutions"
          accordion={[
            {
              id: 1,
              title: '🏢 Enterprise Websites',
              content: 'Scalable, secure platforms for large organizations. We build complex multi-site architectures, custom integrations, and enterprise-grade solutions that handle massive traffic.',
              image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '🎨 Landing Pages That Convert',
              content: 'High-converting landing pages optimized for speed and conversions. From A/B testing infrastructure to pixel-perfect design, we build pages that drive results.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🔄 Website Migrations & Redesigns',
              content: 'Seamless migrations that preserve SEO value and improve performance. We handle platform migrations, redesigns, and technical upgrades without losing rankings or traffic.',
              image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Build with us"
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
