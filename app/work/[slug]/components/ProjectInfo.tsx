'use client';

import { useEffect, useState } from 'react';

interface ProjectInfoProps {
  year: string;
  services: string;
  industry: string;
  slug: string;
}

export default function ProjectInfo({ year, services, industry, slug }: ProjectInfoProps) {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    twitter: `https://x.com/intent/tweet?text=${encodeURIComponent(`Check out this case study - ${currentUrl}`)}`,
    copy: currentUrl
  };

  const copyLink = () => {
    if (currentUrl) {
      navigator.clipboard.writeText(currentUrl);
    }
  };

  return (
    <div className="flex items-start justify-between py-5 flex-wrap gap-y-5 lg:p-5">
      {/* Year */}
      <div className="inline-flex flex-col items-start w-1/2 pr-10 lg:pr-0 lg:w-auto">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-300 text-base/tight font-medium tracking-tight">
          Year
        </div>
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight font-medium tracking-tight">
          {year}
        </div>
      </div>

      {/* Services */}
      <div className="inline-flex flex-col items-start w-1/2 pr-10 lg:pr-0 lg:w-auto">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-300 text-base/tight font-medium tracking-tight">
          Services
        </div>
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight font-medium tracking-tight">
          {services}
        </div>
      </div>

      {/* Industry */}
      <div className="inline-flex flex-col items-start w-1/2 pr-10 lg:pr-0 lg:w-auto">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-300 text-base/tight font-medium tracking-tight">
          Industry
        </div>
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-base/tight lg:text-lg/tight xl:text-xl/tight font-medium tracking-tight">
          {industry}
        </div>
      </div>

      {/* Share */}
      <div className="inline-flex flex-col items-start w-1/2 pr-10 lg:pr-0 lg:w-auto">
        <div className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-300 text-base/tight font-medium tracking-tight">
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
                className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded pointer-fine:hover:rounded-sm"
              >
                <div className="inline-flex items-center gap-x-0.5">
                  <span className="text-sm">in</span>
                </div>
                <span className="inline-block align-middle text-xs">↗</span>
              </a>
            </li>

            {/* Twitter/X */}
            <li>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded pointer-fine:hover:rounded-sm"
              >
                <div className="inline-flex items-center gap-x-0.5">
                  <span className="text-sm">𝕏</span>
                </div>
                <span className="inline-block align-middle text-xs">↗</span>
              </a>
            </li>

            {/* Copy Link */}
            <li>
              <button
                onClick={copyLink}
                className="inline-flex items-center gap-x-2.5 rounded-xl bg-white text-grey-900 text-xs px-2 py-1 transition transition-rounded pointer-fine:hover:rounded-sm"
              >
                <div className="inline-flex items-center gap-x-0.5">
                  <span className="text-sm">🔗</span>
                </div>
                <span className="inline-block align-middle text-xs">↗</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
