'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import LightbulbDark from './ui/icons/lightbult-dark';
import LightbulbLight from './ui/icons/lightbult-light';
import LightbulbLightBg from './ui/icons/lighbult-light-bg';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <div className='bg-[#4A4B2F] lg:p-[10px] rounded-full'>
          <LightbulbDark />
        </div>
      ) : (
        <div className='relative flex items-center justify-center translate-x-[10px]'>
          <LightbulbLightBg className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          <LightbulbLight className='z-10' />
        </div>
      )}
    </button>
  );
}
