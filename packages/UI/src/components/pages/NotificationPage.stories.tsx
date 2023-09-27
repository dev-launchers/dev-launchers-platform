import DocumentScreen, { DocumentScreenProps } from './NotificationPage';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export default {
    title: 'DocumentScreen',
    component: DocumentScreen,
    parameters: {
        layout: 'fullscreen',
    }
  } as Meta;
  
  const Template: StoryFn<DocumentScreenProps> = (args) => <DocumentScreen {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    user: {},

  };