import Image from 'next/image';
import heroBg from '@/../public/hero-bg.png';
import { Link } from 'next-view-transitions';

const Hero = () => {
  return (
    <section className='grid grid-cols-12 h-screen relative pt-5 pb-14 px-side'>
      <div className='absolute col-span-12 top-0 left-1/2 -translate-x-1/2 w-[calc(100vw-150px)] h-full -z-10'>
        <Image
          src={heroBg}
          alt='Thunder Top Team Hero'
          fill
          priority
          sizes='95vw'
        />
      </div>

      <div className='col-span-10 flex flex-col justify-end gap-3 h-full'>
        <h1 className='text-9xl font-bold uppercase'>Welcome to TTT</h1>
        <div className='flex justify-between items-end'>
          <div className='pl-6'>
            <h4 className='text-2xl'>Your Ultimate training Destination</h4>
            <p className='mt-4 max-w-72'>
              Join the most modern combat sports and fitness centre in the
              Balkans
            </p>
          </div>
          <Link href='/contact'>SCHEDULE A FREE TOUR</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
