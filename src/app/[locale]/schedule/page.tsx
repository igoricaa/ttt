import { Schedule } from '@/components/schedule';
import { JoinUsSlider } from '@/components/ui/join-us-slider';
import Link from '@/components/ui/link-button';
import Image from 'next/image';
import header from '@/../public/thunder-top-team-header.jpg';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations('schedule');
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className='pt-6 sm:pt-12 lg:pt-20'>
      <section className='w-[calc(100vw-2*var(--padding-side))] mx-auto '>
        <div className='relative aspect-[286/159] sm:aspect-[674/375] lg:aspect-[1824/421] flex flex-col justify-end pb-4'>
          <Image
            src={header}
            alt={`Thunder Top Team - ${t('title')}`}
            fill
            priority
            sizes='100vw'
            className='object-cover rounded-[224px] -z-10'
            style={{
              objectPosition: 'center 60%',
            }}
          />
          <h1 className='text-3xl sm:text-8xl lg:text-9xl font-bold uppercase'>
            {t('title')}
          </h1>
          <p className='hidden lg:block text-2xl text-end uppercase self-end max-w-[60ch]'>
            {t('description')}
          </p>
        </div>

        <p className='lg:hidden sm:text-2xl text-end uppercase self-end mt-8 sm:mt-4 max-w-[60ch]'>
          {t('description')}
        </p>
      </section>

      <section className='mt-6 sm:mt-16 lg:mt-20 mb-32 grid grid-cols-12'>
        <div className='col-span-10 col-start-2 flex flex-col gap-4 sm:flex-row justify-between items-center mb-8'>
          <p className='text-base sm:text-xl uppercase'>{t('subtitle')}</p>
          <Link
            href='/contact-us'
            variant='dark'
            className='flex self-end sm:self-start'
          >
            {t('buttonText')}
          </Link>
        </div>

        <Schedule />
      </section>

      <JoinUsSlider />
    </main>
  );
}
