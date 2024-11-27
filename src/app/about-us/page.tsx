import Achievements from '@/components/achievements';
import MembersSlider from '@/components/members-slider';
import Link from '@/components/ui/link-button';
import Image from 'next/image';

const Page = () => {
  return (
    <main>
      <section className='flex lg:flex-row justify-between px-side pt-16 sm:pt-28 lg:pt-48'>
        <div>
          <h1 className='text-3xl sm:text-8xl lg:text-[128px] lg:leading-[1.2] font-bold uppercase whitespace-nowrap'>
            About Us
          </h1>
          <h4 className='sm:text-2xl'>Our Mission and Commitment</h4>
          <p className='text-xs mt-4'>
            Join the most modern combat sports and fitness centre in the Balkans
          </p>
        </div>
        <div className='hidden lg:flex flex-col items-end pt-24'>
          <p className='text-2xl uppercase max-w-[809px] text-end '>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
          <Link href='/contact-us' className='mt-12 z-10' variant='dark'>
            Contact Us
          </Link>
        </div>
      </section>

      <section className='px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 lg:-translate-y-6 mt-8 lg:mt-0'>
        <div className='relative col-span-4 sm:col-span-5 lg:col-span-7 aspect-[1054/765]'>
          <Image
            src='/about-us.png'
            alt='Thunder Top Team - About Us'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='col-span-full flex flex-col items-end lg:hidden pt-4 sm:pt-0'>
          <p className='sm:text-2xl uppercase max-w-[809px] text-end '>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
          <Link
            href='/contact-us'
            className='mt-6 sm:mt-8 lg:mt-12 z-10'
            variant='dark'
          >
            Contact Us
          </Link>
        </div>
        <div className='col-span-full lg:col-span-5 lg:pl-16 lg:mt-auto'>
          <h2 className='text-3xl sm:text-6xl font-semibold uppercase'>
            Our Facility
          </h2>
          <p className='sm:text-xl mt-4 sm:mt-8'>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
        </div>
      </section>

      <section className='mt-20 sm:mt-[72px] lg:mt-48 px-side'>
        <h2 className='text-3xl sm:text-6xl font-semibold uppercase'>
          Our Achievements
        </h2>
        <Achievements className='lg:-translate-y-9' />
      </section>

      <section className='px-side lg:pr-0 pt-16 pb-[72px] sm:pt-[72px] sm:pb-24 lg:py-32'>
        <MembersSlider />
      </section>
    </main>
  );
};

export default Page;
