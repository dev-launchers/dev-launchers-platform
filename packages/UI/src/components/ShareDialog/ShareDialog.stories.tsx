import type { Meta, StoryObj } from '@storybook/react';
import { Share } from 'lucide-react';

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

export const Idea: Story = {
  render: () => (
    <ShareDialog
      header="Share this Idea"
      url="https://devlaunchers/shareme.org"
      quote="Share my idea"
      hashtag="idea"
    />
  ),
};

export const Posistion: Story = {
  render: () => (
    <ShareDialog
      header="Share this Position"
      url="https://devlaunchers/shareme.org"
      quote="Share my posistion"
      hashtag="posistion"
      button={<Share />}
    />
  ),
};

export const Product: Story = {
  render: () => (
    <ShareDialog
      header="Share this Product"
      url="https://devlaunchers/shareme.org"
      quote="Share my product"
      hashtag="Product"
    />
  ),
};
