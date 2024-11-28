import Benefits from '@/components/benefits';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Link from '@/components/ui/link-button';
import { memberships } from '@/data/data';
import { Membership } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Page = () => {
  return (
    <main className='pt-[72px] sm:pt-28 lg:pt-44'>
      <section className='w-[calc(100vw-2*var(--padding-side))] mx-auto '>
        <div className='relative aspect-[286/159] sm:aspect-[674/375] lg:aspect-[1824/421] flex flex-col justify-end pb-4'>
          <Image
            src='/memberships-bg.png'
            alt='Thunder TopTeam memberships'
            fill
            priority
            className='object-cover rounded-[224px] -z-10'
          />
          <h1 className='text-3xl sm:text-8xl lg:text-9xl font-bold uppercase'>
            Memberships
          </h1>
          <p className='hidden lg:block text-2xl text-end uppercase self-end'>
            At TTT, fighters of all levels come together to push their
            <br />
            limits, refine their skills, and build the mental strength.
          </p>
        </div>

        <p className='lg:hidden sm:text-2xl text-end uppercase self-end mt-8 sm:mt-4'>
          At TTT, fighters of all levels come together to push their
          <br />
          limits, refine their skills, and build the mental strength.
        </p>
        <Link href='/contact-us' variant='dark' className='mt-6 ml-auto flex'>
          Contact Us
        </Link>
      </section>

      <section className='mt-16 lg:mt-44 px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-8'>
        {memberships.map((membership: Membership, index: number) => (
          <MembershipCard key={index} {...membership} index={index} />
        ))}
      </section>

      <Benefits />

      <InfiniteSlider />
    </main>
  );
};

export default Page;

const MembershipCard = ({
  title,
  description,
  image,
  index,
}: Membership & { index: number }) => {
  const isMain = index === 1;
  const isLeft = index === 0;
  const isRight = index === 2;

  return (
    <article
      className={cn(
        'flex flex-col items-center gap-y-6 sm:gap-y-8 col-span-full sm:col-span-5 lg:col-span-4 rounded-t-[529px] px-12 pb-16 sm:pb-[86px] lg:pb-32',
        isMain ? 'sm:col-start-2 lg:col-start-5 bg-green' : 'bg-green/20',
        isLeft && 'rounded-bl-[529px]',
        isRight && 'rounded-br-[529px]'
      )}
    >
      <div
        className={cn(
          'relative aspect-[275/307] w-32',
          isMain ? 'sm:w-[337px]' : 'sm:w-[275px]'
        )}
      >
        <Image src={image} alt={title} fill priority className='object-cover' />
      </div>
      <h3 className='text-3xl sm:text-6xl font-semibold uppercase'>{title}</h3>
      <ul className='text-center'>
        {description.map((descriptionItem, index) => (
          <li key={index} className='sm:text-xl list-disc w-fit mx-auto'>
            {descriptionItem}
          </li>
        ))}
      </ul>
      <Link
        href='/contact-us'
        variant='white'
        size='lg'
        className='h-14 px-6 py-4 mt-auto'
      >
        Priključi se
      </Link>
    </article>
  );
};
