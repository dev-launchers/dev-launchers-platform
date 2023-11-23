import Buttons from './Buttons'; 
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Buttons> = {
  title: 'atoms/Buttons',
  component: Buttons,
  argTypes: {
    size: {
      options: ['xs','sm', 'md', 'lg'],
      control: { type: 'radio' },
      defaultValue: 'xs',
    },
  }
}
export default meta;
type Story = StoryObj<typeof Buttons>;

export const Primary: Story = (args: { size: 'xs' | 'sm' | 'md' | 'lg' }) => <Buttons {...args}/>; {
  Primary.args = {
    size: 'xs',
  }
};
