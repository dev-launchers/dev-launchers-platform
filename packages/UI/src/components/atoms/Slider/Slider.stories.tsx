import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';
export default {
  title: 'Atoms/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const TemplateSlider: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args}></Slider>
);

export const Default = TemplateSlider.bind({});
Default.args = {
  min: 0,
  max: 10,
  prefix: 'HRS',
  withLabels: false,
};
