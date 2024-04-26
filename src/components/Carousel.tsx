import Image from "next/image";
import { useEffect, useRef } from "react";
import Image01 from "../../public/assets/image01.jpg";
import Image02 from "../../public/assets/image02.jpg";

export function Carousel() {
  const refCarousel = useRef<any>(null);

  function next() {
    refCarousel.current.scrollLeft += 500;
  }
  function previous() {
    refCarousel.current.scrollLeft -= 500;
  }

  useEffect(() => {
    let move = 500;

    setInterval(() => {
      if (move >= 1300) {
        refCarousel.current.scrollLeft -= move;
        move = 500;
      } else {
        refCarousel.current.scrollLeft += move;
        move += 300;
      }
    }, 2000);
  }, []);

  return (
    <section className='w-full h-screen flex items-center'>
      <div className='flex h-1/2 items-center relative bg-black'>
        <div className='absolute flex h-full items-center'>
          <button
            className='bg-white px-2 py-4 ml-1'
            type='button'
            onClick={previous}>
            Anterior
          </button>
        </div>
        <div
          className='w-full flex overflow-x-hidden scroll-smooth'
          ref={refCarousel}>
          <Image alt='' src={Image02} className='w-[500px]' />
          <Image alt='' src={Image02} className='w-[500px]' />
          <Image alt='' src={Image01} className='w-[500px]' />
        </div>
        <div className='absolute right-0 flex h-full items-center'>
          <button
            className='bg-white px-2 py-4 mr-1'
            type='button'
            onClick={next}>
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
}
