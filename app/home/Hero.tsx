'use client'

import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '../components/Header'

interface CanvasCard {
  id: string
  x: number
  y: number
  width: string
  src: string
  route: string
  zIndex?: number
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Define hexagonal grid parameters - reduced spacing for mobile
  const HEX_WIDTH = isMobile ? 280 : 850
  const HEX_HEIGHT = isMobile ? 243 : 736
  const HEX_COLS = 4
  const HEX_ROWS = 3
  
  // Helper function to get hex position
  const getHexPosition = (col: number, row: number) => {
    const x = col * HEX_WIDTH * 0.75 // Hexes overlap by 1/4 width
    const y = row * HEX_HEIGHT + (col % 2) * (HEX_HEIGHT / 2) // Offset every other column
    return { x, y }
  }
  
  const basePattern: CanvasCard[] = [
    {
      id: 'base-1',
      ...getHexPosition(0, 0),
      width: '18vw',
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop',
      route: '/projects',
      zIndex: 3
    },
    {
      id: 'base-2',
      ...getHexPosition(1, 0),
      width: '20vw',
      src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=450&fit=crop',
      route: '/agency',
      zIndex: 2
    },
    {
      id: 'base-3',
      ...getHexPosition(2, 0),
      width: '16vw',
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=450&fit=crop',
      route: '/journal',
      zIndex: 4
    },
    {
      id: 'base-4',
      ...getHexPosition(3, 0),
      width: '19vw',
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop',
      route: '/contact',
      zIndex: 1
    },
    {
      id: 'base-5',
      ...getHexPosition(0, 1),
      width: '17vw',
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=450&fit=crop',
      route: '/about',
      zIndex: 2
    },
    {
      id: 'base-6',
      ...getHexPosition(1, 1),
      width: '21vw',
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop',
      route: '/work',
      zIndex: 3
    },
    {
      id: 'base-7',
      ...getHexPosition(2, 1),
      width: '18vw',
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=450&fit=crop',
      route: '/services',
      zIndex: 4
    },
    {
      id: 'base-8',
      ...getHexPosition(3, 1),
      width: '16vw',
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop',
      route: '/team',
      zIndex: 1
    },
    {
      id: 'base-9',
      ...getHexPosition(0, 2),
      width: '19vw',
      src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop',
      route: '/blog',
      zIndex: 3
    },
    {
      id: 'base-10',
      ...getHexPosition(1, 2),
      width: '17vw',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop',
      route: '/portfolio',
      zIndex: 2
    },
    {
      id: 'base-11',
      ...getHexPosition(2, 2),
      width: '20vw',
      src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=450&fit=crop',
      route: '/careers',
      zIndex: 4
    },
    {
      id: 'base-12',
      ...getHexPosition(3, 2),
      width: '18vw',
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop',
      route: '/resources',
      zIndex: 1
    }
  ]

  // Pattern dimensions for tiling (adjusted for hex grid)
  const PATTERN_WIDTH = HEX_COLS * HEX_WIDTH * 0.75 + HEX_WIDTH * 0.25
  const PATTERN_HEIGHT = (HEX_ROWS + 0.5) * HEX_HEIGHT

  // Generate tiled pattern (2x2 grid for seamless infinite scroll)
  const generateTiledPattern = () => {
    const tiles: CanvasCard[] = []
    for (let tileX = 0; tileX < 2; tileX++) {
      for (let tileY = 0; tileY < 2; tileY++) {
        basePattern.forEach((card) => {
          tiles.push({
            ...card,
            id: `${card.id}-${tileX}-${tileY}`,
            x: card.x + (tileX * PATTERN_WIDTH),
            y: card.y + (tileY * PATTERN_HEIGHT),
          })
        })
      }
    }
    return tiles
  }

  const [canvasCards, setCanvasCards] = useState(generateTiledPattern())

  // Regenerate pattern when mobile state changes
  useEffect(() => {
    setCanvasCards(generateTiledPattern())
  }, [isMobile])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0
    const speed = 0.08 // Balanced, grounded movement
    const panMultiplier = 1800 // Moderate panning

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * panMultiplier
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * panMultiplier
    }

    const animate = () => {
      // Lazy easing movement
      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed
      
      // Modulo wrap for infinite scrolling
      const wrappedX = ((currentX % PATTERN_WIDTH) + PATTERN_WIDTH) % PATTERN_WIDTH
      const wrappedY = ((currentY % PATTERN_HEIGHT) + PATTERN_HEIGHT) % PATTERN_HEIGHT
      
      // Apply the wrapped position directly without GSAP
      canvas.style.transform = `translate(${-wrappedX}px, ${-wrappedY}px)`
      
      requestAnimationFrame(animate)
    }

    container.addEventListener('mousemove', handleMouseMove)
    animate()

    const tl = gsap.timeline({ delay: 0.2 })
    
    tl.fromTo('.canvas-card', 
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 1,
          from: 'random'
        },
        ease: 'back.out(1.7)',
        onComplete: () => setIsLoaded(true)
      }
    )

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      tl.kill()
    }
  }, [PATTERN_HEIGHT, PATTERN_WIDTH])

  const handleCardClick = (route: string) => {
    router.push(route)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: '140vh', backgroundColor: 'rgba(239, 238, 236, 1)' }}
    >
      <div className="relative" style={{ zIndex: 9999 }}>
        <Header />
      </div>
      <div
        ref={canvasRef}
        className="absolute"
        style={{
          width: `${PATTERN_WIDTH * 2}px`,
          height: `${PATTERN_HEIGHT * 2}px`,
          left: '0',
          top: '0',
        }}
      >
        {canvasCards.map((card) => (
          <div
            key={card.id}
            className="canvas-card absolute cursor-pointer"
            style={{
              left: `${card.x}px`,
              top: `${card.y}px`,
              width: card.width,
              zIndex: card.zIndex || 1,
              transition: 'transform 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.08,
                duration: 0.3,
                ease: 'power2.out'
              })
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
              })
            }}
            onClick={() => handleCardClick(card.route)}
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <div className="aspect-square relative">
                <Image
                  src={card.src}
                  alt={`Canvas item ${card.id}`}
                  fill
                  className="object-cover"
                  sizes={card.width}
                  priority={false}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-10 pointer-events-none px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-semibold text-stone-900 tracking-tighter">
            Digital <span className="font-serif italic font-light">Growth<br></br></span> Solutions
          </h1>

        </div>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-8 h-8 border-3 border-stone-300 border-t-stone-800 rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

export default Hero