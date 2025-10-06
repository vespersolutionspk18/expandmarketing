'use client';

import Image from 'next/image';

interface FeaturedImageProps {
  src: string;
  alt?: string;
}

export default function FeaturedImage({ src, alt = 'Featured image' }: FeaturedImageProps) {
  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          <div className="w-full flex relative items-center justify-center overflow-hidden rounded-2xl bg-black/50 p-5 md:p-10 lg:p-20 md:w-auto md:flex-1 lg:rounded-3xl">

            {/* Blurred Background */}
            <div className="absolute top-0 left-0 w-full h-full blur-xl scale-125 opacity-90 z-0">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center absolute inset-0 w-full h-full"
              />
            </div>

            {/* Main Image with 16:9 Aspect Ratio */}
            <div className="w-full rounded-xl overflow-hidden lg:rounded-2xl relative z-10">
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' }}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
