import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const LoopingUsingKeyboard: Story = {
  args: {},
};
