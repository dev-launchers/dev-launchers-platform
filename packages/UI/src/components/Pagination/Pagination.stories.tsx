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

export const Primary: Story = {
  render: () => (
    <Pagination>
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
    </Pagination>
  ),
};
