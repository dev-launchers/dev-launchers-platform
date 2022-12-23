import type { DEFAULT_USER } from 'context/UserDataContext';
export { default } from './UserCard';
type UserType = typeof DEFAULT_USER;
export interface UserCardProps {
  user: UserType;
  isVertical: boolean;
}
