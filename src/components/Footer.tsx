import { Link } from 'next-view-transitions';
import LogoTypography from './icons/LogoTypography';

const Footer = () => {
  return (
    <footer className='px-side pt-9 pb-14 bg-black'>
      <p>
        Working <span className='italic'>Hours</span>: Mo-Fri{' '}
        <span className='italic'>8.00 - 22.00</span> / Sat{' '}
        <span className='italic'>8.00 - 22.00</span> / Sun{' '}
        <span className='italic'>Closed</span>
      </p>
      <div className='grid grid-cols-12 gap-x-4 mt-7'>
        <LogoTypography className='col-span-9' />
        <div className='col-span-3'>
          <Link
            href='/'
            className='w-full h-16 border border-white/40 rounded-[50px] text-2xl text-[#6B654B] uppercase flex items-center justify-center py-2'
          >
            Schedula a Free Tour
          </Link>
          <Link
            href='/'
            className='w-full h-16 border border-white/40 rounded-[50px] text-2xl text-[#6B654B] uppercase flex items-center justify-center py-2 mt-4'
          >
            Contact Us
          </Link>

          <div className='grid grid-cols-4 gap-x-4 mt-11'>
            <div className='flex flex-col gap-y-4'>
              <Link href='/' className='font-medium uppercase'>
                Home
              </Link>
              <Link href='/' className='font-medium uppercase'>
                About Us
              </Link>
              <Link href='/' className='font-medium uppercase'>
                Home
              </Link>
            </div>
            <div className='flex flex-col gap-y-4'>
              <Link href='/' className='font-medium uppercase'>
                Schedule
              </Link>
              <Link href='/' className='font-medium uppercase'>
                Members
              </Link>
              <Link href='/' className='font-medium uppercase'>
                Programs
              </Link>
            </div>
            <div className='flex flex-col gap-y-4 justify-end'>
              <Link href='/' className='font-medium uppercase'>
                Instagram
              </Link>
              <Link href='/' className='font-medium uppercase'>
                Facebook
              </Link>
            </div>
            <div className='flex flex-col gap-y-4 justify-end'>
              <Link href='/' className='font-medium uppercase'>
                X
              </Link>
              <Link href='/' className='font-medium uppercase'>
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
