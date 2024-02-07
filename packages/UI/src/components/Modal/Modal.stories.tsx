import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'components/atoms';
import { Checkbox } from './../Checkbox';
import Modal, { Close, Description } from './Modal';

/**
 * @description A modal is a dialog box/popup window that is displayed on top of the current page
 * https://www.radix-ui.com/primitives/docs/components/dialog
 * Close export is an wrapper to close the modal from a trigger element.
 * Description export is an wrapper to add a description to the modal for accessibility.
 * z level is defaulted to z-50 to ensure it is on top of all other elements. This can be overridden by passing a className prop.
 */

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

export const Primary: Story = {
  render: () => {
    // Empty modal jsx
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
    // Subscribe modal jsx
    const SubscribeTriggerBtn = (
      <Button buttonType="primary" buttonSize="standard">
        Subscribe!
      </Button>
    );
    const SubscribeHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        {' '}
        Subscribe to our newsletter{' '}
      </h3>
    );
    const SubscribeContent = (
      <div className="">
        <p className="w-96 pl-8 font-nunito-sans mb-2">
          {' '}
          <Description>
            Subscribe to our newsletter for the latest trends and exclusive
            content delivered straight to your inbox!
          </Description>
        </p>
        {/* Email address label with an email address input element */}
        <div className="flex flex-col items-center justify-center pl-8">
          <label className="mb-2 w-full pl-2 font-nunito-sans text-sm font-bold uppercase tracking-wide">
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
    const SubscribeFooter = (
      <div className="flex items-center justify-end gap-6">
        <Close>
          <Button buttonType="alternative" buttonSize="standard">
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
    // Terms of services modal jsx
    const ToSTriggerBtn = (
      <Button buttonType="primary" buttonSize="standard">
        ToS
      </Button>
    );
    const ToSHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        {' '}
        Terms of services{' '}
      </h3>
    );
    const ToSContent = (
      <div className="h-36 max-w-md overflow-y-auto font-nunito-sans">
        <p className="pr-6 text-base">
          By accessing or using our services, you agree to abide by our terms
          and conditions. This includes adherence to our privacy policy,
          responsible use of the service, and acknowledgment of any disclaimers
          or limitations of liability outlined therein. Your continued use of
          the service constitutes acceptance of these terms. By accessing or
          using our services, you agree to abide by our terms and conditions.
          This includes adherence to our privacy policy, responsible use of the
          service, and acknowledgment of any disclaimers or limitations of
          liability outlined therein. Your continued use of the service
          constitutes acceptance of these terms.
        </p>
      </div>
    );
    const ToSFooter = (
      <div className="flex h-10 w-full items-center justify-between font-nunito-sans">
        <div className="flex items-center justify-center">
          <Checkbox />
          <p className="ml-2">I've read the terms of services</p>
        </div>
        <Close>
          <Button buttonType="primary" buttonSize="standard">
            Submit
          </Button>
        </Close>
      </div>
    );
    // Role selection modal jsx
    const RoleArray = [
      'developer',
      'designer',
      'researcher',
      'project manager',
      'other',
    ];

    const roleTrigger = (
      <Button buttonType="primary" buttonSize="standard">
        Role
      </Button>
    );
    const roleHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        Select your role
      </h3>
    );

    const roleContent = (
      <div className="flex max-w-md flex-wrap items-center justify-center gap-6 bg-grayscale-100 py-6 text-lg">
        {RoleArray.map((role, i) => {
          return (
            <button
              key={i}
              className={`rounded-3xl border-2 border-solid border-black p-4 font-nunito-sans capitalize ${
                i === 0 ? 'bg-black text-white' : 'bg-white text-black'
              } `}
            >
              {' '}
              {role}
            </button>
          );
        })}
      </div>
    );

    const roleFooter = (
      <div className="flex h-10 w-full items-center justify-between">
        <h3 className="font-nunito-sans text-lg">Step 1 out of 5</h3>
        <div className="flex gap-4">
          <Button buttonType="alternative" buttonSize="standard">
            Previous
          </Button>
          <Button buttonType="primary" buttonSize="standard">
            Next
          </Button>
        </div>
      </div>
    );
    // Return all modals
    return (
      <div className="flex gap-4">
        <Modal
          trigger={EmptyTriggerBtn}
          header={EmptyHeader}
          content={EmptyContent}
          footer={EmptyFooter}
        />
        <Modal
          trigger={roleTrigger}
          header={roleHeader}
          content={roleContent}
          footer={roleFooter}
        />
        <Modal
          trigger={SubscribeTriggerBtn}
          header={SubscribeHeader}
          content={SubscribeContent}
          footer={SubscribeFooter}
        />
        <Modal
          trigger={ToSTriggerBtn}
          header={ToSHeader}
          content={ToSContent}
          footer={ToSFooter}
        />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6382',
    },
  },
};

export const EmptyModal: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6381',
    },
  },
  render: () => {
    // Empty modal jsx
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

    // Return all modals
    return (
      <div className="flex gap-4">
        <Modal
          trigger={EmptyTriggerBtn}
          header={EmptyHeader}
          content={EmptyContent}
          footer={EmptyFooter}
        />
      </div>
    );
  },
};

export const Subscribe: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6380',
    },
  },
  render: () => {
    const SubscribeTriggerBtn = (
      <Button buttonType="primary" buttonSize="standard">
        Subscribe!
      </Button>
    );
    const SubscribeHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        {' '}
        Subscribe to our newsletter{' '}
      </h3>
    );
    const SubscribeContent = (
      <div className="">
        <p className="w-96 pl-8 font-nunito-sans">
          {' '}
          <Description>
            Subscribe to our newsletter for the latest trends and exclusive
            content delivered straight to your inbox!
          </Description>
        </p>
        {/* Email address label with an email address input element */}
        <div className="flex flex-col items-center justify-center">
          <label className="font-nunito-sans text-sm font-bold uppercase tracking-wide">
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
    const SubscribeFooter = (
      <div className="flex items-center justify-end gap-6">
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

    // Return all modals
    return (
      <div className="flex gap-4">
        <Modal
          trigger={SubscribeTriggerBtn}
          header={SubscribeHeader}
          content={SubscribeContent}
          footer={SubscribeFooter}
        />
      </div>
    );
  },
};

export const TermsOfService: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6379',
    },
  },
  render: () => {
    // Terms of services modal jsx
    const ToSTriggerBtn = (
      <Button buttonType="primary" buttonSize="standard">
        ToS
      </Button>
    );
    const ToSHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        {' '}
        Terms of services{' '}
      </h3>
    );
    const ToSContent = (
      <div className="h-36 max-w-md overflow-y-auto font-nunito-sans">
        <p className="pr-6 text-base">
          By accessing or using our services, you agree to abide by our terms
          and conditions. This includes adherence to our privacy policy,
          responsible use of the service, and acknowledgment of any disclaimers
          or limitations of liability outlined therein. Your continued use of
          the service constitutes acceptance of these terms. By accessing or
          using our services, you agree to abide by our terms and conditions.
          This includes adherence to our privacy policy, responsible use of the
          service, and acknowledgment of any disclaimers or limitations of
          liability outlined therein. Your continued use of the service
          constitutes acceptance of these terms.
        </p>
      </div>
    );
    const ToSFooter = (
      <div className="flex h-10 w-full items-center justify-between font-nunito-sans">
        <div className="flex items-center justify-center">
          <Checkbox />
          <p className="ml-2">I've read the terms of services</p>
        </div>
        <Close>
          <Button buttonType="primary" buttonSize="standard">
            Submit
          </Button>
        </Close>
      </div>
    );

    // Return all modals
    return (
      <div className="flex gap-4">
        <Modal
          trigger={ToSTriggerBtn}
          header={ToSHeader}
          content={ToSContent}
          footer={ToSFooter}
        />
      </div>
    );
  },
};

export const RoleModal: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6378',
    },
  },
  render: () => {
    // Role selection modal jsx
    const RoleArray = [
      'developer',
      'designer',
      'researcher',
      'project manager',
      'other',
    ];

    const roleTrigger = (
      <Button buttonType="primary" buttonSize="standard">
        Role
      </Button>
    );
    const roleHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        Select your role
      </h3>
    );

    const roleContent = (
      <div className="flex max-w-md flex-wrap items-center justify-center gap-6 bg-grayscale-100 py-6 text-lg">
        {RoleArray.map((role, i) => {
          return (
            <button
              key={i}
              className={`rounded-3xl border-2 border-solid border-black p-4 font-nunito-sans capitalize ${
                i === 0 ? 'bg-black text-white' : 'bg-white text-black'
              } `}
            >
              {' '}
              {role}
            </button>
          );
        })}
      </div>
    );

    const roleFooter = (
      <div className="flex h-10 w-full items-center justify-between">
        <h3 className="font-nunito-sans text-lg">Step 1 out of 5</h3>
        <div className="flex gap-4">
          <Button buttonType="primary" buttonSize="standard">
            Previous
          </Button>
          <Button buttonType="primary" buttonSize="standard">
            Next
          </Button>
        </div>
      </div>
    );
    // Return all modals
    return (
      <div className="flex gap-4">
        <Modal
          trigger={roleTrigger}
          header={roleHeader}
          content={roleContent}
          footer={roleFooter}
        />
      </div>
    );
  },
};

export const SubscribeNoCloseButton: Story = {
  render: () => {
    const SubscribeTriggerBtn = (
      <Button buttonType="primary" buttonSize="standard">
        Subscribe!
      </Button>
    );
    const SubscribeHeader = (
      <h3 className="w-full font-nunito-sans text-lg uppercase tracking-wider">
        {' '}
        Subscribe to our newsletter{' '}
      </h3>
    );
    const SubscribeContent = (
      <div className="">
        <p className="w-96 pl-8 font-nunito-sans">
          {' '}
          <Description>
            Subscribe to our newsletter for the latest trends and exclusive
            content delivered straight to your inbox!
          </Description>
        </p>
        {/* Email address label with an email address input element */}
        <div className="flex flex-col items-center justify-center">
          <label className="font-nunito-sans text-sm font-bold uppercase tracking-wide">
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
    const SubscribeFooter = (
      <div className="flex items-center justify-end gap-6">
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
    return (
      <Modal
        trigger={SubscribeTriggerBtn}
        header={SubscribeHeader}
        content={SubscribeContent}
        footer={SubscribeFooter}
        hasCloseBtn={false}
      />
    );
  },
};
