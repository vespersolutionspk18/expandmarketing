'use client'

import Image from "next/image";
import React, { memo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Button from "./Button";
import Link from "next/link";
import { getServicesForNav } from '@/app/data/services';

// TypeScript interfaces
interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  hasSubmenu: boolean;
  submenuId?: string;
  submenuItems?: SubmenuItem[];
}

// Lazy load MegaMenu since it's complex and not immediately visible
const MegaMenu = dynamic(() => import("./MegaMenu"), {
  loading: () => <div className="w-96" />, // Placeholder to prevent layout shift
  ssr: true
});

const Header = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hideHeaderBackground, setHideHeaderBackground] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const mobileMenuLinks: MenuItem[] = [
    {
      label: "Services",
      href: "/services",
      hasSubmenu: true,
      submenuId: "102",
      submenuItems: getServicesForNav()
    },
    {
      label: "About",
      href: "/about",
      hasSubmenu: false
    },
    { label: "Work", href: "/work", hasSubmenu: false },
    { label: "Careers", href: "/careers", hasSubmenu: false },
    { label: "Blog", href: "/blog", hasSubmenu: false },
     { label: "Contact", href: "/contact", hasSubmenu: false },
  ];

  const toggleSubmenu = (submenuId: string | undefined) => {
    if (!submenuId) return;
    setActiveSubmenu(activeSubmenu === submenuId ? null : submenuId);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideHeaderBackground(false);
      } else {
        setHideHeaderBackground(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Wrapper */}
      <div className="w-full relative flex transition h-[4.5rem] lg:h-[5.5rem] lg:p-3" style={{ zIndex: 9999 }}>
        <div
          className={`w-full flex items-center justify-between relative z-20 px-4 transition lg:px-3 lg:rounded-full ${
            !hideHeaderBackground ? 'bg-white/60 backdrop-blur-lg' : ''
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex w-32 ml-2 md:w-40 ${
              hideHeaderBackground ? 'text-white' : 'text-black'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logos/logo-b.svg"
              alt="expand"
              width={120}
              height={40}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="relative ml-10 group/links hidden lg:inline-flex">
            <MegaMenu />
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button href="/contact" variant="secondary">
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <div className={hideHeaderBackground ? '' : 'hidden'}>
              <div className="inline-flex lg:hidden">
                <button
                  className="inline-flex items-center justify-center w-12 h-8"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div className="flex w-5 h-2 flex-col items-start justify-between">
                    <div
                      className={`w-full h-px relative -top-px transition-transform duration-500 ${
                        mobileMenuOpen ? 'transform rotate-45 translate-y-1' : 'transform rotate-0'
                      }`}
                    >
                      <div className="w-full h-0.5 bg-white"></div>
                    </div>
                    <div
                      className={`w-full h-px transition-transform duration-500 ${
                        mobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : 'transform rotate-0'
                      }`}
                    >
                      <div className="w-full h-0.5 bg-white"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className={!hideHeaderBackground ? '' : 'hidden'}>
              <div className="inline-flex lg:hidden">
                <button
                  className="inline-flex items-center justify-center w-12 h-8"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <div className="flex w-5 h-2 flex-col items-start justify-between">
                    <div
                      className={`w-full h-px relative -top-px transition-transform duration-500 ${
                        mobileMenuOpen ? 'transform rotate-45 translate-y-1' : 'transform rotate-0'
                      }`}
                    >
                      <div className="w-full h-0.5 bg-black"></div>
                    </div>
                    <div
                      className={`w-full h-px transition-transform duration-500 ${
                        mobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : 'transform rotate-0'
                      }`}
                    >
                      <div className="w-full h-0.5 bg-black"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`w-full h-svh fixed top-0 left-0 opacity-0 pointer-events-none transition p-2 backdrop-blur-sm duration-1000 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : ''
        }`}
        style={{ zIndex: 10001 }}
      >
        <div className="w-full h-full bg-gray-900/80 rounded-3xl px-4 py-2.5 flex flex-col items-start justify-between">

          <div className="w-full grid gap-y-10">
            {/* Top bar with logo and hamburger */}
            <div className="w-full flex flex-wrap items-center justify-between">
              <Link href="/" className="w-32 inline-flex md:w-40" onClick={() => setMobileMenuOpen(false)}>
                <div className="text-white">
                  <Image
                    src="/logos/logo-b.svg"
                    alt="expand"
                    width={120}
                    height={40}
                    className="w-full h-auto"
                    priority
                    unoptimized
                  />
                </div>
              </Link>

              <div className="-mr-2">
                <div className="inline-flex lg:hidden">
                  <button
                    className="inline-flex items-center justify-center w-12 h-8"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <div className="flex w-5 h-2 flex-col items-start justify-between">
                      <div className="w-full h-px relative -top-px transition-transform duration-500 transform rotate-45 translate-y-1">
                        <div className="w-full h-0.5 bg-white"></div>
                      </div>
                      <div className="w-full h-px transition-transform duration-500 transform -rotate-45 -translate-y-1">
                        <div className="w-full h-0.5 bg-white"></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start gap-y-1">
              {mobileMenuLinks.map((link) => (
                <div key={link.href} className="w-full">
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={link.href}
                      className="text-white text-4xl tracking-tight font-medium leading-none md:text-5xl flex-1 min-w-0"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.hasSubmenu && link.submenuId && (
                      <button
                        type="button"
                        className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-xs border border-white border-solid transition shrink-0 z-20 pointer-events-auto touch-manipulation ${
                          activeSubmenu === link.submenuId ? 'rotate-180' : 'rotate-0'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Button clicked:', link.label);
                          toggleSubmenu(link.submenuId);
                        }}
                        onTouchStart={(e) => {
                          e.stopPropagation();
                        }}
                        onTouchEnd={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Button touched:', link.label);
                          toggleSubmenu(link.submenuId);
                        }}
                        style={{ touchAction: 'manipulation' }}
                      >
                        <svg className="w-4 h-4 pointer-events-none" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 4 L6 8 L10 4" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Submenu */}
                  {link.hasSubmenu && link.submenuItems && (
                    <div
                      className={`w-full overflow-hidden transition-all duration-300 relative z-10 ${
                        activeSubmenu === link.submenuId ? 'max-h-[500px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="grid gap-y-1 py-4">
                        {link.submenuItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group inline-flex tracking-tight leading-tight font-medium relative text-white text-xl pointer-events-auto touch-manipulation hover:text-gray-300 transition-colors"
                            onClick={(e) => {
                              console.log('Submenu link clicked:', item.label);
                              setMobileMenuOpen(false);
                            }}
                            onTouchEnd={(e) => {
                              console.log('Submenu link touched:', item.label);
                            }}
                            style={{ touchAction: 'manipulation' }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button at bottom */}
          <div className="w-full">
            <Button
              href="/contact"
              variant="secondary"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

Header.displayName = "Header";

export default Header;
