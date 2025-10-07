# Services Architecture & Migration Guide

## 🎯 Overview

**Problem:** Services data was duplicated across 4 different files with no single source of truth.

**Solution:** Centralized `app/data/services.ts` - a single controller array that all components import from.

---

## 📁 Central Controller

### Location: `app/data/services.ts`

This file contains:
- ✅ **SERVICES array** - Single source of truth (10 services)
- ✅ **TypeScript interfaces** - Service, ServiceTag
- ✅ **Helper functions** - For each component's specific needs

---

## 🔄 Migration Guide

### **Current State: Hardcoded in 4 Places**

#### 1. Header.tsx (Mobile Menu)
```typescript
// ❌ OLD - Hardcoded
const mobileMenuLinks: MenuItem[] = [
  {
    label: "Services",
    submenuItems: [
      { label: "Search & Growth Strategy", href: "/services/strategy-growth" },
      { label: "Onsite SEO", href: "/services/onsite-seo" },
      // ... 8 more hardcoded
    ]
  }
]
```

#### 2. MegaMenu.tsx (Desktop Menu)
```typescript
// ❌ OLD - Hardcoded
const serviceSlugMap: Record<string, string> = {
  "Search & Growth Strategy": "strategy-growth",
  "Onsite SEO": "onsite-seo",
  // ... 8 more hardcoded
};

const serviceCategories = {
  "Digital Marketing": [
    "Search & Growth Strategy",
    "Onsite SEO",
    // ... hardcoded
  ],
  "Web Design": [
    "Web Development",
    // ... hardcoded
  ]
};
```

#### 3. OurServices.tsx (Homepage)
```typescript
// ❌ OLD - Hardcoded
const services: Service[] = [
  {
    title: 'Search & Growth Strategy',
    href: '/services/strategy-growth',
    image: 'https://...'
  },
  // ... 9 more hardcoded
]
```

#### 4. ServicesList.tsx (Services Page)
```typescript
// ❌ OLD - Hardcoded
const services: Service[] = [
  {
    title: 'Search & Growth Strategy',
    description: '...',
    tags: [...],
    href: '/services/strategy-growth',
    thumbnailImage: '...',
    desktopImage: '...'
  },
  // ... 9 more hardcoded
]
```

---

## ✅ New State: Import from Central Controller

### **1. Update Header.tsx**

```typescript
// app/components/Header.tsx
import { getServicesForNav } from '@/app/data/services'

const Header = memo(() => {
  // ✅ NEW - Import from central controller
  const servicesNav = getServicesForNav()

  const mobileMenuLinks: MenuItem[] = [
    {
      label: "Services",
      href: "/services",
      hasSubmenu: true,
      submenuId: "102",
      submenuItems: servicesNav  // ✅ Dynamic from controller
    },
    {
      label: "About",
      href: "/about",
      hasSubmenu: false
    },
    // ... other links
  ];

  // Rest of component...
})
```

**What to change:**
- Line 34-51: Replace hardcoded `submenuItems` array
- Add import at top: `import { getServicesForNav } from '@/app/data/services'`
- Use `servicesNav` constant

---

### **2. Update MegaMenu.tsx**

```typescript
// app/components/MegaMenu.tsx
import { getServiceSlugMap, getServiceCategories } from '@/app/data/services'

const MegaMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeServiceCategory, setActiveServiceCategory] = useState("Digital Marketing")

  // ✅ NEW - Import from central controller
  const serviceSlugMap = getServiceSlugMap()
  const serviceCategories = getServiceCategories()

  const menuItems: Record<string, MenuItem> = {
    Services: {
      title: "Core Services",
      categories: serviceCategories,  // ✅ Dynamic
      activeCategory: activeServiceCategory,
      image: "https://...",
      buttonText: "View All Services",
      buttonLink: "/services"
    } as ServiceMenuItem,
  };

  // Rest of component...
}
```

**What to change:**
- Line 81-109: Delete hardcoded `serviceSlugMap` and `serviceCategories`
- Add imports at top
- Use helper functions instead

---

### **3. Update OurServices.tsx (Homepage)**

```typescript
// app/home/OurServices.tsx
import { getServicesForHomepage } from '@/app/data/services'

interface Service {
  title: string
  href: string
  image: string
}

const OurServices = () => {
  // ✅ NEW - Import from central controller
  const services = getServicesForHomepage()

  return (
    <section className="w-full pb-12 xl:pb-24 pt-24 md:pt-32">
      {/* ... rest of component */}

      <div className="col-span-12 grid grid-cols-12 gap-x-2">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  )
}
```

**What to change:**
- Line 14-65: Delete hardcoded `services` array
- Add import at top
- Use `getServicesForHomepage()` helper

---

### **4. Update ServicesList.tsx (Services Page)**

```typescript
// app/services/components/ServicesList.tsx
import { getServicesForList } from '@/app/data/services'

const ServicesList = () => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])

  // ✅ NEW - Import from central controller
  const services = getServicesForList()

  useEffect(() => {
    // ... GSAP animation logic (unchanged)
  }, [])

  return (
    <section className="w-full pt-12 xl:pt-24">
      {/* ... rest of component */}

      {services.map((service, index) => (
        <a
          key={index}
          ref={(el) => {
            if (el) itemsRef.current[index] = el
          }}
          href={service.href}
          className="..."
        >
          {/* ... service card markup */}
        </a>
      ))}
    </section>
  )
}
```

**What to change:**
- Line 24-145: Delete hardcoded `services` array
- Add import at top
- Use `getServicesForList()` helper

---

## 📊 Benefits of Central Controller

### Before (Hardcoded)
```
Header.tsx          →  10 services hardcoded
MegaMenu.tsx        →  10 services hardcoded + categories
OurServices.tsx     →  10 services hardcoded
ServicesList.tsx    →  10 services hardcoded + full data

= 40 individual hardcoded entries across 4 files
```

### After (Centralized)
```
app/data/services.ts  →  SERVICES array (10 services)
                      ↓
        ┌─────────────┼─────────────┬──────────────┐
        ↓             ↓             ↓              ↓
   Header.tsx    MegaMenu.tsx  OurServices.tsx  ServicesList.tsx
 (imports data) (imports data) (imports data)  (imports data)

= 10 services defined once, used everywhere
```

---

## 🎯 How to Add a New Service

### Old Way (4 File Edits Required)
1. Edit `Header.tsx` - Add to mobile menu array
2. Edit `MegaMenu.tsx` - Add to slug map + category array
3. Edit `OurServices.tsx` - Add to services array
4. Edit `ServicesList.tsx` - Add to services array
5. Create service page in `app/services/[new-slug]/page.tsx`

### New Way (2 Steps Only)
1. **Edit `app/data/services.ts`** - Add to SERVICES array:
```typescript
{
  id: '11',
  title: 'Email Marketing',
  slug: 'email-marketing',
  description: 'Email marketing campaigns...',
  category: 'Digital Marketing',
  tags: [
    { label: 'Email Strategy' },
    { label: 'Automation' },
    { label: 'Campaigns' }
  ],
  images: {
    thumbnail: 'https://...',
    card: 'https://...',
    desktop: 'https://...'
  }
}
```

2. **Create service page:** `app/services/email-marketing/page.tsx`

**Done!** All 4 components automatically get the new service.

---

## 🔧 Helper Functions Reference

### `getServicesForNav()`
**Used by:** Header.tsx, MegaMenu.tsx
**Returns:**
```typescript
[
  { label: "Search & Growth Strategy", href: "/services/strategy-growth" },
  { label: "Onsite SEO", href: "/services/onsite-seo" },
  // ... all services
]
```

---

### `getServiceSlugMap()`
**Used by:** MegaMenu.tsx
**Returns:**
```typescript
{
  "Search & Growth Strategy": "strategy-growth",
  "Onsite SEO": "onsite-seo",
  // ... all services
}
```

---

### `getServiceCategories()`
**Used by:** MegaMenu.tsx
**Returns:**
```typescript
{
  "Digital Marketing": [
    "Search & Growth Strategy",
    "Onsite SEO",
    "Content Experience",
    "Digital PR",
    "Social Video SEO",
    "Social & Social Search"
  ],
  "Web Design": [
    "Data & Insights",
    "Web Development",
    "AI Automation",
    "CRM Consultancy"
  ]
}
```

---

### `getServicesForHomepage()`
**Used by:** OurServices.tsx (Homepage grid)
**Returns:**
```typescript
[
  {
    title: "Search & Growth Strategy",
    href: "/services/strategy-growth",
    image: "https://..." // card image
  },
  // ... all services
]
```

---

### `getServicesForList()`
**Used by:** ServicesList.tsx (Main services page)
**Returns:**
```typescript
[
  {
    title: "Search & Growth Strategy",
    description: "Strategic planning and multi-channel...",
    tags: [
      { label: "Multi-channel Strategy" },
      { label: "Audience Planning" },
      { label: "Growth Consulting" }
    ],
    href: "/services/strategy-growth",
    thumbnailImage: "https://...",
    desktopImage: "https://..."
  },
  // ... all services
]
```

---

### `getServiceBySlug(slug: string)`
**Used by:** Service detail pages (future)
**Returns:** Single service object or undefined

---

### `getServicesByCategory(category)`
**Used by:** Filtering/grouping
**Returns:** Array of services in that category

---

### `getAllServiceSlugs()`
**Used by:** Next.js `generateStaticParams()`
**Returns:** `['strategy-growth', 'onsite-seo', ...]`

---

## ✅ Migration Checklist

- [x] Create `app/data/services.ts` with SERVICES array
- [ ] Update `app/components/Header.tsx` to use `getServicesForNav()`
- [ ] Update `app/components/MegaMenu.tsx` to use `getServiceSlugMap()` and `getServiceCategories()`
- [ ] Update `app/home/OurServices.tsx` to use `getServicesForHomepage()`
- [ ] Update `app/services/components/ServicesList.tsx` to use `getServicesForList()`
- [ ] Test all navigation menus (mobile + desktop)
- [ ] Test homepage services grid
- [ ] Test main services page
- [ ] Verify all 10 service links work correctly

---

## 🚨 Important Notes

1. **Don't delete the old code immediately** - Comment it out first and test
2. **The SERVICES array is the single source of truth** - All changes go there
3. **Helper functions transform the data** - Components get exactly what they need
4. **TypeScript will catch errors** - If interfaces don't match, you'll know
5. **Order matters** - Services appear in the order defined in SERVICES array
6. **Categories are derived** - Based on the `category` field in each service

---

## 📈 Future Enhancements

Once migrated, you can easily:

1. **Add a CMS** - Replace SERVICES array with API calls
```typescript
export const SERVICES = await fetchServicesFromCMS()
```

2. **Add service ordering** - Add `order` field to sort
```typescript
{ id: '1', title: '...', order: 1, ... }
```

3. **Add service status** - Hide/show services dynamically
```typescript
{ id: '1', title: '...', status: 'active' | 'hidden', ... }
```

4. **Add localization** - Multi-language support
```typescript
{ id: '1', title: { en: '...', es: '...' }, ... }
```

5. **Add A/B testing** - Test different service descriptions
```typescript
{ id: '1', description: variants[experimentId], ... }
```

---

**Last Updated:** October 2025
**Status:** ✅ Central controller created, ready for component migration
