import type { ComponentStory, ComponentMeta } from '@storybook/react';
import UserCard from './UserCard';

export default {
  title: 'Organisms/UserCard',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const TemplateUserCard: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
);

export const LeftAlignedUserAvatar = TemplateUserCard.bind({});
LeftAlignedUserAvatar.args = {};
