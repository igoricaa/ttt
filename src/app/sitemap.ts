import { MetadataRoute } from 'next';
import { routing, getPathname } from '@/i18n/routing';

const baseUrl = process.env.SITE_URL || 'https://thundertopteam.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr`,
          ru: `${baseUrl}/ru`,
        },
      },
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr/o-nama`,
          ru: `${baseUrl}/ru/o-nas`,
        },
      },
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/memberships`,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr/clanovi`,
          ru: `${baseUrl}/ru/члены`,
        },
      },
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr/programi`,
          ru: `${baseUrl}/ru/programi`,
        },
      },
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr/raspored`,
          ru: `${baseUrl}/ru/raspisanie`,
        },
      },
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      alternates: {
        languages: {
          sr: `${baseUrl}/sr/kontakt`,
          ru: `${baseUrl}/ru/контакт`,
        },
      },
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return staticPages;
}

type Href = Parameters<typeof getPathname>[0]['href'];
function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href });
  console.log('url: ', baseUrl + pathname);
  return baseUrl + pathname;
}

// const baseUrl = 'https://thundertopteam.com';

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     getEntry('/'),
//     getEntry('/about-us'),
//     getEntry('/memberships'),
//     getEntry('/programs'),
//     getEntry('/schedule'),
//     getEntry('/contact-us'),
//   ];
// }

// function getEntry(href: Href) {
//   return {
//     url: getUrl(href, routing.defaultLocale),
//     alternates: {
//       languages: Object.fromEntries(
//         routing.locales.map((locale) => [locale, getUrl(href, locale)])
//       ),
//     },
//   };
// }
