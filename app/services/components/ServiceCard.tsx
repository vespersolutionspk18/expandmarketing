import React from 'react'

interface ServiceTag {
  label: string
}

interface ServiceCardProps {
  title: string
  description: string
  tags: ServiceTag[]
  href: string
  thumbnailImage: string
  desktopImage: string
}

const ServiceCard = ({ title, description, tags, href, thumbnailImage, desktopImage }: ServiceCardProps) => {
  return (
    <a
      href={href}
      className="w-full grid grid-cols-12 shrink-0 relative items-start last:border-b border-t border-gray-200 overflow-hidden gap-x-3 md:gap-x-5 px-4 md:px-7"
    >
      {/* Left Content Area */}
      <div className="col-span-12 h-full flex flex-col items-start justify-between md:col-span-6 3xl:col-span-8">

        {/* Header Section with Mobile Thumbnail and Title */}
        <div className="pt-7 pb-4 flex items-center gap-3 lg:pb-9">

          {/* Mobile Thumbnail - Hidden on Desktop */}
          <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden lg:hidden">
            <picture className="">
              <source
                type="image/webp"
                srcSet={`${thumbnailImage}?w=400&h=400&q=80&fm=webp&fit=crop 400w`}
                sizes="100vw"
              />
              <img
                src={`${thumbnailImage}?w=400&h=400&q=80&fm=webp&fit=crop`}
                srcSet={`${thumbnailImage}?w=400&h=400&q=100&auto=format&fit=crop 400w`}
                sizes="100vw"
                alt={title}
                className="w-full h-full object-cover absolute inset-0 transition-opacity"
                loading="lazy"
                style={{ opacity: 0 }}
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              />
            </picture>
          </div>

          {/* Service Title */}
          <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/[0.9] font-medium tracking-tight">
            {title}
          </h2>
        </div>

        {/* Footer Section with Description and Tags */}
        <div className="flex justify-between pb-7 flex-col items-start gap-3 lg:flex-row lg:items-end">

          {/* Description */}
          <div className="max-w-xl lg:pr-10">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-medium tracking-tight">
              {description}
            </h2>
          </div>

          {/* Tags */}
          <div className="inline-flex flex-wrap gap-1 shrink-0 lg:flex-nowrap lg:flex-col lg:items-start">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-600 bg-white"
              >
                <div>{tag.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image Area - Hidden on Mobile */}
      <div className="col-span-12 relative rounded-2xl overflow-hidden my-7 hidden md:h-[30svh] md:rounded-3xl md:flex md:col-start-8 md:col-span-5 lg:h-[50svh] 3xl:col-span-4">
        <picture className="">
          <source
            type="image/webp"
            srcSet={`${desktopImage}?w=400&h=300&q=80&fm=webp&fit=crop 400w, ${desktopImage}?w=800&h=600&q=80&fm=webp&fit=crop 800w, ${desktopImage}?w=1200&h=900&q=80&fm=webp&fit=crop 1200w, ${desktopImage}?w=1600&h=1200&q=80&fm=webp&fit=crop 1600w, ${desktopImage}?w=2000&h=1500&q=80&fm=webp&fit=crop 2000w`}
            sizes="100vw"
          />
          <img
            src={`${desktopImage}?w=2000&h=1500&q=80&fm=webp&fit=crop`}
            srcSet={`${desktopImage}?w=400&h=300&q=100&auto=format&fit=crop 400w, ${desktopImage}?w=800&h=600&q=100&auto=format&fit=crop 800w, ${desktopImage}?w=1200&h=900&q=100&auto=format&fit=crop 1200w, ${desktopImage}?w=1600&h=1200&q=100&auto=format&fit=crop 1600w, ${desktopImage}?w=2000&h=1500&q=100&auto=format&fit=crop 2000w`}
            sizes="100vw"
            alt={title}
            className="w-full h-full object-cover absolute inset-0 transition-opacity"
            loading="lazy"
            style={{ opacity: 0 }}
            onLoad={(e) => (e.currentTarget.style.opacity = '1')}
          />
        </picture>
      </div>
    </a>
  )
}

export default ServiceCard
