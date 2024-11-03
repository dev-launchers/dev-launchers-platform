import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './ProgressBar';
export default {
  title: 'Deprecated/Molecules/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const TemplateProgressBar: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args}></ProgressBar>
);

export const InProgress = TemplateProgressBar.bind({});
InProgress.args = {
  value: 50,
};

export const Finished = TemplateProgressBar.bind({});
Finished.args = {
  value: 100,
};
