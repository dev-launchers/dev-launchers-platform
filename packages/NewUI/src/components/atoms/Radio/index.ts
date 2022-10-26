export { default } from './Radio';
import type { ChangeEvent } from 'react';

export interface RadioProps {
  disabled: boolean;
  label?: string;
  onChange: (e: ChangeEvent, label: string) => void;
}
