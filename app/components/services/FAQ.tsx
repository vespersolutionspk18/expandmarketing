'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQ({ title = 'Frequently Asked Questions', items }: FAQProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-12 | gap-x-3 | md:gap-x-5 gap-y-3 | md:gap-y-5">
          {/* Left column - Sticky Title */}
          <div className="col-span-10 | lg:col-span-4 | xl:col-span-4 | 3xl:col-span-3">
            <div className="sticky top-24 left-0">
              <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-3xl/none | lg:text-5xl/none | xl:text-6xl/none | 3xl:text-7xl/0.9 font-sans-primary font-medium tracking-tight js-heading">
                {title}
              </h2>
            </div>
          </div>

          {/* Right column - FAQ Items */}
          <div className="col-span-12 | lg:mt-1 lg:col-span-8 | xl:col-span-8 | 3xl:col-start-5">
            <div className="grid gap-y-2">
              {items.map((item) => {
                const isActive = activeId === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    className={`cursor-pointer transition-all duration-300 group bg-white p-4 | lg:p-6 ${
                      isActive
                        ? 'rounded-xl | lg:rounded-2xl'
                        : 'rounded-xl | lg:rounded-2xl | pointer-fine:hover:rounded-[2.5rem]'
                    }`}
                    onClick={() => toggleItem(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Question and Icon */}
                    <div className="w-full flex items-center justify-between gap-4">
                      {/* Question with slide-up hover animation */}
                      <div className="relative overflow-hidden flex-1">
                        <div
                          className={`relative transition-transform duration-300 ${
                            isHovered && !isActive
                              ? 'pointer-fine:-translate-y-[105%]'
                              : 'translate-y-0'
                          }`}
                        >
                          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight | lg:text-2xl/tight | xl:text-3xl/none | 3xl:text-3xl/none font-sans-primary font-medium tracking-tight js-heading">
                            {item.question}
                          </div>
                        </div>

                        {/* Duplicate for hover animation */}
                        <div
                          className={`absolute top-0 left-0 transition-transform duration-300 ${
                            isHovered && !isActive
                              ? 'pointer-fine:translate-y-0'
                              : 'translate-y-[105%]'
                          }`}
                        >
                          <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-lg/tight | lg:text-2xl/tight | xl:text-3xl/none | 3xl:text-3xl/none font-sans-primary font-medium tracking-tight js-heading">
                            {item.question}
                          </div>
                        </div>
                      </div>

                      {/* Plus/X Icon */}
                      <div
                        className={`transition-transform duration-300 flex-shrink-0 text-grey-900 text-xl ${
                          isActive ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Answer with collapse animation */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="w-full pt-4">
                            <p className="text-base font-sans-primary leading-normal text-pretty | lg:text-lg text-grey-900 mb-0">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
