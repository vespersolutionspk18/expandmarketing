"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Button from './Button';
import Image from 'next/image';

interface LeadChangeProps {
  text?: string;
  imageSrc?: string;
}

/**
 * GSAP horizontalLoop helper function for seamless infinite marquee
 * Source: https://gsap.com/docs/v3/HelperFunctions/helpers/seamlessLoop
 */
function horizontalLoop(items: HTMLElement[], config: { repeat?: number; paused?: boolean; speed?: number; snap?: number | boolean; paddingRight?: string | number }) {
  items = gsap.utils.toArray(items);
  config = config || {};

  const tl = gsap.timeline({
      repeat: config.repeat ?? -1,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => { tl.totalTime(tl.rawTime() + tl.duration() * 100) }
    });
  const length = items.length;
  const startX = items[0].offsetLeft;
  const times: number[] = [];
  const widths: number[] = [];
  const xPercents: number[] = [];
  const pixelsPerSecond = (config.speed || 1) * 100;
  const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(typeof config.snap === 'number' ? config.snap : 1);
  let curX: number;
  let distanceToStart: number;
  let distanceToLoop: number;
  let item: HTMLElement;
  let i: number;

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
        (gsap.getProperty(el, "xPercent") as number)
      );
      return xPercents[i];
    }
  });

  gsap.set(items, { x: 0 });

  const totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) +
    (parseFloat(config.paddingRight as string) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond
      },
      0
    )
    .fromTo(
      item,
      {
        xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100)
      },
      {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false
      },
      distanceToLoop / pixelsPerSecond
    )
    .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
}

const LeadChange: React.FC<LeadChangeProps> = ({
  text = "Lead The Change",
  imageSrc = "https://images.pexels.com/photos/11278239/pexels-photo-11278239.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95&fit=crop"
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeWrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const loopRef = useRef<gsap.core.Timeline | null>(null);

  // Marquee infinite scroll animation using horizontalLoop
  useEffect(() => {
    const marqueeWrapper = marqueeWrapperRef.current;
    if (!marqueeWrapper) return;

    const items = gsap.utils.toArray('.marquee-item') as HTMLElement[];
    if (items.length === 0) return;

    // Create seamless horizontal loop
    loopRef.current = horizontalLoop(items, {
      speed: 0.5, // Adjust speed (lower = slower)
      repeat: -1,
      paddingRight: parseFloat(getComputedStyle(document.documentElement).fontSize) * 2 // 2rem padding
    });

    return () => {
      loopRef.current?.kill();
    };
  }, []);

  // Floating button cursor follower (desktop only)
  useEffect(() => {
    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    if (!mediaQuery.matches) return;

    // Set initial button state
    gsap.set(button, {
      opacity: 0,
      scale: 0,
      xPercent: -50,
      yPercent: -50
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        x,
        y,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(button, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(button, {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        ease: "power2.in"
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-8 sm:py-10 lg:py-26 relative lg:[&_*]:cursor-none"
      style={{ cursor: isHovered ? 'none' : 'default' }}
    >
      {/* Marquee wrapper */}
      <div
        ref={marqueeWrapperRef}
        className="flex whitespace-nowrap"
      >
        {/* Each marquee-item is one atomic unit: text + image */}
        {Array.from({ length: 10 }).map((_, idx) => (
          <div key={idx} className="marquee-item flex items-center shrink-0 pr-3 sm:pr-4 md:pr-6 lg:pr-8">
            <span className="text-black font-sans text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] tracking-tighter">
              {text}
            </span>
            <Image
              alt=""
              src={imageSrc}
              width={600}
              height={600}
              className="rounded-2xl sm:rounded-3xl w-auto h-[2.5rem] sm:h-[3.75rem] md:h-[5rem] lg:h-[8rem] xl:h-[12rem] object-cover ml-3 sm:ml-4 md:ml-6 lg:ml-8"
            />
          </div>
        ))}
      </div>

      {/* Floating button */}
      <div
        ref={buttonRef}
        className="hidden lg:block absolute pointer-events-none z-50"
        style={{ left: 0, top: 0 }}
      >
        <Button route="/contact" variant="primary" className="pointer-events-auto">
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
};

export default LeadChange;
