import { Link } from 'next-view-transitions';
import LinkButton from '@/components/ui/link-button';
import LogoTypography from './icons/LogoTypography';

const Footer = () => {
  return (
    <footer className='sm:h-[804px] px-side pt-6 sm:pt-9 pb-5 bg-black flex flex-col justify-between'>
      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-14 sm:gap-y-0'>
        <div className='order-2 sm:order-1 col-span-full sm:col-span-2 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-6'>
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
        <div className='order-1 sm:order-2 col-span-full sm:col-start-3 lg:col-start-9 2xl:col-span-4 2xl:col-start-9 3xl:col-span-3 3xl:col-start-10 sm:pl-4 lg:pl-0 flex flex-col items-end '>
          <LinkButton
            href='/'
            variant='yellow'
            size='lg'
            className='w-full max-w-[444px]'
          >
            Schedula a Free Tour
          </LinkButton>
          <LinkButton
            href='/'
            variant='transparent'
            size='lg'
            className='w-full max-w-[444px] mt-4'
          >
            Contact Us
          </LinkButton>
        </div>
      </div>

      <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-4 gap-y-9 sm:gap-y-4'>
        <div className='flex flex-col sm:hidden mt-20 gap-y-4'>
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
        <LogoTypography className='col-span-full lg:col-span-8 2xl:col-span-6 self-end' />
        <div className='col-span-full lg:col-span-4 2xl:col-span-4 2xl:col-start-9 3xl:col-span-3 3xl:col-start-10 flex lg:flex-col gap-x-3 gap-y-4 justify-between lg:justify-end items-end'>
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
