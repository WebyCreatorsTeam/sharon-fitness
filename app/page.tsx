import HeroSection from './ui/components/sections/hero-section';
import MapSection from './ui/components/sections/map-section';
import TimeoutModal from './ui/components/timeout/TimeoutModal';

export default function Home() {
  return (
    <div className='scrollbar-none relative flex h-full w-full flex-col overflow-y-hidden'>
      <HeroSection />
      <MapSection />
      <TimeoutModal />
    </div>
  );
}
