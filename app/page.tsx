import './ui/home.module.css';
import Image from 'next/image';
import BlobSVG from './ui/svgs/BlobSVG';
import Logo from './ui/svgs/Logo';
import SlantedDecorLine from './ui/svgs/decor-lines/SlantedDecorLine';
import LShapedDecorLine from './ui/svgs/decor-lines/LShapedDecorLine';
import MainDecorLine from './ui/svgs/decor-lines/MainDecorLine';

export default function Home() {
  return (
    <div className='flex h-screen w-fit flex-col'>
      <Logo />
      <SlantedDecorLine />
      <LShapedDecorLine />
      <MainDecorLine />
    </div>
  );
}
