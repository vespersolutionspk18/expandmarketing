'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Benefit {
  id: string
  titleLeft: string
  titleRight: string
  image: string
  zIndex: number
  topOffset: number
  initialScale: number
}

const BenefitsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('benefit-1')
  const triggerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const benefits: Benefit[] = [
    {
      id: 'benefit-1',
      titleLeft: '28 Days',
      titleRight: 'Holiday',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95',
      zIndex: 3,
      topOffset: 0,
      initialScale: 1
    },
    {
      id: 'benefit-2',
      titleLeft: 'Work',
      titleRight: 'Anywhere',
      image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95',
      zIndex: 2,
      topOffset: 20,
      initialScale: 0.95
    },
    {
      id: 'benefit-4',
      titleLeft: 'Team',
      titleRight: 'Events',
      image: 'https://images.pexels.com/photos/7551227/pexels-photo-7551227.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95',
      zIndex: 1,
      topOffset: 40,
      initialScale: 0.9
    },
    {
      id: 'benefit-5',
      titleLeft: 'Training &',
      titleRight: 'Development',
      image: 'https://images.pexels.com/photos/3321789/pexels-photo-3321789.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95',
      zIndex: 0,
      topOffset: 60,
      initialScale: 0.85
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const items = itemRefs.current.filter(Boolean)

    if (items.length === 0 || !triggerRef.current) return

    // GSAP ScrollTrigger animation
    const animation = gsap.to(items, {
      yPercent: -200,
      scale: 1.2,
      stagger: 1,
      ease: 'power2.inOut',
      duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top 30%',
        end: 'bottom -50%',
        scrub: true,
        onUpdate: (self) => {
          const offset = 0.1
          const progress = parseFloat((self.progress + offset).toFixed(2))
          const index = Math.floor(progress * items.length)

          if (items[index]) {
            const benefitId = items[index].getAttribute('data-benefit-id')
            if (benefitId) {
              setActiveId(benefitId)
            }
          }
        }
      }
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full pl-4 md:pl-7">

        {/* Mobile Version */}
        <div className="w-full grid gap-y-5 lg:hidden">
          {/* Heading */}
          <div className="flex justify-center">
            <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl font-medium tracking-tight">
              What&apos;s in it for you
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="w-full grid gap-y-5 pr-4 md:pr-7">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                {/* Image */}
                <div className="w-full rounded-2xl overflow-hidden mb-3">
                  <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' }}>
                    <img
                      src={benefit.image}
                      alt={`${benefit.titleLeft} ${benefit.titleRight}`}
                      className="absolute top-0 left-0 w-full h-full object-cover transition-opacity"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl font-medium tracking-tight">
                  {benefit.titleLeft} {benefit.titleRight}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Version with Stack Animation */}
        <div className="hidden lg:block w-full pr-7">
          {/* Scroll Container - 600vh tall */}
          <div
            ref={triggerRef}
            className="w-full relative"
            style={{ height: '600vh' }}
          >
            {/* Sticky Viewport */}
            <div className="w-full h-screen sticky top-0 left-0 overflow-hidden">

              {/* Heading at bottom */}
              <div className="absolute bottom-0 left-0 w-full flex justify-center mb-10">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight xl:text-xl/tight 4xl:text-2xl font-medium tracking-tight">
                  What&apos;s in it for you
                </h2>
              </div>

              {/* Stacked Benefit Cards */}
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  className="w-full h-full absolute left-0 flex items-center justify-center -translate-y-16"
                  style={{ zIndex: benefit.zIndex }}
                >
                  <div className="w-full flex justify-center items-center gap-x-10">

                    {/* Left Text */}
                    <div
                      className={`flex-1 transition flex justify-end relative ${
                        activeId === benefit.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-5'
                      }`}
                      style={{ top: `${benefit.topOffset}px` }}
                    >
                      <div className="inline-flex flex-wrap text-balance relative text-right justify-end text-grey-900 text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl/[0.9] font-medium tracking-tight">
                        {benefit.titleLeft}
                      </div>
                    </div>

                    {/* Center Image - GSAP target */}
                    <div
                      ref={el => { itemRefs.current[index] = el }}
                      data-benefit-id={benefit.id}
                      className="shrink-0 rounded-3xl relative overflow-hidden lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px]"
                      style={{
                        willChange: 'transform',
                        top: `${benefit.topOffset}px`,
                        transform: `scale(${benefit.initialScale})`
                      }}
                    >
                      <div className="relative overflow-hidden w-full h-full">
                        <img
                          src={benefit.image}
                          alt={`${benefit.titleLeft} ${benefit.titleRight}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right Text */}
                    <div
                      className={`flex-1 transition relative ${
                        activeId === benefit.id
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-5'
                      }`}
                      style={{ top: `${benefit.topOffset}px` }}
                    >
                      <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl/[0.9] font-medium tracking-tight">
                        {benefit.titleRight}
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BenefitsSection
