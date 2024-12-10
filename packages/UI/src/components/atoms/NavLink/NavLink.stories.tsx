import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';

export default {
  title: 'components/atoms/NavLink',
  component: NavLink,
} as Meta<typeof NavLink>;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    children: 'Contact Us',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Contact Us',
  },
};
