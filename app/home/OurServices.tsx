'use client'

import React from 'react'
import Image from 'next/image'
import { HiArrowUpRight } from 'react-icons/hi2'
import Button from '../components/Button'

interface Service {
  title: string
  href: string
  image: string
}

const services: Service[] = [
  {
    title: 'Search & Growth Strategy',
    href: '/services/strategy-growth',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Onsite SEO',
    href: '/services/onsite-seo',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Content Experience',
    href: '/services/content-experience',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Digital PR',
    href: '/services/digital-pr',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Social Media & Campaigns',
    href: '/services/social',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Data & Insights',
    href: '/services/data-insights',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Social Video SEO',
    href: '/services/social-video-seo',
    image: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'AI Automation',
    href: '/services/ai-automation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  },
  {
    title: 'CRM Consultancy',
    href: '/services/crm-consultancy',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80'
  }
]

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
          <div className="col-start-1 row-start-1 relative z-20 py-4 flex items-center gap-3 text-black transition duration-500 lg:py-6 pointer-fine:group-hover:text-white">

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
                  <div className="transition -translate-x-full translate-y-full -rotate-45 pointer-fine:group-hover:rotate-0 pointer-fine:group-hover:translate-x-0 pointer-fine:group-hover:translate-y-0">
                    <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-medium tracking-tight">
                      <HiArrowUpRight />
                    </h2>
                  </div>
                </div>

                {/* Service Title */}
                <div className="transition pointer-fine:group-hover:translate-x-14">
                  <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none font-medium tracking-tight">
                    {service.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image Layer - rounded pill shape */}
          <div className="col-start-1 row-start-1 relative rounded-full overflow-hidden z-10 transition bg-black opacity-0 pointer-fine:group-hover:opacity-100">
            <div className="w-full h-full opacity-60 transition pointer-fine:group-hover:scale-[1.05]">
              <div className="relative overflow-hidden w-full h-full">
                <picture>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                    style={{ objectPosition: '50% 50%' }}
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
          <div className="col-span-12">

            {/* Header Section */}
            <div className="grid grid-cols-12 md:border-b md:border-[#bebebe] md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

              {/* Title with embedded image */}
              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3 flex flex-col text-left justify-start text-gray-900 text-6xl/tight md:text-7xl/none lg:text-7xl/none 2xl:text-8xl/[0.9] font-medium tracking-tight">
                  <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-left justify-start items-center">
                    <div className="inline mr-2 pointer-fine:mr-0">Our</div>
                    <div className="inline shrink-0 flex bg-black/10 relative overflow-hidden bg-black/5 mx-2 pointer-fine:mx-0 aspect-square h-[0.9em] rounded-md">
                      <div className="w-full h-full relative">
                        <picture>
                          <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                            alt="Services"
                            className="w-full h-full object-cover object-center absolute inset-0"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="inline mr-2 pointer-fine:mr-0">Services</div>
                  </div>
                </h2>
              </div>

              {/* View All Services Button - Desktop */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <Button href="/services" variant="secondary">
                  View All Services
                </Button>
              </div>
            </div>
          </div>

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