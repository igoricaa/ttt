'use client';

import Logo from './logo';
import { useEffect, useState } from 'react';
import { Link } from 'next-view-transitions';
import { usePathname } from '@/i18n/routing';
import { useTheme } from 'next-themes';

const pageColors: Record<string, { light: string; dark: string }> = {
  '/': { light: '#fff', dark: '#fff' },
  '/about-us': { light: '#4A4B2F', dark: '#9EC93A' },
  '/contact-us': { light: '#4A4B2F', dark: '#9EC93A' },
  '/memberships': { light: '#4A4B2F', dark: '#9EC93A' },
  '/schedule': { light: '#4A4B2F', dark: '#9EC93A' },
  '/programs': { light: '#FFFFFF', dark: '#FFFFFF' },
};

const HeaderLogo = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [color, setColor] = useState('#000');

  useEffect(() => {
    const themeColor =
      theme === 'dark' ? pageColors[pathname].dark : pageColors[pathname].light;
    setColor(themeColor);
  }, [pathname, theme]);

  return (
    <Link href='/'>
      <Logo color={color} className={className} />
    </Link>
  );
};

export default HeaderLogo;
