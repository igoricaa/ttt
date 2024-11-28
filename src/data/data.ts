import {
  Achievement,
  Benefit,
  Event,
  Highlight,
  Member,
  Membership,
  Route,
} from '@/lib/types';

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

export const memberships: Membership[] = [
  {
    title: 'Basic',
    description: [
      'Access to all classes',
      'Access to all equipment',
      'Access to all facilities',
      'Benefit from our 10% discount on all products',
      'Free entry to all events',
      'Free use of towels and shower facilities',
    ],
    image: '/memberships/membership.png',
  },
  {
    title: 'VIP',
    description: [
      'Access to all classes',
      'Access to all equipment',
      'Access to all facilities',
      'Benefit from our 10% discount on all products',
      'Free entry to all events',
      'Free use of towels and shower facilities',
    ],
    image: '/memberships/membership.png',
  },
  {
    title: 'Premium',
    description: [
      'Access to all classes',
      'Access to all equipment',
      'Access to all facilities',
      'Benefit from our 10% discount on all products',
      'Free entry to all events',
      'Free use of towels and shower facilities',
    ],
    image: '/memberships/membership.png',
  },
];

export const benefits: Benefit[] = [
  {
    subtitle: 'All Members Benefits',
    title: 'Best Fighting Coaches',
    description:
      "At our facility, you'll find a team of world-class fighting coaches who are committed to developing your skills in every aspect of combat. Their deep knowledge of various fighting styles, combined with hands-on experience, ensures that every student receives personalized attention to help them excel. The environment is one of collaboration, respect, and unwavering support. Whether you're a beginner or a seasoned fighter, you'll be surrounded by a community that pushes you to achieve greatness, fostering a space where champions are made both inside and outside the ring.",
    image: '/benefits/borenje.jpeg',
  },
  {
    subtitle: 'All Members Benefits 2',
    title: 'Best Training Environment',
    description:
      "Our training environment is carefully curated to inspire peak performance and unwavering focus. The gym is equipped with top-of-the-line equipment, offering everything from sparring areas to fitness tools that support strength, agility, and conditioning. More than just a physical space, the atmosphere is one of discipline and camaraderie, where every individual is encouraged to push beyond their limits. Whether you're training solo or as part of a team, you'll find everything you need to elevate your skills and become the best version of yourself.",
    image: '/benefits/functional.jpeg',
  },
  {
    subtitle: 'All Members Benefits 3',
    title: 'Wellness Spa Access',
    description:
      "After a demanding training session, our wellness spa offers the perfect opportunity to unwind and rejuvenate. Designed to help you recover and relax, the spa provides access to luxury treatments that include massages, saunas, and therapeutic baths. It's a space where athletes can restore their bodies, recharge their minds, and prepare for the next challenge. Whether you're seeking recovery after an intense workout or simply looking to pamper yourself, our wellness spa offers the ultimate experience in relaxation and care for your well-being.",
    image: '/benefits/spa.jpeg',
  },
  {
    subtitle: 'All Members Benefits 4',
    title: 'Cozy Chill Area',
    description:
      "Our cozy chill area is designed for ultimate relaxation and comfort, providing a peaceful retreat after a workout. With soft seating, ambient lighting, and a soothing atmosphere, it's the perfect place to decompress, connect with others, or enjoy some quiet time. The space encourages socializing and unwinding, making it an ideal spot for athletes to bond, share experiences, or simply relax in a stress-free environment. Whether you're taking a break between training sessions or unwinding after a long day, our chill area offers a cozy space for everyone to enjoy.",
    image: '/benefits/caffe.jpeg',
  },
];
