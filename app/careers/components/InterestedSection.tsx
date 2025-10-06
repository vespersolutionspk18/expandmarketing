'use client'

import React from 'react'
import { motion } from 'framer-motion'

const InterestedSection: React.FC = () => {
  return (
    <section className="w-full py-12 xl:py-24">
      <div className="w-full px-4 md:px-7">
        <div className="w-full flex justify-between items-start flex-col-reverse md:flex-row gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">

          {/* Left Column - Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full mb-1 md:mt-2 md:mb-0 max-w-xs 3xl:max-w-2xl 4xl:max-w-3xl"
          >
            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl font-medium tracking-tight">
              Interested?
            </div>
          </motion.div>

          {/* Right Column - Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="w-full grid max-w-3xl md:max-w-5xl 2xl:max-w-[54rem] 3xl:max-w-[58rem] 4xl:max-w-5xl gap-y-3 md:gap-y-7"
          >
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl/[0.9] font-medium tracking-tight">
              Want to work with the best and for the best? Of course you do.
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default InterestedSection
