import { Link as TransitionLink } from 'next-view-transitions';
import { LinkProps } from 'next/link';
import ArrowIcon from './icons/arrow';
import { buttonVariants } from './button';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

const Link = ({
  children,
  style,
  className,
  variant = 'default',
  size = 'default',
  href,
  ...props
}: LinkProps & {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  variant?:
    | 'default'
    | 'dark'
    | 'yellow'
    | 'transparent'
    | 'transparentWhite'
    | 'white';
  size?: 'default' | 'lg';
  href: string;
}) => {
  const locale = useLocale();

  const localizedHref = href.startsWith(`/${locale}`)
    ? href
    : `/${locale}${href}`;

  return (
    <TransitionLink
      href={localizedHref}
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
      style={style}
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
    </TransitionLink>
  );
};

export default Link;

// import { Link as TransitionLink } from 'next-view-transitions';
// import { useLocale } from 'next-intl';

// const Link = ({ href, children, ...rest }) => {
//   const locale = useLocale();
//   href = href.startsWith(`${locale}`) ? href : `/${locale}${href}`;
//   return (
//     <TransitionLink href={href} {...rest}>
//       {children}
//     </TransitionLink>
//   );
// };

// const Link = ({ href, children, ...rest }: LinkProps) => {
//   const locale = useLocale();

//   // Prefix href with locale if not already prefixed
//   const localizedHref = href.startsWith(`/${locale}`)
//     ? href
//     : `/${locale}${href}`;

//   return (
//     <TransitionLink href={localizedHref} {...rest}>
//       {children}
//     </TransitionLink>
//   );
// };
