import type { Meta, StoryObj } from '@storybook/react';
import Button from './NewButton';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button>Back</Button>,
};
// const Template: Story = (args) => <Button {...args}>Back</Button>;

// export const Back = Template.bind({});
// Back.args = {
//   size: 'lg',
//   color: 'primary',
// };
