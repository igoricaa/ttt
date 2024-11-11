'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';

const SideArea = () => {
  const [showCopyBanner, setShowCopyBanner] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@granddental.rs');
    setShowCopyBanner(true);
    setTimeout(() => setShowCopyBanner(false), 2000);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className='p-2 hover:opacity-70 transition-opacity absolute right-10 top-1/2 -translate-y-[50%] z-50'
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
        className={`fixed top-0 right-0 w-full h-full bg-black transition-[opacity, visibility] duration-1000 z-[24] ${
          isOpen ? 'opacity-50 block' : 'opacity-0 invisible'
        }`}
        onClick={handleClick}
      />

      <div
        style={{
          transitionProperty: 'transform, opacity, visibility, filter',
          transitionDuration: '700ms, 500ms, 700ms, 500ms',
        }}
        className={`fixed top-0 right-0 z-[25] bg-background max-w-[537px] w-full h-screen transition-all ease-in-out p-[10vh_4rem_2rem] ${
          isOpen
            ? 'opacity-100 visible translate-x-0 blur-0'
            : 'opacity-0 invisible translate-x-full blur-[2px]'
        }`}
      >
        <Link href='/' className='block w-36'>
          {/* <Image src={logo} alt='Grand Dental Logo' width={144} height={144} /> */}
        </Link>

        <ThemeSwitcher />

        <h4 className='mt-8 font-bold text-xl'>Kontakt</h4>
        <div className='relative w-fit'>
          <p
            className='mt-4 cursor-pointer hover:opacity-80'
            onClick={handleCopyEmail}
          >
            info@granddental.rs
          </p>
          {showCopyBanner && (
            <div className='absolute -right-4 -top-8 bg-accent-default px-2 py-1 text-sm rounded'>
              Copied!
            </div>
          )}
        </div>

        <div className='mt-4 flex flex-col gap-4'>
          <a href='tel:00381616589540'>+381 61 6589540</a>
          <Link
            href='https://maps.app.goo.gl/oaGSsDv5sXSLcgjx5'
            target='_blank'
          >
            Loznička 13, Beograd
          </Link>
          <Link
            href='https://www.instagram.com/grand_dentaltourism/'
            target='_blank'
            className='font-bold bg-accent-default w-fit px-2 py-1'
          >
            Instagram
          </Link>
        </div>

        <div className='mt-8 aspect-video w-full bg-gray-200'>
          {/* Add your Google Maps component here */}
        </div>
      </div>
    </>
  );
};

export default SideArea;
