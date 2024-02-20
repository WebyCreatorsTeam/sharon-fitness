import HeroSection from './ui/components/sections/hero-section';
import MapSection from './ui/components/sections/map-section';

export default function Home() {
  return (
    <div className='scrollbar-none relative flex h-full w-full flex-col overflow-y-hidden'>
      <HeroSection />
      <MapSection />
    </div>
  );
}
