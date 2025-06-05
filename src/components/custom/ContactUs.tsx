import ReusableArrowLink from './ReusableArrowLink';

const ContactUs = () => {
  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'calluna, serif',
    },
  };

  return (
    <section className="max-w-7xl mx-auto w-full mb-40">
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div style={style.angledBox} className="md:w-1/2">
          <img
            src="/images/contact-us/rothschildandco-london-buildings-16.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="grid gap-5 md:place-items-start w-full p-5 md:w-1/2 ">
          <a
            id="fourLink"
            href="https://www.rothschildandco.com/en/contact-us/"
          >
            <h2 className="text-2xl">Contact us</h2>
          </a>
          <p>
            With 4,600 talented professionals in over 40 countries we can assist
            you wherever you, your business or your assets are located
          </p>
          <ReusableArrowLink
            link="https://www.rothschildandco.com/en/contact-us/"
            text="Find your local office"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
