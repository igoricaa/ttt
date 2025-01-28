import Benefits from '@/components/benefits';
import { JoinUsSlider } from '@/components/ui/join-us-slider';
import Link from '@/components/ui/link-button';
import { benefits, memberships } from '@/data/data';
import Image from 'next/image';
import header from '@/../public/thunder-top-team-header.jpg';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type MembershipProps = {
  title: string;
  subtitle: string;
  includesText: {
    title: string;
    description: string[];
  };
  prices: {
    title: string;
    packages: {
      title: string;
      description: string;
    }[];
  };
  discountsText: {
    title: string;
    description: JSX.Element;
  };
  examplesText: {
    title: string;
    examples: {
      title: string;
      description: JSX.Element;
    }[];
  };
  additionalOption: {
    title: string;
    description: JSX.Element;
  } | null;
  hightlightText: string;
};

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

      <section className='mt-16 lg:mt-44 px-side w-full 2xl:w-10/12 mx-auto gap-y-8'>
        <Accordion type='single' collapsible>
          {memberships.map((membership, index: number) => {
            const membershipData = getMembershipData(membership.slug, t);

            return (
              <PackageCard
                key={membership.slug + index}
                {...membershipData}
                buttonText={t('buttonText')}
                index={index}
              />
            );
          })}
        </Accordion>
      </section>

      <Benefits benefits={benefitsFull} />

      <JoinUsSlider />
    </main>
  );
};

export default Page;

const PackageCard = ({
  title,
  subtitle,
  includesText,
  prices,
  buttonText,
  examplesText,
  discountsText,
  additionalOption,
  hightlightText,
  index,
}: MembershipProps & { index: number; buttonText: string }) => {
  return (
    <AccordionItem value={`item-${index}`} className='border-b-2'>
      <AccordionTrigger buttonText={buttonText}>
        <div>
          <h3 className='text-3xl sm:text-5xl lg:text-7xl font-semibold uppercase text-start'>
            {title}
          </h3>
          <p className='text-start'>{subtitle}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 mt-2'>
          <div>
            <h4 className='text-2xl sm:text-3xl font-semibold'>
              {includesText.title}
            </h4>
            <ul className='list-disc pl-7 mt-2 sm:mt-4'>
              {includesText.description
                .filter((description) => description)
                .map((description, index) => (
                  <li key={index} className='text-lg sm:text-xl'>
                    {description}
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className='text-2xl sm:text-3xl font-semibold'>
              {prices.title}
            </h4>
            <ul className='list-disc pl-7 mt-2 sm:mt-4'>
              {prices.packages
                .filter((packageSingle) => packageSingle)
                .map((packageSingle, index) => (
                  <li key={index} className='text-lg sm:text-xl'>
                    {packageSingle.title} :{' '}
                    <span className='font-bold'>
                      {packageSingle.description}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className='text-2xl sm:text-3xl font-semibold'>
              {discountsText.title}
            </h4>
            <p
              className='mt-2 sm:mt-4 membershipHightlightedText text-lg sm:text-xl'
              dangerouslySetInnerHTML={{ __html: discountsText.description }}
            />
          </div>
          <div>
            <h4 className='text-2xl sm:text-3xl font-semibold'>
              {examplesText.title}
            </h4>
            <ul className='list-disc pl-7 mt-2 sm:mt-4'>
              {examplesText.examples
                .filter((example) => example)
                .map((example, index) => (
                  <li key={index} className='text-lg sm:text-xl'>
                    {example.title} :{' '}
                    <span
                      className='membershipsLists text-xl'
                      dangerouslySetInnerHTML={{
                        __html: example.description,
                      }}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {additionalOption && (
          <div className='mt-10 sm:mt-12 lg:mt-6'>
            <h4 className='text-2xl lg:text-3xl uppercase font-semibold'>
              {additionalOption.title}
            </h4>
            <p
              className='mt-2 sm:mt-4 membershipHightlightedText text-lg sm:text-xl'
              dangerouslySetInnerHTML={{
                __html: additionalOption.description,
              }}
            />
          </div>
        )}
        {hightlightText && (
          <div className='flex gap-1 bg-white/80 rounded-3xl px-4 sm:px-6 lg:px-8 py-2 overflow-hidden mt-6'>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-primary-dark whitespace-nowrap'>
              {hightlightText}
            </p>
            <p className='text-background whitespace-nowrap'>
              {hightlightText}
            </p>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

const getMembershipData = (slug: string, t: any): MembershipProps => {
  const membershipData = {
    title: t(`packages.${slug}.title`),
    subtitle: t(`packages.${slug}.subtitle`),
    includesText: {
      title: t(`packages.${slug}.includesText.title`),
      description: [
        t.has(`packages.${slug}.includesText.description.ptOne`) &&
          t(`packages.${slug}.includesText.description.ptOne`),
        t.has(`packages.${slug}.includesText.description.ptTwo`)
          ? t(`packages.${slug}.includesText.description.ptTwo`)
          : '',
        t.has(`packages.${slug}.includesText.description.ptThree`)
          ? t(`packages.${slug}.includesText.description.ptThree`)
          : '',
      ],
    },
    prices: {
      title: t(`packages.${slug}.prices.title`),
      packages: [
        t.has(`packages.${slug}.prices.threeX`) && {
          title: t(`packages.${slug}.prices.threeX.title`),
          description: t(`packages.${slug}.prices.threeX.description`),
        },
        t.has(`packages.${slug}.prices.unlimitedMonthly`) && {
          title: t(`packages.${slug}.prices.unlimitedMonthly.title`),
          description: t(
            `packages.${slug}.prices.unlimitedMonthly.description`
          ),
        },
        t.has(`packages.${slug}.prices.unlimitedYearly`) && {
          title: t(`packages.${slug}.prices.unlimitedYearly.title`),
          description: t(`packages.${slug}.prices.unlimitedYearly.description`),
        },
        t.has(`packages.${slug}.prices.kiddos`) && {
          title: t(`packages.${slug}.prices.kiddos.title`),
          description: t(`packages.${slug}.prices.kiddos.description`),
        },
        t.has(`packages.${slug}.prices.teens`) && {
          title: t(`packages.${slug}.prices.teens.title`),
          description: t(`packages.${slug}.prices.teens.description`),
        },
      ],
    },
    discountsText: {
      title: t(`packages.${slug}.discountsText.title`),
      description: t.raw(`packages.${slug}.discountsText.description`),
    },
    examplesText: {
      title: t(`packages.${slug}.examplesText.title`),
      examples: [
        t.has(`packages.${slug}.examplesText.threeX`) && {
          title: t(`packages.${slug}.examplesText.threeX.title`),
          description: t.raw(
            `packages.${slug}.examplesText.threeX.description`
          ),
        },
        t.has(`packages.${slug}.examplesText.unlimitedMonthly`) && {
          title: t(`packages.${slug}.examplesText.unlimitedMonthly.title`),
          description: t.raw(
            `packages.${slug}.examplesText.unlimitedMonthly.description`
          ),
        },
        t.has(`packages.${slug}.examplesText.promo`) && {
          title: t(`packages.${slug}.examplesText.title`),
          description: t.raw(`packages.${slug}.examplesText.promo`),
        },
      ],
    },

    additionalOption: t.has(`packages.${slug}.additionalOption`)
      ? {
          title: t(`packages.${slug}.additionalOption.title`),
          description: t.raw(`packages.${slug}.additionalOption.description`),
        }
      : null,
    hightlightText: t.has(`packages.${slug}.hightlightText`)
      ? t(`packages.${slug}.hightlightText`)
      : '',
  };

  return membershipData;
};
