import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from '.';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const RegularToolTip: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}></Tooltip>
);

export const Black = RegularToolTip.bind({});
Black.args = {
  content: 'This is a tool tip',
  children: '?',
  direction: 'right',
  delay: 500,
};
