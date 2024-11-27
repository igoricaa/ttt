'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { members } from '@/data/data';
import { Member as MemberType } from '@/lib/types';
import Member from './member';
import { useState } from 'react';
import ArrowIcon from './ui/icons/arrow';

const MembersSlider = () => {
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
      <div className='flex justify-between items-center pr-side gap-4'>
        <h2 className='text-3xl sm:text-7xl lg:text-6xl font-semibold uppercase'>
          Notable <br className='lg:hidden' /> members
        </h2>
        <div className='relative flex gap-x-4 sm:gap-x-6 items-center px-4 sm:px-6 h-[40px] sm:h-[72px] bg-green rounded-3xl border border-primary-dark'>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={currentSlide === members.length - 1}
              />
            </>
          )}
        </div>
      </div>
      <div
        ref={sliderRef}
        className='keen-slider mt-8 sm:mt-16 lg:mt-14 lg:pl-[calc(100%/12+1rem)]'
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

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? 'opacity-20 pointer-events-none' : '';
  return (
    <ArrowIcon
      className={`w-6 h-6 sm:w-9 sm:h-9 cursor-pointer ${
        props.left ? 'rotate-180' : ''
      } ${disabled}`}
      onClick={props.onClick}
    />
  );
}
