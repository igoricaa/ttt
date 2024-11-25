import { Member as MemberType } from '@/lib/types';
import PersonIcon from './ui/icons/person';
import { useState } from 'react';
import Image from 'next/image';

const Member = ({
  member,
  memberIndex,
  isActive,
  setActiveMemberIndex,
}: {
  member: MemberType;
  memberIndex: number;
  isActive: boolean;
  setActiveMemberIndex: (index: number) => void;
}) => {
  return (
    <article
      key={memberIndex}
      className={`keen-slider__slide number-slide-${
        memberIndex + 1
      } relative aspect-[592/824] !overflow-visible transition-[margin] duration-300 ${
        isActive ? 'z-10 mr-[128px]' : 'z-0 mr-0 delay-300'
      }`}
    >
      <Image
        src={member.image}
        alt={`Thunder Top Team - ${member.name}`}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute top-0 right-[-128px] z-10 w-[325px] h-2/3 flex justify-center'>
        <div
          onClick={() => setActiveMemberIndex(memberIndex)}
          style={{
            transition: `width 300ms ${
              isActive ? '0ms' : '300ms'
            }, height 300ms ${isActive ? '300ms' : '0ms'}`,
          }}
          className={`${
            isActive ? 'w-full h-full' : 'w-[66px] h-[75px]'
          } relative bg-primary-dark rounded-br-3xl cursor-pointer max-h-[549px]`}
        >
          <PersonIcon
            style={{
              transition: `width 300ms ${
                isActive ? '300ms' : '0ms'
              }, height 300ms ${isActive ? '300ms' : '0ms'}`,
            }}
            className={`absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 transition-all  ${
              isActive
                ? 'opacity-0 invisible delay-0 duration-0 w-0 h-0'
                : 'opacity-100 visible delay-500 duration-300 w-auto h-auto'
            }`}
          />
          <div
            className={`p-6 transition-all duration-300  ${
              isActive
                ? 'opacity-100 visible delay-300'
                : 'opacity-0 invisible delay-0'
            } `}
          >
            <h4 className={`text-3xl font-semibold`}>{member.name}</h4>
            <span className={`mt-1 `}>{member.title}</span>
            <p className={`mt-12 `}>{member.bio}</p>
            <div className={`flex gap-4 mt-8`}>
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
        </div>
      </div>
    </article>
  );
};

export default Member;
