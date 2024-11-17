import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../atoms';
import DivContainer from './DivContainer';

const meta: Meta<typeof DivContainer> = {
  component: DivContainer,
  parameters: {
    docs: {
      description: {
        component:
          'A div container that can be changed to order elements with `vertical`,`horizontal` or `wrap`. When `reverse` is set to true, the button order will reverse directions.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'text',
      description: 'The direction of the container',
    },
    reverse: {
      control: 'boolean',
      description: 'Whether to reverse the order of the children',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DivContainer>;

/*
Vertical container
*/
export const Vertical: Story = {
  args: {
    direction: 'vertical',
    reverse: false,
  },
  render: (args) => (
    <DivContainer {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Button buttonType="primary" buttonSize="standard" key={i}>
          Button {i + 1}
        </Button>
      ))}
    </DivContainer>
  ),
};

/*
Reverse vertical container
*/
export const ReverseVertical: Story = {
  args: {
    direction: 'vertical',
    reverse: true,
  },
  render: (args) => (
    <DivContainer {...args}>
      <DivContainer {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <Button buttonType="primary" buttonSize="standard" key={i}>
            Button {i + 1}
          </Button>
        ))}
      </DivContainer>
    </DivContainer>
  ),
};

/*
Horizontal container
*/
export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    reverse: false,
  },
  render: (args) => (
    <DivContainer {...args}>
      <DivContainer {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <Button buttonType="primary" buttonSize="standard" key={i}>
            Button {i + 1}
          </Button>
        ))}
      </DivContainer>
    </DivContainer>
  ),
};

/*
Reverse horizontal container
*/
export const ReverseHorizontal: Story = {
  args: {
    direction: 'horizontal',
    reverse: true,
  },
  render: (args) => (
    <DivContainer {...args}>
      <DivContainer {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <Button buttonType="primary" buttonSize="standard" key={i}>
            Button {i + 1}
          </Button>
        ))}
      </DivContainer>
    </DivContainer>
  ),
};

/*
Wrap container
*/
export const Wrap: Story = {
  args: {
    direction: 'wrap',
    reverse: false,
  },
  render: (args) => (
    <DivContainer {...args}>
      <DivContainer {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <Button buttonType="primary" buttonSize="standard" key={i}>
            Button {i + 1}
          </Button>
        ))}
      </DivContainer>
    </DivContainer>
  ),
};

/*
Reverse wrap container
*/
export const ReverseWrap: Story = {
  args: {
    direction: 'wrap',
    reverse: true,
  },
  render: (args) => (
    <DivContainer {...args}>
      <DivContainer {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <Button buttonType="primary" buttonSize="standard" key={i}>
            Button {i + 1}
          </Button>
        ))}
      </DivContainer>
    </DivContainer>
  ),
};
