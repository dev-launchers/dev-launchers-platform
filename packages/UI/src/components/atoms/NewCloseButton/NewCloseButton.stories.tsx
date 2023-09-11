// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Close } from '../../../assets/icons';
import NewCloseButton from './NewCloseButton';

const meta: Meta<typeof NewCloseButton> = {
  component: NewCloseButton,
  title: 'ATOMS/NewCloseButton',
};

export default meta;
type Story = StoryObj<typeof NewCloseButton>;

export const CloseButton: Story = {
  render: () => (
    <NewCloseButton color="primary" size="sm">
      <Close />
    </NewCloseButton>
  ),
};
