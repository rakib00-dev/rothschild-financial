import Hero from '@/components/custom/Hero';
import Navbar from '@/components/custom/Navbar';
import WorksText from '@/components/custom/WorksText';
import LatestNews from '@/components/custom/LatestNews';
import FourComplementary from '@/components/custom/FourComplementary';
import ContactUs from '@/components/custom/ContactUs';
import CorporateSustain from '@/components/custom/CorporateSustain';
import AboutUs from '@/components/custom/AboutUs';
import Footer from '@/components/custom/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorksText />
      <LatestNews />
      <FourComplementary />
      <ContactUs />
      <CorporateSustain />
      <AboutUs />
      <Footer />
      {/* <div className="mt-[80rem]"></div> */}
    </>
  );
}
