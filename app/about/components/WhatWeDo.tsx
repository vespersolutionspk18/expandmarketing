import LeftRight from '@/app/components/LeftRight';

export default function WhatWeDo() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/7710086/pexels-photo-7710086.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95"
      imageAlt="Team collaboration"
      label="What we do"
      title="We build brands people search for"
      content={[
        'The best brands don\'t wait for people to search for them. They show up early, create conversations, and shape what people are looking for in the first place. That\'s where we focus.',
        'We combine SEO with content marketing, digital PR, and social media to make sure your brand gets found everywhere your customers are looking. Not just Google. Everywhere.',
        'Our strategies evolve with the platforms. When something changes or a new opportunity opens up, we adapt fast. No rigid playbooks, no waiting months to pivot.',
        'We\'ve built our reputation on creative SEO and multi-channel search campaigns that actually drive traffic and revenue. No fluff, just measurable results.',
        'While other agencies copy what\'s already working, we\'re testing what\'s next. The tactics that become industry standard in a few years? We\'re running them now.',
      ]}
      buttonText="Our Services"
      buttonHref="/services"
      buttonVariant="secondary"
      imagePosition="left"
    />
  );
}
