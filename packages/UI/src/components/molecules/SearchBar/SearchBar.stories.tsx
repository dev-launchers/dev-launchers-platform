import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const TemplateSearchBar: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args}></SearchBar>
);

export const SmallLight = TemplateSearchBar.bind({});
SmallLight.args = {
  width: 'small',
  placeholder: 'Placeholder Text',
  mode: 'light',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};

export const SmallDark = TemplateSearchBar.bind({});
SmallDark.args = {
  width: 'small',
  placeholder: 'Placeholder Text',
  mode: 'dark',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};

export const MediumLight = TemplateSearchBar.bind({});
MediumLight.args = {
  width: 'medium',
  placeholder: 'Placeholder Text',
  mode: 'light',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};

export const MediumDark = TemplateSearchBar.bind({});
MediumDark.args = {
  width: 'medium',
  placeholder: 'Placeholder Text',
  mode: 'dark',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};

export const MediumLightWithButton = TemplateSearchBar.bind({});
MediumLightWithButton.args = {
  width: 'medium',
  placeholder: 'Placeholder Text',
  mode: 'light',
  hasButton: true,
  onChange: (e) => console.log(e.target.value),
};

export const MediumDarkWithButton = TemplateSearchBar.bind({});
MediumDarkWithButton.args = {
  width: 'medium',
  placeholder: 'Placeholder Text',
  mode: 'dark',
  hasButton: true,
  onChange: (e) => console.log(e.target.value),
};

export const LargeLight = TemplateSearchBar.bind({});
LargeLight.args = {
  width: 'large',
  placeholder: 'Placeholder Text',
  mode: 'light',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};
export const LargeDark = TemplateSearchBar.bind({});
LargeDark.args = {
  width: 'large',
  placeholder: 'Placeholder Text',
  mode: 'dark',
  hasButton: false,
  onChange: (e) => console.log(e.target.value),
};

export const LargeLightWithButton = TemplateSearchBar.bind({});
LargeLightWithButton.args = {
  width: 'large',
  placeholder: 'Placeholder Text',
  mode: 'light',
  hasButton: true,
  onChange: (e) => console.log(e.target.value),
};
export const LargeDarkWithButton = TemplateSearchBar.bind({});
LargeDarkWithButton.args = {
  width: 'large',
  placeholder: 'Placeholder Text',
  mode: 'dark',
  hasButton: true,
  onChange: (e) => console.log(e.target.value),
};
