'use client';

import Image from 'next/image';
import Link from 'next/link';
import ProjectInfo from './ProjectInfo';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  category: string;
  backgroundImage: string;
  year: string;
  services: string;
  industry: string;
  slug: string;
}

export default function ProjectHero({
  title,
  subtitle,
  category,
  backgroundImage,
  year,
  services,
  industry,
  slug
}: ProjectHeroProps) {
  return (
    <section className="w-full py-0">
      <div className="w-full px-4 md:px-7">
        {/* Hero Card */}
        <div className="w-full h-[calc(100svh-6rem)] lg:h-[calc(100svh-12rem)]">
          <div className="w-full h-full overflow-hidden grid bg-grey-900 rounded-3xl">

            {/* Background Image Layer */}
            <div className="col-start-1 row-start-1 relative z-0">
              <div className="w-full h-full relative">
                <Image
                  src={backgroundImage}
                  alt={title}
                  fill
                  className="w-full h-full object-cover absolute inset-0"
                  priority
                />
              </div>
            </div>

            {/* Content Overlay Layer */}
            <div className="col-start-1 row-start-1 z-20 flex bg-grey-900/40 p-5 relative flex-col items-start justify-end lg:justify-between lg:items-end lg:flex-row lg:p-7 xl:p-10">

              {/* Back to Case Studies Link - Top Left (absolute) */}
              <div className="absolute inset-5 z-20 lg:inset-10">
                <Link href="/work" className="inline-flex items-end gap-2 text-white leading-tight text-sm lg:-my-4">
                  <span className="inline-block align-middle text-xs mb-0.5">↖</span>
                  <span className="link">Back To Case Studies</span>
                </Link>
              </div>

              {/* Left Column - Badge + Title */}
              <div className="inline-flex flex-col items-start gap-y-3 md:gap-y-5">
                {/* Badge */}
                <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
                  <span className="inline-block">🔍</span>
                  <div>{category}</div>
                  <span className="inline-block">📈</span>
                </div>

                {/* H1 Title */}
                <h1 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-6xl/[0.9] md:text-7xl/none lg:text-7xl/none 2xl:text-8xl/[0.9] font-medium tracking-tight max-w-2xl">
                  {title}
                </h1>
              </div>

              {/* Right Column - Description */}
              <div className="inline-flex items-end justify-end mt-3 lg:mt-0 lg:mb-2">
                <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-2xl/none lg:text-3xl/none xl:text-4xl/none font-medium tracking-tight max-w-md">
                  {subtitle}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info Row */}
        <ProjectInfo
          year={year}
          services={services}
          industry={industry}
          slug={slug}
        />
      </div>
    </section>
  );
}
