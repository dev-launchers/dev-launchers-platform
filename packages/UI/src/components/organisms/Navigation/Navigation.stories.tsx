import type { ComponentStory, ComponentMeta } from '@storybook/react';
import testImage from './../../../assets/images/logo-monogram.png';
import {
  UserDataProvider,
  DEFAULT_USER,
} from './../../../context/UserDataContext';
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
  user: { ...DEFAULT_USER },
};

export const SignedInUser = TemplateNavigation.bind({});
SignedInUser.args = {
  user: {
    ...DEFAULT_USER,
    id: 1,
    name: 'test user',
    profilePictureUrl: testImage,
  },
};
