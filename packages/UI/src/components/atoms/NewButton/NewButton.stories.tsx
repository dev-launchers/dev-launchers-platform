import type { ComponentStory, ComponentMeta } from '@storybook/react';
import NewButton from './NewButton';

export default {
  title: 'Atoms/NewButton',
  component: NewButton,
} as ComponentMeta<typeof NewButton>;

const NavLinkTemplate: ComponentStory<typeof NewButton> = (args) => (
  <NewButton {...args}>Primary</NewButton>
);

export const Light = NavLinkTemplate.bind({});
Light.args = {
  size: 'default',
  type: 'Primary',
};
