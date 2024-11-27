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
  variant?: 'default' | 'dark' | 'yellow' | 'transparent';
  size?: 'default' | 'lg';
}) => {
  return (
    <LinkTransitions
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      <>
        <ArrowIcon
          className='w-5 h-5'
          color={
            variant === 'transparent' ? '#6B654B' : variant === 'yellow' ? '#000' : '#fff'
          }
        />
        {children}
      </>
    </LinkTransitions>
  );
};

export default Link;
