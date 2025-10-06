'use client';

import Image from 'next/image';
import Header from '../../components/Header';

export default function WorkHero() {
  return (
    <>
      <Header />
      <section className="w-full pt-12 xl:pt-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Left Column - Heading */}
          <div className="col-span-12 flex lg:col-span-6 2xl:col-span-7">
            <h1 className="inline-flex flex-wrap text-balance flex-col text-left text-gray-900 text-6xl leading-[0.9] md:text-7xl lg:text-7xl 2xl:text-8xl 2xl:leading-[0.9] font-medium tracking-tight">
              <div className="flex flex-wrap text-left">
                <span className="inline mr-2">The</span>
                <span className="inline mr-2">Problems</span>
              </div>
              <div className="flex flex-wrap text-left items-center">
                <span className="inline mr-2">We</span>
                {/* Inline Image */}
                <span
                  className="inline shrink-0 flex bg-black/10 relative overflow-hidden bg-black/5 mr-2 rounded-lg p-0.5"
                  style={{ width: '1em', height: '1em' }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                      alt="Solve"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>
                </span>
                <span className="inline mr-2">Solve</span>
              </div>
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="col-span-12 flex flex-col items-start justify-start md:col-span-10 lg:justify-end lg:items-end lg:col-span-6 2xl:col-span-5">
            <div className="inline-flex flex-col items-start gap-y-3 md:gap-y-5">
              <div className="inline-flex flex-wrap text-balance text-left text-gray-900 text-lg leading-tight md:text-xl md:leading-tight xl:text-2xl xl:leading-none 2xl:text-3xl 2xl:leading-none 4xl:text-4xl 4xl:leading-none font-medium tracking-tight">
                Clients globally come to us with either one of these problems: Demand or Discovery. We drive search demand or discovery for brands with ambitions to be category leaders.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
