'use client'

import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const ExpandReady = () => {
  useEffect(() => {
    const buildAnimation = (id: number) => {
      const triggers = document.querySelectorAll(`.js-trigger-${id}`)

      triggers.forEach(trigger => {
        const heading = trigger.querySelector(`.js-heading-${id}`) as HTMLElement

        if (!heading) return

        const headingWidth = heading.offsetWidth
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        let yStart = 150
        let yEnd = 400
        let charyStart = -60
        let mainStart = 'top 40%'
        let charStart = 'top 50%'

        ScrollTrigger.matchMedia({
          '(max-width: 1023px)': () => {
            yStart = 100
            yEnd = 200
            charyStart = -60
            mainStart = 'top 70%'
            charStart = 'top 77%'
          }
        })

        gsap.set(heading, {
          y: yStart,
          x: headingWidth - windowWidth + windowWidth * 0.5,
        })

        gsap.to(heading, {
          x: () => { return -(headingWidth - window.innerWidth + 1000) },
          y: yEnd,
          ease: 'none',
          scrollTrigger: {
            trigger: trigger,
            start: mainStart,
            end: '+=' + (headingWidth - windowWidth + windowHeight * 0.35),
            scrub: true,
          },
        })

        const splitText = new SplitText(heading, {
          type: 'chars',
        })

        const chars = splitText.chars

        chars.forEach((char, index) => {
          gsap.set(char, {
            yPercent: charyStart,
            rotate: 10
          })
        })

        gsap.to(chars, {
          yPercent: 0,
          rotate: 0,
          ease: 'back.inOut(4)',
          stagger: 0.35,
          duration: 2.5,
          scrollTrigger: {
            trigger: trigger,
            start: charStart,
            end: '+=' + (headingWidth - windowWidth + 200),
            scrub: true,
          },
        })
      })
    }

    buildAnimation(2250)

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])

  return (
    <div className="overflow-hidden block">
      <div className="flex h-[35vh] lg:h-[100vh] js-trigger-2250">
        <div className="shrink-0 text-[20vw] sm:text-[18vw] md:text-[22vw] font-medium tracking-tight leading-tight lg:text-[16vw] 4xl:text-[14vw] js-heading-2250">
          Ready To Expand?
        </div>
      </div>
    </div>
  )
}

export default ExpandReady
