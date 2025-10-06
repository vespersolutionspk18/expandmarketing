# Components Documentation

Complete list of all components in the Expand Marketing project.

---

## Global Components

### Header
**Location:** `/app/components/Header.tsx`
**Purpose:** Main navigation header with logo and menu
**Props:** None
**Usage:**
```tsx
import Header from '@/app/components/Header';
<Header />
```

### Footer
**Location:** `/app/components/Footer.tsx`
**Purpose:** Site-wide footer with newsletter, social links, and navigation
**Props:** None
**Usage:**
```tsx
import Footer from '@/app/components/Footer';
<Footer />
```

### Button
**Location:** `/app/components/Button.tsx`
**Purpose:** Reusable button component with hover animations
**Props:**
- `children`: React.ReactNode
- `href?`: string
- `route?`: string
- `onClick?`: () => void
- `variant?`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size?`: 'sm' | 'md' | 'lg'
- `className?`: string
- `disabled?`: boolean
- `type?`: 'button' | 'submit' | 'reset'

**Usage:**
```tsx
import Button from '@/app/components/Button';
<Button href="/blog" variant="secondary">Explore More</Button>
```

### ExpandReady
**Location:** `/app/components/ExpandReady.tsx`
**Purpose:** Animated "Ready To Expand?" section with GSAP scroll effects
**Props:** None
**Usage:**
```tsx
import ExpandReady from '@/app/components/ExpandReady';
<ExpandReady />
```

---

## Home Page Components

### OurProjects
**Location:** `/app/home/OurProjects.tsx`
**Purpose:** Featured work showcase with scroll animations
**Props:** None (uses data from `/app/work/data`)
**Usage:**
```tsx
import OurProjects from '@/app/home/OurProjects';
<OurProjects />
```

### Blogs
**Location:** `/app/home/Blogs.tsx`
**Purpose:** Blog preview section showing latest 3 posts
**Props:** None (uses data from `/app/blog/data`)
**Usage:**
```tsx
import Blogs from '@/app/home/Blogs';
<Blogs />
```

---

## Work Page Components

### WorkHero
**Location:** `/app/work/components/WorkHero.tsx`
**Purpose:** Hero section for main work listing page
**Props:** None
**Usage:**
```tsx
import WorkHero from '@/app/work/components/WorkHero';
<WorkHero />
```

### WorkFilters
**Location:** `/app/work/components/WorkFilters.tsx`
**Purpose:** Filter buttons for work categories
**Props:** None
**Usage:**
```tsx
import WorkFilters from '@/app/work/components/WorkFilters';
<WorkFilters />
```

### WorkGrid
**Location:** `/app/work/components/WorkGrid.tsx`
**Purpose:** Grid layout displaying all work projects
**Props:** None (uses data from `/app/work/data`)
**Usage:**
```tsx
import WorkGrid from '@/app/work/components/WorkGrid';
<WorkGrid />
```

---

## Work Detail Page Components

### ProjectHero
**Location:** `/app/work/[slug]/components/ProjectHero.tsx`
**Purpose:** Hero section with background image and project info
**Props:**
- `title`: string
- `subtitle`: string
- `category`: string
- `backgroundImage`: string
- `year`: string
- `services`: string
- `industry`: string
- `slug`: string

**Usage:**
```tsx
import ProjectHero from './components/ProjectHero';
<ProjectHero
  title="SIXT"
  subtitle="An extra 3m clicks regionally through SEO"
  category="Car rental"
  backgroundImage="..."
  year="2023-2025"
  services="SEO"
  industry="Travel, Automotive"
  slug="sixt"
/>
```

### ProjectInfo
**Location:** `/app/work/[slug]/components/ProjectInfo.tsx`
**Purpose:** Info row displaying year, services, industry, and share buttons
**Props:**
- `year`: string
- `services`: string
- `industry`: string

**Usage:**
```tsx
import ProjectInfo from './components/ProjectInfo';
<ProjectInfo year="2023-2025" services="SEO" industry="Travel" />
```

### ProjectContent
**Location:** `/app/work/[slug]/components/ProjectContent.tsx`
**Purpose:** Reusable content section with heading and blocks
**Props:**
- `mainHeading?`: string
- `blocks`: ContentBlock[]

**ContentBlock Interface:**
```typescript
{
  heading: string;
  content: string[];
  cta?: {
    text: string;
    href: string;
  };
}
```

**Usage:**
```tsx
import ProjectContent from './components/ProjectContent';
<ProjectContent
  mainHeading="Building a global category leader"
  blocks={[
    {
      heading: 'The challenge',
      content: ['Lorem ipsum...']
    }
  ]}
/>
```

### StatsCarousel
**Location:** `/app/work/[slug]/components/StatsCarousel.tsx`
**Purpose:** Horizontal scrolling stats cards
**Props:**
- `stats`: StatCard[]

**StatCard Interface:**
```typescript
{
  value: string;
  label: string;
}
```

**Usage:**
```tsx
import StatsCarousel from './components/StatsCarousel';
<StatsCarousel
  stats={[
    { value: '3.3M', label: 'Increase on keywords ranking 1-3' },
    { value: '216%', label: 'Growth in organic traffic' }
  ]}
/>
```

### FeaturedImage
**Location:** `/app/work/[slug]/components/FeaturedImage.tsx`
**Purpose:** Featured image with blurred background effect
**Props:**
- `src`: string
- `alt?`: string

**Usage:**
```tsx
import FeaturedImage from './components/FeaturedImage';
<FeaturedImage src="https://..." alt="Project image" />
```

### RelatedWork
**Location:** `/app/work/[slug]/components/RelatedWork.tsx`
**Purpose:** "More work" carousel showing related projects
**Props:**
- `projects`: RelatedProject[]

**RelatedProject Interface:**
```typescript
{
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
}
```

**Usage:**
```tsx
import RelatedWork from './components/RelatedWork';
<RelatedWork
  projects={[
    {
      title: 'TechCorp',
      description: '340% traffic increase',
      image: '...',
      href: '/work/techcorp',
      color: '#cb7b3a'
    }
  ]}
/>
```

---

## Blog Page Components

### BlogHero
**Location:** `/app/blog/components/BlogHero.tsx`
**Purpose:** Hero section for main blog listing page
**Props:** None
**Usage:**
```tsx
import BlogHero from './components/BlogHero';
<BlogHero />
```

### BlogFilters
**Location:** `/app/blog/components/BlogFilters.tsx`
**Purpose:** Category filters for blog posts
**Props:**
- `totalPosts`: number

**Usage:**
```tsx
import BlogFilters from './components/BlogFilters';
<BlogFilters totalPosts={8} />
```

### BlogGrid
**Location:** `/app/blog/components/BlogGrid.tsx`
**Purpose:** Grid layout displaying all blog posts
**Props:**
- `posts`: BlogPost[]

**Usage:**
```tsx
import BlogGrid from './components/BlogGrid';
<BlogGrid posts={blogListings} />
```

### BlogCard
**Location:** `/app/blog/components/BlogCard.tsx`
**Purpose:** Individual blog post card
**Props:**
- `post`: BlogPost
- `featured?`: boolean
- `variant?`: 'large' | 'horizontal' | 'grid'

**Usage:**
```tsx
import BlogCard from './components/BlogCard';
<BlogCard post={post} variant="horizontal" />
```

---

## Blog Detail Page Components

### BlogHero (Detail)
**Location:** `/app/blog/[slug]/components/BlogHero.tsx`
**Purpose:** Hero section with featured image for individual blog post
**Props:**
- `title`: string
- `category`: string
- `featuredImage`: string

**Usage:**
```tsx
import BlogHero from './components/BlogHero';
<BlogHero
  title="How AI is Transforming SEO"
  category="AI & SEO"
  featuredImage="..."
/>
```

### BlogContent
**Location:** `/app/blog/[slug]/components/BlogContent.tsx`
**Purpose:** Blog post content with share buttons sidebar
**Props:**
- `content`: string (HTML string)
- `title`: string

**Usage:**
```tsx
import BlogContent from './components/BlogContent';
<BlogContent content={post.content} title={post.title} />
```

### BlogAuthor
**Location:** `/app/blog/[slug]/components/BlogAuthor.tsx`
**Purpose:** Author information section
**Props:**
- `author`: BlogAuthor
- `publishedDate`: string
- `category`: string

**BlogAuthor Interface:**
```typescript
{
  name: string;
  role: string;
  avatar: string;
  bio: string;
}
```

**Usage:**
```tsx
import BlogAuthor from './components/BlogAuthor';
<BlogAuthor
  author={{
    name: 'Sarah Chen',
    role: 'SEO Strategist',
    avatar: '...',
    bio: '...'
  }}
  publishedDate="Mon 15 Jul"
  category="AI & SEO"
/>
```

### RelatedBlogs
**Location:** `/app/blog/[slug]/components/RelatedBlogs.tsx`
**Purpose:** "You may also like" section showing related blog posts
**Props:**
- `posts`: BlogPost[]

**Usage:**
```tsx
import RelatedBlogs from './components/RelatedBlogs';
<RelatedBlogs posts={relatedPosts} />
```

---

## Data Structures

### Work Data
**Location:** `/app/work/data/`

**Files:**
- `types.ts` - TypeScript interfaces
- `sixt.ts` - SIXT project data
- `techcorp.ts` - TechCorp project data
- `retailhub.ts` - RetailHub project data
- `index.ts` - Central exports and helper functions

**Helper Functions:**
```typescript
import { getProjectBySlug, getAllProjectSlugs, projectListings } from '@/app/work/data';

const project = getProjectBySlug('sixt');
const slugs = getAllProjectSlugs();
const allProjects = projectListings;
```

### Blog Data
**Location:** `/app/blog/data/`

**Files:**
- `types.ts` - TypeScript interfaces
- `carrie-rose.ts` - Carrie Rose interview post
- `ai-seo-strategies.ts` - AI SEO post
- `web-design-trends.ts` - Web design post
- `crm-automation.ts` - CRM automation post
- `social-media-growth.ts` - Social media post
- `content-marketing.ts` - Content marketing post
- `ppc-campaigns.ts` - PPC campaigns post
- `email-marketing.ts` - Email marketing post
- `index.ts` - Central exports and helper functions

**Helper Functions:**
```typescript
import { getBlogPostBySlug, getAllBlogSlugs, getRelatedPosts, blogListings } from '@/app/blog/data';

const post = getBlogPostBySlug('ai-seo-strategies');
const slugs = getAllBlogSlugs();
const related = getRelatedPosts('ai-seo-strategies', 3);
const allPosts = blogListings;
```

---

## Key Patterns

### Dynamic Routing
Both work and blog sections use Next.js dynamic routing with `[slug]` pages:
- Work: `/app/work/[slug]/page.tsx`
- Blog: `/app/blog/[slug]/page.tsx`

### Data Flow
1. Data is stored in `/data/` folders
2. Individual data files export project/post objects
3. `index.ts` aggregates and exports helper functions
4. Pages import and use helper functions to fetch data
5. Data is passed as props to components

### Layout Pattern
- `/app/blog/layout.tsx` wraps all blog pages with Header and Footer
- Individual blog pages don't need to import Header/Footer
- Work pages manually import Header (no layout wrapper)

### Component Architecture
- **Presentational components**: Accept props, render UI
- **Container components**: Fetch data, pass to presentational components
- **Client components**: Use 'use client' directive when needed (animations, hooks)
- **Server components**: Default, used for static content

---

## Adding New Components

### Work Project
1. Create data file in `/app/work/data/{project-name}.ts`
2. Export project object matching `ProjectData` interface
3. Add to `/app/work/data/index.ts` imports and exports
4. Add listing item to `projectListings` array

### Blog Post
1. Create data file in `/app/blog/data/{post-slug}.ts`
2. Export post object matching `BlogPost` interface
3. Add to `/app/blog/data/index.ts` imports and exports
4. Add listing item to `blogListings` array

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** GSAP, Framer Motion
- **Images:** Next.js Image component with Unsplash
- **Icons:** Font Awesome, React Icons
- **Language:** TypeScript

---

**Last Updated:** October 2025
