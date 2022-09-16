import React from 'react';
import AppDropDown from '../AppDropDown';
import MultiRangeSlider from '../MultiRangeSlider';

interface Props {
  title: string;
  min: number;
  max: number;
  onChange: (value: any) => void;
}

export default function MultiRangeDropDown({ title, ...props }: Props) {
  return (
    <AppDropDown title={title}>
      <MultiRangeSlider {...props} />
    </AppDropDown>
  );
}
