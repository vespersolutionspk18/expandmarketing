'use client';

import Image from 'next/image';
import { BlogAuthor as Author } from '../../data/types';

interface BlogAuthorProps {
  author: Author;
  publishedDate: string;
  category: string;
}

export default function BlogAuthor({ author, publishedDate, category }: BlogAuthorProps) {
  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-4 | md:px-7">
        <div className="grid grid-cols-12 border-t border-grey-200 mt-5 pt-5 | lg:mt-10 lg:pt-10 | gap-y-3 | md:gap-y-5 gap-x-3 | md:gap-x-5">

          {/* Author Info */}
          <div className="col-span-12 | lg:col-span-6 flex flex-col gap-y-2">

            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-600 bg-white">
                <div className="inline-flex items-center justify-center -ml-1.5">
                  <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>{author.name}</div>
              </div>

              <div className="font-medium tracking-tightish text-grey-300 text-sm | lg:text-base">
                {author.role}
              </div>
            </div>

          </div>

          {/* Date & Category */}
          <div className="col-span-12 flex flex-row items-center gap-3 | lg:flex-col lg:items-end lg:justify-end lg:col-span-6">

            <div className="text-sm font-medium text-grey-300">
              {publishedDate}
            </div>

            <div className="flex gap-1">
              <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-600 bg-white">
                <div>{category}</div>
              </div>
            </div>

          </div>

          {/* Author Bio */}
          <div className="col-span-12">
            <div className="w-full">
              <p className="text-sm font-sans-primary leading-normal text-pretty mb-5 | lg:text-base text-grey-900 mb-0!">
                {author.bio}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
