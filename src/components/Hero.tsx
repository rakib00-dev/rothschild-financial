const Hero = () => {
  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      padding: '2rem',
      maxWidth: '400px',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontSize: '1.1rem',
    },
  };
  return (
    <section className="relative mt-0 w-full max-w-7xl mx-auto">
      <div className="relative">
        <img
          src="/images/hero/rothschildandco-london-buildings-38-hr.jpg"
          alt="rothschildandco-london-buildings-38-hr.jpg"
          className="md:px-10 px-3 top-0"
        />
        <div className="absolute bottom-0">
          <h1 className="angled-box" style={style.angledBox}>
            One of the world's largest independent financial services groups
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
