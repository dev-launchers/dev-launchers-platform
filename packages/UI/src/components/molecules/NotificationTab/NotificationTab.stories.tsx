import { Content } from '@radix-ui/react-tabs';
import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import Tabs, { Trigger } from './NotificationTab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  decorators: [
    (Story, { args, component: Component }) => {
      const [value, setValue] = useState('');
      return <Component onValueChange={(e) => setValue(e)} value={value} />;
      return Story({
        args: {
          onValueChange: setValue,
          value,
          ...args,
        },
      });
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const content = [...Array(5)];
export const LoopingUsingKeyboard: Story = {
  args: {
    loop: true,
    triggers: (
      <div>
        {content.map((s, i) => (
          <Trigger key={i} value={String(i + 1)}>
            Tab{i + 1}
          </Trigger>
        ))}
      </div>
    ),
    children: content.map((s, i) => (
      <Content key={i} value={String(i + 1)}>
        Tab{i + 1} content
      </Content>
    )),
  },
};

export const VerticalTabs: Story = {
  args: {
    defaultValue: 'Tab2',
    orientation: 'vertical',
    loop: false,
    triggers: (
      <div className="flex flex-col">
        <Trigger value="Tab1">Tab1</Trigger>
        <Trigger value="Tab2">Tab2</Trigger>
      </div>
    ),
  },
};
