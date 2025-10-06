'use client';

import Image from 'next/image';
import Link from 'next/link';

interface RelatedProject {
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

interface RelatedWorkProps {
  projects: RelatedProject[];
}

export default function RelatedWork({ projects }: RelatedWorkProps) {
  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* Header */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none lg:text-4xl/none xl:text-5xl/none font-medium tracking-tight">
                  More work
                </h2>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="col-span-12">
            <div className="w-full overflow-x-auto hide-scrollbar">
              <div className="flex gap-3 md:gap-5 px-4 md:px-7">
                {projects.map((project, index) => (
                  <Link
                    key={index}
                    href={project.href}
                    className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[45vw] xl:w-[35vw] grid group rounded-2xl lg:rounded-3xl overflow-hidden circle-mask-container"
                    style={{ backgroundColor: project.color }}
                  >
                    {/* Background Image */}
                    <div className="col-start-1 row-start-1 relative transition z-0 md:group-hover:scale-105">
                      <div className="relative w-full h-[60vw] md:h-[40vw] lg:h-[35vw]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      </div>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="col-start-1 row-start-1 bg-gradient-to-t from-black opacity-50 z-10"></div>

                    {/* Content - Always Visible on Mobile, Hidden on Desktop Hover */}
                    <div className="col-start-1 row-start-1 p-3 z-30 text-white transition lg:p-5 pointer-fine:group-hover:opacity-0">
                      <div className="w-full h-full flex flex-col items-start justify-between">

                        {/* Bottom Content */}
                        <div className="w-full flex flex-col items-start gap-y-2 mt-auto">
                          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-2xl/none xl:text-3xl/none font-medium tracking-tight">
                            {project.title}
                          </h2>
                          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-base/tight lg:text-lg/tight font-medium tracking-tight">
                            {project.description}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay - Desktop Only */}
                    <div className="hidden lg:flex col-start-1 row-start-1 p-5 z-40 flex-col items-start justify-between circle-mask" style={{ backgroundColor: project.color, color: '#111212' }}>
                      <div className="w-full h-full flex flex-col items-start justify-between">

                        {/* Bottom Content */}
                        <div className="w-full flex flex-col items-start gap-y-2 mt-auto">
                          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-2xl/none xl:text-3xl/none font-medium tracking-tight">
                            {project.title}
                          </h2>
                          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-base/tight lg:text-lg/tight font-medium tracking-tight">
                            {project.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
