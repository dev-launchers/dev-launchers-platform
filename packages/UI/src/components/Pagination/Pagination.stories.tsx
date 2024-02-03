import type { Meta, StoryObj } from '@storybook/react';

import {
  Pagination,
  PaginationContent,
  PaginationJump,
  PaginationItem,
  PaginationLink,
} from './Pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const WithJumps: Story = {
  args: {
    children: (
      <PaginationContent>
        <div className="flex gap-2">
          <PaginationItem>
            <PaginationJump href="#" destination="first" />
          </PaginationItem>
          <PaginationItem>
            <PaginationJump href="#" destination="previous" />
          </PaginationItem>
        </div>
        <div className="flex gap-2">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </div>
        <div className="flex gap-2">
          <PaginationItem>
            <PaginationJump href="#" destination="next" />
          </PaginationItem>

          <PaginationItem>
            <PaginationJump href="#" destination="last" />
          </PaginationItem>
        </div>
      </PaginationContent>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rvdnSOeHdjODE0U7xdNTR9/DL-Universal-Design-System-(NEW)?type=design&node-id=12-3480&mode=dev',
    },
  },
};

export const WithoutJumps: Story = {
  args: {
    children: (
      <PaginationContent>
        <div className="flex gap-2">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </div>
      </PaginationContent>
    ),
  },
};
