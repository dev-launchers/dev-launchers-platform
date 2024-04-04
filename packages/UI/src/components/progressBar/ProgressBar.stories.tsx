import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    startColor: {
      control: 'color',
      description: 'The starting color of the progress bar.',
    },
    endColor: {
      control: 'color',
      description: 'The color of the progress bar when progress is complete.',
    },
    width: {
      control: 'text',
      description: 'The width of the progress bar.',
    },
    height: {
      control: 'text',
      description: 'The height of the progress bar.',
    },
    backgroundColor: {
      control: 'color',
      description: 'The background color of the progress bar container.',
    },
  },
} as Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    startColor: '#394CAC', // Example start color
    endColor: '#7339AC', // Example end color
    backgroundColor: '#F0EDEE',
    width: '332px',
    height: '26px',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11653-23398&mode=design&t=pKeXByjq7arsjXYv-0',
    },
    layout: 'centered',
  },
};
