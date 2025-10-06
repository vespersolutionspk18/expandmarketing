'use client'

import React from 'react'
import Button from '@/app/components/Button'

const WhoWeAre = () => {
  return (
    <section className="w-full py-12 | xl:py-24">
      <div className="w-full px-4 | md:px-7">
        <div className="w-full flex justify-between items-start | flex-col-reverse | md:flex-row | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-5">

          {/* Mobile buttons - shown only on mobile */}
          <div className="flex flex-wrap gap-4 w-full | md:hidden">
            <Button href="/careers" variant="secondary" className="w-full">
              Our Culture
            </Button>
            <Button href="/services" variant="ghost" className="w-full">
              Our Services
            </Button>
          </div>

          {/* "Who we are" heading */}
          <div className="w-full mb-1 | md:mt-2 md:mb-0 max-w-xs | 3xl:max-w-2xl | 4xl:max-w-3xl">
            <div className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
              Who we are
            </div>
          </div>

          {/* Main content */}
          <div className="w-full grid  | max-w-3xl | md:max-w-5xl | 2xl:max-w-[54rem] | 3xl:max-w-[58rem] | 4xl:max-w-5xl | gap-y-3 | md:gap-y-7">

            {/* Main heading */}
            <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
              A global team of search-first strategists creating category leaders across UK, USA, and EU
            </h2>

            {/* Desktop buttons - hidden on mobile */}
            <div className="flex flex-wrap gap-4 hidden | md:flex">
              <Button href="/careers" variant="secondary">
                Our Culture
              </Button>
              <Button href="/services" variant="ghost">
                Our Services
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
