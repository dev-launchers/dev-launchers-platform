import type { Meta, StoryObj } from '@storybook/react';

import NewNavigation from './NewNavigation';

const meta: Meta<typeof NewNavigation> = {
  component: NewNavigation,
};

export default meta;
type Story = StoryObj<typeof NewNavigation>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <NewNavigation />,
};
