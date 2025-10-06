/**
 * Example Usage of RecommendedByLeaders Component
 *
 * This file demonstrates how to integrate the RecommendedByLeaders component
 * into your Next.js application.
 */

import RecommendedByLeaders from './RecommendedByLeaders';

// EXAMPLE 1: Basic Usage in a Services Page
export function ServicesPageExample() {
  return (
    <main className="min-h-screen">
      {/* Other sections */}
      <section className="py-20">
        <h1 className="text-center text-5xl font-bold mb-8">Our Services</h1>
        {/* Service content */}
      </section>

      {/* Recommended by Leaders Section */}
      <RecommendedByLeaders />

      {/* More sections */}
    </main>
  );
}

// EXAMPLE 2: Usage with Spacing Control
export function WithSpacingExample() {
  return (
    <main>
      <div className="space-y-24">
        {/* Previous component */}
        <div>Previous Section</div>

        {/* The component already has pb-12 xl:pb-24 built-in */}
        <RecommendedByLeaders />

        {/* Next component */}
        <div>Next Section</div>
      </div>
    </main>
  );
}

// EXAMPLE 3: Full Services Page Layout
export default function FullServicesPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-7xl font-bold">Services</h1>
      </section>

      {/* First Component - Your existing component */}
      <section className="py-24">
        {/* First services component */}
      </section>

      {/* Second Component - Your existing component */}
      <section className="py-24">
        {/* Second services component */}
      </section>

      {/* THIRD Component - Recommended by Leaders */}
      <RecommendedByLeaders />

      {/* Additional sections */}
      <section className="py-24">
        {/* More content */}
      </section>
    </main>
  );
}

/**
 * INTEGRATION NOTES:
 *
 * 1. Make sure the following colors are defined in your globals.css:
 *    --color-grey-900: #1a1a1a
 *    --color-grey-600: #666666
 *    --color-mint: #b8f5cd
 *
 * 2. The component is fully responsive and works out of the box
 *
 * 3. No additional dependencies needed (uses native scroll)
 *
 * 4. To customize testimonials, edit the testimonials array in
 *    RecommendedByLeaders.tsx
 *
 * 5. For production, replace companyLogoText with actual SVG logos
 */
