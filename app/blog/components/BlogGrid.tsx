'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlogCard, { BlogPost } from './BlogCard';

gsap.registerPlugin(ScrollTrigger);

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll('.blog-card-item');

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [posts]);

  if (posts.length === 0) {
    return (
      <section className="w-full py-20">
        <div className="w-full px-4 md:px-7">
          <p className="text-center text-grey-600 text-lg">No blog posts found.</p>
        </div>
      </section>
    );
  }

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section className="w-full py-0">
      <div className="w-full px-4 md:px-7">
        <div className="grid relative" id="indicator">
          <div ref={gridRef} className="grid grid-cols-12 z-10 gap-y-4 | lg:gap-y-20 | gap-x-3 | md:gap-x-5 mt-5">
          {/* Featured Post */}
          <div className="col-span-12 | lg:col-span-8">
            <div className="hidden | lg:block">
              <div className="blog-card-item">
                <BlogCard post={featuredPost} featured={true} variant="large" />
              </div>
            </div>
            <div className="lg:hidden">
              <div className="blog-card-item">
                <BlogCard post={featuredPost} variant="horizontal" />
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="col-span-12 h-px bg-grey-200 | lg:hidden | last:hidden"></div>

          {/* Small Posts Column */}
          <div className="col-span-12 | lg:col-span-4">
            <div className="grid gap-y-4">
              {regularPosts.slice(0, 4).map((post, index) => (
                <React.Fragment key={post.id}>
                  <BlogCard post={post} variant="horizontal" />
                  {index < 3 && <div className="w-full h-px bg-grey-200 | lg:last:hidden"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Additional Posts - 3 columns grid */}
          {regularPosts.slice(4).map((post) => (
            <React.Fragment key={post.id}>
              <div className="col-span-12 h-px bg-grey-200 | lg:hidden | last:hidden"></div>
              <div className="flex col-span-12 | sm:col-span-6 | lg:col-span-4">
                <div className="hidden w-full | lg:flex">
                  <BlogCard post={post} variant="grid" />
                </div>
                <div className="lg:hidden w-full">
                  <BlogCard post={post} variant="horizontal" />
                </div>
              </div>
            </React.Fragment>
          ))}

          {/* Pagination */}
          <div className="flex justify-center col-span-12 mt-5">
            <div className="inline-flex justify-center gap-x-2 bg-white rounded-full p-1">
              <div className="h-10 text-sm font-medium rounded-full flex items-center justify-center bg-grey-100 w-10">
                <div>1</div>
              </div>
              <a className="h-10 text-sm font-medium rounded-full flex items-center justify-center w-7" href="#">
                <div>2</div>
              </a>
              <a className="h-10 text-sm font-medium rounded-full flex items-center justify-center w-7" href="#">
                <div>3</div>
              </a>
              <a className="h-10 text-sm font-medium rounded-full flex items-center justify-center w-7" href="#">
                <div>4</div>
              </a>
              <a className="h-10 text-sm font-medium rounded-full flex items-center justify-center w-7" href="#">
                <div>5</div>
              </a>
              <a className="h-10 text-sm font-medium rounded-full flex items-center justify-center w-7" href="#">
                <i className="fa-regular fa-sharp fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
