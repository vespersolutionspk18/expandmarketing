import React from 'react';

interface ServiceHeroProps {
  label: string;
  title: string;
}

export default function ServiceHero({ label, title }: ServiceHeroProps) {
  return (
    <section className="w-full py-12 | xl:pt-24">
      <div className="w-full px-4 | md:px-7">
        <div className="w-full flex justify-between items-start | flex-col | md:flex-row | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-5">
          {/* Left: Label */}
          <div className="w-full mb-1 | md:mt-2 md:mb-0 max-w-xs | 3xl:max-w-2xl | 4xl:max-w-3xl">
            <div className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
              {label}
            </div>
          </div>

          {/* Right: Main heading */}
          <div className="w-full grid  | max-w-3xl | md:max-w-5xl | 2xl:max-w-[54rem] | 3xl:max-w-[58rem] | 4xl:max-w-5xl | gap-y-3 | md:gap-y-7">
            <h1 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-3xl/none | lg:text-4xl/none | xl:text-5xl/none | 3xl:text-6xl/none font-sans-primary font-medium tracking-tight js-heading">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
