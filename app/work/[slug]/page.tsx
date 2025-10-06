import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import ProjectHero from './components/ProjectHero';
import ProjectContent from './components/ProjectContent';
import StatsCarousel from './components/StatsCarousel';
import FeaturedImage from './components/FeaturedImage';
import RelatedWork from './components/RelatedWork';
import Blogs from '../../home/Blogs';
import ExpandReady from '../../components/ExpandReady';
import Footer from '../../components/Footer';
import { getProjectBySlug, getAllProjectSlugs } from '../data';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="">
      <Header />
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        category={project.category}
        backgroundImage={project.backgroundImage}
        year={project.year}
        services={project.services}
        industry={project.industry}
        slug={project.slug}
      />
      <ProjectContent
        mainHeading={project.mainHeading}
        blocks={project.contentBlocks}
      />
      {project.stats && project.stats.length > 0 && (
        <StatsCarousel stats={project.stats} />
      )}
      {project.featuredImage && (
        <FeaturedImage src={project.featuredImage} alt={project.title} />
      )}
      {project.secondaryBlocks && project.secondaryBlocks.length > 0 && (
        <ProjectContent
          mainHeading={project.secondaryHeading}
          blocks={project.secondaryBlocks}
        />
      )}
      {project.secondaryImage && (
        <FeaturedImage src={project.secondaryImage} alt={project.title} />
      )}
      {project.resultsBlocks && project.resultsBlocks.length > 0 && (
        <ProjectContent
          mainHeading={project.resultsHeading}
          blocks={project.resultsBlocks}
        />
      )}
      {project.relatedWork && project.relatedWork.length > 0 && (
        <RelatedWork projects={project.relatedWork} />
      )}
      <Blogs />
      <ExpandReady />
      <Footer />
    </main>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}
