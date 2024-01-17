import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox copy';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultUnchecked: Story = {
  render: () => <Checkbox />,
};
