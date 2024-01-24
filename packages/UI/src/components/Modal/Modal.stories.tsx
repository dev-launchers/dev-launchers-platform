import type { Meta, StoryObj } from '@storybook/react';

import Modal, { Close, Description } from './Modal';

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

const TriggerBtn = (
  <button className="rounded-lg uppercase font-bold border-2 border-solid border-black bg-yellow-300  p-3 hover:bg-yellow-700 hover:text-white">
    Edit profile
  </button>
);

const Header = <h3 className="uppercase"> Subscribe to our newsletter </h3>;

const Content = (
  <p className="">
    {' '}
    <Description>Get notified</Description>
  </p>
);

const Footer = (
  <Close >
    <button className="rounded-sm border-2 border-solid border-black bg-yellow-300 p-3 hover:bg-yellow-700 hover:text-white">
      {' '}
      Subscribe{' '}
    </button>
  </Close>
);

export const Primary: Story = {
  render: () => (
    <Modal
      trigger={TriggerBtn}
      header={Header}
      content={Content}
      footer={Footer}
    />
  ),
};

export const PrimaryNoCloseBtn: Story = {
  render: () => (
    <Modal
      trigger={TriggerBtn}
      header={Header}
      content={Content}
      footer={Footer}
      hasCloseBtn={false}
    />
  ),
};
