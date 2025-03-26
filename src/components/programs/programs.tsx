'use client';

import { Program } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image, { getImageProps } from 'next/image';
import { useState } from 'react';

const Programs = ({ programs }: { programs: Program[] }) => {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);

  return (
    <section>
      <div className={cn('absolute inset-0 transition-all duration-300')}>
        <Image
          src={'/programs/thunder-top-team-strength-and-conditioning.jpg'}
          alt={'Thunder Top Team'}
          fill
          className={cn('object-cover object-center -z-10')}
          priority={true}
          sizes='100vw'
        />
      </div>

      <div className='flex flex-col gap-y-8 lg:gap-y-4 pt-20 sm:pt-36 lg:pt-44 4xl:pt-56'>
        {programs.map((program: Program, index: number) => {
          const common = {
            alt: program.images.alt,
            sizes: '100vw',
            fill: true,
          };
          const {
            props: { srcSet: desktop },
          } = getImageProps({
            ...common,
            src: program.images.desktop,
          });

          const {
            props: { srcSet: mobile, ...rest },
          } = getImageProps({
            ...common,
            src: program.images.mobile || program.images.desktop,
          });

          return (
            <div key={program.title} onClick={() => setActiveProgram(program)}>
              <div
                className={cn(
                  'opacity-50 transition-opacity duration-300 w-fit peer focus:opacity-100 hover:opacity-100 relative',
                  activeProgram === program && 'opacity-100'
                )}
              >
                <h2 className='text-3xl sm:text-6xl lg:text-7xl font-semibold uppercase'>
                  {program.title}
                </h2>
                <p className='text-xs sm:text-base'>{program.description}</p>
              </div>
              <div
                className={cn(
                  'absolute inset-0 -z-10 transition-all duration-300 opacity-0 invisible',
                  'peer-hover:opacity-100 peer-hover:visible peer-focus:opacity-100 peer-focus:visible',
                  activeProgram === program && 'opacity-100 visible'
                )}
              >
                <picture>
                  <source media='(min-width: 1000px)' srcSet={desktop} />
                  <source media='(max-width: 1000px)' srcSet={mobile} />
                  <img
                    {...rest}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </picture>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
