'use client';

import { programs } from '@/data/data';
import { Program } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section>
      {programs.map((program: Program, index: number) => (
        <Image
          key={program.title}
          src={program.image}
          alt={program.title}
          fill
          className={cn(
            'object-cover object-center -z-10 opacity-0 invisible transition-all duration-300',
            index === activeProgram && 'opacity-100 visible'
          )}
          priority={index === 0}
          sizes='100vw'
        />
      ))}

      <div className='flex flex-col gap-y-8 lg:gap-y-4 pt-20 sm:pt-36 lg:pt-56'>
        {programs.map((program: Program, index: number) => (
          <div
            key={program.title}
            className={cn(
              'opacity-50 transition-opacity duration-300',
              activeProgram === index && 'opacity-100'
            )}
            onMouseEnter={() => setActiveProgram(index)}
          >
            <h2 className='text-3xl sm:text-6xl lg:text-7xl font-semibold uppercase'>
              {program.title}
            </h2>
            <p className='text-xs sm:text-base'>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;
