'use client'

import React from 'react'
import Image from 'next/image'
import Button from '../components/Button'
import { blogListings } from '../blog/data'
import { BlogListingItem } from '../blog/data/types'

const BlogCard = ({ post }: { post: BlogListingItem }) => {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="w-full flex flex-col items-start gap-y-5 transition-transform duration-300 ease-out md:hover:-translate-y-1 circle-mask-container"
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

        {/* Blurred Background Image */}
        <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-square lg:rounded-3xl">
          <div className="w-full h-full transition blur-md duration-1000 scale-[1.2] circle-mask">
            <picture>
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
                loading="lazy"
                style={{ opacity: 0 }}
                onLoad={(e) => (e.currentTarget.style.opacity = '1')}
              />
            </picture>
          </div>
        </div>

        {/* Sharp Main Image */}
        <div className="col-start-1 row-start-1 aspect-square relative rounded-2xl overflow-hidden lg:rounded-3xl">
          <picture>
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover absolute top-0 left-0 transition-opacity"
              loading="lazy"
              style={{ opacity: 0 }}
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
          </picture>
        </div>
      </div>

      {/* Blog Info */}
      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-start gap-1 mt-1">
          {/* Author Badge */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-[#6a6a6a] bg-white">
            <div className="inline-flex items-center justify-center -ml-1.5">
              <div className="rounded-full overflow-hidden -mr-1 w-5 h-5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>{post.author.name}</div>
          </div>

          {/* Read Time Badge */}
          <div className="inline-flex items-center font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 xl:min-h-8 xl:py-1.5 xl:text-base text-[#6a6a6a] bg-white">
            <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true"></i>
            <div>{post.readTime}</div>
          </div>
        </div>

        {/* Title */}
        <h2 className="inline-flex flex-wrap text-balance relative text-left justify-start text-[#111212] text-xl/none sm:text-2xl/none xl:text-3xl/none font-medium tracking-tight">
          {post.title}
        </h2>
      </div>
    </a>
  )
}

const Blogs = () => {
  return (
    <section className="w-full pb-12 xl:pb-24 pt-12 xl:pt-24">
      <div className="w-full px-0">
        <div className="grid grid-cols-12 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

          {/* Header */}
          <div className="col-span-12 px-4 md:px-7">
            <div className="grid grid-cols-12 md:border-b md:border-[#bebebe] md:pb-5 gap-y-3 md:gap-y-7 gap-x-3 md:gap-x-5">

              {/* Title with embedded image */}
              <div className="col-span-12 md:col-span-9 flex items-end">
                <h2 className="inline-flex flex-wrap text-balance relative md:pr-1 md:pb-2 md:mt-4 md:-mb-3 flex flex-col text-left justify-start text-[#111212] text-4xl/[0.9] sm:text-5xl/[0.9] md:text-6xl/[0.9] lg:text-7xl/none 2xl:text-8xl/[0.9] font-medium tracking-tight">
                  <div className="flex flex-wrap relative md:-mt-6 md:pb-6 md:overflow-hidden text-left justify-start items-center gap-2 md:gap-0">
                    <div className="inline mr-2 md:mr-0">What&apos;s</div>

                    {/* Embedded square image */}
                    <div className="inline shrink-0 flex bg-black/10 relative overflow-hidden bg-black/5 rounded-md mx-2 md:mx-2">
                      <Image
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                        alt="What's New"
                        width={40}
                        height={40}
                        className="md:w-[56px] md:h-[56px] object-cover object-center"
                      />
                    </div>

                    <div className="inline mr-2 md:mr-0">New</div>
                  </div>
                </h2>
              </div>

              {/* Explore More Button - Desktop */}
              <div className="col-span-12 md:col-span-3 md:items-center md:justify-end hidden md:flex">
                <Button href="/blog" variant="secondary">
                  Explore More Thoughts
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="col-span-12 lg:px-7">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 px-4 lg:px-0">
                {blogListings.slice(0, 3).map((post) => (
                  <div key={post.slug} className="py-2">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="col-span-12 px-4 md:hidden flex justify-center mt-5">
            <Button href="/blog" variant="secondary" className="w-full">
              Explore More Thoughts
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs