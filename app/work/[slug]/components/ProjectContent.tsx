'use client';

import React from 'react';

interface ContentBlock {
  heading: string;
  content: string[];
  cta?: {
    text: string;
    href: string;
  };
}

interface ProjectContentProps {
  mainHeading?: string;
  blocks: ContentBlock[];
}

export default function ProjectContent({ mainHeading, blocks }: ProjectContentProps) {
  return (
    <section className="w-full py-12 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-20 gap-y-3 lg:gap-y-12 gap-x-3 md:gap-x-5">

          {/* Main Heading (if provided) */}
          {mainHeading && (
            <div className="col-span-18 lg:col-span-14 lg:col-start-5">
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none lg:text-4xl/none xl:text-5xl/none font-medium tracking-tight">
                {mainHeading}
              </h2>
            </div>
          )}

          {/* Content Blocks */}
          {blocks.map((block, index) => (
            <React.Fragment key={index}>
              {/* Subheading */}
              <div className="col-span-20 lg:col-span-3 lg:col-start-5">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight lg:text-lg/tight xl:text-2xl/none font-medium tracking-tight">
                  {block.heading}
                </h2>
              </div>

              {/* Content */}
              <div className="flex flex-col items-start col-span-20 lg:col-span-10 gap-y-3 md:gap-y-5">
                {block.content.map((paragraph, pIndex) => (
                  <div key={pIndex} className="w-full">
                    <p className="text-sm leading-normal text-pretty mb-5 lg:text-base text-grey-900 mb-0">
                      {paragraph}
                    </p>
                  </div>
                ))}

                {/* Optional CTA Button */}
                {block.cta && (
                  <a
                    href={block.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full group inline-flex shrink-0 justify-center gap-x-2 items-center relative leading-tight tracking-tightish capitalize font-medium overflow-hidden border border-transparent cursor-pointer focus:outline-none md:w-auto text-base px-6 py-3 rounded-3xl transition transition-rounded focus:ring-3 pointer-fine:hover:rounded-xl bg-white text-grey-900 ring-grey-900/5 flex-row-reverse"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition pointer-fine:group-hover:-translate-y-6">
                        <div className="flex items-center gap-x-2">
                          <span>{block.cta.text}</span>
                          <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                            ↗
                          </span>
                        </div>
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-6 pointer-fine:group-hover:translate-y-0">
                        <div className="flex items-center gap-x-2">
                          <span>{block.cta.text}</span>
                          <span className="inline-block align-middle motion-safe:transition text-xs mt-1" aria-hidden="true">
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
