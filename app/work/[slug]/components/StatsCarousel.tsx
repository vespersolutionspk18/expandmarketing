'use client';

interface StatCard {
  value: string;
  label: string;
}

interface StatsCarouselProps {
  stats: StatCard[];
}

export default function StatsCarousel({ stats }: StatsCarouselProps) {
  return (
    <section className="w-full py-6 md:py-8 lg:py-12">
      <div className="w-full px-4 md:px-7">
        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex gap-3 md:gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[calc(50vw-2rem)] lg:w-[calc(33.333vw-2rem)] xl:w-[calc(25vw-2rem)]"
              >
                <div className="w-full bg-white rounded-2xl inline-flex flex-col items-start justify-end p-5 lg:p-7 lg:pt-24">
                  {/* Number */}
                  <div className="flex flex-row">
                    <div className="inline-flex flex-col items-start relative overflow-hidden font-medium tracking-tight leading-tight text-6xl text-grey-900">
                      {stat.value}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight font-medium tracking-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
