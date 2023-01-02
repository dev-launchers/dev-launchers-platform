import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Layer from './Layer';

export default {
  title: 'Atoms/Layer',
  component: Layer,
  parameters: {
    docs: {
      description: {
        component: 'Wrap your component/s to have a layer',
      },
    },
  },
} as ComponentMeta<typeof Layer>;

export const PrimaryLight: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

PrimaryLight.args = {
  type: 'light',
  hasRainbow: false,
  interactive: false,
};

export const PrimaryDark: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

PrimaryDark.args = {
  type: 'dark',
  hasRainbow: false,
  interactive: false,
};

export const Rainbow: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <span>some content</span>
  </Layer>
);

Rainbow.args = {
  hasRainbow: true,
};

export const LightSingleBand: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

LightSingleBand.args = {
  type: 'light',
  hasRainbow: true,
  interactive: false,
};
