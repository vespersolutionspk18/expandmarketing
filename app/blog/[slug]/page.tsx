import { notFound } from 'next/navigation';
import BlogHero from './components/BlogHero';
import BlogContent from './components/BlogContent';
import BlogAuthor from './components/BlogAuthor';
import RelatedBlogs from './components/RelatedBlogs';
import ExpandReady from '../../components/ExpandReady';
import { getBlogPostBySlug, getRelatedPosts, getAllBlogSlugs } from '../data';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <main className="">
      <BlogHero
        title={post.title}
        category={post.category}
        featuredImage={post.featuredImage}
      />
      <BlogContent
        content={post.content}
        title={post.title}
      />
      <BlogAuthor
        author={post.author}
        publishedDate={post.publishedDate}
        category={post.category}
      />
      <RelatedBlogs posts={relatedPosts} />
      <ExpandReady />
    </main>
  );
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}
