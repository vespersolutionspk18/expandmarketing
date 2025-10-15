import LeftRight from '@/app/components/LeftRight';

const BrightestMindsSection = () => {
  const accordionItems = [
    {
      id: 1,
      title: 'Our Mission',
      content: 'We help businesses grow through smart marketing. Our goal is simple: do great work, treat people well, and build long-term relationships with clients who trust us to deliver.',
      image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95'
    },
    {
      id: 2,
      title: 'Training & Progression',
      content: 'From onboarding bootcamps to mentoring sessions and career development frameworks we make sure everyone here is progressing. We invest in our team through comprehensive training programmes and mentorship opportunities.',
      image: 'https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95'
    },
    {
      id: 3,
      title: 'Our Culture',
      content: 'We work hard and we care about what we do. You\'ll find people here who take pride in their work, support each other, and actually enjoy coming to the office. We celebrate wins together, solve problems as a team, and make time for the things that make work feel less like work.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95'
    }
  ];

  return (
    <LeftRight
      imageAlt="Team collaboration"
      title="Join a team that's building something worth working for."
      accordion={accordionItems}
      autoPlayAccordion={true}
      autoPlayInterval={10000}
      imagePosition="right"
      showLabelBorder={false}
    />
  );
};

export default BrightestMindsSection;
