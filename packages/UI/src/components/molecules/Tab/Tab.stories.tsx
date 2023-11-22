import type { Meta, StoryObj } from '@storybook/react';

import Tabs, { Trigger, Content } from './Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LoopingUsingKeyboard: Story = {
  render: () => {
    return (
      <Tabs
        triggers={
          <div>
            <Trigger value="tab1">Tab 1</Trigger>
            <Trigger value="tab2">Tab 2</Trigger>
            <Trigger value="tab3">Tab 3</Trigger>
          </div>
        }
      >
        <>
          <Content value="tab1">
            <h1>hello from tab 1</h1>
          </Content>
          <Content value="tab2">
            <h1>hello from tab 2</h1>
          </Content>
          <Content value="tab3">
            <h1>hello from tab 3</h1>
          </Content>
        </>
      </Tabs>
    );
  },
};

export const VerticalTabs: Story = {
  render: () => {
    return (
      <Tabs
        orientation="vertical"
        triggers={
          <div className="flex flex-col">
            <Trigger value="tab1">Tab 1</Trigger>
            <Trigger value="tab2">Tab 2</Trigger>
            <Trigger value="tab3">Tab 3</Trigger>
          </div>
        }
      >
        <>
          <Content value="tab1">
            <h1>hello from tab 1</h1>
          </Content>
          <Content value="tab2">
            <h1>hello from tab 2</h1>
          </Content>
          <Content value="tab3">
            <h1>hello from tab 3</h1>
          </Content>
        </>
      </Tabs>
    );
  },
};
