'use client'

import React, { useState } from 'react'
import Button from '@/app/components/Button'

const EstimateHero = () => {
  // State for conditional field visibility
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [hasExistingCRM, setHasExistingCRM] = useState<string>('')
  const [hasAnalytics, setHasAnalytics] = useState<string>('')

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const isServiceSelected = (service: string) => selectedServices.includes(service)

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Estimate Form */}
          <div className="col-span-12 bg-white rounded-3xl p-5 lg:py-7 lg:px-10">
            <form className="w-full">
              {/* SECTION 1: BASIC INFORMATION */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Basic Information
                </h3>

                {/* First Row: Name, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="firstName" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      First Name<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="lastName" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Last Name<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Doe"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="email" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Email Address<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="phone" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>
                </div>

                {/* Second Row: Job Title, Company, Website, Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="jobTitle" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Job Title<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      placeholder="Marketing Director"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="company" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Company Name<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      placeholder="Your Company Inc."
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="website" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="https://yourcompany.com"
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="industry" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Industry<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="saas">SaaS/Tech</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="realestate">Real Estate</option>
                        <option value="education">Education</option>
                        <option value="professional">Prof Services</option>
                        <option value="retail">Retail</option>
                        <option value="b2b">B2B Manufacturing</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="nonprofit">Non-Profit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: COMPANY SIZE & GOALS */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Company Profile
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="companySize" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Company Size<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="solo">Solo</option>
                        <option value="2-10">2-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="revenue" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Annual Revenue
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="revenue"
                        name="revenue"
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="pre-revenue">Pre-revenue</option>
                        <option value="under-500k">&lt;$500K</option>
                        <option value="500k-1m">$500K-$1M</option>
                        <option value="1m-5m">$1M-$5M</option>
                        <option value="5m-10m">$5M-$10M</option>
                        <option value="10m-50m">$10M-$50M</option>
                        <option value="50m+">$50M+</option>
                        <option value="prefer-not">Prefer not to say</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="marketingSpend" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Current Marketing Spend<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="marketingSpend"
                        name="marketingSpend"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="not-spending">Not spending</option>
                        <option value="under-2500">&lt;$2.5K/mo</option>
                        <option value="2500-5000">$2.5K-$5K/mo</option>
                        <option value="5000-10000">$5K-$10K/mo</option>
                        <option value="10000-25000">$10K-$25K/mo</option>
                        <option value="25000-50000">$25K-$50K/mo</option>
                        <option value="50000-100000">$50K-$100K/mo</option>
                        <option value="100000+">$100K+/mo</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Website Status - Horizontal Radio */}
                <div className="w-full mb-5">
                  <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                    Existing Website?<span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="existingWebsite" value="yes-improvements" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Needs improvements</span>
                    </label>
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="existingWebsite" value="yes-rebuild" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Needs rebuild</span>
                    </label>
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="existingWebsite" value="no-need-new" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Need new site</span>
                    </label>
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="existingWebsite" value="not-sure" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Not sure</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* SECTION 3: SERVICES NEEDED - MULTI-COLUMN */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Services Needed
                </h3>

                <label className="inline-block w-full font-sans-primary text-black text-xs mb-3">
                  Select all that apply<span className="text-red-600 text-xs ml-1">*</span>
                </label>

                {/* Marketing Services */}
                <div className="mb-4">
                  <h4 className="font-sans-primary text-black text-sm font-medium mb-2">🎯 Marketing</h4>
                  <div className="bg-[#f5f5f5] rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { value: 'strategy-growth', label: 'Search & Growth Strategy' },
                      { value: 'social-media', label: 'Social Media Marketing' },
                      { value: 'content-marketing', label: 'Content Marketing' },
                      { value: 'email-marketing', label: 'Email Marketing' },
                      { value: 'paid-advertising', label: 'Paid Advertising' },
                      { value: 'digital-pr', label: 'Digital PR' },
                      { value: 'video-marketing', label: 'Video Marketing' },
                      { value: 'brand-strategy', label: 'Brand Strategy' }
                    ].map(service => (
                      <label key={service.value} className="flex items-center gap-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          checked={isServiceSelected(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                        />
                        <span className="font-sans-primary text-black text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Website & SEO Services */}
                <div className="mb-4">
                  <h4 className="font-sans-primary text-black text-sm font-medium mb-2">🌐 Website & SEO</h4>
                  <div className="bg-[#f5f5f5] rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { value: 'web-development', label: 'Web Development' },
                      { value: 'technical-seo', label: 'Technical SEO' },
                      { value: 'on-page-seo', label: 'On-Page SEO' },
                      { value: 'local-seo', label: 'Local SEO' },
                      { value: 'ecommerce-development', label: 'E-commerce' },
                      { value: 'seo-audit', label: 'SEO Audit' },
                      { value: 'conversion-optimization', label: 'CRO' },
                      { value: 'website-maintenance', label: 'Maintenance' }
                    ].map(service => (
                      <label key={service.value} className="flex items-center gap-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          checked={isServiceSelected(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                        />
                        <span className="font-sans-primary text-black text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CRM & Sales Automation */}
                <div className="mb-4">
                  <h4 className="font-sans-primary text-black text-sm font-medium mb-2">⚙️ CRM & Sales</h4>
                  <div className="bg-[#f5f5f5] rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { value: 'crm-implementation', label: 'CRM Implementation' },
                      { value: 'marketing-automation', label: 'Marketing Automation' },
                      { value: 'sales-funnel', label: 'Sales Funnel' },
                      { value: 'lead-generation', label: 'Lead Gen Systems' },
                      { value: 'pipeline-management', label: 'Pipeline Management' },
                      { value: 'integration-services', label: 'Integrations' }
                    ].map(service => (
                      <label key={service.value} className="flex items-center gap-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          checked={isServiceSelected(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                        />
                        <span className="font-sans-primary text-black text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* AI Services */}
                <div className="mb-4">
                  <h4 className="font-sans-primary text-black text-sm font-medium mb-2">🤖 AI Services</h4>
                  <div className="bg-[#f5f5f5] rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                      { value: 'ai-strategy', label: 'AI Strategy' },
                      { value: 'ai-chatbots', label: 'AI Chatbots' },
                      { value: 'ai-content', label: 'AI Content Tools' },
                      { value: 'ai-personalization', label: 'AI Personalization' },
                      { value: 'predictive-analytics', label: 'Predictive Analytics' },
                      { value: 'custom-ai', label: 'Custom AI' }
                    ].map(service => (
                      <label key={service.value} className="flex items-center gap-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          checked={isServiceSelected(service.value)}
                          onChange={() => handleServiceToggle(service.value)}
                          className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                        />
                        <span className="font-sans-primary text-black text-sm">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="services"
                    value="not-sure"
                    checked={isServiceSelected('not-sure')}
                    onChange={() => handleServiceToggle('not-sure')}
                    className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                  />
                  <span className="font-sans-primary text-black text-sm">Not sure - need help deciding</span>
                </label>
              </div>

              {/* SECTION 4 & 5: PRIMARY & CONTEXT - COMPACT */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Project Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="primaryService" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      #1 Priority Service<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="primaryService"
                        name="primaryService"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <optgroup label="Marketing">
                          <option value="strategy-growth">Search & Growth Strategy</option>
                          <option value="social-media">Social Media</option>
                          <option value="content-marketing">Content</option>
                          <option value="paid-advertising">Paid Ads</option>
                          <option value="digital-pr">Digital PR</option>
                        </optgroup>
                        <optgroup label="Website & SEO">
                          <option value="web-development">Web Dev</option>
                          <option value="technical-seo">Technical SEO</option>
                          <option value="ecommerce-development">E-commerce</option>
                        </optgroup>
                        <optgroup label="CRM & Sales">
                          <option value="crm-implementation">CRM</option>
                          <option value="marketing-automation">Automation</option>
                        </optgroup>
                        <optgroup label="AI">
                          <option value="ai-strategy">AI Strategy</option>
                          <option value="ai-chatbots">AI Chatbots</option>
                        </optgroup>
                        <option value="not-sure">Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="businessGoal" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Primary Business Goal<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="businessGoal"
                        name="businessGoal"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="traffic">↑ Website traffic</option>
                        <option value="leads">↑ Generate leads</option>
                        <option value="conversions">↑ Conversions</option>
                        <option value="awareness">Build awareness</option>
                        <option value="sales">↑ Sales/revenue</option>
                        <option value="rankings">↑ Rankings</option>
                        <option value="automate">Automate processes</option>
                        <option value="launch">Launch product</option>
                        <option value="expand">Expand markets</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full mb-5">
                  <label htmlFor="mainProblem" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                    Main Problem You&apos;re Solving<span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                  <textarea
                    id="mainProblem"
                    name="mainProblem"
                    required
                    rows={3}
                    placeholder="Describe the challenges you're facing..."
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3 resize-none"
                  />
                </div>

                <div className="w-full mb-5">
                  <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                    Previous Agency Experience?<span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="agencyExperience" value="yes-current" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Yes, currently</span>
                    </label>
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="agencyExperience" value="yes-past" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">Yes, past</span>
                    </label>
                    <label className="flex items-center gap-x-2 cursor-pointer">
                      <input type="radio" name="agencyExperience" value="no" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                      <span className="font-sans-primary text-black text-sm">No, first time</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* CONDITIONAL FIELDS - COMPACT VERSIONS */}
              {(isServiceSelected('web-development') || isServiceSelected('ecommerce-development')) && (
                <div className="mb-8 bg-blue-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">Website Details</h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <div className="w-full">
                      <label htmlFor="pageCount" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        Page Count
                      </label>
                      <div className="relative">
                        <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                        <select id="pageCount" name="pageCount" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                          <option value="">Select</option>
                          <option value="1-5">1-5 pages</option>
                          <option value="6-10">6-10 pages</option>
                          <option value="11-20">11-20 pages</option>
                          <option value="21-50">21-50 pages</option>
                          <option value="50+">50+ pages</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mb-4">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">Platform</label>
                    <div className="flex flex-wrap gap-3">
                      {['custom', 'wordpress', 'shopify', 'woocommerce', 'not-sure-platform'].map(p => (
                        <label key={p} className="flex items-center gap-x-2 cursor-pointer">
                          <input type="checkbox" name="platforms" value={p} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                          <span className="font-sans-primary text-black text-sm">{p === 'custom' ? 'Custom' : p === 'not-sure-platform' ? 'Not sure' : p.charAt(0).toUpperCase() + p.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {(isServiceSelected('technical-seo') || isServiceSelected('on-page-seo') || isServiceSelected('local-seo')) && (
                <div className="mb-8 bg-green-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">SEO Details</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <div className="w-full">
                      <label htmlFor="seoSituation" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        Current SEO Situation
                      </label>
                      <div className="relative">
                        <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                        <select id="seoSituation" name="seoSituation" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                          <option value="">Select</option>
                          <option value="never">Never done SEO</option>
                          <option value="diy">Tried DIY</option>
                          <option value="agency-past">Past agency</option>
                          <option value="inhouse">In-house team</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full">
                      <label htmlFor="targetKeywords" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        Target Keywords
                      </label>
                      <input
                        type="text"
                        id="targetKeywords"
                        name="targetKeywords"
                        placeholder="keyword1, keyword2..."
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      />
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('social-media') && (
                <div className="mb-8 bg-purple-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">Social Media Details</h4>

                  <div className="w-full mb-4">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">Platforms</label>
                    <div className="flex flex-wrap gap-3">
                      {['instagram', 'facebook', 'linkedin', 'tiktok', 'twitter', 'youtube'].map(p => (
                        <label key={p} className="flex items-center gap-x-2 cursor-pointer">
                          <input type="checkbox" name="socialPlatforms" value={p} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                          <span className="font-sans-primary text-black text-sm">{p.charAt(0).toUpperCase() + p.slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">Content Creation Need</label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contentCreation" value="full" className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Full production</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contentCreation" value="some" className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Some</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contentCreation" value="no" className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">We create own</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('paid-advertising') && (
                <div className="mb-8 bg-orange-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">Paid Ads Details</h4>

                  <div className="w-full mb-4">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">Ad Platforms</label>
                    <div className="flex flex-wrap gap-3">
                      {['google-search', 'google-display', 'youtube-ads', 'meta-ads', 'linkedin-ads', 'tiktok-ads'].map(p => (
                        <label key={p} className="flex items-center gap-x-2 cursor-pointer">
                          <input type="checkbox" name="adPlatforms" value={p} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                          <span className="font-sans-primary text-black text-sm">{p.includes('google') ? 'Google' : p.includes('meta') ? 'Meta' : p.split('-')[0].charAt(0).toUpperCase() + p.split('-')[0].slice(1)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="adSpendBudget" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Monthly Ad Spend Budget
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select id="adSpendBudget" name="adSpendBudget" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                        <option value="">Select</option>
                        <option value="500-2000">$500-$2K/mo</option>
                        <option value="2000-5000">$2K-$5K/mo</option>
                        <option value="5000-10000">$5K-$10K/mo</option>
                        <option value="10000-25000">$10K-$25K/mo</option>
                        <option value="25000-50000">$25K-$50K/mo</option>
                        <option value="50000+">$50K+/mo</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {isServiceSelected('crm-implementation') && (
                <div className="mb-8 bg-yellow-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">CRM Details</h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-4">
                    <div className="w-full">
                      <label htmlFor="crmPlatform" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        CRM Platform
                      </label>
                      <div className="relative">
                        <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                        <select id="crmPlatform" name="crmPlatform" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                          <option value="">Select</option>
                          <option value="hubspot">HubSpot</option>
                          <option value="salesforce">Salesforce</option>
                          <option value="pipedrive">Pipedrive</option>
                          <option value="zoho">Zoho</option>
                          <option value="not-sure-crm">Not sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full">
                      <label htmlFor="crmUsers" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        User Count
                      </label>
                      <div className="relative">
                        <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                        <select id="crmUsers" name="crmUsers" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                          <option value="">Select</option>
                          <option value="1-5">1-5</option>
                          <option value="6-10">6-10</option>
                          <option value="11-25">11-25</option>
                          <option value="26-50">26-50</option>
                          <option value="50+">50+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">Current CRM?</label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="currentCRM" value="yes" onChange={(e) => setHasExistingCRM(e.target.value)} className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Yes</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="currentCRM" value="no" onChange={(e) => setHasExistingCRM(e.target.value)} className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">No, starting fresh</span>
                      </label>
                    </div>
                  </div>

                  {hasExistingCRM === 'yes' && (
                    <div className="w-full mt-4">
                      <label htmlFor="whichCRM" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                        Which CRM?
                      </label>
                      <input
                        type="text"
                        id="whichCRM"
                        name="whichCRM"
                        placeholder="e.g., Salesforce"
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      />
                    </div>
                  )}
                </div>
              )}

              {(isServiceSelected('ai-strategy') || isServiceSelected('ai-chatbots') || isServiceSelected('ai-content')) && (
                <div className="mb-8 bg-pink-50 rounded-xl p-5">
                  <h4 className="text-lg font-sans-primary font-medium text-black mb-4">AI Details</h4>

                  <div className="w-full mb-4">
                    <label htmlFor="aiUseCase" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Primary AI Use Case
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select id="aiUseCase" name="aiUseCase" className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-white border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3">
                        <option value="">Select</option>
                        <option value="customer-service">Customer service automation</option>
                        <option value="content-creation">Content creation</option>
                        <option value="personalization">Personalization</option>
                        <option value="forecasting">Sales forecasting</option>
                        <option value="lead-scoring">Lead scoring</option>
                        <option value="custom-solution">Custom solution</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION 7-9: COMPACT AUDIENCE & BUDGET */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Target Market & Budget
                </h3>

                <div className="w-full mb-5">
                  <label htmlFor="targetCustomer" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                    Target Customer<span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                  <textarea
                    id="targetCustomer"
                    name="targetCustomer"
                    required
                    rows={2}
                    placeholder="Demographics, industry, pain points..."
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3 resize-none"
                  />
                </div>

                <div className="w-full mb-5">
                  <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                    Where customers find you
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['google', 'social', 'referrals', 'paid-ads', 'email', 'events'].map(ch => (
                      <label key={ch} className="flex items-center gap-x-2 cursor-pointer">
                        <input type="checkbox" name="discoveryChannels" value={ch} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">{ch.charAt(0).toUpperCase() + ch.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="projectBudget" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Project Budget<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="projectBudget"
                        name="projectBudget"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="under-5000">&lt;$5K</option>
                        <option value="5000-10000">$5K-$10K</option>
                        <option value="10000-25000">$10K-$25K</option>
                        <option value="25000-50000">$25K-$50K</option>
                        <option value="50000-100000">$50K-$100K</option>
                        <option value="100000-250000">$100K-$250K</option>
                        <option value="250000+">$250K+</option>
                        <option value="need-help-budget">Need help</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="retainerBudget" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Monthly Retainer
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="retainerBudget"
                        name="retainerBudget"
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="2500-5000">$2.5K-$5K/mo</option>
                        <option value="5000-10000">$5K-$10K/mo</option>
                        <option value="10000-25000">$10K-$25K/mo</option>
                        <option value="25000-50000">$25K-$50K/mo</option>
                        <option value="50000+">$50K+/mo</option>
                        <option value="project-based">Project-based</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="startTimeline" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Start Timeline<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="startTimeline"
                        name="startTimeline"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="immediate">ASAP</option>
                        <option value="1-month">1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6+-months">6+ months</option>
                        <option value="exploring">Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="projectTimeline" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Project Duration<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="projectTimeline"
                        name="projectTimeline"
                        required
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="1-3-months">1-3 mo</option>
                        <option value="3-6-months">3-6 mo</option>
                        <option value="6-12-months">6-12 mo</option>
                        <option value="12+-months">12+ mo</option>
                        <option value="not-sure-timeline">Not sure</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 10-12: RESOURCES & TRACKING - COMPACT */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Current Resources
                </h3>

                <div className="w-full mb-5">
                  <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                    Existing Brand Assets
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['logo', 'guidelines', 'colors', 'fonts', 'photography', 'video', 'copy', 'none-assets'].map(asset => (
                      <label key={asset} className="flex items-center gap-x-2 cursor-pointer">
                        <input type="checkbox" name="brandAssets" value={asset} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">{asset === 'none-assets' ? 'None' : asset.charAt(0).toUpperCase() + asset.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                      In-house Marketing Team?<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="marketingTeam" value="full-team" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Full team</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="marketingTeam" value="limited" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Limited</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="marketingTeam" value="outsourced" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Outsourced</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="marketingTeam" value="just-me" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Just me</span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                      Analytics Tracking?<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="analytics" value="google-analytics" required onChange={(e) => setHasAnalytics(e.target.value)} className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">GA</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="analytics" value="other-tools" required onChange={(e) => setHasAnalytics(e.target.value)} className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Other tools</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="analytics" value="no-analytics" required onChange={(e) => setHasAnalytics(e.target.value)} className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">No</span>
                      </label>
                    </div>
                  </div>
                </div>

                {hasAnalytics === 'other-tools' && (
                  <div className="w-full mb-5">
                    <label htmlFor="otherAnalytics" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Which Analytics Tools?
                    </label>
                    <input
                      type="text"
                      id="otherAnalytics"
                      name="otherAnalytics"
                      placeholder="Mixpanel, Amplitude, etc."
                      className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                    />
                  </div>
                )}

                <div className="w-full mb-5">
                  <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                    Important KPIs
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {['traffic', 'leads', 'conversion', 'revenue', 'roi', 'rankings', 'social'].map(kpi => (
                      <label key={kpi} className="flex items-center gap-x-2 cursor-pointer">
                        <input type="checkbox" name="kpis" value={kpi} className="w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">{kpi.charAt(0).toUpperCase() + kpi.slice(1)}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 13: ADDITIONAL INFO & CONSENT */}
              <div className="mb-8">
                <h3 className="text-2xl font-sans-primary font-medium text-black mb-5">
                  Final Details
                </h3>

                <div className="w-full mb-5">
                  <label htmlFor="additionalInfo" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    placeholder="Goals, constraints, requirements..."
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="w-full">
                    <label htmlFor="referralSource" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="referralSource"
                        name="referralSource"
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="google">Google</option>
                        <option value="social-media">Social media</option>
                        <option value="referral">Referral</option>
                        <option value="review">Review/article</option>
                        <option value="client">Existing client</option>
                        <option value="event">Event</option>
                        <option value="other-source">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                      Evaluating other agencies?<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="evaluatingOthers" value="yes-multiple" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Yes, comparing</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="evaluatingOthers" value="no-only-expand" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">No, only you</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Privacy Consent */}
                <div className="w-full flex items-start gap-x-3 mb-4">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                  />
                  <label htmlFor="privacy" className="font-sans-primary text-black text-xs">
                    I consent to Expand Marketing storing my data. <a href="/privacy-policy" className="underline">Privacy Policy</a>
                    <span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                </div>

                {/* Marketing Opt-in */}
                <div className="w-full flex items-start gap-x-3 mb-5">
                  <input
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    className="mt-1 w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                  />
                  <label htmlFor="marketing" className="font-sans-primary text-black text-xs">
                    Send me marketing insights & case studies
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  <div className="w-full">
                    <label className="inline-block w-full font-sans-primary text-black text-xs mb-2">
                      Preferred Contact<span className="text-red-600 text-xs ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="email" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Email</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="phone" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Phone</span>
                      </label>
                      <label className="flex items-center gap-x-2 cursor-pointer">
                        <input type="radio" name="contactMethod" value="video" required className="w-4 h-4 text-grey-900 focus:ring-grey-600 focus:ring-2" />
                        <span className="font-sans-primary text-black text-sm">Video</span>
                      </label>
                    </div>
                  </div>

                  <div className="w-full">
                    <label htmlFor="bestTime" className="inline-block w-full font-sans-primary text-black text-xs mb-1">
                      Best Time to Contact
                    </label>
                    <div className="relative">
                      <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                      <select
                        id="bestTime"
                        name="bestTime"
                        className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                      >
                        <option value="">Select</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                        <option value="anytime">Anytime</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <Button type="submit" variant="primary" className="w-full md:w-auto">
                    Get My Free Custom Estimate
                  </Button>
                  <p className="font-sans-primary text-black text-xs mt-3 opacity-70">
                    Response within 1 business day • No obligation • Free consultation
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EstimateHero
