import type { DEFAULT_USER } from 'context/UserDataContext';
export { default } from './Navigation';
type UserType = typeof DEFAULT_USER;
export interface NavigationProps {
  user: UserType;
}

export interface MobileNavProps {
  open: boolean;
}

export const links = {
  CREATE: '/create',
  LEARN: '/learn',
  DREAM: [
    {
      text: 'Ideaspace',
      href: '/ideaspace',
      hasUnderline: true,
    },
    {
      text: 'Submit an idea',
      href: '/ideaspace/submit',
    },
    {
      text: 'Help existing idea',
      href: '/ideaspace/browse',
    },
  ],
  'SUPPORT US': '/support-us',
  JOIN: '/join',
};


export const accountOptions = [
  { text: 'My Profile', href: '/users/me' },
  {
    text: 'my ideas dashboard',
    href: '/ideaspace/dashboard',
    hasUnderline: true,
  },
];
