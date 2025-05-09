import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LoopingUsingKeyboard: Story = {
  render: () => {
    return (
      <Tabs>
        <>
          <TabsList
            className="flex flex-row justify-around
                  py-8 px-4  gap-8"
          >
            <TabsTrigger className="text-xl focus:bg-purple-500" value="dev">
              Development
            </TabsTrigger>
            <TabsTrigger className="text-xl focus:bg-purple-500" value="design">
              Design
            </TabsTrigger>
            <TabsTrigger
              className="text-xl focus:bg-purple-500"
              value="research"
            >
              Research
            </TabsTrigger>
            <TabsTrigger className="text-xl focus:bg-purple-500" value="pm">
              Project Management
            </TabsTrigger>
          </TabsList>
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
      <Tabs orientation="vertical">
        <>
          <TabsList
            className="flex flex-row justify-around
                  py-8 px-4  gap-8 bg-gray-900"
          >
            <TabsTrigger className="text-xl focus:bg-purple-500" value="dev">
              Development
            </TabsTrigger>
            <TabsTrigger className="text-xl focus:bg-purple-500" value="design">
              Design
            </TabsTrigger>
            <TabsTrigger
              className="text-xl focus:bg-purple-500"
              value="research"
            >
              Research
            </TabsTrigger>
            <TabsTrigger className="text-xl focus:bg-purple-500" value="pm">
              Project Management
            </TabsTrigger>
          </TabsList>
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
