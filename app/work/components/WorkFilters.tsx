'use client';

import { useState } from 'react';

const services = [
  { value: '', label: 'By Service' },
  { value: 'strategy-growth', label: 'Strategy & Growth' },
  { value: 'onsite-seo', label: 'Onsite SEO' },
  { value: 'content-experience', label: 'Content Experience' },
  { value: 'digital-pr', label: 'Digital PR' },
  { value: 'social', label: 'Social & Social Search' },
  { value: 'data-insights', label: 'Data & Insights' },
];

const industries = [
  { value: '', label: 'By Industry' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'technology', label: 'Technology' },
  { value: 'travel', label: 'Travel & Hospitality' },
  { value: 'retail', label: 'Retail' },
  { value: 'education', label: 'Education' },
];

export default function WorkFilters() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  return (
    <section className="w-full pt-6 xl:pt-12 -mt-10 bg-grey-100 pb-6 xl:pb-12">
      <div className="w-full px-4 md:px-7">
        <div className="mt-10">
          {/* Filter Row */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="text-grey-900 text-sm md:text-base font-medium tracking-tight">Filter</span>

            <div className="flex flex-wrap items-center gap-2">
              {/* Service Dropdown */}
              <div className="relative w-full md:w-auto">
                <div className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 mr-5 -translate-y-1/2 z-20 w-1.5 h-1.5 border-grey-600"></div>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full appearance-none bg-grey-100 border border-grey-200 rounded-full pl-5 pr-9 py-3 text-sm tracking-tightish leading-tight font-medium capitalize shadow-none outline-none ring-3 ring-transparent transition pointer-fine:hover:border-grey-600 focus:ring-grey-600/10 focus:border-grey-600 md:text-base md:w-auto"
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Dropdown */}
              <div className="relative w-full md:w-auto">
                <div className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 mr-5 -translate-y-1/2 z-20 w-1.5 h-1.5 border-grey-600"></div>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full appearance-none bg-grey-100 border border-grey-200 rounded-full pl-5 pr-9 py-3 text-sm tracking-tightish leading-tight font-medium capitalize shadow-none outline-none ring-3 ring-transparent transition pointer-fine:hover:border-grey-600 focus:ring-grey-600/10 focus:border-grey-600 md:text-base md:w-auto"
                >
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Border Line */}
          <div className="w-full h-px bg-grey-200"></div>
        </div>
      </div>
    </section>
  );
}
