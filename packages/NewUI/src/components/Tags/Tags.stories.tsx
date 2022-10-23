import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Tags from './Tags';

export default {
  title: 'Common Components/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

const FilterTag: ComponentStory<typeof Tags> = (args) => (
  <Tags {...args} isFilter>
    Tags
  </Tags>
);
const RegularTag: ComponentStory<typeof Tags> = (args) => (
  <Tags {...args}>Tags</Tags>
);

export const Black = RegularTag.bind({});
Black.args = { ...Black.args };

export const Grey = RegularTag.bind({});
Grey.args = { ...Grey.args };

export const GreyFilter = FilterTag.bind({});
GreyFilter.args = { ...GreyFilter.args };

export const White = RegularTag.bind({});
White.args = { ...White.args };

export const Yellow = RegularTag.bind({});
Yellow.args = { ...Yellow.args };

export const LightBlue = RegularTag.bind({});
LightBlue.args = { ...LightBlue.args };

export const Blue = RegularTag.bind({});
Blue.args = { ...Blue.args };

export const Orange = RegularTag.bind({});
Orange.args = { ...Orange.args };

Black.args = {
  bgColor: 'GREYSCALE_BLACK',
  txtColor: 'GREYSCALE_WHITE',
};

Grey.args = {
  bgColor: 'GREYSCALE_CHARCOAL',
  txtColor: 'GREYSCALE_WHITE',
};
GreyFilter.args = {
  bgColor: 'GREYSCALE_CHARCOAL',
  txtColor: 'GREYSCALE_WHITE',
};
White.args = {
  bgColor: 'GREYSCALE_WHITE',
  txtColor: 'GREYSCALE_BLACK',
};
Yellow.args = {
  bgColor: 'YELLOW_200',
  txtColor: 'GREYSCALE_BLACK',
};
LightBlue.args = {
  bgColor: 'LIGHT_BLUE_200',
  txtColor: 'GREYSCALE_BLACK',
};
Blue.args = {
  bgColor: 'BLUE_200',
  txtColor: 'GREYSCALE_BLACK',
};
Orange.args = {
  bgColor: 'ORANGE_200',
  txtColor: 'GREYSCALE_BLACK',
};
