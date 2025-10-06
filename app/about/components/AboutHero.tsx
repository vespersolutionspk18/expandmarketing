'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

const AboutHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading words on mount
    const words = headingRef.current?.querySelectorAll('.js-word')
    const imageWrapper = imageWrapperRef.current

    if (words && words.length > 0) {
      gsap.fromTo(
        words,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          delay: 0.5,
          ease: 'power2.out',
        }
      )
    }

    // Animate image wrapper
    if (imageWrapper) {
      gsap.fromTo(
        imageWrapper,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.7,
          ease: 'power2.out',
        }
      )
    }

    // Cursor trail effect
    const trigger = triggerRef.current
    if (!trigger) return

    let cursorImageIndex = 0
    let prevMouse: { x: number; y: number } | null = null
    let lastShownIndex = -1

    const getHiddenImages = (): HTMLImageElement[] =>
      Array.from(document.querySelectorAll('.js-cursor-image-trail'))

    function getNextImageIndex(images: HTMLImageElement[]): number {
      if (!images.length) return -1

      if (cursorImageIndex >= images.length) {
        cursorImageIndex = 0
      }

      const nextIndex = cursorImageIndex
      cursorImageIndex++
      return nextIndex
    }

    function showCursorImage(e: MouseEvent, dx: number, dy: number) {
      const images = getHiddenImages()
      if (!images.length) return

      const imgIdx = getNextImageIndex(images)
      if (imgIdx === -1 || imgIdx === lastShownIndex) return

      lastShownIndex = imgIdx
      const imgEl = images[imgIdx]?.cloneNode(true) as HTMLImageElement
      if (!imgEl) return

      const cursorImage = document.createElement('div')
      cursorImage.className =
        'w-60 h-60 rounded-3xl overflow-hidden pointer-events-none flex items-center justify-center'
      cursorImage.appendChild(imgEl)
      cursorImage.style.position = 'fixed'
      cursorImage.style.left = '0'
      cursorImage.style.top = '0'
      cursorImage.style.zIndex = '40'
      cursorImage.style.willChange = 'transform'
      document.body.appendChild(cursorImage)

      const { width, height } = cursorImage.getBoundingClientRect()
      const startX = e.clientX - width / 2
      const startY = e.clientY - height / 2

      // Offset direction
      const norm = Math.hypot(dx, dy) || 1
      const offsetX = startX + (dx / norm) * 60
      const offsetY = startY + (dy / norm) * 60

      gsap.set(cursorImage, {
        x: startX,
        y: startY,
      })

      gsap.to(cursorImage, {
        duration: 0.6,
        x: offsetX,
        y: offsetY,
        ease: 'power4.out',
        onComplete: () => {
          gsap.to(cursorImage, {
            duration: 0.5,
            opacity: 0,
          })
        },
      })

      setTimeout(() => cursorImage.remove(), 2000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!prevMouse) {
        prevMouse = { x: e.clientX, y: e.clientY }
        return
      }

      const dx = e.clientX - prevMouse.x
      const dy = e.clientY - prevMouse.y
      const distance = Math.hypot(dx, dy)

      if (distance < 150) return

      prevMouse = { x: e.clientX, y: e.clientY }
      showCursorImage(e, dx, dy)
    }

    trigger.addEventListener('mousemove', handleMouseMove)

    return () => {
      trigger.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Background images for grid (hidden on desktop, visible on mobile)
  const backgroundImages = [
    {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&q=90&fit=crop',
      alt: 'Team member 1',
      className: 'col-span-4 mt-20 -translate-x-1/4 | lg:col-span-4 lg:mt-32',
      paddingTop: '174.5%',
    },
    {
      src: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400&q=90&fit=crop',
      alt: 'Team member 2',
      className: 'col-span-4 col-start-12 mt-20 | lg:col-span-2 lg:col-start-17 lg:-mt-5',
      paddingTop: '75%',
    },
    {
      src: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=400&q=90&fit=crop',
      alt: 'Team member 3',
      className: 'col-span-4 col-start-16 translate-x-10 mt-40 | lg:translate-x-0 lg:mt-20 lg:col-span-3 lg:col-start-2',
      paddingTop: '150%',
    },
    {
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&q=90&fit=crop',
      alt: 'Team member 4',
      className: 'col-span-3 col-start-2 | lg:col-span-2 lg:col-start-18',
      paddingTop: '149.75%',
    },
    {
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&q=90&fit=crop',
      alt: 'Team member 5',
      className: 'col-span-5 col-start-12 mt-12 translate-x-1/2 | lg:-mt-10',
      paddingTop: '133.25%',
    },
  ]

  // Cursor trail images (hidden, will be cloned on mouse movement)
  const cursorTrailImages = [
    'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=300&q=90&fit=crop',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&q=90&fit=crop',
    'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=300&q=90&fit=crop',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=300&q=90&fit=crop',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&q=90&fit=crop',
  ]

  return (
    <section className="w-full py-0">
      <div className="w-full px-0">
        {/* Hidden images for cursor trail */}
        <div className="hidden">
          {cursorTrailImages.map((src, index) => (
            <img key={index} src={src} alt="" className="js-cursor-image-trail" />
          ))}
        </div>

        {/* Background image grid - hidden on desktop (pointer-fine devices) */}
        <div className="w-full grid grid-cols-20 h-screen-fix h-svh absolute top-0 left-0 overflow-hidden | pointer-fine:hidden">
          {backgroundImages.map((img, index) => (
            <div key={index} className={img.className}>
              <div className="rounded-xl overflow-hidden | lg:rounded-2xl">
                <div
                  className="relative overflow-hidden w-full"
                  style={{ paddingTop: img.paddingTop }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          ref={triggerRef}
          className="w-full h-screen-fix h-svh p-2 flex justify-center items-center border-b border-gray-300"
        >
          <div className="flex flex-col items-center justify-between text-center" ref={containerRef}>
            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="inline-flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:-mt-12 pointer-fine:-mb-3 flex flex-col text-center justify-center text-grey-900 text-7xl/0.9 | md:text-7xl/0.9 | lg:text-8xl/0.9 | xl:text-10xl/0.9 font-sans-primary font-medium tracking-tight js-heading-animate mb-10"
              data-delay="0.5"
            >
              {/* First line: Nice to */}
              <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-center justify-center gap-4">
                <div className="inline js-word">Nice</div>
                <div className="inline js-word">to</div>
              </div>

              {/* Second line: meet [image] you */}
              <div className="flex flex-wrap relative pointer-fine:-mt-6 pointer-fine:pb-6 pointer-fine:overflow-hidden text-center justify-center items-center gap-4">
                <div className="inline js-word">meet</div>
                {/* Inline image with rounded corners */}
                <div
                  ref={imageWrapperRef}
                  className="inline shrink-0 flex bg-black/10 relative overflow-hidden bg-black/5 js-image-wrapper rounded-xl"
                  style={{ width: '1em', height: '1em' }}
                >
                  <div className="w-full h-full relative | js-image">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&q=90&fit=crop"
                      alt="Team"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center absolute inset-0"
                    />
                  </div>
                </div>
                <div className="inline js-word">you</div>
              </div>
            </h1>

            {/* Subheading - positioned absolutely at bottom */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center mb-8 | lg:mb-16">
              <div className="inline-flex flex-wrap text-balance relative text-center justify-center text-grey-900 text-lg/tight | md:text-xl/tight | xl:text-2xl/none | xl:text-3xl/none | 4xl:text-4xl/none font-sans-primary font-medium tracking-tight js-heading max-w-md | 4xl:max-w-lg pt-8 | lg:pt-12">
                Creating the industry narrative that others follow 3 years from now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
