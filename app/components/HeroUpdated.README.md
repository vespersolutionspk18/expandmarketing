# HeroUpdated Component

An animated hero section featuring a rotating arched image carousel, inspired by MadeByShape's design. Built with GSAP, React, and Tailwind CSS.

## Features

- **Infinite Rotating Carousel**: Images arranged in a circular arc that continuously rotates
- **Scroll-Based Animation**: On desktop (>1280px), the inner carousel rotates based on scroll position
- **Image Cycling**: Smoothly cycles through images to create an infinite loop effect
- **Responsive**: Adapts to mobile, tablet, and desktop screens
- **Customizable**: Easy to configure title, subtitle, and images
- **Performance Optimized**: Uses `transform-gpu` for hardware acceleration

## Installation

The component requires GSAP with ScrollTrigger plugin (already installed in your project):

```bash
npm install gsap
```

## Basic Usage

```tsx
import HeroUpdated from '@/app/components/HeroUpdated'

export default function Page() {
  return <HeroUpdated />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Good design\nmakes life better."` | Hero title text (supports `\n` for line breaks) |
| `subtitle` | `string` | `""` | Optional subtitle below the title |
| `images` | `string[]` | Unsplash demo images | Array of image URLs for the carousel |

## Advanced Usage

### Custom Title and Subtitle

```tsx
<HeroUpdated
  title="Transform Your\nDigital Presence"
  subtitle="We create experiences that inspire and engage"
/>
```

### Custom Images

```tsx
const customImages = [
  '/images/team/office-1.jpg',
  '/images/team/office-2.jpg',
  '/images/team/office-3.jpg',
  '/images/team/workspace-1.jpg',
  '/images/team/workspace-2.jpg',
  '/images/team/meeting-1.jpg',
  '/images/team/collaboration-1.jpg',
  '/images/team/desk-1.jpg',
  '/images/team/creative-space.jpg'
]

<HeroUpdated
  title="Good design\nmakes life better."
  images={customImages}
/>
```

### Integration with Existing Layout

```tsx
// app/page.tsx
import HeroUpdated from './components/HeroUpdated'
import AboutUs from './home/AboutUs'
import OurServices from './home/OurServices'

export default function Home() {
  return (
    <>
      <HeroUpdated
        title="We Chase Consumers,\nNot Algorithms"
        subtitle="Creating meaningful connections through design"
      />
      <AboutUs />
      <OurServices />
    </>
  )
}
```

## Animation Configuration

You can modify the animation parameters by adjusting the config object in the component:

```typescript
const config = {
  duration: 300,        // Seconds for full rotation (default: 300)
  repeatDelay: 10,      // Seconds between image cycles (default: 10)
  rotationMultiply: 12, // Degrees between images (default: 12)
  rotationOffset: 55    // Starting rotation offset (default: 55)
}
```

## Responsive Behavior

- **Mobile (< 768px)**: Larger images (40vw), simplified layout
- **Tablet (768px - 1279px)**: Medium images (25vw)
- **Desktop (≥ 1280px)**: Smaller images (20vw) with scroll-based rotation

## Styling

The component uses Tailwind CSS utility classes. You can customize the appearance by:

1. **Title styling**: Modify the `h1` classes
2. **Image styling**: Adjust the rounded corners, shadows, etc.
3. **Container height**: Change the carousel height in the style prop

```tsx
// Example: Custom styling
<div className="relative z-30 w-full flex justify-center px-4 sm:px-6 xl:px-12 2xl:px-20 mb-10 lg:mb-14">
  <h1 className="text-6xl font-bold text-blue-900"> {/* Custom classes */}
    {title}
  </h1>
</div>
```

## Performance Tips

1. **Image Optimization**: Use optimized images (WebP format recommended)
2. **Loading Strategy**: First 3 images use `eager` loading, rest use `lazy`
3. **Image Count**: 9 images is optimal, but 6-12 works well
4. **Image Size**: Recommended 800x800px for best quality/performance balance

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 12+)
- Mobile browsers: ✅ Full support

## Troubleshooting

### Images not rotating
- Ensure GSAP is properly installed: `npm install gsap`
- Check browser console for errors
- Verify ScrollTrigger is registered (happens automatically in component)

### Scroll animation not working
- Scroll animation only activates on screens ≥1280px wide
- Check that your viewport is large enough

### Performance issues
- Reduce number of images (try 6-8 instead of 9)
- Optimize image file sizes
- Check for other heavy animations running simultaneously

## Credits

Inspired by the hero section on [MadeByShape's About Page](https://madebyshape.co.uk/about/).

## License

MIT
