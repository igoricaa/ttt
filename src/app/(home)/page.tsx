import AnimatedText from '@/components/home/AnimatedText';
import Calendar from '@/components/home/Calendar';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Highlights';
import JoinNow from '@/components/home/JoinNow';
import OurStory from '@/components/home/OurStory';

export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedText />
      <Calendar />
      <Benefits />
      <JoinNow />
      <OurStory />
    </main>
  );
}
