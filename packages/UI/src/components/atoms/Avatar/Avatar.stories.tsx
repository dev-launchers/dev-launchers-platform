import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'ATOMS/Avatar',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Avatarwithimage: Story = {
  args: {
    size: 'sm',
    src: 'https://bit.ly/3EBQXiH',
    radius: 'sm',
    name: 'David Todd',
    color: 'primary',
  },
};
export const Avatarwithnoimage: Story = {
  args: {
    size: 'sm',
    name: 'Lamodot Wisdom',
    radius: 'sm',
  },
};
