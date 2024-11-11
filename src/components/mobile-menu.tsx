'use client';

import { routes } from '@/data/data';
import MenuItem from './menu-item';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsSubmenuOpen(false);
  };

  return (
    <>
      {/* TODO:extract to separate component, reuse in sidearea */}
      <button
        onClick={handleClick}
        className='p-2 hover:opacity-70 transition-opacity absolute top-1/2 -translate-y-[50%] right-10 z-50 '
      >
        <div className='w-8 h-8 md:w-10 md:h-10 lg:w-6 lg:h-6 flex flex-col justify-center lg:gap-[6px] md:gap-[10px] gap-2'>
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isOpen
                ? 'rotate-45 translate-y-[10px] md:translate-y-3 lg:translate-y-2'
                : ''
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 ${
              isOpen ? 'scale-0' : 'scale-100'
            }`}
          />
          <span
            className={`block w-full h-[2px] bg-current transition-transform duration-300 origin-center ${
              isOpen
                ? '-rotate-45 -translate-y-[10px] md:-translate-y-3 lg:-translate-y-2'
                : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`absolute top-0 left-0 w-[100vw] h-[100vh] bg-background transition-all duration-700 ${
          isOpen
            ? 'translate-x-0 opacity-100 visible'
            : 'translate-x-full opacity-0 invisible'
        }`}
      >
        <div className='w-full h-full pt-32 md:pt-48 px-4 md:px-8'>
          <ul className={`transition-all duration-500 ease-in-out`}>
            {routes.map((route, index: number) => (
              <MenuItem
                key={route.path}
                isVisible={isOpen}
                index={index}
                isSubmenuOpen={isSubmenuOpen}
                setIsSubmenuOpen={setIsSubmenuOpen}
                variant='mobilemenu'
                onClick={handleClick}
                {...route}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
