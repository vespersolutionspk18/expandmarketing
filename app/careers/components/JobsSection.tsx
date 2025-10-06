'use client'

import React, { useState } from 'react'
import JobCard from './JobCard'
import { jobs } from './jobsData'

export default function JobsSection() {
  const [activeLocation, setActiveLocation] = useState<string>('All')
  const [activeTeam, setActiveTeam] = useState<string>('All')
  const [activeContract, setActiveContract] = useState<string>('All')

  // Get unique filter options
  const locations = ['All', ...Array.from(new Set(jobs.map(job => job.location)))]
  const teams = ['All', ...Array.from(new Set(jobs.map(job => job.team)))]
  const contracts = ['All', ...Array.from(new Set(jobs.map(job => job.contractType)))]

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter(job => {
    return (
      (activeLocation === 'All' || job.location === activeLocation) &&
      (activeTeam === 'All' || job.team === activeTeam) &&
      (activeContract === 'All' || job.contractType === activeContract)
    )
  })

  return (
    <section className="w-full pb-12 xl:pb-24" id="careers">
      <div className="w-full px-4 md:px-7">

        {/* Heading Row with Filters */}
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5 items-end mb-6 md:mb-8">

          {/* Heading */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <h2 className="inline-flex flex-wrap text-balance relative pointer-fine:pr-1 pointer-fine:pb-2 pointer-fine:mt-4 pointer-fine:-mb-3 pointer-fine:overflow-hidden text-left justify-start text-grey-900 text-6xl/[0.9] md:text-7xl/none lg:text-7xl/none 2xl:text-8xl/[0.9] 4xl:text-8.5xl/[0.9] font-sans-primary font-medium tracking-tight">
              Find your<br />
              next job
            </h2>
          </div>

          {/* Filter Buttons - Right Side */}
          <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-wrap items-center gap-2 justify-start md:justify-end">
            <span className="text-grey-900 text-sm font-medium mr-1">Filter</span>

            {/* Location Filter */}
            <div className="relative">
              <select
                value={activeLocation}
                onChange={(e) => setActiveLocation(e.target.value)}
                className="appearance-none bg-transparent border border-grey-200 text-grey-900 rounded-full px-5 py-2.5 pr-10 text-sm font-medium cursor-pointer hover:bg-grey-50 transition-all focus:outline-none focus:ring-2 focus:ring-grey-200"
              >
                {locations.map(location => (
                  <option key={location} value={location} className="bg-white text-grey-900">
                    {location === 'All' ? 'By Location' : location}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-grey-900">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Team Filter */}
            <div className="relative">
              <select
                value={activeTeam}
                onChange={(e) => setActiveTeam(e.target.value)}
                className="appearance-none bg-transparent border border-grey-200 text-grey-900 rounded-full px-5 py-2.5 pr-10 text-sm font-medium cursor-pointer hover:bg-grey-50 transition-all focus:outline-none focus:ring-2 focus:ring-grey-200"
              >
                {teams.map(team => (
                  <option key={team} value={team} className="bg-white text-grey-900">
                    {team === 'All' ? 'By Team' : team}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-grey-900">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Contract Filter */}
            <div className="relative">
              <select
                value={activeContract}
                onChange={(e) => setActiveContract(e.target.value)}
                className="appearance-none bg-transparent border border-grey-200 text-grey-900 rounded-full px-5 py-2.5 pr-10 text-sm font-medium cursor-pointer hover:bg-grey-50 transition-all focus:outline-none focus:ring-2 focus:ring-grey-200"
              >
                {contracts.map(contract => (
                  <option key={contract} value={contract} className="bg-white text-grey-900">
                    {contract === 'All' ? 'By Contract' : contract}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-grey-900">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Black Container with Job Cards */}
        <div className="p-2">
          <div className="bg-grey-900 rounded-3xl p-5 md:p-7">

            {/* Job Cards */}
            <div className="flex flex-col gap-3">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))
              ) : (
                <div className="text-center py-12 text-grey-50/60">
                  <p className="text-lg">No positions found matching your filters.</p>
                  <p className="text-sm mt-2">Try adjusting your search criteria.</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
