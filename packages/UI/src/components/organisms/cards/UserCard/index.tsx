import type { DEFAULT_USER } from 'context/UserDataContext';
export { default } from './UserCard';
type UserType = typeof DEFAULT_USER;
export interface UserCardProps {
  user: Pick<UserType, 'name' | 'bio' | 'email' | 'profilePictureUrl'> & {
    discord: Pick<UserType['discord'], 'username' | 'discriminator'>;
  };
  isVertical: boolean;
}
