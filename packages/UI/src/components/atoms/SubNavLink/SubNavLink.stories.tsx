import type { ComponentStory, ComponentMeta } from '@storybook/react';
import SubNavLink from './SubNavLink';

export default {
  title: 'Atoms/SubNavLink',
  component: SubNavLink,
} as ComponentMeta<typeof SubNavLink>;

const LinkTemplate: ComponentStory<typeof SubNavLink> = (args) => (
  <SubNavLink {...args} />
);

export const Light = LinkTemplate.bind({});
Light.args = {
  href: '/anywhere',
  text: 'Learn',
};
