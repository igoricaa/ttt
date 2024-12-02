import Events from '@/components/home/Events';
import Gallery from '@/components/home/gallery';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import OurStory from '@/components/home/OurStory';
// import { useTranslations } from 'next-intl';
// import { setRequestLocale } from 'next-intl/server';

// type Params = Promise<{ params: { locale: string } }>;

// { params }: { params: Params }
const Page = async () => {
  // const {
  //   params: { locale },
  // } = await params;

  // setRequestLocale(locale);

  // const t = useTranslations('HomePage');

  return (
    <main className='-mt-11'>
      <Hero />
      <OurStory />
      <Highlights />
      <Gallery />
      <Events />
    </main>
  );
};

export default Page;
