'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function BlogHero() {
  const wordsRef = useRef<HTMLDivElement[]>([]);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = wordsRef.current.filter(Boolean);
    const imageWrapper = imageWrapperRef.current;

    // Animate words on load with stagger
    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.6,
      }
    );

    // Animate image wrapper
    if (imageWrapper) {
      gsap.fromTo(
        imageWrapper,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.8,
        }
      );
    }
  }, []);

  return (
    <section className="w-full pt-12 xl:pt-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Left Column - Title */}
          <div className="col-span-12 flex lg:col-span-6 2xl:col-span-7">
            <h1
              className="inline-flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3 flex flex-col text-left justify-start text-grey-900 text-4xl/none md:text-5xl/none lg:text-6xl/none 2xl:text-8xl/[0.9] 4xl:text-[8.5rem]/[0.9] font-sans-primary font-medium tracking-tight"
              data-delay="0.6"
            >
              {/* First Line: "News, [IMAGE] views" */}
              <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-left justify-start">
                <div
                  className="inline mr-2 pointer-fine:mr-0"
                  ref={(el) => {
                    if (el) wordsRef.current[0] = el;
                  }}
                >
                  News,
                </div>
                <div
                  ref={imageWrapperRef}
                  className="inline shrink-0 flex bg-black/10 relative overflow-hidden bg-black/5 mr-2 pointer-fine:mr-0 rounded-lg p-0.5"
                  style={{ width: '1em', height: '1em' }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                      alt="Blog decoration"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>
                </div>
                <div
                  className="inline mr-2 pointer-fine:mr-0"
                  ref={(el) => {
                    if (el) wordsRef.current[1] = el;
                  }}
                >
                  views
                </div>
              </div>

              {/* Second Line: "and everything else" */}
              <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-left justify-start">
                <div
                  className="inline mr-2 pointer-fine:mr-0"
                  ref={(el) => {
                    if (el) wordsRef.current[2] = el;
                  }}
                >
                  and everything else
                </div>
              </div>
            </h1>
          </div>

          {/* Right Column - Empty */}
          <div className="col-span-12 flex flex-col items-start justify-start md:col-span-10 lg:justify-end lg:items-end lg:col-span-6 2xl:col-span-5">
            <div className="inline-flex flex-col items-start gap-y-3 md:gap-y-5">
              {/* Empty - placeholder for future content */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
