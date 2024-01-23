import type { Meta, StoryObj } from '@storybook/react';

import Modal, { Close } from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
 const footer = (
  <div className="">
    <button className="bg-yellow-300">Save changes</button>
    <Close>
      <button closeModal className="bg-yellow-300">Save changes</button>
    </Close>
    <Close>
      <button className="bg-yellow-300">Save changes</button>
    </Close>
  </div>
)


export const Primary: Story = {
  render: () => <Modal />,
};
