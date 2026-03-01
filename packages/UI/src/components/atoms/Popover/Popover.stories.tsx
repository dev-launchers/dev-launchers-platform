import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="primary" size="medium">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent hasCloseBtn={false}>
        {' '}
        Click outside of the popover to close
      </PopoverContent>
    </Popover>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="primary" size="medium">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96"> Click X to close </PopoverContent>
    </Popover>
  ),
};

export const UsingPopoverClose: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="primary" size="medium">
          Open
        </Button>
      </PopoverTrigger>
      <PopoverContent
        hasCloseBtn={false}
        className="flex w-96 items-center justify-between"
      >
        <p>Click button to close</p>
        <PopoverClose>
          <Button type="primary" size="medium">
            {' '}
            Close{' '}
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};
