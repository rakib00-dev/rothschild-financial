import Image from 'next/image';

const FourComplementary = () => {
  const fourCompleItems = [
    {
      title: 'Global Advisory',
      p: 'An impartial and insightful perspective on M&A, strategy and financing advisory to help our clients formulate and achieve their strategic goals.',
      src: '/images/four-comple/rothschildandco-london-people-86.jpg',
      link: 'https://www.rothschildandco.com/en/global-advisory/',
    },
    {
      title: 'Wealth Management',
      p: 'A comprehensive range of Wealth Management services available across the globe, with a long-term approach that sets us apart from our peers.',
      src: '/images/four-comple/rothschildandco-paris-people-17.jpg',
      link: 'https://www.rothschildandco.com/en/wealth-management/',
    },
    {
      title: 'Asset Management',
      p: 'Innovative, bespoke investment solutions designed around the needs of each and every client.',
      src: '/images/four-comple/rothschildandco-paris-people-59.jpg',
      link: 'https://www.rothschildandco.com/en/asset-management/',
    },
    {
      title: 'Five Arrows',
      p: `The alternative assets arm of Rothschild & Co, deploying the firm's capital alongside that of a select set of leading institutional and private investors.`,
      src: '/images/four-comple/rothschildandco-london-people-97-rt.jpg',
      link: 'https://www.rothschildandco.com/en/five-arrows/',
    },
  ];

  return (
    <section className="max-w-7xl w-full mx-auto mb-30 md:mb-60">
      <div className="mx-2 md:mx-35">
        <h2 className="text-center mb-14 text-3xl text-[var(--promoblock-text-heading)]">
          Four complementary businesses
        </h2>
        <div className="grid gap-10 place-items-center md:grid-cols-2">
          {fourCompleItems.map((e) => (
            <div id="card" className="relative" key={e.title}>
              <a
                href={e.link}
                className="grid  overflow-hidden place-items-center"
              >
                <Image
                  src={e.src}
                  alt={e.title}
                  loading="lazy"
                  className="transition-all duration-300 w-[30rem] hover:scale-110"
                />
              </a>
              <div className="mb-20 mx-4 md:left-4 top-[90%] absolute grid gap-5 max-w-sm p-8 bg-[var(--primary-color)] z-10">
                <a target="_blank" id="fourLink" href={e.link}>
                  <h2 className="text-2xl text-[var(--promoblock-text-heading)]">
                    {e.title}
                  </h2>
                </a>
                <p className="text-sm">{e.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourComplementary;
