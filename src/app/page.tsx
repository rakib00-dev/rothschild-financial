import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mt-[80rem]"></div>
    </>
  );
}
