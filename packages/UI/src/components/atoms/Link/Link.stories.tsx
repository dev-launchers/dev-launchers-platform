import type { Story, Meta } from '@storybook/react';
import Link from './Link';
import type { LinkProps } from './index';

export default {
  title: 'Atoms/Link',
  component: Link,
} as Meta<typeof Link>;

const LinkTemplate: Story<LinkProps> = (args) => <Link {...args} />;

export const darkDesktop = LinkTemplate.bind({});
darkDesktop.args = {
  linkTo: '/anywhere',
  linkText: 'link',
};

export const darkMobile = LinkTemplate.bind({});
darkMobile.args = {
  linkTo: '/anywhere',
  linkText: 'link',
};
