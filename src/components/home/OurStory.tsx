import Image from 'next/image';
import InViewWrapper from '../inview-wrapper';

const OurStory = () => {
  return (
    <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 px-side'>
      <InViewWrapper
        from={{ opacity: 0, transform: 'translateX(-40px)' }}
        to={{ opacity: 1, transform: 'translateX(0)' }}
        className='hidden lg:flex col-span-3 2xl:col-span-2'
      >
        <div className='flex gap-x-10'>
          <div className='relative w-5 h-[312px] mt-12'>
            <Image src='/thunder-top-team.svg' alt='Thunder Top Team' fill />
          </div>
          <div className='relative w-[221px] h-[588px] -translate-y-[20px] -z-10'>
            <Image src='/ttt.svg' alt='TTT' fill />
          </div>
        </div>
      </InViewWrapper>
      <div className='pt-12 sm:pt-11 col-span-full lg:col-span-8 lg:col-start-4'>
        <InViewWrapper
          from={{ opacity: 0, transform: 'translateY(40px)' }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
        >
          <p className='text-xl sm:text-2xl text-center uppercase'>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
        </InViewWrapper>
        <div className='mt-12 sm:mt-16 lg:mt-11 2xl:mt-[88px] grid grid-cols-8 gap-x-4'>
          <InViewWrapper
            from={{ opacity: 0, transform: 'translateY(40px)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2'
          >
            <h2 className='text-3xl sm:text-6xl 2xl:text-7xl font-semibold uppercase'>
              Our Story
            </h2>
          </InViewWrapper>
          <InViewWrapper
            from={{ opacity: 0, transform: 'translateY(40px)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
            className='mt-8 col-span-full lg:col-span-6 lg:col-start-2'
          >
            <p className='text-base sm:text-xl'>
              Founded by UFC fighter Dusko Todorovic and a group of elite
              Brazilian Jiu-Jitsu experts, TTT is dedicated to training the next
              generation of fighters with a passion for excellence and a
              commitment to discipline.
            </p>
          </InViewWrapper>
          <InViewWrapper
            from={{ opacity: 0, transform: 'translateY(40px)' }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2 mt-5'
          >
            <p className='text-base sm:text-xl'>
              At TTT, fighters of all levels come together to push their limits,
              refine their skills, and build the mental strength needed to
              dominate in and out of the cage. Join us and experience top-tier
              training from some of the best in the fight world.
            </p>
          </InViewWrapper>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
