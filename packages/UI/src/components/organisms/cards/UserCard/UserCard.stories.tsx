import type { ComponentStory, ComponentMeta } from '@storybook/react';
import logo from '../../../../assets/images/test-image.png';
import { UserDataProvider } from '../../../../context/UserDataContext';
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

export const HorizontalUserAvatar = TemplateUserCard.bind({});
HorizontalUserAvatar.args = {
  user: {
    name: 'John James',
    bio: 'Product Lead',
    email: 'email@email.com',
    profilePictureUrl: logo,
    discord: {
      username: '@discordUsername',
      discriminator: '2324',
    },
  },
};

export const VerticalUserAvatar = TemplateUserCard.bind({});
VerticalUserAvatar.args = {
  isVertical: true,
  user: {
    name: 'John James',
    bio: 'Product Lead',
    email: 'john_james@devlaunchers.com',
    profilePictureUrl: logo,
    discord: {
      username: '@discordUsername',
      discriminator: '2324',
    },
  },
};
