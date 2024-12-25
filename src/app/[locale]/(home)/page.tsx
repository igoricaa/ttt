import Events from '@/components/home/Events';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import OurStory from '@/components/home/OurStory';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <main className='-mt-11'>
      <h1>{t('title')}</h1>
      <Hero />
      <OurStory />
      <Highlights />
      <Gallery />
      {/* <Events /> */}
    </main>
  );
};

export default Page;
