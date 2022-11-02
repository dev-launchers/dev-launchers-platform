import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const TemplateCheckbox: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}></Checkbox>
);

export const WithLabel = TemplateCheckbox.bind({});
WithLabel.args = {
  disabled: false,
  label: 'option',
};
export const WithoutLabel = TemplateCheckbox.bind({});
WithoutLabel.args = {
  disabled: false,
};

export const Disabled = TemplateCheckbox.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithLabel = TemplateCheckbox.bind({});
DisabledWithLabel.args = {
  disabled: true,
  label: 'option',
};
