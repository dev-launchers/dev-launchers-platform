import type { Meta, StoryObj } from '@storybook/react';
import Notification from './Notification';

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: 'Atoms/Notification',
};

export default meta;

export const NotificationItem: StoryObj<typeof Notification> = {
  args: {
    message:
      ' What you want to achieve through an online questionnaire is quality rather than quantity.',
    name: 'Lamodot',
    platform: 'DevSocials',
    time: '30m',
    action: 'commented on',
    src: 'https://bit.ly/3EBQXiH',
    alt: 'Lamodot',
    rounded: 'full',
    size: 'lg',
    delayMs: 600,
    status: 'unread',
  },
};
