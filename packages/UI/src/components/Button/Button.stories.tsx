import * as React from 'react';
import Button from './Button';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Common Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const WithShortText: ComponentStory<typeof Button> = (args) => (
  <Button {...args} style={{ color: 'black' }}>
    Button
  </Button>
);

WithShortText.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/Dev-Launchers-Style-Guide?node-id=227%3A2044",
  },
};

WithShortText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.queryByText('Button');
};

export const WithLongText: ComponentStory<typeof Button> = (args) => (
  <Button {...args} style={{ color: 'black' }}>
    Welcome to Dev Launchers Platform
  </Button>
);

export const Customizable: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.text}</Button>
);

Customizable.args = {
  text: '',
  bgColor: '',
  textColor: '',
  fontSize: 1.2,
};
