import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'ATOMS/Avatar',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarWithImage: Story = {
  args: {
    size: 'sm',
    src: 'https://bit.ly/3EBQXiH',
    radius: 'sm',
    name: 'David Todd',
    color: 'primary',
  },
};
export const AvatarWithNoImage: Story = {
  args: {
    size: 'sm',
    name: 'Lamodot wisdom',
    radius: 'sm',
  },
};
