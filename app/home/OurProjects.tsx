'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  year: string
  description: string
  category: string
  image: string
  color: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TechStart Inc',
    year: '2024',
    description: '340% organic traffic increase through AI-powered SEO',
    category: 'AI & SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&q=80',
    color: '#cb7b3a',
    link: '/work/techstart'
  },
  {
    id: 2,
    title: 'RetailHub',
    year: '2024',
    description: 'Complete e-commerce redesign driving conversions',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=2000&q=80',
    color: '#d2b59d',
    link: '/work/retailhub'
  },
  {
    id: 3,
    title: 'FinanceFlow',
    year: '2024-2025',
    description: 'CRM implementation reducing sales cycle by 45%',
    category: 'CRM & Tools',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&q=80',
    color: '#39b0bd',
    link: '/work/financeflow'
  },
  {
    id: 4,
    title: 'EcoLife',
    year: '2024',
    description: 'Social media campaign reaching 2.5M users',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=2000&q=80',
    color: '#d29dd0',
    link: '/work/ecolife'
  },
  {
    id: 5,
    title: 'HealthTech Pro',
    year: '2023-2024',
    description: 'Data analytics platform for predictive insights',
    category: 'AI & Data',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&q=80',
    color: '#fecacc',
    link: '/work/healthtech'
  },
  {
    id: 6,
    title: 'UrbanStyle',
    year: '2024',
    description: 'Brand identity refresh with modern UI/UX',
    category: 'Brand & Design',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=2000&q=80',
    color: '#60dcfb',
    link: '/work/urbanstyle'
  },
  {
    id: 7,
    title: 'CloudScale',
    year: '2023-2024',
    description: 'PPC campaigns delivering 5.2x ROAS',
    category: 'PPC & Ads',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=2000&q=80',
    color: '#fecacc',
    link: '/work/cloudscale'
  }
]

const ProjectCard = ({ project, isActive, onHover }: {
  project: Project
  isActive: boolean
  onHover: (id: number | null) => void
}) => {
  return (
    <a
      href={project.link}
      className="grid group rounded-2xl overflow-hidden mb-5 lg:rounded-2xl lg:mb-7 circle-mask-container"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background Image */}
      <div className="col-start-1 row-start-1 transition md:group-hover:scale-105">
        <div className="relative overflow-hidden w-full" style={{ paddingTop: '75%' }}>
          <picture>
            <img
              src={project.image}
              alt={project.title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-opacity"
              loading="lazy"
              style={{ opacity: 0 }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
          </picture>
        </div>
      </div>

      {/* Category Badge - Top Right */}
      <div className="col-start-1 row-start-1 p-2 sm:p-3 lg:items-end lg:p-5 z-30 flex justify-end items-start">
        <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-white bg-white/20 backdrop-blur-sm text-xs sm:text-sm gap-x-2 sm:gap-x-3 py-2 px-2.5 sm:py-2.5 sm:px-3.5 lg:text-base">
          <i className="fa-regular fa-sharp fa-magnifying-glass"></i>
          <div>{project.category}</div>
          <i className="fa-regular fa-sharp fa-chart-line-up"></i>
        </div>
      </div>

      {/* Mobile Title - Bottom Left */}
      <div className="col-start-1 row-start-1 p-2 sm:p-3 lg:hidden lg:p-5 z-30 relative flex justify-start items-end">
        <div className="grid gap-y-1 relative z-20">
          <div className="text-white text-xs font-medium mt-2">[{project.year}]</div>
          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-xl sm:text-2xl md:text-3xl/none font-medium tracking-tight">
            {project.title}
          </div>
        </div>
        <div className="absolute w-full bottom-0 left-0 h-32 bg-gradient-to-t from-black z-10 opacity-70"></div>
      </div>

      {/* Hover Overlay with Color - Circle Mask - DESKTOP ONLY */}
      <div
        className="hidden lg:flex col-start-1 row-start-1 grid-cols-12 flex-col items-start justify-between z-40 p-3 transition lg:p-5 circle-mask"
        style={{
          backgroundColor: project.color,
          color: '#111212'
        }}
      >
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-current text-3xl/none lg:text-4xl/none xl:text-5xl/none font-medium tracking-tight">
          {project.description}
        </div>

        <div className="w-full flex items-end justify-between">
          <div className="w-8 lg:w-24"></div>
          <div className="shrink-0 inline-flex items-center rounded-full tracking-tight font-medium leading-none text-current bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 lg:text-base">
            <i className="fa-regular fa-sharp fa-magnifying-glass"></i>
            <div>{project.category}</div>
            <i className="fa-regular fa-sharp fa-chart-line-up"></i>
          </div>
        </div>
      </div>
    </a>
  )
}

const OurProjects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [hovering, setHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)
  const headingsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const trigger = triggerRef.current
    const container = containerRef.current
    const images = imagesRef.current
    const headingsContainer = headingsRef.current

    if (!trigger || !container || !images || !section) return

    const windowHeight = window.innerHeight
    const scrollDistance = images.offsetHeight - windowHeight

    // GSAP ScrollTrigger for images scroll stacking
    const mm = gsap.matchMedia()

    mm.add('(pointer: fine)', () => {
      gsap.set(trigger, {
        height: `${images.offsetHeight}px`
      })

      // Images scroll
      gsap.to(images, {
        y: -scrollDistance,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: 0.5
        }
      })

      // Headings micro-scroll animation
      if (headingsContainer) {
        const headings = headingsContainer.querySelectorAll('.js-heading-40')

        const headingsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: trigger,
            start: 'top top',
            end: `+=${scrollDistance}`,
            scrub: 0.5
          }
        })

        headings.forEach((heading) => {
          headingsTimeline.fromTo(
            heading,
            { y: 150 },
            {
              y: (headingsContainer.offsetHeight * -1) + 300,
              duration: 4,
              ease: 'none',
              force3D: true
            },
            0
          )
        })
      }
    })

    mm.add('(max-width: 1023px)', () => {
      // MOBILE: Pin the BLACK CONTAINER
      ScrollTrigger.create({
        trigger: section,
        pin: container,
        start: 'top top',
        end: `+=${scrollDistance}`,
        pinSpacing: true,
        anticipatePin: 1
      })

      // Animate images separately
      gsap.to(images, {
        y: -scrollDistance,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: 0.5
        }
      })
    })

    return () => {
      mm.revert()
    }
  }, [])

  const handleProjectHover = (id: number | null) => {
    setActiveProject(id)
    setHovering(id !== null)
  }

  return (
    <section ref={sectionRef} className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div ref={triggerRef} className="w-full relative flex overflow-visible">
          <div ref={containerRef} className="w-full h-screen md:sticky md:top-0">
            <div className="w-full h-full overflow-hidden bg-[#111212] rounded-3xl grid grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">

              {/* Left Column - Project Names (Desktop Only) */}
              <div className="relative col-span-12 items-start hidden lg:flex lg:flex-row lg:items-center lg:col-span-6 lg:h-[96vh]">
                <div className="flex flex-col items-start relative z-10 h-full pt-16 lg:pt-24 lg:pb-32 lg:gap-y-20">

                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight lg:text-lg/tight xl:text-xl/tight font-medium tracking-tight">
                    Featured Work
                  </h2>

                  <div ref={headingsRef} className="relative flex-1 overflow-hidden hidden pr-5 lg:inline-block">
                    {/* Gradient Overlays */}
                    <div className="absolute top-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-b from-[#111212] hidden lg:flex"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none bg-gradient-to-t from-[#111212] hidden lg:flex"></div>

                    <div className="grid gap-y-2 2xl:gap-y-3 relative z-10">
                      {projects.map((project) => (
                        <div
                          key={project.id}
                          className="relative transition js-heading-40"
                        >
                          <a
                            href={project.link}
                            className={`flex items-start gap-x-2 transition ${hovering && activeProject === project.id ? 'translate-x-3' : ''}`}
                            onMouseEnter={() => handleProjectHover(project.id)}
                            onMouseLeave={() => handleProjectHover(null)}
                          >
                            <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-5xl/none lg:text-6xl/none xl:text-7xl/[0.9] font-medium tracking-tight">
                              {project.title}
                            </div>
                            <div className="text-white text-xs font-medium mt-2">[{project.year}]</div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Project Images */}
              <div ref={imagesRef} className="col-span-12 grid pt-7 pb-14 lg:col-span-6 lg:col-start-7">

                {/* Mobile Title */}
                <div className="mb-5 lg:hidden">
                  <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-md/tight font-medium tracking-tight">
                    Featured Work
                  </h2>
                </div>

                {/* Project Cards */}
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isActive={activeProject === project.id}
                    onHover={handleProjectHover}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProjects