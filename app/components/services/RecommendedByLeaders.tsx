'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/Button';

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  caseStudyImage: string;
  caseStudyUrl?: string;
  companyLogoText: string;
}

const testimonials: Testimonial[] = [
  {
    id: '789',
    quote: '"I recommend Expand Marketing to any forward-thinking brand that wants to disrupt their niche. Top of the league in search-first marketing and we have continued to work with them across other portfolio brands without doubt"',
    authorName: 'Sarah Johnson',
    authorTitle: 'CMO, Beauty Tech Co.',
    authorImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caseStudyImage: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    caseStudyUrl: '/work',
    companyLogoText: 'Beauty Tech',
  },
  {
    id: '798',
    quote: '"We are a proud partner of Expand Marketing, they\'ve delivered tangible organic results across multiple markets and have gone above and beyond using creativity to have holistic impact for our brand and business"',
    authorName: 'Michael Chen',
    authorTitle: 'Head of Growth, E-Commerce Brand',
    authorImage: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caseStudyImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    companyLogoText: 'E-Commerce',
  },
  {
    id: '802',
    quote: '"The passion and creativity are what make Expand Marketing different. Their ability to pull out a superb campaign and improve the success after they have met the KPI is what sets them apart from many other agencies"',
    authorName: 'Emma Thompson',
    authorTitle: 'Head of Digital, Tech Startup',
    authorImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caseStudyImage: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    caseStudyUrl: '/work',
    companyLogoText: 'Tech Startup',
  },
  {
    id: '816',
    quote: '"Expand Marketing\'s creative approach to SEO and digital PR is what attracted us to them and they\'ve already proved the value they bring in fuelling digital growth for our brand internationally."',
    authorName: 'David Martinez',
    authorTitle: 'VP Marketing, Global Brand',
    authorImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caseStudyImage: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    companyLogoText: 'Global Brand',
  },
  {
    id: '12138',
    quote: '"The Expand Marketing team is an extension to our in-house team and has been from day one. Their creativity, energy, and search-first approach brought real results. They truly understood our business to get us to where we wanted to be"',
    authorName: 'Lisa Anderson',
    authorTitle: 'Head of Marketing, SaaS Company',
    authorImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    caseStudyImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    companyLogoText: 'SaaS Co.',
  },
];

export default function RecommendedByLeaders() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle slide
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const handleLogoClick = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-scroll to active slide with proper centering
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const slides = container.querySelectorAll('[data-slide]');
      const targetSlide = slides[activeIndex] as HTMLElement;

      if (targetSlide) {
        // Calculate scroll position to center the slide
        const slideRect = targetSlide.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const slideCenter = targetSlide.offsetLeft + targetSlide.offsetWidth / 2;
        const containerCenter = container.scrollLeft + containerRect.width / 2;
        const scrollOffset = slideCenter - containerRect.width / 2;

        container.scrollTo({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex]);

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 bg-grey-900 rounded-3xl py-14 lg:py-24 gap-y-3 md:gap-y-7">

          {/* Header Section */}
          <div className="col-span-12 flex flex-col items-center gap-y-3 md:gap-y-5">

            {/* Stars */}
            <div className="inline-flex text-white text-lg gap-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Heading with embedded image */}
            <h1 className="inline-flex flex-wrap text-balance relative flex-col text-center justify-center text-white text-4xl/none md:text-5xl/none lg:text-6xl/none 2xl:text-8xl/[0.9] font-medium tracking-tight px-4">
              <div className="flex flex-wrap text-center justify-center gap-x-2 md:gap-x-3">
                <span>Recommended</span>
                <span>by</span>
              </div>
              <div className="flex flex-wrap text-center justify-center items-center gap-x-2 md:gap-x-3 mt-2">
                <span>category</span>
                <span className="inline-block shrink-0 relative overflow-hidden rounded-lg bg-black/5" style={{ width: '1em', height: '1em' }}>
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Category leader"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover object-center"
                  />
                </span>
                <span>leaders</span>
              </div>
            </h1>
          </div>

          {/* Carousel Section */}
          <div className="col-span-12">

            {/* Carousel Container */}
            <div
              ref={carouselRef}
              className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory carousel-container"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="flex gap-5 carousel-track">
                {/* Left spacer for centering first slide */}
                <div className="flex-shrink-0 carousel-spacer" aria-hidden="true" />

                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    data-slide
                    className="flex-shrink-0 w-[90vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] snap-center"
                  >
                    <div
                      className={`w-full transition-all duration-1000 ease-out ${
                        activeIndex === index
                          ? 'opacity-100 scale-100'
                          : 'opacity-30 scale-95'
                      }`}
                      style={{
                        filter: activeIndex === index ? 'blur(0px)' : 'blur(4px)',
                      }}
                    >
                      <div className="grid grid-cols-12 rounded-2xl overflow-hidden lg:rounded-3xl min-h-[32rem] md:min-h-[36rem]">

                        {/* Quote Card - Left Side */}
                        <div className="flex flex-col items-start justify-between rounded-2xl bg-white p-6 relative z-20 col-span-12 md:rounded-3xl md:col-span-7 md:col-start-1 md:row-start-1 lg:col-span-6 lg:col-start-1 lg:p-9 xl:p-10">

                          {/* Quote */}
                          <div className="text-balance text-left text-grey-900 text-xl/tight md:text-2xl/tight xl:text-3xl/tight font-medium tracking-tight mb-10">
                            {testimonial.quote}
                          </div>

                          {/* Author Info */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center shrink-0 relative overflow-hidden rounded-lg bg-mint w-14 h-14 md:w-16 md:h-16">
                              <Image
                                src={testimonial.authorImage}
                                alt={testimonial.authorName}
                                width={64}
                                height={64}
                                className="w-full h-full object-cover transition-opacity duration-300"
                                onLoad={(e) => {
                                  e.currentTarget.style.opacity = '1';
                                }}
                                style={{ opacity: 0 }}
                              />
                            </div>
                            <div className="flex flex-col items-start leading-none gap-y-1.5">
                              <div className="font-medium text-base xl:text-lg text-grey-900">
                                {testimonial.authorName}
                              </div>
                              <div className="font-light text-sm lg:text-base text-grey-900">
                                {testimonial.authorTitle}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Case Study Image - Right Side */}
                        <div className="relative z-10 col-span-12 hidden md:grid md:row-start-1 md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6">

                          {/* Background Image */}
                          <div className="col-start-1 row-start-1 relative z-0 min-h-[20rem]">
                            <Image
                              src={testimonial.caseStudyImage}
                              alt="Case study"
                              fill
                              className="object-cover"
                            />
                          </div>

                          {/* CTA Button Overlay */}
                          {testimonial.caseStudyUrl && (
                            <div className="col-start-1 row-start-1 relative z-10 flex items-end justify-end p-4">
                              <Button
                                href={testimonial.caseStudyUrl}
                                variant="secondary"
                                size="md"
                              >
                                View Case Study
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Right spacer for centering last slide */}
                <div className="flex-shrink-0 carousel-spacer" aria-hidden="true" />
              </div>
            </div>

            {/* Logo Navigation */}
            <div className="flex justify-center items-center gap-2 mt-7 overflow-x-auto pb-4 px-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => handleLogoClick(index)}
                  className={`cursor-pointer transition-all duration-300 flex px-5 py-3 items-center justify-center rounded-xl border w-24 lg:rounded-2xl lg:w-30 hover:border-white ${
                    activeIndex === index
                      ? 'border-white'
                      : 'border-white/20'
                  }`}
                  aria-label={`View ${testimonial.companyLogoText} testimonial`}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    {testimonial.companyLogoText}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Spacers for centering first and last slides */
        .carousel-spacer {
          width: calc((100% - 90vw) / 2);
        }

        @media (min-width: 768px) {
          .carousel-spacer {
            width: calc((100% - 80vw) / 2);
          }
        }

        @media (min-width: 1024px) {
          .carousel-spacer {
            width: calc((100% - 75vw) / 2);
          }
        }

        @media (min-width: 1280px) {
          .carousel-spacer {
            width: calc((100% - 70vw) / 2);
          }
        }
      `}</style>
    </section>
  );
}
