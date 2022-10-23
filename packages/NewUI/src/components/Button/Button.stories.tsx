import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Button from './Button';

export default {
  title: 'Common Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const TemplateButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

const TemplateButtonDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} disabled>
    Button
  </Button>
);

export const Primary = TemplateButton.bind({});
Primary.args = { ...Primary.args };

export const PrimaryDisabled = TemplateButtonDisabled.bind({});
PrimaryDisabled.args = { ...PrimaryDisabled.args };

export const PrimaryLarge = TemplateButton.bind({});
PrimaryLarge.args = { ...PrimaryLarge.args };

export const PrimaryLargeDisabled = TemplateButtonDisabled.bind({});
PrimaryLargeDisabled.args = { ...PrimaryLargeDisabled.args };

export const Secondary = TemplateButton.bind({});
Secondary.args = { ...Secondary.args };

export const SecondaryDisabled = TemplateButtonDisabled.bind({});
SecondaryDisabled.args = { ...SecondaryDisabled.args };

export const SecondaryLarge = TemplateButton.bind({});
SecondaryLarge.args = { ...SecondaryLarge.args };

export const SecondaryLargeDisabled = TemplateButtonDisabled.bind({});
SecondaryLargeDisabled.args = { ...SecondaryLargeDisabled.args };

export const Alternative = TemplateButton.bind({});
Alternative.args = { ...Alternative.args };

export const AlternativeDisabled = TemplateButtonDisabled.bind({});
AlternativeDisabled.args = { ...AlternativeDisabled.args };

export const AlternativeLarge = TemplateButton.bind({});
AlternativeLarge.args = { ...AlternativeLarge.args };

export const AlternativeLargeDisabled = TemplateButtonDisabled.bind({});
AlternativeLargeDisabled.args = { ...AlternativeLargeDisabled.args };

Primary.args = {
  buttonType: 'primary',
  buttonSize: 'standard',
};

PrimaryDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'primary',
};

PrimaryLarge.args = {
  buttonType: 'primary',
  buttonSize: 'xl',
};

PrimaryLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'primary',
};

Secondary.args = {
  buttonType: 'secondary',
  buttonSize: 'standard',
};

SecondaryDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'secondary',
};

SecondaryLarge.args = {
  buttonType: 'secondary',
  buttonSize: 'xl',
};

SecondaryLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'secondary',
};

Alternative.args = {
  buttonType: 'alternative',
  buttonSize: 'standard',
};

AlternativeDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'alternative',
};

AlternativeLarge.args = {
  buttonType: 'alternative',
  buttonSize: 'xl',
};

AlternativeLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'alternative',
};
