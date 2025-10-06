'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  variant?: 'large' | 'horizontal' | 'grid';
}

export default function BlogCard({ post, featured = false, variant = 'large' }: BlogCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="flex | gap-x-3 | md:gap-x-5 | circle-mask-container | pointer-fine:hover:translate-x-2"
      >
        <div className="w-28 shrink-0 grid rounded-2xl overflow-hidden">
          <div className="col-start-1 row-start-1 z-10 aspect-1/1 relative overflow-hidden">
            <div className="w-full h-full transition blur-xs scale-120 duration-700 | circle-mask">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
              />
            </div>
          </div>
          <div className="col-start-1 row-start-1 aspect-1/1  relative overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start justify-between gap-y-2">
          <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-md/tight | lg:text-lg/tight | xl:text-xl/tight | 4xl:text-2xl/none font-sans-primary font-medium tracking-tight js-heading">
            {post.title}
          </h2>
          <div className="flex gap-x-4">
            <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-300 text-base/tight font-sans-primary font-medium tracking-tight js-heading">
              {post.author.name}
            </h2>
            <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 | xl:text-base text-grey-300 bg-transparent">
              <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true"></i>
              <div>{post.readTime}</div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'grid') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="w-full flex flex-col items-start gap-y-5 | pointer-fine:hover:-translate-y-2 | circle-mask-container"
      >
        <div className="w-full grid">
          <div className="col-start-1 row-start-1 z-20 p-3">
            <div className="flex flex-wrap gap-1">
              <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
                <div>{post.category}</div>
              </div>
            </div>
          </div>

          <div className="col-start-1 row-start-1 z-10 relative rounded-2xl overflow-hidden aspect-1/1 | lg:rounded-3xl">
            <div className="w-full h-full transition blur-md duration-1000 scale-120 | circle-mask">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
              />
            </div>
          </div>

          <div className="col-start-1 row-start-1 aspect-1/1 relative rounded-2xl overflow-hidden | lg:rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-y-3">
          <div className="flex items-start gap-1 mt-1">
            <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-300 bg-white">
              {post.author.avatar && (
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
              )}
              <div>{post.author.name}</div>
            </div>

            <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-300 bg-white">
              <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true"></i>
              <div>{post.readTime}</div>
            </div>
          </div>

          <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-2xl/none | xl:text-3xl/none | 4xl:text-4xl/none font-sans-primary font-medium tracking-tight js-heading">
            {post.title}
          </h2>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="w-full flex flex-col items-start gap-y-5 | pointer-fine:hover:-translate-y-2 | circle-mask-container"
    >
      <div className="w-full grid">
        <div className="col-start-1 row-start-1 z-20 p-3 flex items-start gap-2">
          <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-white bg-white/20 backdrop-blur-sm">
            <div>{post.category}</div>
          </div>
        </div>

        <div className="col-start-1 row-start-1 z-10 aspect-16/9 relative rounded-2xl overflow-hidden | lg:rounded-3xl">
          <div className="w-full h-full transition blur-md scale-120 duration-1000 | circle-mask">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
            />
          </div>
        </div>

        <div className="col-start-1 row-start-1 aspect-16/9 relative rounded-2xl overflow-hidden | lg:rounded-3xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className=" h-full w-full object-cover absolute top-0 left-0 transition-opacity"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-y-3">
        <div className="flex items-start gap-2 mt-1">
          <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-300 bg-white">
            {post.author.avatar && (
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
            )}
            <div>{post.author.name}</div>
          </div>

          <div className="inline-flex items-center font-sans-primary font-medium tracking-tight leading-none rounded-full text-sm gap-x-2 px-3 py-1 min-h-7 | xl:min-h-8 xl:py-1.5 xl:text-base text-grey-300 bg-white">
            <i className="fa-sharp fa-regular fa-stopwatch" aria-hidden="true"></i>
            <div>{post.readTime}</div>
          </div>
        </div>

        <h2 className="inline-flex flex-wrap text-balance relative   text-left justify-start text-grey-900 text-3xl/none | lg:text-4xl/none | xl:text-5xl/none | 3xl:text-6xl/none font-sans-primary font-medium tracking-tight js-heading">
          {post.title}
        </h2>
      </div>
    </Link>
  );
}
