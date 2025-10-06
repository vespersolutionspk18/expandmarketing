import WorkHero from './components/WorkHero';
import WorkFilters from './components/WorkFilters';
import WorkGrid from './components/WorkGrid';

export default function WorkPage() {
  return (
    <main className="">
      <WorkHero />
      <WorkFilters />
      <WorkGrid />
    </main>
  );
}
