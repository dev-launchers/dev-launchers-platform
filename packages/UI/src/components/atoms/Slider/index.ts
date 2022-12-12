import type CSS from 'csstype';
export { default } from './Slider';

export interface SliderProps {
  min?: number;
  max?: number;
  postfix?: string;
  initialValue?: number;
  onChange: (value: number) => void;
  withLabels?: boolean;
  maxWidth?: CSS.Properties['maxWidth'];
}
