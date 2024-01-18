import type { Meta, StoryObj } from '@storybook/react';

import Notifications from './Notifications';

const meta: Meta<typeof Notifications> = {
  component: Notifications,
};

export default meta;
type Story = StoryObj<typeof Notifications>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Notifications />,
};
