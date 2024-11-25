import { Link } from 'next-view-transitions';
import Logo from './ui/logo';
import Burger from './Burger';
import { routes } from '@/data/data';
import Image from 'next/image';
import { Route } from '@/lib/types';
import ArrowIcon from './ui/icons/arrow';
import NavLink from './ui/nav-link';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full lg:top-5 z-50'>
      <div className='lg:hidden ml-10 w-16 h-16 md:w-20 md:h-20'>
        {/* <Image src='/images/header-bg.png' alt='header-bg' fill /> */}
        Logo Mobile
      </div>
      <div className='hidden lg:flex items-center justify-center gap-16'>
        <nav className='flex items-center gap-16'>
          {routes.slice(0, 3).map((route: Route, index: number) => (
            <NavLink key={route.path} href={route.path} index={index}>
              {route.label}
            </NavLink>
          ))}
        </nav>

        <Logo />

        <nav className='flex items-center gap-16'>
          {routes.slice(-3).map((route: Route, index: number) => (
            <NavLink key={route.path} href={route.path} index={index}>
              {route.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* <Burger /> */}
    </header>
  );
};

export default Header;



