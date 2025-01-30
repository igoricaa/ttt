import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const localePrefix = 'as-needed';

export const routing = defineRouting({
  locales: ['en', 'sr', 'ru'],
  defaultLocale: 'en',
  localePrefix: localePrefix,
  pathnames: {
    '/': '/',
    '/about-us': {
      en: '/about-us',
      sr: '/o-nama',
      ru: '/o-nas',
    },
    '/memberships': {
      en: '/memberships',
      sr: '/clanovi',
      ru: '/члены',
    },
    '/contact-us': {
      en: '/contact-us',
      sr: '/kontakt',
      ru: '/контакт',
    },
    '/programs': {
      en: '/programs',
      sr: '/programi',
      ru: '/programi',
    },
    '/schedule': {
      en: '/schedule',
      sr: '/raspored',
      ru: '/raspisanie',
    },
    '/[...rest]': {
      en: '/[...rest]',
      sr: '/[...rest]',
      ru: '/[...rest]',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
