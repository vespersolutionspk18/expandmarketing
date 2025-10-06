'use client';

import Image from 'next/image';
import Link from 'next/link';
import { projectListings } from '../data';
import { ProjectListingItem } from '../data/types';

function WorkCard({ item }: { item: ProjectListingItem }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className={`${item.colSpan} grid group rounded-3xl overflow-hidden circle-mask-container`}
    >
      {/* Background Image */}
      <div className="col-start-1 row-start-1 transition md:group-hover:scale-105">
        <div className="relative overflow-hidden w-full h-[30vw]">
          <picture>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
        </div>
      </div>

      {/* Category Badge - Top Right */}
      <div className="col-start-1 row-start-1 p-2 sm:p-3 lg:items-end lg:p-5 z-30 flex justify-end items-start">
        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-xs sm:text-sm gap-x-2 sm:gap-x-3 py-2 px-2.5 sm:py-2.5 sm:px-3.5 lg:text-base">
          {item.services.map((service, index) => (
            <div key={index}>{service}</div>
          ))}
        </div>
      </div>

      {/* Mobile Title - Bottom Left */}
      <div className="col-start-1 row-start-1 p-2 sm:p-3 lg:hidden lg:p-5 z-30 relative flex justify-start items-end">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">[{item.client}]</div>
          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-xl sm:text-2xl md:text-3xl/none font-medium tracking-tight">
            {item.title}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70"></div>
      </div>

      {/* Hover Overlay with Color - Circle Mask - DESKTOP ONLY */}
      <div
        className="hidden lg:flex col-start-1 row-start-1 grid-cols-12 flex-col items-start justify-between z-40 p-3 transition lg:p-5 circle-mask"
        style={{
          backgroundColor: item.color,
          color: '#111212'
        }}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none font-medium tracking-tight">
          {item.description}
        </div>

        <div className="w-full flex items-end justify-between">
          <div className="grid gap-y-1">
            <div className="text-current text-xs font-medium">[{item.client}]</div>
            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-xl lg:text-2xl xl:text-3xl/none font-medium tracking-tight">
              {item.title}
            </div>
          </div>
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
            {item.services.map((service, index) => (
              <div key={index}>{service}</div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function WorkGrid() {
  return (
    <section className="w-full pb-12 bg-grey-100">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          {projectListings.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
