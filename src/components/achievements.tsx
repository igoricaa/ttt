'use client';

import { achievements } from '@/data/data';
import { Achievement } from '@/lib/types';
import Image from 'next/image';

const Achievements = ({ className }: { className?: string }) => {
  return (
    <div
      className={`px-2 sm:px-6 lg:px-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 mt-6 sm:mt-8 lg:mt-0 ${className}`}
    >
      <div className='hidden lg:flex lg:col-span-5 items-center justify-center'>
        <div className='relative w-[100px] sm:w-[171px] lg:w-[536px] aspect-square rounded-full overflow-hidden'>
          <Image
            src='/achievements.png'
            alt='Thunder Top Team - About Us'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='col-span-full lg:col-span-7 lg:pl-16'>
        {achievements.map((achievement: Achievement, index: number) => (
          <div key={achievement.title} className='border-b border-white py-6 sm:py-8'>
            <h3 className='text-3xl sm:text-6xl leading-none font-medium uppercase'>
              {achievement.title} <span className='italic'>No{index + 1}</span>
            </h3>
            <p className='sm:text-xl mt-8'>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
