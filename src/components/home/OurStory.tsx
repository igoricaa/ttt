import Image from 'next/image';

const OurStory = () => {
  return (
    <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 px-side'>
      <div className='hidden lg:flex gap-x-10 col-span-3 2xl:col-span-2'>
        <div className='relative w-5 h-[312px] mt-12'>
          <Image src='/thunder-top-team.svg' alt='Thunder Top Team' fill />
        </div>
        <div className='relative w-[221px] h-[588px] -translate-y-[20px] -z-10'>
          <Image src='/ttt.svg' alt='TTT' fill />
        </div>
      </div>
      <div className='pt-12 sm:pt-11 col-span-4 sm:col-span-6 lg:col-span-8 lg:col-start-4'>
        <p className='text-xl sm:text-2xl text-center uppercase'>
          At TTT, fighters of all levels come together to push their limits,
          refine their skills, and build the mental strength needed to dominate
          in and out of the cage. Join us and experience top-tier training from
          some of the best in the fight world.
        </p>
        <div className='mt-12 sm:mt-16 lg:mt-11 2xl:mt-[88px] grid grid-cols-8 gap-x-4'>
          <h2 className='text-3xl sm:text-6xl 2xl:text-7xl font-semibold uppercase col-span-6 col-start-2'>
            Our Story
          </h2>
          <p className='text-base sm:text-xl mt-8 col-span-6 col-start-2'>
            Founded by UFC fighter Dusko Todorovic and a group of elite
            Brazilian Jiu-Jitsu experts, TTT is dedicated to training the next
            generation of fighters with a passion for excellence and a
            commitment to discipline.
          </p>
          <p className='text-base sm:text-xl col-span-6 col-start-2 mt-5 '>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

{
  /* <section className='flex gap-32 px-side overflow-hidden'>
      <div className='flex gap-10'>
        <div className='relative w-5 h-[312px] mt-12'>
          <Image src='/thunder-top-team.svg' alt='Thunder Top Team' fill />
        </div>
        <div className='relative w-[221px] h-[588px] -translate-y-[20px] -z-10'>
          <Image src='/ttt.svg' alt='TTT' fill />
        </div>
      </div>
      <div className='pt-11'>
        <p className='text-xl text-center uppercase pr-14'>
          At TTT, fighters of all levels come together to push their limits,
          refine their skills, and build the mental strength needed to dominate
          in and out of the cage. Join us and experience top-tier training from
          some of the best in the fight world.
        </p>
        <div className='mt-14 grid grid-cols-8 gap-x-4'>
          <h2 className='text-6xl font-semibold uppercase col-span-6 col-start-2'>Our Story</h2>
          <p className='text-lg mt-12 col-span-6 col-start-2'>
            Founded by UFC fighter Dusko Todorovic and a group of elite
            Brazilian Jiu-Jitsu experts, TTT is dedicated to training the next
            generation of fighters with a passion for excellence and a
            commitment to discipline.
          </p>
          <p className='mt-5 col-span-6 col-start-2'>
            At TTT, fighters of all levels come together to push their limits,
            refine their skills, and build the mental strength needed to
            dominate in and out of the cage. Join us and experience top-tier
            training from some of the best in the fight world.
          </p>
        </div>
      </div>
    </section> */
}
