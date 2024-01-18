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
    <form className="flex flex-col gap-3">
      <Checkbox />
      <div className="flex gap-3">
        <Checkbox {...args} />
        <Checkbox {...args} checked />
      </div>
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

export const Hover: Story = {
  render: () => (
    <div className="flex gap-3">
      <Checkbox />
      <Checkbox checked />
    </div>
  ),
};
Hover.parameters = { pseudo: { hover: true } };

export const Focus: Story = {
  render: () => (
    <div className="flex gap-3">
      <Checkbox />
      <Checkbox checked />
    </div>
  ),
};
Focus.parameters = { pseudo: { focus: true } };
