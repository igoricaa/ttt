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
  variant?: 'default' | 'dark' | 'yellow' | 'transparent' | 'white';
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
              : variant === 'yellow'
              ? '#000'
              : variant === 'white'
              ? '#30321C'
              : '#fff'
          }
        />
        {children}
      </>
    </LinkTransitions>
  );
};

export default Link;
