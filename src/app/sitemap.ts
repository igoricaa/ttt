import { MetadataRoute } from 'next';
import { routing, getPathname } from '@/i18n/routing';

const baseUrl = 'https://thundertopteam.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry('/', 'weekly', 1),
    getEntry('/about-us', 'monthly', 0.8),
    getEntry('/memberships', 'monthly', 0.8),
    getEntry('/programs', 'monthly', 0.8),
    getEntry('/schedule', 'monthly', 0.8),
    getEntry('/contact-us', 'monthly', 0.8),
  ];
}

type Href = Parameters<typeof getPathname>[0]['href'];

function getEntry(
  href: Href,
  changeFrequency: 'weekly' | 'monthly',
  priority: number
) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      ),
    },
    lastModified: new Date(),
    changeFrequency: changeFrequency,
    priority: priority,
  };
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href });
  return baseUrl + pathname;
}
