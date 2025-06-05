import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const LatestNews = () => {
  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'calluna, serif',
    },
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-15 md:my-20">
      <div className="h-full w-full">
        <h1 className="font-medium uppercase tracking-[2px] grid place-items-center text-[#767474]">
          latest news
        </h1>
        <div
          className="text-lg w-11/12 grid place-items-center max-w-xs p-4 md:text-4xl md:max-w-7xl md:p-8"
          style={style.angledBox}
        >
          <Carousel className="grid place-items-center">
            <CarouselContent className="">
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <div className="">
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
