import type { Meta, StoryObj } from '@storybook/react';

import { Chevron } from '../../../assets/icons';

import BackButton from './BackButton';

const meta: Meta<typeof BackButton> = {
  component: BackButton,
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const LargeButton: Story = {
  render: () => (
    <BackButton size="lg" iconLeft={<Chevron />}>
      Back
    </BackButton>
  ),
};

export const MediumButton: Story = {
  render: () => (
    <BackButton size="md" iconLeft={<Chevron />}>
      Back
    </BackButton>
  ),
};

export const SmallButton: Story = {
  render: () => (
    <BackButton size="sm">
      <Chevron />
    </BackButton>
  ),
};
