import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  argTypes: {
    modalType: {
      options: ['newsletter', 'terms', 'roles'],
      control: { type: 'radio' },
    },
    closeButton: {
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
export const Primary: Story = (args: { modalType?: string | undefined; closeButton: boolean; }) => <Modal {...args}/>; {
  Primary.args = {
    modalType: 'terms',
    closeButton: true,
  }
};
