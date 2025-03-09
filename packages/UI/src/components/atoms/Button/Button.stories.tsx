import type { Meta, StoryObj } from '@storybook/react';
import Button, { PropsType, ColorType } from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['light', 'dark'],
    },
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    color: {
      control: 'select',
      options: [
        'pure',
        'uranus',
        'jupiter',
        'neptune',
        'saturn',
        'cosmic',
        'nebula',
        'info',
        'warning',
        'success',
        'error',
      ],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    disabled: {
      control: 'boolean',
    },
    as: {
      control: 'radio',
      options: ['button', 'a'],
    },
    isAlert: {
      control: 'boolean',
    },
    alertType: {
      control: 'select',
      options: ['none', 'info', 'warning', 'success', 'error'],
    },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

// Icon for button examples
const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-rabbit"
  >
    <path d="M13 16a3 3 0 0 1 2.24 5" />
    <path d="M18 12h.01" />
    <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
    <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
    <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
  </svg>
);

// Default story with all controls exposed
export const Default: Story = {
  args: {
    mode: 'dark',
    size: 'small',
    disabled: false,
    type: 'primary',
    color: 'pure',
    iconPosition: 'left',
    as: 'button',
    children: 'Button',
    icon: Icon,
  },
};

// Display all button types
export const ButtonTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="tertiary">Tertiary</Button>
      </div>
    </div>
  ),
};

// Display all button modes (light/dark)
export const ButtonModes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-200 p-4 rounded">
        <h3 className="mb-2 font-bold">Light Mode</h3>
        <div className="flex items-center gap-4">
          <Button mode="light" type="primary">
            Primary
          </Button>
          <Button mode="light" type="secondary">
            Secondary
          </Button>
          <Button mode="light" type="tertiary">
            Tertiary
          </Button>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded">
        <h3 className="mb-2 font-bold text-white">Dark Mode</h3>
        <div className="flex items-center gap-4">
          <Button mode="dark" type="primary">
            Primary
          </Button>
          <Button mode="dark" type="secondary">
            Secondary
          </Button>
          <Button mode="dark" type="tertiary">
            Tertiary
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Display buttons with different sizes
export const ButtonSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button type="primary" size="small">
        Small
      </Button>
      <Button type="primary" size="medium">
        Medium
      </Button>
      <Button type="primary" size="large">
        Large
      </Button>
    </div>
  ),
};

// Display buttons with different icon positions
export const ButtonIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button icon={Icon} iconPosition="left">
          Icon Left
        </Button>
        <Button icon={Icon} iconPosition="right">
          Icon Right
        </Button>
        <Button icon={Icon}>Icon Only</Button>
      </div>
    </div>
  ),
};

// Display disabled buttons
export const DisabledButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button type="primary" disabled>
          Primary Disabled
        </Button>
        <Button type="secondary" disabled>
          Secondary Disabled
        </Button>
        <Button type="tertiary" disabled>
          Tertiary Disabled
        </Button>
      </div>
    </div>
  ),
};

// Display button with different colors
export const ButtonColors: Story = {
  render: () => {
    const colors: ColorType[] = [
      'pure',
      'uranus',
      'jupiter',
      'neptune',
      'saturn',
      'cosmic',
      'nebula',
      'info',
      'warning',
      'success',
      'error',
    ];

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Primary Buttons</h3>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button key={`primary-${color}`} type="primary" color={color}>
                {color}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Secondary Buttons</h3>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button key={`secondary-${color}`} type="secondary" color={color}>
                {color}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Tertiary Buttons</h3>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Button key={`tertiary-${color}`} type="tertiary" color={color}>
                {color}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Display alert buttons
export const AlertButtons: Story = {
  render: () => {
    const alertTypes: Exclude<PropsType['alertType'], undefined>[] = [
      'info',
      'warning',
      'success',
      'error',
    ];

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Alert Buttons (Primary)</h3>
          <div className="flex flex-wrap gap-4">
            {alertTypes.map((alertType) => (
              <Button
                key={`primary-alert-${alertType}`}
                type="primary"
                isAlert={true}
                alertType={alertType}
              >
                {alertType}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Alert Buttons (Secondary)</h3>
          <div className="flex flex-wrap gap-4">
            {alertTypes.map((alertType) => (
              <Button
                key={`secondary-alert-${alertType}`}
                type="secondary"
                isAlert={true}
                alertType={alertType}
              >
                {alertType}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Alert Buttons (Tertiary)</h3>
          <div className="flex flex-wrap gap-4">
            {alertTypes.map((alertType) => (
              <Button
                key={`tertiary-alert-${alertType}`}
                type="tertiary"
                isAlert={true}
                alertType={alertType}
              >
                {alertType}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

// Display link buttons
export const LinkButtons: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button as="a" href="https://example.com" target="_blank">
        Link Button
      </Button>
      <Button
        as="a"
        href="https://example.com"
        target="_blank"
        type="secondary"
      >
        Link Secondary
      </Button>
      <Button as="a" href="https://example.com" target="_blank" type="tertiary">
        Link Tertiary
      </Button>
    </div>
  ),
};

// Combined demo showing multiple variants
export const CombinedDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Standard Button Variations</h3>
        <div className="flex flex-wrap gap-4">
          <Button type="primary" color="uranus">
            Primary Uranus
          </Button>
          <Button type="secondary" color="jupiter">
            Secondary Jupiter
          </Button>
          <Button type="tertiary" color="neptune">
            Tertiary Neptune
          </Button>
          <Button type="primary" color="saturn" disabled>
            Disabled Saturn
          </Button>
          <Button type="primary" icon={Icon} color="cosmic">
            With Icon
          </Button>
          <Button
            type="primary"
            icon={Icon}
            iconPosition="right"
            color="nebula"
          >
            Icon Right
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Alert Type Variations</h3>
        <div className="flex flex-wrap gap-4">
          <Button type="primary" isAlert={true} alertType="info">
            Info Alert
          </Button>
          <Button type="secondary" isAlert={true} alertType="warning">
            Warning Alert
          </Button>
          <Button type="tertiary" isAlert={true} alertType="success">
            Success Alert
          </Button>
          <Button type="primary" isAlert={true} alertType="error" icon={Icon}>
            Error with Icon
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">Size Variations</h3>
        <div className="flex items-end gap-4">
          <Button type="primary" color="cosmic" size="small">
            Small
          </Button>
          <Button type="primary" color="cosmic" size="medium">
            Medium
          </Button>
          <Button type="primary" color="cosmic" size="large">
            Large
          </Button>
        </div>
      </div>
    </div>
  ),
};
