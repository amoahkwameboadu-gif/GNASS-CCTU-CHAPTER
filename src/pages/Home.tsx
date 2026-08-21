import Hero from '../components/home/Hero';
import LatestSermon from '../components/home/LatestSermon';
import SabbathHub from '../components/home/SabbathHub';
import MinistriesGrid from '../components/home/MinistriesGrid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LatestSermon />
      <SabbathHub />
      <MinistriesGrid />
    </div>
  );
}
