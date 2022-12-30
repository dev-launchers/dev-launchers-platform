import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Atoms/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const LinkTemplate: ComponentStory<typeof Link> = (args) => <Link {...args} />;

// export const dark = LinkTemplate.bind({});
// dark.args = {
//   linkTo: '/anywhere',
//   linkText: 'link',
//   mode: 'dark',
// };

export const Light = LinkTemplate.bind({});
Light.args = {
  href: '/anywhere',
  text: 'Link',
};
