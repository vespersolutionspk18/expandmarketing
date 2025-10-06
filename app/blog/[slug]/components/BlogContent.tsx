'use client';

import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaXTwitter, FaLink } from 'react-icons/fa6';
import { HiArrowUpRight } from 'react-icons/hi2';

interface BlogContentProps {
  content: string;
  title: string;
}

export default function BlogContent({ content, title }: BlogContentProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    twitter: `https://x.com/intent/tweet?text=${encodeURIComponent(title)} - ${encodeURIComponent(currentUrl)}`,
    copy: currentUrl
  };

  const handleCopyLink = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl);
    }
  };

  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-12 gap-y-5 mt-10 | lg:gap-y-10 lg:gap-x-14">

          {/* Border */}
          <div className="col-span-12 border-t border-grey-200"></div>

          {/* Left Sidebar - Share Buttons (Sticky) */}
          <div className="col-span-12 | lg:col-span-4 | xl:col-span-3 | 3xl:pr-20">
            <div className="sticky left-0 grid | lg:top-24 | gap-y-3 | md:gap-y-7">

              <div className="grid gap-y-2">
                <div className="text-sm font-light tracking-tightish text-grey-300">
                  Share
                </div>

                <nav aria-label="Social sharing">
                  <ul className="flex gap-1">
                    {/* LinkedIn */}
                    <li>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded | pointer-fine:hover:rounded-sm"
                      >
                        <div className="inline-flex items-center gap-x-0.5">
                          <FaLinkedinIn />
                        </div>
                        <HiArrowUpRight />
                      </a>
                    </li>

                    {/* Twitter/X */}
                    <li>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded | pointer-fine:hover:rounded-sm"
                      >
                        <div className="inline-flex items-center gap-x-0.5">
                          <FaXTwitter />
                        </div>
                        <HiArrowUpRight />
                      </a>
                    </li>

                    {/* Copy Link */}
                    <li>
                      <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded | pointer-fine:hover:rounded-sm"
                      >
                        <div className="inline-flex items-center gap-x-0.5">
                          <FaLink />
                        </div>
                        <HiArrowUpRight />
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-12 | lg:col-span-8 | xl:col-span-7 | 3xl:col-span-6 3xl:col-start-5">
            <div className="grid grid-cols-12 gap-y-4 | lg:gap-y-10">
              <div className="col-span-12">
                <div
                  className="w-full"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
