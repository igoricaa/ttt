export type Route = {
  label: string;
  path: string;
};

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
