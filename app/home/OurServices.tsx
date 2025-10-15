'use client'

import React from 'react'

import { HiArrowUpRight } from 'react-icons/hi2'

import { getServicesForHomepage } from '@/app/data/services'

interface Service {
  title: string
  href: string
  image: string
}

// Import services from central controller - get first 9 services
const regularServices: Service[] = getServicesForHomepage()

// Add the 10th special "More Services" card
const moreServicesCard: Service = {
  title: 'More Services We Offer',
  href: '/services',
  image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
}

// Combine all services
const services: Service[] = [...regularServices, moreServicesCard]

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="col-span-12 -my-px md:col-span-6">
      <div className="group relative">
        {/* Border line */}
        <div className="absolute w-full bottom-0 left-0 z-0 pointer-fine:px-12">
          <div className="w-full h-px bg-[#bebebe]"></div>
        </div>

        <a href={service.href} className="grid grid-cols-1 relative z-10">
          {/* Text Content Layer */}
          <div className="col-start-1 row-start-1 relative z-20 py-4 flex items-center gap-3 text-black transition-colors duration-500 lg:py-6 pointer-fine:group-hover:text-white" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>

            {/* Mobile Thumbnail - HIDDEN ON DESKTOP */}
            <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden md:rounded-xl md:w-16 md:h-16 pointer-fine:hidden">
              <picture>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover absolute inset-0 transition-opacity"
                  loading="lazy"
                  style={{ opacity: 0 }}
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="pointer-fine:translate-x-10">
              <div className="relative">
                {/* Animated Arrow */}
                <div className="absolute pr-2 top-0 left-0 overflow-hidden">
                  <div className="transition-transform duration-500 -translate-x-full translate-y-full -rotate-45 pointer-fine:group-hover:rotate-0 pointer-fine:group-hover:translate-x-0 pointer-fine:group-hover:translate-y-0" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
                    <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-medium tracking-tight">
                      <HiArrowUpRight />
                    </h2>
                  </div>
                </div>

                {/* Service Title */}
                <div className="transition-transform duration-500 pointer-fine:group-hover:translate-x-14" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
                  <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-medium tracking-tight">
                    {service.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image Layer - rounded pill shape */}
          <div className="col-start-1 row-start-1 relative rounded-full overflow-hidden z-10 transition-opacity duration-500 bg-black opacity-0 pointer-fine:group-hover:opacity-100" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}>
            <div className="w-full h-full opacity-60 transition-transform duration-500 pointer-fine:group-hover:scale-[1.05]" style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}>
              <div className="relative overflow-hidden w-full h-full">
                <picture>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 50%', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

const OurServices = () => {
  return (
    <section className="w-full pb-12 xl:pb-24 pt-24 md:pt-32">
      <div className="w-full px-4 md:px-7">

        {/* Outer container */}
        <div className="grid grid-cols-12 overflow-hidden lg:pt-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">
         

          {/* Services Grid */}
          <div className="col-span-12 grid grid-cols-12 gap-x-2">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices