import type { ComponentStory, ComponentMeta } from '@storybook/react';
import * as React from 'react';
import ButtonMeeting from './ButtonMeeting';

export default {
  title: 'Atoms/ButtonMeeting',
  component: ButtonMeeting,
} as ComponentMeta<typeof ButtonMeeting>;

const TemplateButton: ComponentStory<typeof ButtonMeeting> = (args) => (
  <ButtonMeeting {...args}>{args.text}</ButtonMeeting>
);

export const Primary = TemplateButton.bind({});
Primary.args = {
  text: 'hello Chibueze',
  bgColor: 'blue'
};
