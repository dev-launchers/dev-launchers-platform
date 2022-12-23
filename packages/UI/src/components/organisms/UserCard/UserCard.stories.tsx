import type { ComponentStory, ComponentMeta } from '@storybook/react';
import logo from '../../../assets/images/test-image.png';
import { UserDataProvider } from './../../../context/UserDataContext';
import UserCard from './UserCard';

export default {
  title: 'Organisms/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const TemplateUserCard: ComponentStory<typeof UserCard> = (args) => (
  <UserDataProvider>
    <UserCard {...args} />
  </UserDataProvider>
);

export const RightAlignedUserAvatar = TemplateUserCard.bind({});
RightAlignedUserAvatar.args = {
  isVertical: false,
  user: {
    id: 0,
    name: 'John James',
    email: 'email@email.com',
    profilePictureUrl: logo,
    discord: {
      id: 0,
      username: '@discordUsername',
    },
  },
};
