import type { Story, Meta } from '@storybook/react';
import Link from './Link';
import type { LinkProps } from './index';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta<typeof Link>;

const LinkTemplate: Story<LinkProps> = (args) => <Link {...args} />;

export const dark = LinkTemplate.bind({});
dark.args = {
  linkTo: '/anywhere',
  linkText: 'link',
};

export const light = LinkTemplate.bind({});
light.args = {
  linkTo: '/anywhere',
  linkText: 'link',
};
