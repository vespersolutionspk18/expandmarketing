'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

interface Logo {
  name: string
  url: string
}

const LogoCarousel: React.FC = () => {
  const logos: Logo[] = [
    {
      name: 'Company 1',
      url: 'https://logo.clearbit.com/google.com'
    },
    {
      name: 'Company 2',
      url: 'https://logo.clearbit.com/microsoft.com'
    },
    {
      name: 'Company 3',
      url: 'https://logo.clearbit.com/apple.com'
    },
    {
      name: 'Company 4',
      url: 'https://logo.clearbit.com/amazon.com'
    },
    {
      name: 'Company 5',
      url: 'https://logo.clearbit.com/meta.com'
    },
    {
      name: 'Company 6',
      url: 'https://logo.clearbit.com/netflix.com'
    },
    {
      name: 'Company 7',
      url: 'https://logo.clearbit.com/tesla.com'
    },
    {
      name: 'Company 8',
      url: 'https://logo.clearbit.com/spotify.com'
    },
    {
      name: 'Company 9',
      url: 'https://logo.clearbit.com/airbnb.com'
    },
    {
      name: 'Company 10',
      url: 'https://logo.clearbit.com/uber.com'
    },
    {
      name: 'Company 11',
      url: 'https://logo.clearbit.com/slack.com'
    },
    {
      name: 'Company 12',
      url: 'https://logo.clearbit.com/shopify.com'
    }
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="w-full pb-6 xl:pb-12">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-1 w-full gap-y-2">
          <div className="relative w-full overflow-hidden">
            <div className="w-full relative overflow-hidden">
              {/* Infinite Scroll Container */}
              <div className="flex relative overflow-hidden w-full">
                <motion.div
                  className="flex"
                  animate={{
                    x: [0, -1920]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 25,
                      ease: "linear"
                    }
                  }}
                >
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex-shrink-0 w-20 lg:w-24 py-5"
                    >
                      <div className="w-full h-full relative">
                        <div className="w-full h-full relative" style={{ aspectRatio: '20/9' }}>
                          <img
                            src={logo.url}
                            alt={logo.name}
                            className="w-full h-full object-contain absolute inset-0 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to placeholder if logo fails to load
                              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="72" viewBox="0 0 160 72"%3E%3Crect width="160" height="72" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%239ca3af"%3ELogo%3C/text%3E%3C/svg%3E'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-grey-100 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-grey-100 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
