import { FaRegFilePdf } from 'react-icons/fa';
import ReusableArrowLink from './ReusableArrowLink';

const AboutUs = () => {
  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'calluna, serif',
    },
  };

  const aboutUsCards = [
    {
      title: 'News and Insights',
      p: 'Visit the Newsroom for our latest News, Insights and other publications.',
      link: 'https://www.rothschildandco.com/en/newsroom/',
      linkText: 'Enter the Newsroom',
    },
    {
      title: 'Careers at Rothschild & Co',
      p: 'We place emphasis on finding the right colleagues to take our business forward, and just as much on their fulfilment and wellbeing once they join us.',
      link: 'https://bit.ly/3R55Uz2',
      linkText: 'Search jobs',
    },
    {
      title: 'General Meeting of Shareholders',
      p: 'Find out more on the Rothschild & Co General Meeting of Shareholders.',
      link: 'https://www.rothschildandco.com/en/about-us/shareholders/agm/',
      linkText:
        'Visit the Rothschild & Co General Meeting of Shareholders page',
    },
    {
      title: 'Clarification',
      p: 'Clarification on unregulated fundraising schemes.',
      link: 'https://www.rothschildandco.com/siteassets/publications/rothschildandco/group/2018/en_rco_2018_cryptocurrencies.pdf',
      linkText: 'Cryptocurrencies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto w-full mb-40 overflow-hidden">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <a
          href="https://www.rothschildandco.com/en/contact-us/"
          style={style.angledBox}
          className="md:w-1/2"
        >
          <img
            src="/images/contact-us/rothschildandco-london-buildings-16.jpg"
            alt="rothschildandco-london-buildings-16.jpg"
            loading="lazy"
            className="transition-all duration-300 hover:scale-105"
          />
        </a>
        <div className="grid gap-5 md:place-items-start w-full p-5 md:w-1/2 ">
          <a
            id="fourLink"
            href="https://www.rothschildandco.com/en/contact-us/"
            className="text-2xl md:text-4xl"
          >
            <h2 className="">About us</h2>
          </a>
          <p>
            We are a leading global financial services group, with seven
            generations of family control and a history of over 200 years at the
            centre of the world's financial markets.
          </p>
          <ReusableArrowLink
            link="https://www.rothschildandco.com/en/contact-us/"
            text="Learn more"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-center items-center gap-5 w-full ">
        {aboutUsCards.map((e) => (
          <div className="grid gap-5 h-[13rem] w-[30rem] p-8 bg-[var(--primary-color)] z-10">
            <a target="_blank" id="fourLink" href={e.link}>
              <h2 className="text-2xl text-[var(--promoblock-text-heading)]">
                {e.title}
              </h2>
            </a>
            <p className="text-sm">{e.p}</p>
            {e.title == 'Clarification' ? (
              <a
                href={e.link}
                target="_blank"
                className="transition-all duration-200 flex gap-2 items-center text-[var(--promoblock-text-heading)] linkHover"
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              >
                <FaRegFilePdf className="h-4 transition-all duration-200 text-[var(--link-hover-color)]" />
                {e.linkText}
              </a>
            ) : (
              <ReusableArrowLink link={e.link} text={e.linkText} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
