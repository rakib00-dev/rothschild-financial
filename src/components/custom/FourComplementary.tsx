const FourComplementary = () => {
  const fourCompleItems = [
    {
      title: 'Global Advisory',
      p: 'An impartial and insightful perspective on M&A, strategy and financing advisory to help our clients formulate and achieve their strategic goals.',
      src: '/images/four-comple/rothschildandco-london-people-86.jpg',
    },
    {
      title: 'Wealth Management',
      p: 'A comprehensive range of Wealth Management services available across the globe, with a long-term approach that sets us apart from our peers.',
      src: '/images/four-comple/rothschildandco-paris-people-17.jpg',
    },
    {
      title: 'Asset Management',
      p: 'Innovative, bespoke investment solutions designed around the needs of each and every client.',
      src: '/images/four-comple/rothschildandco-paris-people-59.jpg',
    },
    {
      title: 'Five Arrows',
      p: `The alternative assets arm of Rothschild & Co, deploying the firm's capital alongside that of a select set of leading institutional and private investors.`,
      src: '/images/four-comple/rothschildandco-london-people-97-rt.jpg',
    },
  ];
  return (
    <section className="max-w-7xl w-full mx-auto">
      <div className="">
        <h2 className="text-center text-3xl text-[var(--promoblock-text-heading)]">
          Four complementary businesses
        </h2>
        <div className="grid md:grid-cols-2">
          {fourCompleItems.map((e) => (
            <div id="card" className="" key={e.title}>
              <img src={e.src} alt={e.title} loading="lazy" />
              <div>
                <h2>{e.title}</h2>
                <p>{e.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourComplementary;
