'use client'

import React, { useState, useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Service {
  id: string
  title: string
  category: string
  year: string
  description: string
  image: string
  stats: {
    metric: string
    value: string
  }
}

const services: Service[] = [
  {
    id: '1',
    title: 'Global E-Commerce Platform',
    category: 'SEO Strategy',
    year: '2023-2025',
    description: 'An extra 3m clicks regionally through SEO optimization and content strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    stats: {
      metric: 'Organic Traffic',
      value: '+300%'
    }
  },
  {
    id: '2',
    title: 'Financial Services App',
    category: 'Content Marketing',
    year: '2024',
    description: 'Dominating finance SERPs with strategic content and topical authority',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    stats: {
      metric: 'Conversions',
      value: '+250%'
    }
  },
  {
    id: '3',
    title: 'Travel & Hospitality Chain',
    category: 'Digital PR',
    year: '2023-2024',
    description: 'Building authority through earned media and strategic link building',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    stats: {
      metric: 'Media Mentions',
      value: '500+'
    }
  },
  {
    id: '4',
    title: 'Healthcare Provider Network',
    category: 'Technical SEO',
    year: '2024-2025',
    description: 'Site speed optimization and crawlability improvements for better rankings',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    stats: {
      metric: 'Page Speed',
      value: '95/100'
    }
  },
  {
    id: '5',
    title: 'Retail Fashion Brand',
    category: 'Social Media',
    year: '2024',
    description: 'Viral campaigns driving brand awareness and engagement across platforms',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    stats: {
      metric: 'Reach',
      value: '10M+'
    }
  },
  {
    id: '6',
    title: 'B2B Software Company',
    category: 'Link Building',
    year: '2023-2025',
    description: 'High-authority backlinks from industry leaders and tech publications',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    stats: {
      metric: 'Domain Rating',
      value: 'DR 75'
    }
  },
  {
    id: '7',
    title: 'Food Delivery Platform',
    category: 'Local SEO',
    year: '2024',
    description: 'Dominating local search results across 50+ major cities nationwide',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
    stats: {
      metric: 'Local Rankings',
      value: '#1'
    }
  }
]

const Services = () => {
  const [activeService, setActiveService] = useState<Service>(services[0])
  const sectionRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        pin: section.querySelector('.pinned-container'),
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white" id="services-section">
      <div className="pinned-container min-h-screen w-full">
        <div className="container mx-auto px-8 py-20 h-full">
          <div className="mb-16">
            <h2 className="text-6xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600">
              Transforming brands through strategic digital marketing
            </p>
          </div>

          <div className="flex gap-16 h-[calc(100vh-250px)]">
            {/* Left Column - Service List */}
            <div className="w-1/3 overflow-y-auto pr-8">
              <ul className="flex flex-col gap-y-2">
                {services.map((service) => (
                  <li
                    key={service.id}
                    onMouseEnter={() => setActiveService(service)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${activeService.id === service.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-sm text-gray-500">{service.category}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Service Details */}
            <div className="w-2/3 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="h-full flex flex-col">
                    <div className="relative w-full h-2/3 rounded-lg overflow-hidden mb-8">
                      <Image
                        src={activeService.image}
                        alt={activeService.title}
                        fill
                        className="object-cover"
                        sizes="66vw"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">
                          {activeService.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <span>{activeService.category}</span>
                          <span>•</span>
                          <span>{activeService.year}</span>
                        </div>
                        <p className="text-gray-600">
                          {activeService.description}
                        </p>
                      </div>
                      <div className="text-right ml-8">
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {activeService.stats.metric}
                        </div>
                        <div className="text-2xl font-bold">
                          {activeService.stats.value}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
