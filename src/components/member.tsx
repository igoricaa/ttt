import { Member as MemberType } from '@/lib/types';
import PersonIcon from './ui/icons/person';
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
      style={{
        transition: `margin 300ms ${isActive ? '0ms' : '300ms'}`,
      }}
      className={`keen-slider__slide number-slide-${
        memberIndex + 1
      } !overflow-visible ${
        isActive ? 'z-10 sm:mr-[108px] lg:mr-[128px]' : 'z-0 mr-0'
      }}`}
    >
      <div
        style={{
          transition: `margin 300ms ${
            isActive ? '0ms' : '300ms'
          }, transform 300ms ${isActive ? '0ms' : '300ms'}`,
        }}
        className={`relative aspect-[592/824] transition-[transform] duration-300 ${
          isActive ? '!-translate-x-[180px] sm:!translate-x-0 z-10' : 'z-0'
        }`}
      >
        <Image
          src={member.image}
          alt={`Thunder Top Team - ${member.name}`}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className='absolute top-0 right-[-174px] sm:right-[-108px] lg:right-[-128px] z-10 w-[240px] sm:w-[282px] lg:w-[325px] h-full sm:h-3/4 lg:h-2/3 flex justify-start sm:justify-center'>
          <div
            onClick={() => setActiveMemberIndex(memberIndex)}
            style={{
              transition: `width 300ms ${
                isActive ? '0ms' : '300ms'
              }, height 300ms ${
                isActive ? '300ms' : '0ms'
              }, border-radius 500ms`,
            }}
            className={`${
              isActive
                ? 'w-full h-full rounded-br-[75px]'
                : 'w-[66px] h-[75px] rounded-br-3xl'
            } relative bg-primary-dark cursor-pointer max-h-full sm:max-h-[470px] lg:max-h-[549px]`}
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
                  ? 'opacity-100 visible delay-500'
                  : 'opacity-0 invisible delay-0'
              } `}
            >
              <h4 className='text-2xl sm:text-3xl font-semibold'>
                {member.name}
              </h4>
              <span className='mt-1'>{member.title}</span>
              <p className='text-sm lg:text-base mt-6 lg:mt-12'>{member.bio}</p>
              <div className={`flex gap-4 mt-8`}>
                {member.socials.map((social, index) => (
                  <a
                    href={social.url}
                    key={index}
                    target='_blank'
                    className='text-sm sm:text-base uppercase font-medium'
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Member;
