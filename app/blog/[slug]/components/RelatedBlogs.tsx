'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '../../../components/Button';
import { BlogPost } from '../../data/types';

interface RelatedBlogsProps {
  posts: BlogPost[];
}

export default function RelatedBlogs({ posts }: RelatedBlogsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full pb-12 | xl:pb-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 | gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5">

          {/* Header */}
          <div className="col-span-12 | px-4 | md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-grey-200 md:pb-5 gap-y-3 | md:gap-y-7 gap-x-3 | md:gap-x-5">

              <div className="col-span-11 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-grey-900 text-6xl/0.9 | md:text-7xl/none | lg:text-7xl/none | 2xl:text-8xl/0.9 font-medium tracking-tight">
                  You may also like
                </h2>
              </div>

              <div className="col-span-12 | md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <Button href="/blog" variant="secondary">
                  Explore all news
                </Button>
              </div>

            </div>
          </div>

          {/* Blog Cards Carousel */}
          <div className="col-span-12">
            <div className="w-full overflow-x-auto hide-scrollbar">
              <div className="flex gap-3 md:gap-5 px-4 md:px-7">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[45vw] xl:w-[30vw] flex flex-col items-start gap-y-5 transition-transform duration-300 ease-out md:hover:-translate-y-1"
                  >
                    <div className="w-full grid">
                      {/* Category Badge */}
                      <div className="col-start-1 row-start-1 z-20 p-3">
                        <div className="flex flex-wrap gap-1">
                          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                            <div>{post.category}</div>
                          </div>
                        </div>
                      </div>

                      {/* Blog Image */}
                      <div className="col-start-1 row-start-1 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="w-full h-full object-cover"
                          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 30vw"
                        />
                      </div>
                    </div>

                    {/* Blog Info */}
                    <div className="flex flex-col items-start gap-y-3">
                      <div className="flex items-start gap-1 mt-1">
                        {/* Author Badge */}
                        <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-[#6a6a6a] bg-white">
                          <div className="inline-flex items-center justify-center -ml-1.5">
                            <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={20}
                                height={20}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div>{post.author.name}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-[#111212] text-xl/none sm:text-2xl/none xl:text-3xl/none font-medium tracking-tight">
                        {post.title}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="col-span-12 px-4 md:hidden flex justify-center mt-5">
            <Button href="/blog" variant="secondary" className="w-full">
              Explore all news
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
