import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';
export default {
  title: 'Atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const TemplateSlider: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}></Slider>
);

export const WithLabels = TemplateSlider.bind({});
WithLabels.args = {
  min: 0,
  max: 10,
  postfix: 'HRS',
  withLabels: true,
};

export const WithoutLabels = TemplateSlider.bind({});
WithoutLabels.args = {
  min: 0,
  max: 10,
  postfix: 'HRS',
  withLabels: false,
};
