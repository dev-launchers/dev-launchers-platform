import type { Meta, StoryObj } from '@storybook/react';

import { PaginationLink } from './Pagination';

const meta: Meta<typeof PaginationLink> = {
  component: PaginationLink,
};

export default meta;
type Story = StoryObj<typeof PaginationLink>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: 1,
    href: 'https://google.com',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60817&mode=dev',
    },
  },
};
export const Hover: Story = {
  args: {
    children: 1,
    href: 'https://google.com',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60815&mode=dev',
    },
    pseudo: { hover: true },
    docs: { disable: true }
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60819&mode=dev',
    },
  },
};
