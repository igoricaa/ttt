import { Link } from 'next-view-transitions';
import LinkButton from '@/components/ui/link-button';
import LogoTypography from './icons/LogoTypography';
import { routes } from '@/data/data';
import { Route } from '@/lib/types';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const navT = useTranslations('menu.nav');
  const footerT = useTranslations('footer');

  return (
    <footer className='sm:h-[804px] px-side pt-6 sm:pt-9 pb-5 bg-footerBackground flex flex-col justify-between overflow-hidden'>
      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-14 sm:gap-y-0'>
        <div className='order-2 sm:order-1 col-span-full sm:col-span-2 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-6 group'>
          <ul className='flex flex-col gap-y-4'>
            {routes.slice(0, 3).map((route: Route) => (
              <li
                key={route.path}
                className='w-fit opacity-100 transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100'
              >
                <Link
                  href={route.path}
                  className='font-medium uppercase whitespace-nowrap'
                >
                  {navT(`${route.slug}`)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex flex-col gap-y-4'>
            {routes.slice(3).map((route: Route) => (
              <li
                key={route.path}
                className='w-fit opacity-100 transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100'
              >
                <Link
                  href={route.path}
                  className='font-medium uppercase whitespace-nowrap'
                >
                  {navT(`${route.slug}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='order-1 sm:order-2 col-span-full sm:col-start-3 lg:col-start-9 2xl:col-span-4 2xl:col-start-9 3xl:col-span-3 3xl:col-start-10 sm:pl-4 lg:pl-0 flex flex-col items-end '>
          <LinkButton
            href='/contact-us'
            variant='yellow'
            size='lg'
            className='w-full max-w-[444px]'
          >
            {footerT('ctaButton')}
          </LinkButton>
          <LinkButton
            href='/contact-us'
            variant='transparent'
            size='lg'
            className='w-full max-w-[444px] mt-4'
          >
            {footerT('contactUs')}
          </LinkButton>
        </div>
      </div>

      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-9 sm:gap-y-4'>
        <ul className='flex flex-col sm:hidden mt-20 gap-y-4'>
          <li className='w-fit'>
            <a
              href='https://www.instagram.com/thunder_top_team/'
              target='_blank'
              className='font-medium uppercase'
            >
              Instagram
            </a>
          </li>
          <li className='w-fit'>
            <a
              href='https://www.facebook.com/thundertopteambelgrade'
              target='_blank'
              className='font-medium uppercase'
            >
              Facebook
            </a>
          </li>
        </ul>
        <Link
          href='/'
          className='col-span-full lg:col-span-8 2xl:col-span-6 self-end'
        >
          <LogoTypography />
        </Link>
        <div className='col-span-full lg:col-span-4 2xl:col-span-4 2xl:col-start-9 3xl:col-span-3 3xl:col-start-10 flex lg:flex-col gap-x-3 gap-y-4 justify-between lg:justify-end items-end'>
          <ul className='hidden sm:flex gap-x-4'>
            <li className='w-fit'>
              <a
                href='https://www.instagram.com/thunder_top_team/'
                target='_blank'
                className='font-medium uppercase'
              >
                Instagram
              </a>
            </li>
            <li className='w-fit'>
              <a
                href='https://www.facebook.com/thundertopteambelgrade'
                target='_blank'
                className='font-medium uppercase'
              >
                Facebook
              </a>
            </li>
          </ul>
          <p
            className='text-sm sm:text-nowrap'
            dangerouslySetInnerHTML={{ __html: footerT.raw('workingHours') }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
