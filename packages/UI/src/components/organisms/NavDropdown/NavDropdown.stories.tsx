import type { ComponentStory } from '@storybook/react';
import NavDropdown from './NavDropdown';

export default {
  title: 'organisms/NavDropdown',
  component: NavDropdown,
};

const TemplateNavDropdown: ComponentStory<typeof NavDropdown> = (args) => (
  <NavDropdown {...args}></NavDropdown>
);

const links = [
  { text: 'Submit an Idea', href: '/ideas/submit' },
  { text: 'Generate an Idea', href: '/ideas/generate' },
  { text: 'Help Existing Idea', href: '/ideas/browse' },
];

export const Default = TemplateNavDropdown.bind({});
Default.args = { title: 'IDEATE', links };
