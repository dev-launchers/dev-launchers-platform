import type { Meta, StoryObj } from '@storybook/react';

import { PaginationJump } from './Pagination';

const meta: Meta<typeof PaginationJump> = {
  component: PaginationJump,
  argTypes: {
    destination: {
      control: {type: 'inline-radio'},
      options: ['first', 'last', 'next', 'previous'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaginationJump>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: { destination: 'first', href: `https://link.to` },
  render: ({ destination }) => (
    <PaginationJump
      destination={destination}
      href={`https://link.to.${destination}`}
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60824&mode=dev',
    },
  },
};
export const Hover: Story = {
  args: { destination: 'first' },
  render: ({ destination }) => (
    <PaginationJump
      destination={destination}
      href={`https://link.to.${destination}`}
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60822&mode=dev',
    },
    pseudo: { hover: true },
  },
};
export const Active: Story = {
  args: { destination: 'first' },
  render: ({ destination }) => (
    <PaginationJump
      destination={destination}
      href={`https://link.to.${destination}`}
    />
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=66-60826&mode=design&t=GN7JVpQWqROhxCZt-4',
    },
    pseudo: { active: true },
  },
};
