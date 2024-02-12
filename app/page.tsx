import HeroSection from './ui/components/sections/hero-section';
import MapSection from './ui/components/sections/map-section';
import MainDecorLine from './ui/svgs/decor-lines/MainDecorLine';
import * as styles from './ui/components/sections/map-section/map-section.module.css';
import SlantedDecorLine from './ui/svgs/decor-lines/SlantedDecorLine';

export default function Home() {
  return (
    <div className='scrollbar-none flex h-full w-full flex-col overflow-y-hidden'>
      <HeroSection />
      <MapSection >
        <div>children</div>
      </MapSection>
    </div>
  );
}
