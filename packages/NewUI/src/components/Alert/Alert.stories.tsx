import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from './Alert';

export default {
  title: 'Common Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const NotificationAlert: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>Notification: Notification Message</Alert>
);

NotificationAlert.args = {
  signal: 'notify',
};

export const SuccessAlert: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>Success: Success Message</Alert>
);

SuccessAlert.args = {
  signal: 'success',
};

export const ErrorAlert: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>Error: Error Message</Alert>
);

ErrorAlert.args = {
  signal: 'error',
};

export const CustomAlert: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>{args.children}</Alert>
);

CustomAlert.args = {
  children: 'Type something within the Storybook',
  signal: 'error',
};
