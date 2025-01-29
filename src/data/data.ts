import {
  Achievement,
  Benefit,
  Event,
  Member,
  Program,
  Route,
  Social,
} from '@/lib/types';

export const routes: Route[] = [
  {
    slug: 'home',
    path: '/',
  },
  {
    slug: 'aboutUs',
    path: '/about-us',
  },
  {
    slug: 'memberships',
    path: '/memberships',
  },
  {
    slug: 'programs',
    path: '/programs',
  },
  {
    slug: 'schedule',
    path: '/schedule',
  },
  {
    slug: 'contactUs',
    path: '/contact-us',
  },
];

export const events: Event[] = [
  {
    title: 'UFC 303',
    date: {
      day: '19',
      month: 'Jan',
    },
    location: 'T Mobile Arena',
    time: '13.00 - 15.00h',
  },
  {
    title: 'ONE Championship',
    date: {
      day: '19',
      month: 'Jan',
    },
    location: 'T Mobile Arena',
    time: '13.00 - 15.00h',
  },
  {
    title: 'Dusko Todorovic vs Neki kontented',
    date: {
      day: '19',
      month: 'Jan',
    },
    location: 'T Mobile Arena',
    time: '13.00 - 15.00h',
  },
  {
    title: 'Prikupljanje Dzakova za NK-a da ne lomi kicmu',
    date: {
      day: '19',
      month: 'Jan',
    },
    location: 'T Mobile Arena',
    time: 'Ceo dan',
  },
];

export const achievements: Achievement[] = [
  {
    slug: 'one',
    image: '/achievements/achievements-3.jpg',
  },
  {
    slug: 'kontender',
    image: '/achievements/achievements-4.jpeg',
  },
  {
    slug: 'dzakovi',
    image: '/achievements/achievements-5.jpg',
  },
];

export const members: Member[] = [
  {
    slug: 'ivan',
    name: 'Ivan Popović',
    image: '/members/thundertopteam-ivan-popovic.jpg',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/nk_kid/',
      },
    ],
  },
  {
    slug: 'dusko',
    name: 'Dusko Todorovic',
    image: '/members/thundertopteam-dusko-todorovic.jpg',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/todorovic_ufc/',
      },
    ],
  },
  {
    slug: 'dusan',
    name: 'Dušan Jazić',
    image: '/members/thundertopteam-dusan-jazic.jpg',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/dusan_coach/',
      },
    ],
  },
  {
    slug: 'andjela',
    name: 'Anđela Nešovanović',
    image: '/members/thundertopteam-andjela-nesovanovic.jpg',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/angelneshtattoo/',
      },
    ],
  },
  {
    slug: 'straja',
    name: 'Strahinja Đurić',
    image: '/members/thundertopteam-strahinja-djuric.jpg',
  },
  {
    slug: 'stanko',
    name: 'Stanko Stojanović',
    image: '/members/thundertopteam-stanko-stojanovic.jpg',
  },
];

export const memberships = [
  {
    slug: 'standup',
  },
  {
    slug: 'grappling',
  },
  {
    slug: 'wrestling',
  },
  {
    slug: 'kids',
  },
];

export const benefits: Benefit[] = [
  {
    slug: 'coaches',
    image: '/benefits/thundertopteam-best-coaches.jpg',
  },
  {
    slug: 'environment',
    image: '/benefits/thundertopteam-training-environment.jpg',
  },

  { slug: 'welness', image: '/benefits/thundertopteam-spa-wellness.jpg' },
  {
    slug: 'chillarea',
    image: '/benefits/thundertopteam-chill-area.jpg',
  },
];

export const socials: Social[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/thunder_top_team/',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/thundertopteambelgrade',
  },
];

export const programs: Program[] = [
  {
    slug: 'strength',
    image: '/programs/thundertopteam-strength.jpg',
  },
  {
    slug: 'bjj',
    image: '/programs/thundertopteam-bjj.jpg',
  },
  {
    slug: 'mma',
    image: '/programs/thundertopteam-mma.jpg',
  },
  {
    slug: 'boxing',
    image: '/programs/thundertopteam-boxing.jpg',
  },
  {
    slug: 'selfDefense',
    image: '/programs/thundertopteam-self-defense.jpg',
  },
  {
    slug: 'kids',
    image: '/programs/thundertopteam-kids2.jpg',
  },
];

export const gallery = [
  {
    image: '/gallery/gallery-1.jpg',
  },
  {
    image: '/gallery/gallery-2.jpg',
  },
  {
    image: '/gallery/gallery-3.jpg',
  },
  {
    image: '/gallery/gallery-4.jpg',
  },
  {
    image: '/gallery/gallery-5.jpg',
  },
  {
    image: '/gallery/gallery-6.jpg',
  },
  {
    image: '/gallery/gallery-7.jpg',
  },
  {
    image: '/gallery/gallery-8.jpg',
  },
];
