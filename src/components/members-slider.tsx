'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { members } from '@/data/data';
import { Member } from '@/lib/types';
import Image from 'next/image';
import MemberBio from './member-bio';

const MembersSlider = () => {

  const [ref] = useKeenSlider<HTMLDivElement>({
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
  return (
    <div ref={ref} className='keen-slider mt-14 lg:pl-[calc(100%/12+1rem)]'>
      {members.map((member: Member, index: number) => (
        <article
          key={index}
          className={`keen-slider__slide number-slide-${
            index + 1
          } relative aspect-[592/824]`}
        >
          <Image
            src={member.image}
            alt={`Thunder Top Team - ${member.name}`}
            fill
            style={{ objectFit: 'cover' }}
          />
          <MemberBio member={member} />
          {/* <div
            onClick={() => setIsBioVisible(!isBioVisible)}
            className={`absolute top-0 right-0 z-10 ${
              isBioVisible ? 'w-[325px] h-auto' : 'w-[75px] h-[66px]'
            } flex justify-center pt-5 bg-primary-dark rounded-br-3xl cursor-pointer`}
          >
            {!isBioVisible && <PersonIcon />}
            <div
              className={`p-6 ${
                isBioVisible ? 'opacity-100 visible block' : 'opacity-0 invisible hidden'
              } `}
            >
              <h4 className='text-3xl font-semibold'>{member.name}</h4>
              <span className='mt-1'>{member.title}</span>
              <p className='mt-12'>{member.bio}</p>
              <div className='flex gap-4 mt-8'>
                {member.socials.map((social, index) => (
                  <a
                    href={social.url}
                    key={index}
                    target='_blank'
                    className='uppercase font-medium'
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div> */}
        </article>
      ))}
    </div>
  );
};

export default MembersSlider;
