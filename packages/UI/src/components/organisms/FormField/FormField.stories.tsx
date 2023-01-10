import type { ComponentStory, ComponentMeta } from '@storybook/react';

import FormField from './FormField';
export default {
  title: 'Organisms/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const TemplateFormField: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args}></FormField>
);

export const DesktopDefaultOptional = TemplateFormField.bind({});
DesktopDefaultOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: false,
};

export const DesktopSuccessOptional = TemplateFormField.bind({});
DesktopSuccessOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: true,
};

export const DesktopErrorOptional = TemplateFormField.bind({});
DesktopErrorOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const DesktopDisabledOptional = TemplateFormField.bind({});
DesktopDisabledOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: true,
  error: '',
  touched: false,
};

export const DesktopDefaultRequired = TemplateFormField.bind({});
DesktopDefaultRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: false,
};

export const DesktopSuccessRequired = TemplateFormField.bind({});
DesktopSuccessRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: true,
};

export const DesktopErrorRequired = TemplateFormField.bind({});
DesktopErrorRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const DesktopDisabledRequired = TemplateFormField.bind({});
DesktopDisabledRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: true,
  error: '',
  touched: false,
};

export const MobileDefaultOptional = TemplateFormField.bind({});
MobileDefaultOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: false,
};

export const MobileSuccessOptional = TemplateFormField.bind({});
MobileSuccessOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: '',
  touched: true,
};

export const MobileErrorOptional = TemplateFormField.bind({});
MobileErrorOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const MobileDisabledOptional = TemplateFormField.bind({});
MobileDisabledOptional.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: false,
  disabled: true,
  error: '',
  touched: false,
};

export const MobileDefaultRequired = TemplateFormField.bind({});
MobileDefaultRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: false,
};

export const MobileSuccessRequired = TemplateFormField.bind({});
MobileSuccessRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: '',
  touched: true,
};

export const MobileErrorRequired = TemplateFormField.bind({});
MobileErrorRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: false,
  error: 'This is the error message',
  touched: true,
};

export const MobileDisabledRequired = TemplateFormField.bind({});
MobileDisabledRequired.args = {
  label: 'LABEL',
  placeholder: 'Placeholder',
  required: true,
  disabled: true,
  error: '',
  touched: false,
};
