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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3480&mode=dev',
    },
  },
};

export const DefaultChecked: Story = {
  render: (args) => <Checkbox checked {...args} />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3488&mode=dev',
    },
  },
};

export const DisabledUnchecked: Story = {
  render: (args) => <Checkbox {...args} disabled />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3486&mode=dev',
    },
  },
};

export const DisabledChecked: Story = {
  render: (args) => <Checkbox {...args} disabled defaultChecked />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3500&mode=dev',
    },
  },
};
