import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Grid>;

const UseLessBox = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => <div className={'bg-[#d9d9d9] ' + className}>{children}</div>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const RowGap: Story = {
  render: () => (
    <Grid className="gap-y-6">
      <UseLessBox className="col-span-full flex h-16 items-center justify-center">
        Header
      </UseLessBox>
      <UseLessBox className="col-span-full flex h-96 items-center justify-center">
        Content
      </UseLessBox>
    </Grid>
  ),
};

export const Spanning: Story = {
  render: () => (
    <Grid className="gap-y-6">
      <UseLessBox className="col-span-full flex h-16 items-center justify-center">
        Header
      </UseLessBox>
      <UseLessBox className="col-span-1 flex h-96 items-center justify-center">
        Sidebar
      </UseLessBox>
      <UseLessBox className="col-span-3 flex h-96 items-center justify-center">
        Content
      </UseLessBox>
    </Grid>
  ),
};

export const StartingAndEndingLines: Story = {
  render: () => (
    <Grid className="grid-rows-2 gap-y-6">
      <UseLessBox className="col-span-3 col-start-2 flex h-16 items-center justify-center">
        Header
      </UseLessBox>
      <UseLessBox className="col-span-1 row-span-2 row-start-1 flex items-center justify-center">
        Sidebar
      </UseLessBox>
      <UseLessBox className="col-span-3 col-start-2 row-start-2 row-end-2 flex items-center justify-center">
        Content
      </UseLessBox>
    </Grid>
  ),
};
