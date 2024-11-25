'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { members } from '@/data/data';
import { Member } from '@/lib/types';
import MemberBio from './member';
import { useState } from 'react';

const MembersSlider = () => {
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(
    null
  );

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 2, spacing: 24 },
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
    <div ref={ref} className='keen-slider mt-14 lg:pl-[calc(100%/12+1rem)]'>
      {members.map((member: Member, index: number) => (
        <MemberBio
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
