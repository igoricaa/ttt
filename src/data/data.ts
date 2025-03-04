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
    images: {
      alt: 'Thunder Top Team Strength and Conditioning',
      desktop: '/programs/thunder-top-team-strength-and-conditioning.jpg',
    },
  },
  {
    slug: 'bjj',
    images: {
      alt: 'Thunder Top Team BJJ',
      desktop: '/programs/thunder-top-team-bjj.png',
      mobile: '/programs/thunder-top-team-bjj-mobile.png',
    },
  },
  {
    slug: 'mma',
    images: {
      alt: 'Thunder Top Team MMA',
      desktop: '/programs/thunder-top-team-mma.png',
      mobile: '/programs/thunder-top-team-mma-mobile.png',
    },
  },
  {
    slug: 'boxing',
    images: {
      alt: 'Thunder Top Team Boxing',
      desktop: '/programs/thunder-top-team-boxing.png',
      mobile: '/programs/thunder-top-team-boxing-mobile.png',
    },
  },
  // {
  //   slug: 'kickboxing',
  //   image: '/programs/thundertopteam-kickboxing.jpg',
  // },
  // {
  //   slug: 'wrestling',
  //   image: '/programs/thundertopteam-wrestling.jpg',
  // },
  {
    slug: 'kids',
    images: {
      alt: 'Thunder Top Team Kids Combat Sports',
      desktop: '/programs/thunder-top-team-kids-combat.png',
      mobile: '/programs/thunder-top-team-kids-combat-mobile.png',
    },
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

// SCHEDULE

const ClassTypes = {
  NO_GI: { type: 'NO_GI', label: 'GRAPPLING' },
  GI: { type: 'GI', label: 'BJJ' },
  MMA: { type: 'MMA', label: 'MMA' },
  WRESTLING: { type: 'WRESTLING', label: 'WRESTLING' },
  KIDS: { type: 'KIDS', label: 'BJJ' },
  OPEN_MAT: { type: 'OPEN_MAT', label: 'BJJ' },
  BOXING: { type: 'BOXING', label: 'BOXING' },
  KICKBOXING: { type: 'KICKBOXING', label: 'KICKBOXING' },
} as const;

const CoachesTypes = {
  IVAN: 'Ivan',
  ANDJELA: 'Anđela',
  STANKO: 'Stanko',
  DUSKO: 'Duško',
  STRAJA: 'Straja',
  VUKASIN: 'Vukašin',
  SAVKE: 'Savke',
  TTT: 'TTT',
} as const;

export type ClassType = (typeof ClassTypes)[keyof typeof ClassTypes];
export type CoachType = (typeof CoachesTypes)[keyof typeof CoachesTypes];

interface ClassEvent {
  name: string;
  startTime: string;
  endTime: string;
  classType: ClassType;
  coach: CoachType[];
  position: string;
  isSolo?: boolean;
}

interface DaySchedule {
  day: string;
  classes: ClassEvent[];
}

export const schedule: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '09:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.STRAJA],
        position: 'left',
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
        coach: [CoachesTypes.IVAN, CoachesTypes.ANDJELA],
        position: 'left',
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
        coach: [CoachesTypes.SAVKE],
        position: 'right',
      },
      {
        name: 'MMA',
        startTime: '20:30',
        endTime: '22:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'BJJ',
        startTime: '21:00',
        endTime: '22:00',
        classType: ClassTypes.GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '09:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.STRAJA],
        position: 'left',
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '18:00',
        endTime: '19:30',
        classType: ClassTypes.WRESTLING,
        coach: [CoachesTypes.STANKO],
        position: 'left',
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA',
        startTime: '20:30',
        endTime: '22:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '09:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.STRAJA],
        position: 'left',
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
        coach: [CoachesTypes.IVAN, CoachesTypes.ANDJELA],
        position: 'left',
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
        coach: [CoachesTypes.SAVKE],
        position: 'right',
      },
      {
        name: 'MMA',
        startTime: '20:30',
        endTime: '22:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'BJJ',
        startTime: '21:00',
        endTime: '22:00',
        classType: ClassTypes.GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '09:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.STRAJA],
        position: 'left',
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '18:00',
        endTime: '19:30',
        classType: ClassTypes.WRESTLING,
        coach: [CoachesTypes.STANKO],
        position: 'left',
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA',
        startTime: '20:30',
        endTime: '22:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
    ],
  },
  {
    day: 'Friday',
    classes: [
      {
        name: 'No-Gi',
        startTime: '07:30',
        endTime: '09:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'MMA Class',
        startTime: '09:00',
        endTime: '10:30',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.STRAJA],
        position: 'left',
      },
      {
        name: 'Kids Combat',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.KIDS,
        coach: [CoachesTypes.IVAN, CoachesTypes.ANDJELA],
        position: 'left',
      },
      {
        name: 'Boxing',
        startTime: '18:30',
        endTime: '19:30',
        classType: ClassTypes.BOXING,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'No-Gi',
        startTime: '19:30',
        endTime: '21:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
      {
        name: 'Kickboxing',
        startTime: '19:30',
        endTime: '20:30',
        classType: ClassTypes.KICKBOXING,
        coach: [CoachesTypes.SAVKE],
        position: 'right',
      },
      {
        name: 'MMA',
        startTime: '20:30',
        endTime: '22:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'right',
      },
      {
        name: 'BJJ',
        startTime: '21:00',
        endTime: '22:00',
        classType: ClassTypes.GI,
        coach: [CoachesTypes.IVAN],
        position: 'left',
      },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      {
        name: 'Striking Day',
        startTime: '12:00',
        endTime: '14:00',
        classType: ClassTypes.MMA,
        coach: [CoachesTypes.DUSKO, CoachesTypes.VUKASIN],
        position: 'left',
        isSolo: false,
      },
      {
        name: 'Grappling Day',
        startTime: '13:00',
        endTime: '14:00',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.IVAN],
        position: 'right',
      },
      {
        name: 'Open mat',
        startTime: '14:00',
        endTime: '15:30',
        classType: ClassTypes.NO_GI,
        coach: [CoachesTypes.TTT],
        position: 'left',
      },
      {
        name: 'Freestyle Wrestling',
        startTime: '15:30',
        endTime: '17:00',
        classType: ClassTypes.WRESTLING,
        coach: [CoachesTypes.STANKO],
        position: 'left',
        isSolo: true,
      },
    ],
  },
];
