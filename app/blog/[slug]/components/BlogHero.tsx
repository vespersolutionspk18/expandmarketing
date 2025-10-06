'use client';

import Image from 'next/image';

interface BlogHeroProps {
  title: string;
  category: string;
  featuredImage: string;
}

export default function BlogHero({ title, category, featuredImage }: BlogHeroProps) {
  return (
    <section className="w-full pt-24 md:pt-28 lg:pt-32">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-5 gap-x-3 md:gap-x-5">

          {/* Title */}
          <div className="col-span-12">
            <h1 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-5xl/none | lg:text-6xl/none | xl:text-7xl/0.9 | 3xl:text-7.5xl/0.9 | 4xl:text-8xl/0.9 font-medium tracking-tight">
              {title}
            </h1>
          </div>

          {/* Border */}
          <div className="col-span-12 border-t border-grey-200"></div>

          {/* Featured Image with Category Badge */}
          <div className="col-span-12 grid">

            {/* Category Badge Overlay */}
            <div className="col-start-1 row-start-1 z-20 p-3 flex items-start gap-2">
              <div className="flex flex-wrap gap-1">
                <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                  <div>{category}</div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="row-start-1 col-start-1 rounded-3xl overflow-hidden">
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity"
                  priority
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
