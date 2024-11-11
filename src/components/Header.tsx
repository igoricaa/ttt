import { Link } from 'next-view-transitions';
import Logo from './ui/logo';
import Burger from './Burger';
import { Route, routes } from '@/data/data';

const Header = () => {
  return (
    <header className='relative mt-5'>
      <div className='flex items-center justify-center gap-16'>
        <nav className='flex items-center gap-16'>
          {routes.slice(0, 3).map((route: Route) => (
            <Link key={route.path} href={route.path}>
              {route.label}
            </Link>
          ))}
        </nav>

        <Logo />

        <nav className='flex items-center gap-16'>
          {routes.slice(-3).map((route: Route) => (
            <Link key={route.path} href={route.path}>
              {route.label}
            </Link>
          ))}
        </nav>
      </div>

      <Burger />
    </header>
  );
};

export default Header;
