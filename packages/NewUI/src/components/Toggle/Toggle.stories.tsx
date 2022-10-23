import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from './Toggle';

export default {
  title: 'Common Components/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const TemplateToggle: ComponentStory<typeof Toggle> = (args) => (
  <Toggle {...args}></Toggle>
);

export const WithLabel = TemplateToggle.bind({});
WithLabel.args = {
  label: 'option',
};
export const WithoutLabel = TemplateToggle.bind({});

export const WithLabelDisabled = TemplateToggle.bind({});
WithLabelDisabled.args = {
  label: 'option',
  disabled: true,
};

export const WithoutLabelDisabled = TemplateToggle.bind({});
WithoutLabelDisabled.args = {
  disabled: true,
};
