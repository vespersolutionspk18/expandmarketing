import LeftRight from '@/app/components/LeftRight';

export default function WhatWeDo() {
  return (
    <LeftRight
      imageSrc="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
      imageAlt="Team collaboration"
      label="What we do"
      title="We chase consumers, not algorithms"
      content={[
        'Category leaders don\'t just capture the traffic, they\'re creating the demand in the first place. At the very top of the funnel they are the ones in the market triggering and influencing what people want before search even begins.',
        'At Expand Marketing, strategy isn\'t a one-off slide deck—it\'s always-on. We move with the platforms, tap into what\'s working right now, and constantly seek out new windows of opportunity.',
        'We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.',
        'Agile, creative, performance-led organic that drives real growth.',
        'We\'re dedicated to creating the industry narrative that others follow 3 years from now.',
      ]}
      buttonText="Our Services"
      buttonHref="/services"
      buttonVariant="secondary"
      imagePosition="left"
    />
  );
}
