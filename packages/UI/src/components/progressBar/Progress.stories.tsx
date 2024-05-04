import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import '@devlaunchers/tailwind/tailwind.css';

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      // Customize the args table by excluding certain arg types
      argTypes: {
        exclude: ['asChild', 'value', 'max', 'getValueLabel'],
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11653-23398&mode=design&t=pKeXByjq7arsjXYv-0',
    },
  },
  argTypes: {
    progress: {
      control: {
        type: 'range',
        min: 25,
        max: 100,
        step: 25,
      },
      defaultValue: 25,
    },
    toggleClock: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  args: {
    progress: 25,
    fileName: 'File name',
    toggleClock: true,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    progress: 50,
  },
};
export const Tertiary: Story = {
  args: {
    ...Primary.args,
    progress: 75,
  },
};
export const Quartary: Story = {
  args: {
    ...Primary.args,
    progress: 100,
  },
};
