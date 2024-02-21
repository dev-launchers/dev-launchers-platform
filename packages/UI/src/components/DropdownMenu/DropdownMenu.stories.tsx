import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'components/Checkbox';

import { ChevronUp, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-80 justify-between rounded-md bg-black px-8 py-4 capitalize text-white">
            Dropdown
            <ChevronDown className="data-open"/>
            {/* <ChevronUp /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const RadioDropdown: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-80 justify-between rounded-md bg-black px-8 py-4 capitalize text-white">
            Dropdown
            <ChevronDown/>
            {/* <ChevronUp /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="grid">
            <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list">List</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const CheckboxDropdown: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-80 justify-between rounded-md bg-black px-8 py-4 capitalize text-white">
            Dropdown
            <ChevronDown className="data."/>
            {/* <ChevronUp /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>
            <Checkbox /> Option
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Checkbox/>  Option
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Checkbox/>  Option
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>
            <Checkbox/>  Option
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
