import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    backgroundColor: '#ffffff',
    label: 'Primary',
    color: '#69349D',
    border: '2px solid #69349D',
    borderRadius: '8px',
    padding: '8px, 24px, 8px, 24px',
    width: '108px',
    height: '40px',
    gap: '10px',
  },
};

// export const Secondary: Story = {
//   args: {
//     ...Primary.args,
//     label: '😄👍😍💯',
//   },
// };

// export const Tertiary: Story = {
//   args: {
//     ...Primary.args,
//     label: '📚📕📈🤓',
//   },
// };
