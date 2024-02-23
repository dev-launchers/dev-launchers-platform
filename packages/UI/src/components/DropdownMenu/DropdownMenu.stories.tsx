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
            <ChevronDown className='data-open:rotate-90'/>
            {/* <ChevronUp /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="list5" asChild>
            <div className='flex flex-col gap-2 font-nunito-sans'>
              <DropdownMenuRadioItem value="grid">Option</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list1">
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list2">
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list3">
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list4">
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list5">
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="list6">
                Option
              </DropdownMenuRadioItem>
            </div>
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
            <ChevronDown className=""/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className='space-y-2'>
            <DropdownMenuCheckboxItem checked={false}>
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={true}>
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={false}>
              Option
            </DropdownMenuCheckboxItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

