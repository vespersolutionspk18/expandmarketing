'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  suffix?: string;
  label: string;
}

interface ServiceStatsProps {
  stats: Stat[];
}

const StatisticNumber = ({ value, isMobile = false }: { value: string; isMobile?: boolean }) => {
  return (
    <div
      className={`inline-flex flex-col items-start relative overflow-hidden font-medium tracking-tight leading-none ${
        isMobile ? 'text-7xl | lg:text-8xl text-grey-900' : 'text-7xl | lg:text-8xl text-grey-900'
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

export default function ServiceStats({ stats }: ServiceStatsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
                      {stat.suffix && (
                        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading -translate-y-4">
                          {stat.suffix}
                        </div>
                      )}
                    </div>
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
              {/* Stat Content */}
              <div className="inline-flex flex-col items-start justify-start -mb-4 border-l border-grey-200 pt-10 pl-8 pr-6">
                <div className="flex items-end gap-x-2">
                  <StatisticNumber value={stat.value} isMobile={false} />
                  {stat.suffix && (
                    <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading -translate-y-4">
                      {stat.suffix}
                    </div>
                  )}
                </div>
                <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading -mt-2 mb-4">
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
