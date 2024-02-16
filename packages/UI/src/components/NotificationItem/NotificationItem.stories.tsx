import type { Meta, StoryObj } from '@storybook/react';
import { Playground } from '../atoms/Avatar/Avatar.stories';
import NotificationItem from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  component: NotificationItem,
};

export default meta;

export const Read: StoryObj<typeof NotificationItem> = {
  args: {
    message:
      'What you want to achieve through an online questionnaire is quality rather than quantity.',
    name: 'Arthur Wells',
    target: 'DevSocials',
    targetLink: 'https://devlaunchers.org/projects/DL-IdeaSpace',
    profileLink: 'https://devlaunchers.org/users/me',
    timeStamp: '30m',
    action: 'commented on',
    avatar: {
      src: Playground.args?.src as string,
      alt: Playground.args?.alt as string,
    },
    status: 'read',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10389&mode=dev',
    },
  },
};
export const UnRead: StoryObj<typeof NotificationItem> = {
  args: {
    ...Read.args,
    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10367&mode=dev',
    },
  },
};
export const Hover: StoryObj<typeof NotificationItem> = {
  args: {
    ...Read.args,
    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10378&mode=dev',
    },
    pseudo: {
      hover: true,
    },
    docs: { disable: true },
  },
};

export const MobileRead: StoryObj<typeof NotificationItem> = {
  args: {
    ...Read.args,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10336&mode=dev',
    },
    docs: { disable: true },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
export const MobileUnRead: StoryObj<typeof NotificationItem> = {
  args: {
    ...Read.args,
    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10354&mode=dev',
    },
    docs: { disable: true },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
export const MobileHover: StoryObj<typeof NotificationItem> = {
  args: {
    ...Read.args,
    status: 'unRead',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=63-10345&mode=dev',
    },
    pseudo: {
      hover: true,
    },
    docs: { disable: true },
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
