export interface ContentBlock {
  heading: string;
  content: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export interface StatCard {
  value: string;
  label: string;
}

export interface RelatedProject {
  title: string;
  description: string;
  image: string;
  href: string;
  color: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  backgroundImage: string;
  year: string;
  services: string;
  industry: string;
  mainHeading?: string;
  contentBlocks: ContentBlock[];
  stats?: StatCard[];
  featuredImage?: string;
  resultsHeading?: string;
  resultsBlocks?: ContentBlock[];
  secondaryHeading?: string;
  secondaryBlocks?: ContentBlock[];
  secondaryImage?: string;
  relatedWork?: RelatedProject[];
}

export interface ProjectListingItem {
  slug: string;
  title: string;
  client: string;
  services: string[];
  description: string;
  image: string;
  category: string;
  color: string;
  colSpan: string;
}
