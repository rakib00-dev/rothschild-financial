import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import WorksText from '@/components/custom/WorksText';
import LatestNews from '@/components/custom/LatestNews';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorksText />
      <LatestNews />
      <div className="mt-[80rem]"></div>
    </>
  );
}
