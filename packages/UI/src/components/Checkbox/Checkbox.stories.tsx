import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: { control: 'radio', options: [true, false, 'indeterminate'] },
    defaultChecked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
 export const DefaultUnchecked: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const DefaultChecked: Story = {
  render: (args) => <Checkbox {...args} defaultChecked />,
};

export const DisabledUnchecked: Story = {
  render: (args) => <Checkbox {...args} disabled />,
};

export const DisabledChecked: Story = {
  render: (args) => <Checkbox {...args} disabled defaultChecked />,
};
