import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'components/atoms';

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
const EmptyTriggerBtn = (
  <Button buttonType="primary" buttonSize="standard">
    Empty
  </Button>
);

const EmptyHeader = (
  <h3 className="h-8 w-full bg-grayscale-100 uppercase"> </h3>
);

const EmptyContent = <div className="h-36 w-full bg-grayscale-100"></div>;

const EmptyFooter = <div className="h-10 w-full bg-grayscale-100"></div>;

const RoleTriggerBtn = (
  <Button buttonType="primary" buttonSize="standard">
    Role
  </Button>
);

const RoleHeader = <h3 className="h-8 w-full bg-grayscale-100 uppercase"> </h3>;

const RoleContent = <div className="h-36 w-full bg-grayscale-100"></div>;

const RoleFooter = <div className="h-10 w-full bg-grayscale-100"></div>;

const ToSTriggerBtn = (
  <Button buttonType="primary" buttonSize="standard">
    ToS
  </Button>
);

const ToSHeader = <h3 className="h-8 w-full bg-grayscale-100 uppercase"> </h3>;

const ToSContent = <div className="h-36 w-full bg-grayscale-100"></div>;

const ToSFooter = <div className="h-10 w-full bg-grayscale-100"></div>;

const PrimaryTriggerBtn = (
  <Button buttonType="primary" buttonSize="standard">
    Subscribe!
  </Button>
);

const PrimaryHeader = (
  <h3 className="uppercase"> Subscribe to our newsletter </h3>
);

const PrimaryContent = (
  <div className="">
    <p className="w-96 pl-8">
      {' '}
      <Description>
        Subscribe to our newsletter for the latest trends and exclusive content
        delivered straight to your inbox!
      </Description>
    </p>
    {/* Email address label with an email address input element */}
    <div className="flex flex-col items-center justify-center">
      <label className="font-laptop-desktop-label text-sm font-bold uppercase tracking-wide">
        {' '}
        Email address{' '}
      </label>
      <input
        className="w-96 rounded-lg border-2 border-solid border-black p-2"
        type="email"
        placeholder="Enter your email address"
      />
    </div>
  </div>
);

const PrimaryFooter = (
  <div>
    <Close>
      <Button buttonType="primary" buttonSize="standard">
        {' '}
        dismiss{' '}
      </Button>
    </Close>
    <Close>
      <Button buttonType="primary" buttonSize="standard">
        {' '}
        Subscribe{' '}
      </Button>
    </Close>
  </div>
);


export const Primary: Story = {
  render: () => (
    <div className="flex gap-4">
      <Modal
        trigger={PrimaryTriggerBtn}
        header={PrimaryHeader}
        content={PrimaryContent}
        footer={PrimaryFooter}
      />
      <Modal
        trigger={ToSTriggerBtn}
        header={ToSHeader}
        content={ToSContent}
        footer={ToSFooter}
      />
      <Modal
        trigger={RoleTriggerBtn}
        header={RoleHeader}
        content={RoleContent}
        footer={RoleFooter}
      />
      <Modal
        trigger={EmptyTriggerBtn}
        header={EmptyHeader}
        content={EmptyContent}
        footer={EmptyFooter}
      />
    </div>
  ),
};

export const PrimaryNoCloseBtn: Story = {
  render: () => (
    <Modal
      trigger={PrimaryTriggerBtn}
      header={PrimaryHeader}
      content={PrimaryContent}
      footer={PrimaryFooter}
      hasCloseBtn={false}
    />
  ),
};
