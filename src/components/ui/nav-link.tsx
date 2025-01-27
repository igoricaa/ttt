'use client';

import { Link } from 'next-view-transitions';
import ArrowIcon from './icons/arrow';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/routing';

const NavLink = ({
  children,
  href,
  variant = 'header',
}: {
  children: React.ReactNode;
  href: string;
  index: number;
  variant?: 'header' | 'mobilemenu';
}) => {
  const locale = useLocale();
  const pathname = usePathname();
  const isActive = pathname === href;

  const localizedHref = href.startsWith(`/${locale}`)
    ? href
    : `/${locale}${href}`;

  return (
    <Link
      href={localizedHref}
      className={cn(
        `group uppercase transition-all duration-300 hover:opacity-100 whitespace-nowrap `,
        variant === 'header' && 'flex items-center gap-x-2 font-medium',
        variant === 'mobilemenu' && `text-xl sm:text-5xl font-bold`,
        variant === 'header' && !isActive && 'opacity-60'
      )}
    >
      {children}
      {variant === 'header' && (
        <ArrowIcon
          className={cn(
            'transition-transform duration-300',
            `group-hover:rotate-0`,
            !isActive && 'rotate-90'
          )}
        />
      )}
    </Link>
  );
};

export default NavLink;
