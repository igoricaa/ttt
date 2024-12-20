'use client';

import { Link } from 'next-view-transitions';
import ArrowIcon from './icons/arrow';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `group uppercase transition-all duration-300 hover:opacity-100 `,
        variant === 'header' &&
          'flex items-center gap-x-2 font-medium',
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
