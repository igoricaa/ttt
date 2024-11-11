'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import SideArea from './side-area';
const Burger = () => {
  const isMobile = useMediaQuery('(max-width: 991px)');

  return <>{isMobile ? <div>Burger</div> : <SideArea />}</>;
};

export default Burger;
