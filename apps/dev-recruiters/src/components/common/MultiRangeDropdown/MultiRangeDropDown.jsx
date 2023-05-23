import React from 'react';
import AppDropDown from '../AppDropDown';
import MultiRangeSlider from '../MultiRangeSlider';



export default function MultiRangeDropDown({ title, ...props }) {
  return (
    <AppDropDown title={title}>
      <MultiRangeSlider {...props} />
    </AppDropDown>
  );
}
