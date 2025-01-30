'use client';

import { routes, socials } from '@/data/data';
import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import Logo from './ui/logos/logo';
import LogoTypography from './ui/logos/logo-typography';
import NavLink from './ui/nav-link';
import { Route, Social } from '@/lib/types';
import LinkButton from './ui/link-button';
import { Link } from 'next-view-transitions';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1025px)');
  const t = useTranslations('menu');

  const toggleMenu = () => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
      document.body.setAttribute('data-lenis-prevent', 'false');
    } else {
      document.body.style.overflow = 'hidden';
      document.body.setAttribute('data-lenis-prevent', 'true');
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && <Burger handleClick={toggleMenu} isOpen={isOpen} />}

      {isMobile && (
        <div
          className={`flex flex-col justify-between lg:hidden z-40 absolute top-0 left-0 w-[100vw] h-[100vh] sm:h-auto pt-24 sm:pt-36 pb-8 sm:pb-10 bg-black transition-all duration-500 will-change-[transform,opacity] ${
            isOpen
              ? 'translate-y-0 opacity-100 visible'
              : '-translate-y-full opacity-0 invisible'
          }`}
        >
          <div className='absolute top-6 left-4 sm:left-8 flex items-center gap-x-2 sm:gap-x-4'>
            <Link href='/' onClick={toggleMenu}>
              <Logo className='h-[47px] w-[42px] sm:h-[62px] sm:w-[55px]' />
            </Link>
            <Link href='/' onClick={toggleMenu}>
              <LogoTypography className='w-[171px] h-[13px] sm:w-[328px] sm:h-6 ' />
            </Link>
          </div>
          <div
            className={`px-side grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-6 transition-all duration-500 ease-in-out`}
          >
            <ul className='flex flex-col gap-y-4 sm:gap-y-6'>
              {routes.slice(0, 3).map((route: Route, index: number) => {
                return (
                  <li
                    key={route.path}
                    style={{
                      transitionDelay: isOpen
                        ? `${300 + (index + 1) * 100}ms`
                        : '0ms',
                    }}
                    className={cn(
                      'w-fit opacity-0 invisible -translate-y-5 transition-all duration-500',
                      isOpen && 'opacity-100 visible translate-y-0 delay-0'
                    )}
                    onClick={toggleMenu}
                  >
                    <NavLink
                      href={route.path}
                      index={index}
                      variant='mobilemenu'
                    >
                      {t(`nav.${route.slug}`)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <ul className='flex flex-col gap-y-4 sm:gap-y-6'>
              {routes.slice(3).map((route: Route, index: number) => {
                return (
                  <li
                    key={route.path}
                    style={{
                      transitionDelay: isOpen
                        ? `${300 + (index + 4) * 100}ms`
                        : '0ms',
                    }}
                    className={cn(
                      'w-fit opacity-0 invisible -translate-y-5 transition-all duration-500',
                      isOpen && 'opacity-100 visible translate-y-0 delay-0'
                    )}
                    onClick={toggleMenu}
                  >
                    <NavLink
                      href={route.path}
                      index={index}
                      variant='mobilemenu'
                    >
                      {t(`nav.${route.slug}`)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='mt-12 sm:mt-32'>
            <div className='flex flex-col sm:flex-row sm:justify-center gap-2 px-side'>
              <div className='flex gap-2'>
                {socials.slice(0, 2).map((social: Social, index: number) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    style={{
                      transitionDelay: isOpen
                        ? `${300 + (index + 7) * 100}ms`
                        : '0ms',
                    }}
                    className={cn(
                      'font-medium uppercase opacity-0 invisible -translate-y-5 transition-all duration-500',
                      isOpen && 'opacity-100 visible translate-y-0 delay-0'
                    )}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
              <div className='flex gap-2'>
                {socials.slice(2).map((social: Social, index: number) => (
                  <a
                    key={index}
                    href={social.url}
                    target='_blank'
                    style={{
                      transitionDelay: isOpen
                        ? `${300 + (index + 8) * 100}ms`
                        : '0ms',
                    }}
                    className={cn(
                      'font-medium uppercase opacity-0 invisible -translate-y-5 transition-all duration-500',
                      isOpen && 'opacity-100 visible translate-y-0 delay-0'
                    )}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            <div
              style={{
                transitionDelay: isOpen ? `${300 + 10 * 100}ms` : '0ms',
              }}
              className={cn(
                'w-full overflow-hidden mt-6 opacity-0 invisible -translate-y-5 transition-all duration-500',
                isOpen && 'opacity-100 visible translate-y-0 delay-0'
              )}
            >
              <div className='flex justify-center items-center gap-x-4 sm:gap-x-6 w-fit animate-slide'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <p
                    key={index}
                    className='font-medium text-2xl sm:text-6xl text-nowrap'
                  >
                    Ultimate Training Destination
                  </p>
                ))}
              </div>
            </div>

            <LinkButton
              href='/contact-us'
              variant='yellow'
              size='lg'
              style={{
                transitionDelay: isOpen ? `${300 + 11 * 100}ms` : '0ms',
              }}
              className={cn(
                'w-[calc(100%-2*var(--padding-side))] mt-6 mx-auto flex opacity-0 invisible -translate-y-5 transition-all duration-500',
                isOpen && 'opacity-100 visible translate-y-0 delay-0'
              )}
            >
              {t('buttonText')}
            </LinkButton>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;

const Burger = ({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <button onClick={handleClick} className='lg:hidden z-50 '>
      <div className='w-8 h-6 flex flex-col justify-center items-end gap-[6px]'>
        <span
          className={`block w-full h-[3px] bg-white transition-all duration-300 origin-center ${
            isOpen ? 'rotate-45 translate-y-[9px] ' : ''
          }`}
        />
        <span
          className={`block w-6 h-[3px] bg-white transition-all duration-300 ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
        />
        <span
          className={`block w-full h-[3px] bg-white transition-all duration-300 origin-center ${
            isOpen ? '-rotate-45 -translate-y-[9px]' : ''
          }`}
        />
      </div>
    </button>
  );
};
