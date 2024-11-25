'use client';

import { Link } from 'next-view-transitions';
import ArrowIcon from './icons/arrow';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavLink = ({
  children,
  href,
  index,
}: {
  children: React.ReactNode;
  href: string;
  index: number;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        `group flex items-center gap-2 uppercase font-medium transition-all duration-300 hover:opacity-100 hover:blur-0`,
        !isActive && 'opacity-60 blur-[1px]'
      )}
    >
      {children}
      <ArrowIcon
        className={cn(
          'transition-transform duration-300',
          `group-hover:rotate-0`,
          !isActive && 'rotate-90'
        )}
      />
    </Link>
  );
};

export default NavLink;
