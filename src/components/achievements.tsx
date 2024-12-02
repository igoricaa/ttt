'use client';

import { achievements } from '@/data/data';
import { Achievement } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const Achievements = ({ className }: { className?: string }) => {
  const [activeAchievement, setActiveAchievement] = useState(0);

  return (
    <div
      className={`px-2 sm:px-6 lg:px-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 mt-6 sm:mt-8 lg:mt-0 ${className}`}
    >
      <div className='hidden lg:flex lg:col-span-5 items-center justify-center 4xl:pt-80'>
        <div className='sticky top-1/2 transform -translate-y-1/2 w-[100px] sm:w-[171px] lg:w-[536px] aspect-square rounded-full overflow-hidden'>
          {achievements.map((achievement: Achievement, index: number) => (
            <Image
              key={achievement.title}
              src={achievement.image}
              alt='Thunder Top Team - Achievements'
              fill
              className={cn(
                'object-cover opacity-0 invisible transition-all duration-300',
                index === activeAchievement && 'opacity-100 visible'
              )}
              priority={index === 0}
              sizes='100vw'
            />
          ))}
        </div>
      </div>
      <div className='col-span-full lg:col-span-7 lg:pl-16'>
        {achievements.map((achievement: Achievement, index: number) => (
          <div
            key={achievement.title}
            className='border-b border-white py-6 sm:py-8 opacity-50 hover:opacity-100 transition-opacity duration-300'
            onMouseEnter={() => setActiveAchievement(index)}
          >
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
