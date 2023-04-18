import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './ProgressBar';
export default {
  title: 'Molecules/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const TemplateProgressBar: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args}></ProgressBar>
);

export const InProgress = TemplateProgressBar.bind({});
InProgress.args = {
  percentage: 50,
};

export const Finished = TemplateProgressBar.bind({});
Finished.args = {
  percentage: 100,
};
