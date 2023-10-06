import DocumentScreen, { DocumentScreenProps } from './NotificationPage';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
    title: 'Notification Settings',
    component: DocumentScreen,
    parameters: {
        layout: 'fullscreen',
    }
  } as Meta;
  
  const Template: StoryFn<DocumentScreenProps> = (args) => <DocumentScreen {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    user: {
      id: 2, 
    name: 'John',
    username: 'john',
    email: 'john@test.com',
    bio: 'test',
    profilePictureUrl: 'string',
    socialMediaLinks: [],
    totalPoints: 2,
    totalSeasonPoints: 2,
    availablePoints: 2,
    volunteerHours: 2,
    discord: {
      id: 1,
      avatar: 'url', 
      username: 'discordUsername',
      discriminator: '1234', 
    },
    interests: [],
    },

  };