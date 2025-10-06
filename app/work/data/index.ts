import { ProjectData, ProjectListingItem } from './types';
import { sixtProject } from './sixt';
import { techcorpProject } from './techcorp';
import { retailhubProject } from './retailhub';

// All project data indexed by slug
export const projects: Record<string, ProjectData> = {
  'sixt': sixtProject,
  'techcorp': techcorpProject,
  'retailhub': retailhubProject
};

// Project listing items for the main work page
export const projectListings: ProjectListingItem[] = [
  {
    slug: 'sixt',
    title: 'Regional SEO Growth',
    client: 'SIXT',
    services: ['SEO', 'Digital PR'],
    description: 'An extra 3m clicks regionally through SEO',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1125&fit=crop',
    category: 'Car rental',
    color: '#ffa500',
    colSpan: 'col-span-12 lg:col-span-12'
  },
  {
    slug: 'techcorp',
    title: 'Digital PR Campaign',
    client: 'TechCorp',
    services: ['Digital PR', 'Content'],
    description: '340% organic traffic increase through AI-powered SEO',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    category: 'Technology',
    color: '#cb7b3a',
    colSpan: 'col-span-12 lg:col-span-6'
  },
  {
    slug: 'retailhub',
    title: 'SEO Strategy',
    client: 'RetailHub',
    services: ['SEO', 'Strategy'],
    description: 'Complete e-commerce redesign driving conversions',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    category: 'E-commerce',
    color: '#d2b59d',
    colSpan: 'col-span-12 lg:col-span-6'
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects[slug];
}

// Helper function to get all project slugs
export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
