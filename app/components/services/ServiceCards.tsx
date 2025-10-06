'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

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
                  {cards.map((card, index) => (
                    <div key={card.id} className="swiper-slide | px-1.5 | md:px-2.5">
                      <div
                        className="w-full flex flex-col bg-white rounded-2xl p-3 | md:h-[50vw] | lg:rounded-3xl lg:h-[30vw] | 3xl:h-[22vw]"
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
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
                          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-2xl/tight md:text-3xl/tight xl:text-4xl/none 3xl:text-5xl/none 4xl:text-6xl/none font-medium tracking-tight">
                            {card.title}
                          </h2>

                          {/* Description - Desktop (hover to expand) */}
                          <div className="hidden pointer-fine:block">
                            <div
                              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                hoveredCard === card.id
                                  ? 'max-h-96 opacity-100 mt-2 pr-2'
                                  : 'max-h-0 opacity-0'
                              }`}
                            >
                              <p className="text-base leading-normal text-pretty lg:text-lg xl:text-xl text-grey-900 mb-0">
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
