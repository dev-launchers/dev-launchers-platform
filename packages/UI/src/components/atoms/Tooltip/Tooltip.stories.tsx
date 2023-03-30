import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const RegularToolTip: ComponentStory<typeof Tooltip> = (args) => (
  <div style={{ padding: 80 }}>
    <Tooltip content={''} {...args}></Tooltip>
  </div>
);

export const Black = RegularToolTip.bind({});
Black.args = {
  content: 'This is a tool tip',
  children: '?',
  direction: 'right',
  delay: 500,
};
