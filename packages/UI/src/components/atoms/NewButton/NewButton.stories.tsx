import type { ComponentStory, ComponentMeta } from '@storybook/react';
import NewButton from './NewButton';

export default {
  title: 'Atoms/NewButton',
  component: NewButton,
} as ComponentMeta<typeof NewButton>;

const NavLinkTemplate: ComponentStory<typeof NewButton> = (args) => (
  <NewButton {...args}>{args.children}</NewButton>
);

export const Light = NavLinkTemplate.bind({});
Light.args = {
  size: 'default',
  type: 'Primary',
  children: 'Primary',
};

export const Dark = NavLinkTemplate.bind({});
Dark.args = {
  size: 'default',
  type: 'Secondary',
  children: 'Secondary',
};
