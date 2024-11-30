import { Link as LinkTransitions } from 'next-view-transitions';
import { LinkProps } from 'next/link';
import ArrowIcon from './icons/arrow';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';

const Link = ({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...props
}: LinkProps & {
  children: React.ReactNode;
  className?: string;
  variant?:
    | 'default'
    | 'dark'
    | 'yellow'
    | 'transparent'
    | 'transparentWhite'
    | 'white';
  size?: 'default' | 'lg';
}) => {
  return (
    <LinkTransitions
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <>
        <ArrowIcon
          color={
            variant === 'transparent'
              ? '#6B654B'
              : variant === 'transparentWhite'
              ? '#fff'
              : variant === 'yellow'
              ? '#000'
              : variant === 'white'
              ? '#30321C'
              : '#fff'
          }
          className='relative z-10'
        />
        <span className='relative z-10'>{children}</span>
      </>
    </LinkTransitions>
  );
};

export default Link;
