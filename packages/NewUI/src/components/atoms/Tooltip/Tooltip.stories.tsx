import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Common Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const RegularToolTip: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}></Tooltip>
);

export const Black = RegularToolTip.bind({});
Black.args = {
  tooltipText: 'This is a tool tip',
  children: '?',
};
