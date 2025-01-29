import ContactForm from '@/components/contact-form';
import GoogleMap from '@/components/google-map';
import ClockIcon from '@/components/icons/clock-icon';
import LocationIconFilled from '@/components/icons/location-icon-filled';
import MailIcon from '@/components/icons/mail-icon';
import PhoneIcon from '@/components/icons/phone-icon';
import Image from 'next/image';
import header from '@/../public/thunder-top-team-header.jpg';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const t = await getTranslations('contactUs');
  const { locale } = await params;

  setRequestLocale(locale);

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
          <p className='hidden lg:block text-2xl text-end uppercase self-end max-w-[60ch]'>
            {t('description')}
          </p>
        </div>

        <p className='lg:hidden sm:text-2xl text-end uppercase self-end mt-8 sm:mt-4 max-w-[60ch]'>
          {t('description')}
        </p>
      </section>

      <section className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-12 sm:gap-y-16 px-side mt-16 lg:mt-32 pb-4 sm:pb-16'>
        <div className='col-span-full lg:col-span-4 lg:col-start-2 flex flex-col justify-between lg:h-[calc(100%-80px)]'>
          <div>
            <h2 className='text-3xl sm:text-6xl lg:text-7xl font-semibold uppercase'>
              {t('reachOut')}
            </h2>
            <p className='mt-6 sm:mt-8'>{t('text')}</p>
            <p className='mt-6 text-sm font-medium uppercase underline'>
              {t('info')}
            </p>
          </div>

          {/* <div className='hidden lg:block'>
            <div className='flex gap-x-4'>
              {socials.map((social: Social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className='font-medium uppercase'
                >
                  {social.name}
                </a>
              ))}
            </div>
            <p className='mt-4 text-sm font-semibold'>
              Working Hours: Mo-Fri 8.00 - 23.00 / Sat 8.00 - 23.00 / Sun Closed
            </p>
            <a
              href='https://maps.app.goo.gl/Xq4mPuXJsZ7kgEye9'
              className='flex items-center gap-x-4 mt-4'
            >
              Palmira Toljatija 5, Beograd{' '}
              <span className='flex items-center gap-x-2'>
                View on map <LocationIconFilled color='#4A4B2F' />
              </span>
            </a>
          </div> */}
        </div>
        <div className='col-span-full lg:col-span-6 lg:col-start-7'>
          <ContactForm />
        </div>
      </section>

      <section className='px-side pt-4 sm:pt-8 lg:py-12 pb-20 sm:pb-16 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-8 lg:gap-y-0 bg-primary-dark'>
        <div className='col-span-full lg:col-span-8 aspect-[287/325] sm:aspect-[674/763] lg:aspect-[1208/763]'>
          <GoogleMap />
        </div>
        <div className='col-span-full lg:col-span-4 flex flex-col justify-between'>
          <div>
            <span className='font-medium'>{t('mapSection.subtitle')}</span>
            <h3 className='text-5xl font-semibold uppercase'>
              Thunder Top Team
            </h3>
          </div>
          <div className='flex flex-col gap-y-4 mt-32'>
            <p className='flex gap-x-2 w-fit'>
              <LocationIconFilled color='#FCFC62' />
              Palmira Toljatija 5, Beograd
            </p>
            <p className='flex gap-x-2 w-fit'>
              <ClockIcon /> {t('mapSection.workingHours')}
            </p>
            <a href='tel:+381668117934' className='flex gap-x-2 w-fit'>
              <PhoneIcon /> +381 66 811 79 34
            </a>
            <a
              href='mailto:info@thundertopteam.com'
              className='flex gap-x-2 w-fit'
            >
              <MailIcon /> info@thundertopteam.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
