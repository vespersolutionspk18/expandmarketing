'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  FaApple, 
  FaMicrosoft, 
  FaGoogle, 
  FaAmazon, 
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaSlack,
  FaSpotify,
  FaDropbox,
  FaPaypal
} from 'react-icons/fa'
import { SiNetflix, SiTesla, SiAdobe, SiSalesforce } from 'react-icons/si'
import Button from '../components/Button'


gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const logos = [
    FaApple,
    FaMicrosoft,
    FaGoogle,
    FaAmazon,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaSlack,
    FaSpotify,
    FaDropbox,
    FaPaypal,
    SiNetflix,
    SiTesla,
    SiAdobe,
    SiSalesforce
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animate scale from 88% to 100% using fromTo
    gsap.fromTo(container,
      {
        scale: 0.88,
        transformOrigin: 'center center'
      },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom', // Animation starts when top of element hits bottom of viewport
          end: 'top 20%', // Animation ends when top of element is at 20% from top of viewport
          scrub: true // Direct link to scrollbar with no delay - ensures animation reaches 100%
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <div className="relative z-10" style={{ marginTop: '-40vh' }}>
        <div ref={containerRef}>
          <div
            className="bg-black rounded-2xl px-4 sm:px-6 md:px-10 py-8 md:py-12 flex flex-col gap-12 md:gap-24 w-full">
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-10">
          <div className="w-full md:w-[10%]">
              <p className="text-white text-sm md:text-md tracking-tighter">Working with <br></br>Global Brands</p>

          </div>
          <div className="w-full md:w-[90%] overflow-hidden relative marquee-edge-blur">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((Logo, index) => (
                <div key={index} className="mx-12 md:mx-24 flex items-center">
                  <Logo className="text-white/80 text-3xl md:text-5xl hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between">
          <div className="text-lg sm:text-xl md:text-2xl font-semibold w-full md:w-[40%] tracking-tighter leading-tight text-white">
              Transforming businesses through Digital Marketing, Web Design, AI Solutions, and CRM tools that drive measurable growth.
          </div>
          <div className="hidden md:block md:w-[10%]">

          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-5">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans text-white tracking-tighter">Marketing That Delivers Results <Image alt="" src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=48&h=48&fit=crop"} width={40} height={40} className="md:w-[56px] md:h-[56px] rounded-md inline-block align-middle"/></div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                  <Button variant="secondary" className="w-full sm:w-auto">About Us</Button>
                   <Button variant="primary" className="w-full sm:w-auto">How We Work</Button>

              </div>
          </div>

        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs