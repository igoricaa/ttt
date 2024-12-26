'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import {
  ChangeEvent,
  ReactNode,
  useEffect,
  useState,
  useTransition,
} from 'react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

const locales = ['en', 'sr', 'ru'];

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function onSelectChange(event: ChangeEvent<HTMLInputElement>, index: number) {
    const nextLocale = event.target.value as Locale;

    setActiveIndex(index);
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  useEffect(() => {
    const index = locales.indexOf(defaultValue);
    setActiveIndex(index);
  }, [defaultValue]);

  function getButtonClasses(
    index: number,
    isSelected: boolean,
    activeIndex: number
  ) {
    return cn(
      'bg-white/20 py-1 px-1',
      index === 0 ? 'pl-3' : index === 2 ? 'pr-3' : '',
      isSelected && 'bg-[#6c6c58]',
      isSelected && [
        index === 0 && 'rounded-tr-2xl',
        index === 1 && 'rounded-t-2xl',
        index === 2 && 'rounded-tl-2xl',
      ],
      activeIndex === 0 && index === 1 && 'rounded-tl-2xl',
      activeIndex === 1 && [
        index === 2 && 'rounded-tl-2xl',
        index === 0 && 'rounded-tr-2xl',
      ],
      activeIndex === 2 && index === 1 && 'rounded-tr-2xl'
    );
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className='sr-only'>{label}</p>
      <div className='flex items-center w-fit bg-white/20 rounded-[20px] overflow-hidden'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.props.value) {
            const isSelected = defaultValue === child.props.value;

            return (
              <div
                key={child.props.value}
                className={getButtonClasses(index, isSelected, activeIndex)}
              >
                <input
                  type='radio'
                  id={child.props.value}
                  name='locale'
                  value={child.props.value}
                  checked={defaultValue === child.props.value}
                  disabled={isPending}
                  onChange={(event) => onSelectChange(event, index)}
                  className='sr-only'
                />
                <label
                  htmlFor={child.props.value}
                  className={cn(
                    'cursor-pointer font-medium text-white/40',
                    isSelected && 'text-white'
                  )}
                >
                  {child.props.children}
                </label>
              </div>
            );
          }
          return null;
        })}
      </div>
    </label>
  );
}
