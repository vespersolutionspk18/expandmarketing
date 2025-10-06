'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  SiGoogle,
  SiYoutube,
  SiInstagram,
  SiX,
  SiTiktok,
  SiLinkedin,
  SiFacebook,
  SiReddit,
  SiThreads,
  SiPinterest,
  SiSnapchat,
} from 'react-icons/si';
import { BsChatLeftText } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

interface Channel {
  id: number;
  name: string;
  iconName: string;
}

interface ChannelsCarouselProps {
  title: string;
  channels: Channel[];
}

// Icon mapping
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  google: SiGoogle,
  youtube: SiYoutube,
  instagram: SiInstagram,
  x: SiX,
  tiktok: SiTiktok,
  linkedin: SiLinkedin,
  facebook: SiFacebook,
  reddit: SiReddit,
  threads: SiThreads,
  pinterest: SiPinterest,
  snapchat: SiSnapchat,
  chatgpt: BsChatLeftText,
};

export default function ChannelsCarousel({ title, channels }: ChannelsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
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
      slidesPerView: 3,
      loop: true,
      speed: 7000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      breakpoints: {
        1920: {
          slidesPerView: 8.5,
        },
        1440: {
          slidesPerView: 7.5,
        },
        1024: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 5,
        },
        640: {
          slidesPerView: 2.5,
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
        xPercent: -5,
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
    <section className="w-full pb-6 | xl:pb-12">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-20 w-full gap-y-2">
          {/* Left: Title */}
          <div className="col-span-20 flex items-center | md:col-span-4 | lg:col-span-3 | xl:col-span-2">
            <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-sm/tight font-sans-primary font-medium tracking-tight js-heading sm:max-w-32">
              {title}
            </h2>
          </div>

          {/* Right: Carousel with blur edges */}
          <div className="relative w-full col-span-20 | md:col-span-16 | lg:col-span-17 | xl:col-span-18">
            {/* Blur overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-grey-100 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-grey-100 to-transparent z-10 pointer-events-none"></div>

            <div className="w-full relative overflow-hidden z-0">
              <div
                ref={containerRef}
                className="flex relative z-0 overflow-hidden w-[120vw] | js-container"
              >
                <div ref={swiperRef} className="w-full | swiper">
                  <div className="!ease-linear | swiper-wrapper">
                    {channels.map((channel) => {
                      const Icon = iconMap[channel.iconName.toLowerCase()];
                      if (!Icon) return null;
                      return (
                        <div key={channel.id} className="swiper-slide">
                          <div className="w-20 py-5 relative | lg:w-24">
                            <div className="w-full h-full relative flex items-center justify-center">
                              <Icon className="w-10 h-10 | lg:w-12 lg:h-12 text-black" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
