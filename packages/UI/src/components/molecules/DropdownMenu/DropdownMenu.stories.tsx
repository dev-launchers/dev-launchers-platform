import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from '../../atoms';

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

export const RadioDropdown: Story = {
  render: function RadioRender() {
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
          <DropdownMenuRadioGroup
            value={value}
            onValueChange={setValue}
            asChild
          >
            <div className="flex flex-col gap-2 font-nunito-sans">
              <DropdownMenuRadioItem
                value="grid"
                onSelect={(e) => e.preventDefault()}
              >
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="list1"
                onSelect={(e) => e.preventDefault()}
              >
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="list2"
                onSelect={(e) => e.preventDefault()}
              >
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="list3"
                onSelect={(e) => e.preventDefault()}
              >
                Option
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="list4"
                onSelect={(e) => e.preventDefault()}
              >
                Option
              </DropdownMenuRadioItem>
            </div>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=476%3A1241&mode=dev',
    },
  },
};

type Checked = DropdownMenuCheckboxItemProps['checked'];

export const CheckboxDropdown: Story = {
  render: function CheckBoxRender() {
    const [showStatusBar, setShowStatusBar] = useState(false);
    const [showStatusBar2, setShowStatusBar2] = useState(false);
    const [showStatusBar3, setShowStatusBar3] = useState(false);
    const [showStatusBar4, setShowStatusBar4] = useState(false);
    const [showStatusBar5, setShowStatusBar5] = useState(false);
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
              onSelect={(e) => e.preventDefault()}
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              onSelect={(e) => e.preventDefault()}
              checked={showStatusBar2}
              onCheckedChange={setShowStatusBar2}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatusBar3}
              onSelect={(e) => e.preventDefault()}
              onCheckedChange={setShowStatusBar3}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatusBar4}
              onSelect={(e) => e.preventDefault()}
              onCheckedChange={setShowStatusBar4}
            >
              Option
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showStatusBar5}
              onSelect={(e) => e.preventDefault()}
              onCheckedChange={setShowStatusBar5}
            >
              Option
            </DropdownMenuCheckboxItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=476%3A1233&mode=dev',
    },
  },
};

export const FormExample: Story = {
  render: function CheckBoxRender() {
    const [value, setValue] = useState<string>();
    const [showOptions, setShowOptions] = useState<Checked>(false);
    const [showOptions2, setShowOptions2] = useState<Checked>(false);
    const [showOptions3, setShowOptions3] = useState<Checked>(false);

    const onClick = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      alert(
        `Submitted form, option1:${showOptions},option2:${showOptions2},option3:${showOptions3}, value:${value}`
      );
    };

    return (
      <form onSubmit={onClick} className="space-y-4">
        <h1> Form Example</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild size="large">
            <div className="group">
              Menu Checkbox
              <ChevronDown className="group-data-open:rotate-180" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent size="large">
            <div className="mb-2 space-y-2">
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={showOptions}
                onCheckedChange={setShowOptions}
              >
                Option#1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={showOptions2}
                onCheckedChange={setShowOptions2}
              >
                Option#2
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                onSelect={(e) => e.preventDefault()}
                checked={showOptions3}
                onCheckedChange={setShowOptions3}
              >
                Option#3
              </DropdownMenuCheckboxItem>
            </div>

            <DropdownMenuRadioGroup
              value={value}
              onValueChange={setValue}
              asChild
            >
              <div className="space-y-2 font-nunito-sans">
                <DropdownMenuRadioItem
                  onSelect={(e) => e.preventDefault()}
                  value="radio1"
                >
                  Option#1
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onSelect={(e) => e.preventDefault()}
                  value="radio2"
                >
                  Option#2
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  onSelect={(e) => e.preventDefault()}
                  value="radio3"
                >
                  Option#3
                </DropdownMenuRadioItem>
              </div>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button onClick={onClick} type="primary" size="medium">
          Submit
        </Button>
      </form>
    );
  },
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
