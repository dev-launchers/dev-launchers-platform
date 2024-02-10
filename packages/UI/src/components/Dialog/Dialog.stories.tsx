import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'components/atoms';
import { Checkbox } from './../Checkbox';
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './Dialog';

/**
 * @description A dialog box/popup window that is displayed on top of the current page
 * https://www.radix-ui.com/primitives/docs/components/dialog
 * Close export is an wrapper to close the dialog from a trigger element.
 * DialogDescription export is an wrapper to add a description to the dialog for accessibility.
 * z level is defaulted to z-50 to ensure it is on top of all other elements. This can be overridden by passing a className prop.
 */

const meta: Meta<typeof Dialog> = {
  component: Dialog,
};

export default meta;

type Story = StoryObj<typeof Dialog>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const EmptyDialog: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button buttonType="primary" buttonSize="standard">
              Empty
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <div className="h-8 w-96 bg-white uppercase" />
              </DialogTitle>
            </DialogHeader>
            <div className="h-36 w-96 bg-grayscale-200"></div>
            <div className="h-8 w-96 bg-white"></div>
          </DialogContent>
        </Dialog>
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6381',
    },
  },
};

export const EmptyDialogWithNoClose: Story = {
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button buttonType="primary" buttonSize="standard">
              Empty
            </Button>
          </DialogTrigger>
          <DialogContent hasCloseBtn={false}>
            <DialogHeader>
              <DialogTitle>
                <div className="h-8 w-96 bg-white uppercase" />
              </DialogTitle>
            </DialogHeader>
            <div className="h-36 w-96 bg-grayscale-200"></div>
            <div className="h-8 w-96 bg-white"></div>
          </DialogContent>
        </Dialog>
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6382',
    },
  },
};

export const Newsletter: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=8769%3A6380',
    },
  },
  render: () => {
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button buttonType="primary" buttonSize="standard">
              Subscribe!
            </Button>
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
              <h3 className="flex h-6 w-[448px] items-center font-nunito-sans uppercase tracking-wider">
                Subscribe to our newsletter
              </h3>
            </DialogHeader>
            <div className="">
              {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
              <p className="mb-4 w-[448px] pl-8 font-nunito-sans">
                <DialogDescription>
                  Subscribe to our newsletter for the latest trends and
                  exclusive content delivered straight to your inbox!
                </DialogDescription>
              </p>
              <div className="ml-8 flex flex-col items-center justify-center">
                <h3 className="ml-4 mb-2 w-full font-nunito-sans text-sm font-bold uppercase tracking-wide">
                  Email address
                </h3>
                <input
                  className="w-full rounded-lg border-2 border-solid border-black p-4"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <DialogFooter className="flex w-[448px] items-center justify-end gap-6">
              <DialogClose>
                <Button buttonType="alternative" buttonSize="standard">
                  {' '}
                  dismiss{' '}
                </Button>
              </DialogClose>
              <DialogClose>
                <Button buttonType="primary" buttonSize="standard">
                  {' '}
                  Subscribe{' '}
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
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
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button buttonType="primary" buttonSize="standard">
              ToS
            </Button>
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <h3 className="font-nunito-sans uppercase tracking-wider h-6 flex w-[448px] items-center">
                <DialogTitle>Terms of services</DialogTitle>
              </h3>
            </DialogHeader>

            <div className="h-36 max-w-md overflow-y-auto font-nunito-sans">
              <p className="pr-6 text-base">
                By accessing or using our services, you agree to abide by our
                terms and conditions. This includes adherence to our privacy
                policy, responsible use of the service, and acknowledgment of
                any disclaimers or limitations of liability outlined therein.
                Your continued use of the service constitutes acceptance of
                these terms. By accessing or using our services, you agree to
                abide by our terms and conditions. This includes adherence to
                our privacy policy, responsible use of the service, and
                acknowledgment of any disclaimers or limitations of liability
                outlined therein. Your continued use of the service constitutes
                acceptance of these terms.
              </p>
            </div>

            <DialogFooter className="flex w-[448px] items-center justify-between gap-6">
              <div className="flex h-10 w-full items-center justify-between font-nunito-sans">
                <div className="flex items-center justify-center">
                  <Checkbox />
                  <p className="ml-2">I've read the terms of services</p>
                </div>
                <DialogClose>
                  <Button buttonType="primary" buttonSize="standard">
                    Submit
                  </Button>
                </DialogClose>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
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
    const RolesArray = [
      'developer',
      'designer',
      'researcher',
      'project manager',
      'other',
    ];
    return (
      <>
        <Dialog>
          <DialogTrigger>
            <Button buttonType="primary" buttonSize="standard">
              Role
            </Button>
          </DialogTrigger>
          <DialogContent >
            <DialogHeader>
              <h3 className="w-[448px] font-nunito-sans uppercase tracking-wider h-6 flex items-center">
                <DialogTitle>Select your role</DialogTitle>
              </h3>
            </DialogHeader>

            <div className="flex max-w-md flex-wrap items-center justify-center gap-6 bg-grayscale-100 py-6 text-lg">
              {RolesArray.map((role, i) => {
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

            <DialogFooter className="flex w-[448px] items-center justify-end gap-6">
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
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
};
