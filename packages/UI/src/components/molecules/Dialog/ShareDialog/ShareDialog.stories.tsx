import type { Meta, StoryObj } from '@storybook/react';

import { ShareDialog } from './ShareDialog';
/**
 * @description Built from Dialog component, ShareDialog is a dialog that allows the user to share a link to a social media platform.
 * url, title, description, quote, and hashtag are all optional props that can be passed to the ShareDialog component. These optional props will be used to populate the social media share dialog with the provided information.
 * button prop is also optional and can be used to pass a custom button component to the ShareDialog component. If no button is passed, a default button will be used.
 * https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0
 */
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0',
    },
  },
};

export const Posistion: Story = {
  render: () => (
    <ShareDialog
      header="Share this Position"
      url="https://devlaunchers/shareme.org"
      quote="Share my posistion"
      hashtag="posistion"
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0',
    },
  },
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?type=design&node-id=11488-39095&mode=design&t=D8fOpTHCs7PlLEic-0',
    },
  },
};
