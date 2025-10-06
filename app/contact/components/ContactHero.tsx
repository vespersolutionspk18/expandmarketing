'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/Button'

const ContactHero = () => {
  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Left Section - Image Card with Backdrop Blur Overlay */}
          <div className="col-span-12 grid overflow-hidden rounded-3xl md:col-span-5 lg:col-span-6">
            {/* Background Image */}
            <div className="col-start-1 row-start-1 relative z-0">
              <div className="relative w-full h-full min-h-[500px] md:min-h-[600px]">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&h=2000&fit=crop"
                  alt="Team collaboration"
                  fill
                  className="w-full h-full object-cover absolute inset-0 transition-opacity"
                  priority
                  style={{ opacity: 1 }}
                />
              </div>
            </div>

            {/* Overlay Content with Backdrop Blur */}
            <div className="col-start-1 row-start-1 flex flex-col items-start justify-between p-5 relative z-20 backdrop-blur-md gap-y-3 md:gap-y-5 lg:p-7">
              {/* Main Heading */}
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl/none lg:text-5xl/none xl:text-6xl/none 3xl:text-7xl/[0.9] font-sans-primary font-medium tracking-tight">
                Fill out our form to get in touch
              </h2>

              {/* Bottom Content */}
              <div className="flex flex-col items-start mt-3 lg:mt-0 gap-y-3 md:gap-y-5">
                {/* Subheading */}
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl/none font-sans-primary font-medium tracking-tight">
                  Interested in joining our team? Head over to our Careers page to check our latest job vacancies.
                </h2>

                {/* Button */}
                <Button href="/career" variant="secondary" className="w-full md:w-auto">
                  Careers
                </Button>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="col-span-12 bg-white rounded-3xl p-5 lg:py-7 lg:px-10 md:col-span-7 lg:col-span-6">
            <form className="w-full">
              {/* Two Column Row - First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* First Name */}
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                  >
                    Hello, my first name is...
                    <span className="text-red-600 text-xs ml-1">*</span>
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

                {/* Last Name */}
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                  >
                    And my last name is...
                    <span className="text-red-600 text-xs ml-1">*</span>
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
              </div>

              {/* Email */}
              <div className="w-full mb-5">
                <label
                  htmlFor="email"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  My email is
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@coolbusiness.com"
                  className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                />
              </div>

              {/* Two Column Row - Job Title and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {/* Job Title */}
                <div className="w-full">
                  <label
                    htmlFor="jobTitle"
                    className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                  >
                    My job title is..
                    <span className="text-red-600 text-xs ml-1">*</span>
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

                {/* Company Name */}
                <div className="w-full">
                  <label
                    htmlFor="company"
                    className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                  >
                    My company name is...
                    <span className="text-red-600 text-xs ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Some cool company"
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                  />
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="w-full mb-5">
                <label
                  htmlFor="services"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  I&apos;m Interested in...
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <div className="relative">
                  <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                  <select
                    id="services"
                    name="services"
                    required
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                  >
                    <option value="">Please select an option</option>
                    <option value="strategy-growth">Search &amp; Growth Strategy</option>
                    <option value="onsite-seo">Onsite SEO</option>
                    <option value="content-experience">Content Experience</option>
                    <option value="digital-pr">Digital PR</option>
                    <option value="social-video-seo">Social Video SEO</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="crm-consultancy">CRM Consultancy</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
              </div>

              {/* Budget Dropdown */}
              <div className="w-full mb-5">
                <label
                  htmlFor="budget"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  My budget is...
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <div className="relative">
                  <span className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 -translate-y-1/2 z-20 border-grey-900 w-1.5 h-1.5 mr-5"></span>
                  <select
                    id="budget"
                    name="budget"
                    required
                    className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent relative z-10 bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3"
                  >
                    <option value="">Please select an option</option>
                    <option value="5000-10000">$5,000 - $10,000 per month</option>
                    <option value="10000-25000">$10,000 - $25,000 per month</option>
                    <option value="25000-50000">$25,000 - $50,000 per month</option>
                    <option value="50000+">$50,000+ per month</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="w-full mb-5">
                <label
                  htmlFor="message"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  I&apos;d like to tell you more about my requirements
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us more..."
                  className="appearance-none motion-safe:transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-grey-600 focus:ring-grey-600/10 text-sm ring-3 px-5 py-3 resize-none"
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="w-full flex items-start gap-x-3 mb-8">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 rounded border-[#e5e5e5] text-grey-900 focus:ring-grey-600 focus:ring-2"
                />
                <label
                  htmlFor="privacy"
                  className="font-sans-primary text-black text-xs"
                >
                  I consent to Expand Marketing storing my data in order to contact me about my enquiry. Please see our{' '}
                  <a href="/contact" className="underline">
                    Privacy Policy
                  </a>{' '}
                  for more information.
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
