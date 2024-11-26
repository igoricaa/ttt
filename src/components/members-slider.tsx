'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { members } from '@/data/data';
import { Member as MemberType } from '@/lib/types';
import Member from './member';
import { useState } from 'react';

const MembersSlider = () => {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(
    null
  );

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 680px)': {
        slides: { perView: 1.5, spacing: 24 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slides: { perView: 1 },
  });

  const handleSetActiveMemberIndex = (index: number) => {
    if (activeMemberIndex === index) {
      setActiveMemberIndex(null);
    } else {
      setActiveMemberIndex(index);
    }
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <div ref={ref} className='keen-slider mt-8 sm:mt-16 lg:mt-14 lg:pl-[calc(100%/12+1rem)]'>
      {members.map((member: MemberType, index: number) => (
        <Member
          key={index}
          member={member}
          memberIndex={index}
          isActive={activeMemberIndex === index}
          setActiveMemberIndex={handleSetActiveMemberIndex}
        />
      ))}
    </div>
  );
};

export default MembersSlider;
