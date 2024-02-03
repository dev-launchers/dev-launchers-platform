import type { Meta, StoryObj } from '@storybook/react';
import NotificationItem from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  component: NotificationItem,
};

export default meta;

export const Read: StoryObj<typeof NotificationItem> = {
  args: {
    message:
      ' What you want to achieve through an online questionnaire is quality rather than quantity.',
    name: 'Lamodot',
    target: 'DevSocials',
    targetLink: 'https://devlaunchers.org/projects/DL-IdeaSpace',
    profileLink: 'https://devlaunchers.org/users/me',
    timeStamp: '30m',
    action: 'commented on',
    // src: 'https://bit.ly/3EBQXiH',
    // alt: 'Lamodot',

    status: 'read',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=7428-603&mode=design&t=nocYacV77TIMT4qp-4',
    },
  },
};
export const UnRead: StoryObj<typeof NotificationItem> = {
  args: {
    message:
      ' What you want to achieve through an online questionnaire is quality rather than quantity.',
    name: 'Lamodot',
    target: 'DevSocials',
    targetLink: 'https://devlaunchers.org/projects/DL-IdeaSpace',
    profileLink: 'https://devlaunchers.org/users/me',
    timeStamp: '30m',
    action: 'commented on',
    // src: 'https://bit.ly/3EBQXiH',
    // alt: 'Lamodot',

    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=7428-604&mode=design&t=nocYacV77TIMT4qp-4',
    },
  },
};
export const Hover: StoryObj<typeof NotificationItem> = {
  args: {
    message:
      ' What you want to achieve through an online questionnaire is quality rather than quantity.',
    name: 'Lamodot',
    target: 'DevSocials',
    targetLink: 'https://devlaunchers.org/projects/DL-IdeaSpace',
    profileLink: 'https://devlaunchers.org/users/me',
    timeStamp: '30m',
    action: 'commented on',
    // src: 'https://bit.ly/3EBQXiH',
    // alt: 'Lamodot',

    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=7467-6778&mode=design&t=nocYacV77TIMT4qp-4',
    },
    pseudo: {
      hover: true,
    },
    docs: { disable: true },
  },
};
