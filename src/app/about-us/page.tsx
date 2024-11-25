import Achievements from '@/components/achievements';
import MembersSlider from '@/components/members-slider';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

const Page = () => {
  return (
    <main>
      <section className='flex justify-between px-side pt-48'>
        <div>
          <h1 className='text-[128px] leading-[1.2] font-bold uppercase whitespace-nowrap'>
            About Us
          </h1>
          <h4 className='text-2xl'>Our Mission and Commitment</h4>
          <p className='text-xs mt-4'>
            Join the most modern combat sports and fitness centre in the Balkans
          </p>
        </div>
        <div className='flex flex-col items-end pt-24'>
          <p className='text-2xl uppercase max-w-[809px] text-end '>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
          <Link
            href='/contact-us'
            className={`${buttonVariants({ variant: 'dark' })} mt-12 z-10`}
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className='px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 -translate-y-6'>
        <div className='relative col-span-7 aspect-[1054/765]'>
          <Image
            src='/about-us.png'
            alt='Thunder Top Team - About Us'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='col-span-5 lg:pl-16 lg:mt-auto'>
          <h2 className='text-6xl font-semibold uppercase'>Our Facility</h2>
          <p className='text-xl mt-8'>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
        </div>
      </section>

      <section className='lg:mt-48 px-side'>
        <h2 className='text-6xl font-semibold uppercase'>Our Achievements</h2>
        <Achievements className='-translate-y-9' />
      </section>

      <section className='pl-side py-32'>
        <h2 className='text-6xl font-semibold uppercase'>Notable members</h2>
        <MembersSlider />
      </section>
    </main>
  );
};

export default Page;
