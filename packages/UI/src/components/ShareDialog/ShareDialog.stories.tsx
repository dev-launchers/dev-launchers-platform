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
      button={
        <div className="flex w-fit items-center justify-center gap-2 rounded border-2 border-solid border-black bg-white px-4 py-2 font-nunito-sans shadow-lg hover:cursor-pointer">
          <Share />
          Share
        </div>
      }
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
