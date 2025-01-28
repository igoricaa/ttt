import Programs from '@/components/programs/programs';
import Link from '@/components/ui/link-button';
import { programs } from '@/data/data';
import { Program } from '@/lib/types';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('programs');

  const programsFull = programs.map((program: Program) => ({
    ...program,
    title: t(`${program.slug}.title`),
    description: t(`${program.slug}.description`),
  }));

  return (
    <main className='lg:h-screen flex flex-col justify-center relative px-side pb-16 lg:pb-10 mt-[-54px] sm:mt-[-64px] bg-gradient-to-r from-black to-transparent'>
      <Programs programs={programsFull} />

      <Link
        href='/contact-us'
        variant='transparentWhite'
        className='mt-8 sm:mt-12 lg:mt-auto w-full'
        //mt-8 sm:mt-12 lg:mt-20
      >
        {t('buttonText')}
      </Link>
    </main>
  );
};

export default Page;
