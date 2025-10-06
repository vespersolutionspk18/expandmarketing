'use client'

import React from 'react'
import Button from '@/app/components/Button'

const HeroSection = () => {
  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 gap-x-3 md:gap-x-5 gap-y-3 md:gap-y-5">
          {/* Left Card - Image with Overlay */}
          <div className="col-span-12 md:col-span-5 lg:col-span-6 grid overflow-hidden rounded-3xl min-h-[500px] md:min-h-[600px]">
            {/* Background Image */}
            <div className="col-start-1 row-start-1 relative z-0">
              <picture>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&q=80&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover absolute inset-0 transition-opacity"
                  style={{ opacity: 1 }}
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Overlay Content */}
            <div className="col-start-1 row-start-1 flex flex-col items-start justify-between p-5 lg:p-7 relative z-20 backdrop-blur-md gap-y-3 md:gap-y-5">
              {/* Main Heading */}
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-3xl leading-none lg:text-5xl lg:leading-none xl:text-6xl xl:leading-none 3xl:text-[5rem]/[0.9] font-sans-primary font-medium tracking-tight">
                Fill out our form to get in touch
              </h2>

              {/* Bottom Content */}
              <div className="flex flex-col items-start mt-3 lg:mt-0 gap-y-3 md:gap-y-5">
                {/* Subheading */}
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-base leading-tight lg:text-lg lg:leading-tight xl:text-xl xl:leading-tight 4xl:text-4xl/none font-sans-primary font-medium tracking-tight">
                  Interested in joining our team? Head over to our Careers page
                  to check our latest job vacancies.
                </h2>

                {/* Button */}
                <Button
                  href="/careers"
                  variant="secondary"
                  className="w-full md:w-auto"
                >
                  Careers
                </Button>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="col-span-12 md:col-span-7 lg:col-span-6 bg-white rounded-3xl p-5 lg:py-7 lg:px-10">
            <form className="flex flex-col gap-y-5">
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
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                  placeholder=""
                />
              </div>

              {/* Last Name */}
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  ...and my last name is
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  My email address is
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                  placeholder=""
                />
              </div>

              {/* Company */}
              <div className="w-full">
                <label
                  htmlFor="company"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  I work for
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                  placeholder=""
                />
              </div>

              {/* Service */}
              <div className="w-full">
                <label
                  htmlFor="service"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  I&apos;m interested in
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                >
                  <option value="">Please select</option>
                  <option value="seo">SEO</option>
                  <option value="content">Content Marketing</option>
                  <option value="paid">Paid Media</option>
                  <option value="creative">Creative Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div className="w-full">
                <label
                  htmlFor="budget"
                  className="inline-block w-full font-sans-primary text-black text-xs mb-1"
                >
                  My monthly budget is
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3"
                >
                  <option value="">Please select</option>
                  <option value="5000">Less than $5,000</option>
                  <option value="10000">$5,000 - $10,000</option>
                  <option value="25000">$10,000 - $25,000</option>
                  <option value="50000">$25,000 - $50,000</option>
                  <option value="50000+">$50,000+</option>
                </select>
              </div>

              {/* Message */}
              <div className="w-full">
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
                  className="appearance-none transition w-full block shadow-none outline-none rounded-xl font-sans-primary border border-solid ring-transparent bg-[#f5f5f5] border-[#e5e5e5] text-black placeholder-black/70 disabled:opacity-50 focus:border-[#666666] focus:ring-[#666666]/10 text-sm ring-3 px-5 py-3 resize-none"
                  placeholder=""
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="w-full flex items-start gap-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 rounded border-[#e5e5e5] text-black focus:ring-[#666666] focus:ring-2"
                />
                <label
                  htmlFor="privacy"
                  className="font-sans-primary text-black text-xs"
                >
                  I consent to Expand Marketing storing my data in order to contact
                  me about my enquiry. Please see our{' '}
                  <a href="/privacy" className="underline">
                    Privacy Policy
                  </a>{' '}
                  for more information.
                  <span className="text-red-600 text-xs ml-1">*</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="w-full pt-3">
                <Button type="submit" className="w-full md:w-auto">
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

export default HeroSection
