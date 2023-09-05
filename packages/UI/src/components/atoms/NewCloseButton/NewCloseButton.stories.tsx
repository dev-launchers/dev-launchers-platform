// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import NewCloseButton from './NewCloseButton';
import { Close } from 'assets/icons';

const meta: Meta<typeof NewCloseButton> = {
  component: NewCloseButton,
  title: 'NewCloseButton',
};

export default meta;
type Story = StoryObj<typeof NewCloseButton>;

export const CloseButton: Story = {
  render: () => <NewCloseButton color='primary' size='sm' children={<Close /> } />,
};