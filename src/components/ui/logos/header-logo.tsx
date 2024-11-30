'use client';

import { usePathname } from 'next/navigation';
import Logo from './logo';
import { useEffect, useState } from 'react';

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

  return <Logo color={color} className={className} />;
};

export default HeaderLogo;
