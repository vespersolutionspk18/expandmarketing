import LeftRight from '@/app/components/LeftRight';

const BrightestMindsSection = () => {
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
      content: 'From onboarding bootcamps to mentoring sessions and career development frameworks we make sure everyone here is progressing. We invest in our team through comprehensive training programmes and mentorship opportunities.',
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    },
    {
      id: 3,
      title: 'Our Culture',
      content: 'This is a home for big thinkers, loud laughs, the underdogs and career-defining moments. We work hard, but we celebrate harder. From team events to work celebrations, we\'ve built something people want to be part of.',
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
};

export default BrightestMindsSection;
