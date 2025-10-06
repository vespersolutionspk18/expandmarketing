/**
 * LeftRight Component - Usage Examples
 *
 * This file demonstrates all the available features of the enhanced LeftRight component.
 * Copy these examples to use the component in your pages.
 */

import LeftRight from './LeftRight';

// Example 1: Basic Usage (Original functionality)
export function BasicExample() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
      imageAlt="Team working together"
      label="About Us"
      title="We build amazing digital experiences"
      content={[
        'Our team specializes in creating innovative solutions that drive business growth.',
        'With over 10 years of experience, we deliver exceptional results.'
      ]}
      buttonText="Learn More"
      buttonHref="/about"
      buttonVariant="secondary"
      imagePosition="left"
    />
  );
}

// Example 2: Big Heading with Checklist (Like the image example)
export function ChecklistExample() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
      imageAlt="Marketing strategy"
      label="Where we fit in the mix"
      title="We're organic media planners by trade chasing consumers not algorithms"
      bigHeading={true}
      content={[
        'Whilst everyone else is chasing algorithms whether it\'s learning to manipulate Google or hack TikTok, we\'re chasing consumers. We know people better than anyone else and their needs (because they\'re telling us in what they search).',
        'We plan our organic media content multi-channel based on where the search volume, engagement and traffic opportunities are. We create content for SEO, social and the media and we do it in all forms. Our studio team have done large scale production shoots both product and on location, were producing assets for organic social and paid, and large scale content marketing programmes.'
      ]}
      checklist={[
        { text: 'Content for website/SEO' },
        { text: 'Creative content marketing/production' },
        { text: 'UGC & organic social content' },
        { text: 'PR/Media stories' }
      ]}
      checklistColumns={2}
      buttonText="Take A Look At Our Work"
      buttonHref="/work"
      buttonVariant="secondary"
      imagePosition="left"
    />
  );
}

// Example 3: Accordion with Auto-play and Image Switching
export function AccordionExample() {
  const accordionItems = [
    {
      id: 1,
      title: 'Our Mission',
      content: 'Is to be the most recommended agency globally.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    },
    {
      id: 2,
      title: 'Training & Progression',
      content: 'From onboarding bootcamps to mentoring sessions and career development frameworks we make sure everyone here is progressing.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'Our Culture',
      content: 'This is a home for big thinkers, loud laughs, the underdogs and career-defining moments.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    }
  ];

  return (
    <LeftRight
      imageAlt="Team collaboration"
      title="We are the brightest minds, biggest talents and bravest thinkers in the industry."
      accordion={accordionItems}
      autoPlayAccordion={true}
      autoPlayInterval={10000}
      imagePosition="right"
      showLabelBorder={false}
    />
  );
}

// Example 4: Single Column Checklist with Button
export function SingleColumnChecklistExample() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
      imageAlt="Services overview"
      label="Our Services"
      title="Everything you need to succeed online"
      content={[
        'We provide comprehensive digital marketing services tailored to your business needs.'
      ]}
      checklist={[
        { text: 'Search Engine Optimization (SEO)' },
        { text: 'Pay-Per-Click Advertising (PPC)' },
        { text: 'Social Media Marketing' },
        { text: 'Content Marketing Strategy' },
        { text: 'Email Marketing Campaigns' },
        { text: 'Analytics and Reporting' }
      ]}
      checklistColumns={1}
      buttonText="Get Started"
      buttonHref="/contact"
      buttonVariant="primary"
      imagePosition="right"
    />
  );
}

// Example 5: Content with Link (No Image)
export function NoImageExample() {
  return (
    <LeftRight
      imageAlt=""
      title="Ready to transform your digital presence?"
      content={[
        'Our team is ready to help you achieve your marketing goals. Let\'s discuss how we can work together to drive growth for your business.',
        'Schedule a free consultation today and discover the possibilities.'
      ]}
      buttonText="Schedule a Call"
      buttonHref="/contact"
      buttonVariant="secondary"
    />
  );
}

// Example 6: Big Heading with Regular Content
export function BigHeadingExample() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
      imageAlt="Innovation"
      label="Innovation"
      title="The future of marketing is here"
      bigHeading={true}
      content={[
        'We leverage cutting-edge technology and data-driven insights to create campaigns that truly resonate with your audience.',
        'Our innovative approach combines creativity with analytics to deliver measurable results.'
      ]}
      buttonText="Discover More"
      buttonHref="/services"
      imagePosition="left"
    />
  );
}
