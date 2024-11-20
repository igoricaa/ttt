import { Link } from 'next-view-transitions';
import LogoTypography from './icons/LogoTypography';

const Footer = () => {
  return (
    <footer className='h-[804px] px-side pt-8 pb-5 bg-black flex flex-col justify-between'>
      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4'>
        <div className='col-span-full sm:col-span-2 flex gap-x-6'>
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
        </div>
        <div className='col-span-full sm:col-start-3 lg:col-start-9 2xl:col-span-3 2xl:col-start-10 sm:pl-4 lg:pl-0 '>
          <Link
            href='/'
            className='w-full h-16 bg-yellow border border-white/40 rounded-[50px] text-2xl text-black uppercase flex items-center justify-center py-2'
          >
            Schedula a Free Tour
          </Link>
          <Link
            href='/'
            className='w-full h-16 border border-white/40 rounded-[50px] text-2xl text-[#6B654B] uppercase flex items-center justify-center py-2 mt-4'
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-4'>
        <LogoTypography className='col-span-full lg:col-span-8 2xl:col-span-6 self-end' />
        <div className='col-span-full lg:col-span-4 2xl:col-span-3 2xl:col-start-10 flex lg:flex-col gap-x-3 gap-y-4 justify-between lg:justify-end'>
          <div className='hidden sm:flex gap-x-4'>
            <Link href='/' className='font-medium uppercase'>
              Instagram
            </Link>
            <Link href='/' className='font-medium uppercase'>
              Facebook
            </Link>
            <Link href='/' className='font-medium uppercase'>
              X
            </Link>
            <Link href='/' className='font-medium uppercase'>
              TikTok
            </Link>
          </div>
          <p className='text-sm sm:text-nowrap'>
            <span className='italic'>Hours</span>:Mo-Fri{' '}
            <span className='italic'>8.00 - 22.00</span>/Sat{' '}
            <span className='italic'>8.00 - 22.00</span>/Sun{' '}
            <span className='italic'>Closed</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
