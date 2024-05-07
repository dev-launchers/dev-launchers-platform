import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

/**
 * # Typography
 */

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const DefaultUnchecked: Story = {
  render: () => <Typography />,
};
