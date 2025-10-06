# RecommendedByLeaders Component

A "Recommended by category leaders" section featuring client testimonials and case studies.

## Component Location
`/Users/mac/Downloads/ECGGroup/NexusMinds/codeprojects/expandmarketing/app/components/services/RecommendedByLeaders.tsx`

## Overview

This component features a testimonial carousel with client recommendations. It has a distinctive BLACK BACKGROUND (`bg-grey-900`) and showcases category-leading brands.

## Features

### 1. Visual Design
- **Background**: Dark grey/black (`#1a1a1a`)
- **Layout**: Full-width container with rounded corners (`rounded-3xl`)
- **Padding**: Responsive vertical padding (`py-14` on mobile, `py-24` on large screens)

### 2. Header Section
- **5-Star Rating**: Gold stars displayed using SVG icons
- **Dynamic Heading**: "Recommended by category leaders"
  - Responsive typography scaling from mobile to 4xl screens
  - Embedded image within the word "category"
  - Font: Medium weight with tight tracking
  - Color: White text on dark background

### 3. Testimonial Carousel
- **Custom Scroll-based Carousel**: No external dependencies (built without Swiper)
- **Smooth Transitions**: 1-second duration with blur and scale effects
- **Active/Inactive States**:
  - Active: Full opacity, no blur, scale 100%
  - Inactive: 30% opacity, 4px blur, scale 95%

### 4. Testimonial Cards
Each card features:
- **Left Panel** (White background):
  - Large quote text (responsive sizing)
  - Author avatar with mint-colored background
  - Author name and title

- **Right Panel** (Image):
  - Full-bleed case study screenshot
  - Overlay CTA button with hover animation
  - Button features sliding text animation on hover

### 5. Navigation
- **Arrow Navigation**: Previous/Next buttons (desktop only)
- **Logo Navigation**: Clickable company logo buttons
  - Active state: White border
  - Inactive state: 20% opacity white border
  - Hover state: Transitions to white border

## Technical Implementation

### Typography Scale
```
Mobile:    text-4xl (36px)
MD:        text-5xl (48px)
LG:        text-6xl (60px)
2XL:       text-8xl (96px) with 0.9 line-height
4XL:       Custom 8.5rem with 0.9 line-height
```

### Color Palette
```css
--color-grey-900: #1a1a1a (Background)
--color-grey-600: #666666 (Secondary text)
--color-mint: #b8f5cd (Avatar backgrounds)
```

### Responsive Breakpoints
- **Mobile**: 85vw slide width
- **MD (768px)**: 70vw slide width
- **LG (1024px)**: 60vw slide width
- **XL (1280px)**: 55vw slide width

### Animations
1. **Blur Transition**: 4px blur on inactive slides
2. **Scale Effect**: 95% scale on inactive slides
3. **Opacity Fade**: 30% opacity on inactive slides
4. **Button Hover**: Sliding text animation with arrow icon
5. **Border Radius Morph**: Rounded-3xl to rounded-xl on hover

## Data Structure

```typescript
interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  caseStudyImage: string;
  caseStudyUrl?: string;
  companyLogoText: string;
}
```

## Current Testimonials

1. **Revolution Beauty** - Adam & Sally Minto, Founders
2. **JD Sports** - Tim Giles, Head of SEO
3. **GAME** - Anna Bravington, Head of Digital
4. **PrettyLittleThing (PLT)** - Matt Holmes, Head of Digital
5. **Compare and Recycle** - Antonia Histrov, Head of Marketing

## Usage

```tsx
import RecommendedByLeaders from '@/app/components/services/RecommendedByLeaders';

export default function ServicesPage() {
  return (
    <main>
      {/* Other components */}
      <RecommendedByLeaders />
      {/* More components */}
    </main>
  );
}
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels for navigation buttons
- Keyboard navigation support
- Alt text for all images
- Focus states for interactive elements

## Performance Optimizations

- Next.js Image component for optimized image loading
- Lazy loading for images
- Smooth scroll behavior
- CSS-based animations (GPU accelerated)
- No external carousel library dependencies

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS scroll-snap for carousel functionality
- Fallback for older browsers via progressive enhancement

## Future Enhancements

To make this production-ready, consider:
1. Adding actual company logo SVGs instead of text placeholders
2. Implementing touch/swipe gestures for mobile
3. Adding auto-play functionality
4. Implementing intersection observer for lazy loading
5. Adding keyboard arrow key navigation
6. Creating a CMS integration for dynamic testimonials

## Dependencies

- React 18+
- Next.js 14+
- TypeScript
- Tailwind CSS (via @tailwindcss/forms or similar)

## Notes

- The component uses custom Tailwind color classes defined in `globals.css`
- Images are loaded from Pexels CDN
- The carousel initializes with the middle slide active (index 2)
- Scroll behavior is hidden but functional on all devices
