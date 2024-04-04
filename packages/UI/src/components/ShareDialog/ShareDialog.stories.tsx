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
      header="Idea"
      url="https://devlaunchers/shareme.org"
      title="Share my idea"
      description="this is my idea"
      quote="Share my idea"
      hashtag="idea"
    />
  ),
};

export const Posistion: Story = {
  render: () => (
    <ShareDialog
      header="Position"
      url="https://devlaunchers/shareme.org"
      title="Share my posistion"
      description="This is my posistion"
      quote="Share my posistion"
      hashtag="posistion"
      button={<Share />}
    />
  ),
};

export const Product: Story = {
  render: () => (
    <ShareDialog
      header="Product"
      url="https://devlaunchers/shareme.org"
      title="Share my product"
      description="This is my Product"
      quote="Share my product"
      hashtag="Product"
    />
  ),
};
