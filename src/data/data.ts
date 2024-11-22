import { Achievement, Event, Highlight, Route } from '@/lib/types';

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
