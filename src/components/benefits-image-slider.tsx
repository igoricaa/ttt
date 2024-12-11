'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';
import { benefits } from '@/data/data';
import { Benefit } from '@/lib/types';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Arrow from './ui/arrow-button';

const BenefitsImageSlider = ({
  activeBenefit,
  handleSetActiveBenefit,
}: {
  activeBenefit: number;
  handleSetActiveBenefit: (
    indexOrDirection: number | 'next' | 'previous'
  ) => void;
}) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      handleSetActiveBenefit(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: { perView: 1.4, spacing: 8 },
  });
  const [loaded, setLoaded] = useState(false);

  const handleBenefitChange = (
    indexOrDirection: number | 'next' | 'previous',
    e: any
  ) => {
    e.stopPropagation();

    if (typeof indexOrDirection === 'number') {
      handleSetActiveBenefit(indexOrDirection);
      instanceRef.current?.moveToIdx(indexOrDirection);
    } else if (typeof indexOrDirection === 'string') {
      if (indexOrDirection === 'next') {
        instanceRef.current?.next();
      } else {
        instanceRef.current?.prev();
      }
      handleSetActiveBenefit(indexOrDirection);
    }
  };

  return (
    <div className='relative sm:hidden pl-side active:bg-[#30321C]'>
      {loaded && instanceRef.current && (
        <div className='absolute flex z-10 top-6 right-4 gap-x-4 items-center px-4 h-[40px] bg-green-default rounded-full border border-primary-dark [&:has(*:active)]:bg-[#30321C] transition-bg duration-200'>
          <Arrow
            left
            onClick={(e: any) => handleBenefitChange('previous', e)}
          />
          <Arrow onClick={(e: any) => handleBenefitChange('next', e)} />
        </div>
      )}
      <div ref={sliderRef} className='keen-slider'>
        {benefits.map((benefit: Benefit, index: number) => (
          <div
            key={index}
            className={cn(
              'keen-slider__slide relative aspect-[215/191] opacity-40 cursor-pointer',
              activeBenefit === index && 'opacity-100',
              `number-slide-${index + 1}`
            )}
            onClick={(e: any) => handleBenefitChange(index, e)}
          >
            <Image
              src={benefit.image}
              alt={`Thunder Top Team - ${benefit.title}`}
              fill
              sizes='(max-width: 680px) 75vw, (max-width: 1024px) 50vw, 25vw'
              className={cn(
                'object-cover',
                index % 2 === 0 && 'rounded-b-[250px]',
                index % 2 !== 0 && 'rounded-t-[250px]'
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsImageSlider;
