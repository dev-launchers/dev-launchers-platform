import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Indicates whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Indicates whether the checkbox is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => (
    <form className="flex gap-3">
      <Checkbox />
      <Checkbox {...args} />
      <Checkbox {...args} checked />
    </form>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-3">
      <Checkbox disabled />
      <Checkbox disabled checked />
    </div>
  ),
};
