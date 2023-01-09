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
    <div style={{ width: '100%', height: '100px' }}></div>
  </BaseLayer>
);

BaseLight.args = {
  type: 'light',
  interactive: false,
};

export const BaseDark: ComponentStory<typeof BaseLayer> = (args) => (
  <BaseLayer {...args}>
    <div style={{ width: '100%', height: '100%' }}></div>
  </BaseLayer>
);

BaseDark.args = {
  type: 'dark',
  interactive: false,
};
