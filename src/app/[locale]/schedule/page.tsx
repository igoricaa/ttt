import { Schedule } from '@/components/schedule';
import { JoinUsSlider } from '@/components/ui/join-us-slider';
import Link from '@/components/ui/link-button';
import Image from 'next/image';
import header from '@/../public/thunder-top-team-header.jpg';

export default function Page() {
  return (
    <main className='pt-6 sm:pt-12 lg:pt-20'>
      <section className='w-[calc(100vw-2*var(--padding-side))] mx-auto '>
        <div className='relative aspect-[286/159] sm:aspect-[674/375] lg:aspect-[1824/421] flex flex-col justify-end pb-4'>
          <Image
            src={header}
            alt='Thunder Top Team Schedule'
            fill
            priority
            sizes='100vw'
            className='object-cover rounded-[224px] -z-10'
            style={{
              objectPosition: 'center 60%',
            }}
          />
          <h1 className='text-3xl sm:text-8xl lg:text-9xl font-bold uppercase'>
            Schedule
          </h1>
          <p className='hidden lg:block text-2xl text-end uppercase self-end'>
            At TTT, fighters of all levels come together to push their
            <br />
            limits, refine their skills, and build the mental strength.
          </p>
        </div>

        <p className='lg:hidden sm:text-2xl text-end uppercase self-end mt-8 sm:mt-4'>
          At TTT, fighters of all levels come together to push their
          <br />
          limits, refine their skills, and build the mental strength.
        </p>
      </section>

      <section className='mt-6 sm:mt-16 lg:mt-20 mb-32 grid grid-cols-12'>
        <div className='col-span-10 col-start-2 flex flex-col gap-4 sm:flex-row justify-between items-center mb-8'>
          <p className='text-base sm:text-xl uppercase'>
            Feel free to roach out for any questions regarding our classes.{' '}
          </p>
          <Link href='/contact-us' variant='dark' className='flex self-end sm:self-start'>
            Contact Us
          </Link>
        </div>

        <Schedule />
      </section>

      <JoinUsSlider />
    </main>
  );
}
