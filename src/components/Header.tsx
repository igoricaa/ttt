import { routes } from '@/data/data';
import { Route } from '@/lib/types';
import NavLink from './ui/nav-link';
import MobileNav from './mobile-menu';
import HeaderLogo from './ui/logos/header-logo';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full lg:top-5 z-50 flex items-center justify-between sm:justify-end lg:block px-side pt-6 sm:pt-10 lg:pt-0'>
      <div className='lg:hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2'>
        <HeaderLogo className='h-[38px] w-[34px] sm:h-[60px] sm:w-[53.5px]' />
      </div>
      <div className='hidden lg:flex items-center justify-center gap-16'>
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
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
