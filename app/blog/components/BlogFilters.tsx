'use client';

import { useState } from 'react';

interface BlogFiltersProps {
  totalPosts: number;
  currentPage?: number;
  postsPerPage?: number;
}

const categories = [
  { value: '', label: 'By Category' },
  { value: 'seo', label: 'SEO' },
  { value: 'news', label: 'News' },
  { value: 'people', label: 'People' },
  { value: 'client-services', label: 'Client Services' },
  { value: 'social', label: 'Social' },
  { value: 'content', label: 'Content' },
  { value: 'creative', label: 'Creative' },
  { value: 'data', label: 'Data' },
];

const authors = [
  { value: '', label: 'By Author' },
  { value: 'alex-hickson', label: 'Alex Hickson' },
  { value: 'alice-buttery', label: 'Alice Buttery' },
  { value: 'amy-jones', label: 'Amy Jones' },
  { value: 'ash-billinghay', label: 'Ash Billinghay' },
  { value: 'carrie-rose', label: 'Carrie Rose' },
  { value: 'charlotte-borwell', label: 'Charlotte Borwell' },
  { value: 'chris-gould', label: 'Chris Gould' },
  { value: 'dave-bennett', label: 'Dave Bennett' },
  { value: 'ella-bradley', label: 'Ella Bradley' },
  { value: 'emily-pinch', label: 'Emily Pinch' },
];

export default function BlogFilters({ totalPosts, currentPage = 1, postsPerPage = 17 }: BlogFiltersProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const displayStart = (currentPage - 1) * postsPerPage + 1;
  const displayEnd = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <section className="w-full py-0">
      <div className="w-full px-4 md:px-7">
        <div className="grid relative gap-y-3 md:gap-y-7" id="replace">
          <div className="relative mt-5 flex items-start flex-col gap-y-2 md:flex-row md:items-center md:justify-between">
            {/* Posts Count */}
            <div className="tracking-tightish text-sm md:text-base">
              Showing <span className="font-medium">{displayStart}</span>-
              <span className="font-medium">{displayEnd}</span> of{' '}
              <span className="font-medium">{totalPosts}</span> posts.
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="tracking-tightish leading-tight capitalize text-grey-300 w-full hidden md:inline-flex md:w-auto">
                Filter
              </div>

              {/* Category Dropdown */}
              <div className="relative w-full md:w-auto">
                <div className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 mr-5 -translate-y-1/2 z-20 w-1.5 h-1.5 border-grey-600"></div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full appearance-none border border-grey-200 rounded-full pl-5 pr-9 py-3 text-sm tracking-tightish leading-tight font-medium capitalize shadow-none outline-none ring-3 ring-transparent transition pointer-fine:hover:border-grey-600 focus:ring-grey-600/10 focus:border-grey-600 md:text-base md:w-auto"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Author Dropdown */}
              <div className="relative w-full md:w-auto">
                <div className="absolute border-b border-l right-0 pointer-events-none top-1/2 transform -rotate-45 -mt-0.5 mr-5 -translate-y-1/2 z-20 w-1.5 h-1.5 border-grey-600"></div>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full appearance-none border border-grey-200 rounded-full pl-5 pr-9 py-3 text-sm tracking-tightish leading-tight font-medium capitalize shadow-none outline-none ring-3 ring-transparent transition pointer-fine:hover:border-grey-600 focus:ring-grey-600/10 focus:border-grey-600 md:text-base md:w-auto"
                >
                  {authors.map((author) => (
                    <option key={author.value} value={author.value}>
                      {author.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-grey-200"></div>
        </div>
      </div>
    </section>
  );
}
