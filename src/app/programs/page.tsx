import Programs from '@/components/programs/programs';
import Link from '@/components/ui/link-button';

const Page = () => {
  return (
    <main className='lg:h-screen flex flex-col justify-center relative px-side pb-16 lg:pb-10'>
      <Programs />

      <Link
        href='/contact-us'
        variant='transparentWhite'
        className='mt-8 sm:mt-12 lg:mt-auto w-full'
        //mt-8 sm:mt-12 lg:mt-20
      >
        Book a free session
      </Link>
    </main>
  );
};

export default Page;
