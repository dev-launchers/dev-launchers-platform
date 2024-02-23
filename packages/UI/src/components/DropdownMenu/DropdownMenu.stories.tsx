import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
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
            <ChevronDown className=""/>
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
    const [value, setValue] = React.useState<string>();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-80 justify-between rounded-md bg-black px-8 py-4 capitalize text-white">
            Dropdown
            <ChevronDown className="data-open:rotate-90" />
            {/* <ChevronUp /> */}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={setValue}
            asChild
          >
            <div className="flex flex-col gap-2 font-nunito-sans">
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

type Checked = DropdownMenuCheckboxItemProps['checked'];

export const CheckboxDropdown: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false);
    const [showStatusBar2, setShowStatusBar2] = React.useState<Checked>(false);
    const [showStatusBar3, setShowStatusBar3] = React.useState<Checked>(false);
    const [showStatusBar4, setShowStatusBar4] = React.useState<Checked>(false);
    const [showStatusBar5, setShowStatusBar5] = React.useState<Checked>(false);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex w-80 justify-between rounded-md bg-black px-8 py-4 capitalize text-white">
            Dropdown
            <ChevronDown className=""/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className="space-y-2">
            <DropdownMenuCheckboxItem 
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={showStatusBar2}
              onCheckedChange={setShowStatusBar2}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={showStatusBar3}
              onCheckedChange={setShowStatusBar3}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
              checked={showStatusBar4}
              onCheckedChange={setShowStatusBar4}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatusBar5}
              onCheckedChange={setShowStatusBar5}
            >
              Option
            </DropdownMenuCheckboxItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
