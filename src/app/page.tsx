import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import WorksText from '@/components/custom/WorksText';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorksText />
      <div className="mt-[80rem]"></div>
    </>
  );
}
