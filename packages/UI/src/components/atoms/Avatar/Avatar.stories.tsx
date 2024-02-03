import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    alt: 'Lamodot',
    src: 'https://bit.ly/3EBQXiH',
    delayMs: 600,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=7760-6496&mode=design&t=1SqrP5S7pH7kkYa6-4',
    },
  },
};

export const NoImage: StoryObj<typeof Avatar> = {
  args: {
    alt: 'Lamodot',
    src: '',
    delayMs: 600,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=8575-7191&mode=design&t=1SqrP5S7pH7kkYa6-4',
    },
  },
};
