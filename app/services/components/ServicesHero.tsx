import React from 'react'
import Button from '@/app/components/Button'

const ServicesHero = () => {
  return (
    <section className="w-full pt-12 xl:pt-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">

          {/* Left Column - Title */}
          <div className="col-span-12 flex lg:col-span-6 2xl:col-span-7">
            <h1 className="inline-flex flex-wrap text-balance relative md:pr-1 md:pb-2 md:mt-4 md:-mb-3 flex flex-col text-left justify-start text-gray-900 text-6xl/[0.9] md:text-7xl/none lg:text-7xl/none 2xl:text-8xl/[0.9] 4xl:text-[8.5rem]/[0.9] font-medium tracking-tight">
              <div className="flex flex-wrap relative md:-mt-6 md:pb-6 md:overflow-hidden text-left justify-start">
                <div className="inline mr-2 md:mr-0">Our</div>
                <div className="inline shrink-0 flex bg-black/10 bg-black/5 relative overflow-hidden mr-2 md:mr-0 aspect-square w-[0.9em] rounded-md">
                  <div className="w-full h-full relative">
                    <picture className="">
                      <source
                        type="image/webp"
                        srcSet="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&q=80 200w"
                        sizes="100vw"
                      />
                      <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                        srcSet="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&q=90 200w"
                        sizes="100vw"
                        alt="Our Services"
                        className="w-full h-full object-cover object-center absolute inset-0"
                      />
                    </picture>
                  </div>
                </div>
                <div className="inline mr-2 md:mr-0">Services</div>
              </div>
            </h1>
          </div>

          {/* Right Column - Description and CTA */}
          <div className="col-span-12 flex flex-col items-start justify-start md:col-span-10 lg:justify-end lg:items-end lg:col-span-6 2xl:col-span-5">
            <div className="inline-flex flex-col items-start gap-y-3 md:gap-y-5">

              {/* Description */}
              <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-lg/tight md:text-xl/tight xl:text-2xl/none xl:text-3xl/none 4xl:text-4xl/none font-medium tracking-tight">
                Search-first strategies that create category leaders across every platform where your audience searches
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <Button href="/contact" variant="secondary">
                  Connect with us
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesHero
