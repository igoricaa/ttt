'use client';

import { benefits } from '@/data/data';
import { Benefit } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Arrow from './ui/arrow-button';
import useMediaQuery from '@/hooks/useMediaQuery';
import BenefitsImageSlider from './benefits-image-slider';

const Benefits = () => {
  const [activeBenefit, setActiveBenefit] = useState<number>(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  useGSAP(() => {
    const subtitleElement = subtitleRef.current;
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;

    if (subtitleElement && titleElement && descriptionElement) {
      gsap.fromTo(
        [descriptionElement],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
      gsap.fromTo(
        [subtitleElement, titleElement],
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
    }
  }, [activeBenefit]);

  const handleSetActiveBenefit = (
    indexOrDirection: number | 'next' | 'previous'
  ) => {
    setActiveBenefit((prevBenefit) => {
      if (typeof indexOrDirection === 'number') {
        return indexOrDirection;
      } else if (indexOrDirection === 'next') {
        return prevBenefit === benefits.length - 1 ? 0 : prevBenefit + 1;
      } else {
        return prevBenefit === 0 ? benefits.length - 1 : prevBenefit - 1;
      }
    });
  };

  return (
    <section className='relative lg:aspect-[1920/852] mt-14 sm:mt-16 lg:mt-32 bg-[#1C1E11] grid grid-cols-1 lg:grid-cols-2'>
      {isDesktop && (
        <div className='absolute hidden lg:flex z-10 right-8 top-8 gap-x-6 items-center px-6 h-[72px] bg-green-default rounded-full border border-primary-dark'>
          <Arrow left onClick={() => handleSetActiveBenefit('previous')} />
          <Arrow onClick={() => handleSetActiveBenefit('next')} />
        </div>
      )}
      {!isMobile && (
        <div className='hidden sm:grid grid-cols-4 sm:grid-cols-6 auto-rows-fr px-side lg:px-0 pt-side lg:pt-0'>
          {benefits.map((benefit: Benefit, index: number) => (
            <div
              key={index}
              className={cn(
                'relative col-span-3 aspect-[215/191] sm:aspect-[340/302] lg:aspect-[480/426] opacity-40 cursor-pointer transition-all duration-300',
                activeBenefit === index && 'opacity-100'
              )}
              onClick={() => handleSetActiveBenefit(index)}
            >
              <Image
                src={benefit.image}
                alt={`Thunder Top Team - ${benefit.title}`}
                fill
                className={cn(
                  'object-cover',
                  index % 2 === 0 && 'rounded-b-[250px]',
                  index % 2 !== 0 && 'rounded-t-[250px]'
                )}
              />
            </div>
          ))}
        </div>
      )}
      {isMobile && (
        <BenefitsImageSlider
          activeBenefit={activeBenefit}
          handleSetActiveBenefit={handleSetActiveBenefit}
        />
      )}
      <div className='flex flex-col justify-between px-side lg:px-10 pt-8 sm:pt-16 lg:pt-10 pb-12 sm:pb-16 lg:pb-12 relative'>
        {isTablet && (
          <div className='absolute hidden sm:flex lg:hidden z-10 top-16 right-8 gap-x-6 items-center px-6 h-[72px] bg-green-default rounded-full border border-primary-dark'>
            <Arrow left onClick={() => handleSetActiveBenefit('previous')} />
            <Arrow onClick={() => handleSetActiveBenefit('next')} />
          </div>
        )}
        <div>
          <span
            ref={subtitleRef}
            className='block text-xs sm:text-base font-medium'
          >
            {benefits[activeBenefit].subtitle}
          </span>
          <h3
            ref={titleRef}
            className='text-3xl sm:text-[40px] lg:text-5xl font-semibold uppercase max-w-[13ch]'
          >
            {benefits[activeBenefit].title}
          </h3>
        </div>
        <p
          ref={descriptionRef}
          className='lg:max-w-xl mt-16 sm:mt-32 lg:mt-16 sm:text-xl'
        >
          {benefits[activeBenefit].description}
        </p>
      </div>
    </section>
  );
};

export default Benefits;
