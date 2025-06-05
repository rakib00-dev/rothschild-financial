import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import WorksText from '@/components/custom/WorksText';
import LatestNews from '@/components/custom/LatestNews';
import FourComplementary from '@/components/custom/FourComplementary';
import ContactUs from '@/components/custom/ContactUs';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorksText />
      <LatestNews />
      <FourComplementary />
      <ContactUs />
      <div className="mt-[80rem]"></div>
    </>
  );
}
