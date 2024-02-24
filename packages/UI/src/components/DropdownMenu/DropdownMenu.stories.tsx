import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

function RadioRender() {
  const [value, setValue] = useState<string>();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild size="small">
        <div className="group">
          Dropdown
          <ChevronDown className="group-data-open:rotate-180" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="small">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue} asChild>
          <div className="flex flex-col gap-2 font-nunito-sans">
            <DropdownMenuRadioItem value="grid">Option</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list1"> Option</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list2">Option</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list3">Option</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="list4">Option</DropdownMenuRadioItem>
          </div>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const RadioDropdown: Story = {
  render: RadioRender,
};

type Checked = DropdownMenuCheckboxItemProps['checked'];

function CheckBoxRender() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(false);
  const [showStatusBar2, setShowStatusBar2] = useState<Checked>(false);
  const [showStatusBar3, setShowStatusBar3] = useState<Checked>(false);
  const [showStatusBar4, setShowStatusBar4] = useState<Checked>(false);
  const [showStatusBar5, setShowStatusBar5] = useState<Checked>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild size="medium">
        <div className="group">
          Dropdown
          <ChevronDown className="group-data-open:rotate-180" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="medium">
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
}

export const CheckboxDropdown: Story = {
  render: CheckBoxRender,
};

export const Primary: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild size="large">
          <div className="group">
            Dropdown
            <ChevronDown className="group-data-open:rotate-180" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent size="large">
          <DropdownMenuItem>
            <button aria-label="fake-anchor">Profile</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button aria-label="fake-anchor">Billing</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button aria-label="fake-anchor">Team</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button aria-label="fake-anchor">Subscription</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};