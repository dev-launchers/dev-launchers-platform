import type { Meta, StoryObj } from '@storybook/react';

import LoadingProgressBar from './LoadingProgressBar';

const meta: Meta<typeof LoadingProgressBar> = {
  component: LoadingProgressBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingProgressBar>;

export const Primary: Story = {
  args: {
    backgroundColor: '#ffffff',
    width: '',
    height: '',
  },
};
