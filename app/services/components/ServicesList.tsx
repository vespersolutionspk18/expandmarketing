"use client";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ServiceTag {
  label: string
}

interface Service {
  title: string
  description: string
  tags: ServiceTag[]
  href: string
  thumbnailImage: string
  desktopImage: string
}

const services: Service[] = [
  {
    title: 'Search & Growth Strategy',
    description: 'Strategic planning and multi-channel search optimization. We\'re audience-first organic media planners building category leaders.',
    tags: [
      { label: 'Multi-channel Strategy' },
      { label: 'Audience Planning' },
      { label: 'Growth Consulting' }
    ],
    href: '/services/strategy-growth',
    thumbnailImage: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Onsite SEO',
    description: 'Technical SEO and website optimization. Industry-leading technical excellence that defends your position in the market.',
    tags: [
      { label: 'Technical SEO' },
      { label: 'Site Architecture' },
      { label: 'Performance' }
    ],
    href: '/services/onsite-seo',
    thumbnailImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Content Experience',
    description: 'Search-driven content creation and strategy. Content marketing work the industry copies 3 years from now.',
    tags: [
      { label: 'Content Strategy' },
      { label: 'Storytelling' },
      { label: 'Search-First' }
    ],
    href: '/services/content-experience',
    thumbnailImage: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Digital PR',
    description: 'Media relations and link building through creative campaigns. Paving the path for creative SEO with Digital PR.',
    tags: [
      { label: 'Media Relations' },
      { label: 'Creative Campaigns' },
      { label: 'Authority Building' }
    ],
    href: '/services/digital-pr',
    thumbnailImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Social Media & Campaigns',
    description: 'Social search optimization and social media marketing. Meeting your consumers at each stage of the journey.',
    tags: [
      { label: 'Social Strategy' },
      { label: 'Community Growth' },
      { label: 'Social Search' }
    ],
    href: '/services/social',
    thumbnailImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Data & Insights',
    description: 'Analytics and performance tracking. Data-driven search strategies across multiple platforms.',
    tags: [
      { label: 'Performance Analytics' },
      { label: 'Strategic Insights' },
      { label: 'ROI Tracking' }
    ],
    href: '/services/data-insights',
    thumbnailImage: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Social Video SEO',
    description: 'TikTok and YouTube optimization. Capturing audiences where they search for video content.',
    tags: [
      { label: 'Video Strategy' },
      { label: 'TikTok SEO' },
      { label: 'YouTube Growth' }
    ],
    href: '/services/social-video-seo',
    thumbnailImage: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'Web Development',
    description: 'Custom website design and development solutions. Building high-performance web experiences optimized for search.',
    tags: [
      { label: 'Custom Development' },
      { label: 'Responsive Design' },
      { label: 'Performance' }
    ],
    href: '/services/web-development',
    thumbnailImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'AI Automation',
    description: 'Intelligent automation and AI-powered solutions. Innovation in ways your competitors don\'t even dream of.',
    tags: [
      { label: 'AI Solutions' },
      { label: 'Process Automation' },
      { label: 'Innovation' }
    ],
    href: '/services/ai-automation',
    thumbnailImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  },
  {
    title: 'CRM Consultancy',
    description: 'Customer relationship management strategy and implementation. Strategic growth partners for everything client-focused.',
    tags: [
      { label: 'CRM Strategy' },
      { label: 'Implementation' },
      { label: 'Customer Success' }
    ],
    href: '/services/crm-consultancy',
    thumbnailImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=400',
    desktopImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1500'
  }
]

const ServicesList = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    if (!triggerRef.current || itemsRef.current.length === 0) return

    const trigger = triggerRef.current
    const items = itemsRef.current

    const itemHeights: number[] = []

    items.forEach((item) => {
      const itemHeight = item.offsetHeight
      itemHeights.push(itemHeight)
    })

    // Calculate cumulative translation for each item
    const cumulativeHeights = itemHeights.reduce<number[]>((acc, val, i) => {
      if (i === 0) {
        acc.push(0)
      } else {
        acc.push(acc[i - 1] + itemHeights[i])
      }
      return acc
    }, [])

    const maxY = cumulativeHeights[cumulativeHeights.length - 1]

    const mm = gsap.matchMedia()

    mm.add('(pointer: fine)', () => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top top',
        end: `+=${maxY}`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress
          const currentY = -progress * maxY
          items.forEach((item, i) => {
            if (i === 0) {
              item.style.transform = 'translateY(0px)'
              return
            }
            const clampY = -cumulativeHeights[i]
            const y = Math.max(clampY, currentY)
            item.style.transform = `translateY(${y}px)`
          })
        }
      })
    })

    mm.add('(pointer: coarse)', () => {
      gsap.set(trigger, {
        height: 'auto',
        y: 0
      })
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <section className="w-full pt-12 xl:pt-24">
      <div className="w-full px-0">
        <div ref={triggerRef} className="w-full">
          <div className="flex flex-col items-start sticky top-0">
            {services.map((service, index) => (
              <a
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el
                }}
                href={service.href}
                className="w-full grid grid-cols-12 shrink-0 relative items-start bg-[rgb(239,238,236)] last:border-b border-t border-gray-200 overflow-hidden gap-x-3 md:gap-x-5 px-4 md:px-7"
              >
                {/* Left Content Area */}
                <div className="col-span-12 h-full flex flex-col items-start justify-between md:col-span-6 3xl:col-span-8">
                  {/* Header Section */}
                  <div className="pt-7 pb-4 flex items-center gap-3 lg:pb-9 js-heading">
                    {/* Mobile Thumbnail */}
                    <div className="inline-flex relative w-12 h-12 rounded-lg overflow-hidden lg:hidden">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={`${service.thumbnailImage}?w=400&h=400&q=80&fm=webp&fit=crop 400w`}
                          sizes="100vw"
                        />
                        <img
                          src={`${service.thumbnailImage}?w=400&h=400&q=80&fm=webp&fit=crop`}
                          srcSet={`${service.thumbnailImage}?w=400&h=400&q=100&auto=format&fit=crop 400w`}
                          sizes="100vw"
                          alt={service.title}
                          className="w-full h-full object-cover absolute inset-0 transition-opacity"
                          loading="lazy"
                          style={{ opacity: 0 }}
                          onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                        />
                      </picture>
                    </div>

                    {/* Service Title */}
                    <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/[0.9] font-medium tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  {/* Footer Section */}
                  <div className="flex justify-between pb-7 flex-col items-start gap-3 lg:flex-row lg:items-end">
                    {/* Description */}
                    <div className="max-w-xl lg:pr-10">
                      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-gray-900 text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-medium tracking-tight">
                        {service.description}
                      </h2>
                    </div>

                    {/* Tags */}
                    <div className="inline-flex flex-wrap gap-1 shrink-0 lg:flex-nowrap lg:flex-col lg:items-start">
                      {service.tags.map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-gray-600 bg-white"
                        >
                          <div>{tag.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image Area */}
                <div className="col-span-12 relative rounded-2xl overflow-hidden my-7 hidden md:h-[30svh] md:rounded-3xl md:flex md:col-start-8 md:col-span-5 lg:h-[50svh] 3xl:col-span-4">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${service.desktopImage}?w=400&h=300&q=80&fm=webp&fit=crop 400w, ${service.desktopImage}?w=800&h=600&q=80&fm=webp&fit=crop 800w, ${service.desktopImage}?w=1200&h=900&q=80&fm=webp&fit=crop 1200w, ${service.desktopImage}?w=1600&h=1200&q=80&fm=webp&fit=crop 1600w, ${service.desktopImage}?w=2000&h=1500&q=80&fm=webp&fit=crop 2000w`}
                      sizes="100vw"
                    />
                    <img
                      src={`${service.desktopImage}?w=2000&h=1500&q=80&fm=webp&fit=crop`}
                      srcSet={`${service.desktopImage}?w=400&h=300&q=100&auto=format&fit=crop 400w, ${service.desktopImage}?w=800&h=600&q=100&auto=format&fit=crop 800w, ${service.desktopImage}?w=1200&h=900&q=100&auto=format&fit=crop 1200w, ${service.desktopImage}?w=1600&h=1200&q=100&auto=format&fit=crop 1600w, ${service.desktopImage}?w=2000&h=1500&q=100&auto=format&fit=crop 2000w`}
                      sizes="100vw"
                      alt={service.title}
                      className="w-full h-full object-cover absolute inset-0 transition-opacity"
                      loading="lazy"
                      style={{ opacity: 0 }}
                      onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                    />
                  </picture>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesList
