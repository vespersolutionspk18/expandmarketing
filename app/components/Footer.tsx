'use client'

import React from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa6'

interface FooterLink {
  label: string
  href: string
}

const Footer = () => {
  const column1: FooterLink[] = [
    { label: 'Digital Marketing', href: '/services#digital-marketing' },
    { label: 'Web Design', href: '/services#web-design' },
    { label: 'AI & Data', href: '/services#ai-data' },
    { label: 'CRM & Tools', href: '/services#crm-tools' }
  ]

  const column2: FooterLink[] = [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' }
  ]

  const column3: FooterLink[] = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Get a Quote', href: '/quote' },
    { label: 'Support', href: '/support' },
    { label: 'Resources', href: '/resources' }
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com' },
    { icon: FaXTwitter, href: 'https://twitter.com' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com' },
    { icon: FaYoutube, href: 'https://youtube.com' },
    { icon: FaTiktok, href: 'https://tiktok.com' },
    { icon: FaInstagram, href: 'https://instagram.com' }
  ]

  return (
    <section className="w-full py-0" id="footer">
      <div className="w-full px-0">
        <div className="p-2 grid relative mt-8 lg:mt-0 js-footer">

          {/* Background */}
          <div className="absolute top-0 left-0 w-full h-full p-2 flex js-footer-background">
            <div className="w-full h-full bg-[#111212] rounded-3xl"></div>
          </div>

          {/* Content */}
          <div className="col-start-1 row-start-1 grid grid-cols-12 pt-10 sm:pt-12 md:pt-14 pb-4 relative z-20 lg:pt-10 lg:pb-7 px-4 md:px-7 gap-x-3 md:gap-x-5 gap-y-6 md:gap-y-7 js-footer-content">

            {/* Left Column - Newsletter & Social */}
            <div className="flex flex-col items-start justify-start col-span-12 mb-8 lg:mb-0 lg:col-span-4 gap-y-4 md:gap-y-5">

              {/* Newsletter Title */}
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-white text-xl/none sm:text-2xl/none xl:text-3xl/none 4xl:text-4xl/none font-medium tracking-tight js-heading">
                Stay updated with Expand news
              </h2>

              {/* Newsletter Form */}
              <form method="post" className="w-full relative">
                <input
                  type="email"
                  required
                  name="fields[email]"
                  className="appearance-none transition bg-[#282828] rounded-full w-full text-white font-medium tracking-tight leading-none text-base sm:text-lg px-4 py-3.5 sm:px-5 sm:py-4 lg:text-xl lg:px-6 lg:py-5 placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15"
                  placeholder="Your Email Address"
                />

                <div className="absolute top-0 right-0 h-full flex items-center p-1.5 sm:p-2">
                  <button
                    type="submit"
                    className="size-8 sm:size-9 bg-[#e5ff66] text-[#111212] text-sm sm:text-md rounded-full flex items-center justify-center cursor-pointer transition lg:size-13 lg:text-lg hover:bg-white hover:rotate-90"
                  >
                    <HiArrowUpRight className="stroke-[0.5]" strokeWidth={0.5} />
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div className="flex gap-1 flex-wrap">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-x-2 sm:gap-x-2.5 rounded-xl text-xs px-2 py-1 transition transition-rounded hover:rounded-sm bg-white text-[#111212]"
                    >
                      <div className="inline-flex items-center gap-x-0.5">
                        <IconComponent />
                      </div>
                      <HiArrowUpRight />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Right Columns - Navigation Links */}
            <div className="flex justify-between col-span-12 flex-wrap md:flex-row md:col-span-11 lg:col-span-6 lg:col-start-6 gap-y-8 md:gap-y-10">

              {/* Column 1 */}
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto">
                {column1.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group inline-flex text-white font-medium tracking-tight leading-tight text-base sm:text-lg lg:text-xl hover:text-[#e5ff66]"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-7">
                        {link.label}
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">
                        {link.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto">
                {column2.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group inline-flex text-white font-medium tracking-tight leading-tight text-base sm:text-lg lg:text-xl hover:text-[#e5ff66]"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-7">
                        {link.label}
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">
                        {link.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-full sm:w-1/2 md:w-auto mt-0 sm:mt-0">
                {column3.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group inline-flex text-white font-medium tracking-tight leading-tight text-base sm:text-lg lg:text-xl hover:text-[#e5ff66]"
                  >
                    <div className="relative overflow-hidden">
                      <div className="transition group-hover:-translate-y-7">
                        {link.label}
                      </div>
                      <div className="transition absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">
                        {link.label}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

            </div>

            {/* Logo/Brand Name */}
            <div className="col-span-12 mt-8 sm:mt-10 lg:mt-32">
              <div className="text-white">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight">
                  Expand Marketing
                </div>
              </div>
            </div>

            {/* Bottom Row - Copyright & Legal Links */}
            <div className="col-span-12 flex justify-between flex-col mt-10 items-end md:flex-row lg:items-center lg:mt-0">

              <div className="flex gap-x-2 gap-y-2 flex-wrap items-center md:gap-3">

                <div className="text-white font-light leading-tight text-[0.675rem] md:text-xs">
                  © 2025 Expand Marketing Ltd. All rights reserved
                </div>

                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>

                <div className="text-white font-light leading-tight text-[0.675rem] md:text-xs">
                  Company Number 12345678
                </div>

                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>

                <div className="text-white font-light leading-tight text-[0.675rem] md:text-xs">
                  VAT Registered GB 123456789
                </div>

                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>

                <a href="/privacy-policy" className="text-white font-light leading-tight text-[0.675rem] md:text-xs link">
                  Privacy Policy
                </a>

                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>

                <a href="/terms-conditions" className="text-white font-light leading-tight text-[0.675rem] md:text-xs link">
                  Terms &amp; conditions
                </a>

                <div className="w-1 h-1 rounded-full bg-white inline-flex md:mt-0.5 md:last:hidden"></div>

              </div>


            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
