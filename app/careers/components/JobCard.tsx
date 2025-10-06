'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface JobCardProps {
  id: string
  title: string
  contractType: string
  team: string
  location: string
  link?: string
}

export default function JobCard({ id, title, contractType, team, location, link }: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={link || '#'}
      className="group relative overflow-hidden"
      style={{
        backgroundColor: '#f7f7f7',
        borderRadius: isHovered ? '9999px' : '24px',
        transition: 'all 0.6s cubic-bezier(0.135, 0.9, 0.15, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between p-6 md:p-8">

        {/* Left Side - Job Title */}
        <div className="flex-1">
          <h3 className="text-grey-900 font-sans-primary font-medium text-xl md:text-2xl lg:text-3xl tracking-tight">
            {title}
          </h3>
        </div>

        {/* Middle - Job Details */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 mx-8">
          <div className="text-grey-600 text-sm lg:text-base font-medium">
            {contractType}
          </div>
          <div className="text-grey-600 text-sm lg:text-base font-medium">
            {team}
          </div>
          <div className="text-grey-600 text-sm lg:text-base font-medium">
            {location}
          </div>
        </div>

        {/* Right Side - Arrow Button */}
        <div className="flex-shrink-0">
          <div
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: isHovered ? '#e5ff66' : 'rgba(229, 255, 102, 0.8)',
              transform: isHovered ? 'scale(1.1) rotate(90deg)' : 'scale(1) rotate(0deg)',
              transition: 'all 0.6s cubic-bezier(0.135, 0.9, 0.15, 1)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-grey-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* Mobile Details */}
      <div className="md:hidden px-6 pb-6 flex flex-wrap gap-3 text-sm">
        <span className="text-grey-600 font-medium">{contractType}</span>
        <span className="text-grey-400">•</span>
        <span className="text-grey-600 font-medium">{team}</span>
        <span className="text-grey-400">•</span>
        <span className="text-grey-600 font-medium">{location}</span>
      </div>

    </Link>
  )
}
