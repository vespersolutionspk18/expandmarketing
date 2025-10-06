'use client';

import Image from 'next/image';
import Button from '@/app/components/Button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChecklistItem {
  text: string;
  checked?: boolean;
}

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  image?: string;
}

interface LeftRightProps {
  imageSrc?: string | string[];
  imageAlt: string;
  label?: string;
  title: string;
  bigHeading?: boolean;
  content?: string[];
  checklist?: ChecklistItem[];
  checklistColumns?: 1 | 2;
  accordion?: AccordionItem[];
  autoPlayAccordion?: boolean;
  autoPlayInterval?: number;
  buttonText?: string;
  buttonHref?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  imagePosition?: 'left' | 'right';
  showLabelBorder?: boolean;
}

export default function LeftRight({
  imageSrc,
  imageAlt,
  label,
  title,
  bigHeading = false,
  content,
  checklist,
  checklistColumns = 2,
  accordion,
  autoPlayAccordion = false,
  autoPlayInterval = 10000,
  buttonText,
  buttonHref,
  buttonVariant = 'secondary',
  imagePosition = 'left',
  showLabelBorder = true,
}: LeftRightProps) {
  const [activeAccordionId, setActiveAccordionId] = useState(accordion?.[0]?.id || 1);

  // Auto-play accordion functionality
  useEffect(() => {
    if (!accordion || !autoPlayAccordion) return;

    const interval = setInterval(() => {
      setActiveAccordionId((prev) => {
        const currentIndex = accordion.findIndex((item) => item.id === prev);
        const nextIndex = (currentIndex + 1) % accordion.length;
        return accordion[nextIndex].id;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [accordion, autoPlayAccordion, autoPlayInterval]);

  const handleAccordionClick = (id: number) => {
    setActiveAccordionId(id);
  };

  const activeAccordionItem = accordion?.find((item) => item.id === activeAccordionId);
  const displayImageSrc = accordion && activeAccordionItem?.image
    ? activeAccordionItem.image
    : Array.isArray(imageSrc)
    ? imageSrc[0]
    : imageSrc;

  const showImage = imageSrc || (accordion && accordion.some(item => item.image));

  return (
    <section className="w-full pb-12 xl:pb-24">
      <div className="w-full px-4 md:px-7">
        <div className="grid grid-cols-12 lg:gap-x-10 xl:gap-x-20 gap-y-3 md:gap-y-5">

          {/* Image */}
          {showImage && (
            <div
              className={`col-span-12 relative aspect-square rounded-2xl overflow-hidden mb-5 lg:rounded-3xl lg:mb-0 lg:col-span-6 3xl:col-span-5 ${
                imagePosition === 'right' ? 'lg:col-start-7 3xl:col-start-8' : ''
              } ${imagePosition === 'right' ? 'order-last lg:order-last' : ''}`}
            >
              {accordion && accordion.some(item => item.image) ? (
                // Multiple images for accordion
                <div className="relative w-full h-full">
                  {accordion.map((item) => (
                    <div
                      key={`image-${item.id}`}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        activeAccordionId === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Single image
                displayImageSrc && (
                  <Image
                    src={displayImageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                )
              )}
            </div>
          )}

          {/* Content */}
          <div
            className={`col-span-12 flex items-center justify-center ${
              showImage ? 'lg:col-span-6 3xl:col-span-5' : 'lg:col-span-12'
            } ${
              imagePosition === 'right' && showImage ? 'lg:col-start-1 lg:row-start-1 3xl:col-start-1' : showImage ? '3xl:col-start-7' : ''
            }`}
          >
            <div className="grid lg:pr-10 gap-y-3 md:gap-y-5 w-full">

              {/* Label */}
              {label && (
                <div
                  className={`inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight font-sans-primary font-medium tracking-tight js-heading ${
                    showLabelBorder ? 'md:pb-4 md:border-b md:border-grey-200' : ''
                  }`}
                >
                  {label}
                </div>
              )}

              {/* Title */}
              <h2
                className={`inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 font-sans-primary font-medium tracking-tight js-heading ${
                  bigHeading
                    ? 'text-4xl/tight lg:text-5xl/tight xl:text-6xl/tight 3xl:text-7xl/tight'
                    : 'text-3xl/none lg:text-4xl/none xl:text-5xl/none 3xl:text-6xl/none'
                }`}
              >
                {title}
              </h2>

              {/* Regular Content */}
              {content && content.length > 0 && (
                <div className="w-full">
                  {content.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-sm font-sans-primary leading-normal text-pretty ${
                        index === content.length - 1 ? 'mb-0' : 'mb-5'
                      } lg:text-base text-grey-900`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Checklist */}
              {checklist && checklist.length > 0 && (
                <div className={`grid gap-4 ${checklistColumns === 2 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                  {checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-sm lg:text-base text-grey-900 font-sans-primary font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Accordion */}
              {accordion && accordion.length > 0 && (
                <div className="grid border-t border-grey-200">
                  {accordion.map((item) => (
                    <div key={item.id} className="grid relative">
                      {/* Accordion Title */}
                      <div
                        className="group cursor-pointer pt-4 xl:pt-6"
                        onClick={() => handleAccordionClick(item.id)}
                      >
                        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight 4xl:text-2xl font-medium tracking-tight">
                          {item.title}
                        </div>
                      </div>

                      {/* Accordion Content */}
                      <AnimatePresence>
                        {activeAccordionId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="w-full mt-4 xl:pr-10 2xl:pr-20">
                              <p className="text-sm font-medium leading-normal text-pretty lg:text-base text-grey-900">
                                {item.content}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Progress Bar */}
                      <div className="h-px bg-grey-200 w-full mt-4 xl:mt-6">
                        <div
                          className={`h-0.5 -mt-px bg-grey-900 ${
                            activeAccordionId === item.id ? 'animate-grow' : 'w-0'
                          }`}
                          key={`progress-${item.id}-${activeAccordionId}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Button */}
              {buttonText && buttonHref && (
                <div className="flex flex-wrap gap-4">
                  <Button href={buttonHref} variant={buttonVariant}>
                    {buttonText}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
