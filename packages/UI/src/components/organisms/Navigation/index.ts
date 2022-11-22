import type { DEFAULT_USER } from 'context/UserDataContext';
export { default } from './Navigation';
type UserType = typeof DEFAULT_USER;
export interface NavigationProps {
  user: UserType;
}

export interface MobileNavProps {
  open: boolean;
}
