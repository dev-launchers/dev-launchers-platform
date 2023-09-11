import type { Meta, StoryObj } from '@storybook/react';
import { Chevron } from 'assets/icons';

import Button from './NewButton';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ATOMS/NewButton',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const LargeButton: Story = {
  render: () => (
    <Button size="lg" iconLeft={<Chevron />}>
      Back
    </Button>
  ),
};

export const MediumButton: Story = {
  render: () => (
    <Button size="md" iconLeft={<Chevron />}>
      Back
    </Button>
  ),
};

export const SmallButton: Story = {
  render: () => (
    <Button size="sm">
      <Chevron />
    </Button>
  ),
};
