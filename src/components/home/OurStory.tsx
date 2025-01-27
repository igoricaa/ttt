import Image from 'next/image';
import InViewWrapper from '../inview-wrapper';
import { getTranslations } from 'next-intl/server';

const OurStory = async () => {
  const t = await getTranslations('home.ourStory');

  return (
    <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 px-side'>
      <InViewWrapper
        from={{
          opacity: 0,
          filter: 'blur(4px)',
          transform: 'translateX(-40px)',
        }}
        to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateX(0)' }}
        className='hidden lg:flex col-span-3 2xl:col-span-2'
      >
        <div className='flex gap-x-10'>
          <div className='relative w-5 h-[312px] mt-12'>
            <Image src='/thunder-top-team.svg' alt='Thunder Top Team' fill />
          </div>
          <div className='relative w-[221px] h-[588px] -translate-y-[20px] -z-10'>
            <Image src='/ttt.svg' alt='TTT' fill />
          </div>
        </div>
      </InViewWrapper>
      <div className='pt-12 sm:pt-11 col-span-full lg:col-span-8 lg:col-start-4'>
        <InViewWrapper
          from={{
            opacity: 0,
            filter: 'blur(4px)',
            transform: 'translateY(40px)',
          }}
          to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
        >
          <p className='text-xl sm:text-2xl text-center uppercase'>
            {t('intro')}
          </p>
        </InViewWrapper>
        <div className='mt-12 sm:mt-16 lg:mt-11 2xl:mt-[88px] grid grid-cols-8 gap-x-4'>
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2'
          >
            <h2 className='text-3xl sm:text-6xl 2xl:text-7xl font-semibold uppercase'>
              {t('title')}
            </h2>
          </InViewWrapper>
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
            className='mt-8 col-span-full lg:col-span-6 lg:col-start-2'
          >
            <p className='text-base sm:text-xl'>{t('aboutText.ptOne')}</p>
          </InViewWrapper>
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2 mt-5'
          >
            <p className='text-base sm:text-xl'>{t('aboutText.ptTwo')}</p>
          </InViewWrapper>
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2 mt-5'
          >
            <p className='text-base sm:text-xl'>{t('aboutText.ptThree')}</p>
          </InViewWrapper>
          <InViewWrapper
            from={{
              opacity: 0,
              filter: 'blur(4px)',
              transform: 'translateY(40px)',
            }}
            to={{ opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }}
            className='col-span-full lg:col-span-6 lg:col-start-2 mt-5'
          >
            <p className='text-base sm:text-xl'>{t('aboutText.ptFour')}</p>
          </InViewWrapper>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
