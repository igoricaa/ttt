import AnimatedText from '@/components/home/AnimatedText';
import Calendar from '@/components/home/Calendar';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Highlights';
import JoinNow from '@/components/home/JoinNow';
import OurStory from '@/components/home/OurStory';
// import { useTranslations } from 'next-intl';
// import { setRequestLocale } from 'next-intl/server';

// type Params = Promise<{ params: { locale: string } }>;

// { params }: { params: Params }
const Home = async () => {
  // const {
  //   params: { locale },
  // } = await params;

  // setRequestLocale(locale);

  // const t = useTranslations('HomePage');

  return (
    <main>
      {/* <h1>{t('title')}</h1> */}
      <Hero />
      <AnimatedText />
      <Calendar />
      <Benefits />
      <JoinNow />
      <OurStory />
    </main>
  );
};

export default Home;
