import { Link } from 'next-view-transitions';
import Logo from './ui/logo';
import Burger from './Burger';
import { Route, routes } from '@/data/data';

const Header = () => {
  return (
    <header>
      <div className=''>
        <Logo />

        <nav>
          {routes.map((route: Route) => (
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
