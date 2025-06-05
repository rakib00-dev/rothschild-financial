import ReusableArrowLink from './ReusableArrowLink';

const CorporateSustain = () => {
  return (
    <section className="relative mb-120 md:mb-40 h-[500px] bg-[url(/images/corporate-sustain/rothschildandco-london-buildings-23.jpg)] bg-fixed">
      <div className="hidden md:grid gap-5 bg-[var(--primary-color)] p-10 w-md absolute right-35 -top-10">
        <h2 className="text-2xl">Corporate Sustainability</h2>
        <p>
          As a long-term oriented business, we want to use our expertise and
          influence to help facilitate the sustainability transition of the
          global economy. A group-wide sustainability priority framework
          provides us with focus and a long-term roadmap for the nuanced
          consideration of most relevant sustainability risks, impacts and
          opportunities across our activities.
        </p>
        <ReusableArrowLink
          link="https://www.rothschildandco.com/en/corporate-sustainability/"
          text="Learn more"
        />
      </div>
      <div className="grid md:hidden gap-5 bg-[var(--primary-color)] p-10 absolute w-full -bottom-90">
        <h2 className="text-2xl">Corporate Sustainability</h2>
        <p>
          As a long-term oriented business, we want to use our expertise and
          influence to help facilitate the sustainability transition of the
          global economy. A group-wide sustainability priority framework
          provides us with focus and a long-term roadmap for the nuanced
          consideration of most relevant sustainability risks, impacts and
          opportunities across our activities.
        </p>
        <ReusableArrowLink
          link="https://www.rothschildandco.com/en/corporate-sustainability/"
          text="Learn more"
        />
      </div>
    </section>
  );
};

export default CorporateSustain;
