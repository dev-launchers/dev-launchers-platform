import type { ComponentStory, ComponentMeta } from '@storybook/react';

import BackButton from './BackButton';
export default {
  title: 'Molecules/BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>;

const TemplateBackButton: ComponentStory<typeof BackButton> = (args) => (
  <BackButton {...args}></BackButton>
);

export const Small = TemplateBackButton.bind({});
Small.args = {
  type: 'small',
  withLabel: false,
};

export const Medium = TemplateBackButton.bind({});
Medium.args = {
  type: 'medium',
  withLabel: true,
};

export const Large = TemplateBackButton.bind({});
Large.args = {
  type: 'large',
  withLabel: true,
};

export const CancelButton = TemplateBackButton.bind({});
CancelButton.args = {
  type: 'cancel',
  withLabel: false,
};
