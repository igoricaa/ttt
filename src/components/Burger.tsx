'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import SideArea from './side-area';
import MobileMenu from './mobile-menu';
const Burger = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return <>{isMobile ? <MobileMenu /> : <SideArea />}</>;
};

export default Burger;
