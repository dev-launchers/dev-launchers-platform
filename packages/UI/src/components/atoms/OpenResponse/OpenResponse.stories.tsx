import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OpenResponse } from './OpenResponse';
import '@devlaunchers/tailwind/tailwind.css';
import type { OpenResponseProps } from './index';

const meta: Meta<typeof OpenResponse> = {
  component: OpenResponse,
  parameters: {
    layout: 'centered',
    docs: {
      argTypes: {
        exclude: [],
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/EwzuhhvTulvFRMvhTD5VAh/DL-Universal-Design-System?node-id=11488-38057&t=Oj7D5W1AoEfoRwc0-0',
    },
  },
  argTypes: {
    status: {
      options: ['default', 'focus', 'error', 'success', 'disabled'],
      control: { type: 'select' },
      description: 'State of the component',
    },
    fieldLabel: {
      control: 'text',
      defaultValue: 'Label',
      description: 'Label for the input field',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Type something...',
      description: 'Placeholder for the textarea',
    },
    inputValue: {
      control: 'text',
      defaultValue: '',
      if: { arg: 'status', neq: 'disabled' },
      description: 'Text entered by the user in the text area.',
    },
    isRequired: {
      control: 'boolean',
      defaultValue: true,
      description: 'Whether the input is required or not',
    },
    hintMessage: {
      control: 'text',
      defaultValue: '',
      description:
        'Hint text gives brief additional information that helps people understand and answer a question',
    },
    hasMessage: {
      control: 'boolean',
      defaultValue: true,
      description:
        'Toggles the visibility of a help or status message below the text area which is the hint message',
    },
    onInputChange: {
      table: {
        disable: true, // Hides it from both controls and documentation table
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OpenResponse>;

// Wrapper for dynamic behavior
const OpenResponseWrapper = (props: OpenResponseProps) => {
  const [localValue, setLocalValue] = useState(props.inputValue || '');

  React.useEffect(() => {
    // Sync with Storybook control panel updates
    setLocalValue(props.inputValue || '');
  }, [props.inputValue]);

  const handleInputChange = (value: string) => {
    if (props.onInputChange) {
      props.onInputChange(value); // Notify Storybook of the change
    }
    setLocalValue(value); // Update the internal state
  };

  return (
    <OpenResponse
      {...props}
      inputValue={localValue}
      onInputChange={handleInputChange}
    />
  );
};

// Stories
export const DefaultState: Story = {
  render: (args) => <OpenResponseWrapper {...args} />,
  args: {
    status: 'default',
    fieldLabel: 'Label',
    placeholder: 'Type something...',
    inputValue: '',
    isRequired: true,
    hintMessage: 'This is a default helper message.',
    hasMessage: true,
    onInputChange: (value: string) => {
      console.log('Updated value:', value);
    },
  },
};

export const FocusState: Story = {
  render: (args) => <OpenResponseWrapper {...args} />,
  args: {
    status: 'focus',
    fieldLabel: 'Label',
    placeholder: 'Type something...',
    inputValue: '',
    isRequired: true,
    hintMessage: 'You are currently typing in this field.',
    hasMessage: true,
  },
};

export const ErrorState: Story = {
  render: (args) => <OpenResponseWrapper {...args} />,
  args: {
    status: 'error',
    fieldLabel: 'Label',
    placeholder: 'Type something...',
    inputValue: 'Invalid input',
    isRequired: true,
    hintMessage: 'This field is unsuccessful',
    hasMessage: true,
  },
};

export const SuccessState: Story = {
  render: (args) => <OpenResponseWrapper {...args} />,
  args: {
    status: 'success',
    fieldLabel: 'Label',
    placeholder: 'Type something...',
    inputValue: 'Valid input',
    isRequired: true,
    hintMessage: 'Success! Your input is valid.',
    hasMessage: true,
  },
};

export const DisabledState: Story = {
  render: (args) => <OpenResponseWrapper {...args} />,
  args: {
    status: 'disabled',
    fieldLabel: 'Label',
    placeholder: 'Cannot type here...',
    inputValue: '', // Ensure no inputValue is set
    isRequired: false,
    hintMessage: 'This field is disabled.',
    hasMessage: true,
  },
};
