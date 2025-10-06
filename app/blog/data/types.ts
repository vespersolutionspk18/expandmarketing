export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  featuredImage: string;
  author: BlogAuthor;
  publishedDate: string;
  readTime: string;
  content: string; // HTML string
}

export interface BlogListingItem {
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
