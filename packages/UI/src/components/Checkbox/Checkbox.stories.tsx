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
  args: {
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const DefaultCheckbox: Story = {
  render: (args) => (
    <form className="grid w-fit grid-cols-2 gap-3 rounded-lg border-2 border-dashed border-brand-alt-nebula-500 p-4">
      <h3>Default</h3> <Checkbox />
      <h3>Disabled</h3> <Checkbox {...args} disabled />
      <h3>Checked</h3> <Checkbox {...args} checked />
      <h3>Focus</h3> <Checkbox id="focused" {...args} />
    </form>
  ),
  parameters: {
    pseudo: {
      focus: '#focused',
    },
  },
};
