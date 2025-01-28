import MembersSlider from '@/components/members-slider';
import Link from '@/components/ui/link-button';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import aboutUs from '@/../public/thunder-top-team-about-us.png';
import { members } from '@/data/data';
import { Member } from '@/lib/types';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('aboutUs');

  const membersFull: Member[] = members.map((member) => ({
    ...member,
    bio: t(`members.${member.slug}.bio`),
    title: t(`members.${member.slug}.title`),
  }));

  const title = t('members.title');

  return (
    <main className='pt-6 sm:pt-12 lg:pt-24'>
      <section className='flex lg:flex-row justify-between px-side'>
        <div>
          <h1 className='text-3xl sm:text-8xl lg:text-9xl font-bold uppercase whitespace-nowrap'>
            {t('header.title')}
          </h1>
          <h4 className='sm:text-2xl'>{t('header.subtitle')}</h4>
          <p className='text-xs mt-4'>{t('header.text')}</p>
        </div>
        <div className='hidden lg:flex flex-col items-end pt-24'>
          <p
            className='text-2xl uppercase max-w-[809px] text-end'
            dangerouslySetInnerHTML={{ __html: t.raw('introText.ptOne') }}
          ></p>
          <p
            className='text-2xl uppercase max-w-[809px] text-end mt-6'
            dangerouslySetInnerHTML={{ __html: t.raw('introText.ptTwo') }}
          ></p>

          <Link href='/contact-us' className='mt-12 z-10' variant='dark'>
            {t('buttonText')}
          </Link>
        </div>
      </section>

      <section className='px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-4 lg:-translate-y-6 mt-8 lg:mt-0'>
        <div className='relative col-span-4 sm:col-span-5 lg:col-span-7 aspect-[1054/765]'>
          <Image
            src={aboutUs}
            alt={`Thunder Top Team - ${t('header.title')}`}
            priority
            fill
            quality={100}
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 680px) 100vw, (max-width: 1024px) 85vw, 60vw'
          />
        </div>
        <div className='col-span-full flex flex-col items-end lg:hidden pt-4 sm:pt-0'>
          <p className='sm:text-2xl uppercase max-w-[809px]'>
            {t('introText.ptOne')}
          </p>
          <p className='sm:text-2xl uppercase max-w-[809px] mt-4'>
            {t('introText.ptTwo')}
          </p>
          <Link
            href='/contact-us'
            className='mt-6 sm:mt-8 lg:mt-12 z-10'
            variant='dark'
          >
            {t('buttonText')}
          </Link>
        </div>
        <div className='col-span-full lg:col-span-5 lg:pl-16 lg:mt-auto'>
          <h2 className='text-3xl sm:text-6xl font-semibold uppercase'>
            {t('facility.title')}
          </h2>
          <p className='sm:text-xl mt-4 sm:mt-8'>{t('facility.text.ptOne')}</p>
          <p className='sm:text-xl mt-4 sm:mt-4'>{t('facility.text.ptTwo')}</p>
          <p className='sm:text-xl mt-4 sm:mt-4'>
            {t('facility.text.ptThree')}
          </p>
          <p className='sm:text-xl mt-4 sm:mt-4'>{t('facility.text.ptFour')}</p>
          <p className='sm:text-xl mt-4 sm:mt-4'>{t('facility.text.ptFive')}</p>
        </div>
      </section>

      {/* <section className='mt-20 sm:mt-[72px] lg:mt-48 px-side'>
        <h2 className='text-3xl sm:text-6xl font-semibold uppercase'>
          {t('achievements.title')}
        </h2>
        <Achievements className='lg:mt-20' />
      </section> */}

      <section className='px-side lg:pr-0 pt-16 pb-[72px] sm:pt-[72px] sm:pb-24 lg:py-32'>
        <MembersSlider members={membersFull} title={title} />
      </section>
    </main>
  );
};

export default Page;
