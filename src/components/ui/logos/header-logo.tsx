'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo';
import { useEffect, useState } from 'react';
import { Link } from 'next-view-transitions';

const pageColors: Record<string, string> = {
  '/': '#fff',
  '/about-us': '#4A4B2F',
  '/contact-us': '#4A4B2F',
  '/memberships': '#4A4B2F',
  '/programs': '#FFFFFF',
};

const HeaderLogo = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [color, setColor] = useState('#000');

  useEffect(() => {
    setColor(pageColors[pathname]);
  }, [pathname]);

  return (
    <Link href='/'>
      <Logo color={color} className={className} />
    </Link>
  );
};

export default HeaderLogo;
