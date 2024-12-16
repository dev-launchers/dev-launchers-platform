import type { Meta, StoryObj } from '@storybook/react';
import Button, { PropsType } from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    mode: 'dark',
    size: 'small',
    disabled: false,
    type: 'secondary',
    icon: 'right',
    as: 'button',
    children: ['Button'],
  },
};

function displayTypes(type: PropsType['type']) {
  return (
    <div className="flex items-center gap-4">
      <Button mode="dark" type={type}>
        Dark
      </Button>
      <Button mode="light" type={type}>
        Light
      </Button>
      <Button mode="dark" type={type} disabled>
        Dark Disabled
      </Button>
      <Button mode="light" type={type} disabled>
        Light Disabled
      </Button>
    </div>
  );
}

export const Primary: Story = {
  render: () => displayTypes('primary'),
};
export const Secondary: Story = {
  render: () => displayTypes('secondary'),
};
export const AltPrimary: Story = {
  render: () => displayTypes('alt-primary'),
};
export const AltSecondary: Story = {
  render: () => displayTypes('alt-secondary'),
};

export const ButtonSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button type="primary" mode="light" size="small">
        Small
      </Button>
      <Button type="primary" mode="light" size="medium">
        Medium
      </Button>
      <Button type="primary" mode="light" size="large">
        Large
      </Button>
    </div>
  ),
};

export const ButtonIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button icon="left" type="alt-primary" mode="light" size="medium">
        Icon Left {rabbitIcon}
      </Button>
      <Button type="alt-primary" mode="light" size="large">
        {rabbitIcon}
      </Button>
      <Button icon="right" type="alt-primary" mode="light" size="small">
        Icon Right {rabbitIcon}
      </Button>
    </div>
  ),
};

const rabbitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-rabbit"
  >
    <path d="M13 16a3 3 0 0 1 2.24 5" />
    <path d="M18 12h.01" />
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
  </svg>
);
