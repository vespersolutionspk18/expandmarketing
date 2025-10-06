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
  title: 'CRM Consultancy | Expand Marketing',
  description:
    'Strategic growth partners for everything client-focused. Customer relationship management strategy and implementation.',
};

const stats = [
  {
    value: '43',
    suffix: '%',
    label: 'Average increase in customer retention',
  },
  {
    value: '2.7',
    suffix: 'x',
    label: 'Improvement in sales team efficiency',
  },
  {
    value: '180',
    suffix: '+',
    label: 'CRM implementations completed',
  },
];

const channels = [
  { id: 1, name: 'HubSpot', iconName: 'hubspot' },
  { id: 2, name: 'Salesforce', iconName: 'salesforce' },
  { id: 3, name: 'Pipedrive', iconName: 'pipedrive' },
  { id: 4, name: 'ActiveCampaign', iconName: 'activecampaign' },
  { id: 5, name: 'Zoho', iconName: 'zoho' },
  { id: 6, name: 'Monday', iconName: 'monday' },
  { id: 7, name: 'Copper', iconName: 'copper' },
  { id: 8, name: 'Custom CRM', iconName: 'database' },
];

const serviceCards = [
  {
    id: 1,
    title: '🎯 CRM Strategy & Selection',
    description:
      'Find the perfect CRM for your business needs. We analyze your processes, evaluate platforms, and recommend solutions that fit your workflows, not force you to change them.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'CRM Strategy',
  },
  {
    id: 2,
    title: '⚙️ Implementation & Migration',
    description:
      'Seamless CRM implementation with minimal disruption. We handle data migration, system configuration, integrations, and training to get your team up and running fast.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'CRM Implementation',
  },
  {
    id: 3,
    title: '🔄 Process Automation',
    description:
      'Automate repetitive workflows and free your team for high-value work. From lead scoring to email sequences, we build automation that drives efficiency and growth.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Process Automation',
  },
  {
    id: 4,
    title: '📊 Analytics & Reporting',
    description:
      'Turn CRM data into actionable insights. Custom dashboards, forecasting models, and reports that help you understand customer behavior and optimize performance.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'CRM Analytics',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'Which CRM platform is best for my business?',
    answer:
      'It depends on your business size, processes, and goals. We evaluate your needs during discovery and recommend the best fit—whether that\'s HubSpot for marketing-led growth, Salesforce for enterprise complexity, or Pipedrive for sales-focused teams.',
  },
  {
    id: 2,
    question: 'How long does CRM implementation take?',
    answer:
      'Timeline varies by complexity. A basic HubSpot setup might take 4-6 weeks, while a complex Salesforce enterprise implementation could take 12-16 weeks. We provide detailed timelines after scoping your project.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing CRM support?',
    answer:
      'Yes. We offer ongoing optimization, training, troubleshooting, and strategic consultation. Your CRM should evolve with your business, and we\'re there to help it grow.',
  },
];

export default function CRMConsultancyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ServiceHero
          label="CRM Consultancy"
          title="Strategic growth partners for everything client-focused"
        />
        <ServiceStats stats={stats} />
        <ServiceContent
          title="CRM strategy that drives customer success and revenue growth"
          subtitle='Building <strong class="font-medium">relationships</strong> and <strong class="font-medium">systems</strong> that scale'
          paragraphs={[
            'Your CRM isn\'t just a database—it\'s your <strong class="font-medium">competitive advantage.</strong> The right CRM strategy transforms how you attract, convert, and retain customers.',
            'We don\'t just implement CRMs—we architect customer relationship systems that align with your business model, integrate with your tech stack, and empower your teams to work smarter.',
            'From platform selection to advanced automation, we build CRM solutions that grow with your business. Whether you\'re implementing your first CRM or optimizing an existing system, we ensure every touchpoint drives value.',
          ]}
        />
        <ChannelsCarousel
          title="CRM platforms we work with"
          channels={channels}
        />
        <ServiceCards cards={serviceCards} />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="CRM strategy"
          label="Our methodology"
          title="Discover. Design. Deploy."
          content={[
            'Our CRM consultancy framework ensures successful implementation and adoption:',
          ]}
          checklist={[
            { text: '🔍 Discover - Deep dive into your current processes, pain points, and goals. We map your customer journey and identify opportunities for CRM to drive efficiency and growth.' },
            { text: '📐 Design - Custom CRM architecture tailored to your business. We configure workflows, automations, and integrations that match how your team actually works.' },
            { text: '🚀 Deploy - Seamless implementation with comprehensive training and support. We ensure your team is confident and capable before go-live, then optimize based on real usage.' },
          ]}
          checklistColumns={1}
          buttonText="See CRM transformations"
          buttonHref="/work"
          imagePosition="left"
        />
        <LeadChange />
        <LeftRight
          imageSrc="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
          imageAlt="CRM solutions"
          label="What we deliver"
          title="Complete CRM Solutions"
          accordion={[
            {
              id: 1,
              title: '🎯 Sales Pipeline Optimization',
              content: 'Structured sales processes that drive predictable revenue. We design pipelines, configure stages, and build automation that helps your team close more deals faster.',
              image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 2,
              title: '📧 Marketing Automation',
              content: 'Sophisticated email nurture sequences, lead scoring, and campaign automation that turns prospects into customers. We build marketing systems that work while you sleep.',
              image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
            {
              id: 3,
              title: '🔗 System Integrations',
              content: 'Connect your CRM with marketing tools, analytics platforms, accounting software, and more. We build integrations that create a single source of truth for customer data.',
              image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
            },
          ]}
          autoPlayAccordion={true}
          autoPlayInterval={10000}
          buttonText="Transform your CRM"
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
