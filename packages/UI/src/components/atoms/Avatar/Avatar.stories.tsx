import type { Meta, StoryObj } from '@storybook/react';
import AvatarComponent from './Avatar';

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
  title: 'Atoms/Avatar',
};

export default meta;

export const Avatar: StoryObj<typeof AvatarComponent> = {
  args: {
    size: 'sm',
    alt: 'Lamodot',
    src: 'https://bit.ly/3EBQXiH',
    delayMs: 600,
    rounded: 'sm',
    onClick: () => alert('Could open profile'),
  },
};
