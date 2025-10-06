'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './Header'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface HeroUpdatedProps {
  title?: string
  images?: string[]
}

const DEFAULT_IMAGES = [
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
]

const HeroUpdated: React.FC<HeroUpdatedProps> = ({
  title = 'Good design makes life better.',
  images = DEFAULT_IMAGES
}) => {
  const desktopContainerRef = useRef<HTMLDivElement>(null)
  const desktopInnerRef = useRef<HTMLDivElement>(null)
  const tabletContainerRef = useRef<HTMLDivElement>(null)
  const tabletInnerRef = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const mobileInnerRef = useRef<HTMLDivElement>(null)

  const [activeDesktop, setActiveDesktop] = useState(false)
  const [activeTablet, setActiveTablet] = useState(false)
  const [activeMobile, setActiveMobile] = useState(false)

  // Generate images to fill 360 degrees + BUFFER IMAGES for seamless looping
  // We need extra images to ensure no gaps during the cycling transition
  const generateCircularImages = (rotationMultiply: number) => {
    const imagesNeeded = Math.ceil(360 / rotationMultiply)
    // Add 4 extra buffer images to prevent any visible gaps during cycling
    const bufferImages = 4
    const totalImages = imagesNeeded + bufferImages
    const circularImages = []
    for (let i = 0; i < totalImages; i++) {
      circularImages.push(images[i % images.length])
    }
    return circularImages
  }

  const initializeCarousel = (
    containerId: string,
    containerRef: HTMLDivElement,
    innerRef: HTMLDivElement,
    config: {
      duration: number
      rotationMultiply: number
      rotationOffset: number
    },
    setActive: (active: boolean) => void
  ) => {
    const imageElements = containerRef.querySelectorAll(
      `[data-arched-image="${containerId}"]`
    )

    // Position all images in a circle with precise rotation
    imageElements.forEach((image, index) => {
      const rotation = index * config.rotationMultiply - config.rotationOffset
      gsap.set(image, {
        rotation: rotation,
        x: '-50%',
        transformOrigin: 'center bottom',
        force3D: true, // Enable GPU acceleration for smoother animation
        willChange: 'transform', // Optimize for transform animations
        backfaceVisibility: 'hidden' // Prevent flickering
      })
    })

    // Track rotation progress for precise cycling
    let cycleCount = 0

    // Image cycling synchronized with rotation - OPTIMIZED for seamless loop
    const cycleImages = () => {
      const firstChild = innerRef.firstElementChild as HTMLElement
      const lastChild = innerRef.lastElementChild as HTMLElement

      if (!firstChild || !lastChild) return

      const lastIndex = parseInt(lastChild.getAttribute('data-index') || '0')
      const newIndex = lastIndex + 1

      // Update the index BEFORE repositioning to avoid visual glitches
      firstChild.setAttribute('data-index', newIndex.toString())

      const rotation = newIndex * config.rotationMultiply - config.rotationOffset

      // Use GSAP's set with force3D for instant, GPU-accelerated positioning
      gsap.set(firstChild, {
        rotation: rotation,
        x: '-50%',
        transformOrigin: 'center bottom',
        force3D: true,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        immediateRender: true // Ensure immediate render without delay
      })

      // Move to end - this happens AFTER positioning, so it's already in the right place
      innerRef.appendChild(firstChild)
    }

    // Infinite rotation with GPU acceleration and cycling callback
    const rotationTween = gsap.to(containerRef, {
      rotation: -360,
      duration: config.duration,
      ease: 'none',
      repeat: -1,
      force3D: true, // Enable GPU acceleration
      willChange: 'transform', // Optimize for transform animations
      backfaceVisibility: 'hidden', // Prevent flickering
      onUpdate: function() {
        // Get current rotation (will be negative as we're rotating counter-clockwise)
        const currentRotation = gsap.getProperty(containerRef, 'rotation') as number
        const normalizedRotation = Math.abs(currentRotation % 360)

        // Check if we've rotated past a full image spacing
        const currentCycle = Math.floor(normalizedRotation / config.rotationMultiply)

        // Cycle image when we cross each image boundary
        if (currentCycle > cycleCount) {
          cycleCount = currentCycle
          cycleImages()
        }
      },
      onRepeat: function() {
        // Reset cycle count when the full 360° rotation completes
        cycleCount = 0
      }
    })

    // Scroll-based rotation (desktop only)
    let scrollTrigger: ScrollTrigger | null = null
    if (containerId === '419251-desktop' && window.innerWidth >= 1280) {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef,
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          gsap.to(innerRef, {
            rotation: -40 * self.progress,
            duration: 0.1,
            ease: 'none'
          })
        }
      })
    }

    setTimeout(() => {
      setActive(true)
    }, 300)

    return () => {
      rotationTween.kill()
      if (scrollTrigger) scrollTrigger.kill()
    }
  }

  useEffect(() => {
    if (desktopContainerRef.current && desktopInnerRef.current) {
      return initializeCarousel(
        '419251-desktop',
        desktopContainerRef.current,
        desktopInnerRef.current,
        {
          duration: 300,
          rotationMultiply: 12,
          rotationOffset: 55
        },
        setActiveDesktop
      )
    }
  }, [])

  useEffect(() => {
    if (tabletContainerRef.current && tabletInnerRef.current) {
      return initializeCarousel(
        '419251-tablet',
        tabletContainerRef.current,
        tabletInnerRef.current,
        {
          duration: 200,
          rotationMultiply: 15,
          rotationOffset: 55
        },
        setActiveTablet
      )
    }
  }, [])

  useEffect(() => {
    if (mobileContainerRef.current && mobileInnerRef.current) {
      return initializeCarousel(
        '419251-mobile',
        mobileContainerRef.current,
        mobileInnerRef.current,
        {
          duration: 150,
          rotationMultiply: 18,
          rotationOffset: 55
        },
        setActiveMobile
      )
    }
  }, [])

  const renderImages = (id: string, widthClass: string, rotationMultiply: number) => {
    const circularImages = generateCircularImages(rotationMultiply)
    return circularImages.map((image, index) => (
      <div
        key={index}
        data-arched-image={`${id}`}
        data-index={index}
        className={`absolute top-0 left-1/2 h-1/2 origin-bottom-left ${widthClass}`}
      >
        <div
          className="relative overflow-hidden w-full"
          style={{ paddingTop: '100%' }}
        >
          <img
            src={image}
            alt={`Gallery ${(index % images.length) + 1}`}
            className="w-full h-full object-cover absolute top-0 left-0 rounded-2xl transform-gpu bg-gray-50 dark:bg-gray-800 lg:rounded-3xl"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
        </div>
      </div>
    ))
  }

  return (
    <div className="relative w-full bg-grey-100 mb-32 lg:mb-48">
      {/* Header */}
      <div className="relative" style={{ zIndex: 9999 }}>
        <Header />
      </div>

      {/* Mobile Version - w-full md:hidden */}
      <div className="w-full md:hidden">
        <div
          className="w-full pt-20 pb-24 lg:pt-32 lg:pb-32 xl:pt-40 relative xl:-mt-10"
        >
          <div className="px-0">
            {/* Title */}
            <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 3xl:px-40 4xl:px-60 w-full flex flex-wrap justify-center relative z-30 mb-8 lg:mb-12">
              <div className="px-2 lg:px-3 xl:px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 4xl:text-9xl font-bold tracking-tight text-black leading-none text-center">
                  {title}
                </h1>
              </div>
            </div>

            {/* Carousel */}
            <div
              className={`w-full pt-5 relative pointer-events-none transition-opacity pb-24 ${
                activeMobile ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ height: '70vw', overflow: 'visible' }}
            >
              <div
                ref={mobileContainerRef}
                className="relative"
                style={{
                  width: '350vw',
                  height: '350vw',
                  marginLeft: '-125vw'
                }}
              >
                <div ref={mobileInnerRef} className="w-full h-full relative">
                  {renderImages('419251-mobile', 'w-[40vw]', 18)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Version - w-full hidden md:block xl:hidden */}
      <div className="w-full hidden md:block xl:hidden">
        <div
          className="w-full pt-20 pb-24 lg:pt-32 lg:pb-32 xl:pt-40 relative xl:-mt-10"
          style={{
            height: '80vh',
            minHeight: '640px',
            maxHeight: '720px'
          }}
        >
          <div className="px-0">
            {/* Title */}
            <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 3xl:px-40 4xl:px-60 w-full flex flex-wrap justify-center relative z-30 mb-8 lg:mb-12">
              <div className="px-2 lg:px-3 xl:px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 4xl:text-9xl font-bold tracking-tight text-black leading-none text-center">
                  {title}
                </h1>
              </div>
            </div>

            {/* Carousel */}
            <div
              className={`w-full pt-5 relative pointer-events-none transition-opacity pb-24 ${
                activeTablet ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ height: '65vw', overflow: 'visible' }}
            >
              <div
                ref={tabletContainerRef}
                className="relative"
                style={{
                  width: '250vw',
                  height: '250vw',
                  marginLeft: '-75vw'
                }}
              >
                <div ref={tabletInnerRef} className="w-full h-full relative">
                  {renderImages('419251-tablet', 'w-[25vw]', 15)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version - w-full hidden xl:block */}
      <div className="w-full hidden xl:block">
        <div
          className="w-full pt-20 pb-24 lg:pt-32 lg:pb-32 xl:pt-40 relative xl:-mt-10 3xl:mt-0"
          style={{
            height: '90vh',
            minHeight: '760px',
            maxHeight: '1000px'
          }}
        >
          <div className="px-0">
            {/* Title */}
            <div className="px-2 sm:px-6 xl:px-12 2xl:px-20 3xl:px-40 4xl:px-60 w-full flex flex-wrap justify-center relative z-30 mb-8 lg:mb-12">
              <div className="px-2 lg:px-3 xl:px-4">
                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-8xl 4xl:text-9xl font-bold tracking-tight text-black leading-none text-center">
                  {title}
                </h1>
              </div>
            </div>

            {/* Carousel */}
            <div
              className={`w-full pt-5 relative pointer-events-none transition-opacity pb-24 ${
                activeDesktop ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ height: '35vw', overflow: 'visible' }}
            >
              <div
                ref={desktopContainerRef}
                className="relative"
                style={{
                  width: '250vw',
                  height: '250vw',
                  marginLeft: '-75vw'
                }}
              >
                <div ref={desktopInnerRef} className="w-full h-full relative">
                  {renderImages('419251-desktop', 'w-[20vw]', 12)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroUpdated
