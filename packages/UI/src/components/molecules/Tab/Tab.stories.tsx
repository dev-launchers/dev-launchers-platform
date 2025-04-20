import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsTrigger, TabsContent, TabsList } from './Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LoopingUsingKeyboard: Story = {
  render: () => {
    return (
      <Tabs defaultValue="tab1">
        <TabsList>
          <div>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </div>
        </TabsList>
        <>
          <TabsContent value="tab1">
            <h1>hello from tab 1</h1>
          </TabsContent>
          <TabsContent value="tab2">
            <h1>hello from tab 2</h1>
          </TabsContent>
          <TabsContent value="tab3">
            <h1>hello from tab 3</h1>
          </TabsContent>
        </>
      </Tabs>
    );
  },
};

export const VerticalTabs: Story = {
  render: () => {
    return (
      <Tabs orientation="vertical" defaultValue="tab1">
        <TabsList>
          <div className="flex flex-col">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </div>
        </TabsList>
        <>
          <TabsContent value="tab1">
            <h1>hello from tab 1</h1>
          </TabsContent>
          <TabsContent value="tab2">
            <h1>hello from tab 2</h1>
          </TabsContent>
          <TabsContent value="tab3">
            <h1>hello from tab 3</h1>
          </TabsContent>
        </>
      </Tabs>
    );
  },
};
