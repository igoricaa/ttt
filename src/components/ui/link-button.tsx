import { Link as LinkTransitions } from 'next-view-transitions';
import { LinkProps } from 'next/link';
import ArrowIcon from './icons/arrow';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';

const Link = ({
  children,
  className,
  variant = 'default',
  ...props
}: LinkProps & {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
}) => {
  return (
    <LinkTransitions
      {...props}
      className={cn(buttonVariants({ variant }), className)}
    >
      <>
        <ArrowIcon className='w-5 h-5' />
        {children}
      </>
    </LinkTransitions>
  );
};

export default Link;
