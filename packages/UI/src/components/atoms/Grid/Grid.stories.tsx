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
export const Primary: Story = {
  render: () => (
    <Grid className="gap-y-6">
      <UseLessBox className="col-span-full h-[71px]" />
      <UseLessBox className="col-span-full h-[442px]" />
      <UseLessBox className="col-span-4 h-[442px]" />
      <UseLessBox className="col-span-4 h-[442px]" />
      <UseLessBox className="col-span-4 h-[442px]" />
    </Grid>
  ),
};
