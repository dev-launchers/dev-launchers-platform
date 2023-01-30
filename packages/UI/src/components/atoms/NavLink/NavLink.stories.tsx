import type { ComponentStory, ComponentMeta } from '@storybook/react';
import NavLink from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const NavLinkTemplate: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args}>Navigation Link</NavLink>
);

export const Light = NavLinkTemplate.bind({});
Light.args = {
  href: '/anywhere',
  text: 'Learn',
};
