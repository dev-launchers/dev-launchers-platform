import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import * as Zod from 'zod';
import FormField from './FormField';
export default {
  title: 'Organisms/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

const TemplateInput: ComponentStory<typeof FormField> = (args) => (
  <FormField {...args}></FormField>
);

export const FullName = TemplateInput.bind({});
FullName.args = {
  initialValue: '',
  label: 'fullname',
  placeholder: 'enter your full name',
  required: true,
  disabled: false,
  schema: Zod.object({
    fullname: Zod.string().trim().min(5),
  }),
};
export const FullNameDisabled = TemplateInput.bind({});
FullNameDisabled.args = {
  initialValue: '',
  label: 'fullname',
  placeholder: 'enter your full name',
  required: true,
  disabled: true,
  schema: Zod.object({
    fullname: Zod.string().trim().min(5).optional(),
  }),
};
export const Email = TemplateInput.bind({});
Email.args = {
  initialValue: '',
  label: 'email',
  placeholder: 'enter your email',
  required: true,
  disabled: false,
  schema: Zod.object({
    email: Zod.string().trim().email(),
  }),
};
