import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';

export default {
  title: 'Common Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const TemplateRadio: ComponentStory<typeof Radio> = (args) => (
  <Radio {...args}></Radio>
);

export const WithLabel = TemplateRadio.bind({});
WithLabel.args = {
  disabled: false,
  label: 'option',
};
export const WithoutLabel = TemplateRadio.bind({});
WithoutLabel.args = {
  disabled: false,
};

export const Disabled = TemplateRadio.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledWithLabel = TemplateRadio.bind({});
DisabledWithLabel.args = {
  disabled: true,
  label: 'option',
};
