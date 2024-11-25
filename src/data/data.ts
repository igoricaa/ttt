import { Achievement, Event, Highlight, Member, Route } from '@/lib/types';

export const routes: Route[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about-us',
  },
  {
    label: 'Memberships',
    path: '/memberships',
  },
  {
    label: 'Programs',
    path: '/programs',
  },
  {
    label: 'Schedule',
    path: '/schedule',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const highlights: Highlight[] = [
  {
    title: {
      ptOne: 'State-of the Art',
      ptTwo: 'Equipment',
    },
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
  },
  {
    title: {
      ptOne: 'TTTOP',
      ptTwo: 'Trainers',
    },
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
  },
  {
    title: {
      ptOne: 'Variety of',
      ptTwo: 'Classes',
    },
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
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
    title: 'UFC 303',
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
    image: '/achievements/achievements.png',
  },
  {
    title: 'Jiu Jitsu World Championship',
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
    image: '/achievements/achievements.png',
  },
  {
    title: 'ONE Championship',
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
    image: '/achievements/achievements.png',
  },
  {
    title: 'Dusko Todorovic vs Neki kontented',
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
    image: '/achievements/achievements.png',
  },
  {
    title: 'Prikupljanje Dzakova za NK-a da ne lomi kicmu',
    description:
      'Lorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sitLorem ipsum dolor amaet sit.',
    image: '/achievements/achievements.png',
  },
];

export const members: Member[] = [
  {
    name: 'Dusko Todorovic',
    title: 'UFC Fighter & BJJ Black Belt',
    image: '/members/dusko-todorovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
  {
    name: 'Ivan Popović',
    title: 'BJJ Head Coach',
    image: '/members/ivan-popovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
  {
    name: 'Dusko Todorovic',
    title: 'UFC Fighter & BJJ Black Belt',
    image: '/members/dusko-todorovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
  {
    name: 'Ivan Popović',
    title: 'BJJ Head Coach',
    image: '/members/ivan-popovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
  {
    name: 'Dusko Todorovic',
    title: 'UFC Fighter & BJJ Black Belt',
    image: '/members/dusko-todorovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
  {
    name: 'Ivan Popović',
    title: 'BJJ Head Coach',
    image: '/members/ivan-popovic.png',
    bio: 'At TTT, fighters of all levels come together to push their limits, refine their skills, and build the mental strength needed to dominate in and out of the cage. Join us and experience top-tier training from some of the best in the fight world.',
    socials: [
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
      {
        name: 'Facebook',
        url: 'https://www.instagram.com/thunder_top_team/',
      },
    ],
  },
];
