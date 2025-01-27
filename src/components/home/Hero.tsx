import Image from 'next/image';
import heroBg from '@/../public/thunder-top-team-hero.png';
import Link from '../ui/link-button';
import { getTranslations } from 'next-intl/server';

const Hero = async () => {
  const t = await getTranslations('home.hero');

  return (
    <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 sm:h-[calc(100vw-12px)] lg:h-[calc(100vh-1.25rem)] relative sm:pb-5 lg:pb-10 px-4 lg:px-side'>
      <div className='clip-path-animation animate-reveal relative sm:absolute col-span-full left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] lg:w-[calc(100vw-2*var(--padding-side))] aspect-square sm:aspect-auto sm:h-full -z-10'>
        <Image
          src={heroBg}
          alt='Thunder Top Team Hero'
          fill
          priority
          sizes='100vw'
          style={{ objectFit: 'cover' }}
        />
        <div className='z-20 absolute bottom-3 sm:hidden'>
          <h1 className='text-3xl sm:text-8xl lg:text-9xl font-bold uppercase'>
            Thunder Top Team
          </h1>
          <h4 className='sm:text-2xl'>{t('subtitle')}</h4>
        </div>
      </div>

      <div className='col-span-full flex flex-col justify-end h-full sm:px-4 lg:px-0 lg:pl-0'>
        <h1 className='hidden sm:block text-3xl sm:text-8xl lg:text-9xl font-bold uppercase lg:-translate-x-4'>
          Thunder Top Team
        </h1>
        <div className='flex flex-col gap-y-4 lg:flex-row lg:gap-y-0 justify-between lg:items-end'>
          <div className='lg:-translate-x-2 2xl:-translate-x-4'>
            <h4 className='hidden sm:block text-2xl'>{t('subtitle')}</h4>
            <p className='text-xs sm:mt-4 max-w-[35ch]'>{t('text')}</p>
          </div>

          <Link
            href='/contact-us'
            className='sm:hidden self-end'
            variant='dark'
          >
            {t('buttonText')}
          </Link>
          <Link
            href='/contact-us'
            className='hidden sm:inline-flex self-end lg:mr-4 2xl:mr-8'
          >
            {t('buttonText')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
