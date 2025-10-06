import BlogHero from './components/BlogHero';
import BlogFilters from './components/BlogFilters';
import BlogGrid from './components/BlogGrid';
import { blogListings } from './data';
import ExpandReady from '../components/ExpandReady';

export const metadata = {
  title: 'Blog | Expand Marketing',
  description: 'Discover expert opinions, behind the scenes footage, and the odd prediction of the future in the Expand Marketing blog.',
};

export default function BlogPage() {
  return (
    <div className="bg-grey-100 min-h-screen">
      <BlogHero />
      <BlogFilters totalPosts={blogListings.length} />
      <BlogGrid posts={blogListings} />
      <ExpandReady />
    </div>
  );
}
