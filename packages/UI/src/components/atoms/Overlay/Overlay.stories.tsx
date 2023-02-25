import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Overlay from './Overlay';

export default {
  title: 'Atoms/Overlay',
  component: Overlay,
  parameters: {
    docs: {
      description: {
        component: 'Wrap your component/s to have an overlay',
      },
    },
  },
} as ComponentMeta<typeof Overlay>;

export const Light: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

Light.args = {
  type: 'light',
  status: 'default',
};

export const Dark: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

Dark.args = {
  type: 'dark',
  status: 'default',
};

export const ErrorLight: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

ErrorLight.args = {
  type: 'light',
  status: 'error',
};

export const ErrorDark: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

ErrorDark.args = {
  type: 'dark',
  status: 'error',
};

export const SuccessLight: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

SuccessLight.args = {
  type: 'light',
  status: 'success',
};

export const SuccessDark: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

SuccessDark.args = {
  type: 'dark',
  status: 'success',
};

export const NotificationLight: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

NotificationLight.args = {
  type: 'light',
  status: 'notification',
};

export const NotificationDark: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </Overlay>
);

NotificationDark.args = {
  type: 'dark',
  status: 'notification',
};
