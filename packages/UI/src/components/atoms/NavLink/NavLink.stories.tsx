import type { ComponentStory, ComponentMeta } from '@storybook/react';
import NavLink from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const LinkTemplate: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Light = LinkTemplate.bind({});
Light.args = {
  href: '/anywhere',
  text: 'Learn',
};
