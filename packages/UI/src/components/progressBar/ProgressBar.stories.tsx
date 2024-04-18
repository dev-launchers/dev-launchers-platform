import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ProgressBar from './ProgressBar';
import '@devlaunchers/tailwind/tailwind.css';

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: 'light',
      },
    },
    progress: { control: 'number' },
  },
} as Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
  args: {
    theme: 'light',
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
