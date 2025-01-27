import Benefits from '@/components/benefits';
import { JoinUsSlider } from '@/components/ui/join-us-slider';
import Link from '@/components/ui/link-button';
import { benefits, memberships } from '@/data/data';
import { Membership } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import header from '@/../public/thunder-top-team-header.jpg';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('memberships');

  const benefitsFull = benefits.map((benefit) => ({
    ...benefit,
    title: t(`benefits.${benefit.slug}.title`),
    description: t(`benefits.${benefit.slug}.description`),
    subtitle: t(`benefits.${benefit.slug}.subtitle`),
  }));

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
          <p className='hidden lg:block text-2xl text-end uppercase self-end text-balance max-w-[60ch]'>
            {t('description')}
          </p>
        </div>

        <p className='lg:hidden sm:text-2xl text-end uppercase self-end mt-8 sm:mt-4 max-w-[60ch]'>
          {t('description')}
        </p>
        <Link href='/contact-us' variant='dark' className='mt-6 ml-auto flex'>
          {t('buttonText')}
        </Link>
      </section>

      <section className='mt-16 lg:mt-44 px-side grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-8'>
        {memberships.map((membership: Membership, index: number) => (
          <MembershipCard key={index} {...membership} index={index} />
        ))}
      </section>

      <Benefits benefits={benefitsFull} />

      <JoinUsSlider />
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
        isMain
          ? 'sm:col-start-2 lg:col-start-5 bg-green-default'
          : 'bg-green-default/20',
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
        <Image
          src={image}
          alt={title}
          fill
          sizes={`(max-width: 680px) 128px, ${isMain ? '337px' : '275px'}`}
          priority
          className='object-cover'
        />
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
