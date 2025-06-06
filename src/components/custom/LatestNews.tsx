'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { FaGreaterThan } from 'react-icons/fa';

const LatestNews = () => {
  const newses = [
    {
      title:
        'Rothschild & Co hires Ralph Lerman as Managing Director in Business Services',
      p: 'Firm expands U.S. Business Services team',
      link: 'https://www.rothschildandco.com/en/newsroom/press-releases/2025/06/randco-hires-ralph-lerman-as-managing-director-in-business-services/',
      src: '/images/latest-news/c25-06-008---ga-pr-appointment---ralph--website.png',
    },
    {
      title: 'Rothschild & Co expands Wealth Management offering in Luxembourg',
      p: `This strategic move is part of Rothschild & Co's ongoing commitment to providing first class Private Banking services to its clients across Europe.`,
      link: 'https://www.rothschildandco.com/en/newsroom/press-releases/2025/05/randco-expands-wealth-management-offering-in-luxembourg/',
      src: '/images/latest-news/c25-04-125_website_banner---800x450px.jpg',
    },
    {
      title:
        'Five Arrows announces final close for sixth secondaries fund at €2 billion, materially surpassing its target',
      p: 'FASO VI closes at €2 billion, double the size of its predecessor fund. The Fund targets middle market GP-led secondaries in Europe and North America that have a focus on companies in the healthcare, business services, software and IT sectors.',
      link: 'https://www.rothschildandco.com/en/newsroom/press-releases/2025/04/five-arrows-announces-final-close-for-sixth-secondaries-fund-at-2-billion-materially-surpassing-its-target/',
      src: '/images/latest-news/c25-04-036---5a-press-release-image_website-1.png',
    },
    {
      title:
        'Rothschild & Co announces the publication of R&Co4Generations 2024 Progress Report',
      p: 'This interactive report provides a summary of our philanthropic mission and of the impact of our activities across the world.',
      link: 'https://www.rothschildandco.com/en/newsroom/corporate-sustainability/2025/03/randco-announces-the-publication-of-rco4generations-progress-report-2024/',
      src: '/images/latest-news/c25-03-077---website-banner---800x450.jpg',
    },

    {
      title:
        'Rothschild & Co further develops GP Solutions business with Nicolas Lanel',
      p: `Rothschild & Co is pleased to announce that Nicolas Lanel will join the Group to support the firm's Private Capital business development throughout Europe with the origination and execution of GP-led transactions, particularly continuation vehicles.`,
      link: 'https://www.rothschildandco.com/en/newsroom/press-releases/2025/03/randco-further-develops-gp-solutions-business-with-nicolas-lanel/',
      src: '/images/latest-news/ga-press-release-25-mar_800-x-450.jpg',
    },
    {
      title: '2024 Annual Review',
      p: 'Learn about our Group, and the activities and performance of our three businesses in 2024.',
      link: 'https://rothschildandcopublications.foleon.com/annual-review/2024-en/',
      src: '/images/latest-news/annual-review-2024.jpg',
    },
  ];

  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'calluna, serif',
      padding: '300px 0',
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-15 md:my-20 overflow-hidden">
      <div className="h-full w-full">
        <h1 className="font-medium uppercase tracking-[2px] pb-15 grid place-items-center text-[var(--title-gray)] text-sm">
          latest news
        </h1>
        <div className="relative w-full">
          <div
            className="text-lg w-11/12 grid place-items-center max-w-xs p-4  md:text-4xl md:max-w-4xl  md:p-8"
            style={style.angledBox}
          ></div>

          <Carousel className="md:grid place-items-center absolute top-1/5 w-fit md:-right-50 hidden">
            <CarouselContent className="w-fit">
              {newses.map((e) => (
                <CarouselItem
                  className="grid place-items-center w-fit relative gap-10 md:gap-0"
                  key={e.src}
                >
                  <div className="max-w-md absolute bg-white p-4 grid gap-5 top-20 left-30 z-100">
                    <a
                      target="_blank"
                      href={e.link}
                      className="md:text-xl text-lg "
                    >
                      <h1 className="text-[var(--promoblock-text-heading)] hoverTextAnimation">
                        {e.title}
                      </h1>
                    </a>
                    <p>{e.p}</p>
                    <a
                      href={e.link}
                      className="transition-all duration-200 flex gap-2 items-center text-[var(--promoblock-text-heading)] linkHover"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      <FaGreaterThan className="h-2 transition-all duration-200 text-[var(--link-hover-color)]" />
                      Read More
                    </a>
                  </div>
                  <Image
                    src={e.src}
                    alt={e.src}
                    loading="lazy"
                    className="h-50 md:h-100"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-10">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          <Carousel className="grid place-items-center absolute top-[10%] md:top-1/5 w-fit md:-right-50 z-10 md:hidden">
            <CarouselContent className="w-fit overflow-visible h-180 md:overflow-hidden">
              {newses.map((e) => (
                <CarouselItem
                  className="grid place-items-center w-fit h-full relative gap-10 md:gap-0"
                  key={e.src}
                >
                  <div className="w-fit h-[20rem] md:h-fit mr-3 md:mr-0 md:max-w-md absolute bg-white p-4 grid gap-5 top-0 left-10 md:left-30 mt-30 md:mt-0 z-10">
                    <h1 className="text-[var(--promoblock-text-heading)]">
                      {e.title}
                    </h1>
                    <p>{e.p}</p>
                    <a
                      href={e.link}
                      className="transition-all duration-200 flex gap-2 items-center text-[var(--promoblock-text-heading)] linkHover"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    >
                      <FaGreaterThan className="h-2 transition-all duration-200 text-[var(--link-hover-color)]" />
                      Read More
                    </a>
                  </div>
                  <Image
                    src={e.src}
                    alt={e.src}
                    loading="lazy"
                    className="h-50 relative -top-70 md:h-100 md:top-0"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-120 md:top-0 md:-bottom-10 z-20">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
