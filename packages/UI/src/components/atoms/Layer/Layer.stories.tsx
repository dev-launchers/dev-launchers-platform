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
  hasRainbowBottom: false,
  hasRainbowTop: false,
  interactive: false,
};

export const PrimaryDark: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

PrimaryDark.args = {
  type: 'dark',
  hasRainbowBottom: false,
  hasRainbowTop: false,
  interactive: false,
};

export const Rainbow: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <span>some content</span>
  </Layer>
);

Rainbow.args = {
  hasRainbowBottom: true,
  hasRainbowTop: false,
};

export const SingleBandLight: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

SingleBandLight.args = {
  type: 'light',
  hasRainbowBottom: true,
  hasRainbowTop: false,
  interactive: false,
};

export const DoubleBandLight: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

DoubleBandLight.args = {
  type: 'light',
  hasRainbowBottom: true,
  hasRainbowTop: true,
  interactive: false,
};
