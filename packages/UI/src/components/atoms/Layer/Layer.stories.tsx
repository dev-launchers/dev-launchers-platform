import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Layer from './Layer';

export default {
  title: 'Molecules/Layer',
  component: Layer,
  parameters: {
    docs: {
      description: {
        component: 'Wrap your component/s to have a layer',
      },
    },
  },
} as ComponentMeta<typeof Layer>;

export const PrimaryWhite: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

PrimaryWhite.args = {
  type: 'white',
  hasRainbow: false,
  interactive: false,
};

export const PrimaryBlack: ComponentStory<typeof Layer> = (args) => (
  <Layer {...args}>
    <div style={{ width: '100%', height: '100px' }}></div>
  </Layer>
);

PrimaryBlack.args = {
  type: 'black',
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
