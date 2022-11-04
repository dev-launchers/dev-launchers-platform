import type { ComponentStory } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
};

const TemplateDropdown: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args}></Dropdown>
);

const options = [
  {
    text: 'option1',
    disabled: false,
  },
  {
    text: 'option2',
    disabled: false,
  },
  {
    text: 'option3',
    disabled: false,
  },
  {
    text: 'option4',
    disabled: false,
  },
];

export const WithRadio = TemplateDropdown.bind({});
WithRadio.args = {
  type: 'radio',
  title: 'skills',
  options,
  // typings for recieveValue function
  recieveValue(value) {
    console.log(value);
  },
};

export const WithRadioOpen = TemplateDropdown.bind({});
WithRadioOpen.args = {
  type: 'radio',
  title: 'skills',
  options,
  isOpen: true,
  recieveValue(value) {
    console.log(value);
  },
};

export const WithCheckbox = TemplateDropdown.bind({});
WithCheckbox.args = {
  type: 'checkbox',
  title: 'skills',
  options,
  recieveValue(value) {
    console.log(value);
  },
};

export const WithCheckboxOpen = TemplateDropdown.bind({});
WithCheckboxOpen.args = {
  type: 'checkbox',
  title: 'skills',
  options,
  isOpen: true,
  recieveValue(value) {
    console.log(value);
  },
};

export const RecieveValue = TemplateDropdown.bind({});
RecieveValue.args = {
  type: 'checkbox',
  title: 'skills',
  options,
  isOpen: true,
  recieveValue(value) {
    console.log(value);
  },
};
