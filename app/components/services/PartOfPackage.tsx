'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Button from '@/app/components/Button';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

gsap.registerPlugin(ScrollTrigger);

interface PackageCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const packageCards: PackageCard[] = [
  {
    id: 1,
    title: 'Industry Training & Insights',
    description:
      "We share what we know. Expand Marketing clients are the first to know about industry updates and receive training webinars and access to thought leadership.",
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Industry Training',
  },
  {
    id: 2,
    title: 'Dedicated strategist on every account',
    description:
      "KPI'd on growth, your strategist is multi-channel trained and constantly finding new windows of opportunity across all platforms",
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Dedicated Strategist',
  },
  {
    id: 3,
    title: 'Everything is data backed',
    description:
      "Everything we suggest is backed by data. That's what makes us experts. No guesswork, just performance-led strategy",
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Data Backed Approach',
  },
  {
    id: 4,
    title: 'Innovation budget',
    description:
      'Every client gets access to innovation testing budget. We innovate in ways your competitors don\'t even dream of',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    imageAlt: 'Innovation Budget',
  },
];

export default function PartOfPackage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const swiperInstance = useRef<Swiper | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize Swiper with auto-scroll
  useEffect(() => {
    if (!swiperRef.current || !isMounted) return;

    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      slidesPerView: 1.15,
      spaceBetween: 12,
      loop: true,
      speed: 15000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 1.75,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        2560: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      },
    });

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, [isMounted]);

  // GSAP Scroll Animation (Desktop only)
  useEffect(() => {
    if (!containerRef.current || !isMounted) return;

    const isFineFointer = window.matchMedia('(pointer: fine)').matches;

    if (isFineFointer) {
      const scrollAnimation = gsap.to(containerRef.current, {
        xPercent: -20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 100%',
          end: 'bottom -100%',
          scrub: true,
        },
      });

      return () => {
        scrollAnimation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMounted]);

  return (
    <section className="w-full pb-12 xl:pb-24 bg-grey-100">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-7">
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              {/* Heading */}
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] 3xl:text-[5rem]/[0.9] 4xl:text-8xl/[0.9] font-medium tracking-tight">
                  Part of the package
                </h2>
              </div>

              {/* CTA Button - Desktop Only */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <Button href="/contact" variant="secondary" size="md">
                  Lets get a call booked in
                </Button>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="col-span-12">
            <div className="overflow-hidden">
              <div
                ref={containerRef}
                className="flex relative z-0 w-full pointer-fine:w-[120vw]"
              >
                <div ref={swiperRef} className="swiper w-full">
                  <div className="swiper-wrapper ease-linear">
                    {packageCards.map((card, index) => (
                      <div
                        key={card.id}
                        className="swiper-slide"
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="w-full flex flex-col bg-white rounded-2xl p-3 md:h-[50vw] lg:rounded-3xl lg:h-[30vw] 3xl:h-[22vw]">
                          {/* Image Container */}
                          <div className="flex-1 w-full relative rounded-xl overflow-hidden aspect-4/3 pointer-fine:aspect-auto lg:rounded-2xl">
                            <Image
                              src={card.image}
                              alt={card.imageAlt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                              loading={index < 2 ? 'eager' : 'lazy'}
                            />
                          </div>

                          {/* Content Area */}
                          <div className="shrink-0 grid px-2 pt-2 xl:py-4">
                            {/* Title */}
                            <h3 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-2xl/tight md:text-3xl/tight xl:text-4xl/none 3xl:text-5xl/none 4xl:text-6xl/none font-medium tracking-tight">
                              {card.title}
                            </h3>

                            {/* Description - Desktop (hover to expand) */}
                            <div className="hidden pointer-fine:block">
                              <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                  hoveredCard === card.id
                                    ? 'max-h-96 opacity-100 mt-2'
                                    : 'max-h-0 opacity-0'
                                }`}
                              >
                                <p className="text-base leading-normal text-pretty lg:text-lg xl:text-xl text-grey-900">
                                  {card.description}
                                </p>
                              </div>
                            </div>

                            {/* Description - Mobile (always visible) */}
                            <div className="pointer-fine:hidden mt-1">
                              <p className="text-base leading-normal text-pretty text-grey-900">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
