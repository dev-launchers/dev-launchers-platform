import type { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseLayer from './BaseLayer';

export default {
  title: 'Atoms/BaseLayer',
  component: BaseLayer,
  parameters: {
    docs: {
      description: {
        component: 'Wrap your component/s to have a base layer',
      },
    },
  },
} as ComponentMeta<typeof BaseLayer>;

export const BaseLight: ComponentStory<typeof BaseLayer> = (args) => (
  <BaseLayer {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </BaseLayer>
);

BaseLight.args = {
  type: 'light',
  color: 'base',
};

export const BaseDark: ComponentStory<typeof BaseLayer> = (args) => (
  <BaseLayer {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </BaseLayer>
);

BaseDark.args = {
  type: 'dark',
  color: 'base',
};

export const BaseOffLight: ComponentStory<typeof BaseLayer> = (args) => (
  <BaseLayer {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </BaseLayer>
);

BaseOffLight.args = {
  type: 'light',
  color: 'offbase',
};

export const BaseOffDark: ComponentStory<typeof BaseLayer> = (args) => (
  <BaseLayer {...args}>
    <div style={{ width: '345px', height: '556px' }}></div>
  </BaseLayer>
);

BaseOffDark.args = {
  type: 'dark',
  color: 'offbase',
};
