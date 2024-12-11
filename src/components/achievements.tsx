'use client';

import { achievements } from '@/data/data';
import { Achievement } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import achievementImage1 from '@/../public/achievements/achievements-1.png';
import achievementImage2 from '@/../public/achievements/achievements-2.jpg';
import achievementImage3 from '@/../public/achievements/achievements-3.jpg';
import achievementImage4 from '@/../public/achievements/achievements-4.jpeg';
import achievementImage5 from '@/../public/achievements/achievements-5.jpg';

const achievementsImages = [
  achievementImage1,
  achievementImage2,
  achievementImage3,
  achievementImage4,
  achievementImage5,
];

const Achievements = ({ className }: { className?: string }) => {
  const [activeAchievement, setActiveAchievement] = useState(0);

  return (
    <div
      className={`px-2 sm:px-6 lg:px-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 mt-6 sm:mt-8 lg:mt-0 ${className}`}
    >
      <div className='hidden lg:block lg:col-span-5 lg:sticky top-0 lg:h-[660px]'>
        <div className='relative w-[100px] sm:w-[171px] lg:w-[660px] h-full rounded-tl-[50%] rounded-br-[50%] overflow-hidden'>
          {achievements.map((achievement: Achievement, index: number) => (
            <Image
              key={achievement.title}
              src={achievementsImages[index]}
              alt='Thunder Top Team - Achievements'
              fill
              className={cn(
                'object-cover opacity-0 invisible transition-all duration-300',
                index === activeAchievement && 'opacity-100 visible'
              )}
              priority={index === 0}
              sizes='(max-width: 1024px) 180px, 536px'
            />
          ))}
        </div>
      </div>
      <div
        id='achievements'
        className='col-span-full lg:col-span-7 lg:pl-16 lg:max-h-[660px] lg:overflow-y-auto'
      >
        {achievements.map((achievement: Achievement, index: number) => (
          <div
            key={achievement.title}
            className={cn(
              'border-b border-white py-6 sm:py-8 opacity-50 hover:opacity-100 transition-opacity duration-300',
              index === 0 && 'lg:pt-0'
            )}
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
