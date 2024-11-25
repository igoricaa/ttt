import { Member } from '@/lib/types';
import PersonIcon from './ui/icons/person';
import { useState } from 'react';

const MemberBio = ({ member }: { member: Member }) => {
  const [isBioVisible, setIsBioVisible] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsBioVisible(!isBioVisible)}
        style={{
          transition: `width 300ms ${
            isBioVisible ? '0ms' : '300ms'
          }, height 300ms ${isBioVisible ? '300ms' : '0ms'}`,
        }}
        className={`absolute top-0 right-0 z-10 ${
          isBioVisible ? 'w-[325px] h-2/3' : 'w-[66px] h-[75px]'
        } pt-5 bg-primary-dark rounded-br-3xl cursor-pointer max-h-[549px]`}
      >
        <PersonIcon
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all  ${
            isBioVisible
              ? 'opacity-0 invisible delay-0 duration-0'
              : 'opacity-100 visible delay-500 duration-300'
          }`}
        />
        <div
          className={`p-6 transition-all duration-300  ${
            isBioVisible
              ? 'opacity-100 visible delay-300'
              : 'opacity-0 invisible delay-0'
          } `}
        >
          <h4 className={`text-3xl font-semibold transition-all `}>
            {member.name}
          </h4>
          <span className={`mt-1 transition-all `}>{member.title}</span>
          <p className={`mt-12 transition-all `}>{member.bio}</p>
          <div className={`flex gap-4 mt-8 transition-all`}>
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
  );
};

export default MemberBio;
