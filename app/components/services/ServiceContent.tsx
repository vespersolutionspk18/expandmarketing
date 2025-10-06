import React from 'react';

interface ServiceContentProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
}

export default function ServiceContent({ title, subtitle, paragraphs }: ServiceContentProps) {
  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-12 | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-5">
          {/* Left column - Title */}
          <div className="col-span-12 | lg:col-span-5 | xl:col-span-6">
            <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
              {title}
            </h2>
          </div>

          {/* Right column - Content */}
          <div className="col-span-12 | lg:col-span-7 | xl:col-span-6 | 3xl:col-span-5 3xl:col-start-8">
            <div className="w-full lg:pr-20">
              {subtitle && (
                <h3
                  className="font-medium tracking-tight leading-none capitalize text-balance mb-4 text-grey-900 text-xl | lg:text-2xl"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm font-sans-primary leading-normal text-pretty ${
                    index === paragraphs.length - 1 ? 'mb-0' : 'mb-5'
                  } | lg:text-base text-grey-900`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
