import Events from '@/components/home/Events';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import JoinNow from '@/components/home/JoinNow';
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
    <main>
      <Hero />
      <OurStory />
      <Highlights />
      {/* <BreakSection />*/}
      <Events />
    </main>
  );
};

export default Page;
