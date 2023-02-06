import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const LinkTemplate: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>Link</Link>
);

export const Light = LinkTemplate.bind({});
Light.args = {
  href: '/anywhere',
  text: 'Link',
};
