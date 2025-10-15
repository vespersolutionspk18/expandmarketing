"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { HiPlus } from "react-icons/hi2";
import { useMegaMenu } from "../contexts/MegaMenuContext";
import { getServiceSlugMap, getServiceCategories } from '@/app/data/services';

const AnimatedMenuLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    initial: { y: 0 },
    hover: { y: '-100%' }
  };

  const textVariantsHover = {
    initial: { y: '100%' },
    hover: { y: 0 }
  };

  return (
    <Link
      href={href}
      className="text-gray-900 text-xl font-semibold whitespace-nowrap tracking-tight block relative h-7 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="block"
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        variants={textVariants}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 block"
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        variants={textVariantsHover}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
      >
        {children}
      </motion.span>
    </Link>
  );
};

interface ServiceMenuItem {
  title: string;
  categories: Record<string, string[]>;
  activeCategory: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface AboutMenuItem {
  title: string;
  leftItems: string[];
  image: string;
  buttonText: string;
  buttonLink: string;
}

type MenuItem = ServiceMenuItem | AboutMenuItem;

const MegaMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeServiceCategory, setActiveServiceCategory] = useState("Marketing");
  const [menuWidth, setMenuWidth] = useState<number>(1050);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setIsOverlayActive } = useMegaMenu();

  // Import service data from central controller
  const serviceSlugMap = getServiceSlugMap();
  const serviceCategories = getServiceCategories();

  const menuItems: Record<string, MenuItem> = {
    Services: {
      title: "Core Services",
      categories: serviceCategories,
      activeCategory: activeServiceCategory,
      image: "https://images.pexels.com/photos/5292198/pexels-photo-5292198.jpeg?auto=compress&cs=tinysrgb&w=1600&q=95",
      buttonText: "View All Services",
      buttonLink: "/services"
    } as ServiceMenuItem,
  };

  const simpleLinks = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" }
  ];

  useEffect(() => {
    if (activeDropdown) {
      // Calculate width based on current content
      setTimeout(() => {
        if (contentRef.current) {
          const textContent = contentRef.current.querySelector('.opacity-100');
          if (textContent) {
            const contentWidth = textContent.scrollWidth;
            // Width = left padding (64px) + content + margin (60px) + image (340px) + right padding (12px)
            const totalWidth = 64 + contentWidth + 150 + 340 + 60;
            setMenuWidth(Math.max(1600, totalWidth)); 
          }
        }
      }, 10);
    }
  }, [activeDropdown, activeServiceCategory]);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to allow moving between button and dropdown
  };

  useEffect(() => {
    // Update overlay state when dropdown changes
    const shouldShowOverlay = activeDropdown === "Services";
    setIsOverlayActive(shouldShowOverlay);
  }, [activeDropdown, setIsOverlayActive]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-2">
      {Object.entries(menuItems).map(([key, value]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <button className="px-5 py-2 text-lg text-stone-700 hover:text-stone-900 font-medium transition-all duration-200 rounded-full hover:bg-white/50 flex items-center gap-1">
            {key}
            <HiPlus className="text-xs" />
          </button>

          <div
            className={`fixed top-20 left-1/2 transition-all duration-300 ${
              activeDropdown === key
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{ 
              transform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)',
              WebkitTransform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)',
              zIndex: 10000
            }}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-3 pl-16 pr-3 flex items-center transition-all duration-300 ease-in-out" style={{ width: `${menuWidth}px`, maxWidth: '80vw', height: '360px' }}>
              <div ref={contentRef} className="flex items-center justify-center h-full" style={{ marginRight: "60px" }}>
                {key === "Services" && 'categories' in value ? (
                  <div className="flex flex-col">
                    <div className="flex gap-6 mb-6">
                      {Object.keys(value.categories).map((category) => (
                        <button
                          key={category}
                          onMouseEnter={() => setActiveServiceCategory(category)}
                          className={`text-lg font-medium transition-all duration-200 ${
                            activeServiceCategory === category
                              ? "text-stone-900"
                              : "text-stone-500 hover:text-stone-700"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      {Object.entries(value.categories).map(([category, items]) => {
                        return (
                          <div
                            key={category}
                            className={`flex gap-x-12 transition-opacity duration-300 ease-in-out ${
                              activeServiceCategory === category
                                ? "opacity-100 relative"
                                : "opacity-0 absolute top-0 left-0 right-0 pointer-events-none"
                            }`}
                          >
                          <div className="flex flex-col -space-y-1">
                            {items.slice(0, 3).map((item, index) => (
                              <AnimatedMenuLink
                                key={index}
                                href={`/services/${serviceSlugMap[item] || item.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {item}
                              </AnimatedMenuLink>
                            ))}
                          </div>
                          <div className="flex flex-col -space-y-1">
                            {items.slice(3).map((item, index) => (
                              <AnimatedMenuLink
                                key={index}
                                href={`/services/${serviceSlugMap[item] || item.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                {item}
                              </AnimatedMenuLink>
                            ))}
                          </div>
                        </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="w-[340px] h-[340px] flex-shrink-0 ml-auto">
                <div className="relative rounded-2xl overflow-hidden bg-stone-100 w-full h-full flex flex-col">
                  <div className="relative flex-1">
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <Link href={value.buttonLink}>
                      <Button size="md" className="bg-black text-white hover:bg-stone-900">
                        {value.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {simpleLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="px-5 py-2 text-lg text-stone-700 hover:text-stone-900 font-medium transition-all duration-200 rounded-full hover:bg-white/50"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default MegaMenu;