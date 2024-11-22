'use client';

import { achievements } from '@/data/data';
import { Achievement } from '@/lib/types';
import Image from 'next/image';

const Achievements = ({ className }: { className?: string }) => {
  return (
    <div
      className={`grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 ${className}`}
    >
      <div className='col-span-5 flex items-center justify-center'>
        <div className='relative w-[536px] aspect-square rounded-full overflow-hidden'>
          <Image
            src='/achievements.png'
            alt='Thunder Top Team - About Us'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='col-span-7'>
        {achievements.map((achievement: Achievement, index: number) => (
          <div key={achievement.title} className='border-b border-white py-8'>
            <h3 className='text-[53px] leading-none font-medium uppercase'>
              {achievement.title} <span className='italic'>No{index + 1}</span>
            </h3>
            <p className='text-xl mt-8'>{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
