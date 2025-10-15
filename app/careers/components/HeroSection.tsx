'use client'

import React from 'react'
import Button from '@/app/components/Button'
import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-0">
      <div className="w-full px-0">
        <div className="w-full h-screen p-2">
          <div className="w-full h-full overflow-hidden bg-grey-900 rounded-3xl relative">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img
                src="https://images.pexels.com/photos/7658240/pexels-photo-7658240.jpeg?auto=compress&cs=tinysrgb&w=2000&q=95"
                alt="Team collaboration"
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>

            {/* Overlay with content */}
            <div className="relative w-full h-full z-20 flex justify-center items-end bg-grey-900/40 py-10 px-3 md:p-10">
              <div className="flex flex-col items-center gap-y-3 md:gap-y-5">
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="inline-flex flex-wrap text-balance relative text-center justify-center text-white text-6xl/[0.9] md:text-7xl lg:text-7xl 2xl:text-8xl/[0.9] font-medium tracking-tight mb-2 lg:mb-5"
                >
                  Join Expand Marketing
                </motion.h1>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                  <Button
                    href="#careers"
                    variant="secondary"
                    size="md"
                    className="!bg-white !text-grey-900"
                  >
                    See Open Positions
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
