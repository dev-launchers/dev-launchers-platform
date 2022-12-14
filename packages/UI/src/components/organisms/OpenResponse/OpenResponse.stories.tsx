import type { ComponentStory, ComponentMeta } from '@storybook/react';

import OpenResponse from './OpenResponse';
export default {
  title: 'Organisms/OpenResponse',
  component: OpenResponse,
} as ComponentMeta<typeof OpenResponse>;

const TemplateOpenResponse: ComponentStory<typeof OpenResponse> = (args) => (
  <OpenResponse {...args}></OpenResponse>
);

export const DesktopDefaultOptional = TemplateOpenResponse.bind({});
DesktopDefaultOptional.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: false,
};

export const DesktopSuccessOptional = TemplateOpenResponse.bind({});
DesktopSuccessOptional.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: true,
};

export const DesktopErrorOptional = TemplateOpenResponse.bind({});
DesktopErrorOptional.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const DesktopDisabledOptional = TemplateOpenResponse.bind({});
DesktopDisabledOptional.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: true,
  error: '',
  touched: false,
};

export const DesktopDefaultRequired = TemplateOpenResponse.bind({});
DesktopDefaultRequired.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: false,
};

export const DesktopSuccessRequired = TemplateOpenResponse.bind({});
DesktopSuccessRequired.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: true,
};

export const DesktopErrorRequired = TemplateOpenResponse.bind({});
DesktopErrorRequired.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const DesktopDisabledRequired = TemplateOpenResponse.bind({});
DesktopDisabledRequired.args = {
  rows: 5,
  cols: 50,
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: true,
  error: '',
  touched: false,
};

export const MobileDefaultOptional = TemplateOpenResponse.bind({});
MobileDefaultOptional.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: false,
};

export const MobileSuccessOptional = TemplateOpenResponse.bind({});
MobileSuccessOptional.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: true,
};

export const MobileErrorOptional = TemplateOpenResponse.bind({});
MobileErrorOptional.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const MobileDisabledOptional = TemplateOpenResponse.bind({});
MobileDisabledOptional.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: false,
  disabled: true,
  error: '',
  touched: false,
};

export const MobileDefaultRequired = TemplateOpenResponse.bind({});
MobileDefaultRequired.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: false,
};

export const MobileSuccessRequired = TemplateOpenResponse.bind({});
MobileSuccessRequired.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: true,
};

export const MobileErrorRequired = TemplateOpenResponse.bind({});
MobileErrorRequired.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const MobileDisabledRequired = TemplateOpenResponse.bind({});
MobileDisabledRequired.args = {
  rows: 5,
  cols: 50,
  label: 'open response prompt goes here?',
  placeholder: 'Placeholder',
  required: true,
  disabled: true,
  error: '',
  touched: false,
};
