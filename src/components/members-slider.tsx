'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Member as MemberType } from '@/lib/types';
import Member from './member';
import { useState } from 'react';
import Arrow from './ui/arrow-button';

const MembersSlider = ({
  members,
  title,
}: {
  members: MemberType[];
  title: string;
}) => {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(
    null
  );
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(min-width: 680px)': {
        slides: { perView: 1.5, spacing: 24 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 2.7, spacing: 24 },
      },
    },
    slides: { perView: 1 },
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleSetActiveMemberIndex = (index: number) => {
    if (activeMemberIndex === index) {
      setActiveMemberIndex(null);
    } else {
      setActiveMemberIndex(index);
    }
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <div className=''>
      <div className='flex justify-between items-end lg:pr-side gap-4'>
        <h2 className='text-3xl sm:text-5xl text-balance max-w-[10ch] lg:max-w-full lg:text-6xl font-semibold uppercase'>
          {title}
        </h2>
        <div className='relative flex gap-x-4 sm:gap-x-6 items-center mb-1 lg:mb-0 px-4 sm:px-6 h-[40px] sm:h-[3.5rem] lg:h-[4.5rem] bg-green-default rounded-full border border-primary-dark'>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) => {
                  e.stopPropagation() || instanceRef.current?.prev();
                  setActiveMemberIndex(null);
                }}
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) => {
                  e.stopPropagation() || instanceRef.current?.next();
                  setActiveMemberIndex(null);
                }}
                disabled={currentSlide === members.length - 1}
              />
            </>
          )}
        </div>
      </div>
      <div
        ref={sliderRef}
        className='keen-slider mt-5 sm:mt-9 lg:mt-14 lg:pl-[calc(100%/12+1rem)]'
      >
        {members.map((member: MemberType, index: number) => (
          <Member
            key={index}
            member={member}
            memberIndex={index}
            isActive={activeMemberIndex === index}
            setActiveMemberIndex={handleSetActiveMemberIndex}
          />
        ))}
        <div
          className={`keen-slider__slide number-slide-${members.length + 1}`}
        ></div>
      </div>
    </div>
  );
};

export default MembersSlider;
