import type { ComponentStory, ComponentMeta } from '@storybook/react';
import testImage from './../../../assets/images/logo-monogram.png';
import { UserDataProvider } from './../../../context/UserDataContext';
import Navigation from './Navigation';

export default {
  title: 'Molecules/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const TemplateNavigation: ComponentStory<typeof Navigation> = (args) => (
  <UserDataProvider>
    <Navigation {...args} />
  </UserDataProvider>
);

export const DefaultNav = TemplateNavigation.bind({});
DefaultNav.args = {
  user: {
    id: 0,
  },
};

export const SignedInUser = TemplateNavigation.bind({});
SignedInUser.args = {
  user: {
    id: 1,
    name: 'test user',
    profilePictureUrl: testImage,
  },
};
