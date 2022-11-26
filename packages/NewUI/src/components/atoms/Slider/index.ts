export { default } from './Slider';

export interface SliderProps {
  min: number;
  max: number;
  prefix?: string;
  initialValue?: number;
  onChange: (value: number) => void;
  withLabels: boolean;
}
