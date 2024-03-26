import type { Meta, StoryObj } from '@storybook/react';

import { ShareDialog } from './ShareDialog';

const meta: Meta<typeof ShareDialog> = {
  component: ShareDialog,
};

export default meta;
type Story = StoryObj<typeof ShareDialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <ShareDialog header="Idea" url="https://devlaunchers/shareme.org" />
  ),
};
