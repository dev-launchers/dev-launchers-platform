import MyComponent from './MyComponent'; 
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MyComponent> = {
  title: 'atoms/MyComponent',
  component: MyComponent
}
export default meta;
type Story = StoryObj<typeof MyComponent>;

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    color: 'primary'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'primary',
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
  }
}
