'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
  image?: string;
}

const stats: Stat[] = [
  {
    value: '4',
    label: 'Global Offices',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
  },
  {
    value: '79+',
    label: 'Awards Won',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
  },
  {
    value: '60',
    label: 'Minutes to Results',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
  },
  {
    value: '#1',
    label: 'Most Recommended',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
  },
];

const StatisticNumber = ({ value, isMobile = false }: { value: string; isMobile?: boolean }) => {
  return (
    <div
      className={`inline-flex flex-col items-start relative overflow-hidden font-medium tracking-tight leading-none ${
        isMobile
          ? 'text-7xl lg:text-8xl text-grey-900'
          : 'text-7.5xl xl:text-8xl 2xl:text-9xl text-white'
      } js-statistic`}
      data-value={value}
      style={{ filter: 'blur(20px)' }}
    >
      <div className="opacity-0 relative">{value}</div>
      <div className="absolute top-0 left-0 flex flex-col items-start js-statistic-numbers">
        <div className="opacity-0 relative">{value}</div>
        <div className="js-statistic-number">0</div>
        <div className="js-statistic-number">1</div>
        <div className="js-statistic-number">2</div>
        <div className="js-statistic-number">3</div>
        <div className="js-statistic-number">4</div>
        <div className="js-statistic-number">5</div>
        <div className="js-statistic-number">6</div>
        <div className="js-statistic-number">7</div>
        <div className="js-statistic-number">8</div>
        <div className="js-statistic-number">9</div>
        <div className="js-statistic-number">{value}</div>
      </div>
    </div>
  );
};

export default function AboutStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorImagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate statistics on scroll
    const statistics = sectionRef.current.querySelectorAll('.js-statistic');

    statistics.forEach((stat) => {
      ScrollTrigger.create({
        trigger: stat,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(stat, {
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power2.out',
          });

          const numbersContainer = stat.querySelector('.js-statistic-numbers');
          const allChildren = numbersContainer?.children;
          if (!allChildren || allChildren.length === 0) return;

          const numberHeight = allChildren[1]?.getBoundingClientRect().height || 0;
          const targetIndex = allChildren.length - 1;

          gsap.to(numbersContainer, {
            y: -(numberHeight * targetIndex),
            duration: 1.2,
            ease: 'power3.out',
          });
        },
      });
    });

    // Cursor image follow on desktop
    const handleMouseMove = (event: MouseEvent) => {
      cursorImagesRef.current.forEach((image) => {
        if (image) {
          gsap.to(image, {
            left: event.clientX - image.offsetWidth / 2,
            top: event.clientY - image.offsetHeight / 2 + window.scrollY,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-0" ref={sectionRef}>

        {/* Mobile Carousel */}
        <div className="w-full | lg:hidden">
          <div className="w-full overflow-x-auto">
            <div className="flex gap-x-4 px-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex-shrink-0 w-[calc(100%-2rem)]">
                  <div className="flex flex-col items-start border-l border-grey-200 pt-5 pl-5">
                    <div className="flex items-end gap-x-2">
                      <StatisticNumber value={stat.value} isMobile={true} />
                    </div>
                    <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading -translate-y-4"></div>
                    <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading -mt-2 mb-4">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="justify-between pl-7 pr-7 hidden | lg:flex lg:pr-12 | xl:pr-32">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Cursor Image */}
              {stat.image && (
                <div
                  ref={(el) => { cursorImagesRef.current[index] = el; }}
                  className="pointer-events-none w-1/5 z-20 absolute rounded-3xl overflow-hidden opacity-0 transition hidden | pointer-fine:flex | js-cursor-image"
                  style={{ position: 'absolute' }}
                >
                  <Image
                    src={stat.image}
                    alt={stat.label}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Stat Content */}
              <div
                className="inline-flex flex-col z-30 items-start justify-start -mb-4 mix-blend-difference border-l border-grey-900 pt-10 pl-8 pr-6"
                onMouseEnter={() => {
                  if (cursorImagesRef.current[index]) {
                    gsap.to(cursorImagesRef.current[index], { opacity: 1, duration: 0.3 });
                  }
                }}
                onMouseLeave={() => {
                  if (cursorImagesRef.current[index]) {
                    gsap.to(cursorImagesRef.current[index], { opacity: 0, duration: 0.3 });
                  }
                }}
              >
                <div className="flex items-end gap-x-2">
                  <StatisticNumber value={stat.value} isMobile={false} />
                </div>
                <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading -translate-y-4"></div>
                <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-lg/tight font-sans-primary font-medium tracking-tight js-heading -mt-2 mb-4 max-w-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
