import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './Checkbox';

/**
 * # Checkbox
 * Created with the Checkbox component from Radix UI.
 * * https://www.radix-ui.com/primitives/docs/components/checkbox
 */

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: { control: 'radio', options: [true, false, 'indeterminate'] },
    defaultChecked: {
      control: 'radio',
      options: [true, false, 'indeterminate'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultUnchecked: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const DefaultChecked: Story = {
  render: (args) => <Checkbox {...args} />,
};

export const DisabledUnchecked: Story = {
  render: (args) => <Checkbox {...args} disabled />,
};

export const DisabledChecked: Story = {
  render: (args) => <Checkbox {...args} disabled defaultChecked />,
};
