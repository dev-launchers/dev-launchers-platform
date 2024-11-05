import type { Meta } from '@storybook/react';
import NavLink from './NavLink';

export default {
  title: 'Deprecated/Atoms/NavLink',
  component: NavLink,
} as Meta<typeof NavLink>;

// const NavLinkTemplate: ComponentStory<typeof NavLink> = (args) => (
//   <NavLink {...args}>Navigation Link</NavLink>
// );

// export const Light = NavLinkTemplate.bind({});
// Light.args = {
//   href: '/anywhere',
//   text: 'Learn',
// };
