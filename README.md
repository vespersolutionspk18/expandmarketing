# Expand Marketing Website

A sophisticated, modern marketing agency website built with cutting-edge technologies. Award-winning search-first content marketing agency specializing in SEO and digital strategies.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Tech Stack

- **Framework:** Next.js 15.5.2 (App Router)
- **React:** 19.1.0 (latest)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP 3.13.0 + Motion 12.23.12
- **Smooth Scrolling:** Lenis 1.3.11
- **Carousels:** Swiper 12.0.2 + React Fast Marquee
- **Icons:** React Icons + FontAwesome
- **Fonts:** Custom Athletics & Apple Garamond

## ✨ Key Features

### 🎨 Interactive Components
- **Animated Hero Carousel** - GSAP-powered infinite rotating gallery with scroll control
- **Mega Menu Navigation** - Hover-activated dropdown with category switching
- **Advanced Project Showcase** - Scroll-pinned section with parallax effects
- **Triple Filter System** - Dynamic job filtering (location, team, contract)
- **Service Cards Grid** - Hover reveals with background images and animations
- **Blog System** - Dynamic routing with category filters and related posts
- **Smooth Scrolling** - Lenis integration for premium UX

### 🎯 Dynamic Features
- 12+ interactive components with state management
- GPU-accelerated scroll animations
- Circle mask reveal effects
- Responsive across 7 breakpoints (mobile → 4K)
- Touch-optimized mobile navigation
- Context-based global state (MegaMenuContext)

### 🏗️ Architecture
- Modular component structure
- TypeScript interfaces for all data
- Helper functions for data access
- Static generation for optimal performance
- Future-ready for CMS integration

## 📁 Project Structure

```
app/
├── components/          # Global reusable components
│   ├── Header.tsx      # Navigation with mega menu
│   ├── MegaMenu.tsx    # Hover-activated dropdown
│   ├── HeroUpdated.tsx # Animated carousel
│   ├── Button.tsx      # Versatile CTA component
│   └── services/       # Service page components
├── contexts/           # React Context (MegaMenuContext)
├── home/              # Home page sections
│   ├── OurServices.tsx
│   ├── OurProjects.tsx
│   └── Blogs.tsx
├── services/          # 10 service pages
│   ├── ai-automation/
│   ├── onsite-seo/
│   └── [8 more services]/
├── work/              # Portfolio with [slug] routing
│   ├── data/         # Project data files
│   └── components/   # Work-specific components
├── blog/              # Blog with [slug] routing
│   ├── data/         # Blog post data files
│   └── components/   # Blog-specific components
├── careers/           # Careers with job filtering
├── about/            # About page
├── contact/          # Contact page
└── globals.css       # Custom fonts & Tailwind config
```

## 🎨 Design System

### Color Palette
```css
--color-grey-900: #111212  /* Primary text */
--color-grey-100: #efeeec  /* Background */
--color-mint: #b2f6e3      /* Accent */
```

### Typography
- **Athletics** - Primary sans-serif (9 weights)
- **Apple Garamond** - Elegant serif (6 variants)
- **Geist Mono** - Monospace fallback

### Animations
- GSAP ScrollTrigger for scroll-based effects
- Framer Motion for micro-interactions
- Custom CSS transitions for simple states
- GPU acceleration with force3D

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd expandmarketing

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📦 Data Structure

### Work Portfolio
All project data is stored in `app/work/data/` as TypeScript files:

```typescript
// app/work/data/index.ts
export const getProjectBySlug = (slug: string) => { ... }
export const getAllProjectSlugs = () => { ... }
export const projectListings: ProjectListingItem[] = [ ... ]
```

### Blog Posts
All blog content is stored in `app/blog/data/` as TypeScript files:

```typescript
// app/blog/data/index.ts
export const getBlogPostBySlug = (slug: string) => { ... }
export const getRelatedPosts = (slug: string, count: number) => { ... }
export const blogListings: BlogListingItem[] = [ ... ]
```

### Adding New Content

#### New Service Page
1. Create `app/services/[service-name]/page.tsx`
2. Import service components (ServiceHero, ServiceStats, etc.)
3. Define metadata and content
4. Update navigation in Header/MegaMenu

#### New Blog Post
1. Create `app/blog/data/[slug].ts`
2. Export BlogPost object
3. Add to `blog/data/index.ts`
4. Add listing to blogListings array

#### New Work Project
1. Create `app/work/data/[client-slug].ts`
2. Export ProjectData object
3. Add to `work/data/index.ts`
4. Add listing to projectListings array

## 🎛️ Component API

### Button
```tsx
<Button
  href="/contact"
  variant="primary" // primary | secondary | outline | ghost
  size="md"         // sm | md | lg
>
  Get in touch
</Button>
```

### ServiceHero
```tsx
<ServiceHero
  label="AI Automation"
  title="Innovation in ways your competitors don't even dream of"
/>
```

### LeftRight
```tsx
<LeftRight
  imageSrc="..."
  imageAlt="..."
  label="Our framework"
  title="Identify. Automate. Optimize."
  content={["Paragraph 1", "Paragraph 2"]}
  checklist={[
    { text: "✓ Checklist item 1" },
    { text: "✓ Checklist item 2" }
  ]}
  accordion={[...]}
  buttonText="Learn more"
  buttonHref="/work"
  imagePosition="left" // left | right
/>
```

## 🔌 Future Integration Ready

The architecture supports easy integration with:

- **CMS**: Contentful, Sanity, Strapi, WordPress REST API
- **Forms**: Formspree, Netlify Forms, SendGrid
- **Analytics**: Google Analytics, Segment, Mixpanel
- **Auth**: NextAuth.js, Clerk, Auth0
- **Search**: Algolia, ElasticSearch
- **Newsletter**: Mailchimp, ConvertKit, Klaviyo

## 🚀 Performance

- **Static Generation** for instant page loads
- **Next.js Image** optimization (WebP/AVIF)
- **Code Splitting** with dynamic imports
- **Font Optimization** with display: swap
- **GPU Acceleration** for smooth animations
- **Lazy Loading** for images and components

Target Lighthouse Score: **90+**

## 📱 Responsive Design

- **Mobile** (< 768px) - Single column, hamburger menu
- **Tablet** (768-1279px) - 2-column grids
- **Desktop** (1280px+) - Full mega menu, complex animations
- **Large Desktop** (1920px+) - Expanded spacing
- **4K** (2560px+) - Maximum content width

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📚 Documentation

For comprehensive technical analysis and component documentation, see:
- **[WEBSITE_ANALYSIS.md](./WEBSITE_ANALYSIS.md)** - Detailed technical analysis
- **[COMPONENTS.md](./COMPONENTS.md)** - Component documentation
- **[Info.md](./Info.md)** - Company information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **GSAP** for professional animations
- **Tailwind CSS** for the utility-first approach
- **Vercel** for hosting and deployment

## 📞 Contact

**Expand Marketing**
- Website: [expandmarketing.com](https://expandmarketing.com)
- Email: contact@expandmarketing.com

**Global Offices:**
- London, UK
- Sheffield, UK
- Manchester, UK
- New York, USA

---

**Built with ❤️ using Next.js 15, React 19, and TypeScript**

---

## 🔗 Quick Links

- [Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Last Updated:** October 2025
