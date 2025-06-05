import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className=" w-full max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <div className="mt-[80rem]"></div>
    </main>
  );
}
