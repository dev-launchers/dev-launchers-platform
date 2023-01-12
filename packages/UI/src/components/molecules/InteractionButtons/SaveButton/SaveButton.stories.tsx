import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SaveButton from './SaveButton';
export default {
  title: 'Molecules/Interactions/SaveButton',
  component: SaveButton,
} as ComponentMeta<typeof SaveButton>;

const TemplateSaveButton: ComponentStory<typeof SaveButton> = (args) => (
  <SaveButton {...args}></SaveButton>
);

export const Default = TemplateSaveButton.bind({});
Default.args = {
  text: 'save',
};

export const Selected = TemplateSaveButton.bind({});
Selected.args = {
  text: 'saved',
  filled: true,
};

export const Disabled = TemplateSaveButton.bind({});
Disabled.args = {
  text: 'save',
  disabled: true,
};

export const SmallDefault = TemplateSaveButton.bind({});
SmallDefault.args = {
  text: '',
};

export const SmallSelected = TemplateSaveButton.bind({});
SmallSelected.args = {
  text: '',
  filled: true,
};

export const SmallDisabled = TemplateSaveButton.bind({});
SmallDisabled.args = {
  text: '',
  disabled: true,
};
