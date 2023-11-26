import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    modalType: {
      options: ['newsletter', 'terms', 'roles'],
      control: { type: 'radio' },
    },
    hasCloseButton: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    },
    hasHeader: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    },
    hasBody: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    },
    hasFooter: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    }
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
//What type do I set args equal to in order to avoid error type any? the solution below won't work for a component with a lot of options
export const Primary: Story = (args: { modalType?: string | undefined; hasCloseButton: boolean; hasHeader: boolean; hasBody: boolean; hasFooter: boolean;}) => <Modal {...args}/>; {
  Primary.args = {
    modalType: 'terms',
    hasCloseButton: true,
    hasHeader: true,
    hasBody: true,
    hasFooter: true,
  }
};
