import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProgressBar from './ProgressBar';
import '@devlaunchers/tailwind/tailwind.css';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  argTypes: {
    startColor: {
      control: 'color',
    },
    endColor: {
      control: 'color',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    progress: { control: 'number' },
  },
} as Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    startColor: 'bg-indigo-700',
    endColor: 'bg-purple-600',
    backgroundColor: 'bg-gray-300',
    width: 'w-80',
    height: 'h-6',
    progress: 0,
  },
  decorators: [
    (StoryFn, context) => {
      const [progress, setProgress] = React.useState(0);
      React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((currentProgress) => {
            const newProgress = currentProgress + 5;
            if (newProgress >= 100) {
              clearInterval(timer);
              return 100;
            }
            return newProgress;
          });
        }, 500);
        return () => clearInterval(timer);
      }, []);
      context.args.progress = progress;
      return StoryFn(context);
    },
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11653-23398&mode=design&t=pKeXByjq7arsjXYv-0',
    },
    layout: 'centered',
  },
};
