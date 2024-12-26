'use client';

import { routes } from '@/data/data';
import { Route } from '@/lib/types';
import NavLink from './ui/nav-link';
import MobileNav from './mobile-menu';
import HeaderLogo from './ui/logos/header-logo';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ThemeSwitcher from './theme-switcher';
import LocaleSwitcher from './locale/locale-switcher';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleStickyHeader = () => {
    if (typeof window === 'undefined') return;

    const currentScrollY = window.scrollY;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    const timeoutId = setTimeout(() => {
      setIsHidden(false);
    }, 100);

    setScrollTimeout(timeoutId);

    if (
      currentScrollY !== lastScrollY &&
      (currentScrollY - lastScrollY > 2 || lastScrollY - currentScrollY > 2) &&
      currentScrollY > 150
    ) {
      setIsHidden(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    setMounted(true);

    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('scroll', handleStickyHeader);

    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={cn(
        'sticky top-0 left-0 w-full lg:top-5 z-50 flex items-center justify-between sm:justify-end lg:block px-side pt-4 sm:pt-10 lg:pt-0 transition-all duration-200',
        isHidden && 'opacity-0 invisible'
      )}
    >
      <div className='lg:hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2'>
        <HeaderLogo className='h-[38px] w-[34px] sm:h-[60px] sm:w-[53.5px]' />
      </div>
      <div className='relative hidden lg:flex items-center justify-center gap-16'>
        <div className='hidden absolute top-1/2 -translate-y-1/2 left-0 lg:block'>
          <ThemeSwitcher />
        </div>

        <nav className='flex items-center gap-16 w-[475px] justify-end'>
          {routes.slice(0, 3).map((route: Route, index: number) => (
            <NavLink key={route.path} href={route.path} index={index}>
              {route.label}
            </NavLink>
          ))}
        </nav>

        <HeaderLogo />

        <nav className='flex items-center gap-16 w-[475px]'>
          {routes.slice(-3).map((route: Route, index: number) => (
            <NavLink key={route.path} href={route.path} index={index}>
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className='hidden absolute top-1/2 -translate-y-1/2 right-0 lg:block'>
          <LocaleSwitcher />
        </div>
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
