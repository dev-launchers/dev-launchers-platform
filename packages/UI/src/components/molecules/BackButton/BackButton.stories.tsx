import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BackButton from './BackButton';
export default {
  title: 'Molecules/BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>;

const TemplateBackButton: ComponentStory<typeof BackButton> = (args) => (
  <BackButton {...args}></BackButton>
);

export const Back = TemplateBackButton.bind({});
Back.args = {
  type: 'back',
  withLabel: true,
};

export const Cancel = TemplateBackButton.bind({});
Cancel.args = {
  type: 'cancel',
  withLabel: false,
};
