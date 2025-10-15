'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import AnimatedGradient from './AnimatedGradient';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ServiceCardsProps {
  cards: ServiceCard[];
}

export default function ServiceCards({ cards }: ServiceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const swiperInstance = useRef<Swiper | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // Duplicate cards for loop mode (need at least 2x slidesPerView)
  const duplicatedCards = [...cards, ...cards, ...cards];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize Swiper with auto-scroll
  useEffect(() => {
    if (!swiperRef.current || !isMounted) return;

    console.log('Initializing Swiper...');

    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      slidesPerView: 1.15,
      spaceBetween: 12,
      loop: true,
      speed: 5000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      loopAdditionalSlides: 2,
      allowTouchMove: true,
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

    console.log('Swiper created:', swiperInstance.current);

    // Start autoplay
    setTimeout(() => {
      if (swiperInstance.current?.autoplay) {
        console.log('Starting autoplay...');
        swiperInstance.current.autoplay.start();
        setSwiperReady(true);
      }
    }, 100);

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
    };
  }, [isMounted]);

  // GSAP Scroll - Speed up on scroll
  useEffect(() => {
    if (!containerRef.current || !swiperReady || !swiperInstance.current) return;

    console.log('Setting up scroll handler...');

    const isFineFointer = window.matchMedia('(pointer: fine)').matches;

    if (isFineFointer) {
      let scrollVelocity = 0;
      let lastScrollY = window.scrollY;
      const baseSpeed = 5000;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        scrollVelocity = Math.abs(currentScrollY - lastScrollY);
        lastScrollY = currentScrollY;

        // Speed multiplier (1x to 5x)
        const multiplier = Math.min(scrollVelocity / 20, 4);
        const newSpeed = Math.max(baseSpeed / (1 + multiplier), 1000);

        if (swiperInstance.current) {
          swiperInstance.current.params.speed = newSpeed;

          // Force advance on fast scroll
          if (multiplier > 2) {
            swiperInstance.current.slideNext(newSpeed);
          }
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [swiperReady]);

  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-7">
          <div className="col-span-12">
            <div
              ref={containerRef}
              className="flex relative z-0 overflow-hidden w-full | pointer-fine:w-[120vw]"
            >
              <div ref={swiperRef} className="w-full | swiper">
                <div className="!ease-linear | swiper-wrapper">
                  {duplicatedCards.map((card, index) => (
                    <div key={`${card.id}-${index}`} className="swiper-slide | px-1.5 | md:px-2.5">
                      <div
                        className="w-full flex flex-col bg-white rounded-2xl p-3 | md:h-[50vw] | lg:rounded-3xl lg:h-[30vw] | 3xl:h-[22vw]"
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Gradient Container */}
                        <div className="flex-1 w-full relative rounded-xl overflow-hidden aspect-4/3 pointer-fine:aspect-auto lg:rounded-2xl">
                          <AnimatedGradient />
                        </div>

                        {/* Content Area */}
                        <div className="shrink-0 grid px-2 pt-2 xl:py-4">
                          {/* Title */}
                          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-2xl/tight md:text-3xl/tight xl:text-4xl/none 3xl:text-5xl/none 4xl:text-6xl/none font-medium tracking-tight">
                            {card.title}
                          </h2>

                          {/* Description - Desktop (hover to expand) */}
                          <div className="hidden pointer-fine:block">
                            <div
                              className="overflow-hidden"
                              style={{
                                maxHeight: hoveredCard === card.id ? '500px' : '0px',
                                opacity: hoveredCard === card.id ? 1 : 0,
                                transform: hoveredCard === card.id ? 'translateY(0)' : 'translateY(-5px)',
                                transition: 'opacity 0.15s ease-out, transform 0.15s ease-out, max-height 0.2s ease-out',
                                willChange: 'transform, opacity, max-height',
                              }}
                            >
                              <p className="text-base leading-normal text-pretty lg:text-lg xl:text-xl text-grey-900 mb-0 mt-2 pr-2">
                                {card.description}
                              </p>
                            </div>
                          </div>

                          {/* Description - Mobile (always visible) */}
                          <div className="pointer-fine:hidden mt-1">
                            <p className="text-base leading-normal text-pretty text-grey-900 mb-0">
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

      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
